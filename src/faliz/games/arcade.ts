import { clamp, drawCoin, drawPup, drawStar, fillRound, label, PAL, sky } from "../engine/draw";
import { Game, type Diff, type Input } from "../engine/game";

class StarCollector extends Game {
  x = 0;
  y = 0;
  stars: { x: number; y: number }[] = [];
  chasers: { x: number; y: number }[] = [];
  got = 0;
  goal = 10;
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.goal = diff === "beginner" ? 8 : 10;
    this.x = this.w / 2;
    this.y = this.h / 2;
    this.got = 0;
    this.stars = Array.from({ length: 4 }, () => this.spot());
    const n = diff === "advanced" ? 3 : diff === "beginner" ? 1 : 2;
    this.chasers = Array.from({ length: n }, () => ({ x: 40, y: 80 }));
    this.info = `Collect ${this.goal} stars.`;
  }
  spot() {
    return {
      x: 30 + Math.random() * (this.w - 60),
      y: 90 + Math.random() * (this.h - this.chromeBottom - 140),
    };
  }
  update(dt: number, input: Input) {
    const sp = 210 / this.rate;
    this.x = clamp(this.x + input.ax * sp * dt, 20, this.w - 20);
    this.y = clamp(this.y + input.ay * sp * dt, 70, this.h - this.chromeBottom - 24);
    this.stars = this.stars.filter((s) => {
      if (Math.hypot(s.x - this.x, s.y - this.y) < 28) {
        this.got += 1;
        this.addScore(12, s.x, s.y);
        return false;
      }
      return true;
    });
    while (this.stars.length < 3 && this.got < this.goal) this.stars.push(this.spot());
    const chase = 70 * this.rate;
    for (const c of this.chasers) {
      const d = Math.hypot(this.x - c.x, this.y - c.y) || 1;
      c.x += ((this.x - c.x) / d) * chase * dt;
      c.y += ((this.y - c.y) / d) * chase * dt;
      if (Math.hypot(c.x - this.x, c.y - this.y) < 26) {
        this.hurt();
        c.x = 30;
        c.y = 80;
      }
    }
    this.progress = this.got / this.goal;
    if (this.got >= this.goal) {
      this.addScore(30, this.x, this.y);
      this.win();
    }
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#2a2150", "#6d4ea5");
    for (const s of this.stars) drawStar(ctx, s.x, s.y, 14);
    for (const c of this.chasers) {
      ctx.fillStyle = PAL.berry;
      ctx.beginPath();
      ctx.arc(c.x, c.y, 16, 0, Math.PI * 2);
      ctx.fill();
      label(ctx, "!", c.x, c.y, 16, PAL.foam);
    }
    drawPup(ctx, this.x, this.y, 22, "wow");
  }
}

class BubblePop extends Game {
  cols = 7;
  rows = 7;
  cells: number[][] = [];
  colors = 4;
  target = 120;
  reset(diff: Diff) {
    this.begin(diff, 1);
    this.lives = 3;
    this.colors = diff === "beginner" ? 3 : diff === "advanced" ? 5 : 4;
    this.target = diff === "beginner" ? 80 : diff === "advanced" ? 160 : 120;
    this.cols = 7;
    this.rows = 8;
    this.cells = Array.from({ length: this.rows }, () =>
      Array.from({ length: this.cols }, () => Math.floor(Math.random() * this.colors)),
    );
    this.info = "Pop groups of 3 or more.";
  }
  geom() {
    const size = Math.min(52, (this.w - 16) / this.cols, (this.h - this.chromeBottom - 100) / this.rows);
    const ox = (this.w - size * this.cols) / 2;
    return { size, ox, oy: 92 };
  }
  groupAt(r: number, c: number) {
    const color = this.cells[r]?.[c];
    if (color == null || color < 0) return [];
    const seen = new Set<string>();
    const out: { r: number; c: number }[] = [];
    const stack = [{ r, c }];
    while (stack.length) {
      const cur = stack.pop()!;
      const key = `${cur.r},${cur.c}`;
      if (seen.has(key)) continue;
      if (this.cells[cur.r]?.[cur.c] !== color) continue;
      seen.add(key);
      out.push(cur);
      stack.push({ r: cur.r + 1, c: cur.c }, { r: cur.r - 1, c: cur.c }, { r: cur.r, c: cur.c + 1 }, { r: cur.r, c: cur.c - 1 });
    }
    return out;
  }
  hasMove() {
    for (let r = 0; r < this.rows; r++) for (let c = 0; c < this.cols; c++) if (this.groupAt(r, c).length >= 3) return true;
    return false;
  }
  collapse() {
    for (let c = 0; c < this.cols; c++) {
      const stack: number[] = [];
      for (let r = this.rows - 1; r >= 0; r--) if (this.cells[r]![c]! >= 0) stack.push(this.cells[r]![c]!);
      for (let r = this.rows - 1; r >= 0; r--) this.cells[r]![c] = stack.length ? stack.shift()! : -1;
    }
  }
  update(_dt: number, input: Input) {
    if (!this.hasMove()) {
      for (let r = 0; r < this.rows; r++) {
        for (let c = 0; c < this.cols; c++) if (this.cells[r]![c]! < 0) this.cells[r]![c] = Math.floor(Math.random() * this.colors);
      }
    }
    if (!input.justDown) return;
    const { size, ox, oy } = this.geom();
    const c = Math.floor((input.px - ox) / size);
    const r = Math.floor((input.py - oy) / size);
    if (r < 0 || c < 0 || r >= this.rows || c >= this.cols) return;
    const group = this.groupAt(r, c);
    if (group.length < 3) {
      this.fx.push("bad");
      return;
    }
    for (const g of group) this.cells[g.r]![g.c] = -1;
    this.collapse();
    this.addScore(group.length * 8, input.px, input.py);
    this.progress = Math.min(1, this.points / this.target);
    if (this.points >= this.target) {
      this.addScore(20, this.w / 2, 60);
      this.win();
    }
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#20345f", "#7f5af0");
    const palette = [PAL.berry, PAL.gold, PAL.leaf, PAL.lagoon, PAL.foam, PAL.orange];
    const { size, ox, oy } = this.geom();
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        const v = this.cells[r]![c]!;
        if (v < 0) continue;
        ctx.beginPath();
        ctx.arc(ox + c * size + size / 2, oy + r * size + size / 2, size * 0.38, 0, Math.PI * 2);
        ctx.fillStyle = palette[v % palette.length]!;
        ctx.fill();
        ctx.strokeStyle = "rgba(255,255,255,0.7)";
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }
  }
}

