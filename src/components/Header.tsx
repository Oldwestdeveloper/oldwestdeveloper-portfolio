"use client"; 

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
  const navLinks = [
    { name: 'O Celeiro', href: '#projetos' },
    { name: 'A Porteira', href: '#sobre' },
    { name: 'Ferramentas', href: '#skills' },
    { name: 'Correio', href: '#contato' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-wood-dark/90 backdrop-blur-sm border-b border-old-gold/20"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <Link href="#home" className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
          <Image 
            src="/images/logo-principal.png" 
            alt="Logo OldWestDeveloper" 
            width={50} 
            height={50}
            className="hover:rotate-12 transition-transform duration-500"
          />
          <span className="font-western text-old-gold text-xl tracking-tighter uppercase">
            Old West <span className="text-white">Developer</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (index * 0.1) }} 
            >
              <Link 
                href={link.href}
                className="text-sm font-medium hover:text-old-gold transition-colors duration-300 uppercase tracking-widest text-parchment"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}