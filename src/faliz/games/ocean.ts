import { choiceGrid, clamp, drawPup, fillRound, hitRect, label, paintButton, PAL, sky } from "../engine/draw";
import { Game, type Diff, type Input } from "../engine/game";

class Underwater extends Game {
  x = 0;
  y = 0;
  air = 1;
  pearls: { x: number; y: number }[] = [];
  bubbles: { x: number; y: number }[] = [];
  jellies: { x: number; y: number; vy: number }[] = [];
  got = 0;
  goal = 8;
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.goal = diff === "beginner" ? 6 : 8;
    this.x = this.w / 2;
    this.y = 120;
    this.air = 1;
    this.got = 0;
    this.pearls = Array.from({ length: 4 }, () => this.spot());
    this.bubbles = Array.from({ length: 2 }, () => this.spot());
    this.jellies = Array.from({ length: diff === "advanced" ? 3 : 2 }, () => ({ ...this.spot(), vy: 30 + Math.random() * 40 }));
    this.info = "Collect pearls. Grab bubbles for air.";
  }
  spot() {
    return { x: 30 + Math.random() * (this.w - 60), y: 100 + Math.random() * (this.h - this.chromeBottom - 150) };
  }
  update(dt: number, input: Input) {
    const sp = 180;
    const moving = Math.abs(input.ax) + Math.abs(input.ay) > 0.2;
    this.x = clamp(this.x + input.ax * sp * dt, 18, this.w - 18);
    this.y = clamp(this.y + input.ay * sp * dt, 70, this.h - this.chromeBottom - 18);
    this.air -= dt * (moving ? 0.07 : 0.035) * this.rate;
    if (this.y < 90) this.air = Math.min(1, this.air + dt * 0.4);
    const take = (list: { x: number; y: number }[], r: number) => {
      const i = list.findIndex((p) => Math.hypot(p.x - this.x, p.y - this.y) < r);
      if (i >= 0) return list.splice(i, 1)[0];
      return null;
    };
    if (take(this.pearls, 24)) {
      this.got += 1;
      this.addScore(14, this.x, this.y);
      this.pearls.push(this.spot());
    }
    if (take(this.bubbles, 24)) {
      this.air = Math.min(1, this.air + 0.35);
      this.bubbles.push(this.spot());
      this.fx.push("ok");
    }
    for (const j of this.jellies) {
      j.y += j.vy * dt;
      if (j.y > this.h - 40 || j.y < 80) j.vy *= -1;
      if (Math.hypot(j.x - this.x, j.y - this.y) < 24) {
        this.hurt();
        j.x = 20;
      }
    }
    this.progress = this.got / this.goal;
    if (this.air <= 0) {
      this.mode = "lose";
      this.fx.push("lose");
    }
    if (this.got >= this.goal) {
      this.addScore(28, this.x, this.y);
      this.win();
    }
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#0e6ea8", "#08345c");
    ctx.fillStyle = "rgba(255,255,255,0.25)";
    ctx.fillRect(0, 64, this.w, 8);
    label(ctx, `Air ${Math.round(this.air * 100)}%`, this.w / 2, 78, 14, PAL.foam);
    for (const p of this.pearls) {
      ctx.fillStyle = "#f2f6ff";
      ctx.beginPath();
      ctx.arc(p.x, p.y, 8, 0, Math.PI * 2);
      ctx.fill();
    }
    for (const b of this.bubbles) {
      ctx.strokeStyle = PAL.foam;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(b.x, b.y, 10, 0, Math.PI * 2);
      ctx.stroke();
    }
    for (const j of this.jellies) {
      ctx.fillStyle = "#d56bff";
      ctx.beginPath();
      ctx.arc(j.x, j.y, 14, 0, Math.PI * 2);
      ctx.fill();
    }
    drawPup(ctx, this.x, this.y, 18, "wow");
  }
}