class FruitCatch extends Game {
  x = 0;
  items: { x: number; y: number; vy: number; good: boolean }[] = [];
  spawn = 0;
  got = 0;
  goal = 12;
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.goal = diff === "beginner" ? 10 : 14;
    this.x = this.w / 2;
    this.items = [];
    this.got = 0;
    this.spawn = 0.2;
    this.info = "Catch fruit. Dodge bombs.";
  }
  update(dt: number, input: Input) {
    this.x = clamp(input.px, 30, this.w - 30);
    this.spawn -= dt;
    if (this.spawn <= 0) {
      this.spawn = (this.diff === "advanced" ? 0.45 : 0.7) / this.rate;
      this.items.push({
        x: 24 + Math.random() * (this.w - 48),
        y: -20,
        vy: 120 + 80 * this.rate,
        good: Math.random() > 0.22,
      });
    }
    const basketY = this.h - this.chromeBottom - 36;
    this.items = this.items.filter((it) => {
      it.y += it.vy * dt;
      if (it.y > basketY && Math.abs(it.x - this.x) < 42 && it.y < basketY + 30) {
        if (it.good) {
          this.got += 1;
          this.addScore(10, it.x, it.y);
        } else this.hurt();
        return false;
      }
      return it.y < this.h + 20;
    });
    this.progress = this.got / this.goal;
    if (this.got >= this.goal) {
      this.addScore(30, this.x, basketY);
      this.win();
    }
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#b7ecff", "#d9f8c8");
    for (const it of this.items) {
      if (it.good) {
        ctx.fillStyle = PAL.berry;
        ctx.beginPath();
        ctx.arc(it.x, it.y, 14, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = PAL.leaf;
        ctx.fillRect(it.x - 2, it.y - 22, 4, 10);
      } else {
        fillRound(ctx, it.x - 14, it.y - 14, 28, 28, 6, PAL.ink);
        label(ctx, "x", it.x, it.y, 16, PAL.gold);
      }
    }
    const y = this.h - this.chromeBottom - 28;
    fillRound(ctx, this.x - 40, y, 80, 22, 10, PAL.orange);
    drawPup(ctx, this.x, y - 18, 16, "happy");
  }
}

