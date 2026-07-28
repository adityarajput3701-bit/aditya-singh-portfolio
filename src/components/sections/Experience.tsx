"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { siteContent } from "@/config/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { GlassCard } from "@/components/ui/GlassCard";

export function Experience() {
  const { experience } = siteContent;
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lineVisible, setLineVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setLineVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="mx-auto max-w-content px-6 py-28 md:px-10">
      <SectionHeading index="02" label="experience" title="Where the ledgers have been" />

      <div ref={sectionRef} className="relative">
        <motion.div
          initial={{ scaleY: 0 }}
          animate={lineVisible ? { scaleY: 1 } : undefined}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ originY: 0 }}
          className="absolute left-[7px] top-2 hidden h-full w-px bg-border md:block"
        />

        <ol className="space-y-10">
          {experience.map((role, index) => (
            <RevealOnScroll
              key={`${role.org}-${role.dateRange}`}
              as="li"
              delay={index * 0.05}
              x={index % 2 === 0 ? -24 : 24}
              y={0}
              className="relative md:pl-10"
            >
              <span
                className={`absolute left-0 top-2 hidden h-3.5 w-3.5 rounded-full border-2 border-bg md:block ${
                  role.current ? "bg-mint" : "bg-gold"
                }`}
              />

              <GlassCard>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-xl text-text">{role.role}</h3>
                  <span className="font-mono text-xs text-text-faint">{role.dateRange}</span>
                </div>

                <p className="mt-1 font-mono text-sm text-gold">
                  {role.orgHref ? (
                    <a href={role.orgHref} target="_blank" rel="noreferrer noopener" className="hover:underline">
                      {role.org}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : (
                    role.org
                  )}
                  <span className="text-text-faint"> · {role.location}</span>
                </p>

                <p className="mt-4 text-sm leading-relaxed text-text-dim">{role.description}</p>

                {role.current && (
                  <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-mint">
                    <span className="h-1.5 w-1.5 rounded-full bg-mint" /> Current
                  </span>
                )}
              </GlassCard>
            </RevealOnScroll>
          ))}
        </ol>
      </div>
    </section>
  );
}
