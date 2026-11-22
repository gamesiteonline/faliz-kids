import type { Animal } from "../store";

export function Avatar({
  animal,
  hat = "none",
  scarf = "#2ed3c6",
  className = "h-16 w-16",
}: {
  animal: Animal;
  hat?: string;
  scarf?: string;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      <circle cx="40" cy="44" r="30" fill="#ffe3c2" />
      {animal === "dog" && <Dog scarf={scarf} />}
      {animal === "cat" && <Cat scarf={scarf} />}
      {animal === "rabbit" && <Rabbit scarf={scarf} />}
      {animal === "bear" && <Bear scarf={scarf} />}
      {animal === "lion" && <Lion scarf={scarf} />}
      {hat === "cap" && <path d="M18 30h36l-6 8H24z" fill="#2f6bff" />}
      {hat === "bow" && <path d="M28 18l12 8 12-8-12 4z" fill="#ff4fa3" />}
      {hat === "crown" && <path d="M22 28l6-12 8 8 8-8 6 12z" fill="#ffb703" />}
      {hat === "wizard" && <path d="M40 4l16 28H24z" fill="#7b3ff2" />}
    </svg>
  );
}

function Face({ fill, scarf }: { fill: string; scarf: string }) {
  return (
    <>
      <circle cx="40" cy="42" r="22" fill={fill} />
      <ellipse cx="40" cy="50" rx="10" ry="7" fill="#ffe3c2" />
      <circle cx="32" cy="40" r="3.2" fill="#5c3317" />
      <circle cx="48" cy="40" r="3.2" fill="#5c3317" />
      <circle cx="33" cy="39" r="1" fill="#fff" />
      <circle cx="49" cy="39" r="1" fill="#fff" />
      <ellipse cx="40" cy="47" rx="2.4" ry="1.8" fill="#2a211c" />
      <path d="M34 58h12" stroke={scarf} strokeWidth="4" strokeLinecap="round" />
      <polygon points="40,60 43,66 37,66" fill="#ffb703" />
    </>
  );
}

function Dog({ scarf }: { scarf: string }) {
  return (
    <>
      <ellipse cx="18" cy="38" rx="8" ry="12" fill="#c86a18" />
      <ellipse cx="62" cy="38" rx="8" ry="12" fill="#c86a18" />
      <Face fill="#f08a2c" scarf={scarf} />
    </>
  );
}
function Cat({ scarf }: { scarf: string }) {
  return (
    <>
      <polygon points="20,34 28,14 34,34" fill="#f0a35a" />
      <polygon points="60,34 52,14 46,34" fill="#f0a35a" />
      <Face fill="#f0a35a" scarf={scarf} />
    </>
  );
}
function Rabbit({ scarf }: { scarf: string }) {
  return (
    <>
      <ellipse cx="28" cy="18" rx="6" ry="16" fill="#f4f4f4" />
      <ellipse cx="52" cy="18" rx="6" ry="16" fill="#f4f4f4" />
      <Face fill="#f7f7f7" scarf={scarf} />
    </>
  );
}
function Bear({ scarf }: { scarf: string }) {
  return (
    <>
      <circle cx="22" cy="28" r="8" fill="#8a5a32" />
      <circle cx="58" cy="28" r="8" fill="#8a5a32" />
      <Face fill="#c4844a" scarf={scarf} />
    </>
  );
}
function Lion({ scarf }: { scarf: string }) {
  return (
    <>
      <circle cx="40" cy="42" r="28" fill="#e09600" />
      <Face fill="#f0b429" scarf={scarf} />
    </>
  );
}

export const ANIMALS: { id: Animal; name: string }[] = [
  { id: "dog", name: "Pup" },
  { id: "cat", name: "Cat" },
  { id: "rabbit", name: "Bun" },
  { id: "bear", name: "Bear" },
  { id: "lion", name: "Lion" },
];

export const SCARVES = ["#2ed3c6", "#2f6bff", "#3ddc6e", "#ff4fa3", "#7b3ff2", "#ffb703"];
