import { clamp, drawStar, fillRound, heroText, label, meterBar, PAL, sky } from "../engine/draw";
import { Game, type Diff, type Input } from "../engine/game";

class SpaceExplorer extends Game {
  x = 0;
  y = 0;
  fuel = 1;
  cans: { x: number; y: number }[] = [];
  rocks: { x: number; y: number; vx: number }[] = [];
  tx = 0;
  ty = 0;
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.x = 50;
    this.y = this.h / 2;
    this.fuel = diff === "beginner" ? 1 : 0.8;
    this.tx = this.w - 50;
    this.ty = 140;
    this.cans = Array.from({ length: 3 }, () => ({
      x: 80 + Math.random() * (this.w - 140),
      y: 100 + Math.random() * (this.h - 240),
    }));
    this.rocks = Array.from({ length: diff === "advanced" ? 6 : 4 }, () => ({
      x: Math.random() * this.w,
      y: 90 + Math.random() * (this.h - 200),
      vx: 20 + Math.random() * 40,
    }));
    this.info = "Fly to the station. Moving spends fuel.";
  }
  update(dt: number, input: Input) {
    const moving = Math.abs(input.ax) + Math.abs(input.ay) > 0.15;
    if (moving && this.fuel > 0) {
      this.x = clamp(this.x + input.ax * 170 * dt, 16, this.w - 16);
      this.y = clamp(this.y + input.ay * 170 * dt, 70, this.h - this.chromeBottom - 16);
      this.fuel -= dt * 0.12 * this.rate;
    }
    this.cans = this.cans.filter((c) => {
      if (Math.hypot(c.x - this.x, c.y - this.y) < 24) {
        this.fuel = Math.min(1, this.fuel + 0.4);
        this.fx.push("ok");
        return false;
      }
      return true;
    });
    for (const r of this.rocks) {
      r.x += r.vx * dt;
      if (r.x > this.w) r.x = -10;
      if (Math.hypot(r.x - this.x, r.y - this.y) < 22) {
        this.hurt();
        r.x = -20;
      }
    }
    this.progress = 1 - Math.min(1, Math.hypot(this.tx - this.x, this.ty - this.y) / this.w);
    this.info = `Fuel ${Math.round(Math.max(0, this.fuel) * 100)}%`;
    if (this.fuel <= 0) {
      this.mode = "lose";
      this.fx.push("lose");
    }
    if (Math.hypot(this.tx - this.x, this.ty - this.y) < 28) {
      this.addScore(80, this.tx, this.ty);
      this.win();
    }
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#10182e", "#24315f");
    for (let i = 0; i < 20; i++) drawStar(ctx, (i * 97) % this.w, (i * 53) % 60 + 70, 3, PAL.foam);
    for (const c of this.cans) fillRound(ctx, c.x - 8, c.y - 12, 16, 24, 3, PAL.gold);
    for (const r of this.rocks) {
      ctx.fillStyle = "#9aa3b5";
      ctx.beginPath();
      ctx.arc(r.x, r.y, 12, 0, Math.PI * 2);
      ctx.fill();
    }
    fillRound(ctx, this.tx - 16, this.ty - 16, 32, 32, 6, PAL.leaf);
    label(ctx, "Dock", this.tx, this.ty, 10, PAL.ink);
    fillRound(ctx, this.x - 12, this.y - 8, 24, 16, 4, PAL.foam);
  }
}

