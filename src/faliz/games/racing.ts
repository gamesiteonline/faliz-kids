import { clamp, drawPup, drawStar, fillRound, heroText, label, PAL, sky } from "../engine/draw";
import { Game, type Diff, type Input } from "../engine/game";

class GoKart extends Game {
  lane = 1;
  cool = 0;
  dist = 0;
  goal = 1200;
  cars: { lane: number; z: number }[] = [];
  spawn = 0;
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.goal = diff === "beginner" ? 900 : diff === "advanced" ? 1600 : 1200;
    this.lane = 1;
    this.dist = 0;
    this.cars = [];
    this.spawn = 0.4;
    this.info = "Change lanes and pass the other karts.";
  }
  update(dt: number, input: Input) {
    this.cool -= dt;
    if (this.cool <= 0 && Math.abs(input.ax) > 0.4) {
      this.lane = clamp(this.lane + (input.ax > 0 ? 1 : -1), 0, 2);
      this.cool = 0.16;
    }
    const speed = 220 * this.rate;
    this.dist += speed * dt;
    this.spawn -= dt;
    if (this.spawn <= 0) {
      this.spawn = (this.diff === "advanced" ? 0.7 : 1.05) / Math.sqrt(this.rate);
      this.cars.push({ lane: Math.floor(Math.random() * 3), z: 1 });
    }
    this.cars = this.cars.filter((c) => {
      c.z -= dt * 0.45 * this.rate;
      if (c.z < 0.08 && c.z > 0 && c.lane === this.lane) {
        c.z = -1;
        this.hurt();
        return false;
      }
      return c.z > -0.05;
    });
    this.progress = Math.min(1, this.dist / this.goal);
    this.points = Math.floor(this.dist / 12);
    if (this.dist >= this.goal) {
      this.points += 40;
      this.win();
    }
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#9ec2ff", "#d5e4ff");
    const roadTop = 120;
    const roadBot = this.h - this.chromeBottom - 20;
    ctx.fillStyle = "#4a5568";
    ctx.beginPath();
    ctx.moveTo(this.w * 0.35, roadTop);
    ctx.lineTo(this.w * 0.65, roadTop);
    ctx.lineTo(this.w * 0.95, roadBot);
    ctx.lineTo(this.w * 0.05, roadBot);
    ctx.closePath();
    ctx.fill();
    for (const c of this.cars) {
      const y = roadTop + (1 - c.z) * (roadBot - roadTop) * 0.85;
      const span = 20 + (1 - c.z) * (this.w * 0.28);
      const x = this.w / 2 + (c.lane - 1) * span;
      fillRound(ctx, x - 16, y, 32, 18 + (1 - c.z) * 20, 6, PAL.berry);
    }
    const py = roadBot - 50;
    const px = this.w / 2 + (this.lane - 1) * (this.w * 0.26);
    fillRound(ctx, px - 22, py, 44, 28, 8, PAL.gold);
    label(ctx, "You", px, py + 14, 12, PAL.ink);
    heroText(ctx, `${Math.floor(this.progress * 100)}%`, this.w / 2, 78, 28, PAL.foam);
  }
}

class MonsterTruck extends Game {
  x = 80;
  y = 0;
  vy = 0;
  grounded = true;
  dist = 0;
  goal = 1600;
  obs: { x: number; w: number; h: number; gap: boolean }[] = [];
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.goal = diff === "beginner" ? 1200 : 1800;
    this.x = 90;
    this.dist = 0;
    this.vy = 0;
    this.grounded = true;
    this.y = this.ground();
    this.obs = [];
    let cursor = 500;
    for (let i = 0; i < 14; i++) {
      const gap = i % 3 === 2;
      this.obs.push({ x: cursor, w: gap ? 90 : 50 + (i % 2) * 20, h: gap ? 0 : 36 + (i % 3) * 14, gap });
      cursor += diff === "beginner" ? 280 : 230;
    }
    this.info = "Tap to jump rocks and gaps.";
  }
  ground() {
    return this.h - this.chromeBottom - 80;
  }
  update(dt: number, input: Input) {
    const floor = this.ground();
    if ((input.flapJust || input.justDown) && this.grounded) {
      this.vy = -560;
      this.grounded = false;
      this.tapJump();
    }
    this.vy += 1400 * dt;
    this.y += this.vy * dt;
    const speed = 200 * this.rate;
    this.dist += speed * dt;
    for (const o of this.obs) o.x -= speed * dt;
    const overGap = this.obs.some((o) => o.gap && this.x > o.x && this.x < o.x + o.w);
    if (this.y >= floor && !overGap) {
      this.y = floor;
      this.vy = 0;
      this.grounded = true;
    } else if (this.y > floor + 70) {
      this.hurt();
      this.y = floor;
      this.grounded = true;
      this.vy = 0;
    } else this.grounded = false;
    for (const o of this.obs) {
      if (o.gap) continue;
      const hit = this.x > o.x && this.x < o.x + o.w && this.y > floor - o.h + 8;
      if (hit) {
        this.hurt();
        o.x = -999;
      }
    }
    this.progress = Math.min(1, this.dist / this.goal);
    this.points = Math.floor(this.dist / 16);
    if (this.dist >= this.goal) {
      this.points += 36;
      this.win();
    }
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#9ad8ff", "#c6f0b0");
    const floor = this.ground();
    ctx.fillStyle = "#6aaa4e";
    ctx.fillRect(0, floor + 20, this.w, this.h);
    ctx.fillStyle = "#8d6a45";
    for (const o of this.obs) {
      if (o.x < -100 || o.x > this.w + 40) continue;
      if (o.gap) ctx.fillRect(o.x, floor + 20, o.w, 40);
      else fillRound(ctx, o.x, floor + 20 - o.h, o.w, o.h, 6, "#8d6a45");
    }
    fillRound(ctx, this.x - 28, this.y - 8, 56, 22, 6, PAL.royal);
    ctx.fillStyle = PAL.ink;
    ctx.beginPath();
    ctx.arc(this.x - 14, this.y + 16, 8, 0, Math.PI * 2);
    ctx.arc(this.x + 14, this.y + 16, 8, 0, Math.PI * 2);
    ctx.fill();
  }
}

