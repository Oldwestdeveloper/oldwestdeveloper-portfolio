import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from "sonner"; // 1. Importando o componente de notificações

// Fonte moderna para leitura de textos
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Fonte rústica para os títulos (Old West)
const western = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-western",
});

// SEO do seu Portfólio
export const metadata: Metadata = {
  title: "Old West Developer",
  description: "Portfólio de Desenvolvedor Fullstack com a força do campo e a precisão da tecnologia.",
  icons: { 
    icon: "/images/favicon.png" 
  },
  // Adicione este bloco OpenGraph:
  openGraph: {
    title: "Old West Developer",
    description: "Portfólio de Desenvolvedor Fullstack com a força do campo e a precisão da tecnologia.",
    url: "https://seu-dominio-vercel.com", // Atualize com seu link final depois do deploy
    siteName: "Old West Developer",
    images: [
      {
        url: "/images/og-image.png", // Aponta para a imagem que você colocou na pasta
        width: 1200,
        height: 630,
        alt: "Preview do Portfólio Old West Developer",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} ${western.variable} bg-wood-dark text-parchment antialiased`}
      >
        {/* O Header fica aqui para aparecer em todas as rotas */}
        <Header />

        {/* O children é onde o conteúdo das outras páginas vai ser injetado */}
        <main className="pt-20">{children}</main>

        {/* 2. Adicionando o Toaster para renderizar os avisos no canto da tela */}
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  );
}