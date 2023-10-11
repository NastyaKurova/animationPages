'use client';
import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { ReactChildrenType } from '@/types/commonTypes';

const SmoothScroll = ({ children }: ReactChildrenType) => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return <div>{children}</div>;
};

export default SmoothScroll;
