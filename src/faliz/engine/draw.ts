export const PAL = {
  ink: "#1c2b4a",
  inkSoft: "#3d4d6e",
  cream: "#fff6e4",
  foam: "#ffffff",
  gold: "#ffb703",
  goldDeep: "#e09600",
  royal: "#2f6bff",
  leaf: "#3ddc6e",
  leafDeep: "#1f9d45",
  berry: "#ff4fa3",
  grape: "#7b3ff2",
  lagoon: "#7ed0ff",
  lagoonDeep: "#2f95e0",
  ocean: "#1478c8",
  orange: "#f08a2c",
  orangeDeep: "#c86a18",
  belly: "#ffe3c2",
  collar: "#2ed3c6",
  nose: "#2a211c",
  tongue: "#ff7a9c",
  line: "#ead9b8",
};

export type Rect = { x: number; y: number; w: number; h: number };

export function clamp(v: number, a: number, b: number) {
  return Math.max(a, Math.min(b, v));
}

export function near(x: number, y: number, cx: number, cy: number, r: number) {
  const dx = x - cx;
  const dy = y - cy;
  return dx * dx + dy * dy <= r * r;
}

export function hitRect(x: number, y: number, r: Rect) {
  return x >= r.x && y >= r.y && x <= r.x + r.w && y <= r.y + r.h;
}

export function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  const rr = Math.max(0, Math.min(r, w / 2, h / 2));
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
}

export function fillRound(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
  color: string,
) {
  roundRect(ctx, x, y, w, h, r);
  ctx.fillStyle = color;
  ctx.fill();
}

export function sky(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  top: string,
  bottom: string,
) {
  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, top);
  g.addColorStop(1, bottom);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);
}

export function label(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  size: number,
  color: string,
  align: CanvasTextAlign = "center",
) {
  ctx.fillStyle = color;
  ctx.font = `700 ${size}px Fredoka, Nunito, sans-serif`;
  ctx.textAlign = align;
  ctx.textBaseline = "middle";
  ctx.fillText(text, x, y);
}

export function heroText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  size: number,
  fill: string,
) {
  ctx.font = `700 ${size}px Fredoka, Nunito, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.lineWidth = Math.max(3, size / 8);
  ctx.lineJoin = "round";
  ctx.strokeStyle = PAL.ink;
  ctx.strokeText(text, x, y);
  ctx.fillStyle = fill;
  ctx.fillText(text, x, y);
}

export function starPath(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
  spikes = 5,
) {
  ctx.beginPath();
  for (let i = 0; i < spikes * 2; i++) {
    const rad = (i * Math.PI) / spikes - Math.PI / 2;
    const len = i % 2 === 0 ? r : r * 0.45;
    const px = x + Math.cos(rad) * len;
    const py = y + Math.sin(rad) * len;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
}

export function drawStar(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
  color = PAL.gold,
) {
  starPath(ctx, x, y, r);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = PAL.goldDeep;
  ctx.stroke();
}

export function drawCoin(ctx: CanvasRenderingContext2D, x: number, y: number, r: number) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = PAL.gold;
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = PAL.goldDeep;
  ctx.stroke();
  ctx.fillStyle = PAL.goldDeep;
  ctx.font = `700 ${Math.max(10, r)}px Fredoka, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("F", x, y + 1);
}

export function drawHeart(ctx: CanvasRenderingContext2D, x: number, y: number, s: number) {
  ctx.save();
  ctx.translate(x, y);
  ctx.beginPath();
  ctx.moveTo(0, s * 0.35);
  ctx.bezierCurveTo(-s, -s * 0.4, -s * 0.2, -s, 0, -s * 0.35);
  ctx.bezierCurveTo(s * 0.2, -s, s, -s * 0.4, 0, s * 0.35);
  ctx.fillStyle = PAL.berry;
  ctx.fill();
  ctx.restore();
}

