import { Header } from "@/components/Header";
import { HeroPattern } from "@/components/HeroPattern";
import { Sidebar } from "@/components/Sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Protocol Tailwind UI",
  description: "Protocol Tailwind UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body className="bg-zinc-900">
        <Sidebar />
        <div className="ml-80 relative h-screen">
          <Header />
          <HeroPattern />
          <div className="py-24 max-w-4xl px-8 mx-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
