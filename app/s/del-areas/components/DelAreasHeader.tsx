import React from 'react';

const DelAreasHeader = () => {
  return (
    <div className="bg-gradient-to-b from-purple-900 to-purple-800">
      {/* Navigation Header */}
      <header className="bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <span className="text-3xl font-bold text-white tracking-tight">
                  supr
                </span>
              </a>
            </div>

            {/* Navigation Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="/" className="text-white hover:text-purple-300 px-3 py-2 text-lg font-medium transition-colors">
                  Home
                </a>
                <a href="/blog" className="text-white hover:text-purple-300 px-3 py-2 text-lg font-medium transition-colors">
                  Mojo<br />(our blog)
                </a>
                <a href="/s/del-areas" className="text-purple-300 px-3 py-2 text-lg font-medium border-b-2 border-purple-300" aria-current="page">
                  Delivery Areas
                </a>
                <a href="/career" className="text-white hover:text-purple-300 px-3 py-2 text-lg font-medium transition-colors">
                  Careers
                </a>
                <div className="flex items-center">
                  <div className="bg-yellow-400 text-gray-800 text-sm font-semibold px-3 py-2 rounded-full">
                    We're hiring!
                  </div>
                </div>
                <a href="/press" className="text-white hover:text-purple-300 px-3 py-2 text-lg font-medium transition-colors">
                  Press
                </a>
                <a href="/customer-support" className="text-white hover:text-purple-300 px-3 py-2 text-lg font-medium transition-colors">
                  Customer Support
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="bg-purple-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Page Title */}
      <div className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Advertise on Supr
        </h1>
      </div>
    </div>
  );
};

export default DelAreasHeader;