class RocketBuilder extends Game {
  phaseIn: "build" | "fly" = "build";
  order = ["Engine", "Tank", "Nose"];
  placed: string[] = [];
  tray: string[] = [];
  x = 0;
  gates: { y: number; open: number; passed: boolean }[] = [];
  got = 0;
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.phaseIn = "build";
    this.placed = [];
    this.tray = [...this.order].sort(() => Math.random() - 0.5);
    this.x = this.w / 2;
    this.got = 0;
    this.gates = Array.from({ length: diff === "beginner" ? 5 : 7 }, (_, i) => ({
      y: -i * 220,
      open: 40 + Math.random() * (this.w - 120),
      passed: false,
    }));
    this.info = "Tap parts from engine, then tank, then nose.";
  }
  update(dt: number, input: Input) {
    if (this.phaseIn === "build") {
      if (!input.justDown) return;
      const w = 110;
      const y = this.h - this.chromeBottom - 80;
      const i = this.tray.findIndex((_, idx) => {
        const x = 16 + idx * (w + 8);
        return input.px > x && input.px < x + w && input.py > y && input.py < y + 48;
      });
      if (i < 0) return;
      const part = this.tray[i]!;
      if (part !== this.order[this.placed.length]) {
        this.hurt();
        return;
      }
      this.tray.splice(i, 1);
      this.placed.push(part);
      this.addScore(15, this.w / 2, 160);
      if (this.placed.length === 3) {
        this.phaseIn = "fly";
        this.info = "Steer through the rings.";
      }
      return;
    }
    this.x = clamp(this.x + input.ax * 220 * dt, 30, this.w - 30);
    const speed = 140 * this.rate;
    for (const g of this.gates) {
      g.y += speed * dt;
      if (!g.passed && g.y > this.h * 0.62) {
        g.passed = true;
        const miss = Math.abs(this.x - (g.open + 30)) > 46;
        if (miss) this.hurt();
        else {
          this.got += 1;
          this.addScore(12, this.x, g.y);
        }
      }
    }
    this.progress = this.got / this.gates.length;
    if (this.got >= this.gates.length) {
      this.addScore(24, this.x, 100);
      this.win();
    }
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#141b36", "#3a4c86");
    if (this.phaseIn === "build") {
      this.placed.forEach((p, i) => {
        fillRound(ctx, this.w / 2 - 40, 220 - i * 48, 80, 40, 8, PAL.gold);
        label(ctx, p, this.w / 2, 240 - i * 48, 14, PAL.ink);
      });
      const y = this.h - this.chromeBottom - 80;
      this.tray.forEach((p, i) => {
        fillRound(ctx, 16 + i * 118, y, 110, 48, 10, PAL.foam);
        label(ctx, p, 16 + i * 118 + 55, y + 24, 14, PAL.ink);
      });
      return;
    }
    for (const g of this.gates) {
      ctx.strokeStyle = PAL.gold;
      ctx.lineWidth = 6;
      ctx.strokeRect(g.open, g.y, 60, 16);
    }
    fillRound(ctx, this.x - 12, this.h * 0.62, 24, 40, 6, PAL.foam);
  }
}

class PlanetHop extends Game {
  meter = 0;
  dir = 1;
  hop = 0;
  goal = 4;
  good0 = 0.4;
  good1 = 0.62;
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.goal = 4;
    this.hop = 0;
    this.meter = 0;
    this.dir = 1;
    const width = diff === "beginner" ? 0.28 : diff === "advanced" ? 0.12 : 0.18;
    this.good0 = 0.55 - width / 2;
    this.good1 = 0.55 + width / 2;
    this.info = "Tap while the marker is in the green.";
  }
  update(dt: number, input: Input) {
    this.meter += dt * this.dir * (0.7 + this.rate);
    if (this.meter > 1) {
      this.meter = 1;
      this.dir = -1;
    }
    if (this.meter < 0) {
      this.meter = 0;
      this.dir = 1;
    }
    if (!(input.justDown || input.actionJust)) return;
    if (this.meter >= this.good0 && this.meter <= this.good1) {
      this.hop += 1;
      this.addScore(22, this.w / 2, 160);
      this.progress = this.hop / this.goal;
      if (this.hop >= this.goal) {
        this.addScore(28, this.w / 2, 120);
        this.win();
      }
    } else this.hurt();
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#12182e", "#2a3566");
    const colors = [PAL.lagoon, PAL.leaf, PAL.gold, PAL.berry, PAL.foam];
    for (let i = 0; i <= this.goal; i++) {
      const x = 40 + (i * (this.w - 80)) / this.goal;
      ctx.fillStyle = colors[i % colors.length]!;
      ctx.beginPath();
      ctx.arc(x, this.h * 0.42, i === this.hop ? 22 : 14, 0, Math.PI * 2);
      ctx.fill();
    }
    meterBar(ctx, 30, this.h - this.chromeBottom - 70, this.w - 60, 18, this.meter, this.good0, this.good1);
    heroText(ctx, `${this.hop}/${this.goal}`, this.w / 2, 90, 28, PAL.foam);
  }
}

