import { drawPup, fillRound, hitRect, label, paintButton, PAL, sky } from "../engine/draw";
import { Game, type Diff, type Input } from "../engine/game";

class Coloring extends Game {
  regions: { x: number; y: number; r: number; n: number; filled: boolean }[] = [];
  color = 0;
  palette = [PAL.gold, PAL.royal, PAL.berry, PAL.leaf];
  reset(diff: Diff) {
    this.begin(diff, 1);
    this.lives = 1;
    const count = diff === "advanced" ? 8 : 6;
    this.regions = Array.from({ length: count }, (_, i) => ({
      x: this.w * (0.22 + (i % 3) * 0.28),
      y: 160 + Math.floor(i / 3) * 110,
      r: 36,
      n: i % this.palette.length,
      filled: false,
    }));
    this.color = 0;
    this.info = "Pick a colour, then tap shapes with that number.";
  }
  update(_dt: number, input: Input) {
    if (!input.justDown) return;
    const sw = this.palette.map((_, i) => ({ x: 16 + i * 58, y: 88, w: 50, h: 36 }));
    const si = sw.findIndex((r) => hitRect(input.px, input.py, r));
    if (si >= 0) {
      this.color = si;
      return;
    }
    const hit = this.regions.find((rg) => !rg.filled && Math.hypot(input.px - rg.x, input.py - rg.y) < rg.r);
    if (!hit) return;
    if (hit.n !== this.color) {
      this.fx.push("bad");
      return;
    }
    hit.filled = true;
    this.addScore(12, hit.x, hit.y);
    const done = this.regions.filter((r) => r.filled).length;
    this.progress = done / this.regions.length;
    if (done === this.regions.length) {
      this.addScore(36, this.w / 2, 140);
      this.win();
    }
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#ffe4f4", "#fff6e4");
    this.palette.forEach((c, i) => {
      fillRound(ctx, 16 + i * 58, 88, 50, 36, 8, c);
      if (i === this.color) {
        ctx.strokeStyle = PAL.ink;
        ctx.lineWidth = 3;
        ctx.stroke();
      }
      label(ctx, String(i + 1), 41 + i * 58, 106, 14, PAL.ink);
    });
    for (const rg of this.regions) {
      ctx.beginPath();
      ctx.arc(rg.x, rg.y, rg.r, 0, Math.PI * 2);
      ctx.fillStyle = rg.filled ? this.palette[rg.n]! : PAL.foam;
      ctx.fill();
      ctx.strokeStyle = PAL.ink;
      ctx.lineWidth = 2;
      ctx.stroke();
      if (!rg.filled) label(ctx, String(rg.n + 1), rg.x, rg.y, 18, PAL.ink);
    }
  }
}

class RobotBuild extends Game {
  slots = ["Head", "Body", "Arm", "Legs"];
  need = ["Head", "Body", "Arm", "Legs"];
  tray = ["Head", "Wheel", "Body", "Arm", "Hat", "Legs"];
  picked: string | null = null;
  filled: (string | null)[] = [null, null, null, null];
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.filled = [null, null, null, null];
    this.picked = null;
    this.tray = ["Head", "Wheel", "Body", "Arm", "Hat", "Legs"].sort(() => Math.random() - 0.5);
    if (diff === "beginner") this.tray = [...this.need];
    this.info = "Tap a part, then the slot it belongs in.";
  }
  update(_dt: number, input: Input) {
    if (!input.justDown) return;
    const tray = this.trayRects();
    const ti = tray.findIndex((r) => hitRect(input.px, input.py, r));
    if (ti >= 0) {
      this.picked = this.tray[ti] ?? null;
      this.fx.push("tap");
      return;
    }
    const slots = this.slotRects();
    const si = slots.findIndex((r) => hitRect(input.px, input.py, r));
    if (si < 0 || !this.picked) return;
    if (this.picked !== this.need[si] || this.filled[si]) {
      this.hurt();
      return;
    }
    this.filled[si] = this.picked;
    this.picked = null;
    this.addScore(20, slots[si]!.x, slots[si]!.y);
    this.progress = this.filled.filter(Boolean).length / 4;
    if (this.filled.every(Boolean)) {
      this.addScore(40, this.w / 2, 80);
      this.win();
    }
  }
  slotRects() {
    return [0, 1, 2, 3].map((i) => ({ x: this.w / 2 - 70, y: 110 + i * 58, w: 140, h: 50 }));
  }
  trayRects() {
    return this.tray.map((_, i) => ({
      x: 12 + (i % 3) * ((this.w - 24) / 3),
      y: this.h - this.chromeBottom - 150 + Math.floor(i / 3) * 52,
      w: (this.w - 36) / 3,
      h: 44,
    }));
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#e7f0ff", "#fff6e4");
    this.slotRects().forEach((r, i) => {
      fillRound(ctx, r.x, r.y, r.w, r.h, 10, this.filled[i] ? PAL.leaf : PAL.foam);
      label(ctx, this.filled[i] ?? this.slots[i]!, r.x + r.w / 2, r.y + r.h / 2, 16, PAL.ink);
    });
    this.trayRects().forEach((r, i) => paintButton(ctx, r, this.tray[i] ?? "", this.picked === this.tray[i] ? PAL.gold : PAL.foam));
  }
}

