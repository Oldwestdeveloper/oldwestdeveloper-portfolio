"use client";

import { motion } from "framer-motion";
import { MailIcon, LinkedinIcon, GithubIcon } from "./Icons";
import { toast } from "sonner"; // Importa o toast
import { useState } from "react";

export default function Contact() {
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzdyagln";
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Função que domina o envio do telegrama
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast.success("Telegrama entregue com sucesso! Responderei em breve.");
        form.reset(); // Limpa o formulário
      } else {
        toast.error(
          "O cavalo cansou no caminho... Tente novamente mais tarde.",
        );
      }
    } catch (error) {
      console.error(error); // <-- Agora você está usando a variável!
      toast.error("Erro na conexão com o correio.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contato"
      className="w-full py-24 bg-wood-dark/50 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <div className="mb-16 space-y-4">
          <h2 className="text-old-gold font-western text-xl tracking-widest uppercase">
            O Correio
          </h2>
          <h3 className="text-5xl md:text-7xl font-bold text-parchment font-western uppercase">
            Envie seu Telegrama
          </h3>
          <p className="text-gray-400 text-lg font-sans max-w-2xl mx-auto italic">
            Seja para um novo projeto, uma parceria ou apenas para trocar uma
            ideia, meu laço está pronto.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-20 bg-wood-dark border border-old-gold/20 p-8 md:p-12 shadow-2xl"
        >
          {/* O SEGREDO: onSubmit em vez de action */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
          >
            <div className="flex flex-col gap-2">
              <label className="text-old-gold font-western uppercase text-xs tracking-widest">
                Remetente
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Seu nome"
                className="bg-leather/5 border border-old-gold/20 p-3 text-parchment focus:border-old-gold outline-none transition-colors font-sans"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-old-gold font-western uppercase text-xs tracking-widest">
                Endereço de Resposta
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="seu@email.com"
                className="bg-leather/5 border border-old-gold/20 p-3 text-parchment focus:border-old-gold outline-none transition-colors font-sans"
              />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-old-gold font-western uppercase text-xs tracking-widest">
                Assunto do Telegrama
              </label>
              <input
                type="text"
                name="_subject"
                required
                placeholder="Ex: Proposta de Projeto"
                className="bg-leather/5 border border-old-gold/20 p-3 text-parchment focus:border-old-gold outline-none transition-colors font-sans"
              />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-old-gold font-western uppercase text-xs tracking-widest">
                Mensagem
              </label>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Escreva aqui..."
                className="bg-leather/5 border border-old-gold/20 p-3 text-parchment focus:border-old-gold outline-none transition-colors font-sans resize-none"
              ></textarea>
            </div>

            <div className="md:col-span-2">
              <motion.button
                disabled={isSubmitting} // Desativa enquanto envia
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`w-full bg-old-gold text-wood-dark font-western text-xl py-4 tracking-widest uppercase transition-colors cursor-pointer ${isSubmitting ? "opacity-50 grayscale" : "hover:bg-old-gold/90"}`}
              >
                {isSubmitting ? "Enviando..." : "Bater o Martelo (Enviar)"}
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Mantive as suas caixas de contato abaixo (conforme a imagem) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group p-8 border border-old-gold/10 bg-transparent flex flex-col items-center gap-4 hover:border-old-gold/40 transition-all">
            <div className="w-12 h-12 rounded-full border border-old-gold/20 flex items-center justify-center text-old-gold group-hover:bg-old-gold group-hover:text-wood-dark transition-all">
              <MailIcon className="w-6 h-6" />
            </div>
            <h4 className="text-2xl font-western text-parchment uppercase tracking-wider">
              E-mail
            </h4>
            <p className="text-xs text-gray-500 font-sans break-all lowercase">
              oldestdeveloper@outlook.com
            </p>
          </div>

          <a
            href="https://linkedin.com/in/guilherme-araujo-lacerda"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 border border-old-gold/10 bg-transparent flex flex-col items-center gap-4 hover:border-old-gold/40 transition-all"
          >
            <div className="w-12 h-12 rounded-full border border-old-gold/20 flex items-center justify-center text-old-gold group-hover:bg-old-gold group-hover:text-wood-dark transition-all">
              <LinkedinIcon className="w-6 h-6" />
            </div>
            <h4 className="text-2xl font-western text-parchment uppercase tracking-wider">
              LinkedIn
            </h4>
            <p className="text-xs text-gray-500 font-sans uppercase tracking-widest">
              conectar na rede
            </p>
          </a>

          <a
            href="https://github.com/OldWestDeveloper"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 border border-old-gold/10 bg-transparent flex flex-col items-center gap-4 hover:border-old-gold/40 transition-all"
          >
            <div className="w-12 h-12 rounded-full border border-old-gold/20 flex items-center justify-center text-old-gold group-hover:bg-old-gold group-hover:text-wood-dark transition-all">
              <GithubIcon className="w-6 h-6" />
            </div>
            <h4 className="text-2xl font-western text-parchment uppercase tracking-wider">
              GitHub
            </h4>
            <p className="text-xs text-gray-500 font-sans uppercase tracking-widest">
              ver o código
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
