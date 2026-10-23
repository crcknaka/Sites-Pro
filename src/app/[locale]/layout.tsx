import '../globals.css';
import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { Inter, Space_Grotesk } from 'next/font/google';
import Script from 'next/script';

import Header from '@/components/header';
import Footer from '@/components/footer';
import ScrollToTop from '@/components/scroll-to-top';
import { OrganizationJsonLd, WebsiteJsonLd } from '@/components/json-ld';
import { LOCALES, SITES, dictionaryFor, isLocale } from '@/i18n';
import { counterpartMap } from '@/i18n/counterparts';

// latin-ext carries the Latvian letters (ā, č, ē, ģ, ī, ķ, ļ, ņ, š, ū, ž).
const inter = Inter({ subsets: ['latin', 'latin-ext'] });

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin', 'latin-ext'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps<'/[locale]'>): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = dictionaryFor(locale);
  const site = SITES[locale];

  return {
    title: {
      default: t.site.defaultTitle,
      template: `%s | ${t.site.name}`,
    },
    description: t.site.description,
    authors: [{ name: t.site.name }],
    creator: t.site.name,
    metadataBase: new URL(site.url),
    // No site-wide canonical: every page sets its own (see pageMetadata), and a
    // default here would point the 404 page and anything forgotten at the home page.
    openGraph: {
      type: 'website',
      locale: site.ogLocale,
      url: site.url,
      title: t.site.defaultTitle,
      description: t.site.description,
      siteName: t.site.name,
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: t.site.ogAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.site.defaultTitle,
      description: t.site.description,
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
  };
}

export default async function RootLayout({ children, params }: LayoutProps<'/[locale]'>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const site = SITES[locale];

  return (
    <html lang={site.lang} className="overflow-x-hidden" suppressHydrationWarning>
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
          overflow-x-clip
          bg-[var(--bg)]
        `}
      >
        <Header locale={locale} counterparts={counterpartMap(locale)} />

        <main id="main" className="relative min-h-screen">
          {children}
        </main>

        <Footer />
        <ScrollToTop />

        {/* SitesPro Analytics (self-hosted Umami, no cookies). Each domain has
            its own website id; data-domains keeps local, staging and preview
            visits out of the production stats. */}
        <Script
          src="https://stats.sitespro.org/script.js"
          data-website-id={site.umami.id}
          data-domains={site.umami.domains}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
