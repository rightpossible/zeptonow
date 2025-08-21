"use client";

import React, { useState } from 'react';

const BrandSlider = () => {
  const [activeSlide, setActiveSlide] = useState(2); // Third slide is active (teakwoodLeathers)

  const brands = [
    {
      logo: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/rajFragrance.webp",
      alt: "logo-rajFragrance",
      testimonial: "Zepto has helped us grow by more than 10 times in just three months. Customers love the quick delivery, and we're reaching new audiences!",
      metric: "10x",
      metricLabel: "Growth in 3 months"
    },
    {
      logo: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/fixMyCurls.webp",
      alt: "logo-fixMyCurls", 
      testimonial: "Zepto has opened doors to a new demographic of high-value customers who want quality delivered fast. We've seen a 3X jump in sales from premium customers, thanks to Zepto's reach and efficiency",
      metric: "3x",
      metricLabel: "Jump in Sales"
    },
    {
      logo: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/teakwoodLeathers.webp",
      alt: "logo-teakwoodLeathers",
      testimonial: "Zepto's speed and reach have connected us with high-income customers who value quality and convenience. Since joining, we've seen ~ 30% spike in orders from premium buyers",
      metric: "~30%",
      metricLabel: "Spike in Orders"
    },
    {
      logo: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/my-fitness.webp",
      alt: "logo-my-fitness",
      testimonial: "Zepto's seamless and efficient process for launching new product lines propelled our sales by 4x in just a few months. Their reliable service has been a crucial factor in driving our brand's success.!",
      metric: "4x", 
      metricLabel: "New product sales"
    },
    {
      logo: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/new-republic.webp",
      alt: "logo-new-republic",
      testimonial: "Joining Zepto gave our products a major boost. Our sales are up, and our customer base has expanded significantly",
      metric: "4x",
      metricLabel: "New product sales"
    }
  ];

  return (
    <div className="select-none !w-[100vw]">
      <div className="flex overflow-hidden w-full">
        <div className="flex gap-8 transition-transform duration-1000 ease-in-out" style={{transform: `translateX(-${activeSlide * 40}vw)`}}>
          {brands.map((brand, index) => (
            <div 
              key={index}
              className={`relative w-[40vw] h-[37vh] 3xl:h-[43vh] transition-all duration-1000 ease-in-out cursor-pointer`}
              onMouseEnter={() => setActiveSlide(index)}
            >
              <div className="p-8 h-full w-full flex flex-col gap-[4vh] justify-center items-center transition-all duration-1000 ease-in-out overflow-hidden">
                {/* Logo */}
                <div className={`relative transition-all duration-1000 ease-in-out ${
                  activeSlide === index ? 'top-0' : 'top-[35%] scale-150'
                }`}>
                  <img 
                    alt={brand.alt} 
                    src={brand.logo} 
                    className="w-24 3xl:w-40"
                  />
                </div>

                {/* Testimonial Content */}
                <div className={`transition-all ease-in-out duration-[1800ms] w-full ${
                  activeSlide === index 
                    ? 'z-10 opacity-100' 
                    : 'translate-x-[35vh] translate-y-[20vw] -z-20 opacity-0'
                }`}>
                  <div className={`transition-opacity flex justify-center items-center flex-col gap-5 duration-700 ${
                    activeSlide === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <p className="text-center text-gray-500 text-sm lg:text-base">
                      {brand.testimonial}
                    </p>
                    <div className="flex gap-8 text-center">
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-br from-gray-900 to-[#8C1D75] bg-clip-text text-transparent">
                          {brand.metric}
                        </h3>
                        <p className="text-gray-500 text-sm">
                          {brand.metricLabel}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Background Card */}
                <div 
                  className={`absolute transition-all duration-[1200ms] ease-in-out -z-10 rounded-[3rem] ${
                    activeSlide === index 
                      ? 'h-full w-full bottom-0 right-0 border border-[#FEF4FF]' 
                      : 'h-0 w-0 bottom-[initial] right-[initial]'
                  }`}
                  style={{
                    boxShadow: 'rgba(156, 32, 203, 0.06) 0px 7.11px 10.67px 0px, rgba(195, 125, 208, 0.1) 17.78px 1.78px 125.87px 0px'
                  }}
                />
              </div>
            </div>
          ))}
          
          {/* Duplicated slides for infinite effect */}
          {brands.map((brand, index) => (
            <div 
              key={`duplicate-${index}`}
              className="relative w-[40vw] h-[37vh] 3xl:h-[43vh] transition-all duration-1000 ease-in-out"
            >
              <div className="p-8 h-full w-full flex flex-col gap-[4vh] justify-center items-center transition-all duration-1000 ease-in-out overflow-hidden">
                <div className="top-[35%] scale-150 relative transition-all duration-1000 ease-in-out">
                  <img 
                    alt={brand.alt} 
                    src={brand.logo} 
                    className="w-24 3xl:w-40"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
