"use client";

import { useEffect, useRef, useCallback } from "react";

interface Dot {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const scrollRef = useRef(0);
  const dotsRef = useRef<Dot[]>([]);
  const rafRef = useRef<number>(0);
  const isDarkRef = useRef(false);

  const initDots = useCallback((width: number, height: number) => {
    const dots: Dot[] = [];
    const spacing = 80;
    const cols = Math.ceil(width / spacing) + 1;
    const rows = Math.ceil(height / spacing) + 1;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * spacing + (j % 2 === 0 ? 0 : spacing / 2);
        const y = j * spacing;
        dots.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          radius: Math.random() * 1.2 + 0.6,
          opacity: Math.random() * 0.3 + 0.08,
        });
      }
    }
    dotsRef.current = dots;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = window.devicePixelRatio || 1;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initDots(w, h);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const onMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const onScroll = () => {
      scrollRef.current = window.scrollY;
    };

    const checkDark = () => {
      isDarkRef.current = document.documentElement.dataset.theme !== "light";
    };

    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    resize();
    checkDark();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    canvas.addEventListener("mouseleave", onMouseLeave);

    const accentRGB = { r: 143, g: 215, b: 89 };

    const draw = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      const dark = isDarkRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const scroll = scrollRef.current;
      const revealRadius = 300;
      const mouseRadius = 200;
      const connectRadius = 150;

      // Scroll-based parallax offset
      const parallaxY = scroll * 0.15;

      // Glow orb following mouse
      if (mx > -500 && my > -500) {
        const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, 280);
        if (dark) {
          gradient.addColorStop(0, `rgba(${accentRGB.r},${accentRGB.g},${accentRGB.b},0.06)`);
          gradient.addColorStop(0.5, `rgba(${accentRGB.r},${accentRGB.g},${accentRGB.b},0.02)`);
          gradient.addColorStop(1, "transparent");
        } else {
          gradient.addColorStop(0, `rgba(${accentRGB.r},${accentRGB.g},${accentRGB.b},0.08)`);
          gradient.addColorStop(0.5, `rgba(${accentRGB.r},${accentRGB.g},${accentRGB.b},0.03)`);
          gradient.addColorStop(1, "transparent");
        }
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);
      }

      const dots = dotsRef.current;

      // Update dot positions
      for (const dot of dots) {
        // Gentle floating
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Soft spring back to base
        const dxBase = dot.baseX - dot.x;
        const dyBase = dot.baseY - dot.y;
        dot.vx += dxBase * 0.002;
        dot.vy += dyBase * 0.002;

        // Damping
        dot.vx *= 0.99;
        dot.vy *= 0.99;

        // Mouse repulsion
        const dxMouse = dot.x - mx;
        const dyMouse = (dot.y - parallaxY) - my;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < mouseRadius) {
          const force = (1 - distMouse / mouseRadius) * 0.8;
          dot.vx += (dxMouse / distMouse) * force;
          dot.vy += (dyMouse / distMouse) * force;
        }
      }

      // Draw connections near mouse
      if (mx > -500) {
        for (let i = 0; i < dots.length; i++) {
          const a = dots[i];
          const ay = a.y - parallaxY;

          const dxA = a.x - mx;
          const dyA = ay - my;
          const distA = Math.sqrt(dxA * dxA + dyA * dyA);
          if (distA > connectRadius * 1.5) continue;

          for (let j = i + 1; j < dots.length; j++) {
            const b = dots[j];
            const by = b.y - parallaxY;

            const dx = a.x - b.x;
            const dy = ay - by;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < connectRadius) {
              const dxB = b.x - mx;
              const dyB = by - my;
              const distB = Math.sqrt(dxB * dxB + dyB * dyB);

              const proximity = Math.min(distA, distB);
              const alpha = (1 - dist / connectRadius) * (1 - proximity / (connectRadius * 1.5)) * 0.35;

              if (alpha > 0.01) {
                ctx.beginPath();
                ctx.moveTo(a.x, ay);
                ctx.lineTo(b.x, by);
                if (dark) {
                  ctx.strokeStyle = `rgba(${accentRGB.r},${accentRGB.g},${accentRGB.b},${alpha})`;
                } else {
                  ctx.strokeStyle = `rgba(${accentRGB.r - 40},${accentRGB.g - 40},${accentRGB.b - 20},${alpha * 0.7})`;
                }
                ctx.lineWidth = 0.6;
                ctx.stroke();
              }
            }
          }
        }
      }

      // Draw dots — only visible near mouse
      if (mx > -500) {
        for (const dot of dots) {
          const dy = dot.y - parallaxY;
          const dxMouse = dot.x - mx;
          const dyMouse = dy - my;
          const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

          // Skip dots outside reveal radius
          if (distMouse > revealRadius) continue;

          // Reveal factor: 0 at edge, 1 at center
          const reveal = 1 - distMouse / revealRadius;
          let opacity = dot.opacity * reveal;
          let radius = dot.radius;
          let isAccent = false;

          if (distMouse < mouseRadius) {
            const proximity = 1 - distMouse / mouseRadius;
            opacity = Math.min(opacity + proximity * 0.6, 0.9);
            radius = dot.radius + proximity * 2;
            isAccent = true;
          }

          ctx.beginPath();
          ctx.arc(dot.x, dy, radius, 0, Math.PI * 2);

          if (isAccent) {
            ctx.fillStyle = `rgba(${accentRGB.r},${accentRGB.g},${accentRGB.b},${opacity})`;
          } else if (dark) {
            ctx.fillStyle = `rgba(255,255,255,${opacity * 1.5})`;
          } else {
            ctx.fillStyle = `rgba(16,24,41,${opacity * 0.8})`;
          }
          ctx.fill();

          // Glow on accent dots
          if (isAccent && distMouse < mouseRadius * 0.6) {
            const glowAlpha = (1 - distMouse / (mouseRadius * 0.6)) * 0.3;
            ctx.beginPath();
            ctx.arc(dot.x, dy, radius + 3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${accentRGB.r},${accentRGB.g},${accentRGB.b},${glowAlpha})`;
            ctx.fill();
          }
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      observer.disconnect();
    };
  }, [initDots]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
