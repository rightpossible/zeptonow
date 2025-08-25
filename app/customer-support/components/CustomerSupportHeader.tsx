import React from 'react';

const CustomerSupportHeader = () => {
  return (
    <div className="bg-gradient-to-b from-purple-900 to-purple-800 h-24 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center" aria-label="home">
              <span className="text-4xl font-bold text-white tracking-tight">
                Supr
              </span>
            </a>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/" className="text-white hover:text-purple-400 px-3 py-2 text-2xl font-medium transition-colors">
                Home
              </a>
                              <a href="/blog" className="text-white hover:text-purple-400 px-3 py-2 text-2xl font-medium transition-colors">
                Mojo<br />(our blog)
              </a>
              <a href="/del-areas" className="text-white hover:text-purple-400 px-3 py-2 text-2xl font-medium transition-colors">
                Delivery Areas
              </a>
              <a href="https://zepto.talentrecruit.com/career-page" className="text-white hover:text-purple-400 px-3 py-2 text-2xl font-medium transition-colors">
                Careers
              </a>
              <div className="flex items-center">
                <div className="bg-yellow-400 text-gray-800 text-lg font-semibold px-4 py-2 rounded-full">
                  We're hiring!
                </div>
              </div>
              <a href="/press" className="text-white hover:text-purple-400 px-3 py-2 text-2xl font-medium transition-colors">
                Press
              </a>
              <a href="/customer-support" className="text-purple-300 px-3 py-2 text-2xl font-medium border-b-2 border-purple-300" aria-current="page">
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

        {/* Mobile menu */}
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="text-white hover:text-purple-400 block px-3 py-2 text-xl font-medium">
              Home
            </a>
            <a href="/blog" className="text-white hover:text-purple-400 block px-3 py-2 text-xl font-medium">
              Mojo (our blog)
            </a>
            <a href="/del-areas" className="text-white hover:text-purple-400 block px-3 py-2 text-xl font-medium">
              Delivery Areas
            </a>
            <a href="https://zepto.talentrecruit.com/career-page" className="text-white hover:text-purple-400 block px-3 py-2 text-xl font-medium">
              Careers
            </a>
            <a href="/press" className="text-white hover:text-purple-400 block px-3 py-2 text-xl font-medium">
              Press
            </a>
            <a href="/customer-support" className="text-purple-300 block px-3 py-2 text-xl font-medium" aria-current="page">
              Customer Support
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default CustomerSupportHeader;