class DressUp extends Game {
  theme = "Sunny day";
  hat = "none";
  top = "none";
  shoes = "none";
  hats = ["cap", "bow", "crown"];
  tops = ["shirt", "dress", "jacket"];
  shoeChoices = ["boots", "sandals", "trainers"];
  reset(diff: Diff) {
    this.begin(diff, 1);
    this.lives = 1;
    const themes = [
      { name: "Sunny day", hat: "cap", top: "shirt", shoes: "sandals" },
      { name: "Party", hat: "crown", top: "dress", shoes: "boots" },
      { name: "Explorer", hat: "bow", top: "jacket", shoes: "trainers" },
    ];
    const t = themes[diff === "advanced" ? 2 : diff === "intermediate" ? 1 : 0]!;
    this.theme = t.name;
    this.needHat = t.hat;
    this.needTop = t.top;
    this.needShoes = t.shoes;
    this.hat = "none";
    this.top = "none";
    this.shoes = "none";
    this.info = `Dress for: ${this.theme}.`;
  }
  needHat = "cap";
  needTop = "shirt";
  needShoes = "sandals";
  update(_dt: number, input: Input) {
    if (!input.justDown) return;
    const rows = [
      { y: 250, items: this.hats, set: (v: string) => (this.hat = v) },
      { y: 310, items: this.tops, set: (v: string) => (this.top = v) },
      { y: 370, items: this.shoeChoices, set: (v: string) => (this.shoes = v) },
    ];
    for (const row of rows) {
      row.items.forEach((item, i) => {
        const r = { x: 16 + i * 110, y: row.y, w: 100, h: 44 };
        if (hitRect(input.px, input.py, r)) row.set(item);
      });
    }
    const done = { x: this.w / 2 - 70, y: this.h - this.chromeBottom - 70, w: 140, h: 48 };
    if (hitRect(input.px, input.py, done)) {
      if (this.hat === this.needHat && this.top === this.needTop && this.shoes === this.needShoes) {
        this.addScore(100, this.w / 2, 180);
        this.win();
      } else {
        this.info = `Need ${this.needHat}, ${this.needTop} and ${this.needShoes}.`;
        this.fx.push("bad");
      }
    }
    const have = [this.hat === this.needHat, this.top === this.needTop, this.shoes === this.needShoes].filter(Boolean).length;
    this.progress = have / 3;
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#ffe4f2", "#fff6e4");
    label(ctx, this.theme, this.w / 2, 78, 22, PAL.ink);
    drawPup(ctx, this.w / 2, 170, 40, "happy");
    label(ctx, `${this.hat} · ${this.top} · ${this.shoes}`, this.w / 2, 220, 14, PAL.inkSoft);
    const rows = [this.hats, this.tops, this.shoeChoices];
    rows.forEach((items, ri) => {
      items.forEach((item, i) => {
        const on = [this.hat, this.top, this.shoes][ri] === item;
        fillRound(ctx, 16 + i * 110, 250 + ri * 60, 100, 44, 10, on ? PAL.gold : PAL.foam);
        label(ctx, item, 66 + i * 110, 272 + ri * 60, 12, PAL.ink);
      });
    });
    paintButton(ctx, { x: this.w / 2 - 70, y: this.h - this.chromeBottom - 70, w: 140, h: 48 }, "Done", PAL.leaf, true);
  }
}

