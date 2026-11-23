import { create } from "zustand";
import { allGames, WORLDS } from "./catalog";
import { readRaw, writeRaw } from "./save";

export type Diff = "beginner" | "intermediate" | "advanced";
export type Animal = "dog" | "cat" | "rabbit" | "bear" | "lion";
export type Quality = "low" | "medium" | "high";
export type MusicPick = "auto" | "sunny" | "voyage" | "island";

export type Stat = { plays: number; wins: number; best: number; bestStars: number };
export type Mission = { id: string; label: string; target: number; progress: number };

export type Profile = {
  id: string;
  name: string;
  animal: Animal;
  hat: string;
  scarf: string;
  pet: string;
  ownedHats: string[];
  ownedPets: string[];
  ownedDecor: string[];
  shownDecor: string[];
  foundStars: string[];
  coins: number;
  stars: number;
  xp: number;
  stats: Record<string, Stat>;
  achievements: string[];
  dailyDate: string;
  missions: Mission[];
  playDate: string;
  playSeconds: number;
  playLimitMin: number | null;
  difficulty: Diff;
};

export type Settings = {
  music: boolean;
  sfx: boolean;
  quality: Quality;
  pin: string | null;
  tune: MusicPick;
};

export type Persisted = {
  version: 1;
  profiles: Profile[];
  activeId: string;
  settings: Settings;
};

export const HATS = [
  { id: "none", name: "No hat", cost: 0 },
  { id: "cap", name: "Sunny cap", cost: 20 },
  { id: "bow", name: "Pink bow", cost: 30 },
  { id: "wizard", name: "Wizard hat", cost: 50 },
  { id: "crown", name: "Star crown", cost: 80 },
];

export const PETS = [
  { id: "pup", name: "Faliz", stars: 0 },
  { id: "cat", name: "Miso", stars: 5 },
  { id: "rabbit", name: "Nib", stars: 8 },
  { id: "bear", name: "Bramble", stars: 12 },
  { id: "dino", name: "Dottie", stars: 18 },
];

export const DECOR = [
  { id: "rug", name: "Rainbow rug", cost: 20 },
  { id: "plant", name: "Plant", cost: 15 },
  { id: "books", name: "Book pile", cost: 20 },
  { id: "lamp", name: "Star lamp", cost: 25 },
  { id: "shelf", name: "Trophy shelf", cost: 40 },
];

export const ACHIEVEMENTS: { id: string; name: string; detail: string }[] = [
  { id: "first-win", name: "First cheer", detail: "Win any game" },
  { id: "ten-wins", name: "Ten trophies", detail: "Win 10 games" },
  { id: "star-25", name: "Star pocket", detail: "Collect 25 stars" },
  { id: "coin-200", name: "Coin chest", detail: "Hold 200 coins" },
  { id: "six-worlds", name: "Island hopper", detail: "Win a game in 6 worlds" },
  { id: "all-worlds", name: "World tour", detail: "Win a game in every world" },
  { id: "pets-3", name: "Pet parade", detail: "Unlock 3 pets" },
  { id: "daily", name: "Daily star", detail: "Finish today's missions" },
  { id: "play-20", name: "Regular explorer", detail: "Play 20 times" },
  { id: "sparkle", name: "Sparkle clear", detail: "Earn 3 stars on a game" },
];

export function dateKey(d = new Date()) {
  const m = `${d.getMonth() + 1}`.padStart(2, "0");
  const day = `${d.getDate()}`.padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}

export function levelOf(xp: number) {
  return 1 + Math.floor(xp / 100);
}

export function uid() {
  return Math.random().toString(36).slice(2, 10);
}

function missionsFor(date: string): Mission[] {
  const bump = date.charCodeAt(date.length - 1) % 2;
  return [
    { id: "play", label: "Play 3 games", target: 3, progress: 0 },
    { id: "win", label: "Win 2 games", target: 2, progress: 0 },
    { id: "coins", label: `Earn ${40 + bump * 10} coins`, target: 40 + bump * 10, progress: 0 },
  ];
}

