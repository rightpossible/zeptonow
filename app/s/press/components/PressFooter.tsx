import React from 'react';

const PressFooter = () => {
  return (
    <footer className="bg-gradient-to-b from-purple-900 to-purple-800 border-t border-purple-700">
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
            <a href="/" className="text-lg font-medium text-white hover:text-purple-300 transition-colors">
              Home
            </a>
            <a href="/s/del-areas" className="text-lg font-medium text-white hover:text-purple-300 transition-colors">
              About Us
            </a>
            <a href="/s/del-areas" className="text-lg font-medium text-white hover:text-purple-300 transition-colors">
              Delivery Areas
            </a>
            <a href="/career" className="text-lg font-medium text-white hover:text-purple-300 transition-colors">
              Careers
            </a>
            <a href="/customer-support" className="text-lg font-medium text-white hover:text-purple-300 transition-colors">
              Customer Support
            </a>
            <a href="/s/press" className="text-lg font-medium text-purple-300" aria-current="page">
              Press
            </a>
            <a href="/blog" className="text-lg font-medium text-white hover:text-purple-300 transition-colors">
              Mojo - Our Blog
            </a>
          </div>

          {/* Social Links - Using Supr social links */}
          <div className="flex justify-center md:justify-end space-x-6">
            <a href="https://www.instagram.com/supr/" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-white hover:text-purple-300 transition-colors">
              Instagram
            </a>
            <a href="https://www.facebook.com/Supr/" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-white hover:text-purple-300 transition-colors">
              Facebook
            </a>
            <a href="https://twitter.com/supr" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-white hover:text-purple-300 transition-colors">
              Twitter
            </a>
            <a href="https://www.linkedin.com/company/supr/about/" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-white hover:text-purple-300 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-purple-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-lg text-white">
              © <strong>Supr Marketplace Private Limited</strong>
            </div>
            <div className="flex flex-wrap justify-center space-x-6">
              <a href="/privacy-policy" className="text-lg text-purple-300 hover:text-purple-200 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-lg text-purple-300 hover:text-purple-200 transition-colors">
                Terms of Use
              </a>
              <a href="/responsible-disclosure-policy" className="text-lg text-purple-300 hover:text-purple-200 transition-colors">
                Responsible Disclosure Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PressFooter;
