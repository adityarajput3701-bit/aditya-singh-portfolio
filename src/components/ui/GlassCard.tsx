"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { PointerEvent, ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/utils/cn";

interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "onPointerMove" | "onPointerLeave"> {
  children: ReactNode;
  hoverLift?: boolean;
  /** Subtle mouse-tracked 3D tilt. Automatically disabled with prefers-reduced-motion. */
  tilt?: boolean;
}

const TILT_SPRING = { stiffness: 200, damping: 20, mass: 0.4 };
const MAX_TILT_DEGREES = 6;

export function GlassCard({
  children,
  className,
  hoverLift = true,
  tilt = true,
  ...rest
}: GlassCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const isTiltEnabled = tilt && !prefersReducedMotion;

  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(pointerY, [0, 1], [MAX_TILT_DEGREES, -MAX_TILT_DEGREES]), TILT_SPRING);
  const rotateY = useSpring(useTransform(pointerX, [0, 1], [-MAX_TILT_DEGREES, MAX_TILT_DEGREES]), TILT_SPRING);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!isTiltEnabled) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width);
    pointerY.set((event.clientY - rect.top) / rect.height);
  }

  function handlePointerLeave() {
    pointerX.set(0.5);
    pointerY.set(0.5);
  }

  return (
    <motion.div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={isTiltEnabled ? { rotateX, rotateY, transformPerspective: 800 } : undefined}
      className={cn(
        "rounded-2xl border border-border bg-card p-6 backdrop-blur-glass",
        "transition-[transform,border-color] duration-500 ease-out-expo",
        hoverLift && "hover:-translate-y-1 hover:border-gold/30",
        className
      )}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
