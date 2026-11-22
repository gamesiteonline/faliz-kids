import { Game } from "../engine/game";
import { alphabet, mathMaster, numberQuest, spelling, wordBuilder } from "./learning";
import { findDifference, jigsaw, magicMaze, memoryQuest, shapeMatcher } from "./puzzle";
import { bubblePop, fruitCatcher, skyRunner, starCollector, superBouncer } from "./arcade";
import { animalRacing, goKart, miniFormula, monsterTruck, offRoad } from "./racing";
import { dinosaurIsland, forestGuardian, jungleExplorer, lostTemple, treasureHunter } from "./adventure";
import { coralReef, dolphinRescue, fishAdventure, oceanExplorer, underwater } from "./ocean";
import { alienRescue, asteroidDodger, planetHopper, rocketBuilder, spaceExplorer } from "./space";
import { animalCare, buildYourFarm, farmSimulator, harvestFestival, tractorAdventure } from "./farm";
import { buildRobot, cakeDesigner, coloringStudio, dressUp, toyBuilder } from "./creative";
import { basketball, bowling, football, miniGolf, tennis } from "./sports";
import { dragonAdventure, fairyGarden, magicForest, potionLab, wizardAcademy } from "./magic";
import { airportManager, bridgeBuilder, cityBuilder, constructionCrew, trainAdventure } from "./builder";

const factories: Record<string, () => Game> = {
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
  "airport-manager": airportManager,
};

export function createGame(id: string) {
  const make = factories[id];
  if (!make) throw new Error(`Unknown game ${id}`);
  return make();
}

export const gameIds = Object.keys(factories);