class Asteroids extends Game {
  x = 0;
  y = 0;
  rocks: { x: number; y: number; vx: number; vy: number }[] = [];
  stars: { x: number; y: number }[] = [];
  left = 25;
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.x = this.w / 2;
    this.y = this.h / 2;
    this.left = diff === "beginner" ? 20 : diff === "advanced" ? 30 : 25;
    this.rocks = Array.from({ length: diff === "advanced" ? 7 : 5 }, () => ({
      x: Math.random() * this.w,
      y: Math.random() * this.h * 0.4,
      vx: -40 - Math.random() * 80,
      vy: 20 + Math.random() * 50,
    }));
    this.stars = Array.from({ length: 3 }, () => ({ x: Math.random() * this.w, y: 90 + Math.random() * 200 }));
    this.info = "Survive the shower.";
  }
  update(dt: number, input: Input) {
    this.left -= dt;
    this.x = clamp(this.x + input.ax * 220 * dt, 16, this.w - 16);
    this.y = clamp(this.y + input.ay * 220 * dt, 70, this.h - this.chromeBottom - 16);
    for (const r of this.rocks) {
      r.x += r.vx * dt * this.rate;
      r.y += r.vy * dt;
      if (r.x < -20) r.x = this.w + 10;
      if (r.y > this.h) r.y = 70;
      if (Math.hypot(r.x - this.x, r.y - this.y) < 24) {
        this.hurt();
        r.x = this.w + 20;
      }
    }
    this.stars = this.stars.filter((s) => {
      if (Math.hypot(s.x - this.x, s.y - this.y) < 20) {
        this.addScore(10, s.x, s.y);
        return false;
      }
      return true;
    });
    this.progress = 1 - Math.max(0, this.left) / 25;
    this.info = `Hold on for ${Math.max(0, Math.ceil(this.left))}s`;
    if (this.left <= 0) {
      this.addScore(40, this.x, this.y);
      this.win();
    }
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#070b16", "#1c2748");
    for (const s of this.stars) drawStar(ctx, s.x, s.y, 8);
    for (const r of this.rocks) {
      ctx.fillStyle = "#b7c0d4";
      ctx.beginPath();
      ctx.arc(r.x, r.y, 14, 0, Math.PI * 2);
      ctx.fill();
    }
    fillRound(ctx, this.x - 10, this.y - 10, 20, 20, 4, PAL.gold);
  }
}

class AlienRescue extends Game {
  x = 0;
  aliens: { x: number; beamed: boolean }[] = [];
  rocks: { x: number; y: number; vy: number }[] = [];
  got = 0;
  goal = 6;
  beam = 0;
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.goal = diff === "beginner" ? 5 : 6;
    this.x = this.w / 2;
    this.got = 0;
    this.beam = 0;
    this.aliens = Array.from({ length: this.goal }, () => ({
      x: 40 + Math.random() * (this.w - 80),
      beamed: false,
    }));
    this.rocks = [];
    this.info = "Line up and tap Beam.";
  }
  update(dt: number, input: Input) {
    this.x = clamp(this.x + input.ax * 220 * dt, 24, this.w - 24);
    if (Math.random() < dt * 0.8 * this.rate) this.rocks.push({ x: Math.random() * this.w, y: -10, vy: 90 + 40 * this.rate });
    const ground = this.h - this.chromeBottom - 70;
    const target = this.aliens.find((a) => !a.beamed && Math.abs(a.x - this.x) < 28);
    if ((input.action || input.actionJust) && target) this.beam += dt;
    else this.beam = 0;
    if (this.beam > 0.45 && target) {
      target.beamed = true;
      this.beam = 0;
      this.got += 1;
      this.addScore(16, target.x, ground);
      this.progress = this.got / this.goal;
      if (this.got >= this.goal) {
        this.addScore(30, this.x, 80);
        this.win();
      }
    }
    this.rocks = this.rocks.filter((r) => {
      r.y += r.vy * dt;
      if (Math.hypot(r.x - this.x, r.y - 110) < 20) {
        this.hurt();
        return false;
      }
      return r.y < this.h;
    });
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#10182b", "#241848");
    const ground = this.h - this.chromeBottom - 70;
    ctx.fillStyle = "#3d6b4f";
    ctx.fillRect(0, ground + 10, this.w, 40);
    for (const a of this.aliens) {
      if (a.beamed) continue;
      ctx.fillStyle = PAL.leaf;
      ctx.beginPath();
      ctx.arc(a.x, ground, 12, 0, Math.PI * 2);
      ctx.fill();
    }
    for (const r of this.rocks) {
      ctx.fillStyle = "#d0d6e2";
      ctx.beginPath();
      ctx.arc(r.x, r.y, 8, 0, Math.PI * 2);
      ctx.fill();
    }
    fillRound(ctx, this.x - 18, 96, 36, 16, 4, PAL.foam);
    if (this.beam > 0) {
      ctx.strokeStyle = PAL.gold;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(this.x, 112);
      ctx.lineTo(this.x, ground);
      ctx.stroke();
    }
  }
}

export function spaceExplorer() { return new SpaceExplorer(); }
export function rocketBuilder() { return new RocketBuilder(); }
export function planetHopper() { return new PlanetHop(); }
export function asteroidDodger() { return new Asteroids(); }
export function alienRescue() { return new AlienRescue(); }
