'use client';

import React, { useState } from 'react';

const RideHeroSection = () => {
  const [phone, setPhone] = useState('');
  const [selectedCountry, setSelectedCountry] = useState({
    name: 'United Arab Emirates',
    code: 'AE',
    dialCode: '+971',
    flag: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags/4x3/ae.svg'
  });
  const [selectedCity, setSelectedCity] = useState('Dubai');
  const [limoId, setLimoId] = useState('');
  const [referralId, setReferralId] = useState('');
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showCountryModal, setShowCountryModal] = useState(false);
  const [showCityModal, setShowCityModal] = useState(false);

  const countries = [
    { name: 'Bahrain', code: 'BH', dialCode: '+973', flag: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags/4x3/bh.svg' },
    { name: 'Egypt', code: 'EG', dialCode: '+20', flag: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags/4x3/eg.svg' },
    { name: 'Iraq', code: 'IQ', dialCode: '+964', flag: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags/4x3/iq.svg' },
    { name: 'Jordan', code: 'JO', dialCode: '+962', flag: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags/4x3/jo.svg' },
    { name: 'Kuwait', code: 'KW', dialCode: '+965', flag: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags/4x3/kw.svg' },
    { name: 'Morocco', code: 'MA', dialCode: '+212', flag: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags/4x3/ma.svg' },
    { name: 'Saudi Arabia', code: 'SA', dialCode: '+966', flag: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags/4x3/sa.svg' },
    { name: 'United Arab Emirates', code: 'AE', dialCode: '+971', flag: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags/4x3/ae.svg' }
  ];

  const cities = ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Al Ain', 'Ras Al Khaimah'];

  const handleSignUp = () => {
    console.log('Sign up:', { phone, selectedCountry, selectedCity, limoId, referralId });
  };

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-green-400 via-blue-500 to-purple-600">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-ping"></div>
            <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="relative z-10 flex justify-between items-center p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <span className="text-2xl font-bold text-green-600">S</span>
          </div>
          <span className="text-white text-xl font-bold">Supr</span>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-white text-sm">Use Supr In:</span>
          <button className="text-white font-bold underline">العَرَبِيَّة</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          {/* Stepper */}
          <div className="mb-6">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-green-600 font-bold">1</div>
                <div className="w-16 h-1 bg-white mx-2"></div>
                <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div className="w-16 h-1 bg-white/30 mx-2"></div>
                <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center text-white font-bold">3</div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl p-6 shadow-2xl">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Sign up as a Driver.</h2>
            <p className="text-gray-600 text-sm mb-6">Register in just 10 minutes!</p>

            <div className="space-y-4">
              {/* Phone Number */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                <div className="flex">
                  <button
                    onClick={() => setShowCountryModal(true)}
                    className="flex items-center gap-2 px-3 py-2 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100"
                  >
                    <img src={selectedCountry.flag} alt="flag" className="w-5 h-4" />
                    <span className="text-sm">{selectedCountry.dialCode}</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="50 123 4567"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Location</label>
                <button
                  onClick={() => setShowCityModal(true)}
                  className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <span>{selectedCity}</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {/* Limo ID */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Vehicle ID</label>
                <input
                  type="text"
                  value={limoId}
                  onChange={(e) => setLimoId(e.target.value)}
                  placeholder="Enter Vehicle ID here"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Referral ID */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Referral ID (Optional)</label>
                <input
                  type="text"
                  value={referralId}
                  onChange={(e) => setReferralId(e.target.value)}
                  placeholder="Enter your Referral ID here"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Sign Up Button */}
              <button
                onClick={handleSignUp}
                className="w-full bg-green-600 text-white py-3 rounded-md font-bold hover:bg-green-700 transition-colors"
              >
                Sign up now
              </button>
            </div>
          </div>

          {/* Sign In Link */}
          <div className="text-center mt-4">
            <span className="text-white text-sm">Already have an account? </span>
            <button
              onClick={() => setShowSignInModal(true)}
              className="text-white font-bold underline"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>

      {/* Country Modal */}
      {showCountryModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="mb-4">
                <h3 className="font-bold text-lg text-gray-800">Current Location</h3>
                <div className="flex items-center gap-3 mt-2 p-3 bg-gray-50 rounded-md">
                  <img src={selectedCountry.flag} alt="flag" className="w-6 h-4" />
                  <div>
                    <div className="font-bold text-gray-800">{selectedCountry.name}</div>
                    <div className="text-sm text-gray-600">{selectedCountry.dialCode}</div>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="font-bold text-lg mb-3 text-gray-800">Other Countries</h3>
                <div className="space-y-2">
                  {countries.filter(c => c.code !== selectedCountry.code).map((country) => (
                    <button
                      key={country.code}
                      onClick={() => {
                        setSelectedCountry(country);
                        setShowCountryModal(false);
                      }}
                      className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-md"
                    >
                      <div className="flex items-center gap-3">
                        <img src={country.flag} alt="flag" className="w-6 h-4" />
                        <div className="text-left">
                          <div className="font-bold text-gray-800">{country.name}</div>
                          <div className="text-sm text-gray-600">{country.dialCode}</div>
                        </div>
                      </div>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
              
              <button
                onClick={() => setShowCountryModal(false)}
                className="w-full py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-gray-700"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* City Modal */}
      {showCityModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="p-6">
              <div className="mb-4">
                <h3 className="font-bold text-lg text-gray-800">Current Location</h3>
                <div className="mt-2 p-3 bg-gray-50 rounded-md">
                  <div className="font-bold text-gray-800">{selectedCity}</div>
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="font-bold text-lg mb-3 text-gray-800">Other Cities</h3>
                <div className="space-y-2">
                  {cities.filter(c => c !== selectedCity).map((city) => (
                    <button
                      key={city}
                      onClick={() => {
                        setSelectedCity(city);
                        setShowCityModal(false);
                      }}
                      className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-md"
                    >
                      <span className="font-bold text-gray-800">{city}</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
              
              <button
                onClick={() => setShowCityModal(false)}
                className="w-full py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-gray-700"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sign In Modal */}
      {showSignInModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-xl text-gray-800">Sign In to Your Driver Account</h3>
                <button
                  onClick={() => setShowSignInModal(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <div className="flex">
                    <div className="flex items-center gap-2 px-3 py-2 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                      <img src={selectedCountry.flag} alt="flag" className="w-5 h-4" />
                      <span className="text-sm text-gray-700">{selectedCountry.dialCode}</span>
                    </div>
                    <input
                      type="tel"
                      placeholder="50 123 4567"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800 placeholder-gray-400"
                    />
                  </div>
                </div>
                
                <button className="w-full bg-green-600 text-white py-3 rounded-md font-bold hover:bg-green-700 transition-colors">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RideHeroSection;
