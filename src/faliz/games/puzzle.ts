import {
  clamp,
  drawPup,
  drawStar,
  fillRound,
  heroText,
  hitRect,
  label,
  near,
  PAL,
  sky,
} from "../engine/draw";
import { Game, type Diff, type Input } from "../engine/game";

class Jigsaw extends Game {
  n = 3;
  tiles: number[] = [];
  empty = 0;
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.n = diff === "advanced" ? 4 : 3;
    const total = this.n * this.n;
    this.tiles = Array.from({ length: total }, (_, i) => i);
    this.empty = total - 1;
    const steps = diff === "beginner" ? 14 : diff === "advanced" ? 48 : 26;
    for (let i = 0; i < steps; i++) {
      const opts = this.neigh(this.empty);
      this.swap(opts[Math.floor(Math.random() * opts.length)]!);
    }
    if (this.solved()) this.swap(this.neigh(this.empty)[0]!);
    this.info = "Slide tiles into place to finish the picture.";
  }
  neigh(i: number) {
    const n = this.n;
    const r = Math.floor(i / n);
    const c = i % n;
    const out: number[] = [];
    if (r > 0) out.push(i - n);
    if (r < n - 1) out.push(i + n);
    if (c > 0) out.push(i - 1);
    if (c < n - 1) out.push(i + 1);
    return out;
  }
  swap(i: number) {
    const tmp = this.tiles[i]!;
    this.tiles[i] = this.tiles[this.empty]!;
    this.tiles[this.empty] = tmp;
    this.empty = i;
  }
  solved() {
    return this.tiles.every((t, i) => t === i);
  }
  board() {
    const n = this.n;
    const size = Math.min((this.w - 28) / n, (this.h - this.chromeBottom - 120) / n);
    const ox = (this.w - size * n) / 2;
    const oy = 100;
    return { n, size, ox, oy };
  }
  update(_dt: number, input: Input) {
    if (!input.justDown) return;
    const { n, size, ox, oy } = this.board();
    const c = Math.floor((input.px - ox) / size);
    const r = Math.floor((input.py - oy) / size);
    if (c < 0 || r < 0 || c >= n || r >= n) return;
    const i = r * n + c;
    if (!this.neigh(this.empty).includes(i)) return;
    this.swap(i);
    this.fx.push("tap");
    const fixed = this.tiles.filter((t, idx) => t === idx).length;
    this.progress = fixed / this.tiles.length;
    this.addScore(4, input.px, input.py);
    if (this.solved()) {
      this.addScore(40, this.w / 2, 70);
      this.win();
    }
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#efe4ff", "#fff6e4");
    const { n, size, ox, oy } = this.board();
    const colors = [PAL.gold, PAL.royal, PAL.berry, PAL.leaf, PAL.grape, PAL.lagoonDeep, PAL.orange, "#fff"];
    this.tiles.forEach((id, i) => {
      if (id === n * n - 1) return;
      const r = Math.floor(i / n);
      const c = i % n;
      const sr = Math.floor(id / n);
      const sc = id % n;
      fillRound(ctx, ox + c * size + 3, oy + r * size + 3, size - 6, size - 6, 10, colors[(sr * 3 + sc) % colors.length]!);
      label(ctx, String(id + 1), ox + c * size + size / 2, oy + r * size + size / 2, 18, PAL.ink);
    });
  }
}

const SHAPES = ["circle", "square", "triangle"] as const;
const COLS = [PAL.royal, PAL.berry, PAL.gold];

