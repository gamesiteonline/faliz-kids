import { clamp, drawPup, drawStar, fillRound, hitRect, label, PAL, sky } from "../engine/draw";
import { Game, type Diff, type Input } from "../engine/game";

class Jungle extends Game {
  x = 40;
  y = 0;
  vy = 0;
  cam = 0;
  plats: { x: number; y: number; w: number }[] = [];
  goalX = 1800;
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.x = 40;
    this.vy = 0;
    this.cam = 0;
    const base = this.h - this.chromeBottom - 80;
    this.plats = [
      { x: 0, y: base, w: 220 },
      { x: 280, y: base - 30, w: 140 },
      { x: 480, y: base - 80, w: 120 },
      { x: 680, y: base - 20, w: 160 },
      { x: 900, y: base - 90, w: 110 },
      { x: 1080, y: base - 40, w: 180 },
      { x: 1340, y: base - 100, w: 120 },
      { x: 1540, y: base, w: 280 },
    ];
    if (diff === "beginner") this.plats.forEach((p) => (p.w += 30));
    this.goalX = 1700;
    this.y = base - 40;
    this.info = "Jump across the jungle to the flag.";
  }
  floorAt(x: number) {
    let best = -1;
    for (const p of this.plats) {
      if (x > p.x && x < p.x + p.w) best = Math.max(best, p.y);
    }
    return best;
  }
  update(dt: number, input: Input) {
    const sp = 180 * (this.diff === "beginner" ? 1.05 : 1);
    this.x += input.ax * sp * dt;
    this.x = Math.max(10, this.x);
    const ground = this.floorAt(this.x);
    const on = ground > 0 && this.y >= ground - 28 && this.vy >= 0 && this.y < ground + 8;
    if ((input.actionJust || input.justDown) && on) {
      this.vy = -560;
      this.tapJump();
    }
    this.vy += 1400 * dt;
    this.y += this.vy * dt;
    if (ground > 0 && this.y > ground - 24 && this.vy >= 0) {
      this.y = ground - 24;
      this.vy = 0;
    }
    if (this.y > this.h + 40) {
      this.hurt();
      this.x = Math.max(20, this.x - 80);
      this.y = (this.floorAt(this.x) || this.h / 2) - 30;
      this.vy = 0;
    }
    this.cam = clamp(this.x - 80, 0, this.goalX);
    this.progress = clamp(this.x / this.goalX, 0, 1);
    this.points = Math.floor(this.progress * 80);
    if (this.x >= this.goalX) {
      this.points = 130;
      this.win();
    }
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#8fd8ff", "#b7f0a8");
    ctx.save();
    ctx.translate(-this.cam, 0);
    for (const p of this.plats) fillRound(ctx, p.x, p.y, p.w, 18, 8, "#2f8f45");
    ctx.fillStyle = PAL.gold;
    ctx.fillRect(this.goalX, (this.floorAt(this.goalX) || 200) - 70, 8, 70);
    ctx.fillStyle = PAL.berry;
    ctx.beginPath();
    ctx.moveTo(this.goalX + 8, (this.floorAt(this.goalX) || 200) - 70);
    ctx.lineTo(this.goalX + 36, (this.floorAt(this.goalX) || 200) - 56);
    ctx.lineTo(this.goalX + 8, (this.floorAt(this.goalX) || 200) - 42);
    ctx.fill();
    drawPup(ctx, this.x, this.y, 22, "happy");
    ctx.restore();
  }
}

