'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      aria-label="Scroll to top"
      onClick={() =>
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      className="
        fixed bottom-6 right-6 z-50
        flex h-11 w-11 items-center justify-center
        rounded-full
        bg-[var(--surface)]
        border border-[var(--border)]
        backdrop-blur
        transition-colors duration-200
        hover:bg-[var(--surface-strong)]
        cursor-pointer
      "
    >
      <ArrowUp className="h-4 w-4 text-[var(--fg)]/70" />
    </button>
  );
}
