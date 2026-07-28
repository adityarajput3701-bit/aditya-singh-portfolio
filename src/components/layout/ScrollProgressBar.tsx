"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgressBar() {
  const progress = useScrollProgress();
  const smoothed = useSpring(0, { stiffness: 120, damping: 25, mass: 0.2 });

  useEffect(() => {
    smoothed.set(progress);
  }, [progress, smoothed]);

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-50 h-[2px] w-full origin-left bg-gold"
      style={{ scaleX: smoothed }}
    />
  );
}
