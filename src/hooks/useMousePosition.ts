"use client";

import { useEffect, useRef } from "react";

export interface NormalizedPointer {
  /** -0.5 (left) to 0.5 (right) */
  x: number;
  /** -0.5 (top) to 0.5 (bottom) */
  y: number;
  /** raw client X, for CSS cursor-following elements */
  clientX: number;
  /** raw client Y, for CSS cursor-following elements */
  clientY: number;
}

/**
 * Tracks pointer position in a ref (not state) so consumers — e.g. an R3F
 * useFrame loop or a CSS transform via rAF — can read it every frame without
 * triggering React re-renders on every mousemove.
 */
export function useMousePosition() {
  const pointerRef = useRef<NormalizedPointer>({ x: 0, y: 0, clientX: 0, clientY: 0 });

  useEffect(() => {
    function handlePointerMove(event: PointerEvent) {
      pointerRef.current = {
        x: event.clientX / window.innerWidth - 0.5,
        y: event.clientY / window.innerHeight - 0.5,
        clientX: event.clientX,
        clientY: event.clientY,
      };
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return pointerRef;
}
