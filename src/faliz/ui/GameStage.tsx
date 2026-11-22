import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Crosshair, Pause, Play, RotateCcw } from "lucide-react";
import { findGame, needsChrome, type ControlMode } from "../catalog";
import { playFx } from "../audio";
import { emptyInput, type Diff, type Input } from "../engine/game";
import { createGame } from "../games/registry";

type Props = {
  gameId: string;
  difficulty: Diff;
  quality: "low" | "medium" | "high";
  onExit: () => void;
  onDone: (result: { score: number; win: boolean }) => void;
};

export function GameStage({ gameId, difficulty, quality, onExit, onDone }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const info = findGame(gameId);
  const [hud, setHud] = useState({ score: 0, lives: 3, progress: 0, goal: info?.howTo ?? "" });
  const [phase, setPhase] = useState<"how" | "play" | "pause">("how");
  const phaseRef = useRef(phase);
  phaseRef.current = phase;
  const controls = info?.controls ?? "tap";

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap || !info) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const sim = createGame(gameId);
    const input: Input = emptyInput();
    const keys = new Set<string>();
    const hold = { left: false, right: false, action: false, flap: false, fire: false };
    const queue = { action: false, flap: false };
    const stick = { on: false, x: 0, y: 0 };
    let raf = 0;
    let last = performance.now();
    let px = 0;
    let py = 0;
    let down = false;
    let justDown = false;
    let justUp = false;
    let stopped = false;

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      const dpr =
        quality === "low" ? 1 : quality === "high" ? Math.min(devicePixelRatio || 1, 2) : Math.min(devicePixelRatio || 1, 1.5);
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sim.layout(rect.width, rect.height);
      sim.setChrome(needsChrome(controls) ? 150 : 18);
      if (px === 0) px = rect.width / 2;
      if (py === 0) py = rect.height / 2;
    };
    resize();
    sim.reset(difficulty);
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.type === "keydown") {
        if (e.repeat) return;
        keys.add(e.code);
        if (e.code === "Space" || e.code === "Enter") queue.action = true;
        if (e.code === "ArrowUp" || e.code === "KeyW") queue.flap = true;
        if (e.code === "Escape") setPhase((p) => (p === "play" ? "pause" : p));
        if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.code)) e.preventDefault();
      } else keys.delete(e.code);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("keyup", onKey);

    const compose = () => {
      const mode: ControlMode = controls;
      let ax = 0;
      let ay = 0;
      if (keys.has("ArrowLeft") || keys.has("KeyA") || hold.left) ax -= 1;
      if (keys.has("ArrowRight") || keys.has("KeyD") || hold.right) ax += 1;
      if (keys.has("ArrowUp") || keys.has("KeyW")) ay -= 1;
      if (keys.has("ArrowDown") || keys.has("KeyS")) ay += 1;
      if (stick.on) {
        ax = stick.x;
        ay = stick.y;
      }
      const fly = mode === "fly-shoot";
      const flapMode = mode === "flap";
      input.px = px;
      input.py = py;
      input.down = down;
      input.justDown = justDown;
      input.justUp = justUp;
      input.ax = Math.max(-1, Math.min(1, ax));
      input.ay = Math.max(-1, Math.min(1, ay));
      input.action = fly ? hold.fire || keys.has("KeyF") : hold.action || (!flapMode && (keys.has("Space") || keys.has("Enter")));
      input.actionJust = false;
      input.flap = fly ? down || hold.flap || keys.has("ArrowUp") || keys.has("KeyW") : flapMode ? down || hold.flap || keys.has("Space") : hold.flap;
      input.flapJust = flapMode ? queue.flap || queue.action || justDown : queue.flap;
      if (fly) input.actionJust = queue.action;
      if (mode === "steer-action" || mode === "stick-action") input.actionJust = queue.action || queue.flap;
    };

    const finish = (win: boolean) => {
      if (stopped) return;
      stopped = true;
      cancelAnimationFrame(raf);
      onDone({ score: sim.score(), win });
    };

    const loop = (now: number) => {
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now;
      if (phaseRef.current === "play" && !stopped) {
        compose();
        sim.step(dt, input);
        for (const fx of sim.pullFx()) playFx(fx);
        const next = { score: sim.score(), lives: sim.hud().lives, progress: sim.hud().progress, goal: sim.goalText() };
        setHud((prev) =>
          prev.score === next.score && prev.lives === next.lives && prev.goal === next.goal && Math.abs(prev.progress - next.progress) < 0.02
            ? prev
            : next,
        );
        if (sim.phase() === "win") finish(true);
        else if (sim.phase() === "lose") finish(false);
      }
      ctx.clearRect(0, 0, sim.w, sim.h);
      sim.render(ctx);
      justDown = false;
      justUp = false;
      queue.action = false;
      queue.flap = false;
      input.justDown = false;
      input.justUp = false;
      input.actionJust = false;
      input.flapJust = false;
      if (!stopped) raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const point = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      px = e.clientX - rect.left;
      py = e.clientY - rect.top;
    };
    const downEv = (e: PointerEvent) => {
      point(e);
      down = true;
      justDown = true;
      canvas.setPointerCapture?.(e.pointerId);
    };
    const moveEv = (e: PointerEvent) => point(e);
    const upEv = () => {
      down = false;
      justUp = true;
    };
    canvas.addEventListener("pointerdown", downEv);
    canvas.addEventListener("pointermove", moveEv);
    canvas.addEventListener("pointerup", upEv);
    canvas.addEventListener("pointercancel", upEv);

    const api = {
      hold,
      queue,
      stick,
      restart() {
        resize();
        sim.reset(difficulty);
        stopped = false;
        setPhase("play");
      },
    };
    stageApi.current = api;

    return () => {
      stopped = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("keyup", onKey);
      canvas.removeEventListener("pointerdown", downEv);
      canvas.removeEventListener("pointermove", moveEv);
      canvas.removeEventListener("pointerup", upEv);
      canvas.removeEventListener("pointercancel", upEv);
      stageApi.current = null;
    };
    // difficulty and game are fixed for this mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameId]);

  const stageApi = useRef<{
    hold: { left: boolean; right: boolean; action: boolean; flap: boolean; fire: boolean };
    queue: { action: boolean; flap: boolean };
    stick: { on: boolean; x: number; y: number };
    restart: () => void;
  } | null>(null);

  const bindHold = (key: "left" | "right" | "action" | "flap" | "fire") => ({
    onPointerDown: (e: React.PointerEvent) => {
      e.stopPropagation();
      e.preventDefault();
      const api = stageApi.current;
      if (!api) return;
      api.hold[key] = true;
      if (key === "action" || key === "fire") api.queue.action = true;
      if (key === "flap") api.queue.flap = true;
    },
    onPointerUp: () => {
      if (stageApi.current) stageApi.current.hold[key] = false;
    },
    onPointerLeave: () => {
      if (stageApi.current) stageApi.current.hold[key] = false;
    },
  });

  return (
    <div className="flex h-dvh flex-col bg-ink text-cream">
      <header className="safe-top flex items-center gap-2 px-3 pb-2">
        <button type="button" className="kid-btn bg-cream text-ink" onClick={onExit} aria-label="Back">
          <ChevronLeft className="size-5" />
        </button>
        <div className="min-w-0 flex-1">
          <h1 className="truncate text-lg text-cream">{info?.name}</h1>
          <p className="truncate text-sm text-lagoon-soft">{hud.goal}</p>
        </div>
        <div className="text-right">
          <p className="font-display text-xl text-gold">{hud.score}</p>
          <p className="text-sm text-cream">{hud.lives} lives</p>
        </div>
        <button type="button" className="kid-btn bg-royal text-cream" onClick={() => setPhase("pause")} aria-label="Pause">
          <Pause className="size-5" />
        </button>
      </header>
      <div className="mx-3 h-2 overflow-hidden rounded-full bg-ink-soft">
        <div className="h-full bg-gold" style={{ width: `${Math.round(hud.progress * 100)}%` }} />
      </div>
      <div ref={wrapRef} className="relative min-h-0 flex-1 touch-none">
        <canvas ref={canvasRef} className="h-full w-full touch-none" />
        {phase !== "play" && (
          <div className="absolute inset-0 flex items-center justify-center bg-ink/70 p-4">
            <div className="w-full max-w-md rounded-3xl bg-cream p-5 text-ink">
              <h2 className="text-2xl">{phase === "how" ? info?.name : "Paused"}</h2>
              <p className="mt-2 text-base text-ink-soft">{info?.howTo}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  type="button"
                  className="kid-btn bg-gold text-ink"
                  onClick={() => {
                    if (phase === "pause") stageApi.current?.restart();
                    setPhase("play");
                  }}
                >
                  <Play className="mr-1 inline size-4" />
                  {phase === "how" ? "Start" : "Restart"}
                </button>
                {phase === "pause" && (
                  <button type="button" className="kid-btn bg-royal text-cream" onClick={() => setPhase("play")}>
                    Resume
                  </button>
                )}
                <button type="button" className="kid-btn bg-foam text-ink" onClick={onExit}>
                  Quit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {needsChrome(controls) && (
        <div className="safe-bottom flex items-end justify-between gap-3 px-3 pt-2">
          {(controls === "steer" || controls === "steer-action") && (
            <div className="flex gap-2">
              <button type="button" className="kid-btn bg-foam text-ink" aria-label="Left" {...bindHold("left")}>
                <ChevronLeft />
              </button>
              <button type="button" className="kid-btn bg-foam text-ink" aria-label="Right" {...bindHold("right")}>
                <ChevronRight />
              </button>
            </div>
          )}
          {(controls === "stick" || controls === "stick-action") && <Stick onChange={(x, y, on) => {
            const api = stageApi.current;
            if (!api) return;
            api.stick.on = on;
            api.stick.x = x;
            api.stick.y = y;
          }} />}
          {controls === "flap" && (
            <button type="button" className="kid-btn bg-gold text-ink" aria-label="Flap" {...bindHold("flap")}>
              Flap
            </button>
          )}
          {controls === "fly-shoot" && (
            <button type="button" className="kid-btn bg-lagoon text-ink" aria-label="Fly" {...bindHold("flap")}>
              Fly
            </button>
          )}
          <div className="flex-1" />
          {(controls === "steer-action" || controls === "stick-action") && (
            <button type="button" className="kid-btn bg-gold text-ink" aria-label="Action" {...bindHold("action")}>
              Go
            </button>
          )}
          {controls === "fly-shoot" && (
            <button type="button" className="kid-btn bg-berry text-cream" aria-label="Fire" {...bindHold("fire")}>
              <Crosshair className="mr-1 inline size-4" />
              Fire
            </button>
          )}
          {phase === "play" && (
            <button type="button" className="kid-btn bg-foam text-ink" aria-label="Restart" onClick={() => stageApi.current?.restart()}>
              <RotateCcw className="size-5" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function Stick({ onChange }: { onChange: (x: number, y: number, on: boolean) => void }) {
  const base = useRef<HTMLDivElement>(null);
  const move = (e: React.PointerEvent) => {
    const el = base.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = Math.max(-1, Math.min(1, ((e.clientX - r.left) / r.width) * 2 - 1));
    const y = Math.max(-1, Math.min(1, ((e.clientY - r.top) / r.height) * 2 - 1));
    onChange(x, y, true);
  };
  return (
    <div
      ref={base}
      className="relative h-28 w-28 touch-none rounded-full bg-foam/90"
      onPointerDown={move}
      onPointerMove={(e) => {
        if (e.buttons) move(e);
      }}
      onPointerUp={() => onChange(0, 0, false)}
      onPointerLeave={() => onChange(0, 0, false)}
      role="slider"
      aria-label="Move"
      aria-valuemin={-1}
      aria-valuemax={1}
      aria-valuenow={0}
    >
      <span className="absolute top-1/2 left-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-royal" />
    </div>
  );
}
