import { i as __toESM } from "../_runtime.mjs";
import { a as useFrame, c as MeshToonMaterial, f as require_jsx_runtime, i as Canvas, l as NearestFilter, n as Html, p as require_react, s as CanvasTexture, t as OrbitControls, u as SRGBColorSpace } from "../_libs/@react-three/drei+[...].mjs";
import { n as WORLDS } from "./routes-CJB_Wfue.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/WorldLobby-CFxiQaQp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var mats = /* @__PURE__ */ new Map();
function toonMap() {
	const canvas = document.createElement("canvas");
	canvas.width = 5;
	canvas.height = 1;
	const g = canvas.getContext("2d");
	if (!g) return null;
	[
		"#4a4a4a",
		"#7a7a7a",
		"#b0b0b0",
		"#e4e4e4",
		"#ffffff"
	].forEach((color, i) => {
		g.fillStyle = color;
		g.fillRect(i, 0, 1, 1);
	});
	const tex = new CanvasTexture(canvas);
	tex.magFilter = NearestFilter;
	tex.minFilter = NearestFilter;
	tex.colorSpace = SRGBColorSpace;
	return tex;
}
var gradient;
function mat(color, emissive = "#000000") {
	const key = `${color}|${emissive}`;
	const hit = mats.get(key);
	if (hit) return hit;
	if (gradient === void 0) gradient = toonMap();
	const material = new MeshToonMaterial({
		color,
		gradientMap: gradient ?? void 0,
		emissive,
		emissiveIntensity: emissive === "#000000" ? 0 : .45
	});
	mats.set(key, material);
	return material;
}
function WorldLobby(props) {
	const rich = props.quality !== "low";
	const crisp = props.quality === "high";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Canvas, {
		camera: {
			position: [
				0,
				13,
				20
			],
			fov: 42
		},
		dpr: crisp ? [1, 1.6] : 1,
		shadows: crisp,
		gl: {
			antialias: crisp,
			alpha: false
		},
		onCreated: ({ gl }) => {
			gl.toneMapping = 4;
			gl.toneMappingExposure = 1.05;
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sky, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hemisphereLight", { args: [
				"#fff4d6",
				"#3d7a48",
				.85
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: .28 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
				position: [
					16,
					24,
					10
				],
				intensity: 1.45,
				castShadow: crisp,
				"shadow-mapSize-width": 1024,
				"shadow-mapSize-height": 1024,
				"shadow-camera-near": 2,
				"shadow-camera-far": 48,
				"shadow-camera-left": -22,
				"shadow-camera-right": 22,
				"shadow-camera-top": 22,
				"shadow-camera-bottom": -22
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
				position: [
					-10,
					8,
					-8
				],
				intensity: .35,
				color: "#d7ecff"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Water, { simple: !rich }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {}),
			rich && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rainbow, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clouds, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
				position: [
					0,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeIsland, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faliz, {
					scarf: props.scarf,
					hat: props.hat,
					pet: props.pet
				})]
			}),
			WORLDS.map((world, i) => {
				const angle = i / WORLDS.length * Math.PI * 2 - Math.PI / 2;
				const x = Math.sin(angle) * 13.2;
				const z = Math.cos(angle) * 13.2;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Island, {
					world,
					position: [
						x,
						0,
						z
					],
					selected: props.selected === world.id,
					onClick: () => props.onSelect(world.id)
				}, world.id);
			}),
			STAR_SPOTS.map((spot) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LobbyStar, {
				id: spot.id,
				position: spot.position,
				taken: props.found.includes(spot.id),
				onTake: props.onStar
			}, spot.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitControls, {
				enablePan: true,
				enableDamping: true,
				dampingFactor: .08,
				maxPolarAngle: 1.15,
				minPolarAngle: .35,
				minDistance: 9,
				maxDistance: 32,
				target: [
					0,
					1.2,
					0
				]
			})
		]
	});
}
var STAR_SPOTS = [
	{
		id: "lobby-1",
		position: [
			3.4,
			3.4,
			2.2
		]
	},
	{
		id: "lobby-2",
		position: [
			-4.2,
			3.6,
			1.6
		]
	},
	{
		id: "lobby-3",
		position: [
			1.5,
			4.2,
			-4.6
		]
	},
	{
		id: "lobby-4",
		position: [
			-2.4,
			3.8,
			-4.2
		]
	},
	{
		id: "lobby-5",
		position: [
			6.5,
			3.5,
			-1.2
		]
	},
	{
		id: "lobby-6",
		position: [
			-7.2,
			3.7,
			.4
		]
	}
];
function Sky() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		scale: [
			-1,
			1,
			1
		],
		frustumCulled: false,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
			90,
			28,
			18
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("shaderMaterial", {
			side: 1,
			depthWrite: false,
			vertexShader: `varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
			fragmentShader: `varying vec3 vP; void main(){
          float h = normalize(vP).y;
          vec3 top = vec3(0.29, 0.58, 0.98);
          vec3 mid = vec3(0.56, 0.84, 1.0);
          vec3 horizon = vec3(1.0, 0.86, 0.64);
          float t = smoothstep(-0.05, 0.55, h);
          vec3 col = mix(horizon, mix(mid, top, smoothstep(0.15, 0.8, h)), t);
          gl_FragColor = vec4(col, 1.0);
        }`
		})]
	});
}
function Sun() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
		position: [
			-16,
			14,
			-22
		],
		material: mat("#ffe38a", "#ffb703"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
			2.1,
			20,
			16
		] })
	});
}
function Rainbow() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
		position: [
			7,
			8.5,
			-16
		],
		rotation: [
			.55,
			-.2,
			0
		],
		children: [
			"#ff5a5a",
			"#ff9f1c",
			"#ffe66d",
			"#5dce6a",
			"#3aa0ff",
			"#8b5cf6"
		].map((color, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
			rotation: [
				0,
				0,
				Math.PI
			],
			material: mat(color, color),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
				7.2 - i * .32,
				.13,
				6,
				28,
				Math.PI
			] })
		}, color))
	});
}
function Water({ simple }) {
	const uniforms = (0, import_react.useMemo)(() => ({ uTime: { value: 0 } }), []);
	useFrame((_, delta) => {
		uniforms.uTime.value += Math.min(delta, .05);
	});
	if (simple) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
		"rotation-x": -Math.PI / 2,
		position: [
			0,
			-.45,
			0
		],
		material: mat("#2f8fd4"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circleGeometry", { args: [55, 40] })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		"rotation-x": -Math.PI / 2,
		position: [
			0,
			-.45,
			0
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [
			110,
			110,
			48,
			48
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("shaderMaterial", {
			uniforms,
			vertexShader: `
          uniform float uTime;
          varying vec2 vUv;
          void main() {
            vUv = uv;
            vec3 p = position;
            p.z += sin(position.x * 0.22 + uTime * 1.3) * 0.16 + cos(position.y * 0.18 + uTime) * 0.1;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
          }
        `,
			fragmentShader: `
          varying vec2 vUv;
          void main() {
            vec3 deep = vec3(0.08, 0.48, 0.82);
            vec3 lite = vec3(0.45, 0.82, 0.98);
            float ripple = sin(vUv.x * 40.0) * 0.04 + sin(vUv.y * 28.0) * 0.04;
            vec3 col = mix(deep, lite, vUv.y * 0.65 + 0.2 + ripple);
            gl_FragColor = vec4(col, 1.0);
          }
        `
		})]
	});
}
function HomeIsland() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IslandBody, {
			radius: 3.4,
			color: "#6ecf57",
			dirt: "#c4a06a"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tree, {
			position: [
				-1.8,
				1.05,
				.8
			],
			scale: 1.15
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tree, {
			position: [
				1.9,
				1.05,
				1.1
			],
			scale: .9
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tree, {
			position: [
				-.4,
				1.05,
				-1.8
			],
			scale: 1.05
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bush, {
			position: [
				1.2,
				1.05,
				-1.3
			],
			color: "#3aaa4d"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bush, {
			position: [
				-1.5,
				1.05,
				-.6
			],
			color: "#7ed36a"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flower, {
			position: [
				.9,
				1.12,
				1.5
			],
			color: "#ff4fa3"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flower, {
			position: [
				-.7,
				1.12,
				1.6
			],
			color: "#ffb703"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flower, {
			position: [
				1.6,
				1.12,
				.1
			],
			color: "#7b3ff2"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waterfall, {})
	] });
}
function Island({ world, position, selected, onClick }) {
	const ref = (0, import_react.useRef)(null);
	useFrame(({ clock }) => {
		if (!ref.current) return;
		ref.current.position.y = Math.sin(clock.elapsedTime * .8 + position[0]) * .12;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
		ref,
		position,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			onClick: (event) => {
				event.stopPropagation();
				onClick();
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IslandBody, {
					radius: 2.35,
					color: world.land,
					dirt: "#b08968"
				}),
				selected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
					"rotation-x": -Math.PI / 2,
					position: [
						0,
						1.2,
						0
					],
					material: mat("#ffd23a", "#ffb703"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
						2.55,
						.07,
						8,
						28
					] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tree, {
					position: [
						-1.15,
						1.02,
						.7
					],
					scale: .72
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tree, {
					position: [
						1.05,
						1.02,
						-.85
					],
					scale: .62
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landmark, { kind: world.landmark }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Html, {
					position: [
						0,
						2.85,
						0
					],
					center: true,
					distanceFactor: 18,
					zIndexRange: [20, 0],
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none whitespace-nowrap rounded-full bg-cream px-2 py-1 font-display text-xs text-ink shadow-sm",
						children: world.name
					})
				})
			]
		})
	});
}
function IslandBody({ radius, color, dirt }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
			position: [
				0,
				.15,
				0
			],
			castShadow: true,
			receiveShadow: true,
			material: mat(dirt),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				radius * .72,
				radius * .92,
				1.35,
				10
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
			position: [
				0,
				.72,
				0
			],
			castShadow: true,
			receiveShadow: true,
			material: mat(color),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				radius,
				radius * .96,
				.55,
				18
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
			position: [
				0,
				1.02,
				0
			],
			"rotation-x": -Math.PI / 2,
			receiveShadow: true,
			material: mat(color),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circleGeometry", { args: [radius * .98, 20] })
		})
	] });
}
function Tree({ position, scale = 1 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position,
		scale,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					0,
					.28,
					0
				],
				material: mat("#8d5a32"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.08,
					.12,
					.5,
					6
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					0,
					.72,
					0
				],
				material: mat("#2f9e44"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.36,
					12,
					10
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					.16,
					.58,
					.08
				],
				material: mat("#57c46a"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.22,
					10,
					8
				] })
			})
		]
	});
}
function Bush({ position, color }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
		position,
		material: mat(color),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
			.28,
			10,
			8
		] })
	});
}
function Flower({ position, color }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
			material: mat("#3aaa4d"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				.02,
				.02,
				.22,
				5
			] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
			position: [
				0,
				.14,
				0
			],
			material: mat(color),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				.08,
				8,
				8
			] })
		})]
	});
}
function Waterfall() {
	const ref = (0, import_react.useRef)(null);
	useFrame(({ clock }) => {
		const group = ref.current;
		if (!group) return;
		group.children.forEach((child, i) => {
			const drop = (clock.elapsedTime * 1.6 + i * .22) % 1.3;
			child.position.y = .35 - drop;
		});
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position: [
			2.15,
			1.15,
			-.35
		],
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					0,
					.55,
					-.05
				],
				material: mat("#9aa8b5"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.55,
					.4,
					.45
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					.18,
					.85,
					-.05
				],
				material: mat("#b7c3cc"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.28,
					.28,
					.28
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
				ref,
				children: [
					0,
					1,
					2,
					3,
					4
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
					material: mat("#e7fbff"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.16,
						.22,
						.08
					] })
				}, i))
			})
		]
	});
}
function Landmark({ kind }) {
	if (kind === "castle") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Castle, { roof: "#2f6bff" });
	if (kind === "magic") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Castle, { roof: "#7b3ff2" });
	if (kind === "puzzle") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PuzzleMark, {});
	if (kind === "arcade") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArcadeMark, {});
	if (kind === "race") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KartMark, {});
	if (kind === "jungle") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palm, {});
	if (kind === "ocean") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dolphin, {});
	if (kind === "space") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rocket, {});
	if (kind === "farm") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Barn, {});
	if (kind === "studio") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Easel, {});
	if (kind === "sport") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stadium, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(City, {});
}
function Castle({ roof }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position: [
			.15,
			1.05,
			.1
		],
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					0,
					.45,
					0
				],
				material: mat("#f6e7c8"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.85,
					.7,
					.7
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					0,
					.28,
					.36
				],
				material: mat("#8d5a32"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.22,
					.32,
					.08
				] })
			}),
			[-.38, .38].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
				position: [
					x,
					.7,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
					material: mat("#f6e7c8"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.16,
						.18,
						.7,
						8
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
					position: [
						0,
						.48,
						0
					],
					material: mat(roof),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
						.24,
						.38,
						8
					] })
				})]
			}, x)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					0,
					.95,
					0
				],
				material: mat(roof),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
					.38,
					.48,
					8
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					0,
					1.28,
					0
				],
				material: mat("#ffb703", "#ffb703"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.03,
					.22,
					.03
				] })
			})
		]
	});
}
function PuzzleMark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position: [
			.1,
			1.35,
			0
		],
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					-.18,
					0,
					0
				],
				material: mat("#7b3ff2"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.38,
					.38,
					.12
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					.18,
					.05,
					.04
				],
				material: mat("#ffb703"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.38,
					.38,
					.12
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					.02,
					.32,
					0
				],
				material: mat("#3ddc6e"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.32,
					.28,
					.12
				] })
			})
		]
	});
}
function ArcadeMark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position: [
			.15,
			1.05,
			0
		],
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					0,
					.45,
					0
				],
				material: mat("#ff4fa3"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.55,
					.8,
					.4
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					0,
					.62,
					.18
				],
				material: mat("#7ec8ff", "#2f6bff"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.36,
					.28,
					.06
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					0,
					.12,
					.16
				],
				material: mat("#1c2b4a"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.28,
					.08,
					.08
				] })
			})
		]
	});
}
function KartMark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position: [
			.2,
			1.15,
			0
		],
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				"rotation-x": -Math.PI / 2,
				material: mat("#2a2a2a"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
					.55,
					.08,
					6,
					18
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					.15,
					.16,
					0
				],
				material: mat("#2f6bff"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.42,
					.16,
					.24
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					.05,
					.08,
					.16
				],
				material: mat("#1c2b4a"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.08,
					.08,
					.06,
					8
				] })
			})
		]
	});
}
function Palm() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position: [
			.35,
			1.05,
			0
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
			position: [
				0,
				.45,
				0
			],
			rotation: [
				.1,
				0,
				.15
			],
			material: mat("#c4844a"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				.07,
				.1,
				.9,
				6
			] })
		}), [
			0,
			1,
			2,
			3,
			4
		].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
			position: [
				0,
				.95,
				0
			],
			rotation: [
				.7,
				i / 5 * Math.PI * 2,
				0
			],
			material: mat("#2f9e44"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
				.16,
				.55,
				4
			] })
		}, i))]
	});
}
function Dolphin() {
	const ref = (0, import_react.useRef)(null);
	useFrame(({ clock }) => {
		if (ref.current) ref.current.rotation.z = Math.sin(clock.elapsedTime * 1.4) * .25;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref,
		position: [
			.2,
			1.55,
			0
		],
		rotation: [
			0,
			.4,
			-.6
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
			material: mat("#4db7e8"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("capsuleGeometry", { args: [
				.16,
				.55,
				4,
				8
			] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
			position: [
				.28,
				.12,
				0
			],
			rotation: [
				0,
				0,
				-.8
			],
			material: mat("#7ed0ff"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
				.1,
				.22,
				6
			] })
		})]
	});
}
function Rocket() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position: [
			.15,
			1.15,
			0
		],
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				material: mat("#f4f7fb"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("capsuleGeometry", { args: [
					.18,
					.55,
					4,
					10
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					0,
					.5,
					0
				],
				material: mat("#ff4fa3"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
					.2,
					.32,
					10
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					0,
					-.4,
					0
				],
				material: mat("#ffb703", "#ff8a3d"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
					.12,
					.28,
					8
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					.16,
					-.15,
					0
				],
				rotation: [
					0,
					0,
					.4
				],
				material: mat("#2f6bff"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.16,
					.08,
					.2
				] })
			})
		]
	});
}
function Barn() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position: [
			.1,
			1.05,
			0
		],
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					0,
					.35,
					0
				],
				material: mat("#e23b3b"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.8,
					.55,
					.6
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					0,
					.75,
					0
				],
				rotation: [
					0,
					0,
					0
				],
				material: mat("#8d3b2f"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
					.62,
					.4,
					4
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					.55,
					.45,
					0
				],
				material: mat("#d8d2c4"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.14,
					.16,
					.7,
					8
				] })
			})
		]
	});
}
function Easel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position: [
			.15,
			1.15,
			0
		],
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					0,
					.45,
					0
				],
				material: mat("#f7f3ea"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.5,
					.62,
					.06
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					-.12,
					.2,
					.05
				],
				rotation: [
					.2,
					0,
					.15
				],
				material: mat("#c4844a"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.05,
					.7,
					.05
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					.12,
					.2,
					.05
				],
				rotation: [
					.2,
					0,
					-.15
				],
				material: mat("#c4844a"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.05,
					.7,
					.05
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					-.08,
					.55,
					.05
				],
				material: mat("#ff4fa3"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.06,
					8,
					8
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					.1,
					.4,
					.05
				],
				material: mat("#2f6bff"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.05,
					8,
					8
				] })
			})
		]
	});
}
function Stadium() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position: [
			0,
			1.15,
			0
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
			material: mat("#ff8a3d"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
				.48,
				.1,
				8,
				18
			] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
			position: [
				0,
				.18,
				0
			],
			material: mat("#f4f7fb"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				.16,
				12,
				12
			] })
		})]
	});
}
function City() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
		position: [
			0,
			1.05,
			0
		],
		children: [
			{
				x: -.28,
				h: .7,
				c: "#7ec8ff"
			},
			{
				x: .05,
				h: .95,
				c: "#f6e7c8"
			},
			{
				x: .38,
				h: .55,
				c: "#ffb703"
			}
		].map((tower) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
			position: [
				tower.x,
				tower.h / 2,
				0
			],
			material: mat(tower.c),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.28,
				tower.h,
				.28
			] })
		}, tower.x))
	});
}
function Faliz({ scarf, hat, pet }) {
	const ref = (0, import_react.useRef)(null);
	const paw = (0, import_react.useRef)(null);
	const tail = (0, import_react.useRef)(null);
	const earL = (0, import_react.useRef)(null);
	const earR = (0, import_react.useRef)(null);
	useFrame(({ clock }) => {
		const t = clock.elapsedTime;
		if (ref.current) {
			ref.current.position.y = 1.08 + Math.sin(t * 2) * .04;
			ref.current.rotation.y = Math.sin(t * .6) * .18;
		}
		if (paw.current) paw.current.rotation.z = -.4 + Math.sin(t * 3) * .55;
		if (tail.current) tail.current.rotation.z = Math.sin(t * 6) * .45;
		if (earL.current) earL.current.rotation.z = .7 + Math.sin(t * 2) * .08;
		if (earR.current) earR.current.rotation.z = -.7 - Math.sin(t * 2) * .08;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref,
		position: [
			0,
			1.08,
			.35
		],
		scale: 1.15,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					0,
					.22,
					0
				],
				scale: [
					1.05,
					.82,
					.9
				],
				castShadow: true,
				material: mat("#f08a2c"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.52,
					24,
					18
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					0,
					.08,
					.22
				],
				scale: [
					.72,
					.55,
					.4
				],
				material: mat("#ffe3c2"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.42,
					18,
					14
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					0,
					.78,
					.05
				],
				castShadow: true,
				material: mat("#f08a2c"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.4,
					24,
					18
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					0,
					.66,
					.26
				],
				scale: [
					.85,
					.7,
					.55
				],
				material: mat("#ffe3c2"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.26,
					16,
					12
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				ref: earL,
				position: [
					-.28,
					1.02,
					-.02
				],
				rotation: [
					.2,
					0,
					.7
				],
				scale: [
					.55,
					1.15,
					.28
				],
				material: mat("#c86a18"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.2,
					12,
					10
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				ref: earR,
				position: [
					.28,
					1.02,
					-.02
				],
				rotation: [
					.2,
					0,
					-.7
				],
				scale: [
					.55,
					1.15,
					.28
				],
				material: mat("#c86a18"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.2,
					12,
					10
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					-.14,
					.84,
					.32
				],
				material: mat("#fffaf4"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.09,
					12,
					12
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					.14,
					.84,
					.32
				],
				material: mat("#fffaf4"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.09,
					12,
					12
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					-.14,
					.83,
					.39
				],
				material: mat("#5c3317"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.045,
					10,
					10
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					.14,
					.83,
					.39
				],
				material: mat("#5c3317"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.045,
					10,
					10
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					-.11,
					.87,
					.42
				],
				material: mat("#ffffff"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.018,
					6,
					6
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					.17,
					.87,
					.42
				],
				material: mat("#ffffff"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.018,
					6,
					6
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					0,
					.72,
					.42
				],
				material: mat("#2a211c"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.045,
					10,
					10
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					0,
					.64,
					.46
				],
				material: mat("#ff8aa8"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.045,
					8,
					8
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					0,
					.42,
					.18
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				material: mat(scarf),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
					.26,
					.045,
					8,
					16
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					0,
					.22,
					.4
				],
				material: mat("#ffd23a", "#ffb703"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("octahedronGeometry", { args: [.08, 0] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
				ref: tail,
				position: [
					0,
					.32,
					-.42
				],
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
					rotation: [
						.9,
						0,
						.4
					],
					material: mat("#f08a2c"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
						.12,
						10,
						10
					] })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
				ref: paw,
				position: [
					.42,
					.55,
					.12
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
					rotation: [
						0,
						0,
						-.9
					],
					material: mat("#f08a2c"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("capsuleGeometry", { args: [
						.07,
						.22,
						4,
						8
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
					position: [
						.16,
						.16,
						.04
					],
					material: mat("#ffe3c2"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
						.06,
						8,
						8
					] })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					-.28,
					.02,
					.18
				],
				material: mat("#f08a2c"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.1,
					10,
					10
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					.22,
					.02,
					.2
				],
				material: mat("#f08a2c"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.1,
					10,
					10
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hat, { hat }),
			pet !== "pup" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pet, { kind: pet })
		]
	});
}
function Hat({ hat }) {
	if (hat === "cap") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position: [
			.05,
			1.16,
			.08
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
			material: mat("#2f6bff"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				.22,
				.22,
				.12,
				12
			] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
			position: [
				0,
				-.02,
				.18
			],
			material: mat("#2f6bff"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.28,
				.04,
				.18
			] })
		})]
	});
	if (hat === "crown") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
		position: [
			0,
			1.2,
			0
		],
		material: mat("#ffd23a", "#ffb703"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
			.2,
			.22,
			.16,
			5
		] })
	});
	if (hat === "wizard") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
		position: [
			0,
			1.32,
			0
		],
		material: mat("#7b3ff2"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
			.22,
			.55,
			10
		] })
	});
	if (hat === "bow") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
		position: [
			.26,
			1.05,
			.08
		],
		material: mat("#ff4fa3"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
			.1,
			.035,
			6,
			10
		] })
	});
	return null;
}
function Pet({ kind }) {
	const color = kind === "cat" ? "#f0a35a" : kind === "rabbit" ? "#f7f7f7" : kind === "bear" ? "#c4844a" : "#8fd16a";
	const ref = (0, import_react.useRef)(null);
	useFrame(({ clock }) => {
		if (ref.current) ref.current.position.y = .12 + Math.sin(clock.elapsedTime * 3) * .04;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref,
		position: [
			.95,
			.12,
			.15
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
			material: mat(color),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				.2,
				14,
				12
			] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
			position: [
				0,
				.2,
				0
			],
			material: mat(color),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				.13,
				12,
				10
			] })
		})]
	});
}
function LobbyStar({ id, position, taken, onTake }) {
	const ref = (0, import_react.useRef)(null);
	useFrame(({ clock }) => {
		if (!ref.current) return;
		ref.current.rotation.y = clock.elapsedTime * 1.4;
		ref.current.position.y = position[1] + Math.sin(clock.elapsedTime * 2 + position[0]) * .12;
	});
	if (taken) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
		ref,
		position,
		material: mat("#ffd23a", "#ffb703"),
		onClick: (event) => {
			event.stopPropagation();
			onTake(id);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("octahedronGeometry", { args: [.22, 0] })
	});
}
function Clouds() {
	const ref = (0, import_react.useRef)(null);
	useFrame((_, delta) => {
		if (ref.current) ref.current.rotation.y += Math.min(delta, .05) * .03;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
		ref,
		children: [
			[
				10,
				8,
				4
			],
			[
				-12,
				9,
				6
			],
			[
				4,
				10,
				-12
			],
			[
				-6,
				8.5,
				-10
			],
			[
				14,
				7.5,
				-4
			]
		].map((puff, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: puff,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
					material: mat("#ffffff"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
						.7,
						12,
						10
					] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
					position: [
						.55,
						-.08,
						.1
					],
					material: mat("#ffffff"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
						.48,
						10,
						8
					] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
					position: [
						-.5,
						-.05,
						0
					],
					material: mat("#f7fbff"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
						.42,
						10,
						8
					] })
				})
			]
		}, i))
	});
}
//#endregion
export { WorldLobby };
