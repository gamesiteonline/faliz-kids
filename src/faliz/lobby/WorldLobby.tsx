import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import {
  ACESFilmicToneMapping,
  BackSide,
  CanvasTexture,
  MeshToonMaterial,
  NearestFilter,
  SRGBColorSpace,
  type Group,
  type Mesh,
} from "three";
import { WORLDS, type Landmark, type WorldInfo } from "../catalog";

type Quality = "low" | "medium" | "high";

type Props = {
  selected: string | null;
  scarf: string;
  hat: string;
  pet: string;
  quality: Quality;
  found: string[];
  onSelect: (id: string) => void;
  onStar: (id: string) => void;
};

const mats = new Map<string, MeshToonMaterial>();

function toonMap() {
  const canvas = document.createElement("canvas");
  canvas.width = 5;
  canvas.height = 1;
  const g = canvas.getContext("2d");
  if (!g) return null;
  ["#4a4a4a", "#7a7a7a", "#b0b0b0", "#e4e4e4", "#ffffff"].forEach((color, i) => {
    g.fillStyle = color;
    g.fillRect(i, 0, 1, 1);
  });
  const tex = new CanvasTexture(canvas);
  tex.magFilter = NearestFilter;
  tex.minFilter = NearestFilter;
  tex.colorSpace = SRGBColorSpace;
  return tex;
}

let gradient: CanvasTexture | null | undefined;

function mat(color: string, emissive = "#000000") {
  const key = `${color}|${emissive}`;
  const hit = mats.get(key);
  if (hit) return hit;
  if (gradient === undefined) gradient = toonMap();
  const material = new MeshToonMaterial({
    color,
    gradientMap: gradient ?? undefined,
    emissive,
    emissiveIntensity: emissive === "#000000" ? 0 : 0.45,
  });
  mats.set(key, material);
  return material;
}

export function WorldLobby(props: Props) {
  const rich = props.quality !== "low";
  const crisp = props.quality === "high";
  return (
    <Canvas
      camera={{ position: [0, 13, 20], fov: 42 }}
      dpr={crisp ? [1, 1.6] : 1}
      shadows={crisp}
      gl={{ antialias: crisp, alpha: false }}
      onCreated={({ gl }) => {
        gl.toneMapping = ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.05;
      }}
    >
      <Sky />
      <hemisphereLight args={["#fff4d6", "#3d7a48", 0.85]} />
      <ambientLight intensity={0.28} />
      <directionalLight
        position={[16, 24, 10]}
        intensity={1.45}
        castShadow={crisp}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={2}
        shadow-camera-far={48}
        shadow-camera-left={-22}
        shadow-camera-right={22}
        shadow-camera-top={22}
        shadow-camera-bottom={-22}
      />
      <directionalLight position={[-10, 8, -8]} intensity={0.35} color="#d7ecff" />
      <Water simple={!rich} />
      <Sun />
      {rich && <Rainbow />}
      <Clouds />
      <group position={[0, 0, 0]}>
        <HomeIsland />
        <Faliz scarf={props.scarf} hat={props.hat} pet={props.pet} />
      </group>
      {WORLDS.map((world, i) => {
        const angle = (i / WORLDS.length) * Math.PI * 2 - Math.PI / 2;
        const x = Math.sin(angle) * 13.2;
        const z = Math.cos(angle) * 13.2;
        return (
          <Island
            key={world.id}
            world={world}
            position={[x, 0, z]}
            selected={props.selected === world.id}
            onClick={() => props.onSelect(world.id)}
          />
        );
      })}
      {STAR_SPOTS.map((spot) => (
        <LobbyStar
          key={spot.id}
          id={spot.id}
          position={spot.position}
          taken={props.found.includes(spot.id)}
          onTake={props.onStar}
        />
      ))}
      <OrbitControls
        enablePan
        enableDamping
        dampingFactor={0.08}
        maxPolarAngle={1.15}
        minPolarAngle={0.35}
        minDistance={9}
        maxDistance={32}
        target={[0, 1.2, 0]}
      />
    </Canvas>
  );
}

const STAR_SPOTS: { id: string; position: [number, number, number] }[] = [
  { id: "lobby-1", position: [3.4, 3.4, 2.2] },
  { id: "lobby-2", position: [-4.2, 3.6, 1.6] },
  { id: "lobby-3", position: [1.5, 4.2, -4.6] },
  { id: "lobby-4", position: [-2.4, 3.8, -4.2] },
  { id: "lobby-5", position: [6.5, 3.5, -1.2] },
  { id: "lobby-6", position: [-7.2, 3.7, 0.4] },
];