class Dolphin extends Game {
  y = 200;
  vy = 0;
  rings: { x: number; y: number; got: boolean }[] = [];
  mines: { x: number; y: number }[] = [];
  got = 0;
  goal = 8;
  scroll = 0;
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.goal = diff === "beginner" ? 6 : 10;
    this.y = this.h / 2;
    this.vy = 0;
    this.got = 0;
    this.scroll = this.w;
    this.rings = [];
    this.mines = [];
    this.info = "Leap through the rings.";
  }
  update(dt: number, input: Input) {
    if (input.flapJust || input.justDown) {
      this.vy = -320;
      this.tapJump();
    }
    this.vy += 700 * dt;
    this.y += this.vy * dt;
    const speed = 150 * this.rate;
    if (this.rings.length < 3) {
      this.rings.push({ x: this.scroll, y: 120 + Math.random() * (this.h - this.chromeBottom - 200), got: false });
      if (Math.random() < 0.7) this.mines.push({ x: this.scroll + 40, y: 100 + Math.random() * (this.h - 220) });
      this.scroll += 240;
    }
    for (const r of this.rings) r.x -= speed * dt;
    for (const m of this.mines) m.x -= speed * dt;
    this.scroll -= speed * dt;
    for (const r of this.rings) {
      if (!r.got && Math.abs(r.x - 80) < 20 && Math.abs(r.y - this.y) < 34) {
        r.got = true;
        this.got += 1;
        this.addScore(12, r.x, r.y);
      }
    }
    for (const m of this.mines) {
      if (Math.hypot(m.x - 80, m.y - this.y) < 22) {
        this.hurt();
        m.x = -99;
      }
    }
    this.rings = this.rings.filter((r) => r.x > -30);
    this.mines = this.mines.filter((m) => m.x > -30);
    if (this.y < 60 || this.y > this.h - 30) {
      this.hurt();
      this.y = this.h / 2;
      this.vy = 0;
    }
    this.progress = this.got / this.goal;
    if (this.got >= this.goal) {
      this.addScore(28, 80, this.y);
      this.win();
    }
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#1487c8", "#062844");
    for (const r of this.rings) {
      ctx.strokeStyle = r.got ? PAL.inkSoft : PAL.gold;
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.arc(r.x, r.y, 26, 0, Math.PI * 2);
      ctx.stroke();
    }
    for (const m of this.mines) {
      ctx.fillStyle = PAL.ink;
      ctx.beginPath();
      ctx.arc(m.x, m.y, 12, 0, Math.PI * 2);
      ctx.fill();
    }
    fillRound(ctx, 62, this.y - 12, 40, 22, 10, PAL.lagoon);
    label(ctx, "Dolphin", 82, this.y, 10, PAL.ink);
  }
}

const FISH = [
  { name: "Striped", color: PAL.gold },
  { name: "Round", color: PAL.berry },
  { name: "Tiny", color: PAL.leaf },
  { name: "Long", color: PAL.royal },
];

