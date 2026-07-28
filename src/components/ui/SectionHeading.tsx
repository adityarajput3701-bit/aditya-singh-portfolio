import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
}

export function SectionHeading({ index, label, title }: SectionHeadingProps) {
  return (
    <RevealOnScroll className="mb-14 flex items-baseline gap-4">
      <span className="font-mono text-sm text-gold">{index}</span>
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-text-faint">{label}</p>
        <h2 className="mt-2 font-display text-3xl text-text md:text-4xl">{title}</h2>
      </div>
    </RevealOnScroll>
  );
}
