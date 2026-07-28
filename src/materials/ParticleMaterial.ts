import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { AdditiveBlending, Color, type ShaderMaterial } from "three";
import { particleFragmentShader, particleVertexShader } from "@/shaders/particles";

export const ParticleMaterialImpl = shaderMaterial(
  {
    uTime: 0,
    uPixelRatio: 1,
    uColorGold: new Color("#e8a94a"),
    uColorElectric: new Color("#4a90e2"),
  },
  particleVertexShader,
  particleFragmentShader,
  (material) => {
    if (!material) return;
    material.transparent = true;
    material.depthWrite = false;
    material.blending = AdditiveBlending;
  }
);

// See the matching comment in LatticeMaterial.ts — drei's shaderMaterial()
// constructor type doesn't carry custom uniforms, so we stitch them back on.
export type ParticleMaterialImplInstance = ShaderMaterial & {
  uTime: number;
  uPixelRatio: number;
  uColorGold: Color;
  uColorElectric: Color;
};

extend({ ParticleMaterial: ParticleMaterialImpl });
