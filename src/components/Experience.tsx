"use client";

import { motion } from "framer-motion";

const timelineData = [
  {
    id: 1,
    period: "2023 - Presente",
    title: "Desenvolvedor Fullstack",
    place: "Freelancer / Autônomo",
    description: "Construção de aplicações web modernas, focadas em performance e UI/UX. Domínio da forja com Next.js, React, TypeScript e Tailwind CSS.",
    type: "work",
  },
  {
    id: 2,
    period: "2022 - 2024",
    title: "Análise e Desenvolvimento de Sistemas",
    place: "Nome da Sua Faculdade",
    description: "Formação técnica afiando os fundamentos da engenharia de software, banco de dados (SQL/NoSQL) e arquitetura de sistemas.",
    type: "education",
  },
  {
    id: 3,
    period: "2021 - 2022",
    title: "Iniciação na Programação",
    place: "Cursos e Bootcamps",
    description: "Os primeiros passos na roça digital. Aprendizado profundo de lógica de programação, JavaScript puro, HTML5 e CSS3.",
    type: "education",
  },
];

export default function Experience() {
  return (
    <section id="jornada" className="w-full max-w-5xl mx-auto py-24 px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-western text-[#cfb53b] uppercase tracking-wider mb-4">
          A Trilha
        </h2>
        <p className="text-[#f4e4bc]/70 font-sans max-w-2xl mx-auto">
          As rotas percorridas, a educação forjada e a experiência acumulada nesta jornada tecnológica.
        </p>
      </motion.div>

      {/* Container da Linha do Tempo */}
      <div className="relative border-l-2 border-[#cfb53b]/30 ml-4 md:ml-6 lg:ml-8">
        {timelineData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="mb-12 ml-8 relative"
          >
            {/* O "Ponto" Dourado na linha */}
            <span className="absolute -left-[41px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#050505] border-2 border-[#cfb53b] shadow-[0_0_10px_rgba(207,181,59,0.5)]"></span>

            {/* O Cartão de Conteúdo */}
            <div className="bg-[#050505]/80 backdrop-blur-sm border border-[#cfb53b]/20 p-6 rounded-lg hover:border-[#cfb53b]/50 transition-colors shadow-lg">
              <span className="text-sm font-bold text-[#cfb53b] tracking-widest uppercase mb-1 block">
                {item.period}
              </span>
              <h3 className="text-xl md:text-2xl font-western text-white tracking-wide mb-1">
                {item.title}
              </h3>
              <span className="text-sm text-[#f4e4bc]/60 uppercase tracking-wider font-bold mb-4 block">
                {item.place}
              </span>
              <p className="text-[#f4e4bc]/80 font-sans leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}