import { projects } from '@/data/projects';
import { OG_CONTENT_TYPE, OG_SIZE, renderOg } from '@/lib/og';

export const alt = 'Portfolio — Sites Pro';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return renderOg({
    eyebrow: 'Portfolio',
    title: `${projects.length} case studies`,
    subtitle: 'Websites, online stores, web platforms, apps and fintech — the challenge, the solution and the result',
  });
}
