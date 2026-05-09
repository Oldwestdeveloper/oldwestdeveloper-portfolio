"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Server, Terminal } from "lucide-react";
const skills = [
  {
    name: "Frontend",
    techs: ["React", "Next.js", "TailwindCSS", "Styled Components"],
    icon: <Layout className="w-8 h-8" />,
    description: "Interfaces limpas e responsivas com a clareza do horizonte.",
  },
  {
    name: "Backend",
    techs: ["Node.js", "NestJS", "Prisma", "PostgreSQL"],
    icon: <Server className="w-8 h-8" />,
    description: "Estruturas robustas e seguras como uma fortaleza de madeira.",
  },
  {
    name: "Linguagens",
    techs: ["TypeScript", "JavaScript", "SQL"],
    icon: <Code2 className="w-8 h-8" />,
    description: "Código tipado e preciso como um tiro de mestre.",
  },
  {
    name: "DevOps & Tools",
    techs: ["Docker", "Git", "AWS", "Vercel"],
    icon: <Terminal className="w-8 h-8" />,
    description: "Automação e deploy com a eficiência da lida diária.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-24 bg-wood-dark">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-old-gold font-western text-xl tracking-widest uppercase mb-4"
          >
            O Cinturão de Ferramentas
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-parchment font-western"
          >
            Habilidades Fullstack
          </motion.h3>
        </div>

        {/* Grid de Habilidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 bg-leather/10 border border-old-gold/20 rounded-sm group hover:border-old-gold/50 transition-all duration-300"
            >
              <div className="text-old-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>

              <h4 className="text-2xl font-western text-parchment mb-3">
                {skill.name}
              </h4>

              <p className="text-sm text-gray-400 mb-6 font-sans">
                {skill.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {skill.techs.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] uppercase tracking-tighter px-2 py-1 border border-old-gold/30 text-old-gold rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
