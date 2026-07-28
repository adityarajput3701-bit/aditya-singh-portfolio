"use client";

import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineArrowUp } from "react-icons/hi";
import { useScrollProgress } from "@/hooks/useScrollProgress";

const VISIBLE_AFTER = 0.08;

export function BackToTop() {
  const progress = useScrollProgress();
  const isVisible = progress > VISIBLE_AFTER;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-text backdrop-blur-glass hover:border-gold/40 hover:text-gold"
        >
          <HiOutlineArrowUp size={18} aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
