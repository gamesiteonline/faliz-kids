import { Component, lazy, Suspense, useEffect, useMemo, useState, type ReactNode } from "react";
import {
  ChevronLeft,
  Coins,
  Lock,
  Pause,
  Settings,
  Star,
  Trophy,
  Volume2,
  VolumeX,
} from "lucide-react";
import { allGames, findGame, findWorld, WORLDS } from "../catalog";
import { setMusic, setSfx, unlockAudio } from "../audio";
import {
  ACHIEVEMENTS,
  bootSave,
  dateKey,
  DECOR,
  gameStat,
  HATS,
  levelOf,
  PETS,
  starsFor,
  useFaliz,
  worldProgress,
  type Animal,
  type Diff,
  type Persisted,
  type Profile,
} from "../store";
import { ANIMALS, Avatar, SCARVES } from "./avatars";
import { GameStage } from "./GameStage";

const WorldLobby = lazy(() => import("../lobby/WorldLobby").then((m) => ({ default: m.WorldLobby })));

type Screen =
  | { name: "splash" }
  | { name: "profiles" }
  | { name: "lobby" }
  | { name: "world"; worldId: string }
  | { name: "game"; gameId: string }
  | {
      name: "result";
      gameId: string;
      score: number;
      win: boolean;
      stars: number;
      coins: number;
      achievements: string[];
      levelUp: boolean;
    }
  | { name: "customize" }
  | { name: "parent" }
  | { name: "awards" }
  | { name: "break" };

