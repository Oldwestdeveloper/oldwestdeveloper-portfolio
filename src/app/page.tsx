import Hero from "@/components/Hero";
import Projects from "@/components/Projects"; // O Celeiro
import About from "@/components/About";       // A Porteira
import Skills from "@/components/Skills";     // Ferramentas
import Contact from "@/components/Contact";   // O Correio

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}