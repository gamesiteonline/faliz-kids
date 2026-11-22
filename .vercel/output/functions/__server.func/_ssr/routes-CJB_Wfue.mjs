import { i as __toESM } from "../_runtime.mjs";
import { f as require_jsx_runtime, p as require_react } from "../_libs/@react-three/drei+[...].mjs";
import { a as Star, c as Play, d as Crosshair, f as Coins, l as Pause, m as ChevronLeft, n as Volume2, o as Settings, p as ChevronRight, r as Trophy, s as RotateCcw, t as VolumeX, u as Lock } from "../_libs/lucide-react.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CJB_Wfue.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var WORLDS = [
	{
		id: "learning",
		name: "Learning Kingdom",
		blurb: "Letters, numbers and words",
		accent: "#ffb703",
		land: "#8fd16a",
		sky: "#9ad8ff",
		landmark: "castle",
		games: [
			{
				id: "alphabet-adventure",
				name: "Alphabet Adventure",
				blurb: "Catch the next letter",
				howTo: "Tap letters in order, starting at A. Let the wrong ones fall.",
				controls: "tap"
			},
			{
				id: "number-quest",
				name: "Number Quest",
				blurb: "Build the target sum",
				howTo: "Tap bubbles until they add up to the target number.",
				controls: "tap"
			},
			{
				id: "word-builder",
				name: "Word Builder",
				blurb: "Spell the picture word",
				howTo: "Tap the letters in the right order to spell the word.",
				controls: "tap"
			},
			{
				id: "spelling-challenge",
				name: "Spelling Challenge",
				blurb: "Remember, then spell",
				howTo: "Look at the word, then tap the letters from memory.",
				controls: "tap"
			},
			{
				id: "math-master",
				name: "Math Master 3D",
				blurb: "Solve the missing number",
				howTo: "Tap the block that completes the sum.",
				controls: "tap"
			}
		]
	},
	{
		id: "puzzle",
		name: "Puzzle Island",
		blurb: "Puzzles, memory and mazes",
		accent: "#7b3ff2",
		land: "#c9a6ff",
		sky: "#d8c8ff",
		landmark: "puzzle",
		games: [
			{
				id: "jigsaw-3d",
				name: "3D Jigsaw Puzzle",
				blurb: "Slide the picture together",
				howTo: "Tap a tile next to the gap to slide it. Finish the picture.",
				controls: "tap"
			},
			{
				id: "shape-matcher",
				name: "Shape Matcher",
				blurb: "Sort by the rule",
				howTo: "Move left and right so the shape lands in the matching bin.",
				controls: "steer"
			},
			{
				id: "memory-quest",
				name: "Memory Quest",
				blurb: "Match the hidden pairs",
				howTo: "Tap two cards. Remember where the pairs are.",
				controls: "tap"
			},
			{
				id: "find-the-difference",
				name: "Find the Difference",
				blurb: "Spot what changed",
				howTo: "Tap the extras that appear only on the right picture.",
				controls: "tap"
			},
			{
				id: "magic-maze",
				name: "Magic Maze",
				blurb: "Find the star",
				howTo: "Move through the maze to the star. Use the stick or arrow keys.",
				controls: "stick"
			}
		]
	},
	{
		id: "arcade",
		name: "Arcade Universe",
		blurb: "Fast, bright arcade games",
		accent: "#ff4fa3",
		land: "#ff9ec8",
		sky: "#ffd0e8",
		landmark: "arcade",
		games: [
			{
				id: "star-collector",
				name: "Star Collector",
				blurb: "Grab stars, dodge chasers",
				howTo: "Move with the stick. Collect 10 stars and don't touch the chasers.",
				controls: "stick"
			},
			{
				id: "bubble-pop",
				name: "Bubble Pop 3D",
				blurb: "Pop groups of three",
				howTo: "Tap a group of 3 or more matching bubbles.",
				controls: "tap"
			},
			{
				id: "fruit-catcher",
				name: "Fruit Catcher",
				blurb: "Catch fruit, avoid bombs",
				howTo: "Slide the basket. Catch fruit and dodge the dark bombs.",
				controls: "tap"
			},
			{
				id: "super-bouncer",
				name: "Super Bouncer",
				blurb: "Clear the bricks",
				howTo: "Move the paddle and bounce the ball until the bricks are gone.",
				controls: "tap"
			},
			{
				id: "sky-runner",
				name: "Sky Runner",
				blurb: "Fly through the gates",
				howTo: "Tap to flap. Fly through the gaps and grab the rings.",
				controls: "flap"
			}
		]
	},
	{
		id: "racing",
		name: "Racing City",
		blurb: "Karts, trucks and races",
		accent: "#2f6bff",
		land: "#8eb0ff",
		sky: "#c5d8ff",
		landmark: "race",
		games: [
			{
				id: "go-kart",
				name: "Go-Kart Racing",
				blurb: "Change lanes and pass",
				howTo: "Steer between lanes. Don't bump the other karts. Reach the finish.",
				controls: "steer"
			},
			{
				id: "monster-truck",
				name: "Monster Truck Adventure",
				blurb: "Jump the rocks",
				howTo: "Tap to jump. Clear rocks and gaps on the track.",
				controls: "flap"
			},
			{
				id: "animal-racing",
				name: "Animal Racing",
				blurb: "Mash to the finish",
				howTo: "Tap Run to dash. Beat the other animals to the flag.",
				controls: "flap"
			},
			{
				id: "off-road",
				name: "Off-Road Challenge",
				blurb: "Hit every checkpoint",
				howTo: "Drive with the stick through the flags in order. Avoid boulders.",
				controls: "stick"
			},
			{
				id: "mini-formula",
				name: "Mini Formula Racing",
				blurb: "Start clean, then dodge",
				howTo: "Tap when the light turns green, then steer through the gates.",
				controls: "steer"
			}
		]
	},
	{
		id: "adventure",
		name: "Adventure Jungle",
		blurb: "Explore, dig and guard",
		accent: "#3ddc6e",
		land: "#46b85a",
		sky: "#b7f0c4",
		landmark: "jungle",
		games: [
			{
				id: "jungle-explorer",
				name: "Jungle Explorer",
				blurb: "Jump to the banner",
				howTo: "Move with the arrows and tap Jump. Reach the flag.",
				controls: "steer-action"
			},
			{
				id: "dinosaur-island",
				name: "Dinosaur Island",
				blurb: "Hide, then grab eggs",
				howTo: "Hold to hide when the foot shadow drops. Tap eggs when it is safe.",
				controls: "tap"
			},
			{
				id: "treasure-hunter",
				name: "Treasure Hunter",
				blurb: "Dig where it feels warm",
				howTo: "Tap squares to dig. Hints say if treasure is near. Don't waste all your digs.",
				controls: "tap"
			},
			{
				id: "lost-temple",
				name: "Lost Temple",
				blurb: "Copy the rune order",
				howTo: "Watch the runes light up, then tap them in the same order.",
				controls: "tap"
			},
			{
				id: "forest-guardian",
				name: "Forest Guardian",
				blurb: "Stop the pests",
				howTo: "Tap the pests before they reach the tree.",
				controls: "tap"
			}
		]
	},
	{
		id: "ocean",
		name: "Ocean Kingdom",
		blurb: "Swim, rescue and build",
		accent: "#1493d6",
		land: "#1aa0c8",
		sky: "#b5e9ff",
		landmark: "ocean",
		games: [
			{
				id: "underwater-quest",
				name: "Underwater Quest",
				blurb: "Pearls before air runs out",
				howTo: "Swim with the stick. Collect pearls and bubbles of air. Avoid jellyfish.",
				controls: "stick"
			},
			{
				id: "dolphin-rescue",
				name: "Dolphin Rescue",
				blurb: "Leap through rings",
				howTo: "Tap to swim up. Pass through the golden rings.",
				controls: "flap"
			},
			{
				id: "ocean-explorer",
				name: "Ocean Explorer",
				blurb: "Photograph the right fish",
				howTo: "Tap the fish that matches the picture in the corner.",
				controls: "tap"
			},
			{
				id: "fish-adventure",
				name: "Fish Adventure",
				blurb: "Eat, grow, survive",
				howTo: "Swim into smaller fish to grow. Don't touch the bigger ones.",
				controls: "stick"
			},
			{
				id: "coral-reef",
				name: "Coral Reef Builder",
				blurb: "Copy the reef pattern",
				howTo: "Remember the pattern, then tap cells to cycle colours until it matches.",
				controls: "tap"
			}
		]
	},
	{
		id: "space",
		name: "Space Galaxy",
		blurb: "Rockets, planets and stars",
		accent: "#5b6cff",
		land: "#6d78d8",
		sky: "#1b2348",
		landmark: "space",
		games: [
			{
				id: "space-explorer",
				name: "Space Explorer",
				blurb: "Reach the station",
				howTo: "Fly to the station. Moving uses fuel. Pick up fuel cans and dodge rocks.",
				controls: "stick"
			},
			{
				id: "rocket-builder",
				name: "Rocket Builder",
				blurb: "Stack it, then fly",
				howTo: "Tap parts from engine to nose, then steer through the rings.",
				controls: "steer"
			},
			{
				id: "planet-hopper",
				name: "Planet Hopper",
				blurb: "Jump world to world",
				howTo: "Tap while the marker is in the green to hop to the next planet.",
				controls: "tap"
			},
			{
				id: "asteroid-dodger",
				name: "Asteroid Dodger",
				blurb: "Last the meteor shower",
				howTo: "Dodge rocks until the timer ends. Grab stars if you can.",
				controls: "stick"
			},
			{
				id: "alien-rescue",
				name: "Alien Rescue",
				blurb: "Beam them aboard",
				howTo: "Line up over an alien and tap Beam. Don't let meteors hit the ship.",
				controls: "steer-action"
			}
		]
	},
	{
		id: "farm",
		name: "Happy Farm",
		blurb: "Grow, care and harvest",
		accent: "#e39b2b",
		land: "#d8b15a",
		sky: "#fff0c2",
		landmark: "farm",
		games: [
			{
				id: "farm-simulator",
				name: "Farm Simulator",
				blurb: "Plant, water, harvest",
				howTo: "Tap a plot to plant, water, then harvest when it is ready.",
				controls: "tap"
			},
			{
				id: "animal-care",
				name: "Animal Care",
				blurb: "Keep everyone happy",
				howTo: "Tap Feed or Play for the animal that needs it before a heart empties.",
				controls: "tap"
			},
			{
				id: "tractor-adventure",
				name: "Tractor Adventure",
				blurb: "Mow the whole field",
				howTo: "Drive over the tall grass. Don't waste time on the rocks.",
				controls: "stick"
			},
			{
				id: "harvest-festival",
				name: "Harvest Festival",
				blurb: "Sort the falling food",
				howTo: "Tap the crate that matches the falling fruit.",
				controls: "tap"
			},
			{
				id: "build-your-farm",
				name: "Build Your Farm",
				blurb: "Place what the note asks",
				howTo: "Choose a building, then tap the grid. Match the shopping list.",
				controls: "tap"
			}
		]
	},
	{
		id: "creative",
		name: "Creative Studio",
		blurb: "Colour, dress and design",
		accent: "#ff7ab6",
		land: "#ffc2dd",
		sky: "#ffe4f2",
		landmark: "studio",
		games: [
			{
				id: "coloring-studio",
				name: "3D Coloring Studio",
				blurb: "Colour by number",
				howTo: "Pick a colour, then tap every shape with that number.",
				controls: "tap"
			},
			{
				id: "build-a-robot",
				name: "Build a Robot",
				blurb: "Fit the right parts",
				howTo: "Tap a part, then tap the matching slot on the robot.",
				controls: "tap"
			},
			{
				id: "dress-up",
				name: "Dress Up Friends",
				blurb: "Match today's theme",
				howTo: "Dress Faliz for the theme, then tap Done.",
				controls: "tap"
			},
			{
				id: "cake-designer",
				name: "Cake Designer",
				blurb: "Follow the order",
				howTo: "Tap layers and toppings in the order on the ticket.",
				controls: "tap"
			},
			{
				id: "toy-builder",
				name: "Toy Builder",
				blurb: "Grab the next block",
				howTo: "Tap the block colour that the blueprint asks for next.",
				controls: "tap"
			}
		]
	},
	{
		id: "sports",
		name: "Sports Arena",
		blurb: "Goals, pins and putts",
		accent: "#ff8a3d",
		land: "#ffc089",
		sky: "#ffe1c7",
		landmark: "sport",
		games: [
			{
				id: "football",
				name: "Football Challenge",
				blurb: "Shoot past the keeper",
				howTo: "Tap the open side of the goal before the keeper slides across.",
				controls: "tap"
			},
			{
				id: "basketball",
				name: "Basketball Stars",
				blurb: "Release in the green",
				howTo: "Tap when the marker sits in the green zone.",
				controls: "tap"
			},
			{
				id: "bowling",
				name: "Bowling Championship",
				blurb: "Aim, then roll",
				howTo: "Steer your aim, then tap Roll when the power bar is in the green.",
				controls: "steer-action"
			},
			{
				id: "tennis",
				name: "Tennis Fun",
				blurb: "Return the ball",
				howTo: "Slide your racket and be the first to 5 points.",
				controls: "tap"
			},
			{
				id: "mini-golf",
				name: "Mini Golf Adventure",
				blurb: "Sink the putt",
				howTo: "Steer the arrow and tap Hit. Bounce off the walls into the hole.",
				controls: "steer-action"
			}
		]
	},
	{
		id: "magic",
		name: "Magic Kingdom",
		blurb: "Spells, dragons and potions",
		accent: "#b44dff",
		land: "#d9a6ff",
		sky: "#f0d9ff",
		landmark: "magic",
		games: [
			{
				id: "magic-forest",
				name: "Magic Forest",
				blurb: "Follow the fireflies",
				howTo: "Watch the fireflies, then tap the flowers in that order.",
				controls: "tap"
			},
			{
				id: "wizard-academy",
				name: "Wizard Academy",
				blurb: "Cast the shown rune",
				howTo: "Tap the rune that matches the big one before it fades.",
				controls: "tap"
			},
			{
				id: "dragon-adventure",
				name: "Dragon Adventure",
				blurb: "Fly and breathe fire",
				howTo: "Hold to fly up. Tap Fire when a target is in front. Avoid rocks.",
				controls: "fly-shoot"
			},
			{
				id: "fairy-garden",
				name: "Fairy Garden",
				blurb: "Pollinate before they wilt",
				howTo: "Tap each glowing flower before its timer runs out.",
				controls: "tap"
			},
			{
				id: "potion-lab",
				name: "Magic Potion Lab",
				blurb: "Mix, then stir",
				howTo: "Tap ingredients in recipe order, then tap Stir.",
				controls: "tap"
			}
		]
	},
	{
		id: "builder",
		name: "Builder City",
		blurb: "Cities, bridges and trains",
		accent: "#3ec6c6",
		land: "#8fd0d0",
		sky: "#d5f6f6",
		landmark: "city",
		games: [
			{
				id: "city-builder",
				name: "City Builder",
				blurb: "Make a happy town",
				howTo: "Place a house, a park and a shop. Tap a building again to sell it.",
				controls: "tap"
			},
			{
				id: "bridge-builder",
				name: "Bridge Builder",
				blurb: "Span every gap",
				howTo: "Tap a gap, then tap a plank that fits it.",
				controls: "tap"
			},
			{
				id: "construction-crew",
				name: "Construction Crew",
				blurb: "Stack a steady tower",
				howTo: "Tap to drop a block when it lines up with the one below.",
				controls: "tap"
			},
			{
				id: "train-adventure",
				name: "Train Adventure",
				blurb: "Send trains to the right stop",
				howTo: "Tap the switch so each train takes the matching colour track.",
				controls: "tap"
			},
			{
				id: "airport-manager",
				name: "Airport Manager",
				blurb: "Land planes in the ring",
				howTo: "Tap a plane while it sits inside the glowing ring.",
				controls: "tap"
			}
		]
	}
];
function allGames() {
	const list = [];
	let index = 1;
	for (const world of WORLDS) for (const game of world.games) {
		list.push({
			...game,
			worldId: world.id,
			worldName: world.name,
			accent: world.accent,
			index
		});
		index += 1;
	}
	return list;
}
function findGame(id) {
	return allGames().find((g) => g.id === id);
}
function findWorld(id) {
	return WORLDS.find((w) => w.id === id);
}
function needsChrome(mode) {
	return mode !== "tap";
}
var ctx = null;
var musicOn = true;
var sfxOn = true;
var timer$1 = null;
var step = 0;
var MELODY = [
	523,
	587,
	659,
	784,
	659,
	587,
	523,
	392,
	440,
	523,
	659,
	587
];
function context() {
	if (!ctx) ctx = new AudioContext();
	return ctx;
}
function tone(freq, dur, type, gain) {
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
	amp.gain.exponentialRampToValueAtTime(1e-4, now + dur);
	osc.start(now);
	osc.stop(now + dur + .02);
}
function loop() {
	if (!musicOn || !ctx) {
		timer$1 = null;
		return;
	}
	if (ctx.state === "running") {
		tone(MELODY[step % MELODY.length], .2, "sine", .035);
		step += 1;
	}
	timer$1 = setTimeout(loop, 320);
}
function unlockAudio() {
	context().resume();
	if (musicOn && timer$1 == null) loop();
}
function setMusic(on) {
	musicOn = on;
	if (!on && timer$1 != null) {
		clearTimeout(timer$1);
		timer$1 = null;
	} else if (on && ctx && timer$1 == null) loop();
}
function setSfx(on) {
	sfxOn = on;
}
function playFx(kind) {
	if (!sfxOn || !ctx || ctx.state !== "running") return;
	if (kind === "coin") tone(880, .07, "square", .04);
	else if (kind === "ok") tone(660, .09, "triangle", .05);
	else if (kind === "bad") tone(196, .14, "sawtooth", .03);
	else if (kind === "jump") tone(440, .06, "square", .035);
	else if (kind === "win") {
		tone(523, .12, "triangle", .05);
		setTimeout(() => tone(659, .12, "triangle", .05), 110);
		setTimeout(() => tone(784, .18, "triangle", .05), 220);
	} else if (kind === "lose") tone(146, .28, "triangle", .04);
	else tone(520, .05, "square", .03);
}
var DB = "faliz-kids-world";
var STORE = "kv";
var KEY = "save";
var LS = "faliz-kids-world-save";
function openDb() {
	return new Promise((resolve, reject) => {
		const req = indexedDB.open(DB, 1);
		req.onupgradeneeded = () => {
			const db = req.result;
			if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE);
		};
		req.onsuccess = () => resolve(req.result);
		req.onerror = () => reject(req.error);
	});
}
function fromLocal() {
	try {
		const raw = localStorage.getItem(LS);
		return raw ? JSON.parse(raw) : null;
	} catch {
		return null;
	}
}
async function readRaw() {
	const local = fromLocal();
	try {
		const db = await Promise.race([openDb(), new Promise((resolve) => setTimeout(() => resolve(null), 700))]);
		if (!db) return local;
		const value = await new Promise((resolve, reject) => {
			const req = db.transaction(STORE, "readonly").objectStore(STORE).get(KEY);
			req.onsuccess = () => resolve(req.result ?? null);
			req.onerror = () => reject(req.error);
		});
		if (value != null) return value;
	} catch {}
	return local;
}
async function writeRaw(data) {
	try {
		localStorage.setItem(LS, JSON.stringify(data));
	} catch {}
	try {
		const db = await openDb();
		await new Promise((resolve, reject) => {
			const tx = db.transaction(STORE, "readwrite");
			tx.objectStore(STORE).put(data, KEY);
			tx.oncomplete = () => resolve();
			tx.onerror = () => reject(tx.error);
		});
	} catch {}
}
var HATS = [
	{
		id: "none",
		name: "No hat",
		cost: 0
	},
	{
		id: "cap",
		name: "Sunny cap",
		cost: 20
	},
	{
		id: "bow",
		name: "Pink bow",
		cost: 30
	},
	{
		id: "wizard",
		name: "Wizard hat",
		cost: 50
	},
	{
		id: "crown",
		name: "Star crown",
		cost: 80
	}
];
var PETS = [
	{
		id: "pup",
		name: "Faliz",
		stars: 0
	},
	{
		id: "cat",
		name: "Miso",
		stars: 5
	},
	{
		id: "rabbit",
		name: "Nib",
		stars: 8
	},
	{
		id: "bear",
		name: "Bramble",
		stars: 12
	},
	{
		id: "dino",
		name: "Dottie",
		stars: 18
	}
];
var DECOR = [
	{
		id: "rug",
		name: "Rainbow rug",
		cost: 20
	},
	{
		id: "plant",
		name: "Plant",
		cost: 15
	},
	{
		id: "books",
		name: "Book pile",
		cost: 20
	},
	{
		id: "lamp",
		name: "Star lamp",
		cost: 25
	},
	{
		id: "shelf",
		name: "Trophy shelf",
		cost: 40
	}
];
var ACHIEVEMENTS = [
	{
		id: "first-win",
		name: "First cheer",
		detail: "Win any game"
	},
	{
		id: "ten-wins",
		name: "Ten trophies",
		detail: "Win 10 games"
	},
	{
		id: "star-25",
		name: "Star pocket",
		detail: "Collect 25 stars"
	},
	{
		id: "coin-200",
		name: "Coin chest",
		detail: "Hold 200 coins"
	},
	{
		id: "six-worlds",
		name: "Island hopper",
		detail: "Win a game in 6 worlds"
	},
	{
		id: "all-worlds",
		name: "World tour",
		detail: "Win a game in every world"
	},
	{
		id: "pets-3",
		name: "Pet parade",
		detail: "Unlock 3 pets"
	},
	{
		id: "daily",
		name: "Daily star",
		detail: "Finish today's missions"
	},
	{
		id: "play-20",
		name: "Regular explorer",
		detail: "Play 20 times"
	},
	{
		id: "sparkle",
		name: "Sparkle clear",
		detail: "Earn 3 stars on a game"
	}
];
function dateKey(d = /* @__PURE__ */ new Date()) {
	const m = `${d.getMonth() + 1}`.padStart(2, "0");
	const day = `${d.getDate()}`.padStart(2, "0");
	return `${d.getFullYear()}-${m}-${day}`;
}
function levelOf(xp) {
	return 1 + Math.floor(xp / 100);
}
function uid() {
	return Math.random().toString(36).slice(2, 10);
}
function missionsFor(date) {
	const bump = date.charCodeAt(date.length - 1) % 2;
	return [
		{
			id: "play",
			label: "Play 3 games",
			target: 3,
			progress: 0
		},
		{
			id: "win",
			label: "Win 2 games",
			target: 2,
			progress: 0
		},
		{
			id: "coins",
			label: `Earn ${40 + bump * 10} coins`,
			target: 40 + bump * 10,
			progress: 0
		}
	];
}
function freshProfile(name, animal = "dog") {
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
		difficulty: "beginner"
	};
}
function sumWins(p) {
	return Object.values(p.stats).reduce((n, s) => n + s.wins, 0);
}
function sumPlays(p) {
	return Object.values(p.stats).reduce((n, s) => n + s.plays, 0);
}
function worldsWon(p) {
	return WORLDS.filter((w) => w.games.some((g) => (p.stats[g.id]?.wins ?? 0) > 0)).length;
}
function earned(p) {
	const have = new Set(p.achievements);
	const add = [];
	const ok = {
		"first-win": sumWins(p) > 0,
		"ten-wins": sumWins(p) >= 10,
		"star-25": p.stars >= 25,
		"coin-200": p.coins >= 200,
		"six-worlds": worldsWon(p) >= 6,
		"all-worlds": worldsWon(p) >= 12,
		"pets-3": p.ownedPets.length >= 3,
		daily: p.missions.every((m) => m.progress >= m.target),
		"play-20": sumPlays(p) >= 20,
		sparkle: Object.values(p.stats).some((s) => s.bestStars >= 3)
	};
	for (const a of ACHIEVEMENTS) if (!have.has(a.id) && ok[a.id]) add.push(a.id);
	return add;
}
function rollDaily(p) {
	const today = dateKey();
	if (p.dailyDate === today) return p;
	return {
		...p,
		dailyDate: today,
		missions: missionsFor(today)
	};
}
var defaultSettings = {
	music: true,
	sfx: true,
	quality: "medium",
	pin: null
};
function mapActive(profiles, activeId, fn) {
	return profiles.map((p) => p.id === activeId ? fn(rollDaily(p)) : p);
}
var useFaliz = create((set, get) => ({
	ready: false,
	profiles: [],
	activeId: "",
	settings: defaultSettings,
	hydrate: (data) => {
		if (!data || !Array.isArray(data.profiles)) {
			set({
				ready: true,
				profiles: [],
				activeId: "",
				settings: defaultSettings
			});
			return;
		}
		const profiles = data.profiles.map((p) => rollDaily({
			...freshProfile("Faliz"),
			...p
		}));
		set({
			ready: true,
			profiles,
			activeId: profiles.some((p) => p.id === data.activeId) ? data.activeId : profiles[0]?.id ?? "",
			settings: {
				...defaultSettings,
				...data.settings
			}
		});
	},
	setActive: (id) => set({ activeId: id }),
	createProfile: (name, animal, difficulty) => {
		const p = freshProfile(name, animal);
		p.difficulty = difficulty;
		set((s) => ({
			profiles: [...s.profiles, p],
			activeId: p.id
		}));
	},
	rename: (name) => set((s) => ({ profiles: mapActive(s.profiles, s.activeId, (p) => ({
		...p,
		name: name.slice(0, 12) || p.name
	})) })),
	setDifficulty: (d) => set((s) => ({ profiles: mapActive(s.profiles, s.activeId, (p) => ({
		...p,
		difficulty: d
	})) })),
	setLimit: (min) => set((s) => ({ profiles: mapActive(s.profiles, s.activeId, (p) => ({
		...p,
		playLimitMin: min
	})) })),
	removeProfile: (id) => set((s) => {
		const profiles = s.profiles.filter((p) => p.id !== id);
		return {
			profiles,
			activeId: s.activeId === id ? profiles[0]?.id ?? "" : s.activeId
		};
	}),
	patchSettings: (p) => set((s) => ({ settings: {
		...s.settings,
		...p
	} })),
	addPlaytime: (seconds) => set((s) => ({ profiles: mapActive(s.profiles, s.activeId, (p) => {
		const today = dateKey();
		const playSeconds = p.playDate === today ? p.playSeconds + seconds : seconds;
		return {
			...p,
			playDate: today,
			playSeconds
		};
	}) })),
	overLimit: () => {
		const p = get().profiles.find((x) => x.id === get().activeId);
		if (!p || !p.playLimitMin) return false;
		if (p.playDate !== dateKey()) return false;
		return p.playSeconds >= p.playLimitMin * 60;
	},
	recordResult: (gameId, score, win, stars) => {
		let result = {
			coins: 0,
			stars: 0,
			achievements: [],
			levelUp: false
		};
		set((s) => ({ profiles: mapActive(s.profiles, s.activeId, (p) => {
			const coins = win ? Math.max(5, Math.round(score / 8)) : Math.max(0, Math.round(score / 16));
			const before = levelOf(p.xp);
			const prev = p.stats[gameId] ?? {
				plays: 0,
				wins: 0,
				best: 0,
				bestStars: 0
			};
			const stat = {
				plays: prev.plays + 1,
				wins: prev.wins + (win ? 1 : 0),
				best: Math.max(prev.best, score),
				bestStars: Math.max(prev.bestStars, stars)
			};
			let missions = p.missions.map((m) => ({ ...m }));
			const bump = (id, n) => {
				missions = missions.map((m) => m.id === id ? {
					...m,
					progress: Math.min(m.target, m.progress + n)
				} : m);
			};
			bump("play", 1);
			if (win) bump("win", 1);
			bump("coins", coins);
			const next = {
				...p,
				coins: p.coins + coins,
				stars: p.stars + stars,
				xp: p.xp + coins,
				stats: {
					...p.stats,
					[gameId]: stat
				},
				missions
			};
			const ach = earned(next);
			if (ach.length) next.coins += ach.length * 15;
			next.achievements = [...next.achievements, ...ach];
			result = {
				coins,
				stars,
				achievements: ach,
				levelUp: levelOf(next.xp) > before
			};
			return next;
		}) }));
		return result;
	},
	collectLobbyStar: (id) => {
		const p = get().profiles.find((x) => x.id === get().activeId);
		if (!p || p.foundStars.includes(id)) return false;
		set((s) => ({ profiles: mapActive(s.profiles, s.activeId, (profile) => ({
			...profile,
			foundStars: [...profile.foundStars, id],
			coins: profile.coins + 5
		})) }));
		return true;
	},
	buyHat: (id) => {
		const item = HATS.find((h) => h.id === id);
		const p = get().profiles.find((x) => x.id === get().activeId);
		if (!item || !p || p.ownedHats.includes(id) || p.coins < item.cost) return false;
		set((s) => ({ profiles: mapActive(s.profiles, s.activeId, (profile) => ({
			...profile,
			coins: profile.coins - item.cost,
			ownedHats: [...profile.ownedHats, id],
			hat: id
		})) }));
		return true;
	},
	wearHat: (id) => set((s) => ({ profiles: mapActive(s.profiles, s.activeId, (p) => p.ownedHats.includes(id) ? {
		...p,
		hat: id
	} : p) })),
	buyPet: (id) => {
		const item = PETS.find((h) => h.id === id);
		const p = get().profiles.find((x) => x.id === get().activeId);
		if (!item || !p || p.ownedPets.includes(id) || p.stars < item.stars) return false;
		set((s) => ({ profiles: mapActive(s.profiles, s.activeId, (profile) => ({
			...profile,
			stars: profile.stars - item.stars,
			ownedPets: [...profile.ownedPets, id],
			pet: id
		})) }));
		return true;
	},
	equipPet: (id) => set((s) => ({ profiles: mapActive(s.profiles, s.activeId, (p) => p.ownedPets.includes(id) ? {
		...p,
		pet: id
	} : p) })),
	setScarf: (color) => set((s) => ({ profiles: mapActive(s.profiles, s.activeId, (p) => ({
		...p,
		scarf: color
	})) })),
	buyDecor: (id) => {
		const item = DECOR.find((d) => d.id === id);
		const p = get().profiles.find((x) => x.id === get().activeId);
		if (!item || !p || p.ownedDecor.includes(id) || p.coins < item.cost) return false;
		set((s) => ({ profiles: mapActive(s.profiles, s.activeId, (p) => ({
			...p,
			coins: p.coins - item.cost,
			ownedDecor: [...p.ownedDecor, id],
			shownDecor: [...p.shownDecor, id]
		})) }));
		return true;
	},
	toggleDecor: (id) => set((s) => ({ profiles: mapActive(s.profiles, s.activeId, (p) => {
		if (!p.ownedDecor.includes(id)) return p;
		const on = p.shownDecor.includes(id);
		return {
			...p,
			shownDecor: on ? p.shownDecor.filter((d) => d !== id) : [...p.shownDecor, id]
		};
	}) })),
	replaceAll: (data) => {
		const profiles = data.profiles.map((p) => rollDaily({
			...freshProfile("Faliz"),
			...p
		}));
		set({
			profiles,
			activeId: profiles.some((p) => p.id === data.activeId) ? data.activeId : profiles[0]?.id ?? "",
			settings: {
				...defaultSettings,
				...data.settings
			}
		});
	}
}));
function snapshot() {
	const s = useFaliz.getState();
	return {
		version: 1,
		profiles: s.profiles,
		activeId: s.activeId,
		settings: s.settings
	};
}
function starsFor(score, win) {
	if (!win) return 0;
	if (score >= 120) return 3;
	if (score >= 70) return 2;
	return 1;
}
var timer = null;
var hooked = false;
function initSave() {
	if (hooked || typeof window === "undefined") return;
	hooked = true;
	useFaliz.subscribe((s) => {
		if (!s.ready) return;
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => {
			writeRaw(snapshot());
		}, 200);
	});
}
async function bootSave() {
	const raw = await readRaw();
	const data = isPersisted(raw) ? raw : null;
	useFaliz.getState().hydrate(data);
	initSave();
}
function isPersisted(raw) {
	if (!raw || typeof raw !== "object") return false;
	const v = raw;
	return v.version === 1 && Array.isArray(v.profiles);
}
function gameStat(p, id) {
	return p?.stats[id];
}
function worldProgress(p, worldId) {
	const world = WORLDS.find((w) => w.id === worldId);
	if (!world || !p) return {
		wins: 0,
		total: 5
	};
	return {
		wins: world.games.filter((g) => (p.stats[g.id]?.wins ?? 0) > 0).length,
		total: world.games.length
	};
}
function Avatar({ animal, hat = "none", scarf = "#2ed3c6", className = "h-16 w-16" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 80 80",
		className,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "44",
				r: "30",
				fill: "#ffe3c2"
			}),
			animal === "dog" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dog, { scarf }),
			animal === "cat" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cat, { scarf }),
			animal === "rabbit" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rabbit, { scarf }),
			animal === "bear" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bear, { scarf }),
			animal === "lion" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lion, { scarf }),
			hat === "cap" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M18 30h36l-6 8H24z",
				fill: "#2f6bff"
			}),
			hat === "bow" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M28 18l12 8 12-8-12 4z",
				fill: "#ff4fa3"
			}),
			hat === "crown" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M22 28l6-12 8 8 8-8 6 12z",
				fill: "#ffb703"
			}),
			hat === "wizard" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M40 4l16 28H24z",
				fill: "#7b3ff2"
			})
		]
	});
}
function Face({ fill, scarf }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "40",
			cy: "42",
			r: "22",
			fill
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
			cx: "40",
			cy: "50",
			rx: "10",
			ry: "7",
			fill: "#ffe3c2"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "32",
			cy: "40",
			r: "3.2",
			fill: "#5c3317"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "48",
			cy: "40",
			r: "3.2",
			fill: "#5c3317"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "33",
			cy: "39",
			r: "1",
			fill: "#fff"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "49",
			cy: "39",
			r: "1",
			fill: "#fff"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
			cx: "40",
			cy: "47",
			rx: "2.4",
			ry: "1.8",
			fill: "#2a211c"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M34 58h12",
			stroke: scarf,
			strokeWidth: "4",
			strokeLinecap: "round"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
			points: "40,60 43,66 37,66",
			fill: "#ffb703"
		})
	] });
}
function Dog({ scarf }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
			cx: "18",
			cy: "38",
			rx: "8",
			ry: "12",
			fill: "#c86a18"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
			cx: "62",
			cy: "38",
			rx: "8",
			ry: "12",
			fill: "#c86a18"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Face, {
			fill: "#f08a2c",
			scarf
		})
	] });
}
function Cat({ scarf }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
			points: "20,34 28,14 34,34",
			fill: "#f0a35a"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
			points: "60,34 52,14 46,34",
			fill: "#f0a35a"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Face, {
			fill: "#f0a35a",
			scarf
		})
	] });
}
function Rabbit({ scarf }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
			cx: "28",
			cy: "18",
			rx: "6",
			ry: "16",
			fill: "#f4f4f4"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
			cx: "52",
			cy: "18",
			rx: "6",
			ry: "16",
			fill: "#f4f4f4"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Face, {
			fill: "#f7f7f7",
			scarf
		})
	] });
}
function Bear({ scarf }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "22",
			cy: "28",
			r: "8",
			fill: "#8a5a32"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "58",
			cy: "28",
			r: "8",
			fill: "#8a5a32"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Face, {
			fill: "#c4844a",
			scarf
		})
	] });
}
function Lion({ scarf }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
		cx: "40",
		cy: "42",
		r: "28",
		fill: "#e09600"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Face, {
		fill: "#f0b429",
		scarf
	})] });
}
var ANIMALS = [
	{
		id: "dog",
		name: "Pup"
	},
	{
		id: "cat",
		name: "Cat"
	},
	{
		id: "rabbit",
		name: "Bun"
	},
	{
		id: "bear",
		name: "Bear"
	},
	{
		id: "lion",
		name: "Lion"
	}
];
var SCARVES = [
	"#2ed3c6",
	"#2f6bff",
	"#3ddc6e",
	"#ff4fa3",
	"#7b3ff2",
	"#ffb703"
];
function emptyInput(px = 0, py = 0) {
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
		flapJust: false
	};
}
var Game = class {
	w = 400;
	h = 700;
	chromeBottom = 16;
	diff = "beginner";
	mode = "play";
	points = 0;
	lives = 3;
	info = "";
	progress = 0;
	rate = 1;
	time = 0;
	shake = 0;
	iframe = 0;
	fx = [];
	particles = [];
	floaters = [];
	layout(w, h) {
		this.w = w;
		this.h = h;
	}
	setChrome(bottom) {
		this.chromeBottom = bottom;
	}
	begin(diff, lives = 3) {
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
		this.rate = diff === "beginner" ? .78 : diff === "advanced" ? 1.25 : 1;
	}
	addScore(n, x, y) {
		if (this.mode !== "play") return;
		this.points += n;
		this.fx.push("coin");
		if (x != null && y != null) {
			this.floaters.push({
				x,
				y,
				text: `+${n}`,
				life: .8
			});
			this.burst(x, y, "#ffb703");
		}
	}
	hurt() {
		if (this.mode !== "play" || this.iframe > 0) return;
		this.lives -= 1;
		this.shake = 1;
		this.iframe = .9;
		if (this.lives <= 0) {
			this.mode = "lose";
			this.fx.push("lose");
		} else this.fx.push("bad");
	}
	win() {
		if (this.mode !== "play") return;
		this.mode = "win";
		this.progress = 1;
		this.fx.push("win");
	}
	burst(x, y, color) {
		for (let i = 0; i < 8; i++) {
			const a = i / 8 * Math.PI * 2;
			this.particles.push({
				x,
				y,
				vx: Math.cos(a) * 90,
				vy: Math.sin(a) * 90,
				life: .45,
				r: 4,
				color
			});
		}
	}
	tapJump() {
		this.fx.push("jump");
	}
	step(dt, input) {
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
	phase() {
		return this.mode;
	}
	goalText() {
		return this.info;
	}
	hud() {
		return {
			lives: this.lives,
			progress: this.progress
		};
	}
	pullFx() {
		const f = this.fx;
		this.fx = [];
		return f;
	}
	render(ctx) {
		ctx.save();
		if (this.shake > 0) {
			const m = this.shake * 8;
			ctx.translate((Math.random() - .5) * 2 * m, (Math.random() - .5) * 2 * m);
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
			ctx.globalAlpha = .18 + Math.sin(this.time * 30) * .08;
			ctx.fillStyle = "#ffffff";
			ctx.fillRect(0, 0, this.w, this.h);
		}
		ctx.restore();
	}
};
var PAL = {
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
	line: "#ead9b8"
};
function clamp(v, a, b) {
	return Math.max(a, Math.min(b, v));
}
function hitRect(x, y, r) {
	return x >= r.x && y >= r.y && x <= r.x + r.w && y <= r.y + r.h;
}
function roundRect(ctx, x, y, w, h, r) {
	const rr = Math.max(0, Math.min(r, w / 2, h / 2));
	ctx.beginPath();
	ctx.moveTo(x + rr, y);
	ctx.arcTo(x + w, y, x + w, y + h, rr);
	ctx.arcTo(x + w, y + h, x, y + h, rr);
	ctx.arcTo(x, y + h, x, y, rr);
	ctx.arcTo(x, y, x + w, y, rr);
	ctx.closePath();
}
function fillRound(ctx, x, y, w, h, r, color) {
	roundRect(ctx, x, y, w, h, r);
	ctx.fillStyle = color;
	ctx.fill();
}
function sky(ctx, w, h, top, bottom) {
	const g = ctx.createLinearGradient(0, 0, 0, h);
	g.addColorStop(0, top);
	g.addColorStop(1, bottom);
	ctx.fillStyle = g;
	ctx.fillRect(0, 0, w, h);
}
function label(ctx, text, x, y, size, color, align = "center") {
	ctx.fillStyle = color;
	ctx.font = `700 ${size}px Fredoka, Nunito, sans-serif`;
	ctx.textAlign = align;
	ctx.textBaseline = "middle";
	ctx.fillText(text, x, y);
}
function heroText(ctx, text, x, y, size, fill) {
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
function starPath(ctx, x, y, r, spikes = 5) {
	ctx.beginPath();
	for (let i = 0; i < spikes * 2; i++) {
		const rad = i * Math.PI / spikes - Math.PI / 2;
		const len = i % 2 === 0 ? r : r * .45;
		const px = x + Math.cos(rad) * len;
		const py = y + Math.sin(rad) * len;
		if (i === 0) ctx.moveTo(px, py);
		else ctx.lineTo(px, py);
	}
	ctx.closePath();
}
function drawStar(ctx, x, y, r, color = PAL.gold) {
	starPath(ctx, x, y, r);
	ctx.fillStyle = color;
	ctx.fill();
	ctx.lineWidth = 2;
	ctx.strokeStyle = PAL.goldDeep;
	ctx.stroke();
}
function drawCoin(ctx, x, y, r) {
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
/** The Faliz pup: orange, cream muzzle and belly, floppy ears, turquoise collar, gold star. */
function drawPup(ctx, x, y, s, mood = "happy") {
	ctx.save();
	ctx.translate(x, y);
	const ear = (side) => {
		ctx.save();
		ctx.rotate(side * .5);
		ctx.beginPath();
		ctx.ellipse(side * s * .42, -s * .55, s * .28, s * .38, side * .4, 0, Math.PI * 2);
		ctx.fillStyle = PAL.orangeDeep;
		ctx.fill();
		ctx.beginPath();
		ctx.ellipse(side * s * .42, -s * .5, s * .14, s * .22, side * .4, 0, Math.PI * 2);
		ctx.fillStyle = PAL.belly;
		ctx.fill();
		ctx.restore();
	};
	ear(-1);
	ear(1);
	ctx.beginPath();
	ctx.ellipse(0, s * .28, s * .62, s * .48, 0, 0, Math.PI * 2);
	ctx.fillStyle = PAL.orange;
	ctx.fill();
	ctx.beginPath();
	ctx.ellipse(0, s * .38, s * .34, s * .26, 0, 0, Math.PI * 2);
	ctx.fillStyle = PAL.belly;
	ctx.fill();
	ctx.beginPath();
	ctx.arc(0, -s * .25, s * .48, 0, Math.PI * 2);
	ctx.fillStyle = PAL.orange;
	ctx.fill();
	ctx.beginPath();
	ctx.ellipse(0, -s * .05, s * .28, s * .22, 0, 0, Math.PI * 2);
	ctx.fillStyle = PAL.belly;
	ctx.fill();
	const eye = (ex) => {
		ctx.beginPath();
		ctx.ellipse(ex, -s * .34, s * .12, s * .14, 0, 0, Math.PI * 2);
		ctx.fillStyle = PAL.foam;
		ctx.fill();
		ctx.beginPath();
		ctx.arc(ex + (mood === "wow" ? 0 : s * .02), -s * .34, s * .07, 0, Math.PI * 2);
		ctx.fillStyle = "#5c3317";
		ctx.fill();
		ctx.beginPath();
		ctx.arc(ex + s * .03, -s * .38, s * .025, 0, Math.PI * 2);
		ctx.fillStyle = PAL.foam;
		ctx.fill();
	};
	eye(-s * .16);
	eye(s * .16);
	ctx.beginPath();
	ctx.ellipse(0, -s * .08, s * .07, s * .05, 0, 0, Math.PI * 2);
	ctx.fillStyle = PAL.nose;
	ctx.fill();
	if (mood !== "focus") {
		ctx.beginPath();
		ctx.ellipse(0, s * .02, s * .08, s * .05, 0, 0, Math.PI);
		ctx.fillStyle = PAL.tongue;
		ctx.fill();
	}
	ctx.beginPath();
	ctx.ellipse(0, s * .18, s * .38, s * .1, 0, 0, Math.PI * 2);
	ctx.strokeStyle = PAL.collar;
	ctx.lineWidth = Math.max(3, s * .1);
	ctx.stroke();
	drawStar(ctx, 0, s * .32, s * .14);
	ctx.restore();
}
function choiceGrid(w, h, chrome, n) {
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
		return {
			x: originX + c * (bw + gap),
			y: top + r * (bh + gap),
			w: bw,
			h: bh
		};
	});
}
function paintButton(ctx, r, text, fill, hot = false) {
	fillRound(ctx, r.x, r.y, r.w, r.h, 16, hot ? PAL.gold : fill);
	ctx.lineWidth = 3;
	ctx.strokeStyle = hot ? PAL.goldDeep : "rgba(28,43,74,0.18)";
	ctx.stroke();
	label(ctx, text, r.x + r.w / 2, r.y + r.h / 2, Math.min(22, r.h * .4), PAL.ink);
}
function meterBar(ctx, x, y, w, h, t, good0, good1) {
	fillRound(ctx, x, y, w, h, 8, PAL.ink);
	fillRound(ctx, x + good0 * w, y, (good1 - good0) * w, h, 4, PAL.leaf);
	ctx.fillStyle = PAL.foam;
	const nx = x + clamp(t, 0, 1) * w;
	ctx.fillRect(nx - 3, y - 4, 6, h + 8);
}
var WORDS = [
	{
		word: "CAT",
		hint: "A pet that meows"
	},
	{
		word: "DOG",
		hint: "Faliz is one of these"
	},
	{
		word: "SUN",
		hint: "It shines in the sky"
	},
	{
		word: "STAR",
		hint: "A bright night sparkle"
	},
	{
		word: "FISH",
		hint: "It swims in the sea"
	},
	{
		word: "TREE",
		hint: "Leaves grow on it"
	},
	{
		word: "CAKE",
		hint: "A sweet birthday treat"
	},
	{
		word: "FROG",
		hint: "It hops by the pond"
	},
	{
		word: "BIRD",
		hint: "It has wings"
	},
	{
		word: "MOON",
		hint: "It glows at night"
	},
	{
		word: "LION",
		hint: "A big cat with a mane"
	},
	{
		word: "BOAT",
		hint: "It floats on water"
	},
	{
		word: "KITE",
		hint: "It flies on a string"
	},
	{
		word: "BOOK",
		hint: "Pages full of stories"
	},
	{
		word: "RAIN",
		hint: "Water from clouds"
	},
	{
		word: "CASTLE",
		hint: "A home for kings"
	},
	{
		word: "PLANET",
		hint: "Earth is one"
	},
	{
		word: "ROCKET",
		hint: "It flies to space"
	},
	{
		word: "DRAGON",
		hint: "It breathes fire"
	},
	{
		word: "GARDEN",
		hint: "Where flowers grow"
	}
];
function pickWords(diff, count) {
	const copy = [...diff === "beginner" ? WORDS.filter((w) => w.word.length <= 4) : diff === "advanced" ? WORDS.filter((w) => w.word.length >= 4) : WORDS.filter((w) => w.word.length <= 5)];
	const out = [];
	while (out.length < count && copy.length) {
		const i = Math.floor(Math.random() * copy.length);
		out.push(copy.splice(i, 1)[0]);
	}
	return out;
}
var ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var Alphabet = class extends Game {
	letters = [];
	next = 0;
	goal = 8;
	spawn = .2;
	reset(diff) {
		this.begin(diff, 3);
		this.goal = diff === "beginner" ? 6 : diff === "advanced" ? 12 : 8;
		this.next = 0;
		this.letters = [];
		this.spawn = .3;
		this.info = `Tap the letters in order. Next is ${ALPHA[0]}.`;
	}
	update(dt, input) {
		this.spawn -= dt * (1.15 / this.rate);
		if (this.spawn <= 0) {
			this.spawn = .85;
			const ch = Math.random() < .5 ? ALPHA[this.next] : ALPHA[Math.floor(Math.random() * 26)];
			this.letters.push({
				ch,
				x: 36 + Math.random() * (this.w - 72),
				y: -20,
				vy: 70 + 80 * this.rate
			});
		}
		const missed = [];
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
		if (missed.includes(ALPHA[this.next])) this.hurt();
		this.progress = this.next / this.goal;
		this.info = `Tap the letters in order. Next is ${ALPHA[Math.min(this.next, 25)]}.`;
		if (this.next >= this.goal && this.mode === "play") {
			this.addScore(40, this.w / 2, 80);
			this.win();
		}
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#9ad8ff", "#fff6e4");
		drawPup(ctx, 64, this.h * .22, 36, "happy");
		heroText(ctx, ALPHA[Math.min(this.next, 25)] ?? "A", this.w / 2, 78, 54, PAL.gold);
		for (const L of this.letters) {
			fillRound(ctx, L.x - 24, L.y - 24, 48, 48, 14, L.ch === ALPHA[this.next] ? PAL.gold : PAL.foam);
			label(ctx, L.ch, L.x, L.y, 22, PAL.ink);
		}
	}
};
var NumberQuest = class extends Game {
	bubbles = [];
	target = 10;
	got = 0;
	goal = 5;
	reset(diff) {
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
			x: this.w * (.18 + i % 3 * .28),
			y: 180 + Math.floor(i / 3) * 120,
			sel: false
		}));
		const a = this.bubbles[0];
		const b = this.bubbles[1];
		this.target = this.diff === "beginner" ? a.n : a.n + b.n;
		this.info = `Make the bubbles add up to ${this.target}.`;
	}
	sum() {
		return this.bubbles.reduce((n, b) => n + (b.sel ? b.n : 0), 0);
	}
	update(_dt, input) {
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
			this.bubbles.forEach((b) => b.sel = false);
		}
	}
	paint(ctx) {
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
};
var WordBuilder = class extends Game {
	words = [];
	idx = 0;
	typed = "";
	letters = [];
	reset(diff) {
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
		this.letters = (w.word + extra).split("").sort(() => Math.random() - .5);
		this.info = w.hint;
		this.progress = this.idx / this.words.length;
	}
	update(_dt, input) {
		const word = this.words[this.idx]?.word;
		if (!word || !input.justDown) return;
		const i = this.layoutLetters().findIndex((r) => hitRect(input.px, input.py, r));
		if (i < 0) return;
		const ch = this.letters[i];
		if (ch !== word[this.typed.length]) {
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
		const cols = Math.max(1, Math.floor((this.w - 20) / 68));
		return this.letters.map((_, i) => ({
			x: 16 + i % cols * 68,
			y: 240 + Math.floor(i / cols) * 68,
			w: size,
			h: size
		}));
	}
	paint(ctx) {
		const word = this.words[this.idx]?.word ?? "";
		sky(ctx, this.w, this.h, "#fff0c8", "#dff5ff");
		drawPup(ctx, this.w - 70, 120, 34, "focus");
		heroText(ctx, word.split("").map((ch, i) => i < this.typed.length ? ch : "_").join(" ") || "_", this.w / 2, 150, 36, PAL.royal);
		this.layoutLetters().forEach((r, i) => paintButton(ctx, r, this.letters[i] ?? "", PAL.foam));
	}
};
var Spelling = class extends Game {
	words = [];
	idx = 0;
	typed = "";
	phaseIn = "show";
	letters = [];
	reset(diff) {
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
		this.letters = bag.sort(() => Math.random() - .5);
		this.info = "Remember this word.";
	}
	update(dt, input) {
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
		const i = choiceGrid(this.w, this.h, this.chromeBottom, this.letters.length).findIndex((r) => hitRect(input.px, input.py, r));
		if (i < 0) return;
		const ch = this.letters[i];
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
	paint(ctx) {
		const word = this.words[this.idx]?.word ?? "";
		sky(ctx, this.w, this.h, "#d8f3ff", "#fff6e4");
		if (this.phaseIn === "show") heroText(ctx, word, this.w / 2, this.h * .36, 48, PAL.gold);
		else {
			heroText(ctx, this.typed || "?", this.w / 2, 120, 42, PAL.royal);
			choiceGrid(this.w, this.h, this.chromeBottom, this.letters.length).forEach((r, i) => paintButton(ctx, r, this.letters[i] ?? "", PAL.foam));
		}
	}
};
var MathMaster = class extends Game {
	a = 1;
	b = 1;
	op = "+";
	answer = 2;
	choices = [];
	got = 0;
	goal = 6;
	reset(diff) {
		this.begin(diff, 3);
		this.goal = diff === "beginner" ? 5 : diff === "advanced" ? 8 : 6;
		this.got = 0;
		this.deal();
	}
	deal() {
		if (this.diff === "advanced" && Math.random() < .45) {
			this.a = 2 + Math.floor(Math.random() * 4);
			this.b = 2 + Math.floor(Math.random() * 4);
			this.op = "×";
			this.answer = this.a * this.b;
		} else if (this.diff !== "beginner" && Math.random() < .4) {
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
		const set = /* @__PURE__ */ new Set([this.answer]);
		while (set.size < 4) set.add(Math.max(0, this.answer + Math.floor(Math.random() * 7) - 3));
		this.choices = [...set].sort(() => Math.random() - .5);
		this.info = "Tap the block with the right answer.";
		this.progress = this.got / this.goal;
	}
	update(_dt, input) {
		if (!input.justDown) return;
		const rects = choiceGrid(this.w, this.h, this.chromeBottom, 4);
		const i = rects.findIndex((r) => hitRect(input.px, input.py, r));
		if (i < 0) return;
		if (this.choices[i] === this.answer) {
			this.addScore(15, rects[i].x + 20, rects[i].y);
			this.got += 1;
			if (this.got >= this.goal) {
				this.addScore(30, this.w / 2, 140);
				this.win();
			} else this.deal();
		} else this.hurt();
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#b9dcff", "#fff6e4");
		[
			this.a,
			this.op,
			this.b,
			"=",
			"?"
		].forEach((b, i) => {
			const x = this.w / 2 + (i - 2) * 52;
			fillRound(ctx, x - 22, 110, 44, 44, 10, b === "?" ? PAL.gold : PAL.royal);
			label(ctx, String(b), x, 132, 20, PAL.foam);
		});
		choiceGrid(this.w, this.h, this.chromeBottom, 4).forEach((r, i) => paintButton(ctx, r, String(this.choices[i] ?? ""), PAL.foam));
	}
};
function alphabet() {
	return new Alphabet();
}
function numberQuest() {
	return new NumberQuest();
}
function wordBuilder() {
	return new WordBuilder();
}
function spelling() {
	return new Spelling();
}
function mathMaster() {
	return new MathMaster();
}
var Jigsaw = class extends Game {
	n = 3;
	tiles = [];
	empty = 0;
	reset(diff) {
		this.begin(diff, 3);
		this.n = diff === "advanced" ? 4 : 3;
		const total = this.n * this.n;
		this.tiles = Array.from({ length: total }, (_, i) => i);
		this.empty = total - 1;
		const steps = diff === "beginner" ? 14 : diff === "advanced" ? 48 : 26;
		for (let i = 0; i < steps; i++) {
			const opts = this.neigh(this.empty);
			this.swap(opts[Math.floor(Math.random() * opts.length)]);
		}
		if (this.solved()) this.swap(this.neigh(this.empty)[0]);
		this.info = "Slide tiles into place to finish the picture.";
	}
	neigh(i) {
		const n = this.n;
		const r = Math.floor(i / n);
		const c = i % n;
		const out = [];
		if (r > 0) out.push(i - n);
		if (r < n - 1) out.push(i + n);
		if (c > 0) out.push(i - 1);
		if (c < n - 1) out.push(i + 1);
		return out;
	}
	swap(i) {
		const tmp = this.tiles[i];
		this.tiles[i] = this.tiles[this.empty];
		this.tiles[this.empty] = tmp;
		this.empty = i;
	}
	solved() {
		return this.tiles.every((t, i) => t === i);
	}
	board() {
		const n = this.n;
		const size = Math.min((this.w - 28) / n, (this.h - this.chromeBottom - 120) / n);
		return {
			n,
			size,
			ox: (this.w - size * n) / 2,
			oy: 100
		};
	}
	update(_dt, input) {
		if (!input.justDown) return;
		const { n, size, ox, oy } = this.board();
		const c = Math.floor((input.px - ox) / size);
		const r = Math.floor((input.py - oy) / size);
		if (c < 0 || r < 0 || c >= n || r >= n) return;
		const i = r * n + c;
		if (!this.neigh(this.empty).includes(i)) return;
		this.swap(i);
		this.fx.push("tap");
		const fixed = this.tiles.filter((t, idx) => t === idx).length;
		this.progress = fixed / this.tiles.length;
		this.addScore(4, input.px, input.py);
		if (this.solved()) {
			this.addScore(40, this.w / 2, 70);
			this.win();
		}
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#efe4ff", "#fff6e4");
		const { n, size, ox, oy } = this.board();
		const colors = [
			PAL.gold,
			PAL.royal,
			PAL.berry,
			PAL.leaf,
			PAL.grape,
			PAL.lagoonDeep,
			PAL.orange,
			"#fff"
		];
		this.tiles.forEach((id, i) => {
			if (id === n * n - 1) return;
			const r = Math.floor(i / n);
			const c = i % n;
			const sr = Math.floor(id / n);
			const sc = id % n;
			fillRound(ctx, ox + c * size + 3, oy + r * size + 3, size - 6, size - 6, 10, colors[(sr * 3 + sc) % colors.length]);
			label(ctx, String(id + 1), ox + c * size + size / 2, oy + r * size + size / 2, 18, PAL.ink);
		});
	}
};
var SHAPES = [
	"circle",
	"square",
	"triangle"
];
var COLS = [
	PAL.royal,
	PAL.berry,
	PAL.gold
];
var ShapeMatch = class extends Game {
	shape = 0;
	color = 0;
	y = 0;
	bin = 1;
	rule = "shape";
	cool = 0;
	got = 0;
	goal = 8;
	reset(diff) {
		this.begin(diff, 3);
		this.goal = diff === "beginner" ? 6 : 10;
		this.got = 0;
		this.spawn();
	}
	spawn() {
		this.shape = Math.floor(Math.random() * 3);
		this.color = Math.floor(Math.random() * 3);
		this.y = 120;
		this.rule = Math.random() < .5 ? "shape" : "color";
		this.bin = 1;
		this.info = this.rule === "shape" ? "Sort by shape." : "Sort by colour.";
		this.progress = this.got / this.goal;
	}
	update(dt, input) {
		this.cool -= dt;
		if (this.cool <= 0 && Math.abs(input.ax) > .4) {
			this.bin = clamp(this.bin + (input.ax > 0 ? 1 : -1), 0, 2);
			this.cool = .18;
		}
		this.y += dt * 90 * this.rate;
		const floor = this.h - this.chromeBottom - 90;
		if (this.y < floor) return;
		if (this.rule === "shape" ? this.bin === this.shape : this.bin === this.color) {
			this.addScore(12, this.w / 2, this.y);
			this.got += 1;
			if (this.got >= this.goal) {
				this.addScore(28, this.w / 2, 80);
				this.win();
				return;
			}
		} else this.hurt();
		if (this.mode === "play") this.spawn();
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#f3e8ff", "#efe4ff");
		const names = [
			"Circle",
			"Square",
			"Triangle"
		];
		const bw = (this.w - 32) / 3;
		for (let i = 0; i < 3; i++) {
			const x = 12 + i * (bw + 4);
			const y = this.h - this.chromeBottom - 78;
			fillRound(ctx, x, y, bw, 64, 12, this.bin === i ? PAL.gold : PAL.foam);
			label(ctx, this.rule === "shape" ? names[i] : `Colour ${i + 1}`, x + bw / 2, y + 32, 12, PAL.ink);
			ctx.fillStyle = COLS[i];
			ctx.beginPath();
			ctx.arc(x + 18, y + 20, 8, 0, Math.PI * 2);
			ctx.fill();
		}
		const x = this.w / 2;
		ctx.fillStyle = COLS[this.color];
		if (SHAPES[this.shape] === "circle") {
			ctx.beginPath();
			ctx.arc(x, this.y, 22, 0, Math.PI * 2);
			ctx.fill();
		} else if (SHAPES[this.shape] === "square") fillRound(ctx, x - 20, this.y - 20, 40, 40, 6, COLS[this.color]);
		else {
			ctx.beginPath();
			ctx.moveTo(x, this.y - 24);
			ctx.lineTo(x + 22, this.y + 18);
			ctx.lineTo(x - 22, this.y + 18);
			ctx.closePath();
			ctx.fill();
		}
	}
};
var ICONS = [
	"star",
	"moon",
	"heart",
	"drop",
	"sun",
	"gem",
	"leaf",
	"bolt"
];
var Memory = class extends Game {
	cols = 4;
	rows = 2;
	deck = [];
	up = [];
	gone = /* @__PURE__ */ new Set();
	lock = 0;
	matched = 0;
	pairs = 4;
	reset(diff) {
		this.begin(diff, 3);
		this.pairs = diff === "beginner" ? 3 : diff === "advanced" ? 8 : 6;
		this.cols = this.pairs > 6 ? 4 : this.pairs > 3 ? 4 : 3;
		this.rows = Math.ceil(this.pairs * 2 / this.cols);
		const ids = Array.from({ length: this.pairs }, (_, i) => i);
		this.deck = [...ids, ...ids].sort(() => Math.random() - .5);
		this.up = [];
		this.gone = /* @__PURE__ */ new Set();
		this.lock = 0;
		this.matched = 0;
		this.info = "Find every matching pair.";
	}
	grid() {
		const gap = 8;
		const size = Math.min(86, (this.w - 24 - gap * (this.cols - 1)) / this.cols, (this.h - this.chromeBottom - 110) / this.rows);
		return {
			size,
			gap,
			ox: (this.w - (size * this.cols + gap * (this.cols - 1))) / 2,
			oy: 96
		};
	}
	update(dt, input) {
		if (this.lock > 0) {
			this.lock -= dt;
			if (this.lock <= 0 && this.up.length === 2) {
				const [a, b] = this.up;
				if (this.deck[a] === this.deck[b]) {
					this.gone.add(a);
					this.gone.add(b);
					this.matched += 1;
					this.addScore(16, this.w / 2, 70);
					this.progress = this.matched / this.pairs;
					if (this.matched >= this.pairs) {
						this.addScore(28, this.w / 2, 70);
						this.win();
					}
				}
				this.up = [];
			}
			return;
		}
		if (!input.justDown) return;
		const { size, gap, ox, oy } = this.grid();
		const c = Math.floor((input.px - ox) / (size + gap));
		const r = Math.floor((input.py - oy) / (size + gap));
		if (c < 0 || r < 0 || c >= this.cols || r >= this.rows) return;
		const i = r * this.cols + c;
		if (i >= this.deck.length || this.gone.has(i) || this.up.includes(i)) return;
		this.up.push(i);
		this.fx.push("tap");
		if (this.up.length === 2) this.lock = .55;
	}
	paintIcon(ctx, kind, x, y) {
		const name = ICONS[kind % ICONS.length];
		ctx.fillStyle = [
			PAL.gold,
			PAL.royal,
			PAL.berry,
			PAL.leaf,
			PAL.grape,
			PAL.orange,
			PAL.lagoonDeep,
			PAL.goldDeep
		][kind % 8];
		if (name === "star") drawStar(ctx, x, y, 16);
		else if (name === "heart") {
			ctx.beginPath();
			ctx.arc(x - 6, y, 7, 0, Math.PI * 2);
			ctx.arc(x + 6, y, 7, 0, Math.PI * 2);
			ctx.fill();
		} else {
			ctx.beginPath();
			ctx.arc(x, y, 12, 0, Math.PI * 2);
			ctx.fill();
			label(ctx, name.slice(0, 1).toUpperCase(), x, y, 14, PAL.ink);
		}
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#efe4ff", "#fff6e4");
		const { size, gap, ox, oy } = this.grid();
		this.deck.forEach((_, i) => {
			if (this.gone.has(i)) return;
			const r = Math.floor(i / this.cols);
			const c = i % this.cols;
			const x = ox + c * (size + gap);
			const y = oy + r * (size + gap);
			const open = this.up.includes(i);
			fillRound(ctx, x, y, size, size, 12, open ? PAL.cream : PAL.grape);
			if (open) this.paintIcon(ctx, this.deck[i], x + size / 2, y + size / 2);
			else label(ctx, "?", x + size / 2, y + size / 2, 22, PAL.foam);
		});
	}
};
var Difference = class extends Game {
	spots = [];
	goal = 5;
	seed = 1;
	reset(diff) {
		this.begin(diff, 3);
		this.goal = diff === "beginner" ? 4 : 5;
		this.seed = 1 + Math.floor(Math.random() * 99);
		this.spots = [];
		const rnd = () => {
			this.seed = this.seed * 16807 % 2147483647;
			return this.seed % 1e3 / 1e3;
		};
		for (let i = 0; i < this.goal; i++) this.spots.push({
			x: .15 + rnd() * .7,
			y: .18 + rnd() * .62,
			found: false
		});
		this.info = `Find ${this.goal} changes on the right picture.`;
	}
	update(_dt, input) {
		if (!input.justDown) return;
		const panel = this.panel();
		if (input.px < panel.rx) return;
		const lx = (input.px - panel.rx) / panel.pw;
		const ly = (input.py - panel.y) / panel.ph;
		const hit = this.spots.find((s) => !s.found && Math.hypot(lx - s.x, ly - s.y) < .12);
		if (!hit) {
			this.hurt();
			return;
		}
		hit.found = true;
		this.addScore(18, input.px, input.py);
		const n = this.spots.filter((s) => s.found).length;
		this.progress = n / this.goal;
		if (n >= this.goal) {
			this.addScore(30, this.w / 2, 60);
			this.win();
		}
	}
	panel() {
		const gap = 10;
		const pw = (this.w - 24 - gap) / 2;
		const ph = Math.min(pw * 1.25, this.h - this.chromeBottom - 120);
		return {
			lx: 12,
			rx: 12 + pw + gap,
			y: 96,
			pw,
			ph
		};
	}
	scene(ctx, x, y, w, h, extras) {
		ctx.save();
		ctx.beginPath();
		ctx.rect(x, y, w, h);
		ctx.clip();
		sky(ctx, this.w, this.h, "#9ad8ff", "#c8f0c0");
		ctx.fillStyle = "#7dce6a";
		ctx.fillRect(x, y + h * .72, w, h * .28);
		ctx.fillStyle = PAL.gold;
		ctx.beginPath();
		ctx.arc(x + w * .78, y + h * .22, 16, 0, Math.PI * 2);
		ctx.fill();
		fillRound(ctx, x + w * .18, y + h * .48, w * .28, h * .28, 4, PAL.royal);
		ctx.fillStyle = PAL.goldDeep;
		ctx.beginPath();
		ctx.moveTo(x + w * .14, y + h * .48);
		ctx.lineTo(x + w * .32, y + h * .32);
		ctx.lineTo(x + w * .5, y + h * .48);
		ctx.fill();
		drawPup(ctx, x + w * .62, y + h * .62, 18, "happy");
		if (extras) for (const s of this.spots) {
			if (s.found) continue;
			drawStar(ctx, x + s.x * w, y + s.y * h, 10, PAL.berry);
		}
		ctx.restore();
		ctx.strokeStyle = PAL.ink;
		ctx.lineWidth = 3;
		ctx.strokeRect(x, y, w, h);
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#efe4ff", "#fff6e4");
		const p = this.panel();
		this.scene(ctx, p.lx, p.y, p.pw, p.ph, false);
		this.scene(ctx, p.rx, p.y, p.pw, p.ph, true);
		label(ctx, "Left", p.lx + p.pw / 2, p.y - 16, 14, PAL.ink);
		label(ctx, "Right", p.rx + p.pw / 2, p.y - 16, 14, PAL.ink);
	}
};
var MazeGame = class extends Game {
	cols = 11;
	rows = 11;
	walls = [];
	px = 1;
	py = 1;
	cool = 0;
	reset(diff) {
		this.begin(diff, 1);
		this.lives = 1;
		const n = diff === "beginner" ? 9 : diff === "advanced" ? 15 : 11;
		this.cols = n;
		this.rows = n;
		this.walls = Array.from({ length: n }, () => Array(n).fill(true));
		const carve = (x, y) => {
			this.walls[y][x] = false;
			const dirs = [
				[2, 0],
				[-2, 0],
				[0, 2],
				[0, -2]
			].sort(() => Math.random() - .5);
			for (const [dx, dy] of dirs) {
				const nx = x + dx;
				const ny = y + dy;
				if (nx > 0 && ny > 0 && nx < n - 1 && ny < n - 1 && this.walls[ny][nx]) {
					this.walls[y + dy / 2][x + dx / 2] = false;
					carve(nx, ny);
				}
			}
		};
		carve(1, 1);
		this.px = 1;
		this.py = 1;
		this.cool = 0;
		this.info = "Reach the star.";
	}
	tryMove(dx, dy) {
		const nx = this.px + dx;
		const ny = this.py + dy;
		if (nx < 0 || ny < 0 || nx >= this.cols || ny >= this.rows) return;
		if (this.walls[ny][nx]) return;
		this.px = nx;
		this.py = ny;
		this.addScore(1);
		if (this.px === this.cols - 2 && this.py === this.rows - 2) {
			this.addScore(50, this.w / 2, 60);
			this.win();
		}
	}
	cellGeom() {
		const size = Math.min((this.w - 16) / this.cols, (this.h - this.chromeBottom - 90) / this.rows);
		return {
			size,
			ox: (this.w - size * this.cols) / 2,
			oy: 88
		};
	}
	update(dt, input) {
		this.cool -= dt;
		if (this.cool <= 0) {
			if (input.ax > .45) this.tryMove(1, 0);
			else if (input.ax < -.45) this.tryMove(-1, 0);
			else if (input.ay > .45) this.tryMove(0, 1);
			else if (input.ay < -.45) this.tryMove(0, -1);
			if (Math.abs(input.ax) > .45 || Math.abs(input.ay) > .45) this.cool = .16;
		}
		if (input.justDown) {
			const { size, ox, oy } = this.cellGeom();
			const c = Math.floor((input.px - ox) / size);
			const r = Math.floor((input.py - oy) / size);
			if (Math.abs(c - this.px) + Math.abs(r - this.py) === 1) this.tryMove(c - this.px, r - this.py);
		}
		this.progress = 1 - (Math.abs(this.cols - 2 - this.px) + Math.abs(this.rows - 2 - this.py)) / (this.cols + this.rows);
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#d8c8ff", "#fff6e4");
		const { size, ox, oy } = this.cellGeom();
		for (let y = 0; y < this.rows; y++) for (let x = 0; x < this.cols; x++) {
			ctx.fillStyle = this.walls[y][x] ? PAL.grape : "#f7f1ff";
			ctx.fillRect(ox + x * size, oy + y * size, size - 1, size - 1);
		}
		drawStar(ctx, ox + (this.cols - 2) * size + size / 2, oy + (this.rows - 2) * size + size / 2, size * .28);
		drawPup(ctx, ox + this.px * size + size / 2, oy + this.py * size + size / 2, size * .28, "happy");
	}
};
function jigsaw() {
	return new Jigsaw();
}
function shapeMatcher() {
	return new ShapeMatch();
}
function memoryQuest() {
	return new Memory();
}
function findDifference() {
	return new Difference();
}
function magicMaze() {
	return new MazeGame();
}
var StarCollector = class extends Game {
	x = 0;
	y = 0;
	stars = [];
	chasers = [];
	got = 0;
	goal = 10;
	reset(diff) {
		this.begin(diff, 3);
		this.goal = diff === "beginner" ? 8 : 10;
		this.x = this.w / 2;
		this.y = this.h / 2;
		this.got = 0;
		this.stars = Array.from({ length: 4 }, () => this.spot());
		const n = diff === "advanced" ? 3 : diff === "beginner" ? 1 : 2;
		this.chasers = Array.from({ length: n }, () => ({
			x: 40,
			y: 80
		}));
		this.info = `Collect ${this.goal} stars.`;
	}
	spot() {
		return {
			x: 30 + Math.random() * (this.w - 60),
			y: 90 + Math.random() * (this.h - this.chromeBottom - 140)
		};
	}
	update(dt, input) {
		const sp = 210 / this.rate;
		this.x = clamp(this.x + input.ax * sp * dt, 20, this.w - 20);
		this.y = clamp(this.y + input.ay * sp * dt, 70, this.h - this.chromeBottom - 24);
		this.stars = this.stars.filter((s) => {
			if (Math.hypot(s.x - this.x, s.y - this.y) < 28) {
				this.got += 1;
				this.addScore(12, s.x, s.y);
				return false;
			}
			return true;
		});
		while (this.stars.length < 3 && this.got < this.goal) this.stars.push(this.spot());
		const chase = 70 * this.rate;
		for (const c of this.chasers) {
			const d = Math.hypot(this.x - c.x, this.y - c.y) || 1;
			c.x += (this.x - c.x) / d * chase * dt;
			c.y += (this.y - c.y) / d * chase * dt;
			if (Math.hypot(c.x - this.x, c.y - this.y) < 26) {
				this.hurt();
				c.x = 30;
				c.y = 80;
			}
		}
		this.progress = this.got / this.goal;
		if (this.got >= this.goal) {
			this.addScore(30, this.x, this.y);
			this.win();
		}
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#2a2150", "#6d4ea5");
		for (const s of this.stars) drawStar(ctx, s.x, s.y, 14);
		for (const c of this.chasers) {
			ctx.fillStyle = PAL.berry;
			ctx.beginPath();
			ctx.arc(c.x, c.y, 16, 0, Math.PI * 2);
			ctx.fill();
			label(ctx, "!", c.x, c.y, 16, PAL.foam);
		}
		drawPup(ctx, this.x, this.y, 22, "wow");
	}
};
var BubblePop = class extends Game {
	cols = 7;
	rows = 7;
	cells = [];
	colors = 4;
	target = 120;
	reset(diff) {
		this.begin(diff, 1);
		this.lives = 3;
		this.colors = diff === "beginner" ? 3 : diff === "advanced" ? 5 : 4;
		this.target = diff === "beginner" ? 80 : diff === "advanced" ? 160 : 120;
		this.cols = 7;
		this.rows = 8;
		this.cells = Array.from({ length: this.rows }, () => Array.from({ length: this.cols }, () => Math.floor(Math.random() * this.colors)));
		this.info = "Pop groups of 3 or more.";
	}
	geom() {
		const size = Math.min(52, (this.w - 16) / this.cols, (this.h - this.chromeBottom - 100) / this.rows);
		return {
			size,
			ox: (this.w - size * this.cols) / 2,
			oy: 92
		};
	}
	groupAt(r, c) {
		const color = this.cells[r]?.[c];
		if (color == null || color < 0) return [];
		const seen = /* @__PURE__ */ new Set();
		const out = [];
		const stack = [{
			r,
			c
		}];
		while (stack.length) {
			const cur = stack.pop();
			const key = `${cur.r},${cur.c}`;
			if (seen.has(key)) continue;
			if (this.cells[cur.r]?.[cur.c] !== color) continue;
			seen.add(key);
			out.push(cur);
			stack.push({
				r: cur.r + 1,
				c: cur.c
			}, {
				r: cur.r - 1,
				c: cur.c
			}, {
				r: cur.r,
				c: cur.c + 1
			}, {
				r: cur.r,
				c: cur.c - 1
			});
		}
		return out;
	}
	hasMove() {
		for (let r = 0; r < this.rows; r++) for (let c = 0; c < this.cols; c++) if (this.groupAt(r, c).length >= 3) return true;
		return false;
	}
	collapse() {
		for (let c = 0; c < this.cols; c++) {
			const stack = [];
			for (let r = this.rows - 1; r >= 0; r--) if (this.cells[r][c] >= 0) stack.push(this.cells[r][c]);
			for (let r = this.rows - 1; r >= 0; r--) this.cells[r][c] = stack.length ? stack.shift() : -1;
		}
	}
	update(_dt, input) {
		if (!this.hasMove()) {
			for (let r = 0; r < this.rows; r++) for (let c = 0; c < this.cols; c++) if (this.cells[r][c] < 0) this.cells[r][c] = Math.floor(Math.random() * this.colors);
		}
		if (!input.justDown) return;
		const { size, ox, oy } = this.geom();
		const c = Math.floor((input.px - ox) / size);
		const r = Math.floor((input.py - oy) / size);
		if (r < 0 || c < 0 || r >= this.rows || c >= this.cols) return;
		const group = this.groupAt(r, c);
		if (group.length < 3) {
			this.fx.push("bad");
			return;
		}
		for (const g of group) this.cells[g.r][g.c] = -1;
		this.collapse();
		this.addScore(group.length * 8, input.px, input.py);
		this.progress = Math.min(1, this.points / this.target);
		if (this.points >= this.target) {
			this.addScore(20, this.w / 2, 60);
			this.win();
		}
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#20345f", "#7f5af0");
		const palette = [
			PAL.berry,
			PAL.gold,
			PAL.leaf,
			PAL.lagoon,
			PAL.foam,
			PAL.orange
		];
		const { size, ox, oy } = this.geom();
		for (let r = 0; r < this.rows; r++) for (let c = 0; c < this.cols; c++) {
			const v = this.cells[r][c];
			if (v < 0) continue;
			ctx.beginPath();
			ctx.arc(ox + c * size + size / 2, oy + r * size + size / 2, size * .38, 0, Math.PI * 2);
			ctx.fillStyle = palette[v % palette.length];
			ctx.fill();
			ctx.strokeStyle = "rgba(255,255,255,0.7)";
			ctx.lineWidth = 2;
			ctx.stroke();
		}
	}
};
var FruitCatch = class extends Game {
	x = 0;
	items = [];
	spawn = 0;
	got = 0;
	goal = 12;
	reset(diff) {
		this.begin(diff, 3);
		this.goal = diff === "beginner" ? 10 : 14;
		this.x = this.w / 2;
		this.items = [];
		this.got = 0;
		this.spawn = .2;
		this.info = "Catch fruit. Dodge bombs.";
	}
	update(dt, input) {
		this.x = clamp(input.px, 30, this.w - 30);
		this.spawn -= dt;
		if (this.spawn <= 0) {
			this.spawn = (this.diff === "advanced" ? .45 : .7) / this.rate;
			this.items.push({
				x: 24 + Math.random() * (this.w - 48),
				y: -20,
				vy: 120 + 80 * this.rate,
				good: Math.random() > .22
			});
		}
		const basketY = this.h - this.chromeBottom - 36;
		this.items = this.items.filter((it) => {
			it.y += it.vy * dt;
			if (it.y > basketY && Math.abs(it.x - this.x) < 42 && it.y < basketY + 30) {
				if (it.good) {
					this.got += 1;
					this.addScore(10, it.x, it.y);
				} else this.hurt();
				return false;
			}
			return it.y < this.h + 20;
		});
		this.progress = this.got / this.goal;
		if (this.got >= this.goal) {
			this.addScore(30, this.x, basketY);
			this.win();
		}
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#b7ecff", "#d9f8c8");
		for (const it of this.items) if (it.good) {
			ctx.fillStyle = PAL.berry;
			ctx.beginPath();
			ctx.arc(it.x, it.y, 14, 0, Math.PI * 2);
			ctx.fill();
			ctx.fillStyle = PAL.leaf;
			ctx.fillRect(it.x - 2, it.y - 22, 4, 10);
		} else {
			fillRound(ctx, it.x - 14, it.y - 14, 28, 28, 6, PAL.ink);
			label(ctx, "x", it.x, it.y, 16, PAL.gold);
		}
		const y = this.h - this.chromeBottom - 28;
		fillRound(ctx, this.x - 40, y, 80, 22, 10, PAL.orange);
		drawPup(ctx, this.x, y - 18, 16, "happy");
	}
};
var Breakout = class extends Game {
	px = 0;
	ball = {
		x: 0,
		y: 0,
		vx: 160,
		vy: -220
	};
	bricks = [];
	launched = false;
	reset(diff) {
		this.begin(diff, 3);
		this.px = this.w / 2;
		this.launched = false;
		const cols = diff === "advanced" ? 8 : 7;
		const rows = diff === "beginner" ? 3 : diff === "advanced" ? 5 : 4;
		const bw = (this.w - 24) / cols;
		const colors = [
			PAL.berry,
			PAL.gold,
			PAL.royal,
			PAL.leaf,
			PAL.grape
		];
		this.bricks = [];
		for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) this.bricks.push({
			x: 12 + c * bw,
			y: 90 + r * 28,
			alive: true,
			color: colors[r % colors.length]
		});
		this.sync(false);
		this.info = "Move the paddle. Clear every brick.";
	}
	sync(moving) {
		if (!moving) {
			this.ball.x = this.px;
			this.ball.y = this.h - this.chromeBottom - 58;
			this.ball.vx = 150 * this.rate * (Math.random() < .5 ? -1 : 1);
			this.ball.vy = -240 * this.rate;
		}
	}
	update(dt, input) {
		this.px = clamp(input.px, 40, this.w - 40);
		if (!this.launched) {
			this.sync(false);
			if (input.justDown) this.launched = true;
			return;
		}
		this.ball.x += this.ball.vx * dt;
		this.ball.y += this.ball.vy * dt;
		if (this.ball.x < 10 || this.ball.x > this.w - 10) this.ball.vx *= -1;
		if (this.ball.y < 70) this.ball.vy = Math.abs(this.ball.vy);
		const py = this.h - this.chromeBottom - 40;
		if (this.ball.y > py && this.ball.y < py + 20 && Math.abs(this.ball.x - this.px) < 48 && this.ball.vy > 0) {
			this.ball.vy = -Math.abs(this.ball.vy);
			this.ball.vx += (this.ball.x - this.px) * 3;
			this.fx.push("tap");
		}
		const bw = (this.w - 24) / (this.diff === "advanced" ? 8 : 7);
		for (const b of this.bricks) {
			if (!b.alive) continue;
			if (this.ball.x > b.x && this.ball.x < b.x + bw - 4 && this.ball.y > b.y && this.ball.y < b.y + 24) {
				b.alive = false;
				this.ball.vy *= -1;
				this.addScore(8, b.x, b.y);
			}
		}
		if (this.ball.y > this.h) {
			this.hurt();
			this.launched = false;
			this.sync(false);
		}
		const left = this.bricks.filter((b) => b.alive).length;
		this.progress = 1 - left / this.bricks.length;
		if (left === 0) {
			this.addScore(40, this.w / 2, 80);
			this.win();
		}
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#1b2a4a", "#3960a8");
		const bw = (this.w - 24) / (this.diff === "advanced" ? 8 : 7);
		for (const b of this.bricks) {
			if (!b.alive) continue;
			fillRound(ctx, b.x, b.y, bw - 4, 22, 6, b.color);
		}
		const py = this.h - this.chromeBottom - 46;
		fillRound(ctx, this.px - 42, py, 84, 14, 7, PAL.gold);
		ctx.fillStyle = PAL.foam;
		ctx.beginPath();
		ctx.arc(this.ball.x, this.ball.y, 8, 0, Math.PI * 2);
		ctx.fill();
		if (!this.launched) label(ctx, "Tap to serve", this.w / 2, py - 28, 16, PAL.cream);
	}
};
var SkyRunner = class extends Game {
	y = 0;
	vy = 0;
	gates = [];
	got = 0;
	goal = 10;
	spawnX = 400;
	reset(diff) {
		this.begin(diff, 3);
		this.goal = diff === "beginner" ? 8 : 12;
		this.y = this.h * .45;
		this.vy = 0;
		this.got = 0;
		this.gates = [];
		this.spawnX = this.w + 40;
		this.info = "Flap through the gaps.";
	}
	update(dt, input) {
		if (input.flapJust || input.justDown) {
			this.vy = -340;
			this.tapJump();
		}
		this.vy += 820 * dt;
		this.y += this.vy * dt;
		const speed = 160 * this.rate;
		const gap = this.diff === "beginner" ? 190 : this.diff === "advanced" ? 120 : 150;
		if (!this.gates.length || this.spawnX < this.w + 200) {
			this.gates.push({
				x: this.spawnX,
				gapY: 140 + Math.random() * (this.h - this.chromeBottom - 280),
				passed: false,
				coin: true
			});
			this.spawnX += 280;
		}
		for (const g of this.gates) {
			g.x -= speed * dt;
			const hx = 88;
			if (!g.passed && g.x < hx) {
				g.passed = true;
				if (this.y < g.gapY - gap / 2 || this.y > g.gapY + gap / 2) this.hurt();
				else {
					this.got += 1;
					this.addScore(10, hx, this.y);
				}
			}
		}
		this.gates = this.gates.filter((g) => g.x > -40);
		this.spawnX -= speed * dt;
		if (this.y < 60 || this.y > this.h - this.chromeBottom - 20) this.hurt();
		if (this.mode === "play" && (this.y < 60 || this.y > this.h - 20)) this.y = this.h * .45;
		this.progress = this.got / this.goal;
		if (this.got >= this.goal) {
			this.addScore(30, this.w / 2, 80);
			this.win();
		}
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#79c8ff", "#fff6e4");
		const gap = this.diff === "beginner" ? 190 : this.diff === "advanced" ? 120 : 150;
		for (const g of this.gates) {
			ctx.fillStyle = PAL.leafDeep;
			ctx.fillRect(g.x, 60, 36, g.gapY - gap / 2 - 60);
			ctx.fillRect(g.x, g.gapY + gap / 2, 36, this.h);
			if (g.coin) drawCoin(ctx, g.x + 18, g.gapY, 10);
		}
		drawPup(ctx, 88, this.y, 22, "wow");
	}
};
function starCollector() {
	return new StarCollector();
}
function bubblePop() {
	return new BubblePop();
}
function fruitCatcher() {
	return new FruitCatch();
}
function superBouncer() {
	return new Breakout();
}
function skyRunner() {
	return new SkyRunner();
}
var GoKart = class extends Game {
	lane = 1;
	cool = 0;
	dist = 0;
	goal = 1200;
	cars = [];
	spawn = 0;
	reset(diff) {
		this.begin(diff, 3);
		this.goal = diff === "beginner" ? 900 : diff === "advanced" ? 1600 : 1200;
		this.lane = 1;
		this.dist = 0;
		this.cars = [];
		this.spawn = .4;
		this.info = "Change lanes and pass the other karts.";
	}
	update(dt, input) {
		this.cool -= dt;
		if (this.cool <= 0 && Math.abs(input.ax) > .4) {
			this.lane = clamp(this.lane + (input.ax > 0 ? 1 : -1), 0, 2);
			this.cool = .16;
		}
		const speed = 220 * this.rate;
		this.dist += speed * dt;
		this.spawn -= dt;
		if (this.spawn <= 0) {
			this.spawn = (this.diff === "advanced" ? .7 : 1.05) / Math.sqrt(this.rate);
			this.cars.push({
				lane: Math.floor(Math.random() * 3),
				z: 1
			});
		}
		this.cars = this.cars.filter((c) => {
			c.z -= dt * .45 * this.rate;
			if (c.z < .08 && c.z > 0 && c.lane === this.lane) {
				c.z = -1;
				this.hurt();
				return false;
			}
			return c.z > -.05;
		});
		this.progress = Math.min(1, this.dist / this.goal);
		this.points = Math.floor(this.dist / 12);
		if (this.dist >= this.goal) {
			this.points += 40;
			this.win();
		}
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#9ec2ff", "#d5e4ff");
		const roadTop = 120;
		const roadBot = this.h - this.chromeBottom - 20;
		ctx.fillStyle = "#4a5568";
		ctx.beginPath();
		ctx.moveTo(this.w * .35, roadTop);
		ctx.lineTo(this.w * .65, roadTop);
		ctx.lineTo(this.w * .95, roadBot);
		ctx.lineTo(this.w * .05, roadBot);
		ctx.closePath();
		ctx.fill();
		for (const c of this.cars) {
			const y = roadTop + (1 - c.z) * (roadBot - roadTop) * .85;
			const span = 20 + (1 - c.z) * (this.w * .28);
			fillRound(ctx, this.w / 2 + (c.lane - 1) * span - 16, y, 32, 18 + (1 - c.z) * 20, 6, PAL.berry);
		}
		const py = roadBot - 50;
		const px = this.w / 2 + (this.lane - 1) * (this.w * .26);
		fillRound(ctx, px - 22, py, 44, 28, 8, PAL.gold);
		label(ctx, "You", px, py + 14, 12, PAL.ink);
		heroText(ctx, `${Math.floor(this.progress * 100)}%`, this.w / 2, 78, 28, PAL.foam);
	}
};
var MonsterTruck = class extends Game {
	x = 80;
	y = 0;
	vy = 0;
	grounded = true;
	dist = 0;
	goal = 1600;
	obs = [];
	reset(diff) {
		this.begin(diff, 3);
		this.goal = diff === "beginner" ? 1200 : 1800;
		this.x = 90;
		this.dist = 0;
		this.vy = 0;
		this.grounded = true;
		this.y = this.ground();
		this.obs = [];
		let cursor = 500;
		for (let i = 0; i < 14; i++) {
			const gap = i % 3 === 2;
			this.obs.push({
				x: cursor,
				w: gap ? 90 : 50 + i % 2 * 20,
				h: gap ? 0 : 36 + i % 3 * 14,
				gap
			});
			cursor += diff === "beginner" ? 280 : 230;
		}
		this.info = "Tap to jump rocks and gaps.";
	}
	ground() {
		return this.h - this.chromeBottom - 80;
	}
	update(dt, input) {
		const floor = this.ground();
		if ((input.flapJust || input.justDown) && this.grounded) {
			this.vy = -560;
			this.grounded = false;
			this.tapJump();
		}
		this.vy += 1400 * dt;
		this.y += this.vy * dt;
		const speed = 200 * this.rate;
		this.dist += speed * dt;
		for (const o of this.obs) o.x -= speed * dt;
		const overGap = this.obs.some((o) => o.gap && this.x > o.x && this.x < o.x + o.w);
		if (this.y >= floor && !overGap) {
			this.y = floor;
			this.vy = 0;
			this.grounded = true;
		} else if (this.y > floor + 70) {
			this.hurt();
			this.y = floor;
			this.grounded = true;
			this.vy = 0;
		} else this.grounded = false;
		for (const o of this.obs) {
			if (o.gap) continue;
			if (this.x > o.x && this.x < o.x + o.w && this.y > floor - o.h + 8) {
				this.hurt();
				o.x = -999;
			}
		}
		this.progress = Math.min(1, this.dist / this.goal);
		this.points = Math.floor(this.dist / 16);
		if (this.dist >= this.goal) {
			this.points += 36;
			this.win();
		}
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#9ad8ff", "#c6f0b0");
		const floor = this.ground();
		ctx.fillStyle = "#6aaa4e";
		ctx.fillRect(0, floor + 20, this.w, this.h);
		ctx.fillStyle = "#8d6a45";
		for (const o of this.obs) {
			if (o.x < -100 || o.x > this.w + 40) continue;
			if (o.gap) ctx.fillRect(o.x, floor + 20, o.w, 40);
			else fillRound(ctx, o.x, floor + 20 - o.h, o.w, o.h, 6, "#8d6a45");
		}
		fillRound(ctx, this.x - 28, this.y - 8, 56, 22, 6, PAL.royal);
		ctx.fillStyle = PAL.ink;
		ctx.beginPath();
		ctx.arc(this.x - 14, this.y + 16, 8, 0, Math.PI * 2);
		ctx.arc(this.x + 14, this.y + 16, 8, 0, Math.PI * 2);
		ctx.fill();
	}
};
var AnimalRace = class extends Game {
	me = 0;
	others = [0, 0];
	speeds = [12, 13];
	goal = 100;
	reset(diff) {
		this.begin(diff, 1);
		this.lives = 1;
		this.me = 0;
		this.goal = 100;
		const base = diff === "beginner" ? 9 : diff === "advanced" ? 15 : 12;
		this.speeds = [base, base + 1.5];
		this.others = [0, 0];
		this.info = "Tap Run as fast as you can.";
	}
	update(dt, input) {
		this.me += 8 * dt;
		if (input.flapJust || input.justDown) {
			this.me += this.diff === "beginner" ? 6 : 4.5;
			this.fx.push("tap");
		}
		this.others[0] = (this.others[0] ?? 0) + this.speeds[0] * dt;
		this.others[1] = (this.others[1] ?? 0) + this.speeds[1] * dt;
		this.points = Math.floor(this.me);
		this.progress = Math.min(1, this.me / this.goal);
		const bestOther = Math.max(this.others[0] ?? 0, this.others[1] ?? 0);
		if (this.me >= this.goal) {
			this.addScore(40, this.w * .7, 120);
			this.win();
		} else if (bestOther >= this.goal) this.hurt();
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#d8f5c8", "#fff6e4");
		[
			{
				name: "Faliz",
				v: this.me,
				color: PAL.orange
			},
			{
				name: "Miso",
				v: this.others[0] ?? 0,
				color: PAL.gold
			},
			{
				name: "Nib",
				v: this.others[1] ?? 0,
				color: PAL.inkSoft
			}
		].forEach((lane, i) => {
			const y = 150 + i * 90;
			ctx.fillStyle = "rgba(255,255,255,0.45)";
			ctx.fillRect(20, y, this.w - 40, 16);
			const x = 30 + Math.min(lane.v, this.goal) / this.goal * (this.w - 90);
			fillRound(ctx, x, y - 22, 36, 28, 8, lane.color);
			label(ctx, lane.name, x + 18, y - 32, 14, PAL.ink);
		});
		drawStar(ctx, this.w - 36, 130, 12);
	}
};
var OffRoad = class extends Game {
	x = 0;
	y = 0;
	flags = [];
	rocks = [];
	next = 0;
	left = 45;
	reset(diff) {
		this.begin(diff, 3);
		this.x = this.w / 2;
		this.y = this.h * .7;
		const n = diff === "beginner" ? 4 : diff === "advanced" ? 7 : 5;
		this.flags = Array.from({ length: n }, () => ({
			x: 40 + Math.random() * (this.w - 80),
			y: 100 + Math.random() * (this.h - this.chromeBottom - 180),
			got: false
		}));
		this.rocks = Array.from({ length: diff === "advanced" ? 7 : 4 }, () => ({
			x: 30 + Math.random() * (this.w - 60),
			y: 100 + Math.random() * (this.h - this.chromeBottom - 160)
		}));
		this.next = 0;
		this.left = diff === "beginner" ? 70 : diff === "advanced" ? 40 : 55;
		this.info = "Drive through the flags in order.";
	}
	update(dt, input) {
		this.left -= dt;
		const sp = 200;
		this.x = clamp(this.x + input.ax * sp * dt, 20, this.w - 20);
		this.y = clamp(this.y + input.ay * sp * dt, 80, this.h - this.chromeBottom - 24);
		const flag = this.flags[this.next];
		if (flag && !flag.got && Math.hypot(flag.x - this.x, flag.y - this.y) < 28) {
			flag.got = true;
			this.next += 1;
			this.addScore(18, flag.x, flag.y);
			this.progress = this.next / this.flags.length;
			if (this.next >= this.flags.length) {
				this.addScore(36, this.x, this.y);
				this.win();
			}
		}
		for (const r of this.rocks) if (Math.hypot(r.x - this.x, r.y - this.y) < 26) {
			this.hurt();
			this.x = clamp(this.x + (this.x - r.x), 20, this.w - 20);
		}
		this.info = `Flag ${Math.min(this.next + 1, this.flags.length)} of ${this.flags.length}. Time ${Math.max(0, Math.ceil(this.left))}s`;
		if (this.left <= 0) {
			this.mode = "lose";
			this.fx.push("lose");
		}
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#c6ec9a", "#8d6a45");
		for (const r of this.rocks) {
			ctx.fillStyle = "#6b7280";
			ctx.beginPath();
			ctx.arc(r.x, r.y, 16, 0, Math.PI * 2);
			ctx.fill();
		}
		this.flags.forEach((f, i) => {
			if (f.got) return;
			ctx.fillStyle = i === this.next ? PAL.berry : PAL.foam;
			ctx.fillRect(f.x - 3, f.y - 24, 6, 24);
			ctx.fillStyle = i === this.next ? PAL.gold : PAL.royal;
			ctx.beginPath();
			ctx.moveTo(f.x, f.y - 24);
			ctx.lineTo(f.x + 16, f.y - 16);
			ctx.lineTo(f.x, f.y - 8);
			ctx.fill();
		});
		fillRound(ctx, this.x - 16, this.y - 10, 32, 18, 5, PAL.royal);
	}
};
var Formula = class extends Game {
	phaseIn = "lights";
	light = 0;
	go = false;
	lane = 1;
	cool = 0;
	gates = 0;
	goal = 8;
	spawn = 0;
	obs = [];
	reset(diff) {
		this.begin(diff, 3);
		this.phaseIn = "lights";
		this.light = 0;
		this.go = false;
		this.lane = 1;
		this.gates = 0;
		this.goal = diff === "beginner" ? 6 : 8;
		this.obs = [];
		this.spawn = .2;
		this.info = "Wait for green, then tap.";
	}
	update(dt, input) {
		if (this.phaseIn === "lights") {
			this.light += dt;
			const greenAt = 1.6;
			if ((input.justDown || input.actionJust) && this.light < greenAt) {
				this.hurt();
				this.light = 0;
				this.info = "Too soon. Wait for green.";
				return;
			}
			if ((input.justDown || input.actionJust) && this.light >= greenAt) {
				const react = this.light - greenAt;
				this.addScore(react < .35 ? 40 : 20, this.w / 2, 140);
				this.phaseIn = "race";
				this.info = "Steer through the gates.";
			}
			if (this.light > 1.5) this.info = "GREEN — tap now!";
			return;
		}
		this.cool -= dt;
		if (this.cool <= 0 && Math.abs(input.ax) > .4) {
			this.lane = clamp(this.lane + (input.ax > 0 ? 1 : -1), 0, 2);
			this.cool = .14;
		}
		this.spawn -= dt;
		if (this.spawn <= 0) {
			this.spawn = .85;
			const open = Math.floor(Math.random() * 3);
			for (let i = 0; i < 3; i++) if (i !== open) this.obs.push({
				lane: i,
				y: 80
			});
		}
		this.obs = this.obs.filter((o) => {
			o.y += dt * 180 * this.rate;
			if (o.y > this.h - this.chromeBottom - 80 && o.y < this.h - this.chromeBottom - 40 && o.lane === this.lane) {
				this.hurt();
				return false;
			}
			if (o.y > this.h - this.chromeBottom - 40 && o.lane !== this.lane) return o.y < this.h;
			return o.y < this.h;
		});
		this.points += dt * 8;
		this.gates += dt;
		this.progress = Math.min(1, this.gates / this.goal);
		if (this.gates >= this.goal) {
			this.addScore(30, this.w / 2, 80);
			this.win();
		}
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#1b2a4a", "#314e8a");
		if (this.phaseIn === "lights") {
			const on = Math.min(3, Math.floor(this.light / .5));
			for (let i = 0; i < 3; i++) {
				ctx.beginPath();
				ctx.arc(this.w / 2 - 50 + i * 50, this.h / 2, 16, 0, Math.PI * 2);
				ctx.fillStyle = i < on ? this.light > 1.5 ? PAL.leaf : PAL.berry : PAL.ink;
				ctx.fill();
			}
			return;
		}
		const py = this.h - this.chromeBottom - 70;
		for (let i = 0; i < 3; i++) {
			ctx.fillStyle = "rgba(255,255,255,0.08)";
			ctx.fillRect(20 + i * ((this.w - 40) / 3), 80, (this.w - 50) / 3, py);
		}
		for (const o of this.obs) {
			const lw = (this.w - 40) / 3;
			fillRound(ctx, 24 + o.lane * lw, o.y, lw - 16, 22, 6, PAL.berry);
		}
		const lw = (this.w - 40) / 3;
		fillRound(ctx, 24 + this.lane * lw + 10, py, lw - 36, 26, 6, PAL.gold);
	}
};
function goKart() {
	return new GoKart();
}
function monsterTruck() {
	return new MonsterTruck();
}
function animalRacing() {
	return new AnimalRace();
}
function offRoad() {
	return new OffRoad();
}
function miniFormula() {
	return new Formula();
}
var Jungle = class extends Game {
	x = 40;
	y = 0;
	vy = 0;
	cam = 0;
	plats = [];
	goalX = 1800;
	reset(diff) {
		this.begin(diff, 3);
		this.x = 40;
		this.vy = 0;
		this.cam = 0;
		const base = this.h - this.chromeBottom - 80;
		this.plats = [
			{
				x: 0,
				y: base,
				w: 220
			},
			{
				x: 280,
				y: base - 30,
				w: 140
			},
			{
				x: 480,
				y: base - 80,
				w: 120
			},
			{
				x: 680,
				y: base - 20,
				w: 160
			},
			{
				x: 900,
				y: base - 90,
				w: 110
			},
			{
				x: 1080,
				y: base - 40,
				w: 180
			},
			{
				x: 1340,
				y: base - 100,
				w: 120
			},
			{
				x: 1540,
				y: base,
				w: 280
			}
		];
		if (diff === "beginner") this.plats.forEach((p) => p.w += 30);
		this.goalX = 1700;
		this.y = base - 40;
		this.info = "Jump across the jungle to the flag.";
	}
	floorAt(x) {
		let best = -1;
		for (const p of this.plats) if (x > p.x && x < p.x + p.w) best = Math.max(best, p.y);
		return best;
	}
	update(dt, input) {
		const sp = 180 * (this.diff === "beginner" ? 1.05 : 1);
		this.x += input.ax * sp * dt;
		this.x = Math.max(10, this.x);
		const ground = this.floorAt(this.x);
		const on = ground > 0 && this.y >= ground - 28 && this.vy >= 0 && this.y < ground + 8;
		if ((input.actionJust || input.justDown) && on) {
			this.vy = -560;
			this.tapJump();
		}
		this.vy += 1400 * dt;
		this.y += this.vy * dt;
		if (ground > 0 && this.y > ground - 24 && this.vy >= 0) {
			this.y = ground - 24;
			this.vy = 0;
		}
		if (this.y > this.h + 40) {
			this.hurt();
			this.x = Math.max(20, this.x - 80);
			this.y = (this.floorAt(this.x) || this.h / 2) - 30;
			this.vy = 0;
		}
		this.cam = clamp(this.x - 80, 0, this.goalX);
		this.progress = clamp(this.x / this.goalX, 0, 1);
		this.points = Math.floor(this.progress * 80);
		if (this.x >= this.goalX) {
			this.points = 130;
			this.win();
		}
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#8fd8ff", "#b7f0a8");
		ctx.save();
		ctx.translate(-this.cam, 0);
		for (const p of this.plats) fillRound(ctx, p.x, p.y, p.w, 18, 8, "#2f8f45");
		ctx.fillStyle = PAL.gold;
		ctx.fillRect(this.goalX, (this.floorAt(this.goalX) || 200) - 70, 8, 70);
		ctx.fillStyle = PAL.berry;
		ctx.beginPath();
		ctx.moveTo(this.goalX + 8, (this.floorAt(this.goalX) || 200) - 70);
		ctx.lineTo(this.goalX + 36, (this.floorAt(this.goalX) || 200) - 56);
		ctx.lineTo(this.goalX + 8, (this.floorAt(this.goalX) || 200) - 42);
		ctx.fill();
		drawPup(ctx, this.x, this.y, 22, "happy");
		ctx.restore();
	}
};
var Dino = class extends Game {
	eggs = [];
	warn = 0;
	cycle = 0;
	hiding = false;
	got = 0;
	goal = 6;
	reset(diff) {
		this.begin(diff, 3);
		this.goal = diff === "beginner" ? 5 : 7;
		this.eggs = Array.from({ length: this.goal }, (_, i) => ({
			x: 50 + i * 97 % Math.max(80, this.w - 80),
			y: 160 + i * 53 % Math.max(80, this.h - this.chromeBottom - 220),
			got: false
		}));
		this.got = 0;
		this.cycle = 0;
		this.warn = 0;
		this.info = "Hold still to hide when the shadow falls. Tap eggs when it is safe.";
	}
	update(dt, input) {
		this.cycle += dt * this.rate;
		const beat = this.cycle % 3.2;
		this.warn = beat > 2.1 ? (beat - 2.1) / 1.1 : 0;
		this.hiding = input.down && this.warn > 0;
		if (beat > 3.05 && beat < 3.15 && this.warn > .7 && !input.down) this.hurt();
		if (input.justDown && this.warn === 0) {
			const egg = this.eggs.find((e) => !e.got && Math.hypot(input.px - e.x, input.py - e.y) < 28);
			if (egg) {
				egg.got = true;
				this.got += 1;
				this.addScore(16, egg.x, egg.y);
				this.progress = this.got / this.goal;
				if (this.got >= this.goal) {
					this.addScore(30, this.w / 2, 80);
					this.win();
				}
			}
		}
		this.info = this.warn > 0 ? "Hide! Hold your finger down." : "Tap the eggs.";
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#b7e38a", "#efe0b0");
		if (this.warn > 0) {
			ctx.fillStyle = `rgba(28,43,74,${.15 + this.warn * .35})`;
			ctx.beginPath();
			ctx.ellipse(this.w / 2, this.h / 2, 70 + this.warn * 40, 30, 0, 0, Math.PI * 2);
			ctx.fill();
			label(ctx, "STOMP", this.w / 2, 80, 20, PAL.ink);
		}
		for (const e of this.eggs) {
			if (e.got) continue;
			ctx.fillStyle = PAL.cream;
			ctx.beginPath();
			ctx.ellipse(e.x, e.y, 12, 16, 0, 0, Math.PI * 2);
			ctx.fill();
			ctx.strokeStyle = PAL.goldDeep;
			ctx.stroke();
		}
		drawPup(ctx, 56, this.h - this.chromeBottom - 50, 24, this.hiding ? "focus" : "happy");
	}
};
var Treasure = class extends Game {
	cols = 5;
	rows = 4;
	treasures = /* @__PURE__ */ new Set();
	dug = /* @__PURE__ */ new Set();
	found = 0;
	digs = 0;
	maxDigs = 10;
	reset(diff) {
		this.begin(diff, 1);
		this.lives = 1;
		this.cols = 5;
		this.rows = 4;
		this.treasures = /* @__PURE__ */ new Set();
		while (this.treasures.size < 3) this.treasures.add(Math.floor(Math.random() * this.cols * this.rows));
		this.dug = /* @__PURE__ */ new Set();
		this.found = 0;
		this.digs = 0;
		this.maxDigs = diff === "beginner" ? 12 : diff === "advanced" ? 8 : 10;
		this.info = "Dig for 3 treasures. Warm means one is close.";
	}
	geom() {
		const size = Math.min(68, (this.w - 24) / this.cols);
		return {
			size,
			ox: (this.w - size * this.cols) / 2,
			oy: 120
		};
	}
	hint(i) {
		const tr = [...this.treasures];
		let best = 99;
		for (const t of tr) {
			const ar = Math.floor(i / this.cols);
			const ac = i % this.cols;
			const br = Math.floor(t / this.cols);
			const bc = t % this.cols;
			best = Math.min(best, Math.abs(ar - br) + Math.abs(ac - bc));
		}
		if (best === 0) return "Found";
		if (best === 1) return "Hot";
		if (best === 2) return "Warm";
		return "Cold";
	}
	update(_dt, input) {
		if (!input.justDown) return;
		const { size, ox, oy } = this.geom();
		const c = Math.floor((input.px - ox) / size);
		const r = Math.floor((input.py - oy) / size);
		if (c < 0 || r < 0 || c >= this.cols || r >= this.rows) return;
		const i = r * this.cols + c;
		if (this.dug.has(i)) return;
		this.dug.add(i);
		this.digs += 1;
		if (this.treasures.has(i)) {
			this.found += 1;
			this.addScore(25, input.px, input.py);
			this.progress = this.found / 3;
			if (this.found >= 3) {
				this.addScore(40, this.w / 2, 70);
				this.win();
			}
		} else if (this.digs >= this.maxDigs) {
			this.mode = "lose";
			this.fx.push("lose");
		}
		this.info = `${this.found}/3 treasures. Digs left ${Math.max(0, this.maxDigs - this.digs)}.`;
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#e7d3a1", "#c4a574");
		const { size, ox, oy } = this.geom();
		for (let i = 0; i < this.cols * this.rows; i++) {
			const r = Math.floor(i / this.cols);
			const c = i % this.cols;
			const dug = this.dug.has(i);
			fillRound(ctx, ox + c * size + 4, oy + r * size + 4, size - 8, size - 8, 8, dug ? "#efe2c4" : "#a9743a");
			if (dug) label(ctx, this.treasures.has(i) ? "★" : this.hint(i), ox + c * size + size / 2, oy + r * size + size / 2, 12, PAL.ink);
		}
	}
};
var Temple = class extends Game {
	pads = [
		"Sun",
		"Moon",
		"Leaf",
		"Star"
	];
	seq = [];
	show = 0;
	inputAt = 0;
	roundN = 0;
	goal = 4;
	playing = false;
	reset(diff) {
		this.begin(diff, 3);
		this.goal = diff === "beginner" ? 3 : diff === "advanced" ? 6 : 4;
		this.roundN = 0;
		this.seq = [];
		this.nextRound();
	}
	nextRound() {
		this.seq.push(Math.floor(Math.random() * 4));
		this.show = 0;
		this.inputAt = 0;
		this.playing = false;
		this.info = "Watch the rune order.";
	}
	update(dt, input) {
		if (!this.playing) {
			this.show += dt;
			const step = .7 / this.rate;
			if (this.show > step * (this.seq.length + 1)) {
				this.playing = true;
				this.info = "Your turn. Repeat the runes.";
			}
			return;
		}
		if (!input.justDown) return;
		const rects = this.rects();
		const i = rects.findIndex((r) => hitRect(input.px, input.py, r));
		if (i < 0) return;
		if (i !== this.seq[this.inputAt]) {
			this.hurt();
			this.inputAt = 0;
			this.playing = false;
			this.show = 0;
			return;
		}
		this.inputAt += 1;
		this.fx.push("ok");
		this.addScore(8, rects[i].x, rects[i].y);
		if (this.inputAt >= this.seq.length) {
			this.roundN += 1;
			this.progress = this.roundN / this.goal;
			if (this.roundN >= this.goal) {
				this.addScore(40, this.w / 2, 80);
				this.win();
			} else this.nextRound();
		}
	}
	rects() {
		const s = Math.min(120, (this.w - 48) / 2);
		const ox = (this.w - s * 2 - 12) / 2;
		const oy = 160;
		return [
			0,
			1,
			2,
			3
		].map((i) => ({
			x: ox + i % 2 * (s + 12),
			y: oy + Math.floor(i / 2) * (s * .7 + 12),
			w: s,
			h: s * .62
		}));
	}
	lit() {
		if (this.playing) return -1;
		const step = .7 / this.rate;
		const idx = Math.floor(this.show / step) - 0;
		if (idx < 0 || idx >= this.seq.length) return -1;
		if (this.show % step > step * .7) return -1;
		return this.seq[idx] ?? -1;
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#d8c8ff", "#1b2a4a");
		const colors = [
			PAL.gold,
			PAL.lagoon,
			PAL.leaf,
			PAL.berry
		];
		const on = this.lit();
		this.rects().forEach((r, i) => {
			fillRound(ctx, r.x, r.y, r.w, r.h, 16, on === i ? colors[i] : PAL.ink);
			label(ctx, this.pads[i], r.x + r.w / 2, r.y + r.h / 2, 18, on === i ? PAL.ink : PAL.cream);
		});
	}
};
var Guardian = class extends Game {
	pests = [];
	spawn = .4;
	got = 0;
	goal = 12;
	reset(diff) {
		this.begin(diff, 3);
		this.goal = diff === "beginner" ? 8 : 12;
		this.pests = [];
		this.got = 0;
		this.spawn = .5;
		this.info = "Tap pests before they reach the tree.";
	}
	update(dt, input) {
		this.spawn -= dt;
		if (this.spawn <= 0) {
			this.spawn = (this.diff === "advanced" ? .7 : 1.05) / this.rate;
			this.pests.push({
				x: this.w + 10,
				y: 120 + Math.random() * (this.h - this.chromeBottom - 180)
			});
		}
		const speed = 80 * this.rate;
		this.pests = this.pests.filter((p) => {
			p.x -= speed * dt;
			if (p.x < 70) {
				this.hurt();
				return false;
			}
			return true;
		});
		if (input.justDown) {
			const hit = this.pests.findIndex((p) => Math.hypot(input.px - p.x, input.py - p.y) < 28);
			if (hit >= 0) {
				const p = this.pests[hit];
				this.pests.splice(hit, 1);
				this.got += 1;
				this.addScore(10, p.x, p.y);
				this.progress = this.got / this.goal;
				if (this.got >= this.goal) {
					this.addScore(30, 80, 120);
					this.win();
				}
			}
		}
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#c6f0ff", "#b7e89a");
		ctx.fillStyle = "#8d5a32";
		ctx.fillRect(30, 100, 26, this.h - 140);
		ctx.fillStyle = PAL.leafDeep;
		ctx.beginPath();
		ctx.arc(43, 110, 36, 0, Math.PI * 2);
		ctx.fill();
		for (const p of this.pests) {
			ctx.fillStyle = PAL.berry;
			ctx.beginPath();
			ctx.arc(p.x, p.y, 14, 0, Math.PI * 2);
			ctx.fill();
		}
		drawStar(ctx, 43, 80, 10);
	}
};
function jungleExplorer() {
	return new Jungle();
}
function dinosaurIsland() {
	return new Dino();
}
function treasureHunter() {
	return new Treasure();
}
function lostTemple() {
	return new Temple();
}
function forestGuardian() {
	return new Guardian();
}
var Underwater = class extends Game {
	x = 0;
	y = 0;
	air = 1;
	pearls = [];
	bubbles = [];
	jellies = [];
	got = 0;
	goal = 8;
	reset(diff) {
		this.begin(diff, 3);
		this.goal = diff === "beginner" ? 6 : 8;
		this.x = this.w / 2;
		this.y = 120;
		this.air = 1;
		this.got = 0;
		this.pearls = Array.from({ length: 4 }, () => this.spot());
		this.bubbles = Array.from({ length: 2 }, () => this.spot());
		this.jellies = Array.from({ length: diff === "advanced" ? 3 : 2 }, () => ({
			...this.spot(),
			vy: 30 + Math.random() * 40
		}));
		this.info = "Collect pearls. Grab bubbles for air.";
	}
	spot() {
		return {
			x: 30 + Math.random() * (this.w - 60),
			y: 100 + Math.random() * (this.h - this.chromeBottom - 150)
		};
	}
	update(dt, input) {
		const sp = 180;
		const moving = Math.abs(input.ax) + Math.abs(input.ay) > .2;
		this.x = clamp(this.x + input.ax * sp * dt, 18, this.w - 18);
		this.y = clamp(this.y + input.ay * sp * dt, 70, this.h - this.chromeBottom - 18);
		this.air -= dt * (moving ? .07 : .035) * this.rate;
		if (this.y < 90) this.air = Math.min(1, this.air + dt * .4);
		const take = (list, r) => {
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
			this.air = Math.min(1, this.air + .35);
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
	paint(ctx) {
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
};
var Dolphin = class extends Game {
	y = 200;
	vy = 0;
	rings = [];
	mines = [];
	got = 0;
	goal = 8;
	scroll = 0;
	reset(diff) {
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
	update(dt, input) {
		if (input.flapJust || input.justDown) {
			this.vy = -320;
			this.tapJump();
		}
		this.vy += 700 * dt;
		this.y += this.vy * dt;
		const speed = 150 * this.rate;
		if (this.rings.length < 3) {
			this.rings.push({
				x: this.scroll,
				y: 120 + Math.random() * (this.h - this.chromeBottom - 200),
				got: false
			});
			if (Math.random() < .7) this.mines.push({
				x: this.scroll + 40,
				y: 100 + Math.random() * (this.h - 220)
			});
			this.scroll += 240;
		}
		for (const r of this.rings) r.x -= speed * dt;
		for (const m of this.mines) m.x -= speed * dt;
		this.scroll -= speed * dt;
		for (const r of this.rings) if (!r.got && Math.abs(r.x - 80) < 20 && Math.abs(r.y - this.y) < 34) {
			r.got = true;
			this.got += 1;
			this.addScore(12, r.x, r.y);
		}
		for (const m of this.mines) if (Math.hypot(m.x - 80, m.y - this.y) < 22) {
			this.hurt();
			m.x = -99;
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
	paint(ctx) {
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
};
var FISH = [
	{
		name: "Striped",
		color: PAL.gold
	},
	{
		name: "Round",
		color: PAL.berry
	},
	{
		name: "Tiny",
		color: PAL.leaf
	},
	{
		name: "Long",
		color: PAL.royal
	}
];
var OceanPhoto = class extends Game {
	want = 0;
	fish = [];
	got = 0;
	goal = 6;
	reset(diff) {
		this.begin(diff, 3);
		this.goal = diff === "beginner" ? 5 : 7;
		this.got = 0;
		this.want = 0;
		this.fish = Array.from({ length: 6 }, () => this.make());
		this.info = `Photograph the ${FISH[0].name} fish.`;
	}
	make() {
		return {
			kind: Math.floor(Math.random() * FISH.length),
			x: Math.random() * this.w,
			y: 110 + Math.random() * (this.h - this.chromeBottom - 180),
			vx: 40 + Math.random() * 70
		};
	}
	update(dt, input) {
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
			this.info = `Photograph the ${FISH[this.want].name} fish.`;
			if (this.got >= this.goal) {
				this.addScore(24, this.w / 2, 80);
				this.win();
			}
		} else this.hurt();
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#1a8fc4", "#0a3e66");
		const want = FISH[this.want];
		fillRound(ctx, 16, 70, 120, 36, 10, PAL.cream);
		label(ctx, want.name, 76, 88, 14, want.color);
		for (const f of this.fish) {
			ctx.fillStyle = FISH[f.kind].color;
			ctx.beginPath();
			ctx.ellipse(f.x, f.y, f.kind === 3 ? 22 : 16, f.kind === 1 ? 16 : 10, 0, 0, Math.PI * 2);
			ctx.fill();
		}
	}
};
var FishGrow = class extends Game {
	x = 0;
	y = 0;
	size = 14;
	goal = 28;
	bits = [];
	big = [];
	reset(diff) {
		this.begin(diff, 3);
		this.x = this.w / 2;
		this.y = this.h / 2;
		this.size = 12;
		this.goal = diff === "beginner" ? 24 : 30;
		this.bits = Array.from({ length: 8 }, () => this.bit(8));
		this.big = Array.from({ length: diff === "advanced" ? 3 : 2 }, () => ({
			x: Math.random() * this.w,
			y: 100 + Math.random() * 200,
			vx: 50 * (Math.random() < .5 ? -1 : 1),
			vy: 30 * (Math.random() < .5 ? -1 : 1)
		}));
		this.info = "Eat smaller fish. Avoid bigger ones.";
	}
	bit(r) {
		return {
			x: Math.random() * this.w,
			y: 90 + Math.random() * (this.h - 180),
			r
		};
	}
	update(dt, input) {
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
			if (Math.hypot(b.x - this.x, b.y - this.y) < 20 + this.size * .3) this.hurt();
		}
		this.progress = clamp((this.size - 12) / (this.goal - 12), 0, 1);
		if (this.size >= this.goal) {
			this.addScore(36, this.x, this.y);
			this.win();
		}
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#1478b8", "#0a3048");
		for (const b of this.bits) {
			ctx.fillStyle = b.r < this.size ? PAL.gold : PAL.berry;
			ctx.beginPath();
			ctx.arc(b.x, b.y, Math.max(4, b.r * .4), 0, Math.PI * 2);
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
		ctx.ellipse(this.x, this.y, this.size, this.size * .62, 0, 0, Math.PI * 2);
		ctx.fill();
	}
};
var Coral = class extends Game {
	n = 3;
	pattern = [];
	mine = [];
	hide = true;
	colors = [
		PAL.berry,
		PAL.gold,
		PAL.leaf,
		PAL.royal
	];
	reset(diff) {
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
		return {
			size,
			ox: (this.w - size * this.n) / 2,
			oy: this.hide && this.time > 2 ? 150 : 250
		};
	}
	update(_dt, input) {
		if (this.hide && this.time < 2.2) return;
		if (!input.justDown) return;
		const check = choiceGrid(this.w, this.h, this.chromeBottom, 1)[0];
		if (hitRect(input.px, input.py, check)) {
			if (this.mine.every((v, i) => v === this.pattern[i])) {
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
	paint(ctx) {
		sky(ctx, this.w, this.h, "#0c6e86", "#083044");
		const { size, ox, oy } = this.geom();
		const drawGrid = (cells, x0, y0, s) => {
			cells.forEach((v, i) => {
				const r = Math.floor(i / this.n);
				const c = i % this.n;
				ctx.fillStyle = this.colors[v % this.colors.length];
				ctx.beginPath();
				ctx.arc(x0 + c * s + s / 2, y0 + r * s + s / 2, s * .32, 0, Math.PI * 2);
				ctx.fill();
			});
		};
		if (!this.hide || this.time < 2.2) {
			label(ctx, "Guide", this.w / 2, 90, 14, PAL.foam);
			const gs = 28;
			drawGrid(this.pattern, (this.w - gs * this.n) / 2, 104, gs);
		} else label(ctx, "Guide hidden", this.w / 2, 100, 16, PAL.foam);
		drawGrid(this.mine, ox, oy, size);
		const check = choiceGrid(this.w, this.h, this.chromeBottom, 1)[0];
		paintButton(ctx, check, "Check reef", PAL.gold, true);
	}
};
function underwater() {
	return new Underwater();
}
function dolphinRescue() {
	return new Dolphin();
}
function oceanExplorer() {
	return new OceanPhoto();
}
function fishAdventure() {
	return new FishGrow();
}
function coralReef() {
	return new Coral();
}
var SpaceExplorer = class extends Game {
	x = 0;
	y = 0;
	fuel = 1;
	cans = [];
	rocks = [];
	tx = 0;
	ty = 0;
	reset(diff) {
		this.begin(diff, 3);
		this.x = 50;
		this.y = this.h / 2;
		this.fuel = diff === "beginner" ? 1 : .8;
		this.tx = this.w - 50;
		this.ty = 140;
		this.cans = Array.from({ length: 3 }, () => ({
			x: 80 + Math.random() * (this.w - 140),
			y: 100 + Math.random() * (this.h - 240)
		}));
		this.rocks = Array.from({ length: diff === "advanced" ? 6 : 4 }, () => ({
			x: Math.random() * this.w,
			y: 90 + Math.random() * (this.h - 200),
			vx: 20 + Math.random() * 40
		}));
		this.info = "Fly to the station. Moving spends fuel.";
	}
	update(dt, input) {
		if (Math.abs(input.ax) + Math.abs(input.ay) > .15 && this.fuel > 0) {
			this.x = clamp(this.x + input.ax * 170 * dt, 16, this.w - 16);
			this.y = clamp(this.y + input.ay * 170 * dt, 70, this.h - this.chromeBottom - 16);
			this.fuel -= dt * .12 * this.rate;
		}
		this.cans = this.cans.filter((c) => {
			if (Math.hypot(c.x - this.x, c.y - this.y) < 24) {
				this.fuel = Math.min(1, this.fuel + .4);
				this.fx.push("ok");
				return false;
			}
			return true;
		});
		for (const r of this.rocks) {
			r.x += r.vx * dt;
			if (r.x > this.w) r.x = -10;
			if (Math.hypot(r.x - this.x, r.y - this.y) < 22) {
				this.hurt();
				r.x = -20;
			}
		}
		this.progress = 1 - Math.min(1, Math.hypot(this.tx - this.x, this.ty - this.y) / this.w);
		this.info = `Fuel ${Math.round(Math.max(0, this.fuel) * 100)}%`;
		if (this.fuel <= 0) {
			this.mode = "lose";
			this.fx.push("lose");
		}
		if (Math.hypot(this.tx - this.x, this.ty - this.y) < 28) {
			this.addScore(80, this.tx, this.ty);
			this.win();
		}
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#10182e", "#24315f");
		for (let i = 0; i < 20; i++) drawStar(ctx, i * 97 % this.w, i * 53 % 60 + 70, 3, PAL.foam);
		for (const c of this.cans) fillRound(ctx, c.x - 8, c.y - 12, 16, 24, 3, PAL.gold);
		for (const r of this.rocks) {
			ctx.fillStyle = "#9aa3b5";
			ctx.beginPath();
			ctx.arc(r.x, r.y, 12, 0, Math.PI * 2);
			ctx.fill();
		}
		fillRound(ctx, this.tx - 16, this.ty - 16, 32, 32, 6, PAL.leaf);
		label(ctx, "Dock", this.tx, this.ty, 10, PAL.ink);
		fillRound(ctx, this.x - 12, this.y - 8, 24, 16, 4, PAL.foam);
	}
};
var RocketBuilder = class extends Game {
	phaseIn = "build";
	order = [
		"Engine",
		"Tank",
		"Nose"
	];
	placed = [];
	tray = [];
	x = 0;
	gates = [];
	got = 0;
	reset(diff) {
		this.begin(diff, 3);
		this.phaseIn = "build";
		this.placed = [];
		this.tray = [...this.order].sort(() => Math.random() - .5);
		this.x = this.w / 2;
		this.got = 0;
		this.gates = Array.from({ length: diff === "beginner" ? 5 : 7 }, (_, i) => ({
			y: -i * 220,
			open: 40 + Math.random() * (this.w - 120),
			passed: false
		}));
		this.info = "Tap parts from engine, then tank, then nose.";
	}
	update(dt, input) {
		if (this.phaseIn === "build") {
			if (!input.justDown) return;
			const w = 110;
			const y = this.h - this.chromeBottom - 80;
			const i = this.tray.findIndex((_, idx) => {
				const x = 16 + idx * 118;
				return input.px > x && input.px < x + w && input.py > y && input.py < y + 48;
			});
			if (i < 0) return;
			const part = this.tray[i];
			if (part !== this.order[this.placed.length]) {
				this.hurt();
				return;
			}
			this.tray.splice(i, 1);
			this.placed.push(part);
			this.addScore(15, this.w / 2, 160);
			if (this.placed.length === 3) {
				this.phaseIn = "fly";
				this.info = "Steer through the rings.";
			}
			return;
		}
		this.x = clamp(this.x + input.ax * 220 * dt, 30, this.w - 30);
		const speed = 140 * this.rate;
		for (const g of this.gates) {
			g.y += speed * dt;
			if (!g.passed && g.y > this.h * .62) {
				g.passed = true;
				if (Math.abs(this.x - (g.open + 30)) > 46) this.hurt();
				else {
					this.got += 1;
					this.addScore(12, this.x, g.y);
				}
			}
		}
		this.progress = this.got / this.gates.length;
		if (this.got >= this.gates.length) {
			this.addScore(24, this.x, 100);
			this.win();
		}
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#141b36", "#3a4c86");
		if (this.phaseIn === "build") {
			this.placed.forEach((p, i) => {
				fillRound(ctx, this.w / 2 - 40, 220 - i * 48, 80, 40, 8, PAL.gold);
				label(ctx, p, this.w / 2, 240 - i * 48, 14, PAL.ink);
			});
			const y = this.h - this.chromeBottom - 80;
			this.tray.forEach((p, i) => {
				fillRound(ctx, 16 + i * 118, y, 110, 48, 10, PAL.foam);
				label(ctx, p, 16 + i * 118 + 55, y + 24, 14, PAL.ink);
			});
			return;
		}
		for (const g of this.gates) {
			ctx.strokeStyle = PAL.gold;
			ctx.lineWidth = 6;
			ctx.strokeRect(g.open, g.y, 60, 16);
		}
		fillRound(ctx, this.x - 12, this.h * .62, 24, 40, 6, PAL.foam);
	}
};
var PlanetHop = class extends Game {
	meter = 0;
	dir = 1;
	hop = 0;
	goal = 4;
	good0 = .4;
	good1 = .62;
	reset(diff) {
		this.begin(diff, 3);
		this.goal = 4;
		this.hop = 0;
		this.meter = 0;
		this.dir = 1;
		const width = diff === "beginner" ? .28 : diff === "advanced" ? .12 : .18;
		this.good0 = .55 - width / 2;
		this.good1 = .55 + width / 2;
		this.info = "Tap while the marker is in the green.";
	}
	update(dt, input) {
		this.meter += dt * this.dir * (.7 + this.rate);
		if (this.meter > 1) {
			this.meter = 1;
			this.dir = -1;
		}
		if (this.meter < 0) {
			this.meter = 0;
			this.dir = 1;
		}
		if (!(input.justDown || input.actionJust)) return;
		if (this.meter >= this.good0 && this.meter <= this.good1) {
			this.hop += 1;
			this.addScore(22, this.w / 2, 160);
			this.progress = this.hop / this.goal;
			if (this.hop >= this.goal) {
				this.addScore(28, this.w / 2, 120);
				this.win();
			}
		} else this.hurt();
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#12182e", "#2a3566");
		const colors = [
			PAL.lagoon,
			PAL.leaf,
			PAL.gold,
			PAL.berry,
			PAL.foam
		];
		for (let i = 0; i <= this.goal; i++) {
			const x = 40 + i * (this.w - 80) / this.goal;
			ctx.fillStyle = colors[i % colors.length];
			ctx.beginPath();
			ctx.arc(x, this.h * .42, i === this.hop ? 22 : 14, 0, Math.PI * 2);
			ctx.fill();
		}
		meterBar(ctx, 30, this.h - this.chromeBottom - 70, this.w - 60, 18, this.meter, this.good0, this.good1);
		heroText(ctx, `${this.hop}/${this.goal}`, this.w / 2, 90, 28, PAL.foam);
	}
};
var Asteroids = class extends Game {
	x = 0;
	y = 0;
	rocks = [];
	stars = [];
	left = 25;
	reset(diff) {
		this.begin(diff, 3);
		this.x = this.w / 2;
		this.y = this.h / 2;
		this.left = diff === "beginner" ? 20 : diff === "advanced" ? 30 : 25;
		this.rocks = Array.from({ length: diff === "advanced" ? 7 : 5 }, () => ({
			x: Math.random() * this.w,
			y: Math.random() * this.h * .4,
			vx: -40 - Math.random() * 80,
			vy: 20 + Math.random() * 50
		}));
		this.stars = Array.from({ length: 3 }, () => ({
			x: Math.random() * this.w,
			y: 90 + Math.random() * 200
		}));
		this.info = "Survive the shower.";
	}
	update(dt, input) {
		this.left -= dt;
		this.x = clamp(this.x + input.ax * 220 * dt, 16, this.w - 16);
		this.y = clamp(this.y + input.ay * 220 * dt, 70, this.h - this.chromeBottom - 16);
		for (const r of this.rocks) {
			r.x += r.vx * dt * this.rate;
			r.y += r.vy * dt;
			if (r.x < -20) r.x = this.w + 10;
			if (r.y > this.h) r.y = 70;
			if (Math.hypot(r.x - this.x, r.y - this.y) < 24) {
				this.hurt();
				r.x = this.w + 20;
			}
		}
		this.stars = this.stars.filter((s) => {
			if (Math.hypot(s.x - this.x, s.y - this.y) < 20) {
				this.addScore(10, s.x, s.y);
				return false;
			}
			return true;
		});
		this.progress = 1 - Math.max(0, this.left) / 25;
		this.info = `Hold on for ${Math.max(0, Math.ceil(this.left))}s`;
		if (this.left <= 0) {
			this.addScore(40, this.x, this.y);
			this.win();
		}
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#070b16", "#1c2748");
		for (const s of this.stars) drawStar(ctx, s.x, s.y, 8);
		for (const r of this.rocks) {
			ctx.fillStyle = "#b7c0d4";
			ctx.beginPath();
			ctx.arc(r.x, r.y, 14, 0, Math.PI * 2);
			ctx.fill();
		}
		fillRound(ctx, this.x - 10, this.y - 10, 20, 20, 4, PAL.gold);
	}
};
var AlienRescue = class extends Game {
	x = 0;
	aliens = [];
	rocks = [];
	got = 0;
	goal = 6;
	beam = 0;
	reset(diff) {
		this.begin(diff, 3);
		this.goal = diff === "beginner" ? 5 : 6;
		this.x = this.w / 2;
		this.got = 0;
		this.beam = 0;
		this.aliens = Array.from({ length: this.goal }, () => ({
			x: 40 + Math.random() * (this.w - 80),
			beamed: false
		}));
		this.rocks = [];
		this.info = "Line up and tap Beam.";
	}
	update(dt, input) {
		this.x = clamp(this.x + input.ax * 220 * dt, 24, this.w - 24);
		if (Math.random() < dt * .8 * this.rate) this.rocks.push({
			x: Math.random() * this.w,
			y: -10,
			vy: 90 + 40 * this.rate
		});
		const ground = this.h - this.chromeBottom - 70;
		const target = this.aliens.find((a) => !a.beamed && Math.abs(a.x - this.x) < 28);
		if ((input.action || input.actionJust) && target) this.beam += dt;
		else this.beam = 0;
		if (this.beam > .45 && target) {
			target.beamed = true;
			this.beam = 0;
			this.got += 1;
			this.addScore(16, target.x, ground);
			this.progress = this.got / this.goal;
			if (this.got >= this.goal) {
				this.addScore(30, this.x, 80);
				this.win();
			}
		}
		this.rocks = this.rocks.filter((r) => {
			r.y += r.vy * dt;
			if (Math.hypot(r.x - this.x, r.y - 110) < 20) {
				this.hurt();
				return false;
			}
			return r.y < this.h;
		});
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#10182b", "#241848");
		const ground = this.h - this.chromeBottom - 70;
		ctx.fillStyle = "#3d6b4f";
		ctx.fillRect(0, ground + 10, this.w, 40);
		for (const a of this.aliens) {
			if (a.beamed) continue;
			ctx.fillStyle = PAL.leaf;
			ctx.beginPath();
			ctx.arc(a.x, ground, 12, 0, Math.PI * 2);
			ctx.fill();
		}
		for (const r of this.rocks) {
			ctx.fillStyle = "#d0d6e2";
			ctx.beginPath();
			ctx.arc(r.x, r.y, 8, 0, Math.PI * 2);
			ctx.fill();
		}
		fillRound(ctx, this.x - 18, 96, 36, 16, 4, PAL.foam);
		if (this.beam > 0) {
			ctx.strokeStyle = PAL.gold;
			ctx.lineWidth = 3;
			ctx.beginPath();
			ctx.moveTo(this.x, 112);
			ctx.lineTo(this.x, ground);
			ctx.stroke();
		}
	}
};
function spaceExplorer() {
	return new SpaceExplorer();
}
function rocketBuilder() {
	return new RocketBuilder();
}
function planetHopper() {
	return new PlanetHop();
}
function asteroidDodger() {
	return new Asteroids();
}
function alienRescue() {
	return new AlienRescue();
}
var FarmSim = class extends Game {
	plots = [];
	reset(diff) {
		this.begin(diff, 1);
		this.lives = 1;
		this.plots = Array.from({ length: 6 }, () => ({
			stage: 0,
			t: 0
		}));
		this.info = "Tap to plant, water, then harvest.";
	}
	update(dt, input) {
		const grow = (this.diff === "beginner" ? 1.1 : 1.8) * dt;
		for (const p of this.plots) if (p.stage === 2) p.t += grow;
		if (input.justDown) {
			const rects = this.rects();
			const i = rects.findIndex((r) => hitRect(input.px, input.py, r));
			if (i >= 0) {
				const p = this.plots[i];
				if (p.stage === 0) p.stage = 1;
				else if (p.stage === 1) p.stage = 2;
				else if (p.stage === 2 && p.t >= 1) {
					p.stage = 3;
					this.addScore(18, rects[i].x, rects[i].y);
				}
				this.fx.push("tap");
			}
		}
		const done = this.plots.filter((p) => p.stage === 3).length;
		this.progress = done / this.plots.length;
		this.info = done === this.plots.length ? "Harvest complete." : "Plant, water, wait, harvest.";
		if (done === this.plots.length) {
			this.addScore(30, this.w / 2, 80);
			this.win();
		}
	}
	rects() {
		const cols = 3;
		const size = Math.min(100, (this.w - 36) / cols);
		const ox = (this.w - cols * size) / 2;
		return this.plots.map((_, i) => ({
			x: ox + i % cols * size,
			y: 140 + Math.floor(i / cols) * (size + 8),
			w: size - 8,
			h: size - 8
		}));
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#c6ecff", "#d8f3b0");
		const names = [
			"Dig",
			"Planted",
			"Watered",
			"Done"
		];
		this.rects().forEach((r, i) => {
			const p = this.plots[i];
			fillRound(ctx, r.x, r.y, r.w, r.h, 12, p.stage === 3 ? PAL.leaf : "#8d5a32");
			label(ctx, names[p.stage] ?? "", r.x + r.w / 2, r.y + r.h / 2, 14, PAL.cream);
			if (p.stage === 2) label(ctx, `${Math.floor(p.t * 100)}%`, r.x + r.w / 2, r.y + 16, 12, PAL.gold);
		});
	}
};
var AnimalCare = class extends Game {
	meters = [
		.7,
		.7,
		.7
	];
	names = [
		"Pup",
		"Cat",
		"Bun"
	];
	left = 24;
	reset(diff) {
		this.begin(diff, 3);
		this.meters = [
			.75,
			.7,
			.65
		];
		this.left = diff === "beginner" ? 18 : diff === "advanced" ? 28 : 22;
		this.info = "Feed or play before a heart empties.";
	}
	update(dt, input) {
		const drain = dt * (.08 * this.rate);
		this.meters = this.meters.map((m) => m - drain);
		this.left -= dt;
		if (input.justDown) this.names.forEach((_, i) => {
			const y = 130 + i * 110;
			if (hitRect(input.px, input.py, {
				x: 16,
				y: y + 48,
				w: 100,
				h: 36
			})) {
				this.meters[i] = Math.min(1, (this.meters[i] ?? 0) + .35);
				this.fx.push("ok");
			}
			if (hitRect(input.px, input.py, {
				x: 124,
				y: y + 48,
				w: 100,
				h: 36
			})) {
				this.meters[i] = Math.min(1, (this.meters[i] ?? 0) + .28);
				this.fx.push("ok");
			}
		});
		if (this.meters.some((m) => m <= 0)) {
			this.hurt();
			this.meters = this.meters.map((m) => m <= 0 ? .55 : m);
		} else this.meters = this.meters.map((m) => Math.max(0, m));
		this.points = Math.floor((24 - Math.max(0, this.left)) * 4);
		this.progress = clamp(1 - this.left / 24, 0, 1);
		this.info = `Keep them happy for ${Math.max(0, Math.ceil(this.left))}s`;
		if (this.left <= 0 && this.mode === "play") {
			this.addScore(40, this.w / 2, 80);
			this.win();
		}
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#fff0c8", "#dff5ff");
		this.names.forEach((name, i) => {
			const y = 130 + i * 110;
			fillRound(ctx, 16, y, this.w - 32, 96, 16, PAL.foam);
			label(ctx, name, 70, y + 24, 16, PAL.ink);
			ctx.fillStyle = PAL.line;
			ctx.fillRect(150, y + 16, 120, 10);
			ctx.fillStyle = PAL.leaf;
			ctx.fillRect(150, y + 16, 120 * (this.meters[i] ?? 0), 10);
			fillRound(ctx, 16, y + 48, 100, 36, 10, PAL.gold);
			fillRound(ctx, 124, y + 48, 100, 36, 10, PAL.lagoon);
			label(ctx, "Feed", 66, y + 66, 14, PAL.ink);
			label(ctx, "Play", 174, y + 66, 14, PAL.ink);
		});
	}
};
var Tractor = class extends Game {
	x = 0;
	y = 0;
	cols = 8;
	rows = 6;
	grass = [];
	rocks = /* @__PURE__ */ new Set();
	reset(diff) {
		this.begin(diff, 1);
		this.lives = 1;
		this.cols = 8;
		this.rows = 6;
		this.grass = Array.from({ length: this.cols * this.rows }, () => true);
		this.rocks = /* @__PURE__ */ new Set();
		const n = diff === "advanced" ? 6 : 4;
		while (this.rocks.size < n) {
			const i = Math.floor(Math.random() * this.grass.length);
			this.rocks.add(i);
			this.grass[i] = false;
		}
		this.x = this.w / 2;
		this.y = this.h / 2;
		this.info = "Mow all the tall grass.";
	}
	geom() {
		const size = Math.min((this.w - 20) / this.cols, (this.h - this.chromeBottom - 100) / this.rows);
		return {
			size,
			ox: (this.w - size * this.cols) / 2,
			oy: 90
		};
	}
	update(dt, input) {
		const sp = 160;
		this.x = clamp(this.x + input.ax * sp * dt, 10, this.w - 10);
		this.y = clamp(this.y + input.ay * sp * dt, 80, this.h - this.chromeBottom - 10);
		const { size, ox, oy } = this.geom();
		const c = Math.floor((this.x - ox) / size);
		const r = Math.floor((this.y - oy) / size);
		if (c >= 0 && r >= 0 && c < this.cols && r < this.rows) {
			const i = r * this.cols + c;
			if (this.rocks.has(i)) this.hurt();
			else if (this.grass[i]) {
				this.grass[i] = false;
				this.addScore(4, this.x, this.y);
			}
		}
		const need = this.grass.filter((g, i) => g && !this.rocks.has(i)).length;
		const total = this.grass.length - this.rocks.size;
		this.progress = 1 - need / total;
		if (need === 0) {
			this.addScore(36, this.x, this.y);
			this.win();
		}
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#d8f5b0", "#8dca62");
		const { size, ox, oy } = this.geom();
		for (let i = 0; i < this.grass.length; i++) {
			const r = Math.floor(i / this.cols);
			const x = ox + i % this.cols * size;
			const y = oy + r * size;
			ctx.fillStyle = this.rocks.has(i) ? "#7b8794" : this.grass[i] ? "#2f9e44" : "#d8e2a8";
			ctx.fillRect(x + 1, y + 1, size - 2, size - 2);
		}
		fillRound(ctx, this.x - 12, this.y - 10, 24, 16, 4, PAL.royal);
	}
};
var Harvest = class extends Game {
	fruits = [];
	spawn = .2;
	got = 0;
	goal = 10;
	names = [
		"Apple",
		"Berry",
		"Lemon"
	];
	colors = [
		PAL.berry,
		PAL.grape,
		PAL.gold
	];
	reset(diff) {
		this.begin(diff, 3);
		this.goal = diff === "beginner" ? 8 : 12;
		this.fruits = [];
		this.got = 0;
		this.spawn = .3;
		this.info = "Tap the crate that matches the fruit.";
	}
	update(dt, input) {
		this.spawn -= dt;
		if (this.spawn <= 0 && this.fruits.length < 1) {
			this.spawn = .4;
			this.fruits.push({
				y: 120,
				kind: Math.floor(Math.random() * 3)
			});
		}
		const speed = 70 * this.rate;
		for (const f of this.fruits) f.y += speed * dt;
		const current = this.fruits[0];
		if (current && current.y > this.h - this.chromeBottom - 40) {
			this.hurt();
			this.fruits.shift();
		}
		if (input.justDown && current) {
			const bw = (this.w - 24) / 3;
			const i = Math.floor((input.px - 12) / bw);
			const y = this.h - this.chromeBottom - 90;
			if (i >= 0 && i < 3 && input.py > y) {
				if (i === current.kind) {
					this.got += 1;
					this.addScore(12, input.px, current.y);
					this.fruits.shift();
					this.progress = this.got / this.goal;
					if (this.got >= this.goal) {
						this.addScore(28, this.w / 2, 100);
						this.win();
					}
				} else this.hurt();
			}
		}
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#fff4d2", "#e7f8c8");
		const f = this.fruits[0];
		if (f) {
			ctx.fillStyle = this.colors[f.kind];
			ctx.beginPath();
			ctx.arc(this.w / 2, f.y, 20, 0, Math.PI * 2);
			ctx.fill();
			label(ctx, this.names[f.kind], this.w / 2, f.y - 36, 16, PAL.ink);
		}
		const bw = (this.w - 24) / 3;
		const y = this.h - this.chromeBottom - 90;
		this.names.forEach((name, i) => {
			fillRound(ctx, 12 + i * bw, y, bw - 8, 64, 12, this.colors[i]);
			label(ctx, name, 12 + i * bw + (bw - 8) / 2, y + 32, 14, PAL.ink);
		});
	}
};
var BuildFarm = class extends Game {
	cols = 4;
	rows = 3;
	cells = [];
	tool = 1;
	names = [
		"Clear",
		"Barn",
		"Pen",
		"Pond"
	];
	need = {
		barn: 1,
		pen: 2,
		pond: 1
	};
	reset(diff) {
		this.begin(diff, 1);
		this.lives = 1;
		this.cols = 4;
		this.rows = 3;
		this.cells = Array.from({ length: this.cols * this.rows }, () => 0);
		this.tool = 1;
		this.need = diff === "advanced" ? {
			barn: 2,
			pen: 2,
			pond: 1
		} : {
			barn: 1,
			pen: 2,
			pond: 1
		};
		this.info = `Place ${this.need.barn} barn, ${this.need.pen} pens and ${this.need.pond} pond.`;
	}
	count(kind) {
		return this.cells.filter((c) => c === kind).length;
	}
	update(_dt, input) {
		if (!input.justDown) return;
		if (input.py < 136) {
			const i = Math.floor(input.px / (this.w / 4));
			if (i >= 0 && i < 4) this.tool = i;
			return;
		}
		const size = Math.min(80, (this.w - 20) / this.cols);
		const ox = (this.w - size * this.cols) / 2;
		const oy = 160;
		const c = Math.floor((input.px - ox) / size);
		const r = Math.floor((input.py - oy) / size);
		if (c < 0 || r < 0 || c >= this.cols || r >= this.rows) return;
		this.cells[r * this.cols + c] = this.tool;
		this.fx.push("tap");
		const ok = this.count(1) >= this.need.barn && this.count(2) >= this.need.pen && this.count(3) >= this.need.pond;
		this.progress = (Math.min(this.count(1), this.need.barn) + Math.min(this.count(2), this.need.pen) + Math.min(this.count(3), this.need.pond)) / (this.need.barn + this.need.pen + this.need.pond);
		if (ok) {
			this.addScore(90, this.w / 2, 140);
			this.win();
		}
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#e7f6c8", "#c6e49a");
		const colors = [
			"#c4a574",
			PAL.berry,
			PAL.gold,
			PAL.lagoonDeep
		];
		for (let i = 0; i < 4; i++) {
			fillRound(ctx, 8 + i * (this.w / 4), 96, this.w / 4 - 12, 36, 8, this.tool === i ? PAL.ink : colors[i]);
			label(ctx, this.names[i], 8 + i * (this.w / 4) + (this.w / 4 - 12) / 2, 114, 12, this.tool === i ? PAL.cream : PAL.ink);
		}
		const size = Math.min(80, (this.w - 20) / this.cols);
		const ox = (this.w - size * this.cols) / 2;
		const oy = 160;
		this.cells.forEach((v, i) => {
			const r = Math.floor(i / this.cols);
			const c = i % this.cols;
			fillRound(ctx, ox + c * size + 3, oy + r * size + 3, size - 6, size - 6, 8, colors[v] ?? PAL.foam);
		});
		drawPup(ctx, 40, this.h - 50, 16, "happy");
	}
};
function farmSimulator() {
	return new FarmSim();
}
function animalCare() {
	return new AnimalCare();
}
function tractorAdventure() {
	return new Tractor();
}
function harvestFestival() {
	return new Harvest();
}
function buildYourFarm() {
	return new BuildFarm();
}
var Coloring = class extends Game {
	regions = [];
	color = 0;
	palette = [
		PAL.gold,
		PAL.royal,
		PAL.berry,
		PAL.leaf
	];
	reset(diff) {
		this.begin(diff, 1);
		this.lives = 1;
		const count = diff === "advanced" ? 8 : 6;
		this.regions = Array.from({ length: count }, (_, i) => ({
			x: this.w * (.22 + i % 3 * .28),
			y: 160 + Math.floor(i / 3) * 110,
			r: 36,
			n: i % this.palette.length,
			filled: false
		}));
		this.color = 0;
		this.info = "Pick a colour, then tap shapes with that number.";
	}
	update(_dt, input) {
		if (!input.justDown) return;
		const si = this.palette.map((_, i) => ({
			x: 16 + i * 58,
			y: 88,
			w: 50,
			h: 36
		})).findIndex((r) => hitRect(input.px, input.py, r));
		if (si >= 0) {
			this.color = si;
			return;
		}
		const hit = this.regions.find((rg) => !rg.filled && Math.hypot(input.px - rg.x, input.py - rg.y) < rg.r);
		if (!hit) return;
		if (hit.n !== this.color) {
			this.fx.push("bad");
			return;
		}
		hit.filled = true;
		this.addScore(12, hit.x, hit.y);
		const done = this.regions.filter((r) => r.filled).length;
		this.progress = done / this.regions.length;
		if (done === this.regions.length) {
			this.addScore(36, this.w / 2, 140);
			this.win();
		}
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#ffe4f4", "#fff6e4");
		this.palette.forEach((c, i) => {
			fillRound(ctx, 16 + i * 58, 88, 50, 36, 8, c);
			if (i === this.color) {
				ctx.strokeStyle = PAL.ink;
				ctx.lineWidth = 3;
				ctx.stroke();
			}
			label(ctx, String(i + 1), 41 + i * 58, 106, 14, PAL.ink);
		});
		for (const rg of this.regions) {
			ctx.beginPath();
			ctx.arc(rg.x, rg.y, rg.r, 0, Math.PI * 2);
			ctx.fillStyle = rg.filled ? this.palette[rg.n] : PAL.foam;
			ctx.fill();
			ctx.strokeStyle = PAL.ink;
			ctx.lineWidth = 2;
			ctx.stroke();
			if (!rg.filled) label(ctx, String(rg.n + 1), rg.x, rg.y, 18, PAL.ink);
		}
	}
};
var RobotBuild = class extends Game {
	slots = [
		"Head",
		"Body",
		"Arm",
		"Legs"
	];
	need = [
		"Head",
		"Body",
		"Arm",
		"Legs"
	];
	tray = [
		"Head",
		"Wheel",
		"Body",
		"Arm",
		"Hat",
		"Legs"
	];
	picked = null;
	filled = [
		null,
		null,
		null,
		null
	];
	reset(diff) {
		this.begin(diff, 3);
		this.filled = [
			null,
			null,
			null,
			null
		];
		this.picked = null;
		this.tray = [
			"Head",
			"Wheel",
			"Body",
			"Arm",
			"Hat",
			"Legs"
		].sort(() => Math.random() - .5);
		if (diff === "beginner") this.tray = [...this.need];
		this.info = "Tap a part, then the slot it belongs in.";
	}
	update(_dt, input) {
		if (!input.justDown) return;
		const ti = this.trayRects().findIndex((r) => hitRect(input.px, input.py, r));
		if (ti >= 0) {
			this.picked = this.tray[ti] ?? null;
			this.fx.push("tap");
			return;
		}
		const slots = this.slotRects();
		const si = slots.findIndex((r) => hitRect(input.px, input.py, r));
		if (si < 0 || !this.picked) return;
		if (this.picked !== this.need[si] || this.filled[si]) {
			this.hurt();
			return;
		}
		this.filled[si] = this.picked;
		this.picked = null;
		this.addScore(20, slots[si].x, slots[si].y);
		this.progress = this.filled.filter(Boolean).length / 4;
		if (this.filled.every(Boolean)) {
			this.addScore(40, this.w / 2, 80);
			this.win();
		}
	}
	slotRects() {
		return [
			0,
			1,
			2,
			3
		].map((i) => ({
			x: this.w / 2 - 70,
			y: 110 + i * 58,
			w: 140,
			h: 50
		}));
	}
	trayRects() {
		return this.tray.map((_, i) => ({
			x: 12 + i % 3 * ((this.w - 24) / 3),
			y: this.h - this.chromeBottom - 150 + Math.floor(i / 3) * 52,
			w: (this.w - 36) / 3,
			h: 44
		}));
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#e7f0ff", "#fff6e4");
		this.slotRects().forEach((r, i) => {
			fillRound(ctx, r.x, r.y, r.w, r.h, 10, this.filled[i] ? PAL.leaf : PAL.foam);
			label(ctx, this.filled[i] ?? this.slots[i], r.x + r.w / 2, r.y + r.h / 2, 16, PAL.ink);
		});
		this.trayRects().forEach((r, i) => paintButton(ctx, r, this.tray[i] ?? "", this.picked === this.tray[i] ? PAL.gold : PAL.foam));
	}
};
var DressUp = class extends Game {
	theme = "Sunny day";
	hat = "none";
	top = "none";
	shoes = "none";
	hats = [
		"cap",
		"bow",
		"crown"
	];
	tops = [
		"shirt",
		"dress",
		"jacket"
	];
	shoeChoices = [
		"boots",
		"sandals",
		"trainers"
	];
	reset(diff) {
		this.begin(diff, 1);
		this.lives = 1;
		const t = [
			{
				name: "Sunny day",
				hat: "cap",
				top: "shirt",
				shoes: "sandals"
			},
			{
				name: "Party",
				hat: "crown",
				top: "dress",
				shoes: "boots"
			},
			{
				name: "Explorer",
				hat: "bow",
				top: "jacket",
				shoes: "trainers"
			}
		][diff === "advanced" ? 2 : diff === "intermediate" ? 1 : 0];
		this.theme = t.name;
		this.needHat = t.hat;
		this.needTop = t.top;
		this.needShoes = t.shoes;
		this.hat = "none";
		this.top = "none";
		this.shoes = "none";
		this.info = `Dress for: ${this.theme}.`;
	}
	needHat = "cap";
	needTop = "shirt";
	needShoes = "sandals";
	update(_dt, input) {
		if (!input.justDown) return;
		const rows = [
			{
				y: 250,
				items: this.hats,
				set: (v) => this.hat = v
			},
			{
				y: 310,
				items: this.tops,
				set: (v) => this.top = v
			},
			{
				y: 370,
				items: this.shoeChoices,
				set: (v) => this.shoes = v
			}
		];
		for (const row of rows) row.items.forEach((item, i) => {
			const r = {
				x: 16 + i * 110,
				y: row.y,
				w: 100,
				h: 44
			};
			if (hitRect(input.px, input.py, r)) row.set(item);
		});
		const done = {
			x: this.w / 2 - 70,
			y: this.h - this.chromeBottom - 70,
			w: 140,
			h: 48
		};
		if (hitRect(input.px, input.py, done)) {
			if (this.hat === this.needHat && this.top === this.needTop && this.shoes === this.needShoes) {
				this.addScore(100, this.w / 2, 180);
				this.win();
			} else {
				this.info = `Need ${this.needHat}, ${this.needTop} and ${this.needShoes}.`;
				this.fx.push("bad");
			}
		}
		const have = [
			this.hat === this.needHat,
			this.top === this.needTop,
			this.shoes === this.needShoes
		].filter(Boolean).length;
		this.progress = have / 3;
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#ffe4f2", "#fff6e4");
		label(ctx, this.theme, this.w / 2, 78, 22, PAL.ink);
		drawPup(ctx, this.w / 2, 170, 40, "happy");
		label(ctx, `${this.hat} · ${this.top} · ${this.shoes}`, this.w / 2, 220, 14, PAL.inkSoft);
		[
			this.hats,
			this.tops,
			this.shoeChoices
		].forEach((items, ri) => {
			items.forEach((item, i) => {
				const on = [
					this.hat,
					this.top,
					this.shoes
				][ri] === item;
				fillRound(ctx, 16 + i * 110, 250 + ri * 60, 100, 44, 10, on ? PAL.gold : PAL.foam);
				label(ctx, item, 66 + i * 110, 272 + ri * 60, 12, PAL.ink);
			});
		});
		paintButton(ctx, {
			x: this.w / 2 - 70,
			y: this.h - this.chromeBottom - 70,
			w: 140,
			h: 48
		}, "Done", PAL.leaf, true);
	}
};
var Cake = class extends Game {
	recipe = [
		"Sponge",
		"Berry",
		"Cream",
		"Star"
	];
	made = [];
	tray = [
		"Star",
		"Cream",
		"Sponge",
		"Berry",
		"Chilli"
	];
	reset(diff) {
		this.begin(diff, 3);
		this.recipe = diff === "beginner" ? [
			"Sponge",
			"Berry",
			"Star"
		] : [
			"Sponge",
			"Berry",
			"Cream",
			"Star"
		];
		this.made = [];
		this.tray = [...this.recipe, "Chilli"].sort(() => Math.random() - .5);
		this.info = `Order: ${this.recipe.join(", ")}`;
	}
	update(_dt, input) {
		if (!input.justDown) return;
		const i = this.tray.map((_, i) => ({
			x: 16,
			y: 220 + i * 52,
			w: this.w - 32,
			h: 46
		})).findIndex((r) => hitRect(input.px, input.py, r));
		if (i < 0) return;
		const item = this.tray[i];
		if (item !== this.recipe[this.made.length]) {
			this.hurt();
			return;
		}
		this.made.push(item);
		this.tray.splice(i, 1);
		this.addScore(18, this.w / 2, 140);
		this.progress = this.made.length / this.recipe.length;
		if (this.made.length === this.recipe.length) {
			this.addScore(36, this.w / 2, 100);
			this.win();
		}
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#fff0f6", "#fff6e4");
		this.made.forEach((m, i) => {
			fillRound(ctx, this.w / 2 - 50, 150 - i * 28, 100, 26, 6, i % 2 ? PAL.berry : PAL.gold);
			label(ctx, m, this.w / 2, 163 - i * 28, 12, PAL.ink);
		});
		this.tray.forEach((item, i) => {
			paintButton(ctx, {
				x: 16,
				y: 220 + i * 52,
				w: this.w - 32,
				h: 46
			}, item, PAL.foam);
		});
	}
};
var ToyBuilder = class extends Game {
	need = [];
	at = 0;
	belt = [];
	colors = [
		PAL.royal,
		PAL.berry,
		PAL.gold,
		PAL.leaf
	];
	reset(diff) {
		this.begin(diff, 3);
		const len = diff === "beginner" ? 5 : diff === "advanced" ? 8 : 6;
		this.need = Array.from({ length: len }, () => Math.floor(Math.random() * 4));
		this.at = 0;
		this.belt = Array.from({ length: 4 }, () => Math.floor(Math.random() * 4));
		if (!this.belt.includes(this.need[0])) this.belt[0] = this.need[0];
		this.info = "Tap the block that matches the next blueprint square.";
	}
	update(_dt, input) {
		if (!input.justDown) return;
		const size = 64;
		const y = this.h - this.chromeBottom - 100;
		const i = this.belt.findIndex((_, idx) => {
			const x = 20 + idx * 76;
			return hitRect(input.px, input.py, {
				x,
				y,
				w: size,
				h: size
			});
		});
		if (i < 0) return;
		if (this.belt[i] !== this.need[this.at]) {
			this.hurt();
			return;
		}
		this.addScore(14, 40, 120);
		this.at += 1;
		this.progress = this.at / this.need.length;
		this.belt[i] = Math.floor(Math.random() * 4);
		if (this.at < this.need.length && !this.belt.includes(this.need[this.at])) this.belt[0] = this.need[this.at];
		if (this.at >= this.need.length) {
			this.addScore(30, this.w / 2, 80);
			this.win();
		}
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#efe7ff", "#fff6e4");
		label(ctx, "Blueprint", this.w / 2, 80, 16, PAL.ink);
		this.need.forEach((n, i) => {
			fillRound(ctx, 16 + i * 36, 100, 30, 30, 6, i < this.at ? PAL.line : this.colors[n]);
			if (i === this.at) {
				ctx.strokeStyle = PAL.ink;
				ctx.stroke();
			}
		});
		const y = this.h - this.chromeBottom - 100;
		this.belt.forEach((n, i) => {
			fillRound(ctx, 20 + i * 76, y, 64, 64, 12, this.colors[n]);
		});
	}
};
function coloringStudio() {
	return new Coloring();
}
function buildRobot() {
	return new RobotBuild();
}
function dressUp() {
	return new DressUp();
}
function cakeDesigner() {
	return new Cake();
}
function toyBuilder() {
	return new ToyBuilder();
}
var Football = class extends Game {
	keeper = 1;
	dir = 1;
	got = 0;
	goal = 5;
	reset(diff) {
		this.begin(diff, 3);
		this.goal = diff === "beginner" ? 4 : 5;
		this.got = 0;
		this.keeper = 1;
		this.dir = 1;
		this.info = "Tap the open side of the goal.";
	}
	update(dt, input) {
		this.keeper += this.dir * dt * (this.diff === "beginner" ? .6 : 1.3 * this.rate);
		if (this.keeper > 2.2) this.dir = -1;
		if (this.keeper < -.2) this.dir = 1;
		if (!input.justDown) return;
		const zones = this.zones();
		const i = zones.findIndex((z) => hitRect(input.px, input.py, z));
		if (i < 0) return;
		if (i === Math.round(clamp(this.keeper, 0, 2))) this.hurt();
		else {
			this.got += 1;
			this.addScore(18, zones[i].x, zones[i].y);
			this.progress = this.got / this.goal;
			if (this.got >= this.goal) {
				this.addScore(30, this.w / 2, 80);
				this.win();
			}
		}
	}
	zones() {
		const w = (this.w - 40) / 3;
		return [
			0,
			1,
			2
		].map((i) => ({
			x: 16 + i * (w + 4),
			y: 150,
			w,
			h: 120
		}));
	}
	paint(ctx) {
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
};
var Basketball = class extends Game {
	meter = 0;
	dir = 1;
	got = 0;
	goal = 5;
	good0 = .42;
	good1 = .62;
	reset(diff) {
		this.begin(diff, 3);
		this.goal = 5;
		const width = diff === "beginner" ? .26 : diff === "advanced" ? .12 : .18;
		this.good0 = .5 - width / 2;
		this.good1 = .5 + width / 2;
		this.info = "Tap when the bar is in the green.";
	}
	update(dt, input) {
		this.meter += dt * this.dir * (.85 * this.rate + .4);
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
	paint(ctx) {
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
		meterBar(ctx, 28, this.h * .55, this.w - 56, 22, this.meter, this.good0, this.good1);
	}
};
var Bowling = class extends Game {
	aim = 0;
	meter = 0;
	dir = 1;
	roll = 0;
	standing = 10;
	total = 0;
	rolling = false;
	ballX = 0;
	reset(diff) {
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
	update(dt, input) {
		if (!this.rolling) {
			this.aim = clamp(this.aim + input.ax * dt * .8, -1, 1);
			this.meter += dt * this.dir * .8;
			if (this.meter > 1 || this.meter < 0) this.dir *= -1;
			this.meter = clamp(this.meter, 0, 1);
			if (input.actionJust || input.justDown) {
				this.rolling = true;
				this.roll = 0;
				this.ballX = this.w / 2 + this.aim * 80;
				const powerOk = this.meter > .35 && this.meter < .75 ? 1 : .55;
				const accuracy = 1 - Math.min(1, Math.abs(this.aim));
				const hit = Math.min(this.standing, Math.round(this.standing * accuracy * powerOk));
				this.pending = hit;
			}
			return;
		}
		this.time += 0;
		this.roll += dt;
		if (this.roll < .6) return;
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
	paint(ctx) {
		sky(ctx, this.w, this.h, "#d8c8ff", "#efe7ff");
		ctx.fillStyle = "#c7b4f0";
		ctx.beginPath();
		ctx.moveTo(this.w * .3, 110);
		ctx.lineTo(this.w * .7, 110);
		ctx.lineTo(this.w * .85, this.h * .72);
		ctx.lineTo(this.w * .15, this.h * .72);
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
		ctx.arc(this.rolling ? this.ballX : x, this.h * .68, 10, 0, Math.PI * 2);
		ctx.fill();
		meterBar(ctx, 24, this.h - this.chromeBottom - 36, this.w - 48, 16, this.meter, .35, .75);
	}
};
var Tennis = class extends Game {
	px = 0;
	ball = {
		x: 0,
		y: 0,
		vx: 120,
		vy: 180
	};
	me = 0;
	ai = 0;
	aiX = 0;
	reset(diff) {
		this.begin(diff, 1);
		this.lives = 1;
		this.px = this.w / 2;
		this.aiX = this.w / 2;
		this.me = 0;
		this.ai = 0;
		this.serve(1);
		this.info = "Slide to return. First to 5.";
	}
	serve(dir) {
		this.ball.x = this.w / 2;
		this.ball.y = this.h / 2;
		this.ball.vx = (Math.random() < .5 ? -1 : 1) * (120 + 40 * this.rate);
		this.ball.vy = dir * (170 + 30 * this.rate);
	}
	update(dt, input) {
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
			if (Math.abs(this.ball.x - this.px) < 12 && this.diff !== "advanced") this.ball.vx *= 1.2;
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
	paint(ctx) {
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
};
var MiniGolf = class extends Game {
	aim = -.2;
	ball = {
		x: 0,
		y: 0,
		vx: 0,
		vy: 0
	};
	hole = {
		x: 0,
		y: 0
	};
	strokes = 0;
	max = 5;
	walls = [];
	reset(diff) {
		this.begin(diff, 1);
		this.lives = 1;
		this.max = diff === "beginner" ? 6 : diff === "advanced" ? 3 : 4;
		this.ball = {
			x: this.w / 2,
			y: this.h - this.chromeBottom - 90,
			vx: 0,
			vy: 0
		};
		this.hole = {
			x: this.w / 2 + 40,
			y: 140
		};
		this.aim = -Math.PI / 2;
		this.strokes = 0;
		this.walls = [{
			x: 40,
			y: 200,
			w: this.w * .45,
			h: 18
		}, {
			x: this.w * .4,
			y: 300,
			w: this.w * .5,
			h: 18
		}];
		this.info = "Steer and tap Hit. Get the ball in the hole.";
	}
	moving() {
		return Math.hypot(this.ball.vx, this.ball.vy) > 12;
	}
	update(dt, input) {
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
		this.ball.vx *= Math.pow(.62, dt);
		this.ball.vy *= Math.pow(.62, dt);
		const bounce = (minX, minY, maxX, maxY) => {
			if (this.ball.x < minX || this.ball.x > maxX) this.ball.vx *= -1;
			if (this.ball.y < minY || this.ball.y > maxY) this.ball.vy *= -1;
			this.ball.x = clamp(this.ball.x, minX, maxX);
			this.ball.y = clamp(this.ball.y, minY, maxY);
		};
		bounce(20, 90, this.w - 20, this.h - this.chromeBottom - 30);
		for (const w of this.walls) if (this.ball.x > w.x && this.ball.x < w.x + w.w && this.ball.y > w.y && this.ball.y < w.y + w.h) {
			this.ball.vy *= -1;
			this.ball.y += this.ball.vy > 0 ? 10 : -10;
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
	paint(ctx) {
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
};
function football() {
	return new Football();
}
function basketball() {
	return new Basketball();
}
function bowling() {
	return new Bowling();
}
function tennis() {
	return new Tennis();
}
function miniGolf() {
	return new MiniGolf();
}
var MagicForest = class extends Game {
	seq = [];
	show = 0;
	at = 0;
	playing = false;
	round = 0;
	goal = 4;
	reset(diff) {
		this.begin(diff, 3);
		this.goal = diff === "beginner" ? 3 : diff === "advanced" ? 5 : 4;
		this.round = 0;
		this.fresh();
	}
	fresh() {
		this.seq = Array.from({ length: 2 + this.round }, () => Math.floor(Math.random() * 4));
		this.show = 0;
		this.at = 0;
		this.playing = false;
		this.info = "Watch the fireflies.";
	}
	flowers() {
		return [
			0,
			1,
			2,
			3
		].map((i) => ({
			x: this.w * (.2 + i % 2 * .6),
			y: 180 + Math.floor(i / 2) * 140,
			i
		}));
	}
	update(dt, input) {
		if (!this.playing) {
			this.show += dt;
			if (this.show > .6 * (this.seq.length + 1)) {
				this.playing = true;
				this.info = "Tap the flowers in order.";
			}
			return;
		}
		if (!input.justDown) return;
		const hit = this.flowers().find((f) => Math.hypot(input.px - f.x, input.py - f.y) < 36);
		if (!hit) return;
		if (hit.i !== this.seq[this.at]) {
			this.hurt();
			this.at = 0;
			this.playing = false;
			this.show = 0;
			return;
		}
		this.at += 1;
		this.fx.push("ok");
		if (this.at >= this.seq.length) {
			this.round += 1;
			this.addScore(20, hit.x, hit.y);
			this.progress = this.round / this.goal;
			if (this.round >= this.goal) {
				this.addScore(30, this.w / 2, 90);
				this.win();
			} else this.fresh();
		}
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#1d3b32", "#10241c");
		const step = .6;
		const idx = this.playing ? -1 : Math.floor(this.show / step);
		const lit = !this.playing && idx >= 0 && idx < this.seq.length && this.show % step < .4 ? this.seq[idx] : -1;
		for (const f of this.flowers()) {
			ctx.fillStyle = lit === f.i ? PAL.gold : PAL.leaf;
			ctx.beginPath();
			ctx.arc(f.x, f.y, 28, 0, Math.PI * 2);
			ctx.fill();
			if (lit === f.i) drawPup(ctx, f.x, f.y, 12, "wow");
		}
	}
};
var Wizard = class extends Game {
	rune = 0;
	left = 3;
	got = 0;
	goal = 8;
	names = [
		"Sun",
		"Moon",
		"Star",
		"Drop"
	];
	reset(diff) {
		this.begin(diff, 3);
		this.goal = diff === "beginner" ? 6 : 8;
		this.got = 0;
		this.next();
	}
	next() {
		this.rune = Math.floor(Math.random() * 4);
		this.left = this.diff === "advanced" ? 1.6 : this.diff === "beginner" ? 3.2 : 2.3;
		this.info = "Tap the matching rune.";
	}
	update(dt, input) {
		this.left -= dt * this.rate;
		if (this.left <= 0) {
			this.hurt();
			this.next();
			return;
		}
		if (!input.justDown) return;
		const rects = [
			0,
			1,
			2,
			3
		].map((i) => ({
			x: 16 + i % 2 * ((this.w - 20) / 2),
			y: this.h / 2 + Math.floor(i / 2) * 70,
			w: (this.w - 40) / 2,
			h: 60
		}));
		const i = rects.findIndex((r) => hitRect(input.px, input.py, r));
		if (i < 0) return;
		if (i === this.rune) {
			this.got += 1;
			this.addScore(12, rects[i].x, rects[i].y);
			this.progress = this.got / this.goal;
			if (this.got >= this.goal) {
				this.addScore(30, this.w / 2, 100);
				this.win();
			} else this.next();
		} else this.hurt();
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#2a1848", "#120c22");
		label(ctx, this.names[this.rune] ?? "", this.w / 2, 110, 36, PAL.gold);
		label(ctx, `${Math.ceil(this.left)}s`, this.w / 2, 150, 16, PAL.foam);
		const colors = [
			PAL.gold,
			PAL.lagoon,
			PAL.berry,
			PAL.leaf
		];
		for (let i = 0; i < 4; i++) {
			const r = {
				x: 16 + i % 2 * ((this.w - 20) / 2),
				y: this.h / 2 + Math.floor(i / 2) * 70,
				w: (this.w - 40) / 2,
				h: 60
			};
			fillRound(ctx, r.x, r.y, r.w, r.h, 12, colors[i]);
			label(ctx, this.names[i], r.x + r.w / 2, r.y + 30, 16, PAL.ink);
		}
	}
};
var Dragon = class extends Game {
	y = 200;
	vy = 0;
	rocks = [];
	targets = [];
	spawn = 0;
	got = 0;
	goal = 8;
	fire = 0;
	reset(diff) {
		this.begin(diff, 3);
		this.goal = diff === "beginner" ? 6 : 8;
		this.y = this.h / 2;
		this.vy = 0;
		this.got = 0;
		this.rocks = [];
		this.targets = [];
		this.spawn = .2;
		this.info = "Hold to rise. Tap Fire on the targets.";
	}
	update(dt, input) {
		if (input.flap) this.vy = -260;
		this.vy += 700 * dt;
		this.y += this.vy * dt;
		if (input.actionJust) {
			this.fire = .25;
			this.fx.push("tap");
			const hit = this.targets.findIndex((t) => t.x < 180 && Math.abs(t.y - this.y) < 30);
			if (hit >= 0) {
				const t = this.targets[hit];
				this.targets.splice(hit, 1);
				this.got += 1;
				this.addScore(14, t.x, t.y);
			}
		}
		this.fire = Math.max(0, this.fire - dt);
		this.spawn -= dt;
		const speed = 150 * this.rate;
		if (this.spawn <= 0) {
			this.spawn = .9;
			if (Math.random() < .5) this.targets.push({
				x: this.w + 10,
				y: 100 + Math.random() * (this.h - 220)
			});
			else this.rocks.push({
				x: this.w + 10,
				y: 90 + Math.random() * (this.h - 200)
			});
		}
		for (const t of this.targets) t.x -= speed * dt;
		for (const r of this.rocks) r.x -= speed * dt;
		this.targets = this.targets.filter((t) => t.x > -20);
		this.rocks = this.rocks.filter((r) => {
			if (Math.hypot(r.x - 70, r.y - this.y) < 24) {
				this.hurt();
				return false;
			}
			return r.x > -20;
		});
		if (this.y < 60 || this.y > this.h - 40) {
			this.hurt();
			this.y = this.h / 2;
		}
		this.progress = this.got / this.goal;
		if (this.got >= this.goal) {
			this.addScore(28, 70, this.y);
			this.win();
		}
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#ffd0ea", "#c7b0ff");
		for (const t of this.targets) {
			ctx.fillStyle = PAL.gold;
			ctx.beginPath();
			ctx.arc(t.x, t.y, 12, 0, Math.PI * 2);
			ctx.fill();
		}
		for (const r of this.rocks) fillRound(ctx, r.x - 12, r.y - 12, 24, 24, 4, PAL.ink);
		drawPup(ctx, 70, this.y, 20, "wow");
		if (this.fire > 0) {
			ctx.fillStyle = PAL.orange;
			ctx.fillRect(90, this.y - 6, 70, 12);
		}
	}
};
var Fairy = class extends Game {
	flowers = [];
	spawn = .2;
	got = 0;
	goal = 10;
	reset(diff) {
		this.begin(diff, 3);
		this.goal = diff === "beginner" ? 8 : 10;
		this.flowers = [];
		this.got = 0;
		this.spawn = .2;
		this.info = "Tap flowers before they wilt.";
	}
	update(dt, input) {
		this.spawn -= dt;
		if (this.spawn <= 0) {
			this.spawn = (this.diff === "advanced" ? .7 : 1) / this.rate;
			this.flowers.push({
				x: 30 + Math.random() * (this.w - 60),
				y: 100 + Math.random() * (this.h - this.chromeBottom - 160),
				life: this.diff === "beginner" ? 3.2 : 2.3
			});
		}
		this.flowers = this.flowers.filter((f) => {
			f.life -= dt;
			if (f.life <= 0) {
				this.hurt();
				return false;
			}
			return true;
		});
		if (input.justDown) {
			const i = this.flowers.findIndex((f) => Math.hypot(input.px - f.x, input.py - f.y) < 28);
			if (i >= 0) {
				const f = this.flowers[i];
				this.flowers.splice(i, 1);
				this.got += 1;
				this.addScore(10, f.x, f.y);
				this.progress = this.got / this.goal;
				if (this.got >= this.goal) {
					this.addScore(30, this.w / 2, 80);
					this.win();
				}
			}
		}
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#e9ffd8", "#fff0f8");
		for (const f of this.flowers) {
			ctx.fillStyle = f.life < .8 ? PAL.inkSoft : PAL.berry;
			ctx.beginPath();
			ctx.arc(f.x, f.y, 16, 0, Math.PI * 2);
			ctx.fill();
			ctx.fillStyle = PAL.gold;
			ctx.beginPath();
			ctx.arc(f.x, f.y, 5, 0, Math.PI * 2);
			ctx.fill();
		}
	}
};
var Potion = class extends Game {
	recipe = [
		"Petal",
		"Dew",
		"Spark"
	];
	made = [];
	stir = false;
	tray = [
		"Spark",
		"Mud",
		"Dew",
		"Petal"
	];
	reset(diff) {
		this.begin(diff, 3);
		this.recipe = diff === "advanced" ? [
			"Petal",
			"Dew",
			"Spark",
			"Mint"
		] : [
			"Petal",
			"Dew",
			"Spark"
		];
		this.made = [];
		this.stir = false;
		this.tray = [...this.recipe, "Mud"].sort(() => Math.random() - .5);
		this.info = `Mix ${this.recipe.join(", ")} then stir.`;
	}
	update(_dt, input) {
		if (!input.justDown) return;
		if (this.made.length === this.recipe.length) {
			const stir = {
				x: this.w / 2 - 70,
				y: this.h - this.chromeBottom - 80,
				w: 140,
				h: 48
			};
			if (hitRect(input.px, input.py, stir)) {
				this.addScore(40, this.w / 2, 160);
				this.win();
			}
			return;
		}
		const i = this.tray.findIndex((_, idx) => hitRect(input.px, input.py, {
			x: 16,
			y: 200 + idx * 54,
			w: this.w - 32,
			h: 46
		}));
		if (i < 0) return;
		if (this.tray[i] !== this.recipe[this.made.length]) {
			this.hurt();
			return;
		}
		this.made.push(this.tray[i]);
		this.tray.splice(i, 1);
		this.addScore(16, this.w / 2, 140);
		this.progress = this.made.length / (this.recipe.length + 1);
		if (this.made.length === this.recipe.length) this.info = "Now tap Stir.";
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#2a1848", "#120c22");
		ctx.fillStyle = PAL.grape;
		ctx.beginPath();
		ctx.ellipse(this.w / 2, 130, 36, 28, 0, 0, Math.PI * 2);
		ctx.fill();
		label(ctx, this.made.join(" "), this.w / 2, 130, 12, PAL.cream);
		this.tray.forEach((item, i) => {
			fillRound(ctx, 16, 200 + i * 54, this.w - 32, 46, 12, PAL.foam);
			label(ctx, item, this.w / 2, 223 + i * 54, 16, PAL.ink);
		});
		if (this.made.length === this.recipe.length) {
			fillRound(ctx, this.w / 2 - 70, this.h - this.chromeBottom - 80, 140, 48, 14, PAL.gold);
			label(ctx, "Stir", this.w / 2, this.h - this.chromeBottom - 56, 18, PAL.ink);
		}
	}
};
function magicForest() {
	return new MagicForest();
}
function wizardAcademy() {
	return new Wizard();
}
function dragonAdventure() {
	return new Dragon();
}
function fairyGarden() {
	return new Fairy();
}
function potionLab() {
	return new Potion();
}
var City = class extends Game {
	cols = 3;
	cells = [];
	tool = 1;
	names = [
		"Grass",
		"House",
		"Park",
		"Shop"
	];
	reset(diff) {
		this.begin(diff, 1);
		this.lives = 1;
		this.cols = 3;
		this.cells = Array.from({ length: 9 }, () => 0);
		this.tool = 1;
		this.info = "Place a house, a park and a shop.";
		if (diff === "advanced") this.info = "Place 2 houses, a park and a shop.";
	}
	needHouse() {
		return this.diff === "advanced" ? 2 : 1;
	}
	update(_dt, input) {
		if (!input.justDown) return;
		if (input.py < 140) {
			const i = Math.floor(input.px / this.w * 4);
			if (i >= 0 && i < 4) this.tool = i;
			return;
		}
		const size = Math.min(96, (this.w - 24) / 3);
		const ox = (this.w - size * 3) / 2;
		const oy = 160;
		const c = Math.floor((input.px - ox) / size);
		const r = Math.floor((input.py - oy) / size);
		if (c < 0 || r < 0 || c >= 3 || r >= 3) return;
		const i = r * 3 + c;
		this.cells[i] = this.cells[i] === this.tool ? 0 : this.tool;
		this.fx.push("tap");
		const houses = this.cells.filter((v) => v === 1).length;
		const parks = this.cells.filter((v) => v === 2).length;
		const shops = this.cells.filter((v) => v === 3).length;
		this.progress = (Math.min(houses, this.needHouse()) + Math.min(parks, 1) + Math.min(shops, 1)) / (this.needHouse() + 2);
		if (houses >= this.needHouse() && parks >= 1 && shops >= 1) {
			this.addScore(90, this.w / 2, 150);
			this.win();
		}
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#d5f6f6", "#fff6e4");
		const colors = [
			"#b7e89a",
			PAL.royal,
			PAL.leaf,
			PAL.gold
		];
		for (let i = 0; i < 4; i++) {
			fillRound(ctx, 8 + this.w / 4 * i, 92, this.w / 4 - 12, 36, 8, this.tool === i ? PAL.ink : colors[i]);
			label(ctx, this.names[i], 8 + this.w / 4 * i + (this.w / 4 - 12) / 2, 110, 12, this.tool === i ? PAL.cream : PAL.ink);
		}
		const size = Math.min(96, (this.w - 24) / 3);
		const ox = (this.w - size * 3) / 2;
		this.cells.forEach((v, i) => {
			fillRound(ctx, ox + i % 3 * size + 4, 160 + Math.floor(i / 3) * size + 4, size - 8, size - 8, 10, colors[v]);
			label(ctx, this.names[v], ox + i % 3 * size + size / 2, 160 + Math.floor(i / 3) * size + size / 2, 12, PAL.ink);
		});
	}
};
var Bridge = class extends Game {
	gaps = [
		1,
		2,
		1
	];
	filled = [
		null,
		null,
		null
	];
	picked = null;
	planks = [
		1,
		2,
		1,
		2
	];
	reset(diff) {
		this.begin(diff, 3);
		this.gaps = diff === "advanced" ? [
			2,
			1,
			2,
			1
		] : [
			1,
			2,
			1
		];
		this.filled = this.gaps.map(() => null);
		this.planks = diff === "advanced" ? [
			1,
			2,
			2,
			1,
			1
		] : [
			1,
			2,
			1,
			2
		];
		this.picked = null;
		this.info = "Tap a gap, then a plank that fits. 1 is short, 2 is long.";
	}
	update(_dt, input) {
		if (!input.justDown) return;
		const gapRects = this.gaps.map((_, i) => ({
			x: 20,
			y: 120 + i * 64,
			w: this.w - 40,
			h: 52
		}));
		const gi = gapRects.findIndex((r) => hitRect(input.px, input.py, r));
		if (gi >= 0 && this.filled[gi] == null) {
			if (this.picked == null) {
				this.fx.push("bad");
				this.info = "Pick a plank first.";
				return;
			}
			if (this.picked !== this.gaps[gi]) {
				this.hurt();
				this.picked = null;
				return;
			}
			this.filled[gi] = this.picked;
			const idx = this.planks.indexOf(this.picked);
			if (idx >= 0) this.planks.splice(idx, 1);
			this.picked = null;
			this.addScore(20, gapRects[gi].x, gapRects[gi].y);
			this.progress = this.filled.filter((f) => f != null).length / this.gaps.length;
			if (this.filled.every((f) => f != null)) {
				this.addScore(40, this.w / 2, 80);
				this.win();
			}
			return;
		}
		const pi = this.planks.findIndex((_, i) => hitRect(input.px, input.py, {
			x: 16 + i * 70,
			y: this.h - this.chromeBottom - 80,
			w: 64,
			h: 48
		}));
		if (pi >= 0) this.picked = this.planks[pi];
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#c5ecff", "#e7f4ff");
		this.gaps.forEach((g, i) => {
			const y = 120 + i * 64;
			fillRound(ctx, 20, y, this.w - 40, 52, 10, this.filled[i] ? PAL.leaf : "#8d6a45");
			label(ctx, this.filled[i] ? "Bridged" : `Gap ${g}`, this.w / 2, y + 26, 16, PAL.cream);
		});
		this.planks.forEach((p, i) => {
			fillRound(ctx, 16 + i * 70, this.h - this.chromeBottom - 80, 64, 48, 8, this.picked === p ? PAL.gold : PAL.foam);
			label(ctx, p === 1 ? "Short" : "Long", 48 + i * 70, this.h - this.chromeBottom - 56, 12, PAL.ink);
		});
	}
};
var Construction = class extends Game {
	marker = 0;
	dir = 1;
	stack = [];
	wobble = 0;
	goal = 6;
	reset(diff) {
		this.begin(diff, 3);
		this.goal = diff === "beginner" ? 5 : diff === "advanced" ? 8 : 6;
		this.stack = [];
		this.wobble = 0;
		this.marker = .5;
		this.dir = 1;
		this.info = "Drop blocks when they line up.";
	}
	update(dt, input) {
		this.marker += this.dir * dt * (.35 + this.rate * .25);
		if (this.marker > 1 || this.marker < 0) this.dir *= -1;
		this.marker = clamp(this.marker, 0, 1);
		if (!(input.justDown || input.actionJust)) return;
		const prev = this.stack[this.stack.length - 1] ?? .5;
		const delta = Math.abs(this.marker - prev);
		this.stack.push(this.marker);
		if (delta > (this.diff === "beginner" ? .28 : .18)) {
			this.wobble += delta;
			this.fx.push("bad");
		} else this.addScore(12, this.w / 2, 120);
		this.progress = this.stack.length / this.goal;
		if (this.wobble > .7) {
			this.mode = "lose";
			this.fx.push("lose");
			return;
		}
		if (this.stack.length >= this.goal) {
			this.addScore(36, this.w / 2, 80);
			this.win();
		}
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#d8ecff", "#fff6e4");
		const baseY = this.h - this.chromeBottom - 40;
		this.stack.forEach((m, i) => {
			fillRound(ctx, 40 + m * (this.w - 120), baseY - (i + 1) * 28, 80, 24, 4, i % 2 ? PAL.royal : PAL.gold);
		});
		const mx = 40 + this.marker * (this.w - 120);
		fillRound(ctx, mx, 100, 80, 18, 4, PAL.berry);
		label(ctx, "Drop", mx + 40, 80, 12, PAL.ink);
	}
};
var TrainGame = class extends Game {
	side = 0;
	trains = [];
	spawn = .4;
	got = 0;
	goal = 8;
	reset(diff) {
		this.begin(diff, 3);
		this.goal = diff === "beginner" ? 6 : 8;
		this.side = 0;
		this.trains = [];
		this.got = 0;
		this.spawn = .3;
		this.info = "Tap to switch tracks before the train arrives.";
	}
	update(dt, input) {
		if (input.justDown) this.side = this.side === 0 ? 1 : 0;
		this.spawn -= dt;
		if (this.spawn <= 0) {
			this.spawn = (this.diff === "advanced" ? 1.3 : 1.8) / this.rate;
			this.trains.push({
				color: Math.random() < .5 ? 0 : 1,
				y: 90
			});
		}
		const speed = 90 * this.rate;
		this.trains = this.trains.filter((t) => {
			t.y += speed * dt;
			if (t.y > this.h * .62) {
				if (t.color !== this.side) this.hurt();
				else {
					this.got += 1;
					this.addScore(12, this.w / 2, t.y);
					this.progress = this.got / this.goal;
					if (this.got >= this.goal) {
						this.addScore(28, this.w / 2, 80);
						this.win();
					}
				}
				return false;
			}
			return true;
		});
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#d5f6f6", "#fff6e4");
		ctx.strokeStyle = PAL.inkSoft;
		ctx.lineWidth = 8;
		ctx.beginPath();
		ctx.moveTo(this.w / 2, 80);
		ctx.lineTo(this.w / 2, this.h * .5);
		ctx.lineTo(this.side === 0 ? this.w * .28 : this.w * .72, this.h * .78);
		ctx.stroke();
		fillRound(ctx, this.w * .28 - 30, this.h * .78, 60, 28, 6, PAL.royal);
		fillRound(ctx, this.w * .72 - 30, this.h * .78, 60, 28, 6, PAL.gold);
		label(ctx, "Blue", this.w * .28, this.h * .78 + 14, 12, PAL.foam);
		label(ctx, "Gold", this.w * .72, this.h * .78 + 14, 12, PAL.ink);
		for (const t of this.trains) fillRound(ctx, this.w / 2 - 16, t.y, 32, 20, 4, t.color === 0 ? PAL.royal : PAL.gold);
		label(ctx, "Tap to switch", this.w / 2, this.h - this.chromeBottom - 24, 14, PAL.ink);
	}
};
var Airport = class extends Game {
	planes = [];
	spawn = .2;
	got = 0;
	goal = 8;
	reset(diff) {
		this.begin(diff, 3);
		this.goal = diff === "beginner" ? 6 : 8;
		this.planes = [];
		this.got = 0;
		this.spawn = .2;
		this.info = "Tap a plane while it is inside the ring.";
	}
	update(dt, input) {
		this.spawn -= dt;
		if (this.spawn <= 0) {
			this.spawn = (this.diff === "advanced" ? 1.1 : 1.5) / this.rate;
			this.planes.push({
				angle: Math.random() * Math.PI * 2,
				dist: Math.min(this.w, this.h) * .45,
				alive: true
			});
		}
		const speed = 28 * this.rate;
		for (const p of this.planes) p.dist -= speed * dt;
		if (input.justDown) {
			const cx = this.w / 2;
			const cy = this.h * .46;
			const hit = this.planes.find((p) => {
				const x = cx + Math.cos(p.angle) * p.dist;
				const y = cy + Math.sin(p.angle) * p.dist * .72;
				return p.alive && Math.hypot(input.px - x, input.py - y) < 26;
			});
			if (hit) {
				if (hit.dist < 120 && hit.dist > 70) {
					hit.alive = false;
					this.got += 1;
					this.addScore(14, input.px, input.py);
					this.progress = this.got / this.goal;
					if (this.got >= this.goal) {
						this.addScore(28, cx, cy);
						this.win();
					}
				} else this.hurt();
			}
		}
		for (const p of this.planes) if (p.alive && p.dist < 36) {
			p.alive = false;
			this.hurt();
		}
		this.planes = this.planes.filter((p) => p.alive);
	}
	paint(ctx) {
		sky(ctx, this.w, this.h, "#12324a", "#1d4d6e");
		const cx = this.w / 2;
		const cy = this.h * .46;
		ctx.strokeStyle = PAL.gold;
		ctx.lineWidth = 3;
		ctx.beginPath();
		ctx.ellipse(cx, cy, 95, 68, 0, 0, Math.PI * 2);
		ctx.stroke();
		fillRound(ctx, cx - 14, cy - 10, 28, 20, 4, PAL.foam);
		for (const p of this.planes) {
			const x = cx + Math.cos(p.angle) * p.dist;
			const y = cy + Math.sin(p.angle) * p.dist * .72;
			ctx.fillStyle = PAL.gold;
			ctx.beginPath();
			ctx.arc(x, y, 10, 0, Math.PI * 2);
			ctx.fill();
		}
	}
};
function cityBuilder() {
	return new City();
}
function bridgeBuilder() {
	return new Bridge();
}
function constructionCrew() {
	return new Construction();
}
function trainAdventure() {
	return new TrainGame();
}
function airportManager() {
	return new Airport();
}
var factories = {
	"alphabet-adventure": alphabet,
	"number-quest": numberQuest,
	"word-builder": wordBuilder,
	"spelling-challenge": spelling,
	"math-master": mathMaster,
	"jigsaw-3d": jigsaw,
	"shape-matcher": shapeMatcher,
	"memory-quest": memoryQuest,
	"find-the-difference": findDifference,
	"magic-maze": magicMaze,
	"star-collector": starCollector,
	"bubble-pop": bubblePop,
	"fruit-catcher": fruitCatcher,
	"super-bouncer": superBouncer,
	"sky-runner": skyRunner,
	"go-kart": goKart,
	"monster-truck": monsterTruck,
	"animal-racing": animalRacing,
	"off-road": offRoad,
	"mini-formula": miniFormula,
	"jungle-explorer": jungleExplorer,
	"dinosaur-island": dinosaurIsland,
	"treasure-hunter": treasureHunter,
	"lost-temple": lostTemple,
	"forest-guardian": forestGuardian,
	"underwater-quest": underwater,
	"dolphin-rescue": dolphinRescue,
	"ocean-explorer": oceanExplorer,
	"fish-adventure": fishAdventure,
	"coral-reef": coralReef,
	"space-explorer": spaceExplorer,
	"rocket-builder": rocketBuilder,
	"planet-hopper": planetHopper,
	"asteroid-dodger": asteroidDodger,
	"alien-rescue": alienRescue,
	"farm-simulator": farmSimulator,
	"animal-care": animalCare,
	"tractor-adventure": tractorAdventure,
	"harvest-festival": harvestFestival,
	"build-your-farm": buildYourFarm,
	"coloring-studio": coloringStudio,
	"build-a-robot": buildRobot,
	"dress-up": dressUp,
	"cake-designer": cakeDesigner,
	"toy-builder": toyBuilder,
	"football": football,
	"basketball": basketball,
	"bowling": bowling,
	"tennis": tennis,
	"mini-golf": miniGolf,
	"magic-forest": magicForest,
	"wizard-academy": wizardAcademy,
	"dragon-adventure": dragonAdventure,
	"fairy-garden": fairyGarden,
	"potion-lab": potionLab,
	"city-builder": cityBuilder,
	"bridge-builder": bridgeBuilder,
	"construction-crew": constructionCrew,
	"train-adventure": trainAdventure,
	"airport-manager": airportManager
};
function createGame(id) {
	const make = factories[id];
	if (!make) throw new Error(`Unknown game ${id}`);
	return make();
}
Object.keys(factories);
function GameStage({ gameId, difficulty, quality, onExit, onDone }) {
	const wrapRef = (0, import_react.useRef)(null);
	const canvasRef = (0, import_react.useRef)(null);
	const info = findGame(gameId);
	const [hud, setHud] = (0, import_react.useState)({
		score: 0,
		lives: 3,
		progress: 0,
		goal: info?.howTo ?? ""
	});
	const [phase, setPhase] = (0, import_react.useState)("how");
	const phaseRef = (0, import_react.useRef)(phase);
	phaseRef.current = phase;
	const controls = info?.controls ?? "tap";
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		const wrap = wrapRef.current;
		if (!canvas || !wrap || !info) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const sim = createGame(gameId);
		const input = emptyInput();
		const keys = /* @__PURE__ */ new Set();
		const hold = {
			left: false,
			right: false,
			action: false,
			flap: false,
			fire: false
		};
		const queue = {
			action: false,
			flap: false
		};
		const stick = {
			on: false,
			x: 0,
			y: 0
		};
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
			const dpr = quality === "low" ? 1 : quality === "high" ? Math.min(devicePixelRatio || 1, 2) : Math.min(devicePixelRatio || 1, 1.5);
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
		const onKey = (e) => {
			if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
			if (e.type === "keydown") {
				if (e.repeat) return;
				keys.add(e.code);
				if (e.code === "Space" || e.code === "Enter") queue.action = true;
				if (e.code === "ArrowUp" || e.code === "KeyW") queue.flap = true;
				if (e.code === "Escape") setPhase((p) => p === "play" ? "pause" : p);
				if ([
					"Space",
					"ArrowUp",
					"ArrowDown",
					"ArrowLeft",
					"ArrowRight"
				].includes(e.code)) e.preventDefault();
			} else keys.delete(e.code);
		};
		window.addEventListener("keydown", onKey);
		window.addEventListener("keyup", onKey);
		const compose = () => {
			const mode = controls;
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
			input.action = fly ? hold.fire || keys.has("KeyF") : hold.action || !flapMode && (keys.has("Space") || keys.has("Enter"));
			input.actionJust = false;
			input.flap = fly ? down || hold.flap || keys.has("ArrowUp") || keys.has("KeyW") : flapMode ? down || hold.flap || keys.has("Space") : hold.flap;
			input.flapJust = flapMode ? queue.flap || queue.action || justDown : queue.flap;
			if (fly) input.actionJust = queue.action;
			if (mode === "steer-action" || mode === "stick-action") input.actionJust = queue.action || queue.flap;
		};
		const finish = (win) => {
			if (stopped) return;
			stopped = true;
			cancelAnimationFrame(raf);
			onDone({
				score: sim.score(),
				win
			});
		};
		const loop = (now) => {
			const dt = Math.min(.1, (now - last) / 1e3);
			last = now;
			if (phaseRef.current === "play" && !stopped) {
				compose();
				sim.step(dt, input);
				for (const fx of sim.pullFx()) playFx(fx);
				const next = {
					score: sim.score(),
					lives: sim.hud().lives,
					progress: sim.hud().progress,
					goal: sim.goalText()
				};
				setHud((prev) => prev.score === next.score && prev.lives === next.lives && prev.goal === next.goal && Math.abs(prev.progress - next.progress) < .02 ? prev : next);
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
		const point = (e) => {
			const rect = canvas.getBoundingClientRect();
			px = e.clientX - rect.left;
			py = e.clientY - rect.top;
		};
		const downEv = (e) => {
			point(e);
			down = true;
			justDown = true;
			canvas.setPointerCapture?.(e.pointerId);
		};
		const moveEv = (e) => point(e);
		const upEv = () => {
			down = false;
			justUp = true;
		};
		canvas.addEventListener("pointerdown", downEv);
		canvas.addEventListener("pointermove", moveEv);
		canvas.addEventListener("pointerup", upEv);
		canvas.addEventListener("pointercancel", upEv);
		stageApi.current = {
			hold,
			queue,
			stick,
			restart() {
				resize();
				sim.reset(difficulty);
				stopped = false;
				setPhase("play");
			}
		};
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
	}, [gameId]);
	const stageApi = (0, import_react.useRef)(null);
	const bindHold = (key) => ({
		onPointerDown: (e) => {
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
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-dvh flex-col bg-ink text-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "safe-top flex items-center gap-2 px-3 pb-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "kid-btn bg-cream text-ink",
						onClick: onExit,
						"aria-label": "Back",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "truncate text-lg text-cream",
							children: info?.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm text-lagoon-soft",
							children: hud.goal
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl text-gold",
							children: hud.score
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-cream",
							children: [hud.lives, " lives"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "kid-btn bg-royal text-cream",
						onClick: () => setPhase("pause"),
						"aria-label": "Pause",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-5" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-3 h-2 overflow-hidden rounded-full bg-ink-soft",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full bg-gold",
					style: { width: `${Math.round(hud.progress * 100)}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: wrapRef,
				className: "relative min-h-0 flex-1 touch-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
					ref: canvasRef,
					className: "h-full w-full touch-none"
				}), phase !== "play" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 flex items-center justify-center bg-ink/70 p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-full max-w-md rounded-3xl bg-cream p-5 text-ink",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl",
								children: phase === "how" ? info?.name : "Paused"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-base text-ink-soft",
								children: info?.howTo
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex flex-wrap gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: "kid-btn bg-gold text-ink",
										onClick: () => {
											if (phase === "pause") stageApi.current?.restart();
											setPhase("play");
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "mr-1 inline size-4" }), phase === "how" ? "Start" : "Restart"]
									}),
									phase === "pause" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "kid-btn bg-royal text-cream",
										onClick: () => setPhase("play"),
										children: "Resume"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "kid-btn bg-foam text-ink",
										onClick: onExit,
										children: "Quit"
									})
								]
							})
						]
					})
				})]
			}),
			needsChrome(controls) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "safe-bottom flex items-end justify-between gap-3 px-3 pt-2",
				children: [
					(controls === "steer" || controls === "steer-action") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "kid-btn bg-foam text-ink",
							"aria-label": "Left",
							...bindHold("left"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "kid-btn bg-foam text-ink",
							"aria-label": "Right",
							...bindHold("right"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
						})]
					}),
					(controls === "stick" || controls === "stick-action") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stick, { onChange: (x, y, on) => {
						const api = stageApi.current;
						if (!api) return;
						api.stick.on = on;
						api.stick.x = x;
						api.stick.y = y;
					} }),
					controls === "flap" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "kid-btn bg-gold text-ink",
						"aria-label": "Flap",
						...bindHold("flap"),
						children: "Flap"
					}),
					controls === "fly-shoot" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "kid-btn bg-lagoon text-ink",
						"aria-label": "Fly",
						...bindHold("flap"),
						children: "Fly"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1" }),
					(controls === "steer-action" || controls === "stick-action") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "kid-btn bg-gold text-ink",
						"aria-label": "Action",
						...bindHold("action"),
						children: "Go"
					}),
					controls === "fly-shoot" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "kid-btn bg-berry text-cream",
						"aria-label": "Fire",
						...bindHold("fire"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crosshair, { className: "mr-1 inline size-4" }), "Fire"]
					}),
					phase === "play" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "kid-btn bg-foam text-ink",
						"aria-label": "Restart",
						onClick: () => stageApi.current?.restart(),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-5" })
					})
				]
			})
		]
	});
}
function Stick({ onChange }) {
	const base = (0, import_react.useRef)(null);
	const move = (e) => {
		const el = base.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		onChange(Math.max(-1, Math.min(1, (e.clientX - r.left) / r.width * 2 - 1)), Math.max(-1, Math.min(1, (e.clientY - r.top) / r.height * 2 - 1)), true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: base,
		className: "relative h-28 w-28 touch-none rounded-full bg-foam/90",
		onPointerDown: move,
		onPointerMove: (e) => {
			if (e.buttons) move(e);
		},
		onPointerUp: () => onChange(0, 0, false),
		onPointerLeave: () => onChange(0, 0, false),
		role: "slider",
		"aria-label": "Move",
		"aria-valuemin": -1,
		"aria-valuemax": 1,
		"aria-valuenow": 0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-1/2 left-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-royal" })
	});
}
var WorldLobby = (0, import_react.lazy)(() => import("./WorldLobby-CFxiQaQp.mjs").then((m) => ({ default: m.WorldLobby })));
function FalizApp() {
	const [screen, setScreen] = (0, import_react.useState)({ name: "splash" });
	const [booted, setBooted] = (0, import_react.useState)(false);
	const [settingsOpen, setSettingsOpen] = (0, import_react.useState)(false);
	const ready = useFaliz((s) => s.ready);
	const profiles = useFaliz((s) => s.profiles);
	const activeId = useFaliz((s) => s.activeId);
	const settings = useFaliz((s) => s.settings);
	const profile = profiles.find((p) => p.id === activeId);
	(0, import_react.useEffect)(() => {
		bootSave().finally(() => setBooted(true));
	}, []);
	(0, import_react.useEffect)(() => {
		setMusic(settings.music);
		setSfx(settings.sfx);
	}, [settings.music, settings.sfx]);
	(0, import_react.useEffect)(() => {
		if (!(screen.name === "lobby" || screen.name === "world" || screen.name === "game" || screen.name === "customize") || !profile) return;
		const id = window.setInterval(() => useFaliz.getState().addPlaytime(1), 1e3);
		return () => window.clearInterval(id);
	}, [screen.name, profile?.id]);
	(0, import_react.useEffect)(() => {
		const onPop = (e) => {
			const next = e.state?.screen;
			if (next) setScreen(next);
		};
		window.addEventListener("popstate", onPop);
		history.replaceState({ screen: { name: "splash" } }, "");
		return () => window.removeEventListener("popstate", onPop);
	}, []);
	const go = (next) => {
		setScreen(next);
		history.pushState({ screen: next }, "");
	};
	const back = () => history.back();
	if (screen.name === "splash") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "kid-shell h-dvh overflow-hidden bg-lagoon text-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Splash, {
			ready: booted && ready,
			onPlay: () => {
				if (!booted || !ready) return;
				unlockAudio();
				if (profiles.length === 0) go({ name: "profiles" });
				else {
					if (!activeId && profiles[0]) useFaliz.getState().setActive(profiles[0].id);
					go(profiles.length > 1 ? { name: "profiles" } : { name: "lobby" });
				}
			}
		})
	});
	if (!booted || !ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "kid-shell flex h-dvh items-center justify-center bg-lagoon text-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-2xl",
			children: "Faliz is waking up…"
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "kid-shell h-dvh overflow-hidden bg-lagoon text-ink",
		children: [
			screen.name === "profiles" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Profiles, {
				profiles,
				onPick: (id) => {
					useFaliz.getState().setActive(id);
					go({ name: "lobby" });
				},
				onCreate: (name, animal, difficulty) => {
					useFaliz.getState().createProfile(name, animal, difficulty);
					go({ name: "lobby" });
				}
			}),
			screen.name === "lobby" && profile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lobby, {
				profile,
				quality: settings.quality,
				settingsOpen,
				onToggleSettings: () => setSettingsOpen((v) => !v),
				onWorld: (id) => go({
					name: "world",
					worldId: id
				}),
				onCustomize: () => go({ name: "customize" }),
				onAwards: () => go({ name: "awards" }),
				onParent: () => go({ name: "parent" }),
				onProfiles: () => go({ name: "profiles" })
			}),
			screen.name === "world" && profile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorldPage, {
				worldId: screen.worldId,
				profile,
				onBack: back,
				onPlay: (gameId) => {
					if (useFaliz.getState().overLimit()) go({ name: "break" });
					else go({
						name: "game",
						gameId
					});
				}
			}),
			screen.name === "game" && profile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameStage, {
				gameId: screen.gameId,
				difficulty: profile.difficulty,
				quality: settings.quality,
				onExit: back,
				onDone: ({ score, win }) => {
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
						levelUp: result.levelUp
					});
				}
			}),
			screen.name === "result" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
				screen,
				onAgain: () => go({
					name: "game",
					gameId: screen.gameId
				}),
				onMap: () => go({ name: "lobby" }),
				onNext: () => {
					const games = allGames();
					const next = games[(games.findIndex((g) => g.id === screen.gameId) + 1) % games.length];
					if (next) go({
						name: "game",
						gameId: next.id
					});
				}
			}),
			screen.name === "customize" && profile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Customize, {
				profile,
				onBack: back
			}),
			screen.name === "awards" && profile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Awards, {
				profile,
				onBack: back
			}),
			screen.name === "parent" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Parent, { onBack: back }),
			screen.name === "break" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreakTime, {
				onParent: () => go({ name: "parent" }),
				onMap: () => go({ name: "lobby" })
			})
		]
	});
}
function Splash({ onPlay, ready }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex h-dvh flex-col items-center justify-center gap-5 overflow-hidden bg-lagoon px-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/faliz/icon.png",
				alt: "Faliz Kids World",
				className: "w-64 max-w-[78vw] rounded-[22%] shadow-lg"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl text-ink sm:text-5xl",
				children: "Faliz Kids World"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-display tracking-wide text-ink-soft",
				children: "Play · Learn · Explore · Create"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "kid-btn bg-gold px-12 text-xl text-ink disabled:opacity-60",
				onClick: onPlay,
				disabled: !ready,
				children: "Enter the world"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-ink-soft",
				children: "By Fahad Mohamed · 12 islands · 60 games"
			})
		]
	});
}
function Profiles({ profiles, onPick, onCreate }) {
	const [name, setName] = (0, import_react.useState)("Faliz");
	const [animal, setAnimal] = (0, import_react.useState)("dog");
	const [difficulty, setDifficulty] = (0, import_react.useState)("beginner");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "safe-top mx-auto flex h-dvh w-full max-w-lg flex-col gap-4 overflow-y-auto px-4 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl",
				children: "Who is playing?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-2",
				children: profiles.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "flex items-center gap-3 rounded-3xl bg-cream p-3 text-left",
					onClick: () => onPick(p.id),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
						animal: p.animal,
						hat: p.hat,
						scarf: p.scarf
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-display text-xl",
						children: p.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-sm text-ink-soft",
						children: ["Level ", levelOf(p.xp)]
					})] })]
				}, p.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "rounded-3xl bg-cream p-4",
				onSubmit: (e) => {
					e.preventDefault();
					onCreate(name.trim() || "Faliz", animal, difficulty);
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl",
						children: "New friend"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "mt-2 block text-sm text-ink-soft",
						htmlFor: "nick",
						children: "Nickname"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "nick",
						maxLength: 12,
						value: name,
						onChange: (e) => setName(e.target.value),
						className: "mt-1 w-full rounded-2xl border border-line bg-foam px-3 py-3 text-ink"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex gap-2",
						children: ANIMALS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: `rounded-2xl p-1 ${animal === a.id ? "bg-gold" : "bg-foam"}`,
							onClick: () => setAnimal(a.id),
							"aria-label": a.name,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
								animal: a.id,
								className: "h-12 w-12"
							})
						}, a.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex gap-2",
						children: [
							["beginner", "Easy"],
							["intermediate", "Brave"],
							["advanced", "Hero"]
						].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: `kid-btn ${difficulty === id ? "bg-royal text-cream" : "bg-foam text-ink"}`,
							onClick: () => setDifficulty(id),
							children: label
						}, id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "kid-btn mt-4 w-full bg-gold text-ink",
						children: "Let’s play"
					})
				]
			})
		]
	});
}
function Lobby({ profile, quality, settingsOpen, onToggleSettings, onWorld, onCustomize, onAwards, onParent, onProfiles }) {
	const [selected, setSelected] = (0, import_react.useState)(null);
	const patch = useFaliz((s) => s.patchSettings);
	const music = useFaliz((s) => s.settings.music);
	const sfx = useFaliz((s) => s.settings.sfx);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-dvh",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full bg-lagoon" }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LobbyBoundary, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorldLobby, {
					selected,
					scarf: profile.scarf,
					hat: profile.hat,
					pet: profile.pet,
					quality,
					found: profile.foundStars,
					onSelect: (id) => {
						setSelected(id);
						onWorld(id);
					},
					onStar: (id) => useFaliz.getState().collectLobbyStar(id)
				}) })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute inset-0 flex flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "safe-top pointer-events-auto flex items-center gap-2 px-3 pb-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "flex items-center gap-2 rounded-full bg-cream px-2 py-1",
							onClick: onProfiles,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
								animal: profile.animal,
								hat: profile.hat,
								scarf: profile.scarf,
								className: "h-10 w-10"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "pr-2 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-display leading-none",
									children: profile.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs text-ink-soft",
									children: ["Level ", levelOf(profile.xp)]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1 rounded-full bg-cream px-3 py-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, { className: "size-4 text-gold-deep" }),
								" ",
								profile.coins
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1 rounded-full bg-cream px-3 py-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 text-gold-deep" }),
								" ",
								profile.stars
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "ml-auto rounded-full bg-cream p-3",
							onClick: onToggleSettings,
							"aria-label": "Settings",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "rounded-full bg-cream p-3",
							onClick: onParent,
							"aria-label": "Parents",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-5" })
						})
					]
				}),
				settingsOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-auto mx-3 rounded-3xl bg-cream p-3 text-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "kid-btn bg-foam",
								onClick: () => patch({ music: !music }),
								children: [music ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "size-4" }), " Music"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "kid-btn bg-foam",
								onClick: () => patch({ sfx: !sfx }),
								children: ["Sounds ", sfx ? "on" : "off"]
							}),
							[
								"low",
								"medium",
								"high"
							].map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: `kid-btn capitalize ${quality === q ? "bg-royal text-cream" : "bg-foam"}`,
								onClick: () => patch({ quality: q }),
								children: q
							}, q))
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "safe-bottom pointer-events-auto px-3 pb-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-2 flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rounded-full bg-cream/95 px-3 py-1 text-sm text-ink",
								children: "Drag to look · tap an island"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "rounded-full bg-cream p-2",
									onClick: onAwards,
									"aria-label": "Awards",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "size-5 text-gold-deep" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "kid-btn bg-gold text-ink",
									onClick: onCustomize,
									children: "Room"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mb-2 w-fit rounded-full bg-cream/95 px-3 py-1 text-sm",
							children: ["Today ", profile.missions.map((m) => `${m.progress}/${m.target}`).join(" · ")]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-2 overflow-x-auto pb-1",
							children: WORLDS.map((world) => {
								const prog = worldProgress(profile, world.id);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "flex shrink-0 items-center gap-2 rounded-full bg-cream px-3 py-2 text-left text-ink",
									onClick: () => onWorld(world.id),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "size-3 rounded-full",
										style: { background: world.accent }
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-display text-sm leading-none",
										children: world.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs text-ink-soft",
										children: [prog.wins, "/5"]
									})] })]
								}, world.id);
							})
						})
					]
				})
			]
		})]
	});
}
function LobbyBoundary({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrashBoundary, { children });
}
var CrashBoundary = class extends import_react.Component {
	state = { error: false };
	static getDerivedStateFromError() {
		return { error: true };
	}
	render() {
		if (this.state.error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full bg-lagoon" });
		return this.props.children;
	}
};
function WorldPage({ worldId, profile, onBack, onPlay }) {
	const world = findWorld(worldId);
	if (!world) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "safe-top mx-auto flex h-dvh w-full max-w-lg flex-col gap-3 overflow-y-auto px-4 pb-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "kid-btn w-fit bg-cream",
				onClick: onBack,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "inline size-4" }), " Islands"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl",
				children: world.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-ink-soft",
				children: world.blurb
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-3",
				children: world.games.map((game) => {
					const stat = gameStat(profile, game.id);
					const stars = stat?.bestStars ?? 0;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-3xl bg-cream p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl",
								children: game.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-ink-soft",
								children: game.blurb
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex items-center gap-1",
								children: [[
									0,
									1,
									2
								].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
									className: i < stars ? "text-gold" : "text-line",
									fill: i < stars ? "currentColor" : "none"
								}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "ml-2 text-sm text-ink-soft",
									children: ["Best ", stat?.best ?? 0]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "kid-btn mt-3 bg-royal text-cream",
								onClick: () => onPlay(game.id),
								children: "Play"
							})
						]
					}, game.id);
				})
			})
		]
	});
}
function Result({ screen, onAgain, onMap, onNext }) {
	const game = findGame(screen.gameId);
	const names = ACHIEVEMENTS.filter((a) => screen.achievements.includes(a.id)).map((a) => a.name);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex h-dvh flex-col items-center justify-center gap-3 px-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-ink-soft",
				children: game?.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl",
				children: screen.win ? "You did it!" : "Nice try"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-1",
				children: [
					0,
					1,
					2
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
					className: `size-10 ${i < screen.stars ? "text-gold" : "text-line"}`,
					fill: i < screen.stars ? "currentColor" : "none"
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-lg",
				children: ["Score ", screen.score]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Coins +", screen.coins] }),
			screen.levelUp && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-xl text-royal",
				children: "Level up!"
			}),
			names.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["New award: ", names.join(", ")] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap justify-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "kid-btn bg-gold text-ink",
						onClick: onAgain,
						children: "Play again"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "kid-btn bg-royal text-cream",
						onClick: onNext,
						children: "Next game"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "kid-btn bg-cream text-ink",
						onClick: onMap,
						children: "Islands"
					})
				]
			})
		]
	});
}
function Customize({ profile, onBack }) {
	const api = useFaliz.getState();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "safe-top mx-auto flex h-dvh w-full max-w-lg flex-col gap-4 overflow-y-auto px-4 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "kid-btn w-fit bg-cream",
				onClick: onBack,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "inline size-4" }), " Back"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl bg-cream p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
						animal: profile.animal,
						hat: profile.hat,
						scarf: profile.scarf,
						className: "h-24 w-24"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl",
						children: profile.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-ink-soft",
						children: ["Pet ", PETS.find((p) => p.id === profile.pet)?.name]
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Room, { decor: profile.shownDecor })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl",
				children: "Hats"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: HATS.map((hat) => {
					const owned = profile.ownedHats.includes(hat.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: `kid-btn ${profile.hat === hat.id ? "bg-gold" : "bg-cream"}`,
						onClick: () => owned ? api.wearHat(hat.id) : api.buyHat(hat.id),
						children: [hat.name, !owned && ` · ${hat.cost}`]
					}, hat.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl",
				children: "Collar"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2",
				children: SCARVES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "h-11 w-11 rounded-full border-2 border-cream",
					style: { background: c },
					"aria-label": "Collar colour",
					onClick: () => api.setScarf(c)
				}, c))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl",
				children: "Pets"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: PETS.map((pet) => {
					const owned = profile.ownedPets.includes(pet.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: `kid-btn ${profile.pet === pet.id ? "bg-gold" : "bg-cream"}`,
						onClick: () => owned ? api.equipPet(pet.id) : api.buyPet(pet.id),
						children: [pet.name, !owned && ` · ${pet.stars} stars`]
					}, pet.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl",
				children: "Room"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: DECOR.map((item) => {
					const owned = profile.ownedDecor.includes(item.id);
					const shown = profile.shownDecor.includes(item.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: `kid-btn ${shown ? "bg-leaf text-ink" : "bg-cream"}`,
						onClick: () => owned ? api.toggleDecor(item.id) : api.buyDecor(item.id),
						children: [item.name, !owned && ` · ${item.cost}`]
					}, item.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl",
				children: "Difficulty"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2",
				children: [
					["beginner", "Easy"],
					["intermediate", "Brave"],
					["advanced", "Hero"]
				].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: `kid-btn ${profile.difficulty === id ? "bg-royal text-cream" : "bg-cream"}`,
					onClick: () => api.setDifficulty(id),
					children: label
				}, id))
			})
		]
	});
}
function Room({ decor }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mt-3 h-28 overflow-hidden rounded-2xl bg-lagoon-soft",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 h-8 w-full bg-gold/70" }),
			decor.includes("rug") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-2 left-6 h-6 w-24 rounded-full bg-berry" }),
			decor.includes("plant") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-8 left-4 h-10 w-4 rounded-full bg-leaf" }),
			decor.includes("books") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-16 bottom-8 h-8 w-10 bg-royal" }),
			decor.includes("lamp") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-3 right-8 h-6 w-6 rounded-full bg-gold" }),
			decor.includes("shelf") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-8 left-1/2 h-3 w-20 -translate-x-1/2 bg-ink" })
		]
	});
}
function Awards({ profile, onBack }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "safe-top mx-auto flex h-dvh w-full max-w-lg flex-col gap-3 overflow-y-auto px-4 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "kid-btn w-fit bg-cream",
				onClick: onBack,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "inline size-4" }), " Back"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl",
				children: "Awards"
			}),
			ACHIEVEMENTS.map((a) => {
				const on = profile.achievements.includes(a.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: `rounded-3xl p-4 ${on ? "bg-gold" : "bg-cream"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg",
							children: a.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm",
							children: a.detail
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm",
							children: on ? "Unlocked" : "Still to earn"
						})
					]
				}, a.id);
			})
		]
	});
}
function Parent({ onBack }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [answer, setAnswer] = (0, import_react.useState)("");
	const [pin, setPin] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const question = (0, import_react.useMemo)(() => {
		const a = 6 + Math.floor(Math.random() * 7);
		const b = 4 + Math.floor(Math.random() * 6);
		return {
			text: `What is ${a} + ${b}?`,
			value: String(a + b)
		};
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
	if (!open) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "safe-top mx-auto flex h-dvh w-full max-w-md flex-col gap-3 px-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "kid-btn w-fit bg-cream",
				onClick: onBack,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "inline size-4" }), " Back"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl",
				children: "Grown-ups"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-ink-soft",
				children: "A quick check keeps play settings with a parent. We do not ask for names, email or location."
			}),
			settings.pin ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: pin,
				onChange: (e) => setPin(e.target.value),
				inputMode: "numeric",
				maxLength: 4,
				className: "rounded-2xl border border-line bg-foam px-3 py-3",
				placeholder: "4 digit code",
				"aria-label": "Parent code"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl",
				children: question.text
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: answer,
				onChange: (e) => setAnswer(e.target.value),
				inputMode: "numeric",
				className: "rounded-2xl border border-line bg-foam px-3 py-3",
				"aria-label": "Answer"
			})] }),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-berry",
				children: error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "kid-btn bg-royal text-cream",
				onClick: unlock,
				children: "Continue"
			})
		]
	});
	const minutes = profile && profile.playDate === dateKey() ? Math.round(profile.playSeconds / 60) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "safe-top mx-auto flex h-dvh w-full max-w-lg flex-col gap-4 overflow-y-auto px-4 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "kid-btn w-fit bg-cream",
				onClick: onBack,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "inline size-4" }), " Back"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl",
				children: "Parent desk"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-ink-soft",
				children: "Fahad Mohamed · Faliz Kids World stays on this device."
			}),
			profile && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					profile.name,
					" played about ",
					minutes,
					" minutes today."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-sm",
					htmlFor: "limit",
					children: "Daily play limit"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						null,
						15,
						30,
						45,
						60
					].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: `kid-btn ${profile.playLimitMin === n ? "bg-royal text-cream" : "bg-cream"}`,
						onClick: () => useFaliz.getState().setLimit(n),
						children: n == null ? "None" : `${n} min`
					}, String(n)))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-2",
					children: WORLDS.map((w) => {
						const prog = worldProgress(profile, w.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: w.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								prog.wins,
								"/",
								prog.total
							] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-2 rounded-full bg-line",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full bg-royal",
								style: { width: `${prog.wins / prog.total * 100}%` }
							})
						})] }, w.id);
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl",
				children: "Parent code"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PinSetter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl",
				children: "Profiles"
			}),
			profiles.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between rounded-2xl bg-cream px-3 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.name }), profiles.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-sm text-berry",
					onClick: () => useFaliz.getState().removeProfile(p.id),
					children: "Remove"
				})]
			}, p.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "kid-btn bg-cream",
					onClick: () => {
						const blob = new Blob([JSON.stringify(snapshotSafe())], { type: "application/json" });
						const url = URL.createObjectURL(blob);
						const a = document.createElement("a");
						a.href = url;
						a.download = "faliz-kids-world-backup.json";
						a.click();
						URL.revokeObjectURL(url);
					},
					children: "Save a backup"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "kid-btn bg-cream",
					children: ["Restore", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "file",
						accept: "application/json",
						className: "sr-only",
						onChange: async (e) => {
							const file = e.target.files?.[0];
							if (!file) return;
							try {
								const data = JSON.parse(await file.text());
								if (!data || data.version !== 1 || !Array.isArray(data.profiles)) throw new Error("bad");
								useFaliz.getState().replaceAll(data);
							} catch {
								setError("That file is not a Faliz backup.");
							}
						}
					})]
				})]
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-berry",
				children: error
			})
		]
	});
}
function snapshotSafe() {
	const s = useFaliz.getState();
	return {
		version: 1,
		profiles: s.profiles,
		activeId: s.activeId,
		settings: s.settings
	};
}
function PinSetter() {
	const [value, setValue] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "flex gap-2",
		onSubmit: (e) => {
			e.preventDefault();
			if (value.length === 4) useFaliz.getState().patchSettings({ pin: value });
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value,
				onChange: (e) => setValue(e.target.value.replace(/\D/g, "").slice(0, 4)),
				inputMode: "numeric",
				className: "flex-1 rounded-2xl border border-line bg-foam px-3 py-3",
				placeholder: "Set a 4 digit code",
				"aria-label": "New parent code"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "kid-btn bg-royal text-cream",
				children: "Save"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "kid-btn bg-foam",
				onClick: () => useFaliz.getState().patchSettings({ pin: null }),
				children: "Clear"
			})
		]
	});
}
function BreakTime({ onParent, onMap }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex h-dvh flex-col items-center justify-center gap-3 px-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-10 text-royal" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl",
				children: "Time for a break"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-sm text-ink-soft",
				children: "Today’s play time is used up. A grown-up can add more from the parent desk."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "kid-btn bg-royal text-cream",
				onClick: onParent,
				children: "Parent desk"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "kid-btn bg-cream",
				onClick: onMap,
				children: "Back to islands"
			})
		]
	});
}
var routes_exports = /* @__PURE__ */ __exportAll({ component: () => Home });
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FalizApp, {});
}
//#endregion
export { WORLDS as n, routes_exports as t };
