import type { Metadata } from 'next';

import Hero from '@/components/hero';
import Services from '@/components/services';
import Spotlight from '@/components/spotlight';
import About from '@/components/about';
import Portfolio from '@/components/portfolio';
import FAQ from '@/components/faq';
import FreeDemo from '@/components/free-demo';
import Contact from '@/components/contact/contact';
import { ServicesJsonLd, FaqJsonLd } from '@/components/json-ld';
import { faqsFor } from '@/data/faqs';
import { pageMetadata } from '@/lib/metadata';
import { dictionaryFor, isLocale } from '@/i18n';
import { getI18n } from '@/i18n/server';

const HOME = {
  en: {
    title: 'Sites Pro — Web Development, Platforms & AI Automation Agency',
    description:
      'Sites Pro builds product-grade websites, web platforms and AI automations. A Latvia-based digital agency working with clients across the EU and worldwide.',
  },
  lv: {
    // kept as sitespro.lv had it, so the move does not reset its search snippet
    title: 'SitesPro | Web izstrāde Latvijā',
    description:
      'SitesPro - profesionāla web izstrāde Latvijā. Mājas lapas, e-komercija, web aplikācijas, CRM sistēmas un AI automatizācija, uzturēšana un SEO/GEO optimizācija - redzamība gan Google, gan AI sistēmās.',
  },
};

export async function generateMetadata({ params }: PageProps<'/[locale]'>): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = dictionaryFor(locale);
  return pageMetadata({
    locale,
    path: '/',
    absoluteTitle: true,
    title: HOME[locale].title,
    description: HOME[locale].description,
    socialTitle: t.site.defaultTitle,
  });
}

export default async function Home() {
  const { locale, t } = await getI18n();
  const faqs = faqsFor(locale);

  return (
    <>
      <ServicesJsonLd />
      <FaqJsonLd items={faqs} />

      <Hero />
      <Services />
      <Spotlight />
      <Portfolio />
      <About />
      {/* The free demo is an offer of the Latvian site only. */}
      {locale === 'lv' && <FreeDemo />}
      <FAQ items={faqs} t={t.faqSection} />
      <Contact />
    </>
  );
}
