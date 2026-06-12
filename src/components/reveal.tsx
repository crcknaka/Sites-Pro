'use client';

import { useEffect, useRef, useState, type ElementType } from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay in ms. */
  delay?: number;
  as?: ElementType;
};

/**
 * Lightweight scroll-reveal: fades and lifts content into view once.
 * CSS-transition based (cheap on mobile), respects reduced motion via
 * the .reveal rules in globals.css.
 */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