class OceanPhoto extends Game {
  want = 0;
  fish: { kind: number; x: number; y: number; vx: number }[] = [];
  got = 0;
  goal = 6;
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.goal = diff === "beginner" ? 5 : 7;
    this.got = 0;
    this.want = 0;
    this.fish = Array.from({ length: 6 }, () => this.make());
    this.info = `Photograph the ${FISH[0]!.name} fish.`;
  }
  make() {
    return {
      kind: Math.floor(Math.random() * FISH.length),
      x: Math.random() * this.w,
      y: 110 + Math.random() * (this.h - this.chromeBottom - 180),
      vx: 40 + Math.random() * 70,
    };
  }
  update(dt: number, input: Input) {
    for (const f of this.fish) {
      f.x += f.vx * dt * this.rate;
      if (f.x > this.w + 20) {
        f.x = -20;
        f.kind = Math.floor(Math.random() * FISH.length);
        f.y = 110 + Math.random() * (this.h - this.chromeBottom - 180);
      }
    }
    if (!input.justDown) return;
    const hit = this.fish.find((f) => Math.hypot(input.px - f.x, input.py - f.y) < 26);
    if (!hit) return;
    if (hit.kind === this.want) {
      this.addScore(16, hit.x, hit.y);
      this.got += 1;
      hit.x = this.w + 30;
      this.progress = this.got / this.goal;
      this.want = (this.want + 1) % FISH.length;
      this.info = `Photograph the ${FISH[this.want]!.name} fish.`;
      if (this.got >= this.goal) {
        this.addScore(24, this.w / 2, 80);
        this.win();
      }
    } else this.hurt();
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#1a8fc4", "#0a3e66");
    const want = FISH[this.want]!;
    fillRound(ctx, 16, 70, 120, 36, 10, PAL.cream);
    label(ctx, want.name, 76, 88, 14, want.color);
    for (const f of this.fish) {
      ctx.fillStyle = FISH[f.kind]!.color;
      ctx.beginPath();
      ctx.ellipse(f.x, f.y, f.kind === 3 ? 22 : 16, f.kind === 1 ? 16 : 10, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

class FishGrow extends Game {
  x = 0;
  y = 0;
  size = 14;
  goal = 28;
  bits: { x: number; y: number; r: number }[] = [];
  big: { x: number; y: number; vx: number; vy: number }[] = [];
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.x = this.w / 2;
    this.y = this.h / 2;
    this.size = 12;
    this.goal = diff === "beginner" ? 24 : 30;
    this.bits = Array.from({ length: 8 }, () => this.bit(8));
    this.big = Array.from({ length: diff === "advanced" ? 3 : 2 }, () => ({
      x: Math.random() * this.w,
      y: 100 + Math.random() * 200,
      vx: 50 * (Math.random() < 0.5 ? -1 : 1),
      vy: 30 * (Math.random() < 0.5 ? -1 : 1),
    }));
    this.info = "Eat smaller fish. Avoid bigger ones.";
  }
  bit(r: number) {
    return { x: Math.random() * this.w, y: 90 + Math.random() * (this.h - 180), r };
  }
  update(dt: number, input: Input) {
    this.x = clamp(this.x + input.ax * 200 * dt, 16, this.w - 16);
    this.y = clamp(this.y + input.ay * 200 * dt, 80, this.h - this.chromeBottom - 16);
    this.bits = this.bits.filter((b) => {
      if (b.r < this.size && Math.hypot(b.x - this.x, b.y - this.y) < this.size) {
        this.size += 1.1;
        this.addScore(8, b.x, b.y);
        return false;
      }
      return true;
    });
    while (this.bits.length < 7) this.bits.push(this.bit(6 + Math.random() * (this.size + 8)));
    for (const b of this.big) {
      b.x += b.vx * dt;
      b.y += b.vy * dt;
      if (b.x < 10 || b.x > this.w - 10) b.vx *= -1;
      if (b.y < 80 || b.y > this.h - 80) b.vy *= -1;
      if (Math.hypot(b.x - this.x, b.y - this.y) < 20 + this.size * 0.3) this.hurt();
    }
    this.progress = clamp((this.size - 12) / (this.goal - 12), 0, 1);
    if (this.size >= this.goal) {
      this.addScore(36, this.x, this.y);
      this.win();
    }
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#1478b8", "#0a3048");
    for (const b of this.bits) {
      ctx.fillStyle = b.r < this.size ? PAL.gold : PAL.berry;
      ctx.beginPath();
      ctx.arc(b.x, b.y, Math.max(4, b.r * 0.4), 0, Math.PI * 2);
      ctx.fill();
    }
    for (const b of this.big) {
      ctx.fillStyle = PAL.ink;
      ctx.beginPath();
      ctx.ellipse(b.x, b.y, 26, 14, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = PAL.orange;
    ctx.beginPath();
    ctx.ellipse(this.x, this.y, this.size, this.size * 0.62, 0, 0, Math.PI * 2);
    ctx.fill();
  }
}

class Coral extends Game {
  n = 3;
  pattern: number[] = [];
  mine: number[] = [];
  hide = true;
  colors = [PAL.berry, PAL.gold, PAL.leaf, PAL.royal];
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.n = diff === "advanced" ? 4 : 3;
    const total = this.n * this.n;
    this.pattern = Array.from({ length: total }, () => Math.floor(Math.random() * (diff === "beginner" ? 3 : 4)));
    this.mine = Array.from({ length: total }, () => 0);
    this.hide = diff !== "beginner";
    this.time = 0;
    this.info = diff === "beginner" ? "Copy the reef. The guide stays up." : "Remember the reef, then copy it.";
  }
  geom() {
    const size = Math.min(64, (this.w - 40) / this.n);
    return { size, ox: (this.w - size * this.n) / 2, oy: this.hide && this.time > 2 ? 150 : 250 };
  }
  update(_dt: number, input: Input) {
    if (this.hide && this.time < 2.2) return;
    if (!input.justDown) return;
    const buttons = choiceGrid(this.w, this.h, this.chromeBottom, 1);
    const check = buttons[0]!;
    if (hitRect(input.px, input.py, check)) {
      const ok = this.mine.every((v, i) => v === this.pattern[i]);
      if (ok) {
        this.addScore(80, this.w / 2, 80);
        this.win();
      } else this.hurt();
      return;
    }
    const { size, ox, oy } = this.geom();
    const c = Math.floor((input.px - ox) / size);
    const r = Math.floor((input.py - oy) / size);
    if (c < 0 || r < 0 || c >= this.n || r >= this.n) return;
    const i = r * this.n + c;
    this.mine[i] = ((this.mine[i] ?? 0) + 1) % this.colors.length;
    this.fx.push("tap");
    const same = this.mine.filter((v, idx) => v === this.pattern[idx]).length;
    this.progress = same / this.mine.length;
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#0c6e86", "#083044");
    const { size, ox, oy } = this.geom();
    const drawGrid = (cells: number[], x0: number, y0: number, s: number) => {
      cells.forEach((v, i) => {
        const r = Math.floor(i / this.n);
        const c = i % this.n;
        ctx.fillStyle = this.colors[v % this.colors.length]!;
        ctx.beginPath();
        ctx.arc(x0 + c * s + s / 2, y0 + r * s + s / 2, s * 0.32, 0, Math.PI * 2);
        ctx.fill();
      });
    };
    if (!this.hide || this.time < 2.2) {
      label(ctx, "Guide", this.w / 2, 90, 14, PAL.foam);
      const gs = 28;
      drawGrid(this.pattern, (this.w - gs * this.n) / 2, 104, gs);
    } else label(ctx, "Guide hidden", this.w / 2, 100, 16, PAL.foam);
    drawGrid(this.mine, ox, oy, size);
    const check = choiceGrid(this.w, this.h, this.chromeBottom, 1)[0]!;
    paintButton(ctx, check, "Check reef", PAL.gold, true);
  }
}

export function underwater() { return new Underwater(); }
export function dolphinRescue() { return new Dolphin(); }
export function oceanExplorer() { return new OceanPhoto(); }
export function fishAdventure() { return new FishGrow(); }
export function coralReef() { return new Coral(); }
