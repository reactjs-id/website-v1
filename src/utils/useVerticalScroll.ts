import { useState, useEffect } from 'react';

export default function useVerticalScroll(topThreshold: number, bottomThreshold?: number): boolean {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (bottomThreshold) {
      if (window.scrollY >= topThreshold && window.scrollY <= bottomThreshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    } else if (window.scrollY >= topThreshold) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    // Initial check, in case the user refreshed.
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [topThreshold]);

  return scrolled;
}
