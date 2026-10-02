'use client';

import { useEffect, useRef, useState } from 'react';

/** Design size every service scene is drawn at — see service-scenes.tsx. */
export const SCENE_W = 560;
export const SCENE_H = 380;

/**
 * Measures its box and scales the fixed-size drawing passed as children.
 * The only client code in the scenes: the drawings themselves are server
 * components, so their markup never ships as JavaScript.
 */
export default function SceneScaler({
  children,
  className = '',
  float = true,
}: {
  children: React.ReactNode;
  className?: string;
  /** true = gentle idle float, used in the service heroes */
  float?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => setScale(el.clientWidth / SCENE_W);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative w-full select-none ${className}`}
      style={{ aspectRatio: `${SCENE_W} / ${SCENE_H}` }}
      aria-hidden="true"
      data-nosnippet=""
    >
      <div
        className={`absolute left-0 top-0 ${float ? 'lg:animate-[slow-float_7s_ease-in-out_infinite]' : ''}`}
        style={{
          width: SCENE_W,
          height: SCENE_H,
          transform: `scale(${scale ?? 1})`,
          transformOrigin: 'top left',
          opacity: scale === null ? 0 : 1,
          transition: 'opacity 0.6s ease-out',
        }}
      >
        {children}
      </div>
    </div>
  );
}
