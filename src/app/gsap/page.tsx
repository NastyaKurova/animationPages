import React from 'react';
import { MainPage } from '@/components/MainPage/MainPage';
import { MainSection } from './MainSection/MainSection';
import { Metadata } from 'next';
import AboutSection from "./AboutSection/AboutSection";


export const metadata: Metadata = {
  title: 'Animation page',
  description: 'Created to practice gsap animations',
};
export default function Page() {
  return (
    <MainPage>
      <MainSection />
      <AboutSection />
    </MainPage>
  );
}
