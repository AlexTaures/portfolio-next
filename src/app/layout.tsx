import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header/Header";
import '@fontsource/montserrat'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alexander Taures - Portfolio",
  description: "Portfolio designed by Alexander Taures",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-white mb-5">
          <Header/>
          {children}
        </div>
        <footer className='text-gray-700 bg-white fixed bottom-0 flex justify-center w-full'>&copy;  Oscar Taures - Copyright 2024</footer>
      </body>
    </html>
  );
}
