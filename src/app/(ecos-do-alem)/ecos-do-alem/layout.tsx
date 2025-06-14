import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";
import Footer from "@/components/Footer";
import Providers from "@/providers/Providers";
import { Analytics } from "@vercel/analytics/react";
import NavbarEDA from "@/components/NavbarEDA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ecos do Além - Livro",
  description: "Anúncio do novo livro de Eduardo Cagnotto, Ecos do Além.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[url(/ecos-do-alem/bg.svg)] bg-cover bg-center `}
      >
        <Providers>
          <NavbarEDA />
          {children}

          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
