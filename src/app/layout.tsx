import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';

import Header from '@/components/header';
import Footer from '@/components/footer';
import ScrollToTop from '@/components/scroll-to-top';
import { OrganizationJsonLd, WebsiteJsonLd } from '@/components/json-ld';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib';

const inter = Inter({ subsets: ['latin'] });

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'Sites Pro — Web Development, Platforms & AI Automation Agency',
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: ['web development', 'application development', 'AI automation', 'technical consulting', 'fintech solutions', 'digital agency'],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: 'Sites Pro — Web Development, Platforms & AI Automation Agency',
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
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
    title: 'Sites Pro — Web Development, Platforms & AI Automation Agency',
    description: SITE_DESCRIPTION,
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
      </head>
      <body
        className={`
          ${inter.className}
          ${spaceGrotesk.variable}
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
      </body>
    </html>
  );
}
