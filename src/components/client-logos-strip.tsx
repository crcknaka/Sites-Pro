'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/* ======================================================
   The moving part of the client strip. It drifts on its own
   and can be taken over at any moment: dragged with a mouse,
   swiped with a finger, scrolled sideways on a trackpad or
   stepped with the two arrows. Let go and it drifts again.

   Until this hydrates the track runs on the CSS `marquee`
   animation; on mount the script picks it up from wherever
   that animation stands, so there is no jump.
====================================================== */

const LOOP_SECONDS = 48; // one full pass of the list when left alone
const RESUME_MS = 1600; // quiet time after a gesture before drifting again
const GLIDE_MS = 520; // one arrow step
const DRAG_THRESHOLD = 6; // px of sideways travel before a press becomes a drag

const FADE = 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)';

const ARROW =
  'absolute top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full ' +
  'border border-[var(--border)] bg-[var(--bg)] text-[var(--fg)]/70 opacity-0 transition-[opacity,border-color,color] duration-300 ' +
  'hover:border-[var(--accent-1)]/50 hover:text-[var(--fg)] focus-visible:opacity-100 group-hover/strip:opacity-100 ' +
  'pointer-fine:flex';

type Props = {
  children: ReactNode;
  prevLabel: string;
  nextLabel: string;
};

