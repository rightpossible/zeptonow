import React from 'react';
import Link from 'next/link';

const PressFooter = () => {
  return (
    <footer className="bg-gradient-to-b from-green-900 to-green-800 border-t border-green-700">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <span className="text-3xl font-bold text-white tracking-tight">
            supr
          </span>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Company Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <Link href="/" className="text-lg font-medium text-white hover:text-green-300 transition-colors">
              Home
            </Link>
            <Link href="/s/del-areas" className="text-lg font-medium text-white hover:text-green-300 transition-colors">
              About Us
            </Link>
            <Link href="/s/del-areas" className="text-lg font-medium text-white hover:text-green-300 transition-colors">
              Delivery Areas
            </Link>
            <Link href="/career" className="text-lg font-medium text-white hover:text-green-300 transition-colors">
              Careers
            </Link>
            <Link href="/customer-support" className="text-lg font-medium text-white hover:text-green-300 transition-colors">
              Customer Support
            </Link>
            <Link href="/s/press" className="text-lg font-medium text-green-300" aria-current="page">
              Press
            </Link>
            <Link href="/blog" className="text-lg font-medium text-white hover:text-green-300 transition-colors">
              Mojo - Our Blog
            </Link>
          </div>

          {/* Social Links - Using Supr social links */}
          <div className="flex justify-center md:justify-end space-x-6">
            <Link href="https://www.instagram.com/supr/" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-white hover:text-green-300 transition-colors">
              Instagram
            </Link>
            <Link href="https://www.facebook.com/Supr/" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-white hover:text-green-300 transition-colors">
              Facebook
            </Link>
            <Link href="https://twitter.com/supr" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-white hover:text-green-300 transition-colors">
              Twitter
            </Link>
            <Link href="https://www.linkedin.com/company/supr/about/" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-white hover:text-green-300 transition-colors">
              LinkedIn
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-green-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-lg text-white">
              © <strong>Supr Marketplace Private Limited</strong>
            </div>
            <div className="flex flex-wrap justify-center space-x-6">
                <Link href="/privacy-policy" className="text-lg text-green-300 hover:text-green-200 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-lg text-green-300 hover:text-green-200 transition-colors">
                Terms of Use
              </Link>
              <Link href="/responsible-disclosure-policy" className="text-lg text-green-300 hover:text-green-200 transition-colors">
                Responsible Disclosure Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PressFooter;
