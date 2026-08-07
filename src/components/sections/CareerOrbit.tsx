'use client';

import { useRef, type MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const CAREER_PATH = [
  { label: 'Accounts Executive', sub: 'Current', top: 78, left: 12, current: true },
  { label: 'Financial Analyst', sub: 'Next', top: 56, left: 34 },
  { label: 'Investment Analyst', sub: '', top: 34, left: 56 },
  { label: 'Portfolio Manager', sub: 'Goal', top: 12, left: 78, goal: true },
];

const PARTICLES = [
  { top: '20%', left: '15%', delay: 0 },
  { top: '65%', left: '75%', delay: 0.8 },
  { top: '40%', left: '45%', delay: 1.6 },
  { top: '85%', left: '55%', delay: 2.2 },
  { top: '10%', left: '60%', delay: 3 },
];

export function CareerOrbit() {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6]);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const pathD = `M ${CAREER_PATH[0].left} ${CAREER_PATH[0].top}
    L ${CAREER_PATH[1].left} ${CAREER_PATH[1].top}
    L ${CAREER_PATH[2].left} ${CAREER_PATH[2].top}
    L ${CAREER_PATH[3].left} ${CAREER_PATH[3].top}`;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-square max-w-full overflow-hidden"
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative w-full h-full"
      >
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#e8a94a]/70 pointer-events-none"
            style={{ top: p.top, left: p.left }}
            animate={{ y: [0, -14, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
          />
        ))}

        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          <defs>
            <linearGradient id="careerLine" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#57d9aa" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#e8a94a" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <motion.path
            d={pathD}
            fill="none"
            stroke="url(#careerLine)"
            strokeWidth="0.4"
            strokeLinecap="round"
            strokeDasharray="2 2"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        </svg>

        {CAREER_PATH.map((node, i) => (
          <motion.div
            key={node.label}
            className="absolute -translate-x-1/2 -translate-y-1/2 w-[42vw] sm:w-auto max-w-[220px]"
            style={{ top: `${node.top}%`, left: `${node.left}%` }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.25 }}
          >
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
              className={`relative flex flex-col items-center gap-1 sm:gap-1.5 rounded-lg sm:rounded-xl border px-2.5 py-2 sm:px-4 sm:py-3 backdrop-blur-md shadow-lg text-center ${
                node.current
                  ? 'bg-[#12151b]/90 border-[#57d9aa]/40'
                  : node.goal
                  ? 'bg-[#12151b]/90 border-[#e8a94a]/50'
                  : 'bg-[#12151b]/70 border-white/10'
              }`}
            >
              {node.sub && (
                <span
                  className={`font-mono text-[8px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] ${
                    node.current ? 'text-[#57d9aa]' : 'text-[#e8a94a]'
                  }`}
                >
                  {node.sub}
                </span>
              )}
              <span className="text-[11px] sm:text-sm font-semibold text-[#edeff3] font-mono leading-tight">
                {node.label}
              </span>
              {node.goal && (
                <motion.span
                  className="absolute -inset-1 rounded-lg sm:rounded-xl border border-[#e8a94a]/40 pointer-events-none"
                  animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.04, 1] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                />
              )}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
