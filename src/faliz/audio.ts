let ctx: AudioContext | null = null;
let musicOn = true;
let sfxOn = true;
let timer: ReturnType<typeof setTimeout> | null = null;
let step = 0;

const MELODY = [523, 587, 659, 784, 659, 587, 523, 392, 440, 523, 659, 587];

function context() {
  if (!ctx) ctx = new AudioContext();
  return ctx;
}

function tone(freq: number, dur: number, type: OscillatorType, gain: number) {
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const amp = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  amp.gain.value = gain;
  osc.connect(amp);
  amp.connect(ctx.destination);
  const now = ctx.currentTime;
  amp.gain.setValueAtTime(gain, now);
  amp.gain.exponentialRampToValueAtTime(0.0001, now + dur);
  osc.start(now);
  osc.stop(now + dur + 0.02);
}

function loop() {
  if (!musicOn || !ctx) {
    timer = null;
    return;
  }
  if (ctx.state === "running") {
    tone(MELODY[step % MELODY.length]!, 0.2, "sine", 0.035);
    step += 1;
  }
  timer = setTimeout(loop, 320);
}

export function unlockAudio() {
  const c = context();
  void c.resume();
  if (musicOn && timer == null) loop();
}

export function setMusic(on: boolean) {
  musicOn = on;
  if (!on && timer != null) {
    clearTimeout(timer);
    timer = null;
  } else if (on && ctx && timer == null) loop();
}

export function setSfx(on: boolean) {
  sfxOn = on;
}

export function playFx(kind: string) {
  if (!sfxOn || !ctx || ctx.state !== "running") return;
  if (kind === "coin") tone(880, 0.07, "square", 0.04);
  else if (kind === "ok") tone(660, 0.09, "triangle", 0.05);
  else if (kind === "bad") tone(196, 0.14, "sawtooth", 0.03);
  else if (kind === "jump") tone(440, 0.06, "square", 0.035);
  else if (kind === "win") {
    tone(523, 0.12, "triangle", 0.05);
    setTimeout(() => tone(659, 0.12, "triangle", 0.05), 110);
    setTimeout(() => tone(784, 0.18, "triangle", 0.05), 220);
  } else if (kind === "lose") tone(146, 0.28, "triangle", 0.04);
  else tone(520, 0.05, "square", 0.03);
}
