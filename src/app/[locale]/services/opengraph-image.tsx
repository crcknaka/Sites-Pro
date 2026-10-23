import { LOCALES, isLocale } from '@/i18n';
import { OG_CONTENT_TYPE, OG_SIZE, renderOg } from '@/lib/og';

export const alt = 'Services — Sites Pro';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

// Rendered at build time, one card per site that has this page.
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

const COPY = {
  en: {
    eyebrow: 'Sites Pro',
    title: 'Websites, platforms, e-commerce, fintech and AI',
    subtitle: 'Eight services, each backed by case studies',
  },
  lv: {
    eyebrow: 'SitesPro',
    title: 'Mājas lapas, e-veikali, web aplikācijas un AI',
    subtitle: 'Izstrāde, uzturēšana un SEO/GEO optimizācija',
  },
};

export default async function OpengraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : 'en';
  return renderOg({ locale, ...COPY[locale] });
}
