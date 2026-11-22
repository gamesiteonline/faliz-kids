import { choiceGrid, drawPup, fillRound, heroText, hitRect, label, paintButton, PAL, sky } from "../engine/draw";
import { Game, type Diff, type Input } from "../engine/game";
import { pickWords } from "../words";

const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

class Alphabet extends Game {
  letters: { ch: string; x: number; y: number; vy: number }[] = [];
  next = 0;
  goal = 8;
  spawn = 0.2;
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.goal = diff === "beginner" ? 6 : diff === "advanced" ? 12 : 8;
    this.next = 0;
    this.letters = [];
    this.spawn = 0.3;
    this.info = `Tap the letters in order. Next is ${ALPHA[0]}.`;
  }
  update(dt: number, input: Input) {
    this.spawn -= dt * (1.15 / this.rate);
    if (this.spawn <= 0) {
      this.spawn = 0.85;
      const good = Math.random() < 0.5;
      const ch = good ? ALPHA[this.next]! : ALPHA[Math.floor(Math.random() * 26)]!;
      this.letters.push({ ch, x: 36 + Math.random() * (this.w - 72), y: -20, vy: 70 + 80 * this.rate });
    }
    const missed: string[] = [];
    for (const L of this.letters) L.y += L.vy * dt;
    if (input.justDown) {
      const hit = this.letters.find((L) => Math.hypot(input.px - L.x, input.py - L.y) < 32);
      if (hit) {
        this.letters = this.letters.filter((L) => L !== hit);
        if (hit.ch === ALPHA[this.next]) {
          this.addScore(10, hit.x, hit.y);
          this.next += 1;
          this.fx.push("ok");
        } else this.hurt();
      }
    }
    this.letters = this.letters.filter((L) => {
      if (L.y > this.h + 10) {
        missed.push(L.ch);
        return false;
      }
      return true;
    });
    if (missed.includes(ALPHA[this.next]!)) this.hurt();
    this.progress = this.next / this.goal;
    this.info = `Tap the letters in order. Next is ${ALPHA[Math.min(this.next, 25)]}.`;
    if (this.next >= this.goal && this.mode === "play") {
      this.addScore(40, this.w / 2, 80);
      this.win();
    }
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#9ad8ff", "#fff6e4");
    drawPup(ctx, 64, this.h * 0.22, 36, "happy");
    heroText(ctx, ALPHA[Math.min(this.next, 25)] ?? "A", this.w / 2, 78, 54, PAL.gold);
    for (const L of this.letters) {
      fillRound(ctx, L.x - 24, L.y - 24, 48, 48, 14, L.ch === ALPHA[this.next] ? PAL.gold : PAL.foam);
      label(ctx, L.ch, L.x, L.y, 22, PAL.ink);
    }
  }
}

class NumberQuest extends Game {
  bubbles: { n: number; x: number; y: number; sel: boolean }[] = [];
  target = 10;
  got = 0;
  goal = 5;
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.goal = diff === "beginner" ? 4 : diff === "advanced" ? 7 : 5;
    this.got = 0;
    this.deal();
  }
  deal() {
    const max = this.diff === "advanced" ? 9 : 6;
    const count = 5;
    this.bubbles = Array.from({ length: count }, (_, i) => ({
      n: 1 + Math.floor(Math.random() * max),
      x: this.w * (0.18 + (i % 3) * 0.28),
      y: 180 + Math.floor(i / 3) * 120,
      sel: false,
    }));
    const a = this.bubbles[0]!;
    const b = this.bubbles[1]!;
    this.target = this.diff === "beginner" ? a.n : a.n + b.n;
    this.info = `Make the bubbles add up to ${this.target}.`;
  }
  sum() {
    return this.bubbles.reduce((n, b) => n + (b.sel ? b.n : 0), 0);
  }
  update(_dt: number, input: Input) {
    if (!input.justDown) return;
    const hit = this.bubbles.find((b) => Math.hypot(input.px - b.x, input.py - b.y) < 42);
    if (!hit) return;
    hit.sel = !hit.sel;
    const s = this.sum();
    if (s === this.target) {
      this.addScore(20, hit.x, hit.y);
      this.got += 1;
      this.progress = this.got / this.goal;
      if (this.got >= this.goal) {
        this.addScore(30, this.w / 2, 120);
        this.win();
      } else this.deal();
    } else if (s > this.target) {
      this.hurt();
      this.bubbles.forEach((b) => (b.sel = false));
    }
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#8ecbff", "#e7f8ff");
    heroText(ctx, String(this.target), this.w / 2, 86, 48, PAL.foam);
    label(ctx, `Your sum ${this.sum()}`, this.w / 2, 128, 18, PAL.ink);
    for (const b of this.bubbles) {
      ctx.beginPath();
      ctx.arc(b.x, b.y, 40, 0, Math.PI * 2);
      ctx.fillStyle = b.sel ? PAL.gold : PAL.royal;
      ctx.fill();
      label(ctx, String(b.n), b.x, b.y, 26, PAL.foam);
    }
  }
}