function Sky() {
  return (
    <mesh scale={[-1, 1, 1]} frustumCulled={false}>
      <sphereGeometry args={[90, 28, 18]} />
      <shaderMaterial
        side={BackSide}
        depthWrite={false}
        vertexShader={`varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`}
        fragmentShader={`varying vec3 vP; void main(){
          float h = normalize(vP).y;
          vec3 top = vec3(0.29, 0.58, 0.98);
          vec3 mid = vec3(0.56, 0.84, 1.0);
          vec3 horizon = vec3(1.0, 0.86, 0.64);
          float t = smoothstep(-0.05, 0.55, h);
          vec3 col = mix(horizon, mix(mid, top, smoothstep(0.15, 0.8, h)), t);
          gl_FragColor = vec4(col, 1.0);
        }`}
      />
    </mesh>
  );
}

function Sun() {
  return (
    <mesh position={[-16, 14, -22]} material={mat("#ffe38a", "#ffb703")}>
      <sphereGeometry args={[2.1, 20, 16]} />
    </mesh>
  );
}

function Rainbow() {
  const bands = ["#ff5a5a", "#ff9f1c", "#ffe66d", "#5dce6a", "#3aa0ff", "#8b5cf6"];
  return (
    <group position={[7, 8.5, -16]} rotation={[0.55, -0.2, 0]}>
      {bands.map((color, i) => (
        <mesh key={color} rotation={[0, 0, Math.PI]} material={mat(color, color)}>
          <torusGeometry args={[7.2 - i * 0.32, 0.13, 6, 28, Math.PI]} />
        </mesh>
      ))}
    </group>
  );
}

function Water({ simple }: { simple: boolean }) {
  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), []);
  useFrame((_, delta) => {
    uniforms.uTime.value += Math.min(delta, 0.05);
  });
  if (simple) {
    return (
      <mesh rotation-x={-Math.PI / 2} position={[0, -0.45, 0]} material={mat("#2f8fd4")}>
        <circleGeometry args={[55, 40]} />
      </mesh>
    );
  }
  return (
    <mesh rotation-x={-Math.PI / 2} position={[0, -0.45, 0]}>
      <planeGeometry args={[110, 110, 48, 48]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={`
          uniform float uTime;
          varying vec2 vUv;
          void main() {
            vUv = uv;
            vec3 p = position;
            p.z += sin(position.x * 0.22 + uTime * 1.3) * 0.16 + cos(position.y * 0.18 + uTime) * 0.1;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
          }
        `}
        fragmentShader={`
          varying vec2 vUv;
          void main() {
            vec3 deep = vec3(0.08, 0.48, 0.82);
            vec3 lite = vec3(0.45, 0.82, 0.98);
            float ripple = sin(vUv.x * 40.0) * 0.04 + sin(vUv.y * 28.0) * 0.04;
            vec3 col = mix(deep, lite, vUv.y * 0.65 + 0.2 + ripple);
            gl_FragColor = vec4(col, 1.0);
          }
        `}
      />
    </mesh>
  );
}

function HomeIsland() {
  return (
    <group>
      <IslandBody radius={3.4} color="#6ecf57" dirt="#c4a06a" />
      <Tree position={[-1.8, 1.05, 0.8]} scale={1.15} />
      <Tree position={[1.9, 1.05, 1.1]} scale={0.9} />
      <Tree position={[-0.4, 1.05, -1.8]} scale={1.05} />
      <Bush position={[1.2, 1.05, -1.3]} color="#3aaa4d" />
      <Bush position={[-1.5, 1.05, -0.6]} color="#7ed36a" />
      <Flower position={[0.9, 1.12, 1.5]} color="#ff4fa3" />
      <Flower position={[-0.7, 1.12, 1.6]} color="#ffb703" />
      <Flower position={[1.6, 1.12, 0.1]} color="#7b3ff2" />
      <Waterfall />
    </group>
  );
}

