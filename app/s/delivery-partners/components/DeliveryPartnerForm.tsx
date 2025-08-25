"use client";

import React, { useState } from 'react';

const DeliveryPartnerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
      {/* Name Input */}
      <input 
        placeholder="Name" 
        autoComplete="name" 
        className="w-full px-3.5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700" 
        type="text" 
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />
      
      {/* Phone Input */}
      <div className="flex flex-col space-y-1">
        <input 
          autoComplete="tel" 
          placeholder="Phone" 
          className="w-full px-3.5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700" 
          type="tel" 
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
      </div>
      
      {/* City Dropdown */}
      <div className="relative w-full">
        <button 
          type="button" 
          className="flex items-center w-full px-3.5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
        >
          <span className="text-gray-500 flex-1 text-left">
            {formData.city || 'City'}
          </span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 7.5L10 12.5L15 7.5" stroke="#98A2B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      
      {/* Submit Button */}
      <button 
        type="submit"
        className="flex items-center justify-center text-base rounded-md !font-medium bg-primary-700 text-white h-12 h-14 bg-primary-500 font-medium"
      >
        Get the App
      </button>
      
      {/* Privacy Policy */}
      <p className="text-[0.65rem] text-gray-500">
        By submitting this form I agree to the{' '}
        <a href="https://www.zeptonow.com/app-privacy-policy" className="text-green-700">
          Privacy Policy
        </a>{' '}
        of Zepto.
      </p>
    </form>
  );
};

export default DeliveryPartnerForm;
