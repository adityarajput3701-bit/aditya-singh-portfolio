"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { ACESFilmicToneMapping } from "three";
import { useDeviceTier } from "@/hooks/useDeviceTier";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { LedgerLattice } from "@/features/scene/LedgerLattice";
import { GlassPanels } from "@/features/scene/GlassPanels";
import { ParticleField } from "@/features/scene/ParticleField";
import { LightRig } from "@/components/three/LightRig";
import { CameraRig } from "@/components/three/CameraRig";
import { PostFX } from "@/effects/PostFX";

const PARTICLE_COUNT = { high: 2200, low: 500 } as const;

export function CanvasRoot() {
  const deviceTier = useDeviceTier();
  const prefersReducedMotion = useReducedMotion();
  const scrollProgress = useScrollProgress();
  const scrollProgressRef = useRef(0);

  useEffect(() => {
    scrollProgressRef.current = scrollProgress;
  }, [scrollProgress]);

  const frozen = prefersReducedMotion;
  const dpr: [number, number] = deviceTier === "high" ? [1, 1.75] : [1, 1];

  return (
    <div className="fixed inset-0 -z-10" aria-hidden="true">
      <Canvas
        dpr={dpr}
        camera={{ position: [0, 1.4, 9], fov: 45, near: 0.1, far: 60 }}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          toneMapping: ACESFilmicToneMapping,
        }}
      >
        <fog attach="fog" args={["#050608", 8, 26]} />
        <color attach="background" args={["#050608"]} />

        <Suspense fallback={null}>
          <LightRig />
          <LedgerLattice frozen={frozen} />
          <GlassPanels frozen={frozen} />
          <ParticleField count={PARTICLE_COUNT[deviceTier]} frozen={frozen} />
          <CameraRig scrollProgressRef={scrollProgressRef} frozen={frozen} />
          {deviceTier === "high" && !prefersReducedMotion && <PostFX />}
        </Suspense>
      </Canvas>
    </div>
  );
}
