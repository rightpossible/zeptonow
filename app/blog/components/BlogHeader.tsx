import React from 'react';

const BlogHeader = () => {
  return (
    <div className="bg-white border-b border-gray-200">
      {/* Top Navigation Bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left side - Open in app link */}
            <div className="flex items-center">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 flex items-center">
                Open in app
                <svg className="ml-1 w-3 h-3" fill="currentColor" viewBox="0 0 10 10">
                  <path d="M.985 8.485a.375.375 0 1 0 .53.53zM8.75 1.25h.375A.375.375 0 0 0 8.75.875zM8.375 6.5a.375.375 0 1 0 .75 0zM3.5.875a.375.375 0 1 0 0 .75zm-1.985 8.14 7.5-7.5-.53-.53-7.5 7.5zm6.86-7.765V6.5h.75V1.25zM3.5 1.625h5.25v-.75H3.5z"></path>
                </svg>
              </a>
            </div>

            {/* Right side - Sign up and Sign in */}
            <div className="flex items-center space-x-4">
              <button className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-colors">
                Sign up
              </button>
              <button className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Medium Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <svg width="120" height="25" viewBox="0 0 719 160" className="text-gray-900">
                <path fill="currentColor" d="m174.104 9.734.215-.047V8.02H130.39L89.6 103.89 48.81 8.021H1.472v1.666l.212.047c8.018 1.81 12.09 4.509 12.09 14.242V137.93c0 9.734-4.087 12.433-12.106 14.243l-.212.047v1.671h32.118v-1.665l-.213-.048c-8.018-1.809-12.089-4.509-12.089-14.242V30.586l52.399 123.305h2.972l53.925-126.743V140.75c-.687 7.688-4.721 10.062-11.982 11.701l-.215.05v1.652h55.948v-1.652l-.215-.05c-7.269-1.639-11.4-4.013-12.087-11.701l-.037-116.774h.037c0-9.733 4.071-12.432 12.087-14.242"></path>
              </svg>
            </a>
          </div>

          {/* Search and Write */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search" 
                className="bg-gray-50 border border-gray-200 rounded-full px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M4.092 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0m6.95-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .79-.79l-3.73-3.73A8.05 8.05 0 0 0 11.042 3z" clipRule="evenodd"></path>
              </svg>
            </div>
            
            <button className="flex items-center text-gray-600 hover:text-gray-900 text-sm">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
              </svg>
              Write
            </button>

            <button className="text-gray-600 hover:text-gray-900">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M4.092 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0m6.95-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .79-.79l-3.73-3.73A8.05 8.05 0 0 0 11.042 3z" clipRule="evenodd"></path>
              </svg>
            </button>

            <div className="flex items-center space-x-3">
              <button className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-colors">
                Sign up
              </button>
              <button className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                Sign in
              </button>
            </div>

            {/* Profile placeholder */}
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
