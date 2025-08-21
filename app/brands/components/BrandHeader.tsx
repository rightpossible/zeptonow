"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const BrandHeader = () => {
  const [activeNav, setActiveNav] = useState('Growth with Supr');

  const navItems = [
    'Growth with Supr',
    'Value Props', 
    'Categories',
    'FAQ'
  ];

  return (
    <div className="z-50 !top-7 !sticky w-[90vw] lg:w-[80vw]">
      <div 
        className="h-20 3xl:h-28 !bg-white rounded-3xl flex items-center justify-between py-3 px-6 3xl:px-10 transition-all duration-1000 ease-in-out"
        style={{boxShadow: 'rgba(195, 125, 208, 0.05) 10px 1px 70.8px 0px, rgba(156, 32, 203, 0.03) 0px 4px 6px 0px'}}
      >
        {/* Logo and Brand */}
        <div className="flex justify-center items-center gap-3">
          <div>
            <img 
              alt="zepto icon" 
              src="https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/zepto-icon.svg" 
              className="h-8 w-8 3xl:h-10 3xl:w-10"
            />
          </div>
          <h4 className="text-2xl font-bold bg-gradient-to-br from-gray-900 to-[#8C1D75] bg-clip-text text-transparent">
            Vendor Hub
          </h4>
        </div>

        {/* Navigation */}
        <div className="flex !font-semibold gap-7 bg-gradient-to-br from-gray-900 to-[#8C1D75] bg-clip-text text-transparent">
          {navItems.map((item) => (
            <h5 
              key={item}
              className={`cursor-pointer !font-semibold ${
                activeNav === item 
                  ? 'bg-gradient-to-br from-gray-900 to-[#8C1D75] bg-clip-text text-transparent' 
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveNav(item)}
            >
              {item}
            </h5>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link href="/brands/signin">
            <button className="h-12 3xl:h-14 4xl:h-16 text-[12px] md:text-[16px] 3xl:text-[22px] border border-primary-600 rounded-md px-4 py-2 text-primary-600 hover:bg-primary-50 transition-colors duration-200">
              Log In
            </button>
          </Link>
          <Link href="/brands/signup">
            <button 
              className="h-12 3xl:h-14 4xl:h-16 text-[12px] md:text-[16px] 3xl:text-[22px] rounded-md px-4 py-2 text-white border border-primary-600 transition-colors duration-200 flex items-center gap-2"
              style={{background: 'linear-gradient(to right, #3C006B, #8C1D75)'}}
            >
              Register Now
              <img 
                alt="register now" 
                src="https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/sell-on-zepto.svg" 
                className="!h-4 !w-4 !mx-2"
              />
            </button>
          </Link>
        </div>

        {/* Mobile Menu (Hidden) */}
        <div className="hidden">
          <img 
            alt="menu icon" 
            src="https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/menu.svg" 
            className="h-8 w-8 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default BrandHeader;
