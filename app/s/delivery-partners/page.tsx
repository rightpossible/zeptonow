import React from 'react';
import DeliveryHeader from './components/DeliveryHeader';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import StatsGrid from './components/StatsGrid';
import HowToJoinSection from './components/HowToJoinSection';
import TestimonialsSection from './components/TestimonialsSection';
import ReferEarnSection from './components/ReferEarnSection';
import FAQSection from './components/FAQSection';
import DeliveryFooter from './components/DeliveryFooter';

export default function DeliveryPartnersPage() {
  return (
    <>
      <DeliveryHeader />
      <div className="flex flex-col flex-1 w-full">
        <HeroSection />
        <BenefitsSection />
        <StatsGrid />
        <HowToJoinSection />
        <TestimonialsSection />
        <ReferEarnSection />
        <FAQSection />
        <DeliveryFooter /> 
      </div>
    </>
  );
}