"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { PointerEvent, ReactNode } from "react";
import { useRef } from "react";
import { cn } from "@/utils/cn";

const SPRING = { stiffness: 150, damping: 15, mass: 0.1 };
const PULL_STRENGTH = 0.35;

interface SharedProps {
  children: ReactNode;
  className?: string;
  variant?: "solid" | "glass";
}

function useMagnetic() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, SPRING);
  const springY = useSpring(y, SPRING);

  function onPointerMove(event: PointerEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * PULL_STRENGTH);
    y.set((event.clientY - (rect.top + rect.height / 2)) * PULL_STRENGTH);
  }

  function onPointerLeave() {
    x.set(0);
    y.set(0);
  }

  return { style: { x: springX, y: springY }, onPointerMove, onPointerLeave };
}

function baseClass(variant: "solid" | "glass", className?: string) {
  return cn(
    "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5",
    "font-mono text-sm tracking-wide transition-colors duration-300 ease-out-expo",
    variant === "solid"
      ? "bg-gold text-bg hover:bg-gold-soft hover:text-gold"
      : "border border-border bg-card text-text backdrop-blur-glass hover:border-gold/40",
    className
  );
}

type LinkProps = SharedProps &
  Omit<HTMLMotionProps<"a">, "className" | "children"> & { href: string };

type ButtonProps = SharedProps &
  Omit<HTMLMotionProps<"button">, "className" | "children"> & { href?: undefined };

export function MagneticButton(props: LinkProps | ButtonProps) {
  const { children, className, variant = "glass", ...rest } = props;
  const magnetic = useMagnetic();
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  if (props.href !== undefined) {
    const { href, ...anchorRest } = rest as Omit<LinkProps, keyof SharedProps>;
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={baseClass(variant, className)}
        {...magnetic}
        {...anchorRest}
      >
        {children}
      </motion.a>
    );
  }

  const buttonRest = rest as Omit<ButtonProps, keyof SharedProps>;
  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={baseClass(variant, className)}
      {...magnetic}
      {...buttonRest}
    >
      {children}
    </motion.button>
  );
}
