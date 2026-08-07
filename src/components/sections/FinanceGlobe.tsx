'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CareerOrbit } from '@/components/sections/CareerOrbit';

export function FinanceGlobe() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['8%', '-8%']);

  return (
    <section
      id="finance-globe"
      ref={targetRef}
      className="relative z-20 w-full min-h-screen py-24 px-6 md:px-10 flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#e8a94a]/12 blur-[160px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[450px] h-[450px] bg-[#4a90e2]/10 blur-[150px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div style={{ y: textY }} className="space-y-6">
          <span className="inline-block px-3.5 py-1 text-xs font-mono tracking-wider uppercase bg-[#e8a94a]/10 text-[#e8a94a] rounded-full border border-[#e8a94a]/20">
            Career Trajectory
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold text-[#edeff3] leading-tight font-display">
            From Ledgers to <span className="text-[#e8a94a]">Portfolios</span>
          </h2>

          <p className="text-[#9198a8] text-lg leading-relaxed">
            Building a career path from hands-on accounting toward investment analysis and portfolio management — one milestone at a time.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-[#12151b]/80 border border-white/10 backdrop-blur-md">
              <h3 className="text-[#e8a94a] text-xl font-bold font-mono">FACTS & Tally</h3>
              <p className="text-sm text-[#7a8296] mt-1">ERP Operations & Ledger Flow</p>
            </div>
            <div className="p-4 rounded-xl bg-[#12151b]/80 border border-white/10 backdrop-blur-md">
              <h3 className="text-[#57d9aa] text-xl font-bold font-mono">VAT & FTA</h3>
              <p className="text-sm text-[#7a8296] mt-1">UAE Regulatory Compliance</p>
            </div>
          </div>
        </motion.div>

        <motion.div style={{ y: imageY }} className="relative w-full">
          <CareerOrbit />
        </motion.div>
      </div>
    </section>
  );
}
