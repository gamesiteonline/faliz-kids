export type Diff = "beginner" | "intermediate" | "advanced";
export type Phase = "play" | "win" | "lose";

export type Input = {
  px: number;
  py: number;
  down: boolean;
  justDown: boolean;
  justUp: boolean;
  ax: number;
  ay: number;
  action: boolean;
  actionJust: boolean;
  flap: boolean;
  flapJust: boolean;
};

export function emptyInput(px = 0, py = 0): Input {
  return {
    px,
    py,
    down: false,
    justDown: false,
    justUp: false,
    ax: 0,
    ay: 0,
    action: false,
    actionJust: false,
    flap: false,
    flapJust: false,
  };
}

type Particle = { x: number; y: number; vx: number; vy: number; life: number; r: number; color: string };
type Floater = { x: number; y: number; text: string; life: number };

export abstract class Game {
  w = 400;
  h = 700;
  chromeBottom = 16;
  diff: Diff = "beginner";
  mode: Phase = "play";
  points = 0;
  lives = 3;
  info = "";
  progress = 0;
  rate = 1;
  time = 0;
  shake = 0;
  iframe = 0;
  fx: string[] = [];
  particles: Particle[] = [];
  floaters: Floater[] = [];

  layout(w: number, h: number) {
    this.w = w;
    this.h = h;
  }

  setChrome(bottom: number) {
    this.chromeBottom = bottom;
  }

  protected begin(diff: Diff, lives = 3) {
    this.diff = diff;
    this.mode = "play";
    this.points = 0;
    this.lives = diff === "advanced" ? Math.max(1, lives - 1) : lives;
    this.fx = [];
    this.particles = [];
    this.floaters = [];
    this.shake = 0;
    this.iframe = 0;
    this.time = 0;
    this.progress = 0;
    this.rate = diff === "beginner" ? 0.78 : diff === "advanced" ? 1.25 : 1;
  }

  protected addScore(n: number, x?: number, y?: number) {
    if (this.mode !== "play") return;
    this.points += n;
    this.fx.push("coin");
    if (x != null && y != null) {
      this.floaters.push({ x, y, text: `+${n}`, life: 0.8 });
      this.burst(x, y, "#ffb703");
    }
  }

  protected hurt() {
    if (this.mode !== "play" || this.iframe > 0) return;
    this.lives -= 1;
    this.shake = 1;
    this.iframe = 0.9;
    if (this.lives <= 0) {
      this.mode = "lose";
      this.fx.push("lose");
    } else this.fx.push("bad");
  }

  protected win() {
    if (this.mode !== "play") return;
    this.mode = "win";
    this.progress = 1;
    this.fx.push("win");
  }

  protected burst(x: number, y: number, color: string) {
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      this.particles.push({
        x,
        y,
        vx: Math.cos(a) * 90,
        vy: Math.sin(a) * 90,
        life: 0.45,
        r: 4,
        color,
      });
    }
  }

  protected tapJump() {
    this.fx.push("jump");
  }

  step(dt: number, input: Input) {
    if (this.mode === "play") {
      this.time += dt;
      this.update(dt, input);
    }
    this.shake = Math.max(0, this.shake - dt * 2.2);
    this.iframe = Math.max(0, this.iframe - dt);
    for (const f of this.floaters) {
      f.y -= 28 * dt;
      f.life -= dt;
    }
    this.floaters = this.floaters.filter((f) => f.life > 0);
    for (const p of this.particles) {
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.life -= dt;
    }
    this.particles = this.particles.filter((p) => p.life > 0);
  }

  score() {
    return this.points;
  }
  phase(): Phase {
    return this.mode;
  }
  goalText() {
    return this.info;
  }
  hud() {
    return { lives: this.lives, progress: this.progress };
  }
  pullFx() {
    const f = this.fx;
    this.fx = [];
    return f;
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.save();
    if (this.shake > 0) {
      const m = this.shake * 8;
      ctx.translate((Math.random() - 0.5) * 2 * m, (Math.random() - 0.5) * 2 * m);
    }
    this.paint(ctx);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "700 22px Fredoka, Nunito, sans-serif";
    for (const f of this.floaters) {
      ctx.globalAlpha = Math.max(0, f.life);
      ctx.fillStyle = "#1c2b4a";
      ctx.fillText(f.text, f.x, f.y);
    }
    ctx.globalAlpha = 1;
    for (const p of this.particles) {
      ctx.globalAlpha = Math.max(0, p.life);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    if (this.iframe > 0 && this.mode === "play") {
      ctx.globalAlpha = 0.18 + Math.sin(this.time * 30) * 0.08;
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, this.w, this.h);
    }
    ctx.restore();
  }

  abstract reset(diff: Diff): void;
  abstract update(dt: number, input: Input): void;
  abstract paint(ctx: CanvasRenderingContext2D): void;
}
