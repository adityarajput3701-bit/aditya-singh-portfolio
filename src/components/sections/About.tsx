import { siteContent } from "@/config/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { GlassCard } from "@/components/ui/GlassCard";

export function About() {
  const { about, person } = siteContent;

  return (
    <section id="about" className="mx-auto max-w-content px-6 py-28 md:px-10">
      <SectionHeading index="01" label="about" title="Precision, underneath the numbers" />

      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <RevealOnScroll delay={0.1}>
          <p className="text-lg leading-relaxed text-text-dim">{about.paragraph}</p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.25} x={16} y={0}>
          <GlassCard hoverLift={false} className="space-y-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-faint">Role</p>
              <p className="mt-1 text-text">{person.role}</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-faint">
                Based in
              </p>
              <p className="mt-1 text-text">{person.location}</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-faint">
                Focused on
              </p>
              <p className="mt-1 text-text">{about.goal}</p>
            </div>
          </GlassCard>
        </RevealOnScroll>
      </div>
    </section>
  );
}
