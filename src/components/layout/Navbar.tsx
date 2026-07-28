"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { siteContent } from "@/config/content";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/utils/cn";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { MobileNav } from "@/components/layout/MobileNav";

const SECTION_IDS = siteContent.nav.map((link) => link.href.slice(1));
const SCROLL_THRESHOLD = 24;

export function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-30 w-full border-b border-transparent transition-colors duration-500",
        isScrolled && "border-border bg-bg/80 backdrop-blur-glass"
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5 md:px-10"
      >
        <a href="#hero" className="font-mono text-sm tracking-[0.2em] text-text hover:text-gold">
          A · S
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {siteContent.nav.map((link) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  className={cn(
                    "font-mono text-sm tracking-wide text-text-dim transition-colors duration-300 hover:text-gold",
                    isActive && "text-gold"
                  )}
                >
                  {link.label}
                </a>
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute -bottom-1.5 left-0 right-0 h-px bg-gold"
                  />
                )}
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <MagneticButton
            href="/resume.pdf"
            download="Aditya_Singh_Resume.pdf"
            variant="glass"
            className="px-5 py-2.5 text-xs"
          >
            Resume
          </MagneticButton>
        </div>

        <button
          type="button"
          aria-expanded={isMobileNavOpen}
          aria-label={isMobileNavOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMobileNavOpen((open) => !open)}
          className="text-text md:hidden"
        >
          {isMobileNavOpen ? (
            <HiOutlineX size={24} aria-hidden="true" />
          ) : (
            <HiOutlineMenu size={24} aria-hidden="true" />
          )}
        </button>
      </nav>

      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        links={siteContent.nav}
        activeId={activeId}
      />
    </header>
  );
}
