'use client';

import { useEffect, useState } from 'react';

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');

    if (stored) {
      document.documentElement.dataset.theme = stored;
    } else {
      const prefersLight = window.matchMedia(
        '(prefers-color-scheme: light)'
      ).matches;

      document.documentElement.dataset.theme =
        prefersLight ? 'light' : 'dark';
    }

    setMounted(true);
  }, []);

  if (!mounted) return null;
  return <>{children}</>;
}
