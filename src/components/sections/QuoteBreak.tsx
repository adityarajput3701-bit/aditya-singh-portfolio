export function QuoteBreak() {
  return (
    <section className="relative z-10 w-full py-24 md:py-32 px-6 flex items-center justify-center">
      <div className="max-w-3xl w-full mx-auto text-center space-y-8">
        <span className="block text-xs font-mono tracking-[0.3em] uppercase text-[#7a8296]">
          — Why I Do This —
        </span>

        <div className="h-px w-16 bg-white/15 mx-auto" />

        <p className="font-display text-2xl sm:text-3xl md:text-4xl leading-snug text-[#edeff3]">
          Every <span className="text-[#e8a94a]">credit</span> has its{" "}
          <span className="text-[#e8a94a]">debit</span>. Every hustle has
          its payoff.
        </p>

        <div className="h-px w-16 bg-white/15 mx-auto" />
      </div>
    </section>
  );
}