/** The Faliz pup: orange, cream muzzle and belly, floppy ears, turquoise collar, gold star. */
export function drawPup(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  s: number,
  mood: "happy" | "wow" | "focus" = "happy",
) {
  ctx.save();
  ctx.translate(x, y);
  const ear = (side: number) => {
    ctx.save();
    ctx.rotate(side * 0.5);
    ctx.beginPath();
    ctx.ellipse(side * s * 0.42, -s * 0.55, s * 0.28, s * 0.38, side * 0.4, 0, Math.PI * 2);
    ctx.fillStyle = PAL.orangeDeep;
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(side * s * 0.42, -s * 0.5, s * 0.14, s * 0.22, side * 0.4, 0, Math.PI * 2);
    ctx.fillStyle = PAL.belly;
    ctx.fill();
    ctx.restore();
  };
  ear(-1);
  ear(1);
  ctx.beginPath();
  ctx.ellipse(0, s * 0.28, s * 0.62, s * 0.48, 0, 0, Math.PI * 2);
  ctx.fillStyle = PAL.orange;
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(0, s * 0.38, s * 0.34, s * 0.26, 0, 0, Math.PI * 2);
  ctx.fillStyle = PAL.belly;
  ctx.fill();
  ctx.beginPath();
  ctx.arc(0, -s * 0.25, s * 0.48, 0, Math.PI * 2);
  ctx.fillStyle = PAL.orange;
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(0, -s * 0.05, s * 0.28, s * 0.22, 0, 0, Math.PI * 2);
  ctx.fillStyle = PAL.belly;
  ctx.fill();
  const eye = (ex: number) => {
    ctx.beginPath();
    ctx.ellipse(ex, -s * 0.34, s * 0.12, s * 0.14, 0, 0, Math.PI * 2);
    ctx.fillStyle = PAL.foam;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(ex + (mood === "wow" ? 0 : s * 0.02), -s * 0.34, s * 0.07, 0, Math.PI * 2);
    ctx.fillStyle = "#5c3317";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(ex + s * 0.03, -s * 0.38, s * 0.025, 0, Math.PI * 2);
    ctx.fillStyle = PAL.foam;
    ctx.fill();
  };
  eye(-s * 0.16);
  eye(s * 0.16);
  ctx.beginPath();
  ctx.ellipse(0, -s * 0.08, s * 0.07, s * 0.05, 0, 0, Math.PI * 2);
  ctx.fillStyle = PAL.nose;
  ctx.fill();
  if (mood !== "focus") {
    ctx.beginPath();
    ctx.ellipse(0, s * 0.02, s * 0.08, s * 0.05, 0, 0, Math.PI);
    ctx.fillStyle = PAL.tongue;
    ctx.fill();
  }
  ctx.beginPath();
  ctx.ellipse(0, s * 0.18, s * 0.38, s * 0.1, 0, 0, Math.PI * 2);
  ctx.strokeStyle = PAL.collar;
  ctx.lineWidth = Math.max(3, s * 0.1);
  ctx.stroke();
  drawStar(ctx, 0, s * 0.32, s * 0.14);
  ctx.restore();
}

export function drawCloud(ctx: CanvasRenderingContext2D, x: number, y: number, s: number) {
  ctx.fillStyle = "rgba(255,255,255,0.92)";
  ctx.beginPath();
  ctx.arc(x, y, s * 0.45, 0, Math.PI * 2);
  ctx.arc(x + s * 0.4, y + s * 0.05, s * 0.34, 0, Math.PI * 2);
  ctx.arc(x - s * 0.38, y + s * 0.08, s * 0.3, 0, Math.PI * 2);
  ctx.fill();
}

export function choiceGrid(w: number, h: number, chrome: number, n: number) {
  const cols = h < 540 ? 2 : 1;
  const rows = Math.ceil(n / cols);
  const gap = 8;
  const bh = h < 540 ? 48 : 56;
  const inner = Math.min(520, w - 24);
  const bw = cols === 1 ? inner : (inner - gap) / 2;
  const totalH = rows * bh + (rows - 1) * gap;
  const top = Math.max(72, h - chrome - totalH - 8);
  const originX = (w - (cols * bw + (cols - 1) * gap)) / 2;
  return Array.from({ length: n }, (_, i) => {
    const c = i % cols;
    const r = Math.floor(i / cols);
    return { x: originX + c * (bw + gap), y: top + r * (bh + gap), w: bw, h: bh };
  });
}

export function paintButton(
  ctx: CanvasRenderingContext2D,
  r: Rect,
  text: string,
  fill: string,
  hot = false,
) {
  fillRound(ctx, r.x, r.y, r.w, r.h, 16, hot ? PAL.gold : fill);
  ctx.lineWidth = 3;
  ctx.strokeStyle = hot ? PAL.goldDeep : "rgba(28,43,74,0.18)";
  ctx.stroke();
  label(ctx, text, r.x + r.w / 2, r.y + r.h / 2, Math.min(22, r.h * 0.4), PAL.ink);
}

export function meterBar(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  t: number,
  good0: number,
  good1: number,
) {
  fillRound(ctx, x, y, w, h, 8, PAL.ink);
  const gx = x + good0 * w;
  const gw = (good1 - good0) * w;
  fillRound(ctx, gx, y, gw, h, 4, PAL.leaf);
  ctx.fillStyle = PAL.foam;
  const nx = x + clamp(t, 0, 1) * w;
  ctx.fillRect(nx - 3, y - 4, 6, h + 8);
}
