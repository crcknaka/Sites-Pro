import { locale as rootLocale } from 'next/root-params';
import { DEFAULT_LOCALE, dictionaryFor, isLocale, type Dictionary, type Locale } from './index';

/** The current request's locale, read from the app/[locale] root segment. */
export async function getLocale(): Promise<Locale> {
  const value = await rootLocale();
  return value && isLocale(value) ? value : DEFAULT_LOCALE;
}

/** Locale + dictionary in one call — what most server components need. */
export async function getI18n(): Promise<{ locale: Locale; t: Dictionary }> {
  const locale = await getLocale();
  return { locale, t: dictionaryFor(locale) };
}
