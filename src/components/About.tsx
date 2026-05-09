"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Importação ativada e limpa!

export default function About() {
  return (
    <section id="sobre" className="w-full py-24 bg-wood-dark relative">
      {/* Detalhe visual de separação rústica no topo */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-old-gold/30 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        {/* Lado Esquerdo: A sua Foto Profissional em estilo rústico */}
        <motion.div
          className="w-full md:w-1/3 relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {/* Fundo imitando uma moldura de couro/madeira velha */}
          <div className="aspect-3/4 bg-leather rounded-sm p-3 shadow-2xl -rotate-2 border border-leather-light hover:rotate-0 transition-transform duration-500">
            <div className="w-full h-full bg-wood-dark border border-old-gold/20 relative overflow-hidden flex items-center justify-center">
              {/* TAG IMAGE ATIVADA E CONFIGURADA NO CAPRICHO! */}
              <Image
                src="/images/foto-profissional.png"
                alt="Guilherme - Old West Developer Profissional"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </motion.div>

        {/* Lado Direito: A sua História */}
        <motion.div
          className="w-full md:w-2/3 space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-2">
            <span className="h-0.5 w-12 bg-old-gold"></span>
            <h2 className="text-old-gold font-western text-xl tracking-widest uppercase">
              A Porteira
            </h2>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold text-parchment font-western leading-tight">
            Da lida no campo <br /> à arquitetura de software.
          </h3>

          <div className="space-y-4 text-gray-400 font-sans text-lg">
            <p>
              Crescer na roça ensina algo que nenhum curso de tecnologia
              consegue transmitir:{" "}
              <strong className="text-old-gold font-normal">
                a verdadeira resiliência
              </strong>
              . Acordar cedo para a lida diária forjou uma disciplina
              inabalável, a mesma que utilizo hoje para caçar bugs complexos e
              estruturar bancos de dados.
            </p>
            <p>
              Troquei o trator pelo terminal, mas a filosofia continua a mesma.
              Como desenvolvedor fullstack, não entrego apenas código. Eu
              &quot;planto&quot; arquiteturas limpas (Clean Code) e
              &quot;colho&quot; sistemas robustos, rápidos e escaláveis,
              utilizando ferramentas como{" "}
              <strong className="text-white">
                Next.js, TypeScript e PostgreSQL
              </strong>
              .
            </p>
            <p>
              Meu objetivo não é apenas acompanhar o mercado de tecnologia, mas
              domá-lo. Seja criando interfaces modernas ou construindo a lógica
              de um sistema financeiro, trago a honestidade e o trabalho duro do
              interior para cada projeto que assumo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}