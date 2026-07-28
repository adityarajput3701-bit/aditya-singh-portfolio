"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";
import { damp, lerp } from "@/utils/math";

interface CameraRigProps {
  scrollProgressRef: React.RefObject<number>;
  frozen?: boolean;
}

const BASE_POSITION = { x: 0, y: 1.4, z: 9 };
const MAX_DOLLY = 5;
const PARALLAX_STRENGTH = 1.1;

export function CameraRig({ scrollProgressRef, frozen = false }: CameraRigProps) {
  const pointerRef = useMousePosition();
  const smoothed = useRef({ x: 0, y: 0, z: BASE_POSITION.z });

  useFrame((state, delta) => {
    if (frozen) {
      state.camera.position.set(BASE_POSITION.x, BASE_POSITION.y, BASE_POSITION.z);
      state.camera.lookAt(0, 0.5, -6);
      return;
    }

    const scrollProgress = scrollProgressRef.current ?? 0;
    const targetZ = lerp(BASE_POSITION.z, BASE_POSITION.z - MAX_DOLLY, scrollProgress);
    const targetX = BASE_POSITION.x + pointerRef.current.x * PARALLAX_STRENGTH;
    const targetY = BASE_POSITION.y - pointerRef.current.y * PARALLAX_STRENGTH * 0.6;

    smoothed.current.x = damp(smoothed.current.x, targetX, 2.5, delta);
    smoothed.current.y = damp(smoothed.current.y, targetY, 2.5, delta);
    smoothed.current.z = damp(smoothed.current.z, targetZ, 1.8, delta);

    state.camera.position.set(smoothed.current.x, smoothed.current.y, smoothed.current.z);
    state.camera.lookAt(0, 0.5, -6);
  });

  return null;
}
