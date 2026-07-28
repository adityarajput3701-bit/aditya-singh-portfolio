"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/config/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

export function Skills() {
  const { skills } = siteContent;

  return (
    <section id="skills" className="mx-auto max-w-content px-6 py-28 md:px-10">
      <SectionHeading index="03" label="skills" title="Tools of the trade" />

      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap gap-3"
      >
        {skills.map((skill) => (
          <motion.li key={skill} variants={item}>
            <Tag>{skill}</Tag>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
