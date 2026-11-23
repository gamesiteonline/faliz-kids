export type TuneId = "sunny" | "voyage" | "island";

type Tune = {
  bpm: number;
  name: string;
  melody: number[];
  bass: number[];
  chord: number[];
};

/** Original loops. Licensed catalogue tracks are not embedded. */
const TUNES: Record<TuneId, Tune> = {
  sunny: {
    bpm: 112,
    name: "Sunny parade",
    melody: [523, 659, 784, 880, 784, 659, 587, 523, 587, 659, 784, 659, 880, 988, 880, 784, 659, 587, 659, 784, 880, 784, 659, 523, 392, 523, 659, 784, 659, 523, 587, 523],
    bass: [131, 131, 165, 196, 165, 131, 147, 165],
    chord: [262, 330, 392],
  },
  voyage: {
    bpm: 126,
    name: "Star voyage",
    melody: [587, 698, 880, 784, 698, 587, 523, 587, 698, 880, 988, 880, 784, 698, 587, 523, 494, 587, 698, 880, 1047, 880, 784, 698, 587, 523, 587, 698, 784, 698, 587, 523],
    bass: [147, 147, 196, 175, 147, 131, 117, 131],
    chord: [294, 370, 440],
  },
  island: {
    bpm: 109,
    name: "Island hop",
    melody: [392, 494, 587, 494, 659, 587, 494, 440, 392, 440, 494, 587, 659, 784, 659, 587, 494, 440, 392, 349, 392, 494, 587, 659, 587, 494, 440, 392, 440, 494, 392, 349],
    bass: [98, 98, 131, 147, 131, 98, 87, 98],
    chord: [196, 247, 294],
  },
};

export const TUNE_LIST: { id: TuneId; name: string }[] = (Object.keys(TUNES) as TuneId[]).map((id) => ({
  id,
  name: TUNES[id].name,
}));

export function tuneFor(worldId: string): TuneId {
  if (worldId === "ocean" || worldId === "farm" || worldId === "adventure" || worldId === "racing") return "island";
  if (worldId === "space" || worldId === "magic" || worldId === "creative") return "voyage";
  return "sunny";
}

let ctx: AudioContext | null = null;
let musicGain: GainNode | null = null;
let sfxGain: GainNode | null = null;
let noise: AudioBuffer | null = null;
let musicOn = true;
let sfxOn = true;
let timer: ReturnType<typeof setTimeout> | null = null;
let step = 0;
let nextAt = 0;
let tuneId: TuneId = "sunny";

function context() {
  if (!ctx) {
    const audio = new AudioContext();
    ctx = audio;
    const filter = audio.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 3200;
    filter.connect(audio.destination);
    musicGain = audio.createGain();
    musicGain.gain.value = musicOn ? 0.7 : 0;
    musicGain.connect(filter);
    sfxGain = audio.createGain();
    sfxGain.gain.value = 0.85;
    sfxGain.connect(filter);
    const len = Math.floor(audio.sampleRate * 0.2);
    noise = audio.createBuffer(1, len, audio.sampleRate);
    const data = noise.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / len);
  }
  return ctx;
}

function tone(freq: number, dur: number, type: OscillatorType, gain: number, when: number, bus: GainNode | null) {
  if (!ctx || !bus || freq <= 0) return;
  const osc = ctx.createOscillator();
  const amp = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  osc.connect(amp);
  amp.connect(bus);
  amp.gain.setValueAtTime(0.0001, when);
  amp.gain.exponentialRampToValueAtTime(Math.max(0.0002, gain), when + 0.03);
  amp.gain.exponentialRampToValueAtTime(0.0001, when + dur);
  osc.start(when);
  osc.stop(when + dur + 0.04);
}

function kick(when: number) {
  if (!ctx || !musicGain) return;
  const osc = ctx.createOscillator();
  const amp = ctx.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(150, when);
  osc.frequency.exponentialRampToValueAtTime(52, when + 0.1);
  osc.connect(amp);
  amp.connect(musicGain);
  amp.gain.setValueAtTime(0.16, when);
  amp.gain.exponentialRampToValueAtTime(0.0001, when + 0.16);
  osc.start(when);
  osc.stop(when + 0.18);
}

