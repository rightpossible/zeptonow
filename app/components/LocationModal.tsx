"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LocationModal: React.FC<LocationModalProps> = ({ isOpen, onClose }) => {
  const [searchValue, setSearchValue] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-white border border-gray-200 rounded-t-lg sm:rounded-lg w-full sm:max-w-md max-h-[90vh] sm:max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="sticky z-[1000] flex w-full justify-between bg-white p-3 shadow">
          <button aria-label="Back button" className="sm:hidden" onClick={onClose}>
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" style={{height: '1.5rem', width: '1.5rem', color: 'black'}}>
              <path d="M15.5 19L8.5 12L15.5 5" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"/>
            </svg>
          </button>
          <p className="block font-heading text-lg tracking-wide w-full pl-2 sm:pl-0 text-gray-900 sm:text-center">Your Location</p>
          <button 
            aria-label="Location modal close Icon" 
            className="absolute right-2 hidden sm:block"
            onClick={onClose}
          >
            <svg fill="none" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M15.75 9C15.75 12.7279 12.7279 15.75 9 15.75C5.27208 15.75 2.25 12.7279 2.25 9C2.25 5.27208 5.27208 2.25 9 2.25C12.7279 2.25 15.75 5.27208 15.75 9ZM5.46967 12.5303C5.17678 12.2374 5.17678 11.7626 5.46967 11.4697L7.93934 9L5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L9 7.93934L11.4697 5.46967C11.7626 5.17678 12.2374 5.17678 12.5303 5.46967C12.8232 5.76256 12.8232 6.23744 12.5303 6.53033L10.0607 9L12.5303 11.4697C12.8232 11.7626 12.8232 12.2374 12.5303 12.5303C12.2374 12.8232 11.7626 12.8232 11.4697 12.5303L9 10.0607L6.53033 12.5303C6.23744 12.8232 5.76256 12.8232 5.46967 12.5303Z" fill="#130022" fillOpacity="0.4" fillRule="evenodd"/>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto max-h-[calc(90vh-60px)]">
          {/* Search Input */}
          <div className="mb-6">
            <div className="w-full relative text-base flex items-center border rounded-md border-green-600 bg-green-50 border-opacity-15">
              <span className="left-0 pl-3.5">
                <svg fill="none" height="0.9rem" viewBox="0 0 15 15" width="0.9rem" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 8.98528 8.98528 11 6.5 11C4.01472 11 2 8.98528 2 6.5ZM6.5 1C3.46243 1 1 3.46243 1 6.5C1 9.53757 3.46243 12 6.5 12C9.53757 12 12 9.53757 12 6.5C12 3.46243 9.53757 1 6.5 1ZM11.2669 10.4068C11.0773 10.206 10.7609 10.1969 10.5601 10.3864C10.3593 10.576 10.3502 10.8924 10.5397 11.0932L13.1368 13.8442C13.3264 14.045 13.6428 14.0541 13.8436 13.8646C14.0444 13.675 14.0535 13.3585 13.864 13.1577L11.2669 10.4068Z" fill="#858585" fillRule="evenodd"/>
                </svg>
              </span>
              <input 
                className="focus:outline-none block py-3 px-2 appearance-none flex-grow font-normal bg-transparent text-sm" 
                placeholder="Search a new address" 
                type="text" 
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </div>

          {/* Current Location Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg cursor-pointer">
              <div className="flex items-center flex-1">
                <div className="mr-4">
                  <Image 
                    alt="target" 
                    src="https://www.zeptonow.com/images/target.svg" 
                    width={24} 
                    height={24} 
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-red-500 text-sm mb-1">
                    Use My Current Location
                  </div>
                  <div className="text-xs text-gray-600">
                    Enable your current location for better services
                  </div>
                </div>
              </div>
              <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded text-xs font-medium hover:bg-gray-50">
                Enable
              </button>
            </div>

            {/* Add New Address */}
            <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg cursor-pointer">
              <div className="flex items-center flex-1">
                <div className="mr-4">
                  <Image 
                    alt="plus" 
                    src="https://www.zeptonow.com/images/plus.svg" 
                    width={24} 
                    height={24} 
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-red-500 text-sm">
                    Add New Address
                  </div>
                </div>
              </div>
              <Image 
                alt="chevron-right" 
                src="https://www.zeptonow.com/images/chevron-right.svg" 
                width={20} 
                height={20} 
                className="object-contain"
              />
            </div>
          </div>

          {/* Saved Addresses Section */}
          <div>
            <h4 className="font-heading text-lg tracking-wide mb-4 text-gray-900">Saved Addresses</h4>
            <div className="space-y-2">
              <div className="flex items-center p-4 hover:bg-gray-50 rounded-lg cursor-pointer">
                <div className="mr-4">
                  <Image 
                    alt="briefcase" 
                    src="https://www.zeptonow.com/images/briefcase.svg" 
                    width={24} 
                    height={24} 
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-sm mb-1 text-gray-900">Work</div>
                  <div className="text-xs text-gray-600 line-clamp-2 break-all">
                    Static, 1, West, SK, India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