class ShapeMatch extends Game {
  shape = 0;
  color = 0;
  y = 0;
  bin = 1;
  rule: "shape" | "color" = "shape";
  cool = 0;
  got = 0;
  goal = 8;
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.goal = diff === "beginner" ? 6 : 10;
    this.got = 0;
    this.spawn();
  }
  spawn() {
    this.shape = Math.floor(Math.random() * 3);
    this.color = Math.floor(Math.random() * 3);
    this.y = 120;
    this.rule = Math.random() < 0.5 ? "shape" : "color";
    this.bin = 1;
    this.info = this.rule === "shape" ? "Sort by shape." : "Sort by colour.";
    this.progress = this.got / this.goal;
  }
  update(dt: number, input: Input) {
    this.cool -= dt;
    if (this.cool <= 0 && Math.abs(input.ax) > 0.4) {
      this.bin = clamp(this.bin + (input.ax > 0 ? 1 : -1), 0, 2);
      this.cool = 0.18;
    }
    this.y += dt * 90 * this.rate;
    const floor = this.h - this.chromeBottom - 90;
    if (this.y < floor) return;
    const ok = this.rule === "shape" ? this.bin === this.shape : this.bin === this.color;
    if (ok) {
      this.addScore(12, this.w / 2, this.y);
      this.got += 1;
      if (this.got >= this.goal) {
        this.addScore(28, this.w / 2, 80);
        this.win();
        return;
      }
    } else this.hurt();
    if (this.mode === "play") this.spawn();
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#f3e8ff", "#efe4ff");
    const names = ["Circle", "Square", "Triangle"];
    const bw = (this.w - 32) / 3;
    for (let i = 0; i < 3; i++) {
      const x = 12 + i * (bw + 4);
      const y = this.h - this.chromeBottom - 78;
      fillRound(ctx, x, y, bw, 64, 12, this.bin === i ? PAL.gold : PAL.foam);
      label(ctx, this.rule === "shape" ? names[i]! : `Colour ${i + 1}`, x + bw / 2, y + 32, 12, PAL.ink);
      ctx.fillStyle = COLS[i]!;
      ctx.beginPath();
      ctx.arc(x + 18, y + 20, 8, 0, Math.PI * 2);
      ctx.fill();
    }
    const x = this.w / 2;
    ctx.fillStyle = COLS[this.color]!;
    if (SHAPES[this.shape] === "circle") {
      ctx.beginPath();
      ctx.arc(x, this.y, 22, 0, Math.PI * 2);
      ctx.fill();
    } else if (SHAPES[this.shape] === "square") {
      fillRound(ctx, x - 20, this.y - 20, 40, 40, 6, COLS[this.color]!);
    } else {
      ctx.beginPath();
      ctx.moveTo(x, this.y - 24);
      ctx.lineTo(x + 22, this.y + 18);
      ctx.lineTo(x - 22, this.y + 18);
      ctx.closePath();
      ctx.fill();
    }
  }
}

const ICONS = ["star", "moon", "heart", "drop", "sun", "gem", "leaf", "bolt"] as const;

class Memory extends Game {
  cols = 4;
  rows = 2;
  deck: number[] = [];
  up: number[] = [];
  gone = new Set<number>();
  lock = 0;
  matched = 0;
  pairs = 4;
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.pairs = diff === "beginner" ? 3 : diff === "advanced" ? 8 : 6;
    this.cols = this.pairs > 6 ? 4 : this.pairs > 3 ? 4 : 3;
    this.rows = Math.ceil((this.pairs * 2) / this.cols);
    const ids = Array.from({ length: this.pairs }, (_, i) => i);
    this.deck = [...ids, ...ids].sort(() => Math.random() - 0.5);
    this.up = [];
    this.gone = new Set();
    this.lock = 0;
    this.matched = 0;
    this.info = "Find every matching pair.";
  }
  grid() {
    const gap = 8;
    const size = Math.min(86, (this.w - 24 - gap * (this.cols - 1)) / this.cols, (this.h - this.chromeBottom - 110) / this.rows);
    const ox = (this.w - (size * this.cols + gap * (this.cols - 1))) / 2;
    return { size, gap, ox, oy: 96 };
  }
  update(dt: number, input: Input) {
    if (this.lock > 0) {
      this.lock -= dt;
      if (this.lock <= 0 && this.up.length === 2) {
        const [a, b] = this.up;
        if (this.deck[a!] === this.deck[b!]) {
          this.gone.add(a!);
          this.gone.add(b!);
          this.matched += 1;
          this.addScore(16, this.w / 2, 70);
          this.progress = this.matched / this.pairs;
          if (this.matched >= this.pairs) {
            this.addScore(28, this.w / 2, 70);
            this.win();
          }
        }
        this.up = [];
      }
      return;
    }
    if (!input.justDown) return;
    const { size, gap, ox, oy } = this.grid();
    const c = Math.floor((input.px - ox) / (size + gap));
    const r = Math.floor((input.py - oy) / (size + gap));
    if (c < 0 || r < 0 || c >= this.cols || r >= this.rows) return;
    const i = r * this.cols + c;
    if (i >= this.deck.length || this.gone.has(i) || this.up.includes(i)) return;
    this.up.push(i);
    this.fx.push("tap");
    if (this.up.length === 2) this.lock = 0.55;
  }
  paintIcon(ctx: CanvasRenderingContext2D, kind: number, x: number, y: number) {
    const name = ICONS[kind % ICONS.length];
    ctx.fillStyle = [PAL.gold, PAL.royal, PAL.berry, PAL.leaf, PAL.grape, PAL.orange, PAL.lagoonDeep, PAL.goldDeep][kind % 8]!;
    if (name === "star") drawStar(ctx, x, y, 16);
    else if (name === "heart") {
      ctx.beginPath();
      ctx.arc(x - 6, y, 7, 0, Math.PI * 2);
      ctx.arc(x + 6, y, 7, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.beginPath();
      ctx.arc(x, y, 12, 0, Math.PI * 2);
      ctx.fill();
      label(ctx, name!.slice(0, 1).toUpperCase(), x, y, 14, PAL.ink);
    }
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#efe4ff", "#fff6e4");
    const { size, gap, ox, oy } = this.grid();
    this.deck.forEach((_, i) => {
      if (this.gone.has(i)) return;
      const r = Math.floor(i / this.cols);
      const c = i % this.cols;
      const x = ox + c * (size + gap);
      const y = oy + r * (size + gap);
      const open = this.up.includes(i);
      fillRound(ctx, x, y, size, size, 12, open ? PAL.cream : PAL.grape);
      if (open) this.paintIcon(ctx, this.deck[i]!, x + size / 2, y + size / 2);
      else label(ctx, "?", x + size / 2, y + size / 2, 22, PAL.foam);
    });
  }
}

