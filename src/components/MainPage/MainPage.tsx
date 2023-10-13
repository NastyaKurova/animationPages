'use client';
import React, { FC } from 'react';
import { ReactChildrenType } from '@/types/commonTypes';
import SmoothScroll from '@/components/SmoothScroll/SmoothScroll';

export const MainPage: FC<ReactChildrenType> = ({ children }) => {
  return (
    <main>
      <SmoothScroll>{children}</SmoothScroll>
    </main>
  );
};
