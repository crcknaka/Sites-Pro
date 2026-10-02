'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const WINDOWS = [
  {
    src: '/projects/covers/payment-gateway.webp?v=4',
    alt: 'Payment gateway operator console',
    className: 'left-0 top-0 w-[74%] -rotate-[4deg] opacity-90',
    delay: '0s',
  },
  {
    src: '/projects/covers/agency-crm.webp?v=4',
    alt: 'Web studio CRM dashboard',
    className: 'right-0 top-[14%] w-[74%] rotate-[3deg] opacity-95',
    delay: '-2.5s',
  },
  {
    src: '/projects/covers/vadi.webp?v=4',
    alt: 'Vadi accounting platform',
    className: 'left-[6%] bottom-0 w-[80%]',
    delay: '-5s',
  },
];

/**
 * The three product windows on the right of the hero. They arrive from the
 * network at different moments; rather than letting each pop in on its own we
 * wait until all have decoded (or 1.8 s, whichever comes first) and run one
 * choreographed entrance. The only client code in the hero.
 */
export default function HeroWindows() {
  const [loaded, setLoaded] = useState(0);
  const [timedOut, setTimedOut] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setTimedOut(true), 1800);
    return () => clearTimeout(t);
  }, []);
  const ready = timedOut || loaded >= WINDOWS.length;

  return (
    <div
      className="relative mx-auto w-full max-w-[560px]"
      style={{ aspectRatio: '560 / 470' }}
      aria-hidden="true"
    >
      {WINDOWS.map((w, i) => (
        <div
          key={w.src}
          className={`hero-window absolute ${w.className} ${ready ? 'is-ready' : ''}`}
          style={{ '--i': i } as React.CSSProperties}
        >
          {/* float runs on an inner element so it never fights the entrance transform */}
          <div
            className={ready ? 'lg:animate-[slow-float_8s_ease-in-out_infinite]' : ''}
            style={{ animationDelay: w.delay }}
          >
            <Image
              src={w.src}
              alt={w.alt}
              width={1200}
              height={900}
              // only the front window is worth a preload; the text is the LCP
              preload={i === WINDOWS.length - 1}
              fetchPriority={i === WINDOWS.length - 1 ? 'high' : 'auto'}
              loading="eager"
              sizes="(max-width: 1024px) 80vw, 420px"
              className="h-auto w-full"
              onLoad={() => setLoaded((n) => n + 1)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
