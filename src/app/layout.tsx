import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';

import Header from '@/components/header';
import Footer from '@/components/footer';
import ScrollToTop from '@/components/scroll-to-top';
import {
  OrganizationJsonLd,
  WebsiteJsonLd,
  ServicesJsonLd,
} from '@/components/json-ld';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'Sites Pro — Digital Done Right',
    template: '%s | Sites Pro',
  },
  description: 'Product-grade websites, platforms and AI automations built to scale.',
  keywords: ['web development', 'application development', 'AI automation', 'technical consulting', 'fintech solutions', 'digital agency'],
  authors: [{ name: 'Sites Pro' }],
  creator: 'Sites Pro',
  metadataBase: new URL('https://sitespro.org'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sitespro.org',
    title: 'Sites Pro — Digital Done Right',
    description: 'Product-grade websites, platforms and AI automations built to scale.',
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
    description: 'Product-grade websites, platforms and AI automations built to scale.',
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t){document.documentElement.dataset.theme=t}else{var d=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';document.documentElement.dataset.theme=d}}catch(e){document.documentElement.dataset.theme='dark'}})()`,
          }}
        />
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        <ServicesJsonLd />
      </head>
      <body
        className={`
          ${inter.className}
          antialiased
          overflow-x-hidden
          bg-[var(--bg)]
        `}
      >
        <Header />

        <main className="relative min-h-screen">
          {children}
        </main>

        <Footer />
        <ScrollToTop />
        <SpeedInsights />
      </body>
    </html>
  );
}
