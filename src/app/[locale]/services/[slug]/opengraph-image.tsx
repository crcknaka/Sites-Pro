import { LV_SERVICE_PAGES } from '@/content/services-lv';
import { getService } from '@/data/services';
import { OG_CONTENT_TYPE, OG_SIZE, renderOg } from '@/lib/og';

export const alt = 'SitesPro pakalpojumi';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return Object.keys(LV_SERVICE_PAGES).map((slug) => ({ locale: 'lv', slug }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(LV_SERVICE_PAGES[slug].config.service!, 'lv');
  return renderOg({
    locale: 'lv',
    eyebrow: 'Pakalpojumi',
    title: service.name,
    subtitle: service.offers.slice(0, 3).join(' · '),
  });
}
