"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/config/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function Contact() {
  const { contact } = siteContent;

  return (
    <section id="contact" className="mx-auto max-w-content px-6 py-28 md:px-10">
      <SectionHeading index="06" label="contact" title="Get in touch" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="rounded-3xl border border-border bg-card p-10 text-center backdrop-blur-glass md:p-16"
      >
        <motion.h3 variants={item} className="font-display text-3xl text-text md:text-4xl">
          {contact.heading}
        </motion.h3>
        <motion.p variants={item} className="mx-auto mt-4 max-w-md text-text-dim">
          {contact.sub}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {contact.channels.map((channel, index) => (
            <MagneticButton
              key={channel.href}
              href={channel.href}
              download={channel.download}
              variant={index === 0 ? "solid" : "glass"}
            >
              {channel.label}
            </MagneticButton>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
