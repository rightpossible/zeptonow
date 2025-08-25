import React from 'react';

const BlogFooter = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
          <a href="/help" className="hover:text-gray-900 transition-colors">Help</a>
          <a href="/status" className="hover:text-gray-900 transition-colors">Status</a>
          <a href="/about" className="hover:text-gray-900 transition-colors">About</a>
          <a href="/careers" className="hover:text-gray-900 transition-colors">Careers</a>
          <a href="/press" className="hover:text-gray-900 transition-colors">Press</a>
          <a href="/blog" className="hover:text-gray-900 transition-colors">Blog</a>
          <a href="/privacy" className="hover:text-gray-900 transition-colors">Privacy</a>
          <a href="/rules" className="hover:text-gray-900 transition-colors">Rules</a>
          <a href="/terms" className="hover:text-gray-900 transition-colors">Terms</a>
          <a href="/text-to-speech" className="hover:text-gray-900 transition-colors">Text to speech</a>
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;
