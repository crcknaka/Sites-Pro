'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Shimmer placeholder for loading state
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g">
      <stop stop-color="rgba(255,255,255,0.1)" offset="20%" />
      <stop stop-color="rgba(255,255,255,0.2)" offset="50%" />
      <stop stop-color="rgba(255,255,255,0.1)" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="rgba(255,255,255,0.05)" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite" />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

const blurDataURL = `data:image/svg+xml;base64,${toBase64(shimmer(800, 1200))}`;

interface LightboxProps {
  images: string[];
  projectTitle: string;
}

export function PortfolioLightbox({ images, projectTitle }: LightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Minimum swipe distance
  const minSwipeDistance = 50;

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Keyboard navigation for gallery (when not in lightbox)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isOpen) {
        if (e.key === 'Escape') {
          setIsOpen(false);
        } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        } else if (e.key === 'ArrowRight' && currentIndex < images.length - 1) {
          setCurrentIndex(currentIndex + 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length]);

  const openLightbox = () => {
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const nextImage = useCallback(() => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentIndex, images.length]);

  const prevImage = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }, [currentIndex]);

  // Touch handlers for swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  if (images.length === 0) return null;

  return (
    <>
      {/* Gallery Container */}
      <div className="lg:sticky lg:top-24 xl:top-32">
        <div className="relative">
          {/* Main Image with Swipe */}
          <div
            ref={galleryRef}
            className="relative overflow-hidden rounded-xl lg:rounded-2xl border border-[var(--border)] bg-[var(--surface)]"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Main Image - Clickable to open lightbox */}
            <button
              onClick={openLightbox}
              className="
                w-full block
                cursor-pointer
                focus:outline-none focus:ring-2 focus:ring-[var(--accent-1)] focus:ring-offset-2
              "
              aria-label={`View ${projectTitle} image ${currentIndex + 1} in fullscreen`}
            >
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]">
                <Image
                  src={images[currentIndex]}
                  alt={`${projectTitle} preview ${currentIndex + 1}`}
                  fill
                  className="object-cover object-top transition-transform duration-300"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  priority={currentIndex === 0}
                />
              </div>
            </button>

            {/* Navigation Arrows - Desktop */}
            {images.length > 1 && (
              <>
                {currentIndex > 0 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="
                      absolute left-2 top-1/2 -translate-y-1/2
                      hidden sm:flex items-center justify-center
                      w-10 h-10
                      rounded-full
                      bg-black/40 hover:bg-black/60
                      backdrop-blur-sm
                      text-white
                      transition-all
                      hover:scale-110
                      active:scale-95
                    "
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                )}

                {currentIndex < images.length - 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="
                      absolute right-2 top-1/2 -translate-y-1/2
                      hidden sm:flex items-center justify-center
                      w-10 h-10
                      rounded-full
                      bg-black/40 hover:bg-black/60
                      backdrop-blur-sm
                      text-white
                      transition-all
                      hover:scale-110
                      active:scale-95
                    "
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                )}
              </>
            )}

            {/* Image Counter Badge */}
            {images.length > 1 && (
              <div
                className="
                  absolute bottom-3 right-3
                  px-3 py-1
                  rounded-full
                  bg-black/50 backdrop-blur-sm
                  text-white text-xs font-medium
                "
              >
                {currentIndex + 1} / {images.length}
              </div>
            )}

            {/* Swipe Hint - Mobile only, shows briefly */}
            {images.length > 1 && (
              <div className="absolute bottom-3 left-3 sm:hidden">
                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white/70 text-xs">
                  <ChevronLeft className="h-3 w-3" />
                  <span>swipe</span>
                  <ChevronRight className="h-3 w-3" />
                </div>
              </div>
            )}
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="mt-2 sm:mt-3 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`
                    relative flex-shrink-0
                    w-14 h-14 sm:w-16 sm:h-16
                    rounded-lg overflow-hidden
                    border-2 transition-all duration-200
                    ${idx === currentIndex
                      ? 'border-[var(--accent-1)] ring-2 ring-[var(--accent-1)]/30'
                      : 'border-[var(--border)] hover:border-[var(--accent-1)]/50 opacity-60 hover:opacity-100'
                    }
                  `}
                  aria-label={`View image ${idx + 1}`}
                >
                  <Image
                    src={img}
                    alt={`${projectTitle} thumbnail ${idx + 1}`}
                    fill
                    className="object-cover object-top"
                    sizes="64px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/95 backdrop-blur-sm
            p-4 sm:p-8
          "
          onClick={closeLightbox}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="
              absolute top-4 right-4 sm:top-8 sm:right-8
              z-10
              flex items-center justify-center
              w-10 h-10 sm:w-12 sm:h-12
              rounded-full
              bg-white/10 hover:bg-white/20
              backdrop-blur-sm
              border border-white/20
              text-white
              transition-all
              hover:scale-110
              active:scale-95
            "
            aria-label="Close lightbox"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Navigation Buttons */}
          {currentIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="
                absolute left-4 sm:left-8
                z-10
                flex items-center justify-center
                w-10 h-10 sm:w-12 sm:h-12
                rounded-full
                bg-white/10 hover:bg-white/20
                backdrop-blur-sm
                border border-white/20
                text-white
                transition-all
                hover:scale-110
                active:scale-95
              "
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          )}

          {currentIndex < images.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="
                absolute right-4 sm:right-8
                z-10
                flex items-center justify-center
                w-10 h-10 sm:w-12 sm:h-12
                rounded-full
                bg-white/10 hover:bg-white/20
                backdrop-blur-sm
                border border-white/20
                text-white
                transition-all
                hover:scale-110
                active:scale-95
              "
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          )}

          {/* Image Counter */}
          <div
            className="
              absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2
              px-4 py-2
              rounded-full
              bg-white/10 backdrop-blur-sm
              border border-white/20
              text-white text-sm
            "
          >
            {currentIndex + 1} / {images.length}
          </div>

          {/* Thumbnail Strip in Lightbox */}
          {images.length > 1 && (
            <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto pb-1">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(idx);
                  }}
                  className={`
                    relative flex-shrink-0
                    w-12 h-12 sm:w-14 sm:h-14
                    rounded-lg overflow-hidden
                    border-2 transition-all duration-200
                    ${idx === currentIndex
                      ? 'border-white ring-2 ring-white/30'
                      : 'border-white/30 hover:border-white/60 opacity-50 hover:opacity-100'
                    }
                  `}
                  aria-label={`View image ${idx + 1}`}
                >
                  <Image
                    src={img}
                    alt={`${projectTitle} thumbnail ${idx + 1}`}
                    fill
                    className="object-cover object-top"
                    sizes="56px"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Image Container */}
          <div
            className="
              relative w-full h-full
              flex items-center justify-center
              max-w-7xl max-h-[70vh] sm:max-h-[75vh]
            "
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[currentIndex]}
              alt={`${projectTitle} image ${currentIndex + 1}`}
              width={1920}
              height={1080}
              className="
                w-auto h-auto
                max-w-full max-h-[70vh] sm:max-h-[75vh]
                object-contain
                rounded-lg
              "
              priority
              placeholder="blur"
              blurDataURL={blurDataURL}
            />
          </div>
        </div>
      )}
    </>
  );
}