class Difference extends Game {
  spots: { x: number; y: number; found: boolean }[] = [];
  goal = 5;
  seed = 1;
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.goal = diff === "beginner" ? 4 : 5;
    this.seed = 1 + Math.floor(Math.random() * 99);
    this.spots = [];
    const rnd = () => {
      this.seed = (this.seed * 16807) % 2147483647;
      return (this.seed % 1000) / 1000;
    };
    for (let i = 0; i < this.goal; i++) {
      this.spots.push({ x: 0.15 + rnd() * 0.7, y: 0.18 + rnd() * 0.62, found: false });
    }
    this.info = `Find ${this.goal} changes on the right picture.`;
  }
  update(_dt: number, input: Input) {
    if (!input.justDown) return;
    const panel = this.panel();
    if (input.px < panel.rx) return;
    const lx = (input.px - panel.rx) / panel.pw;
    const ly = (input.py - panel.y) / panel.ph;
    const hit = this.spots.find((s) => !s.found && Math.hypot(lx - s.x, ly - s.y) < 0.12);
    if (!hit) {
      this.hurt();
      return;
    }
    hit.found = true;
    this.addScore(18, input.px, input.py);
    const n = this.spots.filter((s) => s.found).length;
    this.progress = n / this.goal;
    if (n >= this.goal) {
      this.addScore(30, this.w / 2, 60);
      this.win();
    }
  }
  panel() {
    const gap = 10;
    const pw = (this.w - 24 - gap) / 2;
    const ph = Math.min(pw * 1.25, this.h - this.chromeBottom - 120);
    const y = 96;
    return { lx: 12, rx: 12 + pw + gap, y, pw, ph };
  }
  scene(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, extras: boolean) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.clip();
    sky(ctx, this.w, this.h, "#9ad8ff", "#c8f0c0");
    ctx.fillStyle = "#7dce6a";
    ctx.fillRect(x, y + h * 0.72, w, h * 0.28);
    ctx.fillStyle = PAL.gold;
    ctx.beginPath();
    ctx.arc(x + w * 0.78, y + h * 0.22, 16, 0, Math.PI * 2);
    ctx.fill();
    fillRound(ctx, x + w * 0.18, y + h * 0.48, w * 0.28, h * 0.28, 4, PAL.royal);
    ctx.fillStyle = PAL.goldDeep;
    ctx.beginPath();
    ctx.moveTo(x + w * 0.14, y + h * 0.48);
    ctx.lineTo(x + w * 0.32, y + h * 0.32);
    ctx.lineTo(x + w * 0.5, y + h * 0.48);
    ctx.fill();
    drawPup(ctx, x + w * 0.62, y + h * 0.62, 18, "happy");
    if (extras) {
      for (const s of this.spots) {
        if (s.found) continue;
        drawStar(ctx, x + s.x * w, y + s.y * h, 10, PAL.berry);
      }
    }
    ctx.restore();
    ctx.strokeStyle = PAL.ink;
    ctx.lineWidth = 3;
    ctx.strokeRect(x, y, w, h);
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#efe4ff", "#fff6e4");
    const p = this.panel();
    this.scene(ctx, p.lx, p.y, p.pw, p.ph, false);
    this.scene(ctx, p.rx, p.y, p.pw, p.ph, true);
    label(ctx, "Left", p.lx + p.pw / 2, p.y - 16, 14, PAL.ink);
    label(ctx, "Right", p.rx + p.pw / 2, p.y - 16, 14, PAL.ink);
  }
}

