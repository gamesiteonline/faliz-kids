import { drawPup, fillRound, hitRect, label, PAL, sky } from "../engine/draw";
import { Game, type Diff, type Input } from "../engine/game";

class MagicForest extends Game {
  seq: number[] = [];
  show = 0;
  at = 0;
  playing = false;
  round = 0;
  goal = 4;
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.goal = diff === "beginner" ? 3 : diff === "advanced" ? 5 : 4;
    this.round = 0;
    this.fresh();
  }
  fresh() {
    this.seq = Array.from({ length: 2 + this.round }, () => Math.floor(Math.random() * 4));
    this.show = 0;
    this.at = 0;
    this.playing = false;
    this.info = "Watch the fireflies.";
  }
  flowers() {
    return [0, 1, 2, 3].map((i) => ({
      x: this.w * (0.2 + (i % 2) * 0.6),
      y: 180 + Math.floor(i / 2) * 140,
      i,
    }));
  }
  update(dt: number, input: Input) {
    if (!this.playing) {
      this.show += dt;
      if (this.show > 0.6 * (this.seq.length + 1)) {
        this.playing = true;
        this.info = "Tap the flowers in order.";
      }
      return;
    }
    if (!input.justDown) return;
    const hit = this.flowers().find((f) => Math.hypot(input.px - f.x, input.py - f.y) < 36);
    if (!hit) return;
    if (hit.i !== this.seq[this.at]) {
      this.hurt();
      this.at = 0;
      this.playing = false;
      this.show = 0;
      return;
    }
    this.at += 1;
    this.fx.push("ok");
    if (this.at >= this.seq.length) {
      this.round += 1;
      this.addScore(20, hit.x, hit.y);
      this.progress = this.round / this.goal;
      if (this.round >= this.goal) {
        this.addScore(30, this.w / 2, 90);
        this.win();
      } else this.fresh();
    }
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#1d3b32", "#10241c");
    const step = 0.6;
    const idx = this.playing ? -1 : Math.floor(this.show / step);
    const lit = !this.playing && idx >= 0 && idx < this.seq.length && this.show % step < 0.4 ? this.seq[idx] : -1;
    for (const f of this.flowers()) {
      ctx.fillStyle = lit === f.i ? PAL.gold : PAL.leaf;
      ctx.beginPath();
      ctx.arc(f.x, f.y, 28, 0, Math.PI * 2);
      ctx.fill();
      if (lit === f.i) drawPup(ctx, f.x, f.y, 12, "wow");
    }
  }
}

class Wizard extends Game {
  rune = 0;
  left = 3;
  got = 0;
  goal = 8;
  names = ["Sun", "Moon", "Star", "Drop"];
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.goal = diff === "beginner" ? 6 : 8;
    this.got = 0;
    this.next();
  }
  next() {
    this.rune = Math.floor(Math.random() * 4);
    this.left = this.diff === "advanced" ? 1.6 : this.diff === "beginner" ? 3.2 : 2.3;
    this.info = "Tap the matching rune.";
  }
  update(dt: number, input: Input) {
    this.left -= dt * this.rate;
    if (this.left <= 0) {
      this.hurt();
      this.next();
      return;
    }
    if (!input.justDown) return;
    const rects = [0, 1, 2, 3].map((i) => ({
      x: 16 + (i % 2) * ((this.w - 20) / 2),
      y: this.h / 2 + Math.floor(i / 2) * 70,
      w: (this.w - 40) / 2,
      h: 60,
    }));
    const i = rects.findIndex((r) => hitRect(input.px, input.py, r));
    if (i < 0) return;
    if (i === this.rune) {
      this.got += 1;
      this.addScore(12, rects[i]!.x, rects[i]!.y);
      this.progress = this.got / this.goal;
      if (this.got >= this.goal) {
        this.addScore(30, this.w / 2, 100);
        this.win();
      } else this.next();
    } else this.hurt();
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#2a1848", "#120c22");
    label(ctx, this.names[this.rune] ?? "", this.w / 2, 110, 36, PAL.gold);
    label(ctx, `${Math.ceil(this.left)}s`, this.w / 2, 150, 16, PAL.foam);
    const colors = [PAL.gold, PAL.lagoon, PAL.berry, PAL.leaf];
    for (let i = 0; i < 4; i++) {
      const r = {
        x: 16 + (i % 2) * ((this.w - 20) / 2),
        y: this.h / 2 + Math.floor(i / 2) * 70,
        w: (this.w - 40) / 2,
        h: 60,
      };
      fillRound(ctx, r.x, r.y, r.w, r.h, 12, colors[i]!);
      label(ctx, this.names[i]!, r.x + r.w / 2, r.y + 30, 16, PAL.ink);
    }
  }
}

