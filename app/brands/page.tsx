import React from 'react';
import BrandHeader from './components/BrandHeader';
import BrandSlider from './components/BrandSlider';
import GrowthTabsSection from './components/GrowthTabsSection';
import BrandFooter from './components/BrandFooter';
import NetworkMapSection from './components/NetworkMapSection';
import CategoryShowcase from './components/CategoryShowcase';
import FAQSection from './components/FAQSection';
import HeroSection from './components/HeroSection';
import BrandStatsSection from './components/BrandStatsSection';

export default function BrandsPage() {
  return (
    <div className="flex flex-col items-center gap-20 lg:gap-32 transition-all duration-1000 ease-in-out">
      <BrandHeader />
      <HeroSection />
      <BrandStatsSection />
      <BrandSlider />
      <GrowthTabsSection />
      <NetworkMapSection />
      <CategoryShowcase />
      <FAQSection />
      <BrandFooter />
    </div>
  );
}
