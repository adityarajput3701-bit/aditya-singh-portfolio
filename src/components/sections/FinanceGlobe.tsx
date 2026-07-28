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
  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['8%', '-8%']);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1.02, 0.96]);

  return (
    <section
      id="finance-globe"
      ref={targetRef}
      className="relative z-20 w-full min-h-screen py-24 px-6 md:px-10 flex items-center justify-center overflow-hidden bg-[#050608]"
    >
      {/* Background Glow Accent - increased spread */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#e8a94a]/12 blur-[150px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true"
      />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Column: Text Content with Upward Parallax */}
        <motion.div style={{ y: textY }} className="space-y-6">
          <span className="inline-block px-3 py-1 text-xs font-mono tracking-wider uppercase bg-[#e8a94a]/10 text-[#e8a94a] rounded-full border border-[#e8a94a]/20">
            Financial Analytics & Modeling
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold text-[#edeff3] leading-tight font-display">
            Global Financial Control & <span className="text-[#e8a94a]">Data Insights</span>
          </h2>

          <p className="text-[#9198a8] text-lg leading-relaxed">
            Bridging complex accounting frameworks with forward-looking financial modeling. Experienced across UAE VAT compliance, ERP ledger management, and multi-currency reporting.
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

        {/* Right Column: Globe Visual with Parallax and Local Animations */}
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="relative w-full aspect-[4/3] lg:aspect-square"
        >
          {/* Internal motion div for floating and rotating (bobbing and swaying) */}
          <motion.div
            className="relative w-full h-full rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#0d1420]/80 backdrop-blur-md"
            animate={{ y: [0, -12, 0], rotateX: [0, -4, 4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
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
        </motion.div>

      </div>
    </section>
  );
}
