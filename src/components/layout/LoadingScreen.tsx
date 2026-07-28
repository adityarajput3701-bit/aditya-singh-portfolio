"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const MIN_DISPLAY_MS = 1400;
const REDUCED_MOTION_DISPLAY_MS = 300;

export function LoadingScreen() {
  const prefersReducedMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const duration = prefersReducedMotion ? REDUCED_MOTION_DISPLAY_MS : MIN_DISPLAY_MS;
    const startTime = performance.now();
    let rafId: number;

    function tick(now: number) {
      const elapsed = now - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (elapsed < duration) {
        rafId = requestAnimationFrame(tick);
      } else {
        setIsLoading(false);
      }
    }

    rafId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafId);
      document.body.style.overflow = previousOverflow;
    };
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-bg"
        >
          <span className="font-display text-2xl tracking-[0.3em] text-text">A · S</span>
          <div className="h-px w-40 overflow-hidden bg-border">
            <div className="h-full bg-gold" style={{ width: `${progress}%` }} />
          </div>
          <span className="font-mono text-xs text-text-faint">{progress}%</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