class WordBuilder extends Game {
  words: { word: string; hint: string }[] = [];
  idx = 0;
  typed = "";
  letters: string[] = [];
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.words = pickWords(diff, diff === "beginner" ? 3 : 4);
    this.idx = 0;
    this.load();
  }
  load() {
    const w = this.words[this.idx];
    if (!w) return;
    this.typed = "";
    const extra = "FALIZKIDS".slice(0, this.diff === "beginner" ? 2 : 4);
    this.letters = (w.word + extra).split("").sort(() => Math.random() - 0.5);
    this.info = w.hint;
    this.progress = this.idx / this.words.length;
  }
  update(_dt: number, input: Input) {
    const word = this.words[this.idx]?.word;
    if (!word || !input.justDown) return;
    const rects = this.layoutLetters();
    const i = rects.findIndex((r) => hitRect(input.px, input.py, r));
    if (i < 0) return;
    const ch = this.letters[i]!;
    const need = word[this.typed.length];
    if (ch !== need) {
      this.hurt();
      this.typed = "";
      return;
    }
    this.typed += ch;
    this.letters.splice(i, 1);
    this.fx.push("ok");
    if (this.typed === word) {
      this.addScore(25, this.w / 2, 160);
      this.idx += 1;
      if (this.idx >= this.words.length) {
        this.addScore(30, this.w / 2, 120);
        this.win();
      } else this.load();
    }
  }
  layoutLetters() {
    const size = 58;
    const gap = 10;
    const cols = Math.max(1, Math.floor((this.w - 20) / (size + gap)));
    return this.letters.map((_, i) => ({
      x: 16 + (i % cols) * (size + gap),
      y: 240 + Math.floor(i / cols) * (size + gap),
      w: size,
      h: size,
    }));
  }
  paint(ctx: CanvasRenderingContext2D) {
    const word = this.words[this.idx]?.word ?? "";
    sky(ctx, this.w, this.h, "#fff0c8", "#dff5ff");
    drawPup(ctx, this.w - 70, 120, 34, "focus");
    const shown = word.split("").map((ch, i) => (i < this.typed.length ? ch : "_")).join(" ");
    heroText(ctx, shown || "_", this.w / 2, 150, 36, PAL.royal);
    this.layoutLetters().forEach((r, i) => paintButton(ctx, r, this.letters[i] ?? "", PAL.foam));
  }
}

