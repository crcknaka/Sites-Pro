import { OG_CONTENT_TYPE, OG_SIZE, renderOg } from '@/lib/og';

export const alt = 'Services — Sites Pro';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return renderOg({
    eyebrow: 'Sites Pro',
    title: 'Websites, platforms, e-commerce, fintech and AI',
    subtitle: 'Eight services, each backed by case studies',
  });
}
