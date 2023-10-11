'use client';
import React, { FC } from 'react';
import AboutSection from '@/components/AboutSection/AboutSection';
import { ReactChildrenType } from '@/types/commonTypes';
import SmoothScroll from '@/components/SmoothScroll/SmoothScroll';

export const MainPage: FC<ReactChildrenType> = ({ children }) => {
  return (
    <main>
      <SmoothScroll>
        {children}
        <AboutSection />
      </SmoothScroll>
    </main>
  );
};