class Cake extends Game {
  recipe = ["Sponge", "Berry", "Cream", "Star"];
  made: string[] = [];
  tray = ["Star", "Cream", "Sponge", "Berry", "Chilli"];
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.recipe = diff === "beginner" ? ["Sponge", "Berry", "Star"] : ["Sponge", "Berry", "Cream", "Star"];
    this.made = [];
    this.tray = [...this.recipe, "Chilli"].sort(() => Math.random() - 0.5);
    this.info = `Order: ${this.recipe.join(", ")}`;
  }
  update(_dt: number, input: Input) {
    if (!input.justDown) return;
    const rects = this.tray.map((_, i) => ({
      x: 16,
      y: 220 + i * 52,
      w: this.w - 32,
      h: 46,
    }));
    const i = rects.findIndex((r) => hitRect(input.px, input.py, r));
    if (i < 0) return;
    const item = this.tray[i]!;
    if (item !== this.recipe[this.made.length]) {
      this.hurt();
      return;
    }
    this.made.push(item);
    this.tray.splice(i, 1);
    this.addScore(18, this.w / 2, 140);
    this.progress = this.made.length / this.recipe.length;
    if (this.made.length === this.recipe.length) {
      this.addScore(36, this.w / 2, 100);
      this.win();
    }
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#fff0f6", "#fff6e4");
    this.made.forEach((m, i) => {
      fillRound(ctx, this.w / 2 - 50, 150 - i * 28, 100, 26, 6, i % 2 ? PAL.berry : PAL.gold);
      label(ctx, m, this.w / 2, 163 - i * 28, 12, PAL.ink);
    });
    this.tray.forEach((item, i) => {
      paintButton(ctx, { x: 16, y: 220 + i * 52, w: this.w - 32, h: 46 }, item, PAL.foam);
    });
  }
}

class ToyBuilder extends Game {
  need: number[] = [];
  at = 0;
  belt: number[] = [];
  colors = [PAL.royal, PAL.berry, PAL.gold, PAL.leaf];
  reset(diff: Diff) {
    this.begin(diff, 3);
    const len = diff === "beginner" ? 5 : diff === "advanced" ? 8 : 6;
    this.need = Array.from({ length: len }, () => Math.floor(Math.random() * 4));
    this.at = 0;
    this.belt = Array.from({ length: 4 }, () => Math.floor(Math.random() * 4));
    if (!this.belt.includes(this.need[0]!)) this.belt[0] = this.need[0]!;
    this.info = "Tap the block that matches the next blueprint square.";
  }
  update(_dt: number, input: Input) {
    if (!input.justDown) return;
    const size = 64;
    const y = this.h - this.chromeBottom - 100;
    const i = this.belt.findIndex((_, idx) => {
      const x = 20 + idx * (size + 12);
      return hitRect(input.px, input.py, { x, y, w: size, h: size });
    });
    if (i < 0) return;
    if (this.belt[i] !== this.need[this.at]) {
      this.hurt();
      return;
    }
    this.addScore(14, 40, 120);
    this.at += 1;
    this.progress = this.at / this.need.length;
    this.belt[i] = Math.floor(Math.random() * 4);
    if (this.at < this.need.length && !this.belt.includes(this.need[this.at]!)) this.belt[0] = this.need[this.at]!;
    if (this.at >= this.need.length) {
      this.addScore(30, this.w / 2, 80);
      this.win();
    }
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#efe7ff", "#fff6e4");
    label(ctx, "Blueprint", this.w / 2, 80, 16, PAL.ink);
    this.need.forEach((n, i) => {
      fillRound(ctx, 16 + i * 36, 100, 30, 30, 6, i < this.at ? PAL.line : this.colors[n]!);
      if (i === this.at) {
        ctx.strokeStyle = PAL.ink;
        ctx.stroke();
      }
    });
    const y = this.h - this.chromeBottom - 100;
    this.belt.forEach((n, i) => {
      fillRound(ctx, 20 + i * 76, y, 64, 64, 12, this.colors[n]!);
    });
  }
}

export function coloringStudio() { return new Coloring(); }
export function buildRobot() { return new RobotBuild(); }
export function dressUp() { return new DressUp(); }
export function cakeDesigner() { return new Cake(); }
export function toyBuilder() { return new ToyBuilder(); }
