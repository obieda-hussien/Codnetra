// src/hooks/useScrollTo.ts
// This hook provides a function for smooth scrolling to any element by its ID.
import { useCallback } from 'react';

export const useScrollTo = () => {
  const scrollTo = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Make the beginning of the section align with the top of the screen
      });
    }
  }, []);

  return scrollTo;
};