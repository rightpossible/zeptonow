import React from 'react';
import Link from 'next/link';

const CustomerSupportFooter = () => {
  return (
    <footer className="bg-gradient-to-b from-purple-800 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <span className="text-3xl font-bold text-white tracking-tight">
            Supr
          </span>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Company Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <Link href="/" className="text-lg font-medium text-white hover:text-purple-300 transition-colors">
              Home
            </Link>
            <Link href="/del-areas" className="text-lg font-medium text-white hover:text-purple-300 transition-colors">
              About Us
            </Link>
            <Link href="/del-areas" className="text-lg font-medium text-white hover:text-purple-300 transition-colors">
              Delivery Areas
            </Link>
            <Link href="https://zepto.talentrecruit.com/career-page" className="text-lg font-medium text-white hover:text-purple-300 transition-colors">
              Careers
            </Link>
            <Link href="/customer-support" className="text-lg font-medium text-purple-300" aria-current="page">
              Customer Support
            </Link>
            <Link href="/press" className="text-lg font-medium text-white hover:text-purple-300 transition-colors">
              Press
            </Link>
            <Link href="/blog" className="text-lg font-medium text-white hover:text-purple-300 transition-colors">
              Mojo - Our Blog
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end space-x-6">
            <Link href="https://www.instagram.com/zeptonow/" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-white hover:text-purple-300 transition-colors">
              Instagram
            </Link>
            <Link href="https://www.facebook.com/Zeptonow/" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-white hover:text-purple-300 transition-colors">
              Facebook
            </Link>
            <Link href="https://twitter.com/zeptonow" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-white hover:text-purple-300 transition-colors">
              Twitter
            </Link>
            <Link href="https://www.linkedin.com/company/zeptonow/about/" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-white hover:text-purple-300 transition-colors">
              LinkedIn
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-purple-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-lg text-white">
              © <strong>Supr Marketplace Private Limited</strong>
            </div>
            <div className="flex flex-wrap justify-center space-x-6">
              <Link href="/privacy-policy" className="text-lg text-purple-300 hover:text-purple-200 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-lg text-purple-300 hover:text-purple-200 transition-colors">
                Terms of Use
              </Link>
              <Link href="/responsible-disclosure-policy" className="text-lg text-purple-300 hover:text-purple-200 transition-colors">
                Responsible Disclosure Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CustomerSupportFooter;