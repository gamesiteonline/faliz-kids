import { clamp, fillRound, hitRect, label, PAL, sky } from "../engine/draw";
import { Game, type Diff, type Input } from "../engine/game";

class City extends Game {
  cols = 3;
  cells: number[] = [];
  tool = 1;
  names = ["Grass", "House", "Park", "Shop"];
  reset(diff: Diff) {
    this.begin(diff, 1);
    this.lives = 1;
    this.cols = 3;
    this.cells = Array.from({ length: 9 }, () => 0);
    this.tool = 1;
    this.info = "Place a house, a park and a shop.";
    if (diff === "advanced") this.info = "Place 2 houses, a park and a shop.";
  }
  needHouse() {
    return this.diff === "advanced" ? 2 : 1;
  }
  update(_dt: number, input: Input) {
    if (!input.justDown) return;
    if (input.py < 140) {
      const i = Math.floor((input.px / this.w) * 4);
      if (i >= 0 && i < 4) this.tool = i;
      return;
    }
    const size = Math.min(96, (this.w - 24) / 3);
    const ox = (this.w - size * 3) / 2;
    const oy = 160;
    const c = Math.floor((input.px - ox) / size);
    const r = Math.floor((input.py - oy) / size);
    if (c < 0 || r < 0 || c >= 3 || r >= 3) return;
    const i = r * 3 + c;
    this.cells[i] = this.cells[i] === this.tool ? 0 : this.tool;
    this.fx.push("tap");
    const houses = this.cells.filter((v) => v === 1).length;
    const parks = this.cells.filter((v) => v === 2).length;
    const shops = this.cells.filter((v) => v === 3).length;
    this.progress = (Math.min(houses, this.needHouse()) + Math.min(parks, 1) + Math.min(shops, 1)) / (this.needHouse() + 2);
    if (houses >= this.needHouse() && parks >= 1 && shops >= 1) {
      this.addScore(90, this.w / 2, 150);
      this.win();
    }
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#d5f6f6", "#fff6e4");
    const colors = ["#b7e89a", PAL.royal, PAL.leaf, PAL.gold];
    for (let i = 0; i < 4; i++) {
      fillRound(ctx, 8 + (this.w / 4) * i, 92, this.w / 4 - 12, 36, 8, this.tool === i ? PAL.ink : colors[i]!);
      label(ctx, this.names[i]!, 8 + (this.w / 4) * i + (this.w / 4 - 12) / 2, 110, 12, this.tool === i ? PAL.cream : PAL.ink);
    }
    const size = Math.min(96, (this.w - 24) / 3);
    const ox = (this.w - size * 3) / 2;
    this.cells.forEach((v, i) => {
      fillRound(ctx, ox + (i % 3) * size + 4, 160 + Math.floor(i / 3) * size + 4, size - 8, size - 8, 10, colors[v]!);
      label(ctx, this.names[v]!, ox + (i % 3) * size + size / 2, 160 + Math.floor(i / 3) * size + size / 2, 12, PAL.ink);
    });
  }
}

