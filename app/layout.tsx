import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MasterMind: O Segredo do Sucesso",
  description: "Conheça a palestra de inteligência emocional aliada a inteligência artificial!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <head>
      </head>
      <body className="bg-blue">        
      <link rel="icon" href="/favicon.ico" sizes="any" />
      {children}
      </body>
      
    </html>
  );
}
