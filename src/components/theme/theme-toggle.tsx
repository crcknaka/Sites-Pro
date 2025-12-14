'use client';

import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'dark' | 'light' | null;

    if (stored) {
      document.documentElement.dataset.theme = stored;
      setTheme(stored);
    } else {
      const prefersLight = window.matchMedia(
        '(prefers-color-scheme: light)'
      ).matches;

      const initial = prefersLight ? 'light' : 'dark';
      document.documentElement.dataset.theme = initial;
      setTheme(initial);
    }

    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('theme', next);
    setTheme(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
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
