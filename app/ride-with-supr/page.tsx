'use client';

import React from 'react';
import RideHeroSection from './components/RideHeroSection';
import WhyWorkSection from './components/WhyWorkSection';
import AppDownloadSection from './components/AppDownloadSection';
import MeetDriversSection from './components/MeetDriversSection';

export default function RideWithSuprPage() {
  return (
    <div className="ride-with-supr-container">
      <RideHeroSection />
      <WhyWorkSection />
      <MeetDriversSection />
      <AppDownloadSection />
    </div>
  );
}
