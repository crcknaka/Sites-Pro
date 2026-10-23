import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceLanding from '@/components/service-landing';
import { LV_SERVICE_PAGES } from '@/content/services-lv';
import { findService, getService } from '@/data/services';
import { pageMetadata } from '@/lib/metadata';

/*
 * sitespro.lv service pages (/pakalpojumi/<slug>). The English pages are the
 * static folders next to this one; their slugs never collide with these.
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(LV_SERVICE_PAGES).map((slug) => ({ locale: 'lv', slug }));
}

export async function generateMetadata({
  params,
}: PageProps<'/[locale]/services/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const page = LV_SERVICE_PAGES[slug];
  if (!page) return {};
  const key = page.config.service!;
  const en = findService('en', key);

  return pageMetadata({
    locale: 'lv',
    title: page.metaTitle,
    description: page.metaDescription,
    path: getService(key, 'lv').path,
    // the same service on sitespro.org, when it has a page there
    alternate: en ? en.path : null,
    image: false, // opengraph-image.tsx in this folder
  });
}

export default async function LvServicePage({ params }: PageProps<'/[locale]/services/[slug]'>) {
  const { locale, slug } = await params;
  const page = LV_SERVICE_PAGES[slug];
  if (locale !== 'lv' || !page) notFound();

  return <ServiceLanding config={page.config} />;
}
