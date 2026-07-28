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
  const textY = useTransform(scrollYProgress, [0, 1], ['8%', '-8%']);

  return (
    <section
      id="finance-globe"
      ref={targetRef}
      className="relative z-20 w-full min-h-screen py-24 px-6 md:px-10 flex items-center justify-center overflow-hidden bg-[#050608]"
    >
      {/* Soft Ambient Background Glows */}
      <div 
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-[#e8a94a]/15 blur-[160px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true"
      />
      <div 
        className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[400px] h-[400px] bg-[#4a90e2]/15 blur-[140px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true"
      />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Column: Text Content */}
        <motion.div style={{ y: textY }} className="space-y-6">
          <span className="inline-block px-3.5 py-1 text-xs font-mono tracking-wider uppercase bg-[#e8a94a]/10 text-[#e8a94a] rounded-full border border-[#e8a94a]/20">
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

        {/* Right Column: Seamless Floating Globe (No Box/Borders) */}
        <motion.div
          style={{ y: imageY }}
          className="relative w-full aspect-square flex items-center justify-center"
        >
          {/* Floating and Radial Blend Container */}
          <motion.div
            className="relative w-full h-full flex items-center justify-center [mask-image:radial-gradient(circle,black_55%,transparent_85%)]"
            animate={{ 
              y: [-14, 14, -14],
              rotate: [0, 1.5, -1.5, 0],
              scale: [0.98, 1.02, 0.98]
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <Image
              src="/finance-globe.png"
              alt="Global Financial Data Visual"
              width={700}
              height={700}
              className="w-full h-full object-contain pointer-events-none drop-shadow-[0_0_50px_rgba(232,169,74,0.15)]"
              priority
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
