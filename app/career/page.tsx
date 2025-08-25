import React from 'react';

export default function Career() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content Layout */}
      <div className="flex min-h-screen">
        {/* Left Content Section */}
        <div className="flex-1 p-8 lg:p-16">
          <div className="max-w-3xl">
            {/* Company Story */}
            <h1 className="text-2xl lg:text-3xl font-bold text-green-600 mb-8">
              At Supr, we don&apos;t just break barriers—we rewrite the rules.
            </h1>
            
            <div className="space-y-4 text-lg text-gray-700 mb-8">
              <p>
                <span className="text-green-600 font-semibold">Year 1:</span> They said nobody wanted 10-minute delivery. We made it a habit.
              </p>
              <p>
                <span className="text-green-600 font-semibold">Year 2:</span> They said our business model wouldn&apos;t survive. We thrived through the toughest funding winter since 2008.
              </p>
              <p>
                <span className="text-green-600 font-semibold">Year 3:</span> They said we couldn&apos;t take on giants. We grew faster, turned unicorn, and took the lead.
              </p>
              <p>
                <span className="text-green-600 font-semibold">Year 4:</span> They said India wasn&apos;t ready for a 100% domestic fundraise. We proved them wrong—while hitting $3 billion in annualised GOV.
              </p>
            </div>

            <h2 className="text-xl lg:text-2xl font-bold text-green-600 mb-4">
              At the core of it all? Our people. The ones who make the impossible possible—every single day.
            </h2>

            <h3 className="text-xl lg:text-2xl font-bold text-green-600">
              And now, it&apos;s your turn.
            </h3>
          </div>
        </div>

        {/* Right Purple Section */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center p-8">
          <div className="text-center text-white">
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              join us in building<br />
              the next <span className="bg-pink-500 px-2 py-1 rounded">big thing</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Job Search Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Search */}
          <div className="md:hidden mb-8">
            <div className="bg-white rounded-lg shadow-sm p-4 space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by Job Title, Id, Skills and etc..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <div className="absolute left-3 top-3">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <div className="flex space-x-2">
                <div className="flex-1 relative">
                  <svg className="h-5 w-5 text-green-600 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:block mb-12">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex space-x-4">
                <div className="flex-1 relative">
                  <svg className="h-6 w-6 text-green-600 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search by Job Title, Id, Skills and etc..."
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div className="flex-1 relative">
                  <svg className="h-6 w-6 text-green-600 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search by Location"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <button className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
                  Search Jobs
                </button>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="hidden lg:block">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-6">
                  <svg className="h-6 w-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z" />
                  </svg>
                  <span className="text-lg font-semibold text-gray-900">Job Filters</span>
                </div>

                {/* Job Workspace Filter */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Job Workspace</h3>
                  <div className="space-y-2">
                    <label className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                        <span className="ml-2 text-sm text-gray-700">Work From Office</span>
                      </div>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">3</span>
                    </label>
                    <label className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                        <span className="ml-2 text-sm text-gray-700">Hybrid</span>
                      </div>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">0</span>
                    </label>
                    <label className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                        <span className="ml-2 text-sm text-gray-700">Remote</span>
                      </div>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">0</span>
                    </label>
                  </div>
                </div>

                {/* Job Type Filter */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Job Type</h3>
                  <div className="space-y-2">
                    <label className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                        <span className="ml-2 text-sm text-gray-700">Permanent</span>
                      </div>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">3</span>
                    </label>
                    <label className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                        <span className="ml-2 text-sm text-gray-700">Contract</span>
                      </div>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">0</span>
                    </label>
                  </div>
                </div>

                {/* Job Nature Filter */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Job Nature</h3>
                  <div className="space-y-2">
                    <label className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                        <span className="ml-2 text-sm text-gray-700">Full Time</span>
                      </div>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">3</span>
                    </label>
                    <label className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                        <span className="ml-2 text-sm text-gray-700">Part Time</span>
                      </div>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">0</span>
                    </label>
                  </div>
                </div>

                {/* Skills Filter */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Skills</h3>
                  <input
                    type="text"
                    placeholder="Start typing to choose skills"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  />
                </div>

                <button className="w-full px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
                  Reset Filter
                </button>
              </div>
            </div>

            {/* Job Listings */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <span className="text-lg font-semibold text-gray-900">3 Openings Found</span>
              </div>

              <div className="space-y-6">
                {/* Job Card 1 */}
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Staff Software Engineer</h3>
                      <p className="text-sm text-gray-500 mb-4">ID 7326 • Posted 23 Days ago</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="h-4 w-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          Job Location <span className="font-semibold text-gray-900 ml-1">Bengaluru</span> (Work From Office)
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="h-4 w-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          Job Type <span className="font-semibold text-gray-900 ml-1">Permanent</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="h-4 w-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Job Nature <span className="font-semibold text-gray-900 ml-1">Full Time</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="h-4 w-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                          Experience <span className="font-semibold text-gray-900 ml-1">6.00 to 11.00 years</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600 md:col-span-2">
                          <svg className="h-4 w-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                          </svg>
                          Salary <span className="font-semibold text-gray-900 ml-1">INR 5500000 to 7900000 Annually</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Java</span>
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">golang</span>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-3 lg:ml-6">
                      <button className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
                        Apply
                      </button>
                      <button className="px-6 py-2 bg-white text-green-600 font-semibold border border-green-600 rounded-lg hover:bg-green-50 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>

                {/* Job Card 2 */}
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Engineering Manager</h3>
                      <p className="text-sm text-gray-500 mb-4">ID 6037 • Posted 23 Days ago</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="h-4 w-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          Job Location <span className="font-semibold text-gray-900 ml-1">Bengaluru</span> (Work From Office)
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="h-4 w-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          Job Type <span className="font-semibold text-gray-900 ml-1">Permanent</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="h-4 w-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Job Nature <span className="font-semibold text-gray-900 ml-1">Full Time</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="h-4 w-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                          Experience <span className="font-semibold text-gray-900 ml-1">6.00 to 12.00 years</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Java</span>
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">golang</span>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-3 lg:ml-6">
                      <button className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
                        Apply
                      </button>
                      <button className="px-6 py-2 bg-white text-green-600 font-semibold border border-green-600 rounded-lg hover:bg-green-50 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>

                {/* Job Card 3 */}
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Director - Inventory Reporting</h3>
                      <p className="text-sm text-gray-500 mb-4">ID 5916 • Posted 39 Days ago</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="h-4 w-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          Job Location <span className="font-semibold text-gray-900 ml-1">Bengaluru</span> (Work From Office)
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="h-4 w-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          Job Type <span className="font-semibold text-gray-900 ml-1">Permanent</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="h-4 w-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Job Nature <span className="font-semibold text-gray-900 ml-1">Full Time</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="h-4 w-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                          Experience <span className="font-semibold text-gray-900 ml-1">6.00 to 9.00 years</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Finance + Accounting</span>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-3 lg:ml-6">
                      <button className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
                        Apply
                      </button>
                      <button className="px-6 py-2 bg-white text-green-600 font-semibold border border-green-600 rounded-lg hover:bg-green-50 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pagination */}
              <div className="hidden md:flex justify-between items-center mt-8 bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-700">Items per page:</span>
                  <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                    <option>20</option>
                    <option>50</option>
                    <option>100</option>
                  </select>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-700">1 – 3 of 3</span>
                  <div className="flex space-x-1">
                    <button className="p-2 text-gray-400 cursor-not-allowed" disabled>
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                      </svg>
                    </button>
                    <button className="p-2 text-gray-400 cursor-not-allowed" disabled>
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button className="p-2 text-gray-400 cursor-not-allowed" disabled>
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <button className="p-2 text-gray-400 cursor-not-allowed" disabled>
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