export function freshProfile(name: string, animal: Animal = "dog"): Profile {
  const today = dateKey();
  return {
    id: uid(),
    name: name.slice(0, 12) || "Faliz",
    animal,
    hat: "none",
    scarf: "#2ed3c6",
    pet: "pup",
    ownedHats: ["none"],
    ownedPets: ["pup"],
    ownedDecor: [],
    shownDecor: [],
    foundStars: [],
    coins: 0,
    stars: 0,
    xp: 0,
    stats: {},
    achievements: [],
    dailyDate: today,
    missions: missionsFor(today),
    playDate: today,
    playSeconds: 0,
    playLimitMin: null,
    difficulty: "beginner",
  };
}

function sumWins(p: Profile) {
  return Object.values(p.stats).reduce((n, s) => n + s.wins, 0);
}
function sumPlays(p: Profile) {
  return Object.values(p.stats).reduce((n, s) => n + s.plays, 0);
}
function worldsWon(p: Profile) {
  return WORLDS.filter((w) => w.games.some((g) => (p.stats[g.id]?.wins ?? 0) > 0)).length;
}

function earned(p: Profile) {
  const have = new Set(p.achievements);
  const add: string[] = [];
  const ok: Record<string, boolean> = {
    "first-win": sumWins(p) > 0,
    "ten-wins": sumWins(p) >= 10,
    "star-25": p.stars >= 25,
    "coin-200": p.coins >= 200,
    "six-worlds": worldsWon(p) >= 6,
    "all-worlds": worldsWon(p) >= 12,
    "pets-3": p.ownedPets.length >= 3,
    daily: p.missions.every((m) => m.progress >= m.target),
    "play-20": sumPlays(p) >= 20,
    sparkle: Object.values(p.stats).some((s) => s.bestStars >= 3),
  };
  for (const a of ACHIEVEMENTS) {
    if (!have.has(a.id) && ok[a.id]) add.push(a.id);
  }
  return add;
}

function rollDaily(p: Profile): Profile {
  const today = dateKey();
  if (p.dailyDate === today) return p;
  return { ...p, dailyDate: today, missions: missionsFor(today) };
}

const defaultSettings: Settings = { music: true, sfx: true, quality: "medium", pin: null, tune: "auto" };

type Result = { coins: number; stars: number; achievements: string[]; levelUp: boolean };

type Store = {
  ready: boolean;
  profiles: Profile[];
  activeId: string;
  settings: Settings;
  hydrate: (data: Persisted | null) => void;
  setActive: (id: string) => void;
  createProfile: (name: string, animal: Animal, difficulty: Diff) => void;
  rename: (name: string) => void;
  setDifficulty: (d: Diff) => void;
  setLimit: (min: number | null) => void;
  removeProfile: (id: string) => void;
  patchSettings: (p: Partial<Settings>) => void;
  addPlaytime: (seconds: number) => void;
  overLimit: () => boolean;
  recordResult: (gameId: string, score: number, win: boolean, stars: number) => Result;
  collectLobbyStar: (id: string) => boolean;
  buyHat: (id: string) => boolean;
  wearHat: (id: string) => void;
  buyPet: (id: string) => boolean;
  equipPet: (id: string) => void;
  setScarf: (color: string) => void;
  buyDecor: (id: string) => boolean;
  toggleDecor: (id: string) => void;
  replaceAll: (data: Persisted) => void;
};

function mapActive(profiles: Profile[], activeId: string, fn: (p: Profile) => Profile) {
  return profiles.map((p) => (p.id === activeId ? fn(rollDaily(p)) : p));
}

