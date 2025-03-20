import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/main/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#030014] overflow-y-scroll overflow-x-hidden w-full h-full`}
      >
        <Navbar />

        <video autoPlay muted loop className='absolute z-[100] w-full h-[200vh] object-cover'>
            <source src='/blackhole.mp4' type='video/mp4'/>
        </video>
        <main className="w-full h-full relative z-[200]">
          {children}
        </main>
        
      </body>
    </html>
  );
}