class Dragon extends Game {
  y = 200;
  vy = 0;
  rocks: { x: number; y: number }[] = [];
  targets: { x: number; y: number }[] = [];
  spawn = 0;
  got = 0;
  goal = 8;
  fire = 0;
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.goal = diff === "beginner" ? 6 : 8;
    this.y = this.h / 2;
    this.vy = 0;
    this.got = 0;
    this.rocks = [];
    this.targets = [];
    this.spawn = 0.2;
    this.info = "Hold to rise. Tap Fire on the targets.";
  }
  update(dt: number, input: Input) {
    if (input.flap) this.vy = -260;
    this.vy += 700 * dt;
    this.y += this.vy * dt;
    if (input.actionJust) {
      this.fire = 0.25;
      this.fx.push("tap");
      const hit = this.targets.findIndex((t) => t.x < 180 && Math.abs(t.y - this.y) < 30);
      if (hit >= 0) {
        const t = this.targets[hit]!;
        this.targets.splice(hit, 1);
        this.got += 1;
        this.addScore(14, t.x, t.y);
      }
    }
    this.fire = Math.max(0, this.fire - dt);
    this.spawn -= dt;
    const speed = 150 * this.rate;
    if (this.spawn <= 0) {
      this.spawn = 0.9;
      if (Math.random() < 0.5) this.targets.push({ x: this.w + 10, y: 100 + Math.random() * (this.h - 220) });
      else this.rocks.push({ x: this.w + 10, y: 90 + Math.random() * (this.h - 200) });
    }
    for (const t of this.targets) t.x -= speed * dt;
    for (const r of this.rocks) r.x -= speed * dt;
    this.targets = this.targets.filter((t) => t.x > -20);
    this.rocks = this.rocks.filter((r) => {
      if (Math.hypot(r.x - 70, r.y - this.y) < 24) {
        this.hurt();
        return false;
      }
      return r.x > -20;
    });
    if (this.y < 60 || this.y > this.h - 40) {
      this.hurt();
      this.y = this.h / 2;
    }
    this.progress = this.got / this.goal;
    if (this.got >= this.goal) {
      this.addScore(28, 70, this.y);
      this.win();
    }
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#ffd0ea", "#c7b0ff");
    for (const t of this.targets) {
      ctx.fillStyle = PAL.gold;
      ctx.beginPath();
      ctx.arc(t.x, t.y, 12, 0, Math.PI * 2);
      ctx.fill();
    }
    for (const r of this.rocks) fillRound(ctx, r.x - 12, r.y - 12, 24, 24, 4, PAL.ink);
    drawPup(ctx, 70, this.y, 20, "wow");
    if (this.fire > 0) {
      ctx.fillStyle = PAL.orange;
      ctx.fillRect(90, this.y - 6, 70, 12);
    }
  }
}

