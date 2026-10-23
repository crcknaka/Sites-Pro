import { LOCALES, isLocale } from '@/i18n';
import { OG_CONTENT_TYPE, OG_SIZE, renderOg } from '@/lib/og';

export const alt = 'About Sites Pro';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

// Rendered at build time, one card per site that has this page.
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

const COPY = {
  en: {
    eyebrow: 'About',
    title: 'A small studio that builds like a product team',
    subtitle: 'Riga · websites, web platforms and AI automations · our own products on the same stack',
  },
  lv: {
    eyebrow: 'Par mums',
    title: 'Neliela studija, kas strādā kā produktu komanda',
    subtitle: 'Rīga · mājas lapas, web platformas un AI automatizācija · mūsu pašu produkti',
  },
};

export default async function OpengraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : 'en';
  return renderOg({ locale, ...COPY[locale] });
}