class Spelling extends Game {
  words: { word: string; hint: string }[] = [];
  idx = 0;
  typed = "";
  phaseIn: "show" | "type" = "show";
  letters: string[] = [];
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.words = pickWords(diff, 3);
    this.idx = 0;
    this.show();
  }
  show() {
    const w = this.words[this.idx];
    if (!w) return;
    this.phaseIn = "show";
    this.typed = "";
    this.time = 0;
    const bag = w.word.split("");
    for (const ch of "QZXVB") {
      if (bag.length >= w.word.length + 3) break;
      bag.push(ch);
    }
    this.letters = bag.sort(() => Math.random() - 0.5);
    this.info = "Remember this word.";
  }
  update(dt: number, input: Input) {
    const word = this.words[this.idx]?.word;
    if (!word) return;
    if (this.phaseIn === "show") {
      const hold = this.diff === "advanced" ? 1.1 : this.diff === "beginner" ? 2.2 : 1.6;
      if (this.time > hold) {
        this.phaseIn = "type";
        this.info = this.words[this.idx]?.hint ?? "Spell it";
      }
      return;
    }
    if (!input.justDown) return;
    const rects = choiceGrid(this.w, this.h, this.chromeBottom, this.letters.length);
    const i = rects.findIndex((r) => hitRect(input.px, input.py, r));
    if (i < 0) return;
    const ch = this.letters[i]!;
    if (ch !== word[this.typed.length]) {
      this.hurt();
      this.typed = "";
      return;
    }
    this.typed += ch;
    this.fx.push("ok");
    if (this.typed === word) {
      this.addScore(30, this.w / 2, 180);
      this.idx += 1;
      this.progress = this.idx / this.words.length;
      if (this.idx >= this.words.length) this.win();
      else this.show();
    }
  }
  paint(ctx: CanvasRenderingContext2D) {
    const word = this.words[this.idx]?.word ?? "";
    sky(ctx, this.w, this.h, "#d8f3ff", "#fff6e4");
    if (this.phaseIn === "show") heroText(ctx, word, this.w / 2, this.h * 0.36, 48, PAL.gold);
    else {
      heroText(ctx, this.typed || "?", this.w / 2, 120, 42, PAL.royal);
      const rects = choiceGrid(this.w, this.h, this.chromeBottom, this.letters.length);
      rects.forEach((r, i) => paintButton(ctx, r, this.letters[i] ?? "", PAL.foam));
    }
  }
}

class MathMaster extends Game {
  a = 1;
  b = 1;
  op: "+" | "-" | "×" = "+";
  answer = 2;
  choices: number[] = [];
  got = 0;
  goal = 6;
  reset(diff: Diff) {
    this.begin(diff, 3);
    this.goal = diff === "beginner" ? 5 : diff === "advanced" ? 8 : 6;
    this.got = 0;
    this.deal();
  }
  deal() {
    if (this.diff === "advanced" && Math.random() < 0.45) {
      this.a = 2 + Math.floor(Math.random() * 4);
      this.b = 2 + Math.floor(Math.random() * 4);
      this.op = "×";
      this.answer = this.a * this.b;
    } else if (this.diff !== "beginner" && Math.random() < 0.4) {
      this.b = 1 + Math.floor(Math.random() * 6);
      this.a = this.b + Math.floor(Math.random() * 7);
      this.op = "-";
      this.answer = this.a - this.b;
    } else {
      this.a = 1 + Math.floor(Math.random() * (this.diff === "beginner" ? 5 : 9));
      this.b = 1 + Math.floor(Math.random() * (this.diff === "beginner" ? 5 : 9));
      this.op = "+";
      this.answer = this.a + this.b;
    }
    const set = new Set<number>([this.answer]);
    while (set.size < 4) set.add(Math.max(0, this.answer + Math.floor(Math.random() * 7) - 3));
    this.choices = [...set].sort(() => Math.random() - 0.5);
    this.info = "Tap the block with the right answer.";
    this.progress = this.got / this.goal;
  }
  update(_dt: number, input: Input) {
    if (!input.justDown) return;
    const rects = choiceGrid(this.w, this.h, this.chromeBottom, 4);
    const i = rects.findIndex((r) => hitRect(input.px, input.py, r));
    if (i < 0) return;
    if (this.choices[i] === this.answer) {
      this.addScore(15, rects[i]!.x + 20, rects[i]!.y);
      this.got += 1;
      if (this.got >= this.goal) {
        this.addScore(30, this.w / 2, 140);
        this.win();
      } else this.deal();
    } else this.hurt();
  }
  paint(ctx: CanvasRenderingContext2D) {
    sky(ctx, this.w, this.h, "#b9dcff", "#fff6e4");
    const blocks = [this.a, this.op, this.b, "=", "?"];
    blocks.forEach((b, i) => {
      const x = this.w / 2 + (i - 2) * 52;
      fillRound(ctx, x - 22, 110, 44, 44, 10, b === "?" ? PAL.gold : PAL.royal);
      label(ctx, String(b), x, 132, 20, PAL.foam);
    });
    const rects = choiceGrid(this.w, this.h, this.chromeBottom, 4);
    rects.forEach((r, i) => paintButton(ctx, r, String(this.choices[i] ?? ""), PAL.foam));
  }
}

export function alphabet() { return new Alphabet(); }
export function numberQuest() { return new NumberQuest(); }
export function wordBuilder() { return new WordBuilder(); }
export function spelling() { return new Spelling(); }
export function mathMaster() { return new MathMaster(); }
