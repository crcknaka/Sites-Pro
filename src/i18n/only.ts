import { notFound } from 'next/navigation';
import type { Locale } from './config';
import { getLocale } from './server';

/**
 * For pages that exist on one site only (the hand-written English service
 * pages, the Riga page): every route is generated for both locales, so the
 * other site answers 404 instead of serving English copy on sitespro.lv.
 */
export async function onlyOn(locale: Locale): Promise<void> {
  if ((await getLocale()) !== locale) notFound();
}