class Fairy extends Game {
  flowers: { x: number; y: number; life: number }[] = [];
  spawn = 0.2;
  got = 0;
  goal = 10;
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.goal = diff === "beginner" ? 8 : 10;
    this.flowers = [];
    this.got = 0;
    this.spawn = 0.2;
    this.info = "Tap flowers before they wilt.";
  }
  update(dt: number, input: Input) {
    this.spawn -= dt;
    if (this.spawn <= 0) {
      this.spawn = (this.diff === "advanced" ? 0.7 : 1) / this.rate;
      this.flowers.push({
        x: 30 + Math.random() * (this.w - 60),
        y: 100 + Math.random() * (this.h - this.chromeBottom - 160),
        life: this.diff === "beginner" ? 3.2 : 2.3,
      });
    }
    this.flowers = this.flowers.filter((f) => {
      f.life -= dt;
      if (f.life <= 0) {
        this.hurt();
        return false;
      }
      return true;
    });
    if (input.justDown) {
      const i = this.flowers.findIndex((f) => Math.hypot(input.px - f.x, input.py - f.y) < 28);
      if (i >= 0) {
        const f = this.flowers[i]!;
        this.flowers.splice(i, 1);
        this.got += 1;
        this.addScore(10, f.x, f.y);
        this.progress = this.got / this.goal;
        if (this.got >= this.goal) {
          this.addScore(30, this.w / 2, 80);
          this.win();
        }
      }
    }
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#e9ffd8", "#fff0f8");
    for (const f of this.flowers) {
      ctx.fillStyle = f.life < 0.8 ? PAL.inkSoft : PAL.berry;
      ctx.beginPath();
      ctx.arc(f.x, f.y, 16, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = PAL.gold;
      ctx.beginPath();
      ctx.arc(f.x, f.y, 5, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

class Potion extends Game {
  recipe = ["Petal", "Dew", "Spark"];
  made: string[] = [];
  stir = false;
  tray = ["Spark", "Mud", "Dew", "Petal"];
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.recipe = diff === "advanced" ? ["Petal", "Dew", "Spark", "Mint"] : ["Petal", "Dew", "Spark"];
    this.made = [];
    this.stir = false;
    this.tray = [...this.recipe, "Mud"].sort(() => Math.random() - 0.5);
    this.info = `Mix ${this.recipe.join(", ")} then stir.`;
  }
  update(_dt: number, input: Input) {
    if (!input.justDown) return;
    if (this.made.length === this.recipe.length) {
      const stir = { x: this.w / 2 - 70, y: this.h - this.chromeBottom - 80, w: 140, h: 48 };
      if (hitRect(input.px, input.py, stir)) {
        this.addScore(40, this.w / 2, 160);
        this.win();
      }
      return;
    }
    const i = this.tray.findIndex((_, idx) => hitRect(input.px, input.py, { x: 16, y: 200 + idx * 54, w: this.w - 32, h: 46 }));
    if (i < 0) return;
    if (this.tray[i] !== this.recipe[this.made.length]) {
      this.hurt();
      return;
    }
    this.made.push(this.tray[i]!);
    this.tray.splice(i, 1);
    this.addScore(16, this.w / 2, 140);
    this.progress = this.made.length / (this.recipe.length + 1);
    if (this.made.length === this.recipe.length) this.info = "Now tap Stir.";
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#2a1848", "#120c22");
    ctx.fillStyle = PAL.grape;
    ctx.beginPath();
    ctx.ellipse(this.w / 2, 130, 36, 28, 0, 0, Math.PI * 2);
    ctx.fill();
    label(ctx, this.made.join(" "), this.w / 2, 130, 12, PAL.cream);
    this.tray.forEach((item, i) => {
      fillRound(ctx, 16, 200 + i * 54, this.w - 32, 46, 12, PAL.foam);
      label(ctx, item, this.w / 2, 223 + i * 54, 16, PAL.ink);
    });
    if (this.made.length === this.recipe.length) {
      fillRound(ctx, this.w / 2 - 70, this.h - this.chromeBottom - 80, 140, 48, 14, PAL.gold);
      label(ctx, "Stir", this.w / 2, this.h - this.chromeBottom - 56, 18, PAL.ink);
    }
  }
}

export function magicForest() { return new MagicForest(); }
export function wizardAcademy() { return new Wizard(); }
export function dragonAdventure() { return new Dragon(); }
export function fairyGarden() { return new Fairy(); }
export function potionLab() { return new Potion(); }
