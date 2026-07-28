"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";
import "@/materials/LatticeMaterial";
import type { LatticeMaterialImplInstance } from "@/materials/LatticeMaterial";
import { useMousePosition } from "@/hooks/useMousePosition";
import { damp } from "@/utils/math";

interface LedgerLatticeProps {
  frozen?: boolean;
}

export function LedgerLattice({ frozen = false }: LedgerLatticeProps) {
  const meshRef = useRef<Mesh>(null);
  const materialRef = useRef<LatticeMaterialImplInstance>(null);
  const pointerRef = useMousePosition();
  const smoothedMouse = useRef({ x: 0, y: 0 });

  useFrame((_state, delta) => {
    if (frozen) return;
    const material = materialRef.current;
    if (!material) return;

    material.uTime += delta;

    smoothedMouse.current.x = damp(smoothedMouse.current.x, pointerRef.current.x, 3, delta);
    smoothedMouse.current.y = damp(smoothedMouse.current.y, pointerRef.current.y, 3, delta);
    material.uMouse = [smoothedMouse.current.x, -smoothedMouse.current.y];
  });

  return (
    <mesh ref={meshRef} position={[0, -2.6, -6]} rotation={[-Math.PI / 2.5, 0, 0]}>
      <planeGeometry args={[36, 36, 140, 140]} />
      <latticeMaterial ref={materialRef} uGridDensity={22} uOpacity={0.85} />
    </mesh>
  );
}
