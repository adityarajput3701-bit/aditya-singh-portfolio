"use client";

import { motion } from "framer-motion";
import { HiOutlineChevronDown } from "react-icons/hi";
import { siteContent } from "@/config/content";
import { MagneticButton } from "@/components/ui/MagneticButton";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  const { person } = siteContent;

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center px-6 md:px-10"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-content"
      >
        <motion.div
          variants={item}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 backdrop-blur-glass"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint" />
          <span className="font-mono text-xs tracking-wide text-text-dim">
            {person.statusBadge}
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-5xl leading-[1.05] text-text sm:text-6xl md:text-7xl"
        >
          {person.firstName} {person.lastName}
        </motion.h1>

        <motion.p variants={item} className="mt-5 font-mono text-base text-gold md:text-lg">
          {person.role} · {person.org}
        </motion.p>

        <motion.p variants={item} className="mt-4 max-w-xl text-lg leading-relaxed text-text-dim">
          {person.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <MagneticButton href="#experience" variant="solid">
            View Experience
          </MagneticButton>
          <MagneticButton href="/resume.pdf" download="Aditya_Singh_Resume.pdf" variant="glass">
            Get Resume
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-text-faint"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.3em]">Scroll</span>
        <HiOutlineChevronDown className="animate-bob" size={16} aria-hidden="true" />
      </motion.div>
    </section>
  );
}
