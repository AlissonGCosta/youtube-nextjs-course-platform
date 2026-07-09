import type { Metadata } from "next";
import { Nunito } from "next/font/google";


import "./globals.css";
import { Header } from "@/components/header/Header";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const nuNito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodarSe - Os melhores cursos de porgramação gratuitos",
  description: "Os melhores cursos de programação gratuitos para você aprender a programar e se tornar um desenvolvedor de sucesso.",
};


export default function RootLayout({ children,}: Readonly<{children: React.ReactNode;}>)  {
  return (
    <html
      lang="pt-BR"
      className={`${nunito.variable} ${nuNito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        
        <Header/>

        {children}</body>
    </html>
  );
}
