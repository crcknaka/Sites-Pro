import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import Header from '@/components/header';
import Footer from '@/components/footer';
import ScrollToTop from '@/components/scroll-to-top';
import AnimatedBackground from '@/components/animated-background';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: {
    default: 'Sites Pro — Digital Done Right',
    template: '%s | Sites Pro',
  },
  description: 'Professional web development, applications, AI automations, and technical consulting. We build modern, scalable digital experiences that drive results.',
  keywords: ['web development', 'application development', 'AI automation', 'technical consulting', 'fintech solutions', 'digital agency'],
  authors: [{ name: 'Sites Pro' }],
  creator: 'Sites Pro',
  metadataBase: new URL('https://sitespro.org'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sitespro.org',
    title: 'Sites Pro — Digital Done Right',
    description: 'Professional web development, applications, AI automations, and technical consulting. We build modern, scalable digital experiences that drive results.',
    siteName: 'Sites Pro',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sites Pro — Digital Done Right',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sites Pro — Digital Done Right',
    description: 'Professional web development, applications, AI automations, and technical consulting. We build modern, scalable digital experiences.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
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
      </body>
    </html>
  );
}
