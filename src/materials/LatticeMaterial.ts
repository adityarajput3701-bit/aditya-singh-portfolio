import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { Color, DoubleSide, type ShaderMaterial } from "three";
import { latticeFragmentShader, latticeVertexShader } from "@/shaders/lattice";

export const LatticeMaterialImpl = shaderMaterial(
  {
    uTime: 0,
    uMouse: [0, 0],
    uColorGold: new Color("#e8a94a"),
    uColorElectric: new Color("#4a90e2"),
    uColorBase: new Color("#0d1420"),
    uOpacity: 1,
    uGridDensity: 24,
  },
  latticeVertexShader,
  latticeFragmentShader,
  (material) => {
    if (!material) return;
    material.transparent = true;
    material.side = DoubleSide;
    material.depthWrite = false;
  }
);

// drei's shaderMaterial() factory returns a plain `typeof THREE.ShaderMaterial`
// constructor type — it doesn't know about the custom uniforms above, so
// `InstanceType<typeof LatticeMaterialImpl>` alone would be missing uTime,
// uMouse, etc. This type stitches the uniforms back onto the instance type
// for use in refs and JSX intrinsic-element typing.
export type LatticeMaterialImplInstance = ShaderMaterial & {
  uTime: number;
  uMouse: [number, number];
  uColorGold: Color;
  uColorElectric: Color;
  uColorBase: Color;
  uOpacity: number;
  uGridDensity: number;
};

extend({ LatticeMaterial: LatticeMaterialImpl });
