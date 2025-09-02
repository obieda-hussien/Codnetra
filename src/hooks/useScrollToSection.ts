'use client';

import { useCallback } from 'react';

export const useScrollToSection = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      const headerHeight = 80; // Navigation height
      
      window.scrollTo({
        top: offsetTop - headerHeight,
        behavior: 'smooth'
      });
      
      // Add URL hash without jumping
      if (typeof window !== 'undefined') {
        history.pushState(null, '', `#${sectionId}`);
      }
    }
  }, []);
  
  return { scrollToSection };
};