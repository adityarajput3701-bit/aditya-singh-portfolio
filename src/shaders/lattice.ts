import { noiseGLSL } from "@/shaders/noise";

export const latticeVertexShader = /* glsl */ `
  uniform float uTime;
  uniform vec2 uMouse;

  varying vec2 vUv;
  varying float vElevation;
  varying vec3 vWorldPosition;

  ${noiseGLSL}

  void main() {
    vUv = uv;

    vec3 pos = position;

    // Slow-drifting wave field: two noise octaves so it never reads as a static ripple
    float wave = snoise(vec3(pos.x * 0.15, pos.y * 0.15, uTime * 0.06)) * 0.9;
    wave += snoise(vec3(pos.x * 0.4 + 50.0, pos.y * 0.4, uTime * 0.1)) * 0.25;

    // Gentle bulge toward the mouse position, like pressure on a taut surface
    float mouseDist = distance(uv, uMouse + 0.5);
    float mouseInfluence = smoothstep(0.5, 0.0, mouseDist) * 0.6;

    pos.z += wave + mouseInfluence;
    vElevation = wave;

    vec4 worldPosition = modelMatrix * vec4(pos, 1.0);
    vWorldPosition = worldPosition.xyz;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

export const latticeFragmentShader = /* glsl */ `
  uniform float uTime;
  uniform vec3 uColorGold;
  uniform vec3 uColorElectric;
  uniform vec3 uColorBase;
  uniform float uOpacity;
  uniform float uGridDensity;

  varying vec2 vUv;
  varying float vElevation;
  varying vec3 vWorldPosition;

  // Thin anti-aliased grid lines, like ruled ledger paper rendered in 3D
  float gridLine(vec2 uv, float density) {
    vec2 grid = abs(fract(uv * density - 0.5) - 0.5) / fwidth(uv * density);
    float line = min(grid.x, grid.y);
    return 1.0 - clamp(line, 0.0, 1.0);
  }

  void main() {
    float minorGrid = gridLine(vUv, uGridDensity) * 0.35;
    float majorGrid = gridLine(vUv, uGridDensity / 8.0) * 0.9;
    float linePattern = max(minorGrid, majorGrid);

    // Elevation-tinted color: peaks lean electric-blue, troughs stay near-black
    vec3 baseColor = mix(uColorBase, uColorElectric, smoothstep(-0.3, 0.6, vElevation) * 0.4);

    // Horizon fade so the plane dissolves into the fog rather than showing a hard edge
    float distanceFade = smoothstep(28.0, 6.0, length(vWorldPosition.xz));

    vec3 lineColor = mix(baseColor, uColorGold, 0.5);
    vec3 color = mix(baseColor * 0.4, lineColor, linePattern);

    float alpha = (0.15 + linePattern * 0.5) * distanceFade * uOpacity;

    gl_FragColor = vec4(color, alpha);
  }
`;