export const useFaliz = create<Store>((set, get) => ({
  ready: false,
  profiles: [],
  activeId: "",
  settings: defaultSettings,
  hydrate: (data) => {
    if (!data || !Array.isArray(data.profiles)) {
      set({ ready: true, profiles: [], activeId: "", settings: defaultSettings });
      return;
    }
    const profiles = data.profiles.map((p) => rollDaily({ ...freshProfile("Faliz"), ...p }));
    set({
      ready: true,
      profiles,
      activeId: profiles.some((p) => p.id === data.activeId) ? data.activeId : (profiles[0]?.id ?? ""),
      settings: { ...defaultSettings, ...data.settings },
    });
  },
  setActive: (id) => set({ activeId: id }),
  createProfile: (name, animal, difficulty) => {
    const p = freshProfile(name, animal);
    p.difficulty = difficulty;
    set((s) => ({ profiles: [...s.profiles, p], activeId: p.id }));
  },
  rename: (name) =>
    set((s) => ({
      profiles: mapActive(s.profiles, s.activeId, (p) => ({ ...p, name: name.slice(0, 12) || p.name })),
    })),
  setDifficulty: (d) => set((s) => ({ profiles: mapActive(s.profiles, s.activeId, (p) => ({ ...p, difficulty: d })) })),
  setLimit: (min) => set((s) => ({ profiles: mapActive(s.profiles, s.activeId, (p) => ({ ...p, playLimitMin: min })) })),
  removeProfile: (id) =>
    set((s) => {
      const profiles = s.profiles.filter((p) => p.id !== id);
      return { profiles, activeId: s.activeId === id ? (profiles[0]?.id ?? "") : s.activeId };
    }),
  patchSettings: (p) => set((s) => ({ settings: { ...s.settings, ...p } })),
  addPlaytime: (seconds) =>
    set((s) => ({
      profiles: mapActive(s.profiles, s.activeId, (p) => {
        const today = dateKey();
        const playSeconds = p.playDate === today ? p.playSeconds + seconds : seconds;
        return { ...p, playDate: today, playSeconds };
      }),
    })),
  overLimit: () => {
    const p = get().profiles.find((x) => x.id === get().activeId);
    if (!p || !p.playLimitMin) return false;
    if (p.playDate !== dateKey()) return false;
    return p.playSeconds >= p.playLimitMin * 60;
  },
  recordResult: (gameId, score, win, stars) => {
    let result: Result = { coins: 0, stars: 0, achievements: [], levelUp: false };
    set((s) => ({
      profiles: mapActive(s.profiles, s.activeId, (p) => {
        const coins = win ? Math.max(5, Math.round(score / 8)) : Math.max(0, Math.round(score / 16));
        const before = levelOf(p.xp);
        const prev = p.stats[gameId] ?? { plays: 0, wins: 0, best: 0, bestStars: 0 };
        const stat: Stat = {
          plays: prev.plays + 1,
          wins: prev.wins + (win ? 1 : 0),
          best: Math.max(prev.best, score),
          bestStars: Math.max(prev.bestStars, stars),
        };
        let missions = p.missions.map((m) => ({ ...m }));
        const bump = (id: string, n: number) => {
          missions = missions.map((m) =>
            m.id === id ? { ...m, progress: Math.min(m.target, m.progress + n) } : m,
          );
        };
        bump("play", 1);
        if (win) bump("win", 1);
        bump("coins", coins);
        const next: Profile = {
          ...p,
          coins: p.coins + coins,
          stars: p.stars + stars,
          xp: p.xp + coins,
          stats: { ...p.stats, [gameId]: stat },
          missions,
        };
        const ach = earned(next);
        if (ach.length) next.coins += ach.length * 15;
        next.achievements = [...next.achievements, ...ach];
        result = { coins, stars, achievements: ach, levelUp: levelOf(next.xp) > before };
        return next;
      }),
    }));
    return result;
  },
  collectLobbyStar: (id) => {
    const p = get().profiles.find((x) => x.id === get().activeId);
    if (!p || p.foundStars.includes(id)) return false;
    set((s) => ({
      profiles: mapActive(s.profiles, s.activeId, (profile) => ({
        ...profile,
        foundStars: [...profile.foundStars, id],
        coins: profile.coins + 5,
      })),
    }));
    return true;
  },
  buyHat: (id) => {
    const item = HATS.find((h) => h.id === id);
    const p = get().profiles.find((x) => x.id === get().activeId);
    if (!item || !p || p.ownedHats.includes(id) || p.coins < item.cost) return false;
    set((s) => ({
      profiles: mapActive(s.profiles, s.activeId, (profile) => ({
        ...profile,
        coins: profile.coins - item.cost,
        ownedHats: [...profile.ownedHats, id],
        hat: id,
      })),
    }));
    return true;
  },
  wearHat: (id) =>
    set((s) => ({
      profiles: mapActive(s.profiles, s.activeId, (p) => (p.ownedHats.includes(id) ? { ...p, hat: id } : p)),
    })),
  buyPet: (id) => {
    const item = PETS.find((h) => h.id === id);
    const p = get().profiles.find((x) => x.id === get().activeId);
    if (!item || !p || p.ownedPets.includes(id) || p.stars < item.stars) return false;
    set((s) => ({
      profiles: mapActive(s.profiles, s.activeId, (profile) => ({
        ...profile,
        stars: profile.stars - item.stars,
        ownedPets: [...profile.ownedPets, id],
        pet: id,
      })),
    }));
    return true;
  },
  equipPet: (id) =>
    set((s) => ({
      profiles: mapActive(s.profiles, s.activeId, (p) => (p.ownedPets.includes(id) ? { ...p, pet: id } : p)),
    })),
  setScarf: (color) => set((s) => ({ profiles: mapActive(s.profiles, s.activeId, (p) => ({ ...p, scarf: color })) })),
  buyDecor: (id) => {
    const item = DECOR.find((d) => d.id === id);
    const p = get().profiles.find((x) => x.id === get().activeId);
    if (!item || !p || p.ownedDecor.includes(id) || p.coins < item.cost) return false;
    set((s) => ({
      profiles: mapActive(s.profiles, s.activeId, (p) => ({
        ...p,
        coins: p.coins - item.cost,
        ownedDecor: [...p.ownedDecor, id],
        shownDecor: [...p.shownDecor, id],
      })),
    }));
    return true;
  },
  toggleDecor: (id) =>
    set((s) => ({
      profiles: mapActive(s.profiles, s.activeId, (p) => {
        if (!p.ownedDecor.includes(id)) return p;
        const on = p.shownDecor.includes(id);
        return { ...p, shownDecor: on ? p.shownDecor.filter((d) => d !== id) : [...p.shownDecor, id] };
      }),
    })),
  replaceAll: (data) => {
    const profiles = data.profiles.map((p) => rollDaily({ ...freshProfile("Faliz"), ...p }));
    set({
      profiles,
      activeId: profiles.some((p) => p.id === data.activeId) ? data.activeId : (profiles[0]?.id ?? ""),
      settings: { ...defaultSettings, ...data.settings },
    });
  },
}));

