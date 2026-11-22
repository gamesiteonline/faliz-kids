import { clamp, drawPup, fillRound, hitRect, label, PAL, sky } from "../engine/draw";
import { Game, type Diff, type Input } from "../engine/game";

class FarmSim extends Game {
  plots: { stage: number; t: number }[] = [];
  reset(diff: Diff) {
    this.begin(diff, 1);
    this.lives = 1;
    this.plots = Array.from({ length: 6 }, () => ({ stage: 0, t: 0 }));
    this.info = "Tap to plant, water, then harvest.";
  }
  update(dt: number, input: Input) {
    const grow = (this.diff === "beginner" ? 1.1 : 1.8) * dt;
    for (const p of this.plots) if (p.stage === 2) p.t += grow;
    if (input.justDown) {
      const rects = this.rects();
      const i = rects.findIndex((r) => hitRect(input.px, input.py, r));
      if (i >= 0) {
        const p = this.plots[i]!;
        if (p.stage === 0) p.stage = 1;
        else if (p.stage === 1) p.stage = 2;
        else if (p.stage === 2 && p.t >= 1) {
          p.stage = 3;
          this.addScore(18, rects[i]!.x, rects[i]!.y);
        }
        this.fx.push("tap");
      }
    }
    const done = this.plots.filter((p) => p.stage === 3).length;
    this.progress = done / this.plots.length;
    this.info = done === this.plots.length ? "Harvest complete." : "Plant, water, wait, harvest.";
    if (done === this.plots.length) {
      this.addScore(30, this.w / 2, 80);
      this.win();
    }
  }
  rects() {
    const cols = 3;
    const size = Math.min(100, (this.w - 36) / cols);
    const ox = (this.w - cols * size) / 2;
    return this.plots.map((_, i) => ({
      x: ox + (i % cols) * size,
      y: 140 + Math.floor(i / cols) * (size + 8),
      w: size - 8,
      h: size - 8,
    }));
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#c6ecff", "#d8f3b0");
    const names = ["Dig", "Planted", "Watered", "Done"];
    this.rects().forEach((r, i) => {
      const p = this.plots[i]!;
      fillRound(ctx, r.x, r.y, r.w, r.h, 12, p.stage === 3 ? PAL.leaf : "#8d5a32");
      label(ctx, names[p.stage] ?? "", r.x + r.w / 2, r.y + r.h / 2, 14, PAL.cream);
      if (p.stage === 2) label(ctx, `${Math.floor(p.t * 100)}%`, r.x + r.w / 2, r.y + 16, 12, PAL.gold);
    });
  }
}

class AnimalCare extends Game {
  meters = [0.7, 0.7, 0.7];
  names = ["Pup", "Cat", "Bun"];
  left = 24;
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.meters = [0.75, 0.7, 0.65];
    this.left = diff === "beginner" ? 18 : diff === "advanced" ? 28 : 22;
    this.info = "Feed or play before a heart empties.";
  }
  update(dt: number, input: Input) {
    const drain = dt * (0.08 * this.rate);
    this.meters = this.meters.map((m) => m - drain);
    this.left -= dt;
    if (input.justDown) {
      this.names.forEach((_, i) => {
        const y = 130 + i * 110;
        if (hitRect(input.px, input.py, { x: 16, y: y + 48, w: 100, h: 36 })) {
          this.meters[i] = Math.min(1, (this.meters[i] ?? 0) + 0.35);
          this.fx.push("ok");
        }
        if (hitRect(input.px, input.py, { x: 124, y: y + 48, w: 100, h: 36 })) {
          this.meters[i] = Math.min(1, (this.meters[i] ?? 0) + 0.28);
          this.fx.push("ok");
        }
      });
    }
    if (this.meters.some((m) => m <= 0)) {
      this.hurt();
      this.meters = this.meters.map((m) => (m <= 0 ? 0.55 : m));
    } else {
      this.meters = this.meters.map((m) => Math.max(0, m));
    }
    this.points = Math.floor((24 - Math.max(0, this.left)) * 4);
    this.progress = clamp(1 - this.left / 24, 0, 1);
    this.info = `Keep them happy for ${Math.max(0, Math.ceil(this.left))}s`;
    if (this.left <= 0 && this.mode === "play") {
      this.addScore(40, this.w / 2, 80);
      this.win();
    }
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#fff0c8", "#dff5ff");
    this.names.forEach((name, i) => {
      const y = 130 + i * 110;
      fillRound(ctx, 16, y, this.w - 32, 96, 16, PAL.foam);
      label(ctx, name, 70, y + 24, 16, PAL.ink);
      ctx.fillStyle = PAL.line;
      ctx.fillRect(150, y + 16, 120, 10);
      ctx.fillStyle = PAL.leaf;
      ctx.fillRect(150, y + 16, 120 * (this.meters[i] ?? 0), 10);
      fillRound(ctx, 16, y + 48, 100, 36, 10, PAL.gold);
      fillRound(ctx, 124, y + 48, 100, 36, 10, PAL.lagoon);
      label(ctx, "Feed", 66, y + 66, 14, PAL.ink);
      label(ctx, "Play", 174, y + 66, 14, PAL.ink);
    });
  }
}

