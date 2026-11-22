export type ControlMode =
  | "tap"
  | "steer"
  | "stick"
  | "flap"
  | "steer-action"
  | "stick-action"
  | "fly-shoot";

export type GameInfo = {
  id: string;
  name: string;
  blurb: string;
  howTo: string;
  controls: ControlMode;
};

export type Landmark =
  | "castle"
  | "puzzle"
  | "arcade"
  | "race"
  | "jungle"
  | "ocean"
  | "space"
  | "farm"
  | "studio"
  | "sport"
  | "magic"
  | "city";

export type WorldInfo = {
  id: string;
  name: string;
  blurb: string;
  accent: string;
  land: string;
  sky: string;
  landmark: Landmark;
  games: GameInfo[];
};

export const WORLDS: WorldInfo[] = [
  {
    id: "learning",
    name: "Learning Kingdom",
    blurb: "Letters, numbers and words",
    accent: "#ffb703",
    land: "#8fd16a",
    sky: "#9ad8ff",
    landmark: "castle",
    games: [
      { id: "alphabet-adventure", name: "Alphabet Adventure", blurb: "Catch the next letter", howTo: "Tap letters in order, starting at A. Let the wrong ones fall.", controls: "tap" },
      { id: "number-quest", name: "Number Quest", blurb: "Build the target sum", howTo: "Tap bubbles until they add up to the target number.", controls: "tap" },
      { id: "word-builder", name: "Word Builder", blurb: "Spell the picture word", howTo: "Tap the letters in the right order to spell the word.", controls: "tap" },
      { id: "spelling-challenge", name: "Spelling Challenge", blurb: "Remember, then spell", howTo: "Look at the word, then tap the letters from memory.", controls: "tap" },
      { id: "math-master", name: "Math Master 3D", blurb: "Solve the missing number", howTo: "Tap the block that completes the sum.", controls: "tap" },
    ],
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
      { id: "jigsaw-3d", name: "3D Jigsaw Puzzle", blurb: "Slide the picture together", howTo: "Tap a tile next to the gap to slide it. Finish the picture.", controls: "tap" },
      { id: "shape-matcher", name: "Shape Matcher", blurb: "Sort by the rule", howTo: "Move left and right so the shape lands in the matching bin.", controls: "steer" },
      { id: "memory-quest", name: "Memory Quest", blurb: "Match the hidden pairs", howTo: "Tap two cards. Remember where the pairs are.", controls: "tap" },
      { id: "find-the-difference", name: "Find the Difference", blurb: "Spot what changed", howTo: "Tap the extras that appear only on the right picture.", controls: "tap" },
      { id: "magic-maze", name: "Magic Maze", blurb: "Find the star", howTo: "Move through the maze to the star. Use the stick or arrow keys.", controls: "stick" },
    ],
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
      { id: "star-collector", name: "Star Collector", blurb: "Grab stars, dodge chasers", howTo: "Move with the stick. Collect 10 stars and don't touch the chasers.", controls: "stick" },
      { id: "bubble-pop", name: "Bubble Pop 3D", blurb: "Pop groups of three", howTo: "Tap a group of 3 or more matching bubbles.", controls: "tap" },
      { id: "fruit-catcher", name: "Fruit Catcher", blurb: "Catch fruit, avoid bombs", howTo: "Slide the basket. Catch fruit and dodge the dark bombs.", controls: "tap" },
      { id: "super-bouncer", name: "Super Bouncer", blurb: "Clear the bricks", howTo: "Move the paddle and bounce the ball until the bricks are gone.", controls: "tap" },
      { id: "sky-runner", name: "Sky Runner", blurb: "Fly through the gates", howTo: "Tap to flap. Fly through the gaps and grab the rings.", controls: "flap" },
    ],
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
      { id: "go-kart", name: "Go-Kart Racing", blurb: "Change lanes and pass", howTo: "Steer between lanes. Don't bump the other karts. Reach the finish.", controls: "steer" },
      { id: "monster-truck", name: "Monster Truck Adventure", blurb: "Jump the rocks", howTo: "Tap to jump. Clear rocks and gaps on the track.", controls: "flap" },
      { id: "animal-racing", name: "Animal Racing", blurb: "Mash to the finish", howTo: "Tap Run to dash. Beat the other animals to the flag.", controls: "flap" },
      { id: "off-road", name: "Off-Road Challenge", blurb: "Hit every checkpoint", howTo: "Drive with the stick through the flags in order. Avoid boulders.", controls: "stick" },
      { id: "mini-formula", name: "Mini Formula Racing", blurb: "Start clean, then dodge", howTo: "Tap when the light turns green, then steer through the gates.", controls: "steer" },
    ],
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
      { id: "jungle-explorer", name: "Jungle Explorer", blurb: "Jump to the banner", howTo: "Move with the arrows and tap Jump. Reach the flag.", controls: "steer-action" },
      { id: "dinosaur-island", name: "Dinosaur Island", blurb: "Hide, then grab eggs", howTo: "Hold to hide when the foot shadow drops. Tap eggs when it is safe.", controls: "tap" },
      { id: "treasure-hunter", name: "Treasure Hunter", blurb: "Dig where it feels warm", howTo: "Tap squares to dig. Hints say if treasure is near. Don't waste all your digs.", controls: "tap" },
      { id: "lost-temple", name: "Lost Temple", blurb: "Copy the rune order", howTo: "Watch the runes light up, then tap them in the same order.", controls: "tap" },
      { id: "forest-guardian", name: "Forest Guardian", blurb: "Stop the pests", howTo: "Tap the pests before they reach the tree.", controls: "tap" },
    ],
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
      { id: "underwater-quest", name: "Underwater Quest", blurb: "Pearls before air runs out", howTo: "Swim with the stick. Collect pearls and bubbles of air. Avoid jellyfish.", controls: "stick" },
      { id: "dolphin-rescue", name: "Dolphin Rescue", blurb: "Leap through rings", howTo: "Tap to swim up. Pass through the golden rings.", controls: "flap" },
      { id: "ocean-explorer", name: "Ocean Explorer", blurb: "Photograph the right fish", howTo: "Tap the fish that matches the picture in the corner.", controls: "tap" },
      { id: "fish-adventure", name: "Fish Adventure", blurb: "Eat, grow, survive", howTo: "Swim into smaller fish to grow. Don't touch the bigger ones.", controls: "stick" },
      { id: "coral-reef", name: "Coral Reef Builder", blurb: "Copy the reef pattern", howTo: "Remember the pattern, then tap cells to cycle colours until it matches.", controls: "tap" },
    ],
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
      { id: "space-explorer", name: "Space Explorer", blurb: "Reach the station", howTo: "Fly to the station. Moving uses fuel. Pick up fuel cans and dodge rocks.", controls: "stick" },
      { id: "rocket-builder", name: "Rocket Builder", blurb: "Stack it, then fly", howTo: "Tap parts from engine to nose, then steer through the rings.", controls: "steer" },
      { id: "planet-hopper", name: "Planet Hopper", blurb: "Jump world to world", howTo: "Tap while the marker is in the green to hop to the next planet.", controls: "tap" },
      { id: "asteroid-dodger", name: "Asteroid Dodger", blurb: "Last the meteor shower", howTo: "Dodge rocks until the timer ends. Grab stars if you can.", controls: "stick" },
      { id: "alien-rescue", name: "Alien Rescue", blurb: "Beam them aboard", howTo: "Line up over an alien and tap Beam. Don't let meteors hit the ship.", controls: "steer-action" },
    ],
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
      { id: "farm-simulator", name: "Farm Simulator", blurb: "Plant, water, harvest", howTo: "Tap a plot to plant, water, then harvest when it is ready.", controls: "tap" },
      { id: "animal-care", name: "Animal Care", blurb: "Keep everyone happy", howTo: "Tap Feed or Play for the animal that needs it before a heart empties.", controls: "tap" },
      { id: "tractor-adventure", name: "Tractor Adventure", blurb: "Mow the whole field", howTo: "Drive over the tall grass. Don't waste time on the rocks.", controls: "stick" },
      { id: "harvest-festival", name: "Harvest Festival", blurb: "Sort the falling food", howTo: "Tap the crate that matches the falling fruit.", controls: "tap" },
      { id: "build-your-farm", name: "Build Your Farm", blurb: "Place what the note asks", howTo: "Choose a building, then tap the grid. Match the shopping list.", controls: "tap" },
    ],
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
      { id: "coloring-studio", name: "3D Coloring Studio", blurb: "Colour by number", howTo: "Pick a colour, then tap every shape with that number.", controls: "tap" },
      { id: "build-a-robot", name: "Build a Robot", blurb: "Fit the right parts", howTo: "Tap a part, then tap the matching slot on the robot.", controls: "tap" },
      { id: "dress-up", name: "Dress Up Friends", blurb: "Match today's theme", howTo: "Dress Faliz for the theme, then tap Done.", controls: "tap" },
      { id: "cake-designer", name: "Cake Designer", blurb: "Follow the order", howTo: "Tap layers and toppings in the order on the ticket.", controls: "tap" },
      { id: "toy-builder", name: "Toy Builder", blurb: "Grab the next block", howTo: "Tap the block colour that the blueprint asks for next.", controls: "tap" },
    ],
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
      { id: "football", name: "Football Challenge", blurb: "Shoot past the keeper", howTo: "Tap the open side of the goal before the keeper slides across.", controls: "tap" },
      { id: "basketball", name: "Basketball Stars", blurb: "Release in the green", howTo: "Tap when the marker sits in the green zone.", controls: "tap" },
      { id: "bowling", name: "Bowling Championship", blurb: "Aim, then roll", howTo: "Steer your aim, then tap Roll when the power bar is in the green.", controls: "steer-action" },
      { id: "tennis", name: "Tennis Fun", blurb: "Return the ball", howTo: "Slide your racket and be the first to 5 points.", controls: "tap" },
      { id: "mini-golf", name: "Mini Golf Adventure", blurb: "Sink the putt", howTo: "Steer the arrow and tap Hit. Bounce off the walls into the hole.", controls: "steer-action" },
    ],
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
      { id: "magic-forest", name: "Magic Forest", blurb: "Follow the fireflies", howTo: "Watch the fireflies, then tap the flowers in that order.", controls: "tap" },
      { id: "wizard-academy", name: "Wizard Academy", blurb: "Cast the shown rune", howTo: "Tap the rune that matches the big one before it fades.", controls: "tap" },
      { id: "dragon-adventure", name: "Dragon Adventure", blurb: "Fly and breathe fire", howTo: "Hold to fly up. Tap Fire when a target is in front. Avoid rocks.", controls: "fly-shoot" },
      { id: "fairy-garden", name: "Fairy Garden", blurb: "Pollinate before they wilt", howTo: "Tap each glowing flower before its timer runs out.", controls: "tap" },
      { id: "potion-lab", name: "Magic Potion Lab", blurb: "Mix, then stir", howTo: "Tap ingredients in recipe order, then tap Stir.", controls: "tap" },
    ],
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
      { id: "city-builder", name: "City Builder", blurb: "Make a happy town", howTo: "Place a house, a park and a shop. Tap a building again to sell it.", controls: "tap" },
      { id: "bridge-builder", name: "Bridge Builder", blurb: "Span every gap", howTo: "Tap a gap, then tap a plank that fits it.", controls: "tap" },
      { id: "construction-crew", name: "Construction Crew", blurb: "Stack a steady tower", howTo: "Tap to drop a block when it lines up with the one below.", controls: "tap" },
      { id: "train-adventure", name: "Train Adventure", blurb: "Send trains to the right stop", howTo: "Tap the switch so each train takes the matching colour track.", controls: "tap" },
      { id: "airport-manager", name: "Airport Manager", blurb: "Land planes in the ring", howTo: "Tap a plane while it sits inside the glowing ring.", controls: "tap" },
    ],
  },
];

export type Playable = GameInfo & { worldId: string; worldName: string; accent: string; index: number };

export function allGames(): Playable[] {
  const list: Playable[] = [];
  let index = 1;
  for (const world of WORLDS) {
    for (const game of world.games) {
      list.push({ ...game, worldId: world.id, worldName: world.name, accent: world.accent, index });
      index += 1;
    }
  }
  return list;
}

export function findGame(id: string) {
  return allGames().find((g) => g.id === id);
}

export function findWorld(id: string) {
  return WORLDS.find((w) => w.id === id);
}

export function needsChrome(mode: ControlMode) {
  return mode !== "tap";
}