function drum(when: number, high: boolean) {
  if (!ctx || !noise || !musicGain) return;
  const src = ctx.createBufferSource();
  src.buffer = noise;
  const amp = ctx.createGain();
  const band = ctx.createBiquadFilter();
  band.type = high ? "highpass" : "bandpass";
  band.frequency.value = high ? 5000 : 1800;
  src.connect(band);
  band.connect(amp);
  amp.connect(musicGain);
  const dur = high ? 0.04 : 0.09;
  amp.gain.setValueAtTime(high ? 0.03 : 0.05, when);
  amp.gain.exponentialRampToValueAtTime(0.0001, when + dur);
  src.start(when);
  src.stop(when + dur + 0.02);
}

function schedule() {
  if (!musicOn || !ctx || !musicGain) {
    timer = null;
    return;
  }
  const tune = TUNES[tuneId];
  const eighth = 60 / tune.bpm / 2;
  if (nextAt < ctx.currentTime) nextAt = ctx.currentTime + 0.06;
  while (nextAt < ctx.currentTime + 0.35) {
    const i = step;
    const note = tune.melody[i % tune.melody.length]!;
    tone(note, eighth * 1.5, "triangle", 0.05, nextAt, musicGain);
    tone(note / 2, eighth * 1.6, "sine", 0.02, nextAt, musicGain);
    if (i % 2 === 0) {
      const bass = tune.bass[(i / 2) % tune.bass.length]!;
      tone(bass, eighth * 1.8, "triangle", 0.06, nextAt, musicGain);
    }
    if (i % 8 === 0) {
      for (const freq of tune.chord) tone(freq, eighth * 7.2, "sine", 0.014, nextAt, musicGain);
    }
    if (i % 4 === 0) kick(nextAt);
    if (i % 8 === 4) drum(nextAt, false);
    if (i % 2 === 1) drum(nextAt, true);
    step += 1;
    nextAt += eighth;
  }
  timer = setTimeout(schedule, 90);
}

export function unlockAudio() {
  const audio = context();
  void audio.resume();
  if (musicOn && timer == null) schedule();
}

export function setMusic(on: boolean) {
  musicOn = on;
  if (musicGain && ctx) {
    musicGain.gain.setTargetAtTime(on ? 0.7 : 0.0001, ctx.currentTime, 0.08);
  }
  if (!on && timer != null) {
    clearTimeout(timer);
    timer = null;
  } else if (on && ctx && timer == null) schedule();
}

export function setSfx(on: boolean) {
  sfxOn = on;
}

export function setTune(id: TuneId) {
  if (tuneId === id) return;
  tuneId = id;
  step = 0;
  nextAt = 0;
}

export function playFx(kind: string) {
  if (!sfxOn || !ctx || !sfxGain || ctx.state !== "running") return;
  const now = ctx.currentTime;
  if (kind === "coin") {
    tone(880, 0.08, "square", 0.035, now, sfxGain);
    tone(1175, 0.12, "sine", 0.03, now + 0.06, sfxGain);
  } else if (kind === "ok") tone(660, 0.1, "triangle", 0.05, now, sfxGain);
  else if (kind === "bad") {
    tone(220, 0.12, "triangle", 0.04, now, sfxGain);
    tone(160, 0.16, "sine", 0.03, now + 0.08, sfxGain);
  } else if (kind === "jump") tone(520, 0.08, "square", 0.035, now, sfxGain);
  else if (kind === "win") {
    [523, 659, 784, 1046].forEach((freq, i) => tone(freq, 0.16, "triangle", 0.05, now + i * 0.1, sfxGain));
  } else if (kind === "lose") {
    tone(196, 0.22, "triangle", 0.04, now, sfxGain);
    tone(146, 0.32, "triangle", 0.035, now + 0.14, sfxGain);
  } else tone(520, 0.05, "square", 0.028, now, sfxGain);
}