class Bridge extends Game {
  gaps = [1, 2, 1];
  filled: (number | null)[] = [null, null, null];
  picked: number | null = null;
  planks = [1, 2, 1, 2];
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.gaps = diff === "advanced" ? [2, 1, 2, 1] : [1, 2, 1];
    this.filled = this.gaps.map(() => null);
    this.planks = diff === "advanced" ? [1, 2, 2, 1, 1] : [1, 2, 1, 2];
    this.picked = null;
    this.info = "Tap a gap, then a plank that fits. 1 is short, 2 is long.";
  }
  update(_dt: number, input: Input) {
    if (!input.justDown) return;
    const gapRects = this.gaps.map((_, i) => ({ x: 20, y: 120 + i * 64, w: this.w - 40, h: 52 }));
    const gi = gapRects.findIndex((r) => hitRect(input.px, input.py, r));
    if (gi >= 0 && this.filled[gi] == null) {
      if (this.picked == null) {
        this.fx.push("bad");
        this.info = "Pick a plank first.";
        return;
      }
      if (this.picked !== this.gaps[gi]) {
        this.hurt();
        this.picked = null;
        return;
      }
      this.filled[gi] = this.picked;
      const idx = this.planks.indexOf(this.picked);
      if (idx >= 0) this.planks.splice(idx, 1);
      this.picked = null;
      this.addScore(20, gapRects[gi]!.x, gapRects[gi]!.y);
      this.progress = this.filled.filter((f) => f != null).length / this.gaps.length;
      if (this.filled.every((f) => f != null)) {
        this.addScore(40, this.w / 2, 80);
        this.win();
      }
      return;
    }
    const pi = this.planks.findIndex((_, i) => hitRect(input.px, input.py, { x: 16 + i * 70, y: this.h - this.chromeBottom - 80, w: 64, h: 48 }));
    if (pi >= 0) this.picked = this.planks[pi]!;
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#c5ecff", "#e7f4ff");
    this.gaps.forEach((g, i) => {
      const y = 120 + i * 64;
      fillRound(ctx, 20, y, this.w - 40, 52, 10, this.filled[i] ? PAL.leaf : "#8d6a45");
      label(ctx, this.filled[i] ? "Bridged" : `Gap ${g}`, this.w / 2, y + 26, 16, PAL.cream);
    });
    this.planks.forEach((p, i) => {
      fillRound(ctx, 16 + i * 70, this.h - this.chromeBottom - 80, 64, 48, 8, this.picked === p ? PAL.gold : PAL.foam);
      label(ctx, p === 1 ? "Short" : "Long", 48 + i * 70, this.h - this.chromeBottom - 56, 12, PAL.ink);
    });
  }
}

class Construction extends Game {
  marker = 0;
  dir = 1;
  stack: number[] = [];
  wobble = 0;
  goal = 6;
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.goal = diff === "beginner" ? 5 : diff === "advanced" ? 8 : 6;
    this.stack = [];
    this.wobble = 0;
    this.marker = 0.5;
    this.dir = 1;
    this.info = "Drop blocks when they line up.";
  }
  update(dt: number, input: Input) {
    this.marker += this.dir * dt * (0.35 + this.rate * 0.25);
    if (this.marker > 1 || this.marker < 0) this.dir *= -1;
    this.marker = clamp(this.marker, 0, 1);
    if (!(input.justDown || input.actionJust)) return;
    const prev = this.stack[this.stack.length - 1] ?? 0.5;
    const delta = Math.abs(this.marker - prev);
    this.stack.push(this.marker);
    const limit = this.diff === "beginner" ? 0.28 : 0.18;
    if (delta > limit) {
      this.wobble += delta;
      this.fx.push("bad");
    } else this.addScore(12, this.w / 2, 120);
    this.progress = this.stack.length / this.goal;
    if (this.wobble > 0.7) {
      this.mode = "lose";
      this.fx.push("lose");
      return;
    }
    if (this.stack.length >= this.goal) {
      this.addScore(36, this.w / 2, 80);
      this.win();
    }
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#d8ecff", "#fff6e4");
    const baseY = this.h - this.chromeBottom - 40;
    this.stack.forEach((m, i) => {
      const x = 40 + m * (this.w - 120);
      fillRound(ctx, x, baseY - (i + 1) * 28, 80, 24, 4, i % 2 ? PAL.royal : PAL.gold);
    });
    const mx = 40 + this.marker * (this.w - 120);
    fillRound(ctx, mx, 100, 80, 18, 4, PAL.berry);
    label(ctx, "Drop", mx + 40, 80, 12, PAL.ink);
  }
}

