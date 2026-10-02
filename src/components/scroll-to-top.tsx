'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      tabIndex={visible ? 0 : -1}
      aria-label="Scroll to top"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        })
      }
      className={`
        fixed bottom-6 right-6 z-50
        flex h-11 w-11 items-center justify-center
        rounded-full
        bg-[var(--surface)]
        border border-[var(--border)]
        backdrop-blur
        transition-all duration-300
        hover:bg-[var(--surface-strong)]
        hover:border-[var(--accent-1)]/50
        cursor-pointer
        ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}
      `}
    >
      <ArrowUp className="h-4 w-4 text-[var(--fg)]/70" aria-hidden="true" />
    </button>
  );
}