class MazeGame extends Game {
  cols = 11;
  rows = 11;
  walls: boolean[][] = [];
  px = 1;
  py = 1;
  cool = 0;
  reset(diff: Diff) {
    this.begin(diff, 1);
    this.lives = 1;
    const n = diff === "beginner" ? 9 : diff === "advanced" ? 15 : 11;
    this.cols = n;
    this.rows = n;
    this.walls = Array.from({ length: n }, () => Array(n).fill(true));
    const carve = (x: number, y: number) => {
      this.walls[y]![x] = false;
      const dirs = [
        [2, 0],
        [-2, 0],
        [0, 2],
        [0, -2],
      ].sort(() => Math.random() - 0.5);
      for (const [dx, dy] of dirs) {
        const nx = x + dx!;
        const ny = y + dy!;
        if (nx > 0 && ny > 0 && nx < n - 1 && ny < n - 1 && this.walls[ny]![nx]) {
          this.walls[y + dy! / 2]![x + dx! / 2] = false;
          carve(nx, ny);
        }
      }
    };
    carve(1, 1);
    this.px = 1;
    this.py = 1;
    this.cool = 0;
    this.info = "Reach the star.";
  }
  tryMove(dx: number, dy: number) {
    const nx = this.px + dx;
    const ny = this.py + dy;
    if (nx < 0 || ny < 0 || nx >= this.cols || ny >= this.rows) return;
    if (this.walls[ny]![nx]) return;
    this.px = nx;
    this.py = ny;
    this.addScore(1);
    if (this.px === this.cols - 2 && this.py === this.rows - 2) {
      this.addScore(50, this.w / 2, 60);
      this.win();
    }
  }
  cellGeom() {
    const size = Math.min((this.w - 16) / this.cols, (this.h - this.chromeBottom - 90) / this.rows);
    const ox = (this.w - size * this.cols) / 2;
    return { size, ox, oy: 88 };
  }
  update(dt: number, input: Input) {
    this.cool -= dt;
    if (this.cool <= 0) {
      if (input.ax > 0.45) this.tryMove(1, 0);
      else if (input.ax < -0.45) this.tryMove(-1, 0);
      else if (input.ay > 0.45) this.tryMove(0, 1);
      else if (input.ay < -0.45) this.tryMove(0, -1);
      if (Math.abs(input.ax) > 0.45 || Math.abs(input.ay) > 0.45) this.cool = 0.16;
    }
    if (input.justDown) {
      const { size, ox, oy } = this.cellGeom();
      const c = Math.floor((input.px - ox) / size);
      const r = Math.floor((input.py - oy) / size);
      if (Math.abs(c - this.px) + Math.abs(r - this.py) === 1) this.tryMove(c - this.px, r - this.py);
    }
    this.progress = 1 - (Math.abs(this.cols - 2 - this.px) + Math.abs(this.rows - 2 - this.py)) / (this.cols + this.rows);
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#d8c8ff", "#fff6e4");
    const { size, ox, oy } = this.cellGeom();
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        ctx.fillStyle = this.walls[y]![x] ? PAL.grape : "#f7f1ff";
        ctx.fillRect(ox + x * size, oy + y * size, size - 1, size - 1);
      }
    }
    drawStar(ctx, ox + (this.cols - 2) * size + size / 2, oy + (this.rows - 2) * size + size / 2, size * 0.28);
    drawPup(ctx, ox + this.px * size + size / 2, oy + this.py * size + size / 2, size * 0.28, "happy");
  }
}

export function jigsaw() { return new Jigsaw(); }
export function shapeMatcher() { return new ShapeMatch(); }
export function memoryQuest() { return new Memory(); }
export function findDifference() { return new Difference(); }
export function magicMaze() { return new MazeGame(); }
