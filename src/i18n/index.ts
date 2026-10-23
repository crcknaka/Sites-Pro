import en, { type Dictionary } from './dictionaries/en';
import lv from './dictionaries/lv';
import type { Locale } from './config';

export * from './config';
export * from './paths';
export type { Dictionary };

const DICTIONARIES: Record<Locale, Dictionary> = { en, lv };

/** Safe in client components — they receive the locale as a prop. */
export function dictionaryFor(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}
