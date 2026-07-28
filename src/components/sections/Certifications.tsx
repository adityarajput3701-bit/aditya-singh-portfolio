import { HiOutlineExternalLink } from "react-icons/hi";
import { siteContent } from "@/config/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Certifications() {
  const { certifications } = siteContent;

  return (
    <section id="certifications" className="mx-auto max-w-content px-6 py-28 md:px-10">
      <SectionHeading index="04" label="certifications" title="Credentials" />

      <ul className="grid gap-4 sm:grid-cols-2">
        {certifications.map((cert, index) => (
          <RevealOnScroll key={cert.href} as="li" delay={index * 0.05} y={0} blur>
            <a
              href={cert.href}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-5 py-4 backdrop-blur-glass transition-colors duration-300 hover:border-gold/40"
            >
              <span className="text-sm text-text">{cert.title}</span>
              <span className="sr-only"> (opens in a new tab)</span>
              <HiOutlineExternalLink
                aria-hidden="true"
                className="shrink-0 text-text-faint transition-colors duration-300 group-hover:text-gold"
                size={16}
              />
            </a>
          </RevealOnScroll>
        ))}
      </ul>
    </section>
  );
}
