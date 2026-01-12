'use client';

import { useState, useEffect } from 'react';

/**
 * Hook to detect mobile/tablet devices
 * @param breakpoint - Width threshold in pixels (default: 768)
 * @returns boolean indicating if viewport is below breakpoint
 */
export function useIsMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Initial check
    checkMobile();

    // Listen for resize
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint]);

  return isMobile;
}
