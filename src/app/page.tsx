import type { Metadata } from 'next';

import Hero from '@/components/hero' ;
import Services from '@/components/services';
import About from '@/components/about';
import Portfolio from '@/components/portfolio';
import FAQ from '@/components/faq';
import Contact from '@/components/contact/contact';
import { ServicesJsonLd, FaqJsonLd } from '@/components/json-ld';

export const metadata: Metadata = {
  title: {
    absolute: 'Sites Pro — Web Development, Platforms & AI Automation Agency',
  },
  description:
    'Sites Pro builds product-grade websites, web platforms and AI automations. A Latvia-based digital agency working with clients across the EU and worldwide.',
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <>
      <ServicesJsonLd />
      <FaqJsonLd />

      <Hero />
      <Services />
      <Portfolio />
      <About />
      <FAQ />
      <Contact />
    </>
  );
}
