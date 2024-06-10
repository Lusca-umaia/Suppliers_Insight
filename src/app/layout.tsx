import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
  title: "Suppliers",
  description: "Site destinado para o cadastro de Fornecedores de uma organização!!",
  icons: "/logoIcon.svg"
};

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
