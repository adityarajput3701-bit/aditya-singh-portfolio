"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { BufferAttribute } from "three";
import "@/materials/ParticleMaterial";
import type { ParticleMaterialImplInstance } from "@/materials/ParticleMaterial";

interface ParticleFieldProps {
  count: number;
  frozen?: boolean;
}

export function ParticleField({ count, frozen = false }: ParticleFieldProps) {
  const materialRef = useRef<ParticleMaterialImplInstance>(null);
  const { gl } = useThree();

  const { positionAttribute, seedAttribute, sizeAttribute } = useMemo(() => {
    const positionArray = new Float32Array(count * 3);
    const seedArray = new Float32Array(count);
    const sizeArray = new Float32Array(count);

    for (let i = 0; i < count; i += 1) {
      positionArray[i * 3] = (Math.random() - 0.5) * 30;
      positionArray[i * 3 + 1] = (Math.random() - 0.5) * 14;
      positionArray[i * 3 + 2] = (Math.random() - 0.5) * 30 - 8;
      seedArray[i] = Math.random();
      sizeArray[i] = 4 + Math.random() * 10;
    }

    return {
      positionAttribute: new BufferAttribute(positionArray, 3),
      seedAttribute: new BufferAttribute(seedArray, 1),
      sizeAttribute: new BufferAttribute(sizeArray, 1),
    };
  }, [count]);

  useFrame((_state, delta) => {
    if (frozen) return;
    const material = materialRef.current;
    if (!material) return;
    material.uTime += delta;
    material.uPixelRatio = gl.getPixelRatio();
  });

  return (
    <points>
      <bufferGeometry>
        <primitive attach="attributes-position" object={positionAttribute} />
        <primitive attach="attributes-aSeed" object={seedAttribute} />
        <primitive attach="attributes-aSize" object={sizeAttribute} />
      </bufferGeometry>
      <particleMaterial ref={materialRef} uPixelRatio={gl.getPixelRatio()} />
    </points>
  );
}
