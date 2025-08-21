"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LocationModal from './LocationModal';

const Header = () => {
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  return (
    <>
      <LocationModal 
        isOpen={isLocationModalOpen} 
        onClose={() => setIsLocationModalOpen(false)} 
      />
    <header className="relative pt-4 pb-2">
      {/* Top gradient that blends into the page (exact match) */}
      <div className="pointer-events-none absolute inset-x-0 -top-6 h-28 bg-gradient-to-b from-[rgba(161,99,255,0.5)] via-[rgba(161,99,255,0.08)] to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-black text-purple-600 hover:text-purple-700 transition-colors duration-200">
              Supr
            </Link>
          </div>

          {/* Location Selector */}
          <button 
            onClick={() => setIsLocationModalOpen(true)}
            className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            <span className="text-sm font-bold text-gray-800">Gangyep, Sikkim</span>
            <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Search Bar */}
          <div className="flex-1 max-w-[860px] mx-2 md:mx-4">
            <div className="relative flex items-center gap-x-2 md:gap-x-4 overflow-hidden border border-gray-200 rounded-lg bg-white px-3 md:px-4 py-2.5 md:py-3 shadow-sm">
              <svg className="h-4 w-4 md:h-5 md:w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
              <input
                className="flex-1 bg-transparent outline-none placeholder-gray-400 text-xs md:text-sm"
                placeholder="Search for"
                type="text"
              />
            </div>
          </div>

          {/* Profile and Cart Icons */}
          <div className="flex items-center gap-2 md:gap-6">
            {/* Mobile Profile Icon */}
            <Link href="/account" className="md:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors duration-200">
              <Image 
                src="/profile-circle-svgrepo-com (1).svg" 
                alt="Profile" 
                width={24} 
                height={24}
                className="w-6 h-6"
              />
            </Link>

            {/* Desktop Profile */}
            <Link href="/account" className="hidden md:flex flex-col items-center text-gray-700 hover:text-purple-600 transition-colors duration-200">
              <Image 
                src="/profile-circle-svgrepo-com (1).svg" 
                alt="Profile" 
                width={28} 
                height={28}
                className="w-7 h-7 mb-1"
              />
              <span className="text-xs">Profile</span>
            </Link>

            {/* Mobile Cart Icon */}
            <Link href={{ pathname: '', query: { cart: 'open' } }} scroll={false} className="md:hidden p-2 text-gray-700 hover:text-purple-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
              </svg>
            </Link>

            {/* Desktop Cart */}
            <Link href={{ pathname: '', query: { cart: 'open' } }} scroll={false} className="hidden md:flex flex-col items-center text-gray-700 hover:text-purple-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
              </svg>
              <span className="text-xs mt-1">Cart</span>
            </Link>

            {/* Mobile Location Button */}
            <button 
              onClick={() => setIsLocationModalOpen(true)}
              className="md:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
