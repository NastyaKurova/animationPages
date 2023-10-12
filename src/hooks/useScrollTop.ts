'use client';
import { useEffect } from 'react';

export function useScrollTop() {
  useEffect(() => {
    const handleScroll = () =>
      (document.body.style.cssText += `--scrollTop: ${window?.scrollY ?? 0}px`);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
}
