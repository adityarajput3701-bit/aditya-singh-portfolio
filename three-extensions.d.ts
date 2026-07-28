import type { ReactThreeFiber, ThreeElements } from "@react-three/fiber";
import type { LatticeMaterialImpl, LatticeMaterialImplInstance } from "@/materials/LatticeMaterial";
import type { ParticleMaterialImpl, ParticleMaterialImplInstance } from "@/materials/ParticleMaterial";

// React 19's types dropped the old `declare global { namespace JSX {} }`
// pattern in favor of a JSX namespace nested inside the "react" module
// (React.JSX). @react-three/fiber v8 still augments the old global
// namespace, which React 19 no longer reads — so without this file, every
// built-in three element (<mesh>, <fog>, <group>, ...) fails type-checking.
// Re-declaring against "react" here restores both R3F's own elements
// (via ThreeElements) and our custom shader materials.
declare module "react" {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {
      latticeMaterial: ReactThreeFiber.MaterialNode<LatticeMaterialImplInstance, typeof LatticeMaterialImpl>;
      particleMaterial: ReactThreeFiber.MaterialNode<ParticleMaterialImplInstance, typeof ParticleMaterialImpl>;
    }
  }
}

export {};
