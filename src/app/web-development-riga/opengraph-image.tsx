import { OG_CONTENT_TYPE, OG_SIZE, renderOg } from '@/lib/og';

export const alt = 'Web development company in Riga — Sites Pro';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return renderOg({
    eyebrow: 'Riga, Latvia',
    title: 'Web development company in Riga',
    subtitle: 'Websites, online shops, web platforms and AI automations — in English, Latvian or Russian',
  });
}