export function FalizApp() {
  const [screen, setScreen] = useState<Screen>({ name: "splash" });
  const [booted, setBooted] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const ready = useFaliz((s) => s.ready);
  const profiles = useFaliz((s) => s.profiles);
  const activeId = useFaliz((s) => s.activeId);
  const settings = useFaliz((s) => s.settings);
  const profile = profiles.find((p) => p.id === activeId);

  useEffect(() => {
    void bootSave().finally(() => setBooted(true));
  }, []);

  useEffect(() => {
    setMusic(settings.music);
    setSfx(settings.sfx);
  }, [settings.music, settings.sfx]);

  useEffect(() => {
    const playing = screen.name === "lobby" || screen.name === "world" || screen.name === "game" || screen.name === "customize";
    if (!playing || !profile) return;
    const id = window.setInterval(() => useFaliz.getState().addPlaytime(1), 1000);
    return () => window.clearInterval(id);
  }, [screen.name, profile?.id]);

  useEffect(() => {
    const onPop = (e: PopStateEvent) => {
      const next = (e.state as { screen?: Screen } | null)?.screen;
      if (next) setScreen(next);
    };
    window.addEventListener("popstate", onPop);
    history.replaceState({ screen: { name: "splash" } }, "");
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const go = (next: Screen) => {
    setScreen(next);
    history.pushState({ screen: next }, "");
  };

  const back = () => history.back();

  if (screen.name === "splash") {
    return (
      <main className="kid-shell h-dvh overflow-hidden bg-lagoon text-ink">
        <Splash
          ready={booted && ready}
          onPlay={() => {
            if (!booted || !ready) return;
            unlockAudio();
            if (profiles.length === 0) go({ name: "profiles" });
            else {
              if (!activeId && profiles[0]) useFaliz.getState().setActive(profiles[0].id);
              go(profiles.length > 1 ? { name: "profiles" } : { name: "lobby" });
            }
          }}
        />
      </main>
    );
  }

  if (!booted || !ready) {
    return (
      <main className="kid-shell flex h-dvh items-center justify-center bg-lagoon text-ink">
        <p className="font-display text-2xl">Faliz is waking up…</p>
      </main>
    );
  }

  return (
    <main className="kid-shell h-dvh overflow-hidden bg-lagoon text-ink">
      {screen.name === "profiles" && (
        <Profiles
          profiles={profiles}
          onPick={(id) => {
            useFaliz.getState().setActive(id);
            go({ name: "lobby" });
          }}
          onCreate={(name, animal, difficulty) => {
            useFaliz.getState().createProfile(name, animal, difficulty);
            go({ name: "lobby" });
          }}
        />
      )}
      {screen.name === "lobby" && profile && (
        <Lobby
          profile={profile}
          quality={settings.quality}
          settingsOpen={settingsOpen}
          onToggleSettings={() => setSettingsOpen((v) => !v)}
          onWorld={(id) => go({ name: "world", worldId: id })}
          onCustomize={() => go({ name: "customize" })}
          onAwards={() => go({ name: "awards" })}
          onParent={() => go({ name: "parent" })}
          onProfiles={() => go({ name: "profiles" })}
        />
      )}
      {screen.name === "world" && profile && (
        <WorldPage
          worldId={screen.worldId}
          profile={profile}
          onBack={back}
          onPlay={(gameId) => {
            if (useFaliz.getState().overLimit()) go({ name: "break" });
            else go({ name: "game", gameId });
          }}
        />
      )}
      {screen.name === "game" && profile && (
        <GameStage
          gameId={screen.gameId}
          difficulty={profile.difficulty}
          quality={settings.quality}
          onExit={back}
          onDone={({ score, win }) => {
            const stars = starsFor(score, win);
            const result = useFaliz.getState().recordResult(screen.gameId, score, win, stars);
            go({
              name: "result",
              gameId: screen.gameId,
              score,
              win,
              stars,
              coins: result.coins,
              achievements: result.achievements,
              levelUp: result.levelUp,
            });
          }}
        />
      )}
      {screen.name === "result" && (
        <Result
          screen={screen}
          onAgain={() => go({ name: "game", gameId: screen.gameId })}
          onMap={() => go({ name: "lobby" })}
          onNext={() => {
            const games = allGames();
            const i = games.findIndex((g) => g.id === screen.gameId);
            const next = games[(i + 1) % games.length];
            if (next) go({ name: "game", gameId: next.id });
          }}
        />
      )}
      {screen.name === "customize" && profile && <Customize profile={profile} onBack={back} />}
      {screen.name === "awards" && profile && <Awards profile={profile} onBack={back} />}
      {screen.name === "parent" && <Parent onBack={back} />}
      {screen.name === "break" && <BreakTime onParent={() => go({ name: "parent" })} onMap={() => go({ name: "lobby" })} />}
    </main>
  );
}

function Splash({ onPlay, ready }: { onPlay: () => void; ready: boolean }) {
  return (
    <section className="flex h-dvh flex-col items-center justify-center gap-5 overflow-hidden bg-lagoon px-6 text-center">
      <img src="/faliz/icon.png" alt="Faliz Kids World" className="w-64 max-w-[78vw] rounded-[22%] shadow-lg" />
      <div>
        <h1 className="text-4xl text-ink sm:text-5xl">Faliz Kids World</h1>
        <p className="mt-2 font-display tracking-wide text-ink-soft">Play · Learn · Explore · Create</p>
      </div>
      <button type="button" className="kid-btn bg-gold px-12 text-xl text-ink disabled:opacity-60" onClick={onPlay} disabled={!ready}>
        Enter the world
      </button>
      <p className="text-sm text-ink-soft">By Fahad Mohamed · 12 islands · 60 games</p>
    </section>
  );
}

function Profiles({
  profiles,
  onPick,
  onCreate,
}: {
  profiles: Profile[];
  onPick: (id: string) => void;
  onCreate: (name: string, animal: Animal, difficulty: Diff) => void;
}) {
  const [name, setName] = useState("Faliz");
  const [animal, setAnimal] = useState<Animal>("dog");
  const [difficulty, setDifficulty] = useState<Diff>("beginner");
  return (
    <section className="safe-top mx-auto flex h-dvh w-full max-w-lg flex-col gap-4 overflow-y-auto px-4 pb-8">
      <h1 className="text-3xl">Who is playing?</h1>
      <div className="flex flex-col gap-2">
        {profiles.map((p) => (
          <button key={p.id} type="button" className="flex items-center gap-3 rounded-3xl bg-cream p-3 text-left" onClick={() => onPick(p.id)}>
            <Avatar animal={p.animal} hat={p.hat} scarf={p.scarf} />
            <span>
              <span className="block font-display text-xl">{p.name}</span>
              <span className="text-sm text-ink-soft">Level {levelOf(p.xp)}</span>
            </span>
          </button>
        ))}
      </div>
      <form
        className="rounded-3xl bg-cream p-4"
        onSubmit={(e) => {
          e.preventDefault();
          onCreate(name.trim() || "Faliz", animal, difficulty);
        }}
      >
        <h2 className="text-xl">New friend</h2>
        <label className="mt-2 block text-sm text-ink-soft" htmlFor="nick">
          Nickname
        </label>
        <input
          id="nick"
          maxLength={12}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded-2xl border border-line bg-foam px-3 py-3 text-ink"
        />
        <div className="mt-3 flex gap-2">
          {ANIMALS.map((a) => (
            <button key={a.id} type="button" className={`rounded-2xl p-1 ${animal === a.id ? "bg-gold" : "bg-foam"}`} onClick={() => setAnimal(a.id)} aria-label={a.name}>
              <Avatar animal={a.id} className="h-12 w-12" />
            </button>
          ))}
        </div>
        <div className="mt-3 flex gap-2">
          {(
            [
              ["beginner", "Easy"],
              ["intermediate", "Brave"],
              ["advanced", "Hero"],
            ] as const
          ).map(([id, label]) => (
            <button key={id} type="button" className={`kid-btn ${difficulty === id ? "bg-royal text-cream" : "bg-foam text-ink"}`} onClick={() => setDifficulty(id)}>
              {label}
            </button>
          ))}
        </div>
        <button type="submit" className="kid-btn mt-4 w-full bg-gold text-ink">
          Let’s play
        </button>
      </form>
    </section>
  );
}

function Lobby({
  profile,
  quality,
  settingsOpen,
  onToggleSettings,
  onWorld,
  onCustomize,
  onAwards,
  onParent,
  onProfiles,
}: {
  profile: Profile;
  quality: "low" | "medium" | "high";
  settingsOpen: boolean;
  onToggleSettings: () => void;
  onWorld: (id: string) => void;
  onCustomize: () => void;
  onAwards: () => void;
  onParent: () => void;
  onProfiles: () => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const patch = useFaliz((s) => s.patchSettings);
  const music = useFaliz((s) => s.settings.music);
  const sfx = useFaliz((s) => s.settings.sfx);
  return (
    <section className="relative h-dvh">
      <div className="absolute inset-0">
        <Suspense fallback={<div className="h-full w-full bg-lagoon" />}>
          <LobbyBoundary>
            <WorldLobby
              selected={selected}
              scarf={profile.scarf}
              hat={profile.hat}
              pet={profile.pet}
              quality={quality}
              found={profile.foundStars}
              onSelect={(id) => {
                setSelected(id);
                onWorld(id);
              }}
              onStar={(id) => useFaliz.getState().collectLobbyStar(id)}
            />
          </LobbyBoundary>
        </Suspense>
      </div>
      <div className="pointer-events-none absolute inset-0 flex flex-col">
        <header className="safe-top pointer-events-auto flex items-center gap-2 px-3 pb-2">
          <button type="button" className="flex items-center gap-2 rounded-full bg-cream px-2 py-1" onClick={onProfiles}>
            <Avatar animal={profile.animal} hat={profile.hat} scarf={profile.scarf} className="h-10 w-10" />
            <span className="pr-2 text-left">
              <span className="block font-display leading-none">{profile.name}</span>
              <span className="text-xs text-ink-soft">Level {levelOf(profile.xp)}</span>
            </span>
          </button>
          <span className="flex items-center gap-1 rounded-full bg-cream px-3 py-2 text-sm">
            <Coins className="size-4 text-gold-deep" /> {profile.coins}
          </span>
          <span className="flex items-center gap-1 rounded-full bg-cream px-3 py-2 text-sm">
            <Star className="size-4 text-gold-deep" /> {profile.stars}
          </span>
          <button type="button" className="ml-auto rounded-full bg-cream p-3" onClick={onToggleSettings} aria-label="Settings">
            <Settings className="size-5" />
          </button>
          <button type="button" className="rounded-full bg-cream p-3" onClick={onParent} aria-label="Parents">
            <Lock className="size-5" />
          </button>
        </header>
        {settingsOpen && (
          <div className="pointer-events-auto mx-3 rounded-3xl bg-cream p-3 text-sm">
            <div className="flex flex-wrap gap-2">
              <button type="button" className="kid-btn bg-foam" onClick={() => patch({ music: !music })}>
                {music ? <Volume2 className="size-4" /> : <VolumeX className="size-4" />} Music
              </button>
              <button type="button" className="kid-btn bg-foam" onClick={() => patch({ sfx: !sfx })}>
                Sounds {sfx ? "on" : "off"}
              </button>
              {(["low", "medium", "high"] as const).map((q) => (
                <button key={q} type="button" className={`kid-btn capitalize ${quality === q ? "bg-royal text-cream" : "bg-foam"}`} onClick={() => patch({ quality: q })}>
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}
        <div className="flex-1" />
        <div className="safe-bottom pointer-events-auto px-3 pb-3">
          <div className="mb-2 flex items-center justify-between gap-2">
            <p className="rounded-full bg-cream/95 px-3 py-1 text-sm text-ink">Drag to look · tap an island</p>
            <div className="flex gap-2">
              <button type="button" className="rounded-full bg-cream p-2" onClick={onAwards} aria-label="Awards">
                <Trophy className="size-5 text-gold-deep" />
              </button>
              <button type="button" className="kid-btn bg-gold text-ink" onClick={onCustomize}>
                Room
              </button>
            </div>
          </div>
          <p className="mb-2 w-fit rounded-full bg-cream/95 px-3 py-1 text-sm">
            Today {profile.missions.map((m) => `${m.progress}/${m.target}`).join(" · ")}
          </p>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {WORLDS.map((world) => {
              const prog = worldProgress(profile, world.id);
              return (
                <button
                  key={world.id}
                  type="button"
                  className="flex shrink-0 items-center gap-2 rounded-full bg-cream px-3 py-2 text-left text-ink"
                  onClick={() => onWorld(world.id)}
                >
                  <span className="size-3 rounded-full" style={{ background: world.accent }} />
                  <span>
                    <span className="block font-display text-sm leading-none">{world.name}</span>
                    <span className="text-xs text-ink-soft">{prog.wins}/5</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function LobbyBoundary({ children }: { children: ReactNode }) {
  return <CrashBoundary>{children}</CrashBoundary>;
}

class CrashBoundary extends Component<{ children: ReactNode }, { error: boolean }> {
  state = { error: false };
  static getDerivedStateFromError() {
    return { error: true };
  }
  render() {
    if (this.state.error) return <div className="h-full w-full bg-lagoon" />;
    return this.props.children;
  }
}

function WorldPage({
  worldId,
  profile,
  onBack,
  onPlay,
}: {
  worldId: string;
  profile: Profile;
  onBack: () => void;
  onPlay: (id: string) => void;
}) {
  const world = findWorld(worldId);
  if (!world) return null;
  return (
    <section className="safe-top mx-auto flex h-dvh w-full max-w-lg flex-col gap-3 overflow-y-auto px-4 pb-6">
      <button type="button" className="kid-btn w-fit bg-cream" onClick={onBack}>
        <ChevronLeft className="inline size-4" /> Islands
      </button>
      <h1 className="text-3xl">{world.name}</h1>
      <p className="text-ink-soft">{world.blurb}</p>
      <div className="flex flex-col gap-3">
        {world.games.map((game) => {
          const stat = gameStat(profile, game.id);
          const stars = stat?.bestStars ?? 0;
          return (
            <article key={game.id} className="rounded-3xl bg-cream p-4">
              <h2 className="text-xl">{game.name}</h2>
              <p className="text-sm text-ink-soft">{game.blurb}</p>
              <div className="mt-2 flex items-center gap-1">
                {[0, 1, 2].map((i) => (
                  <Star key={i} className={i < stars ? "text-gold" : "text-line"} fill={i < stars ? "currentColor" : "none"} />
                ))}
                <span className="ml-2 text-sm text-ink-soft">Best {stat?.best ?? 0}</span>
              </div>
              <button type="button" className="kid-btn mt-3 bg-royal text-cream" onClick={() => onPlay(game.id)}>
                Play
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Result({
  screen,
  onAgain,
  onMap,
  onNext,
}: {
  screen: Extract<Screen, { name: "result" }>;
  onAgain: () => void;
  onMap: () => void;
  onNext: () => void;
}) {
  const game = findGame(screen.gameId);
  const names = ACHIEVEMENTS.filter((a) => screen.achievements.includes(a.id)).map((a) => a.name);
  return (
    <section className="flex h-dvh flex-col items-center justify-center gap-3 px-6 text-center">
      <p className="text-sm text-ink-soft">{game?.name}</p>
      <h1 className="text-4xl">{screen.win ? "You did it!" : "Nice try"}</h1>
      <div className="flex gap-1">
        {[0, 1, 2].map((i) => (
          <Star key={i} className={`size-10 ${i < screen.stars ? "text-gold" : "text-line"}`} fill={i < screen.stars ? "currentColor" : "none"} />
        ))}
      </div>
      <p className="text-lg">Score {screen.score}</p>
      <p>Coins +{screen.coins}</p>
      {screen.levelUp && <p className="font-display text-xl text-royal">Level up!</p>}
      {names.length > 0 && <p>New award: {names.join(", ")}</p>}
      <div className="flex flex-wrap justify-center gap-2">
        <button type="button" className="kid-btn bg-gold text-ink" onClick={onAgain}>
          Play again
        </button>
        <button type="button" className="kid-btn bg-royal text-cream" onClick={onNext}>
          Next game
        </button>
        <button type="button" className="kid-btn bg-cream text-ink" onClick={onMap}>
          Islands
        </button>
      </div>
    </section>
  );
}

function Customize({ profile, onBack }: { profile: Profile; onBack: () => void }) {
  const api = useFaliz.getState();
  return (
    <section className="safe-top mx-auto flex h-dvh w-full max-w-lg flex-col gap-4 overflow-y-auto px-4 pb-8">
      <button type="button" className="kid-btn w-fit bg-cream" onClick={onBack}>
        <ChevronLeft className="inline size-4" /> Back
      </button>
      <div className="rounded-3xl bg-cream p-4">
        <div className="flex items-center gap-3">
          <Avatar animal={profile.animal} hat={profile.hat} scarf={profile.scarf} className="h-24 w-24" />
          <div>
            <h1 className="text-2xl">{profile.name}</h1>
            <p className="text-sm text-ink-soft">Pet {PETS.find((p) => p.id === profile.pet)?.name}</p>
          </div>
        </div>
        <Room decor={profile.shownDecor} />
      </div>
      <h2 className="text-xl">Hats</h2>
      <div className="flex flex-wrap gap-2">
        {HATS.map((hat) => {
          const owned = profile.ownedHats.includes(hat.id);
          return (
            <button
              key={hat.id}
              type="button"
              className={`kid-btn ${profile.hat === hat.id ? "bg-gold" : "bg-cream"}`}
              onClick={() => (owned ? api.wearHat(hat.id) : api.buyHat(hat.id))}
            >
              {hat.name}
              {!owned && ` · ${hat.cost}`}
            </button>
          );
        })}
      </div>
      <h2 className="text-xl">Collar</h2>
      <div className="flex gap-2">
        {SCARVES.map((c) => (
          <button key={c} type="button" className="h-11 w-11 rounded-full border-2 border-cream" style={{ background: c }} aria-label="Collar colour" onClick={() => api.setScarf(c)} />
        ))}
      </div>
      <h2 className="text-xl">Pets</h2>
      <div className="flex flex-wrap gap-2">
        {PETS.map((pet) => {
          const owned = profile.ownedPets.includes(pet.id);
          return (
            <button key={pet.id} type="button" className={`kid-btn ${profile.pet === pet.id ? "bg-gold" : "bg-cream"}`} onClick={() => (owned ? api.equipPet(pet.id) : api.buyPet(pet.id))}>
              {pet.name}
              {!owned && ` · ${pet.stars} stars`}
            </button>
          );
        })}
      </div>
      <h2 className="text-xl">Room</h2>
      <div className="flex flex-wrap gap-2">
        {DECOR.map((item) => {
          const owned = profile.ownedDecor.includes(item.id);
          const shown = profile.shownDecor.includes(item.id);
          return (
            <button key={item.id} type="button" className={`kid-btn ${shown ? "bg-leaf text-ink" : "bg-cream"}`} onClick={() => (owned ? api.toggleDecor(item.id) : api.buyDecor(item.id))}>
              {item.name}
              {!owned && ` · ${item.cost}`}
            </button>
          );
        })}
      </div>
      <h2 className="text-xl">Difficulty</h2>
      <div className="flex gap-2">
        {(
          [
            ["beginner", "Easy"],
            ["intermediate", "Brave"],
            ["advanced", "Hero"],
          ] as const
        ).map(([id, label]) => (
          <button key={id} type="button" className={`kid-btn ${profile.difficulty === id ? "bg-royal text-cream" : "bg-cream"}`} onClick={() => api.setDifficulty(id)}>
            {label}
          </button>
        ))}
      </div>
    </section>
  );
}

function Room({ decor }: { decor: string[] }) {
  return (
    <div className="relative mt-3 h-28 overflow-hidden rounded-2xl bg-lagoon-soft">
      <div className="absolute bottom-0 h-8 w-full bg-gold/70" />
      {decor.includes("rug") && <div className="absolute bottom-2 left-6 h-6 w-24 rounded-full bg-berry" />}
      {decor.includes("plant") && <div className="absolute bottom-8 left-4 h-10 w-4 rounded-full bg-leaf" />}
      {decor.includes("books") && <div className="absolute right-16 bottom-8 h-8 w-10 bg-royal" />}
      {decor.includes("lamp") && <div className="absolute top-3 right-8 h-6 w-6 rounded-full bg-gold" />}
      {decor.includes("shelf") && <div className="absolute top-8 left-1/2 h-3 w-20 -translate-x-1/2 bg-ink" />}
    </div>
  );
}

function Awards({ profile, onBack }: { profile: Profile; onBack: () => void }) {
  return (
    <section className="safe-top mx-auto flex h-dvh w-full max-w-lg flex-col gap-3 overflow-y-auto px-4 pb-8">
      <button type="button" className="kid-btn w-fit bg-cream" onClick={onBack}>
        <ChevronLeft className="inline size-4" /> Back
      </button>
      <h1 className="text-3xl">Awards</h1>
      {ACHIEVEMENTS.map((a) => {
        const on = profile.achievements.includes(a.id);
        return (
          <article key={a.id} className={`rounded-3xl p-4 ${on ? "bg-gold" : "bg-cream"}`}>
            <h2 className="text-lg">{a.name}</h2>
            <p className="text-sm">{a.detail}</p>
            <p className="text-sm">{on ? "Unlocked" : "Still to earn"}</p>
          </article>
        );
      })}
    </section>
  );
}

function Parent({ onBack }: { onBack: () => void }) {
  const [open, setOpen] = useState(false);
  const [answer, setAnswer] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const question = useMemo(() => {
    const a = 6 + Math.floor(Math.random() * 7);
    const b = 4 + Math.floor(Math.random() * 6);
    return { text: `What is ${a} + ${b}?`, value: String(a + b) };
  }, []);
  const settings = useFaliz((s) => s.settings);
  const profiles = useFaliz((s) => s.profiles);
  const activeId = useFaliz((s) => s.activeId);
  const profile = profiles.find((p) => p.id === activeId);

  const unlock = () => {
    if (settings.pin) {
      if (pin === settings.pin) setOpen(true);
      else setError("That code does not match.");
      return;
    }
    if (answer.trim() === question.value) setOpen(true);
    else setError("Try the sum again.");
  };

  if (!open) {
    return (
      <section className="safe-top mx-auto flex h-dvh w-full max-w-md flex-col gap-3 px-4">
        <button type="button" className="kid-btn w-fit bg-cream" onClick={onBack}>
          <ChevronLeft className="inline size-4" /> Back
        </button>
        <h1 className="text-3xl">Grown-ups</h1>
        <p className="text-ink-soft">A quick check keeps play settings with a parent. We do not ask for names, email or location.</p>
        {settings.pin ? (
          <input value={pin} onChange={(e) => setPin(e.target.value)} inputMode="numeric" maxLength={4} className="rounded-2xl border border-line bg-foam px-3 py-3" placeholder="4 digit code" aria-label="Parent code" />
        ) : (
          <>
            <p className="font-display text-2xl">{question.text}</p>
            <input value={answer} onChange={(e) => setAnswer(e.target.value)} inputMode="numeric" className="rounded-2xl border border-line bg-foam px-3 py-3" aria-label="Answer" />
          </>
        )}
        {error && <p className="text-berry">{error}</p>}
        <button type="button" className="kid-btn bg-royal text-cream" onClick={unlock}>
          Continue
        </button>
      </section>
    );
  }

  const minutes = profile && profile.playDate === dateKey() ? Math.round(profile.playSeconds / 60) : 0;

  return (
    <section className="safe-top mx-auto flex h-dvh w-full max-w-lg flex-col gap-4 overflow-y-auto px-4 pb-8">
      <button type="button" className="kid-btn w-fit bg-cream" onClick={onBack}>
        <ChevronLeft className="inline size-4" /> Back
      </button>
      <h1 className="text-3xl">Parent desk</h1>
      <p className="text-sm text-ink-soft">Fahad Mohamed · Faliz Kids World stays on this device.</p>
      {profile && (
        <>
          <p>
            {profile.name} played about {minutes} minutes today.
          </p>
          <label className="text-sm" htmlFor="limit">
            Daily play limit
          </label>
          <div className="flex flex-wrap gap-2">
            {[null, 15, 30, 45, 60].map((n) => (
              <button key={String(n)} type="button" className={`kid-btn ${profile.playLimitMin === n ? "bg-royal text-cream" : "bg-cream"}`} onClick={() => useFaliz.getState().setLimit(n)}>
                {n == null ? "None" : `${n} min`}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {WORLDS.map((w) => {
              const prog = worldProgress(profile, w.id);
              return (
                <div key={w.id}>
                  <div className="flex justify-between text-sm">
                    <span>{w.name}</span>
                    <span>
                      {prog.wins}/{prog.total}
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-line">
                    <div className="h-full rounded-full bg-royal" style={{ width: `${(prog.wins / prog.total) * 100}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
      <h2 className="text-xl">Parent code</h2>
      <PinSetter />
      <h2 className="text-xl">Profiles</h2>
      {profiles.map((p) => (
        <div key={p.id} className="flex items-center justify-between rounded-2xl bg-cream px-3 py-2">
          <span>{p.name}</span>
          {profiles.length > 1 && (
            <button type="button" className="text-sm text-berry" onClick={() => useFaliz.getState().removeProfile(p.id)}>
              Remove
            </button>
          )}
        </div>
      ))}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className="kid-btn bg-cream"
          onClick={() => {
            const blob = new Blob([JSON.stringify(snapshotSafe())], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "faliz-kids-world-backup.json";
            a.click();
            URL.revokeObjectURL(url);
          }}
        >
          Save a backup
        </button>
        <label className="kid-btn bg-cream">
          Restore
          <input
            type="file"
            accept="application/json"
            className="sr-only"
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              try {
                const data = JSON.parse(await file.text()) as Persisted;
                if (!data || data.version !== 1 || !Array.isArray(data.profiles)) throw new Error("bad");
                useFaliz.getState().replaceAll(data);
              } catch {
                setError("That file is not a Faliz backup.");
              }
            }}
          />
        </label>
      </div>
      {error && <p className="text-berry">{error}</p>}
    </section>
  );
}

function snapshotSafe() {
  const s = useFaliz.getState();
  return { version: 1 as const, profiles: s.profiles, activeId: s.activeId, settings: s.settings };
}

function PinSetter() {
  const [value, setValue] = useState("");
  return (
    <form
      className="flex gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        if (value.length === 4) useFaliz.getState().patchSettings({ pin: value });
      }}
    >
      <input value={value} onChange={(e) => setValue(e.target.value.replace(/\D/g, "").slice(0, 4))} inputMode="numeric" className="flex-1 rounded-2xl border border-line bg-foam px-3 py-3" placeholder="Set a 4 digit code" aria-label="New parent code" />
      <button type="submit" className="kid-btn bg-royal text-cream">
        Save
      </button>
      <button type="button" className="kid-btn bg-foam" onClick={() => useFaliz.getState().patchSettings({ pin: null })}>
        Clear
      </button>
    </form>
  );
}

function BreakTime({ onParent, onMap }: { onParent: () => void; onMap: () => void }) {
  return (
    <section className="flex h-dvh flex-col items-center justify-center gap-3 px-6 text-center">
      <Pause className="size-10 text-royal" />
      <h1 className="text-3xl">Time for a break</h1>
      <p className="max-w-sm text-ink-soft">Today’s play time is used up. A grown-up can add more from the parent desk.</p>
      <button type="button" className="kid-btn bg-royal text-cream" onClick={onParent}>
        Parent desk
      </button>
      <button type="button" className="kid-btn bg-cream" onClick={onMap}>
        Back to islands
      </button>
    </section>
  );
}
