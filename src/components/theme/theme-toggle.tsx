'use client';

import { Sun, Moon } from 'lucide-react';
import { useSyncExternalStore } from 'react';
import { dictionaryFor, type Locale } from '@/i18n';

type Theme = 'dark' | 'light';

/* The theme lives on <html data-theme>, set before paint by the inline
   script in the root layout; the button only reads and flips it. */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributeFilter: ['data-theme'] });
  return () => observer.disconnect();
}
const getTheme = (): Theme =>
  document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
/** No theme on the server: render nothing until hydrated, as before. */
const getServerTheme = (): Theme | null => null;

export function ThemeToggle({ locale }: { locale: Locale }) {
  const t = dictionaryFor(locale).theme;
  const theme = useSyncExternalStore<Theme | null>(subscribe, getTheme, getServerTheme);

  if (!theme) return null;

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {}
  };

  return (
    <button
      onClick={toggle}
      aria-label={theme === 'dark' ? t.toLight : t.toDark}
      className="
        cursor-pointer
        h-9 w-9
        rounded-full
        flex items-center justify-center
        border border-[var(--border)]
        bg-[var(--surface)]
        transition
        hover:bg-[var(--surface-strong)]
      "
    >
      {theme === 'dark' ? (
        <Sun className="h-4 w-4 text-[var(--fg)]/80" />
      ) : (
        <Moon className="h-4 w-4 text-[var(--fg)]/80" />
      )}
    </button>
  );
}
