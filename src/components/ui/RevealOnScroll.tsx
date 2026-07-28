"use client";

import { motion, useReducedMotion as useFramerReducedMotion } from "framer-motion";
import { useRef, useState, useEffect, type ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  blur?: boolean;
  className?: string;
  /** Reveal as a group with staggered children instead of animating this element directly */
  as?: "div" | "li";
}

export function RevealOnScroll({
  children,
  delay = 0,
  y = 24,
  x = 0,
  blur = false,
  className,
  as = "div",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useFramerReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const MotionTag = motion[as] as typeof motion.div;
  const hiddenState = prefersReducedMotion
    ? undefined
    : { opacity: 0, y, x, filter: blur ? "blur(10px)" : "blur(0px)" };
  const shownState = { opacity: 1, y: 0, x: 0, filter: "blur(0px)" };

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={hiddenState}
      animate={isVisible ? shownState : undefined}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
