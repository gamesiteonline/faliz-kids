import { clamp, fillRound, hitRect, label, meterBar, PAL, sky } from "../engine/draw";
import { Game, type Diff, type Input } from "../engine/game";

class Football extends Game {
  keeper = 1;
  dir = 1;
  got = 0;
  goal = 5;
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.goal = diff === "beginner" ? 4 : 5;
    this.got = 0;
    this.keeper = 1;
    this.dir = 1;
    this.info = "Tap the open side of the goal.";
  }
  update(dt: number, input: Input) {
    this.keeper += this.dir * dt * (this.diff === "beginner" ? 0.6 : 1.3 * this.rate);
    if (this.keeper > 2.2) this.dir = -1;
    if (this.keeper < -0.2) this.dir = 1;
    if (!input.justDown) return;
    const zones = this.zones();
    const i = zones.findIndex((z) => hitRect(input.px, input.py, z));
    if (i < 0) return;
    const covered = Math.round(clamp(this.keeper, 0, 2));
    if (i === covered) this.hurt();
    else {
      this.got += 1;
      this.addScore(18, zones[i]!.x, zones[i]!.y);
      this.progress = this.got / this.goal;
      if (this.got >= this.goal) {
        this.addScore(30, this.w / 2, 80);
        this.win();
      }
    }
  }
  zones() {
    const w = (this.w - 40) / 3;
    return [0, 1, 2].map((i) => ({ x: 16 + i * (w + 4), y: 150, w, h: 120 }));
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#b7e89a", "#e7f8c8");
    const covered = Math.round(clamp(this.keeper, 0, 2));
    this.zones().forEach((z, i) => {
      fillRound(ctx, z.x, z.y, z.w, z.h, 8, "rgba(255,255,255,0.35)");
      ctx.strokeStyle = PAL.foam;
      ctx.strokeRect(z.x, z.y, z.w, z.h);
      if (i === covered) {
        fillRound(ctx, z.x + z.w / 2 - 16, z.y + 40, 32, 48, 8, PAL.royal);
        label(ctx, "Keep", z.x + z.w / 2, z.y + 64, 12, PAL.foam);
      }
    });
  }
}

class Basketball extends Game {
  meter = 0;
  dir = 1;
  got = 0;
  goal = 5;
  good0 = 0.42;
  good1 = 0.62;
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.goal = 5;
    const width = diff === "beginner" ? 0.26 : diff === "advanced" ? 0.12 : 0.18;
    this.good0 = 0.5 - width / 2;
    this.good1 = 0.5 + width / 2;
    this.info = "Tap when the bar is in the green.";
  }
  update(dt: number, input: Input) {
    this.meter += dt * this.dir * (0.85 * this.rate + 0.4);
    if (this.meter > 1 || this.meter < 0) this.dir *= -1;
    this.meter = clamp(this.meter, 0, 1);
    if (!(input.justDown || input.actionJust)) return;
    if (this.meter >= this.good0 && this.meter <= this.good1) {
      this.got += 1;
      this.addScore(18, this.w / 2, 180);
      this.progress = this.got / this.goal;
      if (this.got >= this.goal) {
        this.addScore(30, this.w / 2, 120);
        this.win();
      }
    } else this.hurt();
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#ffd8b0", "#fff6e4");
    ctx.strokeStyle = PAL.orangeDeep;
    ctx.lineWidth = 4;
    ctx.strokeRect(this.w / 2 - 40, 110, 80, 16);
    ctx.beginPath();
    ctx.moveTo(this.w / 2 - 20, 126);
    ctx.lineTo(this.w / 2 - 28, 170);
    ctx.moveTo(this.w / 2 + 20, 126);
    ctx.lineTo(this.w / 2 + 28, 170);
    ctx.stroke();
    label(ctx, `${this.got} baskets`, this.w / 2, 210, 18, PAL.ink);
    meterBar(ctx, 28, this.h * 0.55, this.w - 56, 22, this.meter, this.good0, this.good1);
  }
}

