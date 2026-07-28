import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Certifications } from "@/components/sections/Certifications";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main className="relative w-full min-h-screen overflow-y-auto overflow-x-hidden">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Certifications />
      <Education />
      <Contact />
    </main>
  );
}