class Dino extends Game {
  eggs: { x: number; y: number; got: boolean }[] = [];
  warn = 0;
  cycle = 0;
  hiding = false;
  got = 0;
  goal = 6;
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.goal = diff === "beginner" ? 5 : 7;
    this.eggs = Array.from({ length: this.goal }, (_, i) => ({
      x: 50 + ((i * 97) % Math.max(80, this.w - 80)),
      y: 160 + ((i * 53) % Math.max(80, this.h - this.chromeBottom - 220)),
      got: false,
    }));
    this.got = 0;
    this.cycle = 0;
    this.warn = 0;
    this.info = "Hold still to hide when the shadow falls. Tap eggs when it is safe.";
  }
  update(dt: number, input: Input) {
    this.cycle += dt * this.rate;
    const beat = this.cycle % 3.2;
    this.warn = beat > 2.1 ? (beat - 2.1) / 1.1 : 0;
    this.hiding = input.down && this.warn > 0;
    if (beat > 3.05 && beat < 3.15 && this.warn > 0.7 && !input.down) this.hurt();
    if (input.justDown && this.warn === 0) {
      const egg = this.eggs.find((e) => !e.got && Math.hypot(input.px - e.x, input.py - e.y) < 28);
      if (egg) {
        egg.got = true;
        this.got += 1;
        this.addScore(16, egg.x, egg.y);
        this.progress = this.got / this.goal;
        if (this.got >= this.goal) {
          this.addScore(30, this.w / 2, 80);
          this.win();
        }
      }
    }
    this.info = this.warn > 0 ? "Hide! Hold your finger down." : "Tap the eggs.";
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#b7e38a", "#efe0b0");
    if (this.warn > 0) {
      ctx.fillStyle = `rgba(28,43,74,${0.15 + this.warn * 0.35})`;
      ctx.beginPath();
      ctx.ellipse(this.w / 2, this.h / 2, 70 + this.warn * 40, 30, 0, 0, Math.PI * 2);
      ctx.fill();
      label(ctx, "STOMP", this.w / 2, 80, 20, PAL.ink);
    }
    for (const e of this.eggs) {
      if (e.got) continue;
      ctx.fillStyle = PAL.cream;
      ctx.beginPath();
      ctx.ellipse(e.x, e.y, 12, 16, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = PAL.goldDeep;
      ctx.stroke();
    }
    drawPup(ctx, 56, this.h - this.chromeBottom - 50, 24, this.hiding ? "focus" : "happy");
  }
}

class Treasure extends Game {
  cols = 5;
  rows = 4;
  treasures = new Set<number>();
  dug = new Set<number>();
  found = 0;
  digs = 0;
  maxDigs = 10;
  reset(diff: Diff) {
    this.begin(diff, 1);
    this.lives = 1;
    this.cols = 5;
    this.rows = 4;
    this.treasures = new Set();
    while (this.treasures.size < 3) this.treasures.add(Math.floor(Math.random() * this.cols * this.rows));
    this.dug = new Set();
    this.found = 0;
    this.digs = 0;
    this.maxDigs = diff === "beginner" ? 12 : diff === "advanced" ? 8 : 10;
    this.info = "Dig for 3 treasures. Warm means one is close.";
  }
  geom() {
    const size = Math.min(68, (this.w - 24) / this.cols);
    const ox = (this.w - size * this.cols) / 2;
    return { size, ox, oy: 120 };
  }
  hint(i: number) {
    const tr = [...this.treasures];
    let best = 99;
    for (const t of tr) {
      const ar = Math.floor(i / this.cols);
      const ac = i % this.cols;
      const br = Math.floor(t / this.cols);
      const bc = t % this.cols;
      best = Math.min(best, Math.abs(ar - br) + Math.abs(ac - bc));
    }
    if (best === 0) return "Found";
    if (best === 1) return "Hot";
    if (best === 2) return "Warm";
    return "Cold";
  }
  update(_dt: number, input: Input) {
    if (!input.justDown) return;
    const { size, ox, oy } = this.geom();
    const c = Math.floor((input.px - ox) / size);
    const r = Math.floor((input.py - oy) / size);
    if (c < 0 || r < 0 || c >= this.cols || r >= this.rows) return;
    const i = r * this.cols + c;
    if (this.dug.has(i)) return;
    this.dug.add(i);
    this.digs += 1;
    if (this.treasures.has(i)) {
      this.found += 1;
      this.addScore(25, input.px, input.py);
      this.progress = this.found / 3;
      if (this.found >= 3) {
        this.addScore(40, this.w / 2, 70);
        this.win();
      }
    } else if (this.digs >= this.maxDigs) {
      this.mode = "lose";
      this.fx.push("lose");
    }
    this.info = `${this.found}/3 treasures. Digs left ${Math.max(0, this.maxDigs - this.digs)}.`;
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#e7d3a1", "#c4a574");
    const { size, ox, oy } = this.geom();
    for (let i = 0; i < this.cols * this.rows; i++) {
      const r = Math.floor(i / this.cols);
      const c = i % this.cols;
      const dug = this.dug.has(i);
      fillRound(ctx, ox + c * size + 4, oy + r * size + 4, size - 8, size - 8, 8, dug ? "#efe2c4" : "#a9743a");
      if (dug) label(ctx, this.treasures.has(i) ? "★" : this.hint(i), ox + c * size + size / 2, oy + r * size + size / 2, 12, PAL.ink);
    }
  }
}

