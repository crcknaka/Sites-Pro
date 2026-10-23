import { getService } from '@/data/services';
import { OG_CONTENT_TYPE, OG_SIZE, renderOg } from '@/lib/og';

export const alt = 'Payment Systems & Fintech Development — Sites Pro';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

// English-only page: the card is built for sitespro.org alone.
export function generateStaticParams() {
  return [{ locale: 'en' }];
}

export default function OpengraphImage() {
  const service = getService('payments');
  return renderOg({
    eyebrow: 'Services',
    title: service.name,
    subtitle: service.offers.slice(0, 3).join(' · '),
  });
}
