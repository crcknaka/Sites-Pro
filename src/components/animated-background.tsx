'use client';

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedBackground() {
  const reduce = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile and tablet devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Disable animations on mobile/tablet or if user prefers reduced motion
  const shouldAnimate = !reduce && !isMobile;

  /* ---------------- mouse motion ---------------- */
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const mouseX = useSpring(rawX, { stiffness: 20, damping: 30 });
  const mouseY = useSpring(rawY, { stiffness: 20, damping: 30 });

  useEffect(() => {
    if (!shouldAnimate) return;

    const onMove = (e: MouseEvent) => {
      rawX.set((e.clientX / window.innerWidth - 0.5) * 1);
      rawY.set((e.clientY / window.innerHeight - 0.5) * 1);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [shouldAnimate, rawX, rawY]);

  /* ---------------- parallax transforms ---------------- */
  const x1 = useTransform(mouseX, [-0.5, 0.5], [-40, 40]);
  const y1 = useTransform(mouseY, [-0.5, 0.5], [-30, 30]);
  const x2 = useTransform(mouseX, [-0.5, 0.5], [30, -30]);
  const y2 = useTransform(mouseY, [-0.5, 0.5], [40, -40]);
  const x3 = useTransform(mouseX, [-0.5, 0.5], [-20, 20]);
  const y3 = useTransform(mouseY, [-0.5, 0.5], [-20, 20]);

  return (
    <div className="animated-background-container">
      {/* ==================================================
         BASE CANVAS (solid, theme-driven, full coverage)
      ================================================== */}
      <div className="animated-background-base" />

      {/* ==================================================
         GRADIENT BLOBS (animated, theme-aware, full coverage)
         On mobile: simplified, no animations
      ================================================== */}
      {/* Blob 1 - Accent 1 (green) - Top Left */}
      <motion.div
        className="animated-background-blob animated-background-blob-1"
        style={shouldAnimate ? { x: x1, y: y1 } : undefined}
        animate={
          shouldAnimate
            ? {
                scale: [1, 1.3, 1],
                rotate: [0, 90, 0],
                x: [0, 20, 0],
                y: [0, 15, 0],
              }
            : undefined
        }
        transition={
          shouldAnimate
            ? {
                duration: 20,
                repeat: Infinity,
                ease: 'easeInOut',
              }
            : undefined
        }
      >
        <div className="animated-background-blob-gradient animated-background-blob-1-gradient" />
      </motion.div>

      {/* Blob 2 - Accent 2 (cyan) - Bottom Right */}
      <motion.div
        className="animated-background-blob animated-background-blob-2"
        style={shouldAnimate ? { x: x2, y: y2 } : undefined}
        animate={
          shouldAnimate
            ? {
                scale: [1.1, 1, 1.1],
                rotate: [90, 0, 90],
                x: [0, -15, 0],
                y: [0, -20, 0],
              }
            : undefined
        }
        transition={
          shouldAnimate
            ? {
                duration: 25,
                repeat: Infinity,
                ease: 'easeInOut',
              }
            : undefined
        }
      >
        <div className="animated-background-blob-gradient animated-background-blob-2-gradient" />
      </motion.div>

      {/* Blob 3, 4, 5 - Hidden on mobile for better performance */}
      {!isMobile && (
        <>
          {/* Blob 3 - Mixed gradient - Center */}
          <motion.div
            className="animated-background-blob animated-background-blob-3"
            style={shouldAnimate ? { x: x3, y: y3 } : undefined}
            animate={
              shouldAnimate
                ? {
                    scale: [1, 1.2, 1],
                    x: [0, 10, 0],
                    y: [0, -10, 0],
                  }
                : undefined
            }
            transition={
              shouldAnimate
                ? {
                    duration: 18,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }
                : undefined
            }
          >
            <div className="animated-background-blob-gradient animated-background-blob-3-gradient" />
          </motion.div>

          {/* Blob 4 - Accent 1 - Top Right */}
          <motion.div
            className="animated-background-blob animated-background-blob-4"
            style={shouldAnimate ? { x: x2, y: y1 } : undefined}
            animate={
              shouldAnimate
                ? {
                    scale: [1, 1.15, 1],
                    rotate: [0, -45, 0],
                  }
                : undefined
            }
            transition={
              shouldAnimate
                ? {
                    duration: 22,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }
                : undefined
            }
          >
            <div className="animated-background-blob-gradient animated-background-blob-4-gradient" />
          </motion.div>

          {/* Blob 5 - Accent 2 - Bottom Left */}
          <motion.div
            className="animated-background-blob animated-background-blob-5"
            style={shouldAnimate ? { x: x1, y: y2 } : undefined}
            animate={
              shouldAnimate
                ? {
                    scale: [1.05, 1, 1.05],
                    rotate: [45, 0, 45],
                  }
                : undefined
            }
            transition={
              shouldAnimate
                ? {
                    duration: 24,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }
                : undefined
            }
          >
            <div className="animated-background-blob-gradient animated-background-blob-5-gradient" />
          </motion.div>
        </>
      )}

      {/* ==================================================
         TEXTURE LAYER (simplified on mobile)
      ================================================== */}
      <motion.div
        className="animated-background-texture"
        style={shouldAnimate ? { x: x1, y: y1 } : undefined}
        animate={
          shouldAnimate
            ? {
                scale: [1, 1.03, 1],
                rotate: [0, 0.5, 0],
              }
            : undefined
        }
        transition={
          shouldAnimate
            ? {
                duration: 60,
                repeat: Infinity,
                ease: 'easeInOut',
              }
            : undefined
        }
      >
        <div className="animated-background-texture-inner" />
      </motion.div>

      {/* ==================================================
         PARTICLES / GRID (hidden on mobile)
      ================================================== */}
      {!isMobile && (
        <motion.div
          className="animated-background-particles"
          style={shouldAnimate ? { x: x2, y: y2 } : undefined}
          animate={
            shouldAnimate
              ? {
                  opacity: [0.4, 0.6, 0.4],
                }
              : undefined
          }
          transition={
            shouldAnimate
              ? {
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }
              : undefined
          }
        >
          <div className="animated-background-particles-inner" />
        </motion.div>
      )}

      {/* ==================================================
         DEPTH MASK (lighter, keeps edges calm, theme-aware, full coverage)
      ================================================== */}
      <div className="animated-background-depth-mask" />

      {/* ==================================================
         VIGNETTE (lighter, subtle, theme-aware, full coverage)
      ================================================== */}
      <div className="animated-background-vignette" />
    </div>
  );
}
