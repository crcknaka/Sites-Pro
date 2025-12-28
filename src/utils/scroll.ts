/**
 * Smoothly scrolls to a section by ID with retry logic
 * @param id - The ID of the target section element
 */
export function scrollToSection(id: string) {
  const performScroll = () => {
    const el = document.getElementById(id);
    if (!el) return false;

    // Update URL hash
    window.history.pushState(null, '', `#${id}`);
    
    // Scroll to element
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // Backup: manual scroll with offset
    setTimeout(() => {
      const headerOffset = 100;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }, 50);

    return true;
  };

  // Try immediately
  if (performScroll()) return;
  
  // Retry with delays for elements that may not be rendered yet
  setTimeout(() => {
    if (performScroll()) return;
    // Final attempt for slower devices
    setTimeout(() => performScroll(), 200);
  }, 100);
}