class Tractor extends Game {
  x = 0;
  y = 0;
  cols = 8;
  rows = 6;
  grass: boolean[] = [];
  rocks: Set<number> = new Set();
  reset(diff: Diff) {
    this.begin(diff, 1);
    this.lives = 1;
    this.cols = 8;
    this.rows = 6;
    this.grass = Array.from({ length: this.cols * this.rows }, () => true);
    this.rocks = new Set();
    const n = diff === "advanced" ? 6 : 4;
    while (this.rocks.size < n) {
      const i = Math.floor(Math.random() * this.grass.length);
      this.rocks.add(i);
      this.grass[i] = false;
    }
    this.x = this.w / 2;
    this.y = this.h / 2;
    this.info = "Mow all the tall grass.";
  }
  geom() {
    const size = Math.min((this.w - 20) / this.cols, (this.h - this.chromeBottom - 100) / this.rows);
    return { size, ox: (this.w - size * this.cols) / 2, oy: 90 };
  }
  update(dt: number, input: Input) {
    const sp = 160;
    this.x = clamp(this.x + input.ax * sp * dt, 10, this.w - 10);
    this.y = clamp(this.y + input.ay * sp * dt, 80, this.h - this.chromeBottom - 10);
    const { size, ox, oy } = this.geom();
    const c = Math.floor((this.x - ox) / size);
    const r = Math.floor((this.y - oy) / size);
    if (c >= 0 && r >= 0 && c < this.cols && r < this.rows) {
      const i = r * this.cols + c;
      if (this.rocks.has(i)) this.hurt();
      else if (this.grass[i]) {
        this.grass[i] = false;
        this.addScore(4, this.x, this.y);
      }
    }
    const need = this.grass.filter((g, i) => g && !this.rocks.has(i)).length;
    const total = this.grass.length - this.rocks.size;
    this.progress = 1 - need / total;
    if (need === 0) {
      this.addScore(36, this.x, this.y);
      this.win();
    }
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#d8f5b0", "#8dca62");
    const { size, ox, oy } = this.geom();
    for (let i = 0; i < this.grass.length; i++) {
      const r = Math.floor(i / this.cols);
      const c = i % this.cols;
      const x = ox + c * size;
      const y = oy + r * size;
      ctx.fillStyle = this.rocks.has(i) ? "#7b8794" : this.grass[i] ? "#2f9e44" : "#d8e2a8";
      ctx.fillRect(x + 1, y + 1, size - 2, size - 2);
    }
    fillRound(ctx, this.x - 12, this.y - 10, 24, 16, 4, PAL.royal);
  }
}