class AnimalRace extends Game {
  me = 0;
  others = [0, 0];
  speeds = [12, 13];
  goal = 100;
  reset(diff: Diff) {
    this.begin(diff, 1);
    this.lives = 1;
    this.me = 0;
    this.goal = 100;
    const base = diff === "beginner" ? 9 : diff === "advanced" ? 15 : 12;
    this.speeds = [base, base + 1.5];
    this.others = [0, 0];
    this.info = "Tap Run as fast as you can.";
  }
  update(dt: number, input: Input) {
    this.me += 8 * dt;
    if (input.flapJust || input.justDown) {
      this.me += this.diff === "beginner" ? 6 : 4.5;
      this.fx.push("tap");
    }
    this.others[0] = (this.others[0] ?? 0) + this.speeds[0]! * dt;
    this.others[1] = (this.others[1] ?? 0) + this.speeds[1]! * dt;
    this.points = Math.floor(this.me);
    this.progress = Math.min(1, this.me / this.goal);
    const bestOther = Math.max(this.others[0] ?? 0, this.others[1] ?? 0);
    if (this.me >= this.goal) {
      this.addScore(40, this.w * 0.7, 120);
      this.win();
    } else if (bestOther >= this.goal) this.hurt();
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#d8f5c8", "#fff6e4");
    const lanes = [
      { name: "Faliz", v: this.me, color: PAL.orange },
      { name: "Miso", v: this.others[0] ?? 0, color: PAL.gold },
      { name: "Nib", v: this.others[1] ?? 0, color: PAL.inkSoft },
    ];
    lanes.forEach((lane, i) => {
      const y = 150 + i * 90;
      ctx.fillStyle = "rgba(255,255,255,0.45)";
      ctx.fillRect(20, y, this.w - 40, 16);
      const x = 30 + (Math.min(lane.v, this.goal) / this.goal) * (this.w - 90);
      fillRound(ctx, x, y - 22, 36, 28, 8, lane.color);
      label(ctx, lane.name, x + 18, y - 32, 14, PAL.ink);
    });
    drawStar(ctx, this.w - 36, 130, 12);
  }
}

class OffRoad extends Game {
  x = 0;
  y = 0;
  flags: { x: number; y: number; got: boolean }[] = [];
  rocks: { x: number; y: number }[] = [];
  next = 0;
  left = 45;
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.x = this.w / 2;
    this.y = this.h * 0.7;
    const n = diff === "beginner" ? 4 : diff === "advanced" ? 7 : 5;
    this.flags = Array.from({ length: n }, () => ({
      x: 40 + Math.random() * (this.w - 80),
      y: 100 + Math.random() * (this.h - this.chromeBottom - 180),
      got: false,
    }));
    this.rocks = Array.from({ length: diff === "advanced" ? 7 : 4 }, () => ({
      x: 30 + Math.random() * (this.w - 60),
      y: 100 + Math.random() * (this.h - this.chromeBottom - 160),
    }));
    this.next = 0;
    this.left = diff === "beginner" ? 70 : diff === "advanced" ? 40 : 55;
    this.info = "Drive through the flags in order.";
  }
  update(dt: number, input: Input) {
    this.left -= dt;
    const sp = 200;
    this.x = clamp(this.x + input.ax * sp * dt, 20, this.w - 20);
    this.y = clamp(this.y + input.ay * sp * dt, 80, this.h - this.chromeBottom - 24);
    const flag = this.flags[this.next];
    if (flag && !flag.got && Math.hypot(flag.x - this.x, flag.y - this.y) < 28) {
      flag.got = true;
      this.next += 1;
      this.addScore(18, flag.x, flag.y);
      this.progress = this.next / this.flags.length;
      if (this.next >= this.flags.length) {
        this.addScore(36, this.x, this.y);
        this.win();
      }
    }
    for (const r of this.rocks) {
      if (Math.hypot(r.x - this.x, r.y - this.y) < 26) {
        this.hurt();
        this.x = clamp(this.x + (this.x - r.x), 20, this.w - 20);
      }
    }
    this.info = `Flag ${Math.min(this.next + 1, this.flags.length)} of ${this.flags.length}. Time ${Math.max(0, Math.ceil(this.left))}s`;
    if (this.left <= 0) {
      this.mode = "lose";
      this.fx.push("lose");
    }
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#c6ec9a", "#8d6a45");
    for (const r of this.rocks) {
      ctx.fillStyle = "#6b7280";
      ctx.beginPath();
      ctx.arc(r.x, r.y, 16, 0, Math.PI * 2);
      ctx.fill();
    }
    this.flags.forEach((f, i) => {
      if (f.got) return;
      ctx.fillStyle = i === this.next ? PAL.berry : PAL.foam;
      ctx.fillRect(f.x - 3, f.y - 24, 6, 24);
      ctx.fillStyle = i === this.next ? PAL.gold : PAL.royal;
      ctx.beginPath();
      ctx.moveTo(f.x, f.y - 24);
      ctx.lineTo(f.x + 16, f.y - 16);
      ctx.lineTo(f.x, f.y - 8);
      ctx.fill();
    });
    fillRound(ctx, this.x - 16, this.y - 10, 32, 18, 5, PAL.royal);
  }
}