class Bowling extends Game {
  aim = 0;
  meter = 0;
  dir = 1;
  roll = 0;
  standing = 10;
  total = 0;
  rolling = false;
  ballX = 0;
  reset(diff: Diff) {
    this.begin(diff, 1);
    this.lives = 1;
    this.aim = 0;
    this.meter = 0;
    this.roll = 0;
    this.standing = 10;
    this.total = 0;
    this.rolling = false;
    this.need = diff === "beginner" ? 6 : diff === "advanced" ? 10 : 8;
    this.info = "Steer, then tap Roll inside the green.";
  }
  need = 8;
  update(dt: number, input: Input) {
    if (!this.rolling) {
      this.aim = clamp(this.aim + input.ax * dt * 0.8, -1, 1);
      this.meter += dt * this.dir * 0.8;
      if (this.meter > 1 || this.meter < 0) this.dir *= -1;
      this.meter = clamp(this.meter, 0, 1);
      if (input.actionJust || input.justDown) {
        this.rolling = true;
        this.roll = 0;
        this.ballX = this.w / 2 + this.aim * 80;
        const powerOk = this.meter > 0.35 && this.meter < 0.75 ? 1 : 0.55;
        const accuracy = 1 - Math.min(1, Math.abs(this.aim));
        const hit = Math.min(this.standing, Math.round(this.standing * accuracy * powerOk));
        this.pending = hit;
      }
      return;
    }
    this.time += 0;
    this.roll += dt;
    if (this.roll < 0.6) return;
    this.standing -= this.pending;
    this.total += this.pending;
    this.addScore(this.pending * 8, this.w / 2, 160);
    this.pending = 0;
    this.rolling = false;
    this.throws += 1;
    this.progress = Math.min(1, this.total / this.need);
    if (this.standing <= 0 || this.throws >= 2) {
      if (this.total >= this.need) {
        this.addScore(28, this.w / 2, 100);
        this.win();
      } else {
        this.mode = "lose";
        this.fx.push("lose");
      }
    }
  }
  pending = 0;
  throws = 0;
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#d8c8ff", "#efe7ff");
    ctx.fillStyle = "#c7b4f0";
    ctx.beginPath();
    ctx.moveTo(this.w * 0.3, 110);
    ctx.lineTo(this.w * 0.7, 110);
    ctx.lineTo(this.w * 0.85, this.h * 0.72);
    ctx.lineTo(this.w * 0.15, this.h * 0.72);
    ctx.fill();
    for (let i = 0; i < this.standing; i++) {
      const col = i % 4;
      const row = Math.floor(i / 4);
      ctx.fillStyle = PAL.foam;
      ctx.beginPath();
      ctx.arc(this.w / 2 - 24 + col * 16, 140 + row * 18, 6, 0, Math.PI * 2);
      ctx.fill();
    }
    label(ctx, `Pins ${this.total}`, this.w / 2, 90, 16, PAL.ink);
    const x = this.w / 2 + this.aim * 90;
    ctx.fillStyle = PAL.royal;
    ctx.beginPath();
    ctx.arc(this.rolling ? this.ballX : x, this.h * 0.68, 10, 0, Math.PI * 2);
    ctx.fill();
    meterBar(ctx, 24, this.h - this.chromeBottom - 36, this.w - 48, 16, this.meter, 0.35, 0.75);
  }
}

class Tennis extends Game {
  px = 0;
  ball = { x: 0, y: 0, vx: 120, vy: 180 };
  me = 0;
  ai = 0;
  aiX = 0;
  reset(diff: Diff) {
    this.begin(diff, 1);
    this.lives = 1;
    this.px = this.w / 2;
    this.aiX = this.w / 2;
    this.me = 0;
    this.ai = 0;
    this.serve(1);
    this.info = "Slide to return. First to 5.";
  }
  serve(dir: number) {
    this.ball.x = this.w / 2;
    this.ball.y = this.h / 2;
    this.ball.vx = (Math.random() < 0.5 ? -1 : 1) * (120 + 40 * this.rate);
    this.ball.vy = dir * (170 + 30 * this.rate);
  }
  update(dt: number, input: Input) {
    this.px = clamp(input.px, 30, this.w - 30);
    const aiSpeed = (this.diff === "beginner" ? 90 : 150) * this.rate;
    if (this.aiX < this.ball.x) this.aiX += aiSpeed * dt;
    else this.aiX -= aiSpeed * dt;
    this.ball.x += this.ball.vx * dt;
    this.ball.y += this.ball.vy * dt;
    if (this.ball.x < 12 || this.ball.x > this.w - 12) this.ball.vx *= -1;
    const py = this.h - this.chromeBottom - 50;
    if (this.ball.vy > 0 && this.ball.y > py && this.ball.y < py + 16 && Math.abs(this.ball.x - this.px) < 40) {
      this.ball.vy = -Math.abs(this.ball.vy);
      this.ball.vx += (this.ball.x - this.px) * 4;
      const sweet = Math.abs(this.ball.x - this.px) < 12;
      if (sweet && this.diff !== "advanced") this.ball.vx *= 1.2;
      this.fx.push("tap");
    }
    if (this.ball.vy < 0 && this.ball.y < 90 && Math.abs(this.ball.x - this.aiX) < 36) {
      this.ball.vy = Math.abs(this.ball.vy);
      this.fx.push("tap");
    }
    if (this.ball.y > this.h) {
      this.ai += 1;
      this.fx.push("bad");
      this.serve(-1);
    }
    if (this.ball.y < 40) {
      this.me += 1;
      this.addScore(16, this.w / 2, 120);
      this.serve(1);
    }
    this.progress = this.me / 5;
    if (this.me >= 5) {
      this.addScore(30, this.w / 2, 100);
      this.win();
    }
    if (this.ai >= 5) {
      this.mode = "lose";
      this.fx.push("lose");
    }
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#7ec8ff", "#d8f5c8");
    ctx.fillStyle = "#3aa866";
    ctx.fillRect(10, 70, this.w - 20, this.h - this.chromeBottom - 90);
    ctx.fillStyle = PAL.foam;
    ctx.fillRect(10, (70 + this.h - this.chromeBottom - 20) / 2, this.w - 20, 3);
    fillRound(ctx, this.aiX - 28, 78, 56, 10, 4, PAL.berry);
    fillRound(ctx, this.px - 28, this.h - this.chromeBottom - 56, 56, 10, 4, PAL.gold);
    ctx.fillStyle = PAL.foam;
    ctx.beginPath();
    ctx.arc(this.ball.x, this.ball.y, 8, 0, Math.PI * 2);
    ctx.fill();
    label(ctx, `${this.me} - ${this.ai}`, this.w / 2, 52, 18, PAL.ink);
  }
}