export default function ClientLogosStrip({ children, prevLabel, nextLabel }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const stepRef = useRef<(dir: -1 | 1) => void>(() => {});

  useEffect(() => {
    const root = rootRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!root || !viewport || !track) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

    // Take over from the CSS animation at its current position.
    let offset = -new DOMMatrixReadOnly(getComputedStyle(track).transform).m41;
    track.style.animation = 'none';

    let half = track.scrollWidth / 2; // the list is rendered twice
    let drift = reduced.matches ? 0 : half / LOOP_SECONDS; // current drift speed, px/s
    let velocity = 0; // px/s left over from a drag
    let glide: { from: number; to: number; start: number } | null = null;
    let dragging = false;
    let hovering = false;
    let focused = false;
    let pausedUntil = 0;
    let last = performance.now();
    let raf = 0;

    const apply = () => {
      const x = half > 0 ? ((offset % half) + half) % half : 0;
      track.style.transform = `translate3d(${-x}px, 0, 0)`;
    };

    const frame = (now: number) => {
      const dt = Math.min(now - last, 64) / 1000;
      last = now;

      if (glide) {
        const p = Math.min((now - glide.start) / GLIDE_MS, 1);
        offset = glide.from + (glide.to - glide.from) * (1 - (1 - p) ** 3);
        if (p === 1) glide = null;
        drift = 0;
      } else if (dragging) {
        drift = 0;
      } else if (Math.abs(velocity) > 6) {
        offset += velocity * dt;
        velocity *= Math.exp(-dt * 4);
        drift = 0;
      } else {
        velocity = 0;
        const resting = hovering || focused || now < pausedUntil || reduced.matches;
        const target = resting ? 0 : half / LOOP_SECONDS;
        drift += (target - drift) * Math.min(1, dt * 5); // ease in and out of the drift
        offset += drift * dt;
      }

      apply();
      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (raf) return;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    // ---- drag / swipe ----
    let pointerId = -1;
    let startX = 0;
    let startOffset = 0;
    let lastX = 0;
    let lastT = 0;

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      pointerId = e.pointerId;
      startX = lastX = e.clientX;
      lastT = e.timeStamp;
      velocity = 0;
      glide = null;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerId !== pointerId) return;
      if (!dragging) {
        if (Math.abs(e.clientX - startX) < DRAG_THRESHOLD) return;
        dragging = true;
        startX = e.clientX;
        startOffset = offset;
        viewport.setPointerCapture(pointerId);
        viewport.dataset.dragging = 'true';
      }
      offset = startOffset - (e.clientX - startX);
      const elapsed = e.timeStamp - lastT;
      if (elapsed > 0) {
        const v = (-(e.clientX - lastX) / elapsed) * 1000;
        velocity = velocity * 0.5 + v * 0.5;
      }
      lastX = e.clientX;
      lastT = e.timeStamp;
    };

    const onPointerEnd = (e: PointerEvent) => {
      if (e.pointerId !== pointerId) return;
      pointerId = -1;
      if (!dragging) return;
      dragging = false;
      delete viewport.dataset.dragging;
      if (e.timeStamp - lastT > 90 || reduced.matches) velocity = 0; // held still before letting go
      pausedUntil = performance.now() + RESUME_MS;
    };

    // ---- sideways trackpad scroll / shift + wheel ----
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return; // vertical scroll stays with the page
      e.preventDefault();
      glide = null;
      velocity = 0;
      offset += e.deltaX;
      pausedUntil = performance.now() + RESUME_MS;
    };

    // ---- arrows ----
    stepRef.current = (dir) => {
      const distance = Math.max(220, viewport.clientWidth * 0.5) * dir;
      const from = glide ? glide.to : offset;
      velocity = 0;
      pausedUntil = performance.now() + GLIDE_MS + RESUME_MS;
      if (reduced.matches) {
        glide = null;
        offset = from + distance;
      } else {
        glide = { from: offset, to: from + distance, start: performance.now() };
      }
    };

    const onEnter = (e: PointerEvent) => {
      if (e.pointerType === 'mouse') hovering = true;
    };
    const onLeave = () => {
      hovering = false;
    };
    const onFocusIn = () => {
      focused = true;
    };
    const onFocusOut = () => {
      focused = false;
    };

    viewport.addEventListener('pointerdown', onPointerDown);
    viewport.addEventListener('pointermove', onPointerMove);
    viewport.addEventListener('pointerup', onPointerEnd);
    viewport.addEventListener('pointercancel', onPointerEnd);
    viewport.addEventListener('wheel', onWheel, { passive: false });
    root.addEventListener('pointerenter', onEnter);
    root.addEventListener('pointerleave', onLeave);
    root.addEventListener('focusin', onFocusIn);
    root.addEventListener('focusout', onFocusOut);

    const resize = new ResizeObserver(() => {
      half = track.scrollWidth / 2;
    });
    resize.observe(track);

    // No work while the strip is off screen.
    const visibility = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()));
    visibility.observe(root);

    apply();

    return () => {
      stop();
      resize.disconnect();
      visibility.disconnect();
      viewport.removeEventListener('pointerdown', onPointerDown);
      viewport.removeEventListener('pointermove', onPointerMove);
      viewport.removeEventListener('pointerup', onPointerEnd);
      viewport.removeEventListener('pointercancel', onPointerEnd);
      viewport.removeEventListener('wheel', onWheel);
      root.removeEventListener('pointerenter', onEnter);
      root.removeEventListener('pointerleave', onLeave);
      root.removeEventListener('focusin', onFocusIn);
      root.removeEventListener('focusout', onFocusOut);
    };
  }, []);

  return (
    <div ref={rootRef} className="group/strip relative">
      <div
        ref={viewportRef}
        className="cursor-grab touch-pan-y overflow-hidden data-[dragging]:cursor-grabbing"
        style={{ maskImage: FADE, WebkitMaskImage: FADE }}
      >
        {/* the row is rendered twice and moved by half its width: a seamless loop */}
        <div
          ref={trackRef}
          className="flex w-max animate-marquee opacity-60 grayscale transition-[opacity,filter] duration-500 will-change-transform group-hover/strip:opacity-100 group-hover/strip:grayscale-0"
        >
          {children}
        </div>
      </div>

      <button type="button" aria-label={prevLabel} onClick={() => stepRef.current(-1)} className={`${ARROW} left-0`}>
        <ChevronLeft className="h-4 w-4" aria-hidden="true" />
      </button>
      <button type="button" aria-label={nextLabel} onClick={() => stepRef.current(1)} className={`${ARROW} right-0`}>
        <ChevronRight className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
}
