"use client";

import React from 'react';

const CategoryShowcase = () => {
  const categories = [
    // Row 1
    {name: "Apparel & Lifestyle", icon: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/apparel-and-lifestyle.webp"},
    {name: "Atta, Rice, Oil & Dals", icon: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/atta-rice-oil-and-dals.webp"},
    {name: "Baby Care", icon: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/baby-care.webp"},
    {name: "Bath & Body", icon: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/bath-body.webp"},
    {name: "Biscuits & Cookies", icon: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/biscuits-cookies.webp"},
    {name: "Breakfast & Sauces", icon: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/breakfast-sauces.webp"},
    {name: "Cleaning Essentials", icon: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/cleaning-essentials.webp"},
    {name: "Dairy, Bread & Eggs", icon: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/dairy-bread-eggs.webp"},
    {name: "Electronics & Appliances", icon: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/electronics-and-appliances.webp"},
    {name: "Feminine Hygiene", icon: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/feminine-hygiene.webp"},
    {name: "Frozen Food", icon: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/frozen-food.webp"}
  ];

  const categories2 = [
    // Row 2
    {name: "Fruits & Vegetables", icon: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/fruits-and-vegetables.webp"},
    {name: "Grooming Essentials", icon: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/grooming-essentials.webp"},
    {name: "Hair Care", icon: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/hair-care.webp"},
    {name: "Pharma & Wellness", icon: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/pharma-and-wellness.webp"},
    {name: "Home Needs", icon: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/home-needs.webp"},
    {name: "Ice Creams & More", icon: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/ice-creams-and-more.webp"},
    {name: "Jewellery", icon: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/jewellery.webp"},
    {name: "Kitchenware & Appliances", icon: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/kitchenware-and-appliances.webp"},
    {name: "Makeup & Beauty", icon: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/makeup-and-beauty.webp"},
    {name: "Masala, Dry Fruits & More", icon: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/masala-dryfruits-and-more.webp"},
    {name: "Meats, Fish & Eggs", icon: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/meats-fish-and-eggs.webp"}
  ];

  const categories3 = [
    // Row 3
    {name: "Munchies", icon: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/munchies.webp"},
    {name: "Paan Corner", icon: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/paan-corner.webp"},
    {name: "Packaged Food", icon: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/packaged-food.webp"},
    {name: "Pet Care", icon: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/pet-care.webp"},
    {name: "Sexual Wellness", icon: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/sexual-wellness.webp"},
    {name: "Skincare", icon: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/skincare.webp"},
    {name: "Stationery & Crafts", icon: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/stationery-and-crafts.webp"},
    {name: "Sweet Cravings", icon: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/sweet-cravings.webp"},
    {name: "Tea, Coffee & More", icon: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/tea-coffee-and-more.webp"},
    {name: "Toys & Sports", icon: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/toys-and-sports.webp"},
    {name: "Supr Cafe", icon: "https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/zepto-cafe.webp"}
  ];

  const CategoryItem = ({ category }: { category: { name: string; icon: string } }) => (
    <div className="flex gap-2 w-[280px] max-w-[280px] justify-center items-center transition-transform cursor-default hover:scale-105">
      <img 
        alt={category.name} 
        src={category.icon} 
        className="w-20 h-20"
      />
      <p className="font-bold text-[16px] md:text-[24px] text-gray-400 leading-6">
        {category.name}
      </p>
    </div>
  );

  return (
    <div className="flex flex-col justify-center items-center w-[100vw] md:w-[80vw]">
      <div className="flex flex-col justify-center items-center gap-7 w-[90vw] lg:w-[80vw]">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-700 text-center">
          Make{' '}
          <span className="bg-gradient-to-br from-gray-900 to-[#8C1D75] bg-clip-text text-transparent">
            Your Brand Unmissable
          </span>
        </h1>
        <h6 className="text-lg text-gray-600 text-center lg:w-[55%]">
          Zepto&apos;s custom ads increase your visibility, helping your brand stand out and stay top of mind.
        </h6>
      </div>

      <div className="w-full overflow-hidden flex flex-col gap-5 md:gap-10 p-10 relative">
        {/* Row 1 - Moving Left */}
        <div className="flex gap-12 md:gap-36">
          <div 
            className="flex gap-[50px] md:gap-[150px] select-none animate-scroll-left" 
            style={{transform: 'translateX(-45.5%)'}}
          >
            {[...categories, ...categories].map((category, index) => (
              <CategoryItem key={`row1-${index}`} category={category} />
            ))}
          </div>
        </div>

        {/* Row 2 - Moving Right */}
        <div className="flex gap-12 md:gap-36">
          <div 
            className="flex gap-[50px] md:gap-[150px] select-none animate-scroll-right" 
            style={{transform: 'translateX(44.95%)'}}
          >
            {[...categories2, ...categories2].map((category, index) => (
              <CategoryItem key={`row2-${index}`} category={category} />
            ))}
          </div>
        </div>

        {/* Row 3 - Moving Left */}
        <div className="flex gap-12 md:gap-36">
          <div 
            className="flex gap-[50px] md:gap-[150px] select-none animate-scroll-left" 
            style={{transform: 'translateX(-44.9%)'}}
          >
            {[...categories3, ...categories3].map((category, index) => (
              <CategoryItem key={`row3-${index}`} category={category} />
            ))}
          </div>
        </div>

        {/* Gradient Overlays */}
        <div className="hidden md:block absolute top-0 left-0 h-full w-[120px] bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="hidden md:block absolute top-0 right-0 h-full w-[120px] bg-gradient-to-r from-transparent to-white pointer-events-none"></div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(-45.5%); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes scroll-right {
          0% { transform: translateX(44.95%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right 60s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CategoryShowcase;
