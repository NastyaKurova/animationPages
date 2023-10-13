import React from 'react';
import { MainPage } from '@/components/MainPage/MainPage';
import { MainSection } from '@/components/MainSection/MainSection';
import { Metadata } from 'next';
import AboutSection from '@/components/AboutSection/AboutSection';
import SubscriptionsSection from '@/components/SubscriptionsSection/SubscriptionsSection';

export const metadata: Metadata = {
  title: 'Animation page',
  description: 'Created to practice native animations',
};

export default function Home() {
  return (
    <MainPage>
      <MainSection />
      <AboutSection />
      <SubscriptionsSection />
    </MainPage>
  );
}