class Temple extends Game {
  pads = ["Sun", "Moon", "Leaf", "Star"];
  seq: number[] = [];
  show = 0;
  inputAt = 0;
  roundN = 0;
  goal = 4;
  playing = false;
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.goal = diff === "beginner" ? 3 : diff === "advanced" ? 6 : 4;
    this.roundN = 0;
    this.seq = [];
    this.nextRound();
  }
  nextRound() {
    this.seq.push(Math.floor(Math.random() * 4));
    this.show = 0;
    this.inputAt = 0;
    this.playing = false;
    this.info = "Watch the rune order.";
  }
  update(dt: number, input: Input) {
    if (!this.playing) {
      this.show += dt;
      const step = 0.7 / this.rate;
      if (this.show > step * (this.seq.length + 1)) {
        this.playing = true;
        this.info = "Your turn. Repeat the runes.";
      }
      return;
    }
    if (!input.justDown) return;
    const rects = this.rects();
    const i = rects.findIndex((r) => hitRect(input.px, input.py, r));
    if (i < 0) return;
    if (i !== this.seq[this.inputAt]) {
      this.hurt();
      this.inputAt = 0;
      this.playing = false;
      this.show = 0;
      return;
    }
    this.inputAt += 1;
    this.fx.push("ok");
    this.addScore(8, rects[i]!.x, rects[i]!.y);
    if (this.inputAt >= this.seq.length) {
      this.roundN += 1;
      this.progress = this.roundN / this.goal;
      if (this.roundN >= this.goal) {
        this.addScore(40, this.w / 2, 80);
        this.win();
      } else this.nextRound();
    }
  }
  rects() {
    const s = Math.min(120, (this.w - 48) / 2);
    const ox = (this.w - s * 2 - 12) / 2;
    const oy = 160;
    return [0, 1, 2, 3].map((i) => ({
      x: ox + (i % 2) * (s + 12),
      y: oy + Math.floor(i / 2) * (s * 0.7 + 12),
      w: s,
      h: s * 0.62,
    }));
  }
  lit() {
    if (this.playing) return -1;
    const step = 0.7 / this.rate;
    const idx = Math.floor(this.show / step) - 0;
    if (idx < 0 || idx >= this.seq.length) return -1;
    if (this.show % step > step * 0.7) return -1;
    return this.seq[idx] ?? -1;
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#d8c8ff", "#1b2a4a");
    const colors = [PAL.gold, PAL.lagoon, PAL.leaf, PAL.berry];
    const on = this.lit();
    this.rects().forEach((r, i) => {
      fillRound(ctx, r.x, r.y, r.w, r.h, 16, on === i ? colors[i]! : PAL.ink);
      label(ctx, this.pads[i]!, r.x + r.w / 2, r.y + r.h / 2, 18, on === i ? PAL.ink : PAL.cream);
    });
  }
}

class Guardian extends Game {
  pests: { x: number; y: number }[] = [];
  spawn = 0.4;
  got = 0;
  goal = 12;
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.goal = diff === "beginner" ? 8 : 12;
    this.pests = [];
    this.got = 0;
    this.spawn = 0.5;
    this.info = "Tap pests before they reach the tree.";
  }
  update(dt: number, input: Input) {
    this.spawn -= dt;
    if (this.spawn <= 0) {
      this.spawn = (this.diff === "advanced" ? 0.7 : 1.05) / this.rate;
      this.pests.push({ x: this.w + 10, y: 120 + Math.random() * (this.h - this.chromeBottom - 180) });
    }
    const speed = 80 * this.rate;
    this.pests = this.pests.filter((p) => {
      p.x -= speed * dt;
      if (p.x < 70) {
        this.hurt();
        return false;
      }
      return true;
    });
    if (input.justDown) {
      const hit = this.pests.findIndex((p) => Math.hypot(input.px - p.x, input.py - p.y) < 28);
      if (hit >= 0) {
        const p = this.pests[hit]!;
        this.pests.splice(hit, 1);
        this.got += 1;
        this.addScore(10, p.x, p.y);
        this.progress = this.got / this.goal;
        if (this.got >= this.goal) {
          this.addScore(30, 80, 120);
          this.win();
        }
      }
    }
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#c6f0ff", "#b7e89a");
    ctx.fillStyle = "#8d5a32";
    ctx.fillRect(30, 100, 26, this.h - 140);
    ctx.fillStyle = PAL.leafDeep;
    ctx.beginPath();
    ctx.arc(43, 110, 36, 0, Math.PI * 2);
    ctx.fill();
    for (const p of this.pests) {
      ctx.fillStyle = PAL.berry;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 14, 0, Math.PI * 2);
      ctx.fill();
    }
    drawStar(ctx, 43, 80, 10);
  }
}

export function jungleExplorer() { return new Jungle(); }
export function dinosaurIsland() { return new Dino(); }
export function treasureHunter() { return new Treasure(); }
export function lostTemple() { return new Temple(); }
export function forestGuardian() { return new Guardian(); }