function Island({
  world,
  position,
  selected,
  onClick,
}: {
  world: WorldInfo;
  position: [number, number, number];
  selected: boolean;
  onClick: () => void;
}) {
  const ref = useRef<Group>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.position.y = Math.sin(clock.elapsedTime * 0.8 + position[0]) * 0.12;
  });
  return (
    <group ref={ref} position={position}>
      <group
        onClick={(event) => {
          event.stopPropagation();
          onClick();
        }}
      >
        <IslandBody radius={2.35} color={world.land} dirt="#b08968" />
        {selected && (
          <mesh rotation-x={-Math.PI / 2} position={[0, 1.2, 0]} material={mat("#ffd23a", "#ffb703")}>
            <torusGeometry args={[2.55, 0.07, 8, 28]} />
          </mesh>
        )}
        <Tree position={[-1.15, 1.02, 0.7]} scale={0.72} />
        <Tree position={[1.05, 1.02, -0.85]} scale={0.62} />
        <Landmark kind={world.landmark} />
        <Html position={[0, 2.85, 0]} center distanceFactor={18} zIndexRange={[20, 0]}>
          <div className="pointer-events-none whitespace-nowrap rounded-full bg-cream px-2 py-1 font-display text-xs text-ink shadow-sm">
            {world.name}
          </div>
        </Html>
      </group>
    </group>
  );
}

function IslandBody({ radius, color, dirt }: { radius: number; color: string; dirt: string }) {
  return (
    <group>
      <mesh position={[0, 0.15, 0]} castShadow receiveShadow material={mat(dirt)}>
        <cylinderGeometry args={[radius * 0.72, radius * 0.92, 1.35, 10]} />
      </mesh>
      <mesh position={[0, 0.72, 0]} castShadow receiveShadow material={mat(color)}>
        <cylinderGeometry args={[radius, radius * 0.96, 0.55, 18]} />
      </mesh>
      <mesh position={[0, 1.02, 0]} rotation-x={-Math.PI / 2} receiveShadow material={mat(color)}>
        <circleGeometry args={[radius * 0.98, 20]} />
      </mesh>
    </group>
  );
}