class TrainGame extends Game {
  side: 0 | 1 = 0;
  trains: { color: 0 | 1; y: number }[] = [];
  spawn = 0.4;
  got = 0;
  goal = 8;
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.goal = diff === "beginner" ? 6 : 8;
    this.side = 0;
    this.trains = [];
    this.got = 0;
    this.spawn = 0.3;
    this.info = "Tap to switch tracks before the train arrives.";
  }
  update(dt: number, input: Input) {
    if (input.justDown) this.side = this.side === 0 ? 1 : 0;
    this.spawn -= dt;
    if (this.spawn <= 0) {
      this.spawn = (this.diff === "advanced" ? 1.3 : 1.8) / this.rate;
      this.trains.push({ color: Math.random() < 0.5 ? 0 : 1, y: 90 });
    }
    const speed = 90 * this.rate;
    this.trains = this.trains.filter((t) => {
      t.y += speed * dt;
      if (t.y > this.h * 0.62) {
        if (t.color !== this.side) this.hurt();
        else {
          this.got += 1;
          this.addScore(12, this.w / 2, t.y);
          this.progress = this.got / this.goal;
          if (this.got >= this.goal) {
            this.addScore(28, this.w / 2, 80);
            this.win();
          }
        }
        return false;
      }
      return true;
    });
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#d5f6f6", "#fff6e4");
    ctx.strokeStyle = PAL.inkSoft;
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(this.w / 2, 80);
    ctx.lineTo(this.w / 2, this.h * 0.5);
    ctx.lineTo(this.side === 0 ? this.w * 0.28 : this.w * 0.72, this.h * 0.78);
    ctx.stroke();
    fillRound(ctx, this.w * 0.28 - 30, this.h * 0.78, 60, 28, 6, PAL.royal);
    fillRound(ctx, this.w * 0.72 - 30, this.h * 0.78, 60, 28, 6, PAL.gold);
    label(ctx, "Blue", this.w * 0.28, this.h * 0.78 + 14, 12, PAL.foam);
    label(ctx, "Gold", this.w * 0.72, this.h * 0.78 + 14, 12, PAL.ink);
    for (const t of this.trains) {
      fillRound(ctx, this.w / 2 - 16, t.y, 32, 20, 4, t.color === 0 ? PAL.royal : PAL.gold);
    }
    label(ctx, "Tap to switch", this.w / 2, this.h - this.chromeBottom - 24, 14, PAL.ink);
  }
}

class Airport extends Game {
  planes: { angle: number; dist: number; alive: boolean }[] = [];
  spawn = 0.2;
  got = 0;
  goal = 8;
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.goal = diff === "beginner" ? 6 : 8;
    this.planes = [];
    this.got = 0;
    this.spawn = 0.2;
    this.info = "Tap a plane while it is inside the ring.";
  }
  update(dt: number, input: Input) {
    this.spawn -= dt;
    if (this.spawn <= 0) {
      this.spawn = (this.diff === "advanced" ? 1.1 : 1.5) / this.rate;
      this.planes.push({ angle: Math.random() * Math.PI * 2, dist: Math.min(this.w, this.h) * 0.45, alive: true });
    }
    const speed = 28 * this.rate;
    for (const p of this.planes) p.dist -= speed * dt;
    if (input.justDown) {
      const cx = this.w / 2;
      const cy = this.h * 0.46;
      const hit = this.planes.find((p) => {
        const x = cx + Math.cos(p.angle) * p.dist;
        const y = cy + Math.sin(p.angle) * p.dist * 0.72;
        return p.alive && Math.hypot(input.px - x, input.py - y) < 26;
      });
      if (hit) {
        const inRing = hit.dist < 120 && hit.dist > 70;
        if (inRing) {
          hit.alive = false;
          this.got += 1;
          this.addScore(14, input.px, input.py);
          this.progress = this.got / this.goal;
          if (this.got >= this.goal) {
            this.addScore(28, cx, cy);
            this.win();
          }
        } else this.hurt();
      }
    }
    for (const p of this.planes) {
      if (p.alive && p.dist < 36) {
        p.alive = false;
        this.hurt();
      }
    }
    this.planes = this.planes.filter((p) => p.alive);
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#12324a", "#1d4d6e");
    const cx = this.w / 2;
    const cy = this.h * 0.46;
    ctx.strokeStyle = PAL.gold;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(cx, cy, 95, 68, 0, 0, Math.PI * 2);
    ctx.stroke();
    fillRound(ctx, cx - 14, cy - 10, 28, 20, 4, PAL.foam);
    for (const p of this.planes) {
      const x = cx + Math.cos(p.angle) * p.dist;
      const y = cy + Math.sin(p.angle) * p.dist * 0.72;
      ctx.fillStyle = PAL.gold;
      ctx.beginPath();
      ctx.arc(x, y, 10, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

export function cityBuilder() { return new City(); }
export function bridgeBuilder() { return new Bridge(); }
export function constructionCrew() { return new Construction(); }
export function trainAdventure() { return new TrainGame(); }
export function airportManager() { return new Airport(); }
