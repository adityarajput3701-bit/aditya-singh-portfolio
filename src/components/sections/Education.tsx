import { siteContent } from "@/config/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Education() {
  const { education } = siteContent;

  return (
    <section id="education" className="mx-auto max-w-content px-6 py-28 md:px-10">
      <SectionHeading index="05" label="education" title="Foundations" />

      <ul className="divide-y divide-border border-y border-border">
        {education.map((entry, index) => (
          <RevealOnScroll key={`${entry.school}-${entry.year}`} as="li" delay={index * 0.08} x={20} y={0}>
            <div className="flex flex-col gap-1 py-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-text">{entry.degree}</p>
                <p className="mt-1 font-mono text-sm text-gold">
                  {entry.schoolHref ? (
                    <a
                      href={entry.schoolHref}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="hover:underline"
                    >
                      {entry.school}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : (
                    entry.school
                  )}
                  <span className="text-text-faint"> · {entry.location}</span>
                </p>
              </div>
              <span className="font-mono text-xs text-text-faint">{entry.year}</span>
            </div>
          </RevealOnScroll>
        ))}
      </ul>
    </section>
  );
}
