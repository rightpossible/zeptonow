import React from 'react';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import IntroSection from './components/IntroSection';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';

export default function GrowthPartnerPage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ProcessSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}