function Tree({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  return (
    <group position={position} scale={scale}>
      <mesh position={[0, 0.28, 0]} material={mat("#8d5a32")}>
        <cylinderGeometry args={[0.08, 0.12, 0.5, 6]} />
      </mesh>
      <mesh position={[0, 0.72, 0]} material={mat("#2f9e44")}>
        <sphereGeometry args={[0.36, 12, 10]} />
      </mesh>
      <mesh position={[0.16, 0.58, 0.08]} material={mat("#57c46a")}>
        <sphereGeometry args={[0.22, 10, 8]} />
      </mesh>
    </group>
  );
}

function Bush({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <mesh position={position} material={mat(color)}>
      <sphereGeometry args={[0.28, 10, 8]} />
    </mesh>
  );
}

function Flower({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <group position={position}>
      <mesh material={mat("#3aaa4d")}>
        <cylinderGeometry args={[0.02, 0.02, 0.22, 5]} />
      </mesh>
      <mesh position={[0, 0.14, 0]} material={mat(color)}>
        <sphereGeometry args={[0.08, 8, 8]} />
      </mesh>
    </group>
  );
}

function Waterfall() {
  const ref = useRef<Group>(null);
  useFrame(({ clock }) => {
    const group = ref.current;
    if (!group) return;
    group.children.forEach((child, i) => {
      const drop = (clock.elapsedTime * 1.6 + i * 0.22) % 1.3;
      child.position.y = 0.35 - drop;
    });
  });
  return (
    <group position={[2.15, 1.15, -0.35]}>
      <mesh position={[0, 0.55, -0.05]} material={mat("#9aa8b5")}>
        <boxGeometry args={[0.55, 0.4, 0.45]} />
      </mesh>
      <mesh position={[0.18, 0.85, -0.05]} material={mat("#b7c3cc")}>
        <boxGeometry args={[0.28, 0.28, 0.28]} />
      </mesh>
      <group ref={ref}>
        {[0, 1, 2, 3, 4].map((i) => (
          <mesh key={i} material={mat("#e7fbff")}>
            <boxGeometry args={[0.16, 0.22, 0.08]} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

function Landmark({ kind }: { kind: Landmark }) {
  if (kind === "castle") return <Castle roof="#2f6bff" />;
  if (kind === "magic") return <Castle roof="#7b3ff2" />;
  if (kind === "puzzle") return <PuzzleMark />;
  if (kind === "arcade") return <ArcadeMark />;
  if (kind === "race") return <KartMark />;
  if (kind === "jungle") return <Palm />;
  if (kind === "ocean") return <Dolphin />;
  if (kind === "space") return <Rocket />;
  if (kind === "farm") return <Barn />;
  if (kind === "studio") return <Easel />;
  if (kind === "sport") return <Stadium />;
  return <City />;
}

function Castle({ roof }: { roof: string }) {
  return (
    <group position={[0.15, 1.05, 0.1]}>
      <mesh position={[0, 0.45, 0]} material={mat("#f6e7c8")}>
        <boxGeometry args={[0.85, 0.7, 0.7]} />
      </mesh>
      <mesh position={[0, 0.28, 0.36]} material={mat("#8d5a32")}>
        <boxGeometry args={[0.22, 0.32, 0.08]} />
      </mesh>
      {[-0.38, 0.38].map((x) => (
        <group key={x} position={[x, 0.7, 0]}>
          <mesh material={mat("#f6e7c8")}>
            <cylinderGeometry args={[0.16, 0.18, 0.7, 8]} />
          </mesh>
          <mesh position={[0, 0.48, 0]} material={mat(roof)}>
            <coneGeometry args={[0.24, 0.38, 8]} />
          </mesh>
        </group>
      ))}
      <mesh position={[0, 0.95, 0]} material={mat(roof)}>
        <coneGeometry args={[0.38, 0.48, 8]} />
      </mesh>
      <mesh position={[0, 1.28, 0]} material={mat("#ffb703", "#ffb703")}>
        <boxGeometry args={[0.03, 0.22, 0.03]} />
      </mesh>
    </group>
  );
}

function PuzzleMark() {
  return (
    <group position={[0.1, 1.35, 0]}>
      <mesh position={[-0.18, 0, 0]} material={mat("#7b3ff2")}>
        <boxGeometry args={[0.38, 0.38, 0.12]} />
      </mesh>
      <mesh position={[0.18, 0.05, 0.04]} material={mat("#ffb703")}>
        <boxGeometry args={[0.38, 0.38, 0.12]} />
      </mesh>
      <mesh position={[0.02, 0.32, 0]} material={mat("#3ddc6e")}>
        <boxGeometry args={[0.32, 0.28, 0.12]} />
      </mesh>
    </group>
  );
}

function ArcadeMark() {
  return (
    <group position={[0.15, 1.05, 0]}>
      <mesh position={[0, 0.45, 0]} material={mat("#ff4fa3")}>
        <boxGeometry args={[0.55, 0.8, 0.4]} />
      </mesh>
      <mesh position={[0, 0.62, 0.18]} material={mat("#7ec8ff", "#2f6bff")}>
        <boxGeometry args={[0.36, 0.28, 0.06]} />
      </mesh>
      <mesh position={[0, 0.12, 0.16]} material={mat("#1c2b4a")}>
        <boxGeometry args={[0.28, 0.08, 0.08]} />
      </mesh>
    </group>
  );
}

function KartMark() {
  return (
    <group position={[0.2, 1.15, 0]}>
      <mesh rotation-x={-Math.PI / 2} material={mat("#2a2a2a")}>
        <torusGeometry args={[0.55, 0.08, 6, 18]} />
      </mesh>
      <mesh position={[0.15, 0.16, 0]} material={mat("#2f6bff")}>
        <boxGeometry args={[0.42, 0.16, 0.24]} />
      </mesh>
      <mesh position={[0.05, 0.08, 0.16]} material={mat("#1c2b4a")}>
        <cylinderGeometry args={[0.08, 0.08, 0.06, 8]} />
      </mesh>
    </group>
  );
}

function Palm() {
  return (
    <group position={[0.35, 1.05, 0]}>
      <mesh position={[0, 0.45, 0]} rotation={[0.1, 0, 0.15]} material={mat("#c4844a")}>
        <cylinderGeometry args={[0.07, 0.1, 0.9, 6]} />
      </mesh>
      {[0, 1, 2, 3, 4].map((i) => (
        <mesh key={i} position={[0, 0.95, 0]} rotation={[0.7, (i / 5) * Math.PI * 2, 0]} material={mat("#2f9e44")}>
          <coneGeometry args={[0.16, 0.55, 4]} />
        </mesh>
      ))}
    </group>
  );
}

function Dolphin() {
  const ref = useRef<Group>(null);
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.z = Math.sin(clock.elapsedTime * 1.4) * 0.25;
  });
  return (
    <group ref={ref} position={[0.2, 1.55, 0]} rotation={[0, 0.4, -0.6]}>
      <mesh material={mat("#4db7e8")}>
        <capsuleGeometry args={[0.16, 0.55, 4, 8]} />
      </mesh>
      <mesh position={[0.28, 0.12, 0]} rotation={[0, 0, -0.8]} material={mat("#7ed0ff")}>
        <coneGeometry args={[0.1, 0.22, 6]} />
      </mesh>
    </group>
  );
}

function Rocket() {
  return (
    <group position={[0.15, 1.15, 0]}>
      <mesh material={mat("#f4f7fb")}>
        <capsuleGeometry args={[0.18, 0.55, 4, 10]} />
      </mesh>
      <mesh position={[0, 0.5, 0]} material={mat("#ff4fa3")}>
        <coneGeometry args={[0.2, 0.32, 10]} />
      </mesh>
      <mesh position={[0, -0.4, 0]} material={mat("#ffb703", "#ff8a3d")}>
        <coneGeometry args={[0.12, 0.28, 8]} />
      </mesh>
      <mesh position={[0.16, -0.15, 0]} rotation={[0, 0, 0.4]} material={mat("#2f6bff")}>
        <boxGeometry args={[0.16, 0.08, 0.2]} />
      </mesh>
    </group>
  );
}

function Barn() {
  return (
    <group position={[0.1, 1.05, 0]}>
      <mesh position={[0, 0.35, 0]} material={mat("#e23b3b")}>
        <boxGeometry args={[0.8, 0.55, 0.6]} />
      </mesh>
      <mesh position={[0, 0.75, 0]} rotation={[0, 0, 0]} material={mat("#8d3b2f")}>
        <coneGeometry args={[0.62, 0.4, 4]} />
      </mesh>
      <mesh position={[0.55, 0.45, 0]} material={mat("#d8d2c4")}>
        <cylinderGeometry args={[0.14, 0.16, 0.7, 8]} />
      </mesh>
    </group>
  );
}

function Easel() {
  return (
    <group position={[0.15, 1.15, 0]}>
      <mesh position={[0, 0.45, 0]} material={mat("#f7f3ea")}>
        <boxGeometry args={[0.5, 0.62, 0.06]} />
      </mesh>
      <mesh position={[-0.12, 0.2, 0.05]} rotation={[0.2, 0, 0.15]} material={mat("#c4844a")}>
        <boxGeometry args={[0.05, 0.7, 0.05]} />
      </mesh>
      <mesh position={[0.12, 0.2, 0.05]} rotation={[0.2, 0, -0.15]} material={mat("#c4844a")}>
        <boxGeometry args={[0.05, 0.7, 0.05]} />
      </mesh>
      <mesh position={[-0.08, 0.55, 0.05]} material={mat("#ff4fa3")}>
        <sphereGeometry args={[0.06, 8, 8]} />
      </mesh>
      <mesh position={[0.1, 0.4, 0.05]} material={mat("#2f6bff")}>
        <sphereGeometry args={[0.05, 8, 8]} />
      </mesh>
    </group>
  );
}

function Stadium() {
  return (
    <group position={[0, 1.15, 0]}>
      <mesh material={mat("#ff8a3d")}>
        <torusGeometry args={[0.48, 0.1, 8, 18]} />
      </mesh>
      <mesh position={[0, 0.18, 0]} material={mat("#f4f7fb")}>
        <sphereGeometry args={[0.16, 12, 12]} />
      </mesh>
    </group>
  );
}

function City() {
  const towers = [
    { x: -0.28, h: 0.7, c: "#7ec8ff" },
    { x: 0.05, h: 0.95, c: "#f6e7c8" },
    { x: 0.38, h: 0.55, c: "#ffb703" },
  ];
  return (
    <group position={[0, 1.05, 0]}>
      {towers.map((tower) => (
        <mesh key={tower.x} position={[tower.x, tower.h / 2, 0]} material={mat(tower.c)}>
          <boxGeometry args={[0.28, tower.h, 0.28]} />
        </mesh>
      ))}
    </group>
  );
}

function Faliz({ scarf, hat, pet }: { scarf: string; hat: string; pet: string }) {
  const ref = useRef<Group>(null);
  const paw = useRef<Group>(null);
  const tail = useRef<Group>(null);
  const earL = useRef<Mesh>(null);
  const earR = useRef<Mesh>(null);
  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (ref.current) {
      ref.current.position.y = 1.08 + Math.sin(t * 2) * 0.04;
      ref.current.rotation.y = Math.sin(t * 0.6) * 0.18;
    }
    if (paw.current) paw.current.rotation.z = -0.4 + Math.sin(t * 3) * 0.55;
    if (tail.current) tail.current.rotation.z = Math.sin(t * 6) * 0.45;
    if (earL.current) earL.current.rotation.z = 0.7 + Math.sin(t * 2) * 0.08;
    if (earR.current) earR.current.rotation.z = -0.7 - Math.sin(t * 2) * 0.08;
  });
  return (
    <group ref={ref} position={[0, 1.08, 0.35]} scale={1.15}>
      <mesh position={[0, 0.22, 0]} scale={[1.05, 0.82, 0.9]} castShadow material={mat("#f08a2c")}>
        <sphereGeometry args={[0.52, 24, 18]} />
      </mesh>
      <mesh position={[0, 0.08, 0.22]} scale={[0.72, 0.55, 0.4]} material={mat("#ffe3c2")}>
        <sphereGeometry args={[0.42, 18, 14]} />
      </mesh>
      <mesh position={[0, 0.78, 0.05]} castShadow material={mat("#f08a2c")}>
        <sphereGeometry args={[0.4, 24, 18]} />
      </mesh>
      <mesh position={[0, 0.66, 0.26]} scale={[0.85, 0.7, 0.55]} material={mat("#ffe3c2")}>
        <sphereGeometry args={[0.26, 16, 12]} />
      </mesh>
      <mesh ref={earL} position={[-0.28, 1.02, -0.02]} rotation={[0.2, 0, 0.7]} scale={[0.55, 1.15, 0.28]} material={mat("#c86a18")}>
        <sphereGeometry args={[0.2, 12, 10]} />
      </mesh>
      <mesh ref={earR} position={[0.28, 1.02, -0.02]} rotation={[0.2, 0, -0.7]} scale={[0.55, 1.15, 0.28]} material={mat("#c86a18")}>
        <sphereGeometry args={[0.2, 12, 10]} />
      </mesh>
      <mesh position={[-0.14, 0.84, 0.32]} material={mat("#fffaf4")}>
        <sphereGeometry args={[0.09, 12, 12]} />
      </mesh>
      <mesh position={[0.14, 0.84, 0.32]} material={mat("#fffaf4")}>
        <sphereGeometry args={[0.09, 12, 12]} />
      </mesh>
      <mesh position={[-0.14, 0.83, 0.39]} material={mat("#5c3317")}>
        <sphereGeometry args={[0.045, 10, 10]} />
      </mesh>
      <mesh position={[0.14, 0.83, 0.39]} material={mat("#5c3317")}>
        <sphereGeometry args={[0.045, 10, 10]} />
      </mesh>
      <mesh position={[-0.11, 0.87, 0.42]} material={mat("#ffffff")}>
        <sphereGeometry args={[0.018, 6, 6]} />
      </mesh>
      <mesh position={[0.17, 0.87, 0.42]} material={mat("#ffffff")}>
        <sphereGeometry args={[0.018, 6, 6]} />
      </mesh>
      <mesh position={[0, 0.72, 0.42]} material={mat("#2a211c")}>
        <sphereGeometry args={[0.045, 10, 10]} />
      </mesh>
      <mesh position={[0, 0.64, 0.46]} material={mat("#ff8aa8")}>
        <sphereGeometry args={[0.045, 8, 8]} />
      </mesh>
      <mesh position={[0, 0.42, 0.18]} rotation={[Math.PI / 2, 0, 0]} material={mat(scarf)}>
        <torusGeometry args={[0.26, 0.045, 8, 16]} />
      </mesh>
      <mesh position={[0, 0.22, 0.4]} material={mat("#ffd23a", "#ffb703")}>
        <octahedronGeometry args={[0.08, 0]} />
      </mesh>
      <group ref={tail} position={[0, 0.32, -0.42]}>
        <mesh rotation={[0.9, 0, 0.4]} material={mat("#f08a2c")}>
          <sphereGeometry args={[0.12, 10, 10]} />
        </mesh>
      </group>
      <group ref={paw} position={[0.42, 0.55, 0.12]}>
        <mesh rotation={[0, 0, -0.9]} material={mat("#f08a2c")}>
          <capsuleGeometry args={[0.07, 0.22, 4, 8]} />
        </mesh>
        <mesh position={[0.16, 0.16, 0.04]} material={mat("#ffe3c2")}>
          <sphereGeometry args={[0.06, 8, 8]} />
        </mesh>
      </group>
      <mesh position={[-0.28, 0.02, 0.18]} material={mat("#f08a2c")}>
        <sphereGeometry args={[0.1, 10, 10]} />
      </mesh>
      <mesh position={[0.22, 0.02, 0.2]} material={mat("#f08a2c")}>
        <sphereGeometry args={[0.1, 10, 10]} />
      </mesh>
      <Hat hat={hat} />
      {pet !== "pup" && <Pet kind={pet} />}
    </group>
  );
}

function Hat({ hat }: { hat: string }) {
  if (hat === "cap") {
    return (
      <group position={[0.05, 1.16, 0.08]}>
        <mesh material={mat("#2f6bff")}>
          <cylinderGeometry args={[0.22, 0.22, 0.12, 12]} />
        </mesh>
        <mesh position={[0, -0.02, 0.18]} material={mat("#2f6bff")}>
          <boxGeometry args={[0.28, 0.04, 0.18]} />
        </mesh>
      </group>
    );
  }
  if (hat === "crown") {
    return (
      <mesh position={[0, 1.2, 0]} material={mat("#ffd23a", "#ffb703")}>
        <cylinderGeometry args={[0.2, 0.22, 0.16, 5]} />
      </mesh>
    );
  }
  if (hat === "wizard") {
    return (
      <mesh position={[0, 1.32, 0]} material={mat("#7b3ff2")}>
        <coneGeometry args={[0.22, 0.55, 10]} />
      </mesh>
    );
  }
  if (hat === "bow") {
    return (
      <mesh position={[0.26, 1.05, 0.08]} material={mat("#ff4fa3")}>
        <torusGeometry args={[0.1, 0.035, 6, 10]} />
      </mesh>
    );
  }
  return null;
}

function Pet({ kind }: { kind: string }) {
  const color = kind === "cat" ? "#f0a35a" : kind === "rabbit" ? "#f7f7f7" : kind === "bear" ? "#c4844a" : "#8fd16a";
  const ref = useRef<Group>(null);
  useFrame(({ clock }) => {
    if (ref.current) ref.current.position.y = 0.12 + Math.sin(clock.elapsedTime * 3) * 0.04;
  });
  return (
    <group ref={ref} position={[0.95, 0.12, 0.15]}>
      <mesh material={mat(color)}>
        <sphereGeometry args={[0.2, 14, 12]} />
      </mesh>
      <mesh position={[0, 0.2, 0]} material={mat(color)}>
        <sphereGeometry args={[0.13, 12, 10]} />
      </mesh>
    </group>
  );
}

function LobbyStar({
  id,
  position,
  taken,
  onTake,
}: {
  id: string;
  position: [number, number, number];
  taken: boolean;
  onTake: (id: string) => void;
}) {
  const ref = useRef<Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.elapsedTime * 1.4;
    ref.current.position.y = position[1] + Math.sin(clock.elapsedTime * 2 + position[0]) * 0.12;
  });
  if (taken) return null;
  return (
    <mesh
      ref={ref}
      position={position}
      material={mat("#ffd23a", "#ffb703")}
      onClick={(event) => {
        event.stopPropagation();
        onTake(id);
      }}
    >
      <octahedronGeometry args={[0.22, 0]} />
    </mesh>
  );
}

function Clouds() {
  const ref = useRef<Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += Math.min(delta, 0.05) * 0.03;
  });
  const puffs: [number, number, number][] = [
    [10, 8, 4],
    [-12, 9, 6],
    [4, 10, -12],
    [-6, 8.5, -10],
    [14, 7.5, -4],
  ];
  return (
    <group ref={ref}>
      {puffs.map((puff, i) => (
        <group key={i} position={puff}>
          <mesh material={mat("#ffffff")}>
            <sphereGeometry args={[0.7, 12, 10]} />
          </mesh>
          <mesh position={[0.55, -0.08, 0.1]} material={mat("#ffffff")}>
            <sphereGeometry args={[0.48, 10, 8]} />
          </mesh>
          <mesh position={[-0.5, -0.05, 0]} material={mat("#f7fbff")}>
            <sphereGeometry args={[0.42, 10, 8]} />
          </mesh>
        </group>
      ))}
    </group>
  );
}
