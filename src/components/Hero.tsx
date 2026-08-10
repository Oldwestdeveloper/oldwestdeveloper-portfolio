"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="min-h-[80vh] w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 mt-10 p-8">
      
      <motion.div
        className="flex-1 space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-western text-old-gold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Cultivando Soluções, <br />
          <span className="text-white">Colhendo Resultados.</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl font-sans text-gray-400 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Sou da roça, mas acompanho o mercado tecnológico. Como desenvolvedor
          fullstack, aplico a resiliência da vida no campo na construção de
          sistemas modernos e escaláveis.
        </motion.p>

        <motion.div
          className="pt-4 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link 
            href="#projetos" 
            className="bg-old-gold text-wood-dark font-bold px-8 py-3 rounded-sm hover:bg-yellow-600 transition-colors flex items-center justify-center"
          >
            Ver Projetos
          </Link>
          <Link 
            href="#contato" 
            className="border border-old-gold text-old-gold font-bold px-8 py-3 rounded-sm hover:bg-old-gold/10 transition-colors flex items-center justify-center"
          >
            Contato
          </Link>
          <a 
            href="https://drive.google.com/file/d/1Xg-RsATF8A5DR2XjLZbBeTf3RK9w3f4d/view?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-400 text-gray-400 font-bold px-8 py-3 rounded-sm hover:border-white hover:text-white transition-all flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" x2="12" y1="15" y2="3"/>
            </svg>
            Ver CV
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex-1 w-full max-w-md relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-old-gold/20 blur-3xl rounded-full animate-pulse"></div>

        <Image
          src="/images/logo-cowboy.png"
          alt="Old West Developer Scenario"
          width={600}
          height={600}
          className="relative z-10 rounded-lg shadow-2xl border border-old-gold/30 object-cover"
          priority
        />
      </motion.div>
    </section>
  );
}