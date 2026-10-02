import { getService } from '@/data/services';
import { OG_CONTENT_TYPE, OG_SIZE, renderOg } from '@/lib/og';

export const alt = 'Custom CRM Development — Sites Pro';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  const service = getService('crm');
  return renderOg({
    eyebrow: 'Services',
    title: service.name,
    subtitle: service.offers.slice(0, 3).join(' · '),
  });
}
