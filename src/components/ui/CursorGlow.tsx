"use client";

import { useEffect, useRef } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const pointerRef = useMousePosition();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let rafId: number;

    function tick() {
      const el = glowRef.current;
      if (el) {
        const { clientX, clientY } = pointerRef.current;
        el.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [pointerRef, prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-40 hidden h-[420px] w-[420px] rounded-full mix-blend-screen will-change-transform md:block"
      style={{
        background:
          "radial-gradient(circle, var(--color-glow) 0%, transparent 70%)",
      }}
    />
  );
}
