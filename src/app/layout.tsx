import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Header from '@/components/header';
import Footer from '@/components/footer';
import ScrollToTop from '@/components/scroll-to-top';
import AnimatedBackground from '@/components/animated-background';
import Chatbot from '@/components/chatbot';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sites Pro',
  description: 'Websites, Apps, AI & Automations',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="overflow-x-hidden"
      suppressHydrationWarning
    >
      {/* 
        IMPORTANT:
        - background lives on html
        - body is transparent
      */}
      <body
        className={`
          ${inter.className}
          antialiased
          overflow-x-hidden
          bg-transparent
        `}
      >
        {/* Atmospheric layers (below everything) */}
        <AnimatedBackground />

        {/* UI */}
        <Header />

        <main className="relative min-h-screen">
          {children}
        </main>

        <Footer />
        <ScrollToTop />
        <Chatbot />
      </body>
    </html>
  );
}
