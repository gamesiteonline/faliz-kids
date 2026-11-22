export const WORDS: { word: string; hint: string }[] = [
  { word: "CAT", hint: "A pet that meows" },
  { word: "DOG", hint: "Faliz is one of these" },
  { word: "SUN", hint: "It shines in the sky" },
  { word: "STAR", hint: "A bright night sparkle" },
  { word: "FISH", hint: "It swims in the sea" },
  { word: "TREE", hint: "Leaves grow on it" },
  { word: "CAKE", hint: "A sweet birthday treat" },
  { word: "FROG", hint: "It hops by the pond" },
  { word: "BIRD", hint: "It has wings" },
  { word: "MOON", hint: "It glows at night" },
  { word: "LION", hint: "A big cat with a mane" },
  { word: "BOAT", hint: "It floats on water" },
  { word: "KITE", hint: "It flies on a string" },
  { word: "BOOK", hint: "Pages full of stories" },
  { word: "RAIN", hint: "Water from clouds" },
  { word: "CASTLE", hint: "A home for kings" },
  { word: "PLANET", hint: "Earth is one" },
  { word: "ROCKET", hint: "It flies to space" },
  { word: "DRAGON", hint: "It breathes fire" },
  { word: "GARDEN", hint: "Where flowers grow" },
];

export function pickWords(diff: "beginner" | "intermediate" | "advanced", count: number) {
  const pool =
    diff === "beginner"
      ? WORDS.filter((w) => w.word.length <= 4)
      : diff === "advanced"
        ? WORDS.filter((w) => w.word.length >= 4)
        : WORDS.filter((w) => w.word.length <= 5);
  const copy = [...pool];
  const out: { word: string; hint: string }[] = [];
  while (out.length < count && copy.length) {
    const i = Math.floor(Math.random() * copy.length);
    out.push(copy.splice(i, 1)[0]!);
  }
  return out;
}
