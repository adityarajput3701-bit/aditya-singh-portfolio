import { Hero } from "@/components/sections/Hero";
import { FinanceGlobe } from "@/components/sections/FinanceGlobe";
import { About } from "@/components/sections/About";
import { QuoteBreak } from "@/components/sections/QuoteBreak";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Certifications } from "@/components/sections/Certifications";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Scroll3DWrapper } from "@/components/sections/Scroll3DWrapper";

export default function HomePage() {
  return (
    <main className="relative w-full min-h-screen overflow-y-auto overflow-x-hidden">
      <Hero />
      <Scroll3DWrapper>
        <FinanceGlobe />
      </Scroll3DWrapper>
      <Scroll3DWrapper intensity={5}>
        <About />
      </Scroll3DWrapper>
      <QuoteBreak />
      <Experience />
      <Skills />
      <Certifications />
      <Education />
      <Contact />
    </main>
  );
}