class MiniGolf extends Game {
  aim = -0.2;
  ball = { x: 0, y: 0, vx: 0, vy: 0 };
  hole = { x: 0, y: 0 };
  strokes = 0;
  max = 5;
  walls: { x: number; y: number; w: number; h: number }[] = [];
  reset(diff: Diff) {
    this.begin(diff, 1);
    this.lives = 1;
    this.max = diff === "beginner" ? 6 : diff === "advanced" ? 3 : 4;
    this.ball = { x: this.w / 2, y: this.h - this.chromeBottom - 90, vx: 0, vy: 0 };
    this.hole = { x: this.w / 2 + 40, y: 140 };
    this.aim = -Math.PI / 2;
    this.strokes = 0;
    this.walls = [
      { x: 40, y: 200, w: this.w * 0.45, h: 18 },
      { x: this.w * 0.4, y: 300, w: this.w * 0.5, h: 18 },
    ];
    this.info = "Steer and tap Hit. Get the ball in the hole.";
  }
  moving() {
    return Math.hypot(this.ball.vx, this.ball.vy) > 12;
  }
  update(dt: number, input: Input) {
    if (!this.moving()) {
      this.ball.vx = 0;
      this.ball.vy = 0;
      this.aim += input.ax * dt * 1.4;
      if ((input.actionJust || input.justDown) && this.strokes < this.max) {
        const power = this.diff === "beginner" ? 760 : 680;
        this.ball.vx = Math.cos(this.aim) * power;
        this.ball.vy = Math.sin(this.aim) * power;
        this.strokes += 1;
        this.fx.push("tap");
      }
    }
    this.ball.x += this.ball.vx * dt;
    this.ball.y += this.ball.vy * dt;
    this.ball.vx *= Math.pow(0.62, dt);
    this.ball.vy *= Math.pow(0.62, dt);
    const bounce = (minX: number, minY: number, maxX: number, maxY: number) => {
      if (this.ball.x < minX || this.ball.x > maxX) this.ball.vx *= -1;
      if (this.ball.y < minY || this.ball.y > maxY) this.ball.vy *= -1;
      this.ball.x = clamp(this.ball.x, minX, maxX);
      this.ball.y = clamp(this.ball.y, minY, maxY);
    };
    bounce(20, 90, this.w - 20, this.h - this.chromeBottom - 30);
    for (const w of this.walls) {
      if (this.ball.x > w.x && this.ball.x < w.x + w.w && this.ball.y > w.y && this.ball.y < w.y + w.h) {
        this.ball.vy *= -1;
        this.ball.y += this.ball.vy > 0 ? 10 : -10;
      }
    }
    if (Math.hypot(this.ball.x - this.hole.x, this.ball.y - this.hole.y) < 16 && !this.moving()) {
      this.addScore(40 + (this.max - this.strokes) * 15, this.hole.x, this.hole.y);
      this.win();
    }
    if (this.strokes >= this.max && !this.moving() && this.mode === "play") {
      if (Math.hypot(this.ball.x - this.hole.x, this.ball.y - this.hole.y) >= 16) {
        this.mode = "lose";
        this.fx.push("lose");
      }
    }
    this.info = `Strokes ${this.strokes}/${this.max}`;
    this.progress = clamp(1 - Math.hypot(this.ball.x - this.hole.x, this.ball.y - this.hole.y) / 400, 0, 1);
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#c6f0b0", "#8ed07a");
    ctx.fillStyle = "#3aaa58";
    ctx.fillRect(16, 86, this.w - 32, this.h - this.chromeBottom - 110);
    for (const w of this.walls) ctx.fillStyle = "#6b4f2a", ctx.fillRect(w.x, w.y, w.w, w.h);
    ctx.fillStyle = PAL.ink;
    ctx.beginPath();
    ctx.arc(this.hole.x, this.hole.y, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = PAL.foam;
    ctx.beginPath();
    ctx.arc(this.ball.x, this.ball.y, 8, 0, Math.PI * 2);
    ctx.fill();
    if (!this.moving()) {
      ctx.strokeStyle = PAL.gold;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(this.ball.x, this.ball.y);
      ctx.lineTo(this.ball.x + Math.cos(this.aim) * 40, this.ball.y + Math.sin(this.aim) * 40);
      ctx.stroke();
    }
  }
}

export function football() { return new Football(); }
export function basketball() { return new Basketball(); }
export function bowling() { return new Bowling(); }
export function tennis() { return new Tennis(); }
export function miniGolf() { return new MiniGolf(); }
