"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import type { NavLink } from "@/types/content";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  links: readonly NavLink[];
  activeId: string | null;
}

export function MobileNav({ isOpen, onClose, links, activeId }: MobileNavProps) {
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-bg/98 backdrop-blur-xl md:hidden"
        >
          {links.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={onClose}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * index, ease: [0.16, 1, 0.3, 1] }}
              className={`font-display text-3xl tracking-tight ${
                activeId === link.href.slice(1) ? "text-gold" : "text-text"
              }`}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
