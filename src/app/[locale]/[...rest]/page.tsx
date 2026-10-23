import { notFound } from 'next/navigation';

/**
 * Every URL is rewritten under /[locale], so an unknown path lands here and
 * renders [locale]/not-found.tsx inside the site layout, in the right language.
 */
export default function CatchAll() {
  notFound();
}
