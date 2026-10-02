import { OG_CONTENT_TYPE, OG_SIZE, renderOg } from '@/lib/og';

export const alt = 'About Sites Pro';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return renderOg({
    eyebrow: 'About',
    title: 'A small studio that builds like a product team',
    subtitle: 'Riga · websites, web platforms and AI automations · our own products on the same stack',
  });
}
