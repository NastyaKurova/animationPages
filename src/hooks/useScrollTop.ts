'use client';
import { useEffect } from 'react';

export function useScrollTop() {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      document.body.style.cssText += `--scrollTop: ${window?.scrollY ?? 0}px`;
    });
  }, []);
}
