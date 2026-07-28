import { noiseGLSL } from "@/shaders/noise";

export const particleVertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uPixelRatio;

  attribute float aSeed;
  attribute float aSize;

  varying float vSeed;
  varying float vFade;

  ${noiseGLSL}

  void main() {
    vSeed = aSeed;

    vec3 pos = position;

    // Each particle drifts along its own noise field, seeded per-instance so
    // the motion never repeats in an obviously synchronized way
    float driftX = snoise(vec3(aSeed * 12.3, uTime * 0.05, 0.0));
    float driftY = snoise(vec3(aSeed * 7.1, uTime * 0.04, 5.0));
    float driftZ = snoise(vec3(aSeed * 3.7, uTime * 0.03, 10.0));

    pos += vec3(driftX, driftY, driftZ) * 0.6;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

    // Fade with camera distance so near particles don't overpower, far ones don't vanish abruptly
    vFade = smoothstep(40.0, 4.0, -mvPosition.z);

    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = aSize * uPixelRatio * (30.0 / -mvPosition.z);
  }
`;

export const particleFragmentShader = /* glsl */ `
  uniform vec3 uColorGold;
  uniform vec3 uColorElectric;

  varying float vSeed;
  varying float vFade;

  void main() {
    // Soft circular sprite instead of a hard square point
    float distanceToCenter = length(gl_PointCoord - 0.5);
    float glow = smoothstep(0.5, 0.0, distanceToCenter);

    vec3 color = mix(uColorElectric, uColorGold, vSeed);
    float alpha = glow * glow * vFade * 0.85;

    gl_FragColor = vec4(color, alpha);
  }
`;
