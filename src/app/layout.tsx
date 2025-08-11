import type { Metadata } from "next";
import "./globals.scss";
import { Header } from "@/components/Header";


export const metadata: Metadata = {
  title: "DevMotors",
  description: "Oficina de mecânica em São paulo a melhor da zona norte! Consertamos qualquer tipo de carro dos mais antigos aos mais novos!",
  keywords: ["Oficina", 'Oficina de carros', "Manutenção de carros", "Troca de óleo de carros"],
  openGraph: {
    title: "DevMotors - Sua oficina especializada!",
    images:[`${process.env.NEXT_PUBLIC_URL}/logo.png`]
  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
