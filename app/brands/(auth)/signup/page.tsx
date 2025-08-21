'use client';

import React, { useState } from 'react';
import VendorPortalLogo from '../components/VendorPortalLogo';
import AuthHeader from '../components/AuthHeader';
import StatsSection from '../components/StatsSection';

export default function BrandsSignupPage() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [agreedToUpdates, setAgreedToUpdates] = useState(true);

  const handleSendOTP = () => {
    if (phone.length === 10) {
      setOtpSent(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Signup form submitted:', { phone, otp, email, agreedToUpdates });
  };

  return (
    <>
      {/* Left Panel - Form */}
      <div className="flex-1 px-6 w-full relative bg-[#F8EAFF] min-h-screen">
        <VendorPortalLogo />
        
        <div className="absolute w-full h-full flex items-center justify-center top-0 left-0 z-0">
          <div className="w-4/5 xl:w-4/6 max-h-[80%] xl:min-h-[45%] bg-white rounded-xl overflow-hidden">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col justify-center p-8 relative">
                <div className="flex flex-col w-full mb-4">
                  <p className="font-semibold text-gray-900 text-lg">Welcome to Supr</p>
                  <p className="font-medium text-gray-500 text-sm">Create your account to start selling</p>
                </div>
                
                <hr className="mb-4" />
                
                <div className="flex flex-col items-center !mt-4 w-full">
                  <div className="w-full">
                    {/* Phone Number Field */}
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm mb-1 ml-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative flex">
                        <div className="flex items-center px-3 border border-gray-300 rounded-l-md bg-gray-50">
                          <span className="text-gray-700">+91</span>
                        </div>
                        <input
                          type="text"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          maxLength={10}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-r-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Enter phone number"
                        />
                        <button
                          type="button"
                          onClick={handleSendOTP}
                          disabled={phone.length !== 10}
                          className="px-4 py-2 bg-primary-50 text-primary-600 border border-l-0 border-gray-300 rounded-r-md hover:bg-primary-100 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Send OTP
                        </button>
                      </div>
                    </div>

                    {/* OTP Field */}
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm mb-1 ml-1">
                        OTP <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        maxLength={6}
                        disabled={!otpSent}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="Enter OTP"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm mb-1 ml-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter email address"
                      />
                    </div>

                    {/* Checkbox */}
                    <div className="mb-4">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <div className="relative">
                          <input
                            type="checkbox"
                            checked={agreedToUpdates}
                            onChange={(e) => setAgreedToUpdates(e.target.checked)}
                            className="sr-only"
                          />
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                            agreedToUpdates 
                              ? 'bg-primary-50 border-primary-500' 
                              : 'border-gray-300'
                          }`}>
                            {agreedToUpdates && (
                              <svg width="12" height="12" viewBox="0 0 24 24" className="text-primary-500">
                                <polyline points="6 12 10 16 18 8" fill="none" stroke="currentColor" strokeWidth="2" />
                              </svg>
                            )}
                          </div>
                        </div>
                        <span className="text-sm text-gray-700">
                          I want to receive important updates on Email & Whatsapp
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#3C006B] from-[7.58%] to-[#8C1D75] to-[98.88%] text-white py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Right Panel - Stats */}
      <div className="flex-1 px-6 w-full relative bg-white min-h-screen">
        <AuthHeader isSignup={true} />
        <StatsSection />
      </div>
    </>
  );
}