class Formula extends Game {
  phaseIn: "lights" | "race" = "lights";
  light = 0;
  go = false;
  lane = 1;
  cool = 0;
  gates = 0;
  goal = 8;
  spawn = 0;
  obs: { lane: number; y: number }[] = [];
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.phaseIn = "lights";
    this.light = 0;
    this.go = false;
    this.lane = 1;
    this.gates = 0;
    this.goal = diff === "beginner" ? 6 : 8;
    this.obs = [];
    this.spawn = 0.2;
    this.info = "Wait for green, then tap.";
  }
  update(dt: number, input: Input) {
    if (this.phaseIn === "lights") {
      this.light += dt;
      const greenAt = 1.6;
      if ((input.justDown || input.actionJust) && this.light < greenAt) {
        this.hurt();
        this.light = 0;
        this.info = "Too soon. Wait for green.";
        return;
      }
      if ((input.justDown || input.actionJust) && this.light >= greenAt) {
        const react = this.light - greenAt;
        this.addScore(react < 0.35 ? 40 : 20, this.w / 2, 140);
        this.phaseIn = "race";
        this.info = "Steer through the gates.";
      }
      if (this.light > 1.5) this.info = "GREEN — tap now!";
      return;
    }
    this.cool -= dt;
    if (this.cool <= 0 && Math.abs(input.ax) > 0.4) {
      this.lane = clamp(this.lane + (input.ax > 0 ? 1 : -1), 0, 2);
      this.cool = 0.14;
    }
    this.spawn -= dt;
    if (this.spawn <= 0) {
      this.spawn = 0.85;
      const open = Math.floor(Math.random() * 3);
      for (let i = 0; i < 3; i++) if (i !== open) this.obs.push({ lane: i, y: 80 });
    }
    this.obs = this.obs.filter((o) => {
      o.y += dt * 180 * this.rate;
      if (o.y > this.h - this.chromeBottom - 80 && o.y < this.h - this.chromeBottom - 40 && o.lane === this.lane) {
        this.hurt();
        return false;
      }
      if (o.y > this.h - this.chromeBottom - 40 && o.lane !== this.lane) return o.y < this.h;
      return o.y < this.h;
    });
    this.points += dt * 8;
    this.gates += dt;
    this.progress = Math.min(1, this.gates / this.goal);
    if (this.gates >= this.goal) {
      this.addScore(30, this.w / 2, 80);
      this.win();
    }
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#1b2a4a", "#314e8a");
    if (this.phaseIn === "lights") {
      const on = Math.min(3, Math.floor(this.light / 0.5));
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(this.w / 2 - 50 + i * 50, this.h / 2, 16, 0, Math.PI * 2);
        ctx.fillStyle = i < on ? (this.light > 1.5 ? PAL.leaf : PAL.berry) : PAL.ink;
        ctx.fill();
      }
      return;
    }
    const py = this.h - this.chromeBottom - 70;
    for (let i = 0; i < 3; i++) {
      ctx.fillStyle = "rgba(255,255,255,0.08)";
      ctx.fillRect(20 + i * ((this.w - 40) / 3), 80, (this.w - 50) / 3, py);
    }
    for (const o of this.obs) {
      const lw = (this.w - 40) / 3;
      fillRound(ctx, 24 + o.lane * lw, o.y, lw - 16, 22, 6, PAL.berry);
    }
    const lw = (this.w - 40) / 3;
    fillRound(ctx, 24 + this.lane * lw + 10, py, lw - 36, 26, 6, PAL.gold);
  }
}

export function goKart() { return new GoKart(); }
export function monsterTruck() { return new MonsterTruck(); }
export function animalRacing() { return new AnimalRace(); }
export function offRoad() { return new OffRoad(); }
export function miniFormula() { return new Formula(); }
