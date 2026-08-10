"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GithubIcon, ExternalLinkIcon } from "./Icons";

const projects = [
  {
    title: "Enciclopédia de Dragões",
    description:
      "Um guia interativo inspirado em House of the Dragon, com cards detalhados, filtros de montadores e história das casas de Westeros.",
    image: "/Project_HOTD/htdo1.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Oldwestdeveloper/HouseOfTheDragon-FanProject",
    link: "https://oldwestdeveloper-hotd.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="w-full py-24 bg-wood-dark/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-old-gold font-western text-xl tracking-widest uppercase mb-2">
              O Celeiro
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-parchment font-western">
              Projetos em Destaque
            </h3>
          </div>
          <p className="text-gray-400 max-w-md font-sans italic">
            &quot;Não é apenas código, é o sustento de uma arquitetura bem
            plantada.&quot;
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-leather/5 border border-old-gold/20 rounded-sm overflow-hidden hover:border-old-gold/50 transition-all duration-500"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <div className="absolute inset-0 bg-wood-dark/40 group-hover:bg-transparent z-10 transition-colors duration-500"></div>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
              </div>

              <div className="p-8 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] text-old-gold border border-old-gold/30 px-2 py-0.5 rounded-full uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h4 className="text-2xl font-western text-parchment group-hover:text-old-gold transition-colors">
                  {project.title}
                </h4>

                <p className="text-gray-400 text-sm leading-relaxed font-sans line-clamp-3">
                  {project.description}
                </p>

                <div className="flex gap-4 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-parchment hover:text-old-gold transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" /> Code
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-parchment hover:text-old-gold transition-colors"
                  >
                    <ExternalLinkIcon className="w-4 h-4" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
