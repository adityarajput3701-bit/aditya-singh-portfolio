'use client';

import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Scroll3DWrapperProps {
  children: ReactNode;
  intensity?: number;
}

export function Scroll3DWrapper({ children, intensity = 8 }: Scroll3DWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [intensity, 0, -intensity]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.94]);
  const z = useTransform(scrollYProgress, [0, 0.5, 1], [-80, 0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.3, 1, 1, 0.3]);

  return (
    <div ref={ref} style={{ perspective: 1400 }}>
      <motion.div
        style={{
          rotateX,
          scale,
          z,
          opacity,
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