class Breakout extends Game {
  px = 0;
  ball = { x: 0, y: 0, vx: 160, vy: -220 };
  bricks: { x: number; y: number; alive: boolean; color: string }[] = [];
  launched = false;
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.px = this.w / 2;
    this.launched = false;
    const cols = diff === "advanced" ? 8 : 7;
    const rows = diff === "beginner" ? 3 : diff === "advanced" ? 5 : 4;
    const bw = (this.w - 24) / cols;
    const colors = [PAL.berry, PAL.gold, PAL.royal, PAL.leaf, PAL.grape];
    this.bricks = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        this.bricks.push({ x: 12 + c * bw, y: 90 + r * 28, alive: true, color: colors[r % colors.length]! });
      }
    }
    this.sync(false);
    this.info = "Move the paddle. Clear every brick.";
  }
  sync(moving: boolean) {
    if (!moving) {
      this.ball.x = this.px;
      this.ball.y = this.h - this.chromeBottom - 58;
      this.ball.vx = 150 * this.rate * (Math.random() < 0.5 ? -1 : 1);
      this.ball.vy = -240 * this.rate;
    }
  }
  update(dt: number, input: Input) {
    this.px = clamp(input.px, 40, this.w - 40);
    if (!this.launched) {
      this.sync(false);
      if (input.justDown) this.launched = true;
      return;
    }
    this.ball.x += this.ball.vx * dt;
    this.ball.y += this.ball.vy * dt;
    if (this.ball.x < 10 || this.ball.x > this.w - 10) this.ball.vx *= -1;
    if (this.ball.y < 70) this.ball.vy = Math.abs(this.ball.vy);
    const py = this.h - this.chromeBottom - 40;
    if (this.ball.y > py && this.ball.y < py + 20 && Math.abs(this.ball.x - this.px) < 48 && this.ball.vy > 0) {
      this.ball.vy = -Math.abs(this.ball.vy);
      this.ball.vx += (this.ball.x - this.px) * 3;
      this.fx.push("tap");
    }
    const bw = (this.w - 24) / (this.diff === "advanced" ? 8 : 7);
    for (const b of this.bricks) {
      if (!b.alive) continue;
      if (this.ball.x > b.x && this.ball.x < b.x + bw - 4 && this.ball.y > b.y && this.ball.y < b.y + 24) {
        b.alive = false;
        this.ball.vy *= -1;
        this.addScore(8, b.x, b.y);
      }
    }
    if (this.ball.y > this.h) {
      this.hurt();
      this.launched = false;
      this.sync(false);
    }
    const left = this.bricks.filter((b) => b.alive).length;
    this.progress = 1 - left / this.bricks.length;
    if (left === 0) {
      this.addScore(40, this.w / 2, 80);
      this.win();
    }
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#1b2a4a", "#3960a8");
    const bw = (this.w - 24) / (this.diff === "advanced" ? 8 : 7);
    for (const b of this.bricks) {
      if (!b.alive) continue;
      fillRound(ctx, b.x, b.y, bw - 4, 22, 6, b.color);
    }
    const py = this.h - this.chromeBottom - 46;
    fillRound(ctx, this.px - 42, py, 84, 14, 7, PAL.gold);
    ctx.fillStyle = PAL.foam;
    ctx.beginPath();
    ctx.arc(this.ball.x, this.ball.y, 8, 0, Math.PI * 2);
    ctx.fill();
    if (!this.launched) label(ctx, "Tap to serve", this.w / 2, py - 28, 16, PAL.cream);
  }
}

class SkyRunner extends Game {
  y = 0;
  vy = 0;
  gates: { x: number; gapY: number; passed: boolean; coin: boolean }[] = [];
  got = 0;
  goal = 10;
  spawnX = 400;
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.goal = diff === "beginner" ? 8 : 12;
    this.y = this.h * 0.45;
    this.vy = 0;
    this.got = 0;
    this.gates = [];
    this.spawnX = this.w + 40;
    this.info = "Flap through the gaps.";
  }
  update(dt: number, input: Input) {
    if (input.flapJust || input.justDown) {
      this.vy = -340;
      this.tapJump();
    }
    this.vy += 820 * dt;
    this.y += this.vy * dt;
    const speed = 160 * this.rate;
    const gap = this.diff === "beginner" ? 190 : this.diff === "advanced" ? 120 : 150;
    if (!this.gates.length || this.spawnX < this.w + 200) {
      this.gates.push({
        x: this.spawnX,
        gapY: 140 + Math.random() * (this.h - this.chromeBottom - 280),
        passed: false,
        coin: true,
      });
      this.spawnX += 280;
    }
    for (const g of this.gates) {
      g.x -= speed * dt;
      const hx = 88;
      if (!g.passed && g.x < hx) {
        g.passed = true;
        const miss = this.y < g.gapY - gap / 2 || this.y > g.gapY + gap / 2;
        if (miss) this.hurt();
        else {
          this.got += 1;
          this.addScore(10, hx, this.y);
        }
      }
    }
    this.gates = this.gates.filter((g) => g.x > -40);
    this.spawnX -= speed * dt;
    if (this.y < 60 || this.y > this.h - this.chromeBottom - 20) this.hurt();
    if (this.mode === "play" && (this.y < 60 || this.y > this.h - 20)) this.y = this.h * 0.45;
    this.progress = this.got / this.goal;
    if (this.got >= this.goal) {
      this.addScore(30, this.w / 2, 80);
      this.win();
    }
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#79c8ff", "#fff6e4");
    const gap = this.diff === "beginner" ? 190 : this.diff === "advanced" ? 120 : 150;
    for (const g of this.gates) {
      ctx.fillStyle = PAL.leafDeep;
      ctx.fillRect(g.x, 60, 36, g.gapY - gap / 2 - 60);
      ctx.fillRect(g.x, g.gapY + gap / 2, 36, this.h);
      if (g.coin) drawCoin(ctx, g.x + 18, g.gapY, 10);
    }
    drawPup(ctx, 88, this.y, 22, "wow");
  }
}

export function starCollector() { return new StarCollector(); }
export function bubblePop() { return new BubblePop(); }
export function fruitCatcher() { return new FruitCatch(); }
export function superBouncer() { return new Breakout(); }
export function skyRunner() { return new SkyRunner(); }
