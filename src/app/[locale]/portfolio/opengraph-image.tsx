import { projects } from '@/data/projects';
import { LOCALES, isLocale } from '@/i18n';
import { OG_CONTENT_TYPE, OG_SIZE, renderOg } from '@/lib/og';

export const alt = 'Portfolio — Sites Pro';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

// Rendered at build time, one card per site that has this page.
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

const COPY = {
  en: {
    title: (n: number) => `${n} case studies`,
    subtitle: 'Websites, online stores, web platforms, apps and fintech — the challenge, the solution and the result',
  },
  lv: {
    title: (n: number) => `${n} projekti`,
    subtitle: 'Mājas lapas, interneta veikali, web platformas, aplikācijas un fintech - uzdevums, risinājums un rezultāts',
  },
};

export default async function OpengraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : 'en';
  return renderOg({
    locale,
    eyebrow: 'Portfolio',
    title: COPY[locale].title(projects.length),
    subtitle: COPY[locale].subtitle,
  });
}
