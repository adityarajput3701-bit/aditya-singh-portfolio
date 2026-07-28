'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export function FinanceGlobe() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  // Parallax movement calculations
  const imageY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['15%', '-15%']);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.03, 0.95]);

  return (
    <section
      ref={targetRef}
      className="relative w-full min-h-screen py-24 px-6 flex items-center justify-center overflow-hidden bg-[#050608]"
    >
      {/* Background Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#e8a94a]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Column: Text Content with Upward Parallax */}
        <motion.div style={{ y: textY }} className="space-y-6">
          <span className="inline-block px-3 py-1 text-xs font-mono tracking-wider uppercase bg-[#e8a94a]/10 text-[#e8a94a] rounded-full border border-[#e8a94a]/20">
            Financial Analytics & Modeling
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold text-[#edeff3] leading-tight">
            Global Financial Control & <span className="text-[#e8a94a]">Data Insights</span>
          </h2>

          <p className="text-[#9198a8] text-lg leading-relaxed">
            Bridging complex accounting frameworks with forward-looking financial modeling. Experienced across UAE VAT compliance, ERP ledger management, and multi-currency reporting.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-[#12151b]/80 border border-white/10 backdrop-blur-md">
              <h3 className="text-[#e8a94a] text-xl font-bold">FACTS & Tally</h3>
              <p className="text-sm text-[#7a8296] mt-1">ERP Operations & Ledger Flow</p>
            </div>
            <div className="p-4 rounded-xl bg-[#12151b]/80 border border-white/10 backdrop-blur-md">
              <h3 className="text-[#57d9aa] text-xl font-bold">VAT & FTA</h3>
              <p className="text-sm text-[#7a8296] mt-1">UAE Regulatory Compliance</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Image Frame with Opposite Parallax Scroll */}
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="relative w-full aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#0d1420]/60 backdrop-blur-sm"
        >
          <Image
            src="/finance-globe.png"
            alt="Global Financial Data Visual"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050608]/80 via-transparent to-transparent pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
}