export function activeProfile() {
  const s = useFaliz.getState();
  return s.profiles.find((p) => p.id === s.activeId);
}

export function snapshot(): Persisted {
  const s = useFaliz.getState();
  return { version: 1, profiles: s.profiles, activeId: s.activeId, settings: s.settings };
}

export function starsFor(score: number, win: boolean) {
  if (!win) return 0;
  if (score >= 120) return 3;
  if (score >= 70) return 2;
  return 1;
}

let timer: ReturnType<typeof setTimeout> | null = null;
let hooked = false;

export function initSave() {
  if (hooked || typeof window === "undefined") return;
  hooked = true;
  useFaliz.subscribe((s) => {
    if (!s.ready) return;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      void writeRaw(snapshot());
    }, 200);
  });
}

export async function bootSave() {
  const raw = await readRaw();
  const data = isPersisted(raw) ? raw : null;
  useFaliz.getState().hydrate(data);
  initSave();
}

function isPersisted(raw: unknown): raw is Persisted {
  if (!raw || typeof raw !== "object") return false;
  const v = raw as Persisted;
  return v.version === 1 && Array.isArray(v.profiles);
}

export function gameStat(p: Profile | undefined, id: string) {
  return p?.stats[id];
}

export function worldProgress(p: Profile | undefined, worldId: string) {
  const world = WORLDS.find((w) => w.id === worldId);
  if (!world || !p) return { wins: 0, total: 5 };
  const wins = world.games.filter((g) => (p.stats[g.id]?.wins ?? 0) > 0).length;
  return { wins, total: world.games.length };
}

export function knownGameCount() {
  return allGames().length;
}
