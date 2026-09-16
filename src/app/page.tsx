import Hero from "@/components/Hero";
import Projects from "@/components/Projects"; // O Celeiro
import About from "@/components/About";       // A Porteira
import Skills from "@/components/Skills";     // Ferramentas
import Contact from "@/components/Contact";   // O Correio
import Experience from "@/components/Experience"; 

export default function Home() {
return (
    <div>
      <Header />
      <Hero />
      <About /> 
      <Experience /> {/* <-- AQUI ESTÁ A NOSSA LINHA DO TEMPO */}
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
