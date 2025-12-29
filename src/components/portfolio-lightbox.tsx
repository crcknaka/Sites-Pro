'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: string[];
  projectTitle: string;
}

export function PortfolioLightbox({ images, projectTitle }: LightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (e.key === 'ArrowRight' && currentIndex < images.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length]);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (images.length === 0) return null;

  return (
    <>
      {/* Images - Clickable on all devices (opens lightbox) */}
      <div className="lg:sticky lg:top-24 xl:top-32">
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 lg:gap-5">
          {images.map((img, idx) => (
            <div key={idx}>
              {/* Mobile: Clickable button with lightbox */}
              <button
                onClick={() => openLightbox(idx)}
                className="
                  lg:hidden
                  w-full
                  overflow-hidden 
                  rounded-xl sm:rounded-2xl
                  border border-[var(--border)]
                  bg-[var(--surface)]
                  transition-all duration-300
                  hover:scale-[1.02] hover:border-[var(--accent-1)]
                  active:scale-[0.98]
                  cursor-pointer
                  focus:outline-none focus:ring-2 focus:ring-[var(--accent-1)] focus:ring-offset-2
                "
                aria-label={`View ${projectTitle} image ${idx + 1} in fullscreen`}
              >
                <div className="relative w-full">
                  <Image
                    src={img}
                    alt={`${projectTitle} preview ${idx + 1}`}
                    width={800}
                    height={1200}
                    className="w-full h-auto"
                    sizes="50vw"
                  />
                </div>
              </button>

              {/* Desktop: Clickable button with lightbox */}
              <button
                onClick={() => openLightbox(idx)}
                className="
                  hidden lg:block
                  w-full
                  overflow-hidden 
                  rounded-2xl
                  border border-[var(--border)]
                  bg-[var(--surface)]
                  transition-all duration-300
                  hover:scale-[1.02] hover:border-[var(--accent-1)]
                  active:scale-[0.98]
                  cursor-pointer
                  focus:outline-none focus:ring-2 focus:ring-[var(--accent-1)] focus:ring-offset-2
                "
                aria-label={`View ${projectTitle} image ${idx + 1} in fullscreen`}
              >
                <div className="relative w-full">
                  <Image
                    src={img}
                    alt={`${projectTitle} preview ${idx + 1}`}
                    width={1200}
                    height={1600}
                    className="w-full h-auto"
                    sizes="100%"
                  />
                </div>
              </button>
            </div>
          ))}
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

          {/* Image Container */}
          <div
            className="
              relative w-full h-full
              flex items-center justify-center
              max-w-7xl max-h-[90vh]
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
                max-w-full max-h-[90vh]
                object-contain
                rounded-lg
              "
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}