class Harvest extends Game {
  fruits: { y: number; kind: number }[] = [];
  spawn = 0.2;
  got = 0;
  goal = 10;
  names = ["Apple", "Berry", "Lemon"];
  colors = [PAL.berry, PAL.grape, PAL.gold];
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.goal = diff === "beginner" ? 8 : 12;
    this.fruits = [];
    this.got = 0;
    this.spawn = 0.3;
    this.info = "Tap the crate that matches the fruit.";
  }
  update(dt: number, input: Input) {
    this.spawn -= dt;
    if (this.spawn <= 0 && this.fruits.length < 1) {
      this.spawn = 0.4;
      this.fruits.push({ y: 120, kind: Math.floor(Math.random() * 3) });
    }
    const speed = 70 * this.rate;
    for (const f of this.fruits) f.y += speed * dt;
    const current = this.fruits[0];
    if (current && current.y > this.h - this.chromeBottom - 40) {
      this.hurt();
      this.fruits.shift();
    }
    if (input.justDown && current) {
      const bw = (this.w - 24) / 3;
      const i = Math.floor((input.px - 12) / bw);
      const y = this.h - this.chromeBottom - 90;
      if (i >= 0 && i < 3 && input.py > y) {
        if (i === current.kind) {
          this.got += 1;
          this.addScore(12, input.px, current.y);
          this.fruits.shift();
          this.progress = this.got / this.goal;
          if (this.got >= this.goal) {
            this.addScore(28, this.w / 2, 100);
            this.win();
          }
        } else this.hurt();
      }
    }
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#fff4d2", "#e7f8c8");
    const f = this.fruits[0];
    if (f) {
      ctx.fillStyle = this.colors[f.kind]!;
      ctx.beginPath();
      ctx.arc(this.w / 2, f.y, 20, 0, Math.PI * 2);
      ctx.fill();
      label(ctx, this.names[f.kind]!, this.w / 2, f.y - 36, 16, PAL.ink);
    }
    const bw = (this.w - 24) / 3;
    const y = this.h - this.chromeBottom - 90;
    this.names.forEach((name, i) => {
      fillRound(ctx, 12 + i * bw, y, bw - 8, 64, 12, this.colors[i]!);
      label(ctx, name, 12 + i * bw + (bw - 8) / 2, y + 32, 14, PAL.ink);
    });
  }
}

class BuildFarm extends Game {
  cols = 4;
  rows = 3;
  cells: number[] = [];
  tool = 1;
  names = ["Clear", "Barn", "Pen", "Pond"];
  need = { barn: 1, pen: 2, pond: 1 };
  reset(diff: Diff) {
    this.begin(diff, 1);
    this.lives = 1;
    this.cols = 4;
    this.rows = 3;
    this.cells = Array.from({ length: this.cols * this.rows }, () => 0);
    this.tool = 1;
    this.need = diff === "advanced" ? { barn: 2, pen: 2, pond: 1 } : { barn: 1, pen: 2, pond: 1 };
    this.info = `Place ${this.need.barn} barn, ${this.need.pen} pens and ${this.need.pond} pond.`;
  }
  count(kind: number) {
    return this.cells.filter((c) => c === kind).length;
  }
  update(_dt: number, input: Input) {
    if (!input.justDown) return;
    const toolsY = 96;
    if (input.py < toolsY + 40) {
      const i = Math.floor(input.px / (this.w / 4));
      if (i >= 0 && i < 4) this.tool = i;
      return;
    }
    const size = Math.min(80, (this.w - 20) / this.cols);
    const ox = (this.w - size * this.cols) / 2;
    const oy = 160;
    const c = Math.floor((input.px - ox) / size);
    const r = Math.floor((input.py - oy) / size);
    if (c < 0 || r < 0 || c >= this.cols || r >= this.rows) return;
    this.cells[r * this.cols + c] = this.tool;
    this.fx.push("tap");
    const ok = this.count(1) >= this.need.barn && this.count(2) >= this.need.pen && this.count(3) >= this.need.pond;
    this.progress = (Math.min(this.count(1), this.need.barn) + Math.min(this.count(2), this.need.pen) + Math.min(this.count(3), this.need.pond)) / (this.need.barn + this.need.pen + this.need.pond);
    if (ok) {
      this.addScore(90, this.w / 2, 140);
      this.win();
    }
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#e7f6c8", "#c6e49a");
    const colors = ["#c4a574", PAL.berry, PAL.gold, PAL.lagoonDeep];
    for (let i = 0; i < 4; i++) {
      fillRound(ctx, 8 + i * (this.w / 4), 96, this.w / 4 - 12, 36, 8, this.tool === i ? PAL.ink : colors[i]!);
      label(ctx, this.names[i]!, 8 + i * (this.w / 4) + (this.w / 4 - 12) / 2, 114, 12, this.tool === i ? PAL.cream : PAL.ink);
    }
    const size = Math.min(80, (this.w - 20) / this.cols);
    const ox = (this.w - size * this.cols) / 2;
    const oy = 160;
    this.cells.forEach((v, i) => {
      const r = Math.floor(i / this.cols);
      const c = i % this.cols;
      fillRound(ctx, ox + c * size + 3, oy + r * size + 3, size - 6, size - 6, 8, colors[v] ?? PAL.foam);
    });
    drawPup(ctx, 40, this.h - 50, 16, "happy");
  }
}

export function farmSimulator() { return new FarmSim(); }
export function animalCare() { return new AnimalCare(); }
export function tractorAdventure() { return new Tractor(); }
export function harvestFestival() { return new Harvest(); }
export function buildYourFarm() { return new BuildFarm(); }
