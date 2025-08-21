import React from 'react';
import Image from 'next/image';

const HowToJoinSection = () => {
  return (
    <div id="howToJoin" className="flex items-center justify-center p-4 w-full scroll-mt-16">
      <div className="flex flex-col border border-gray-200 bg-primary-25 w-full rounded-xl shadow-lg">
        {/* Header */}
        <div className="flex flex-col w-full p-4 border-b border-gray-200">
          <span className="font-medium text-slate-700">Become a</span>
          <div className="flex items-center justify-between">
            <span className="text-gray-900 text-xl font-semibold">Delivery Partner</span>
            <div className="flex items-center space-x-1 bg-primary-600 rounded-2xl px-3 h-8">
              <span className="text-base font-medium text-white">in 10 min</span>
              <Image 
                alt="bolt" 
                className="h-4.5 w-4.5" 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAACWklEQVR4Ae3c4U3zMBAG4LefvgE6gtmgIzACbFAmYITCCEwATAAbwAbABPUGsMFxVivFhCR11PrOxvdIVdUk/XM9+03iqIAxxhhj/qgFCkZE5/y25Nf7YrHwMB0uzpo6W5gOF2QZihIViKDkH8p0zS8XffYwO9wsjn57gZISO2gzsO0DSooqEHfKit/WA7s8lJTWQU8j2z2UFFOgEOv4OTHHPFrXj/USIr4YXIMNjWv7JHEk1ouI+KCEOWhzYL9axAeqBQrdg+FYj3ko0u6glOHjoUitQAdiPebRoqlYLyniVTooxDqse4btY/2T0qhGfKDRQaF7lonHqkZ8IFqgxFiPeSiT7qCnmcd7KPsPIftYX837Flb8vdTh+IWaVz9SY/1IzzgxkSFG6bF+rE/UhnaxvqX8trQLgZOS6CCp7nnMMf9kXXre/6ISN7w8F+cMGeTuoHvIuEVt6Ofaek5ZL0eyDTHa3Ut2yO8s57lPliHGxemvrefyUN2JIcnFergj4JBZjg6SivU7ie7JUaDUa6djhFi/gYCTT9L7tg8XpamFCscfWvrpu+ICPaAFXNALmucNgkpYOHSY5xKCaitQfbF+LB4yLzOGl4OwmjrotslnpRM7R+0RGO2HF1LvUdd3tX4KXKDzkrsn0J6DUjpINNb7tAvkDuwPsf6OViVEvIMy7Q6aul5rM9ZjUxMzpa+o/k0h4icKtEbrJiK+qOeiNeegsYhXjfU+zQK5gW1tx3psJOIdCqPZQf2UsliPDcS6g+lwQd5qiHW1PxagbvXji4fWK4wxxhhjZH0DYX1kXZf+vEMAAAAASUVORK5CYII="
                width={18}
                height={18}
              />
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="flex flex-col px-4 pt-6 pb-3">
          {/* Step 1 */}
          <div className="flex flex-col space-y-1">
            <div className="flex items-center space-x-3 py-0.5">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white border border-gray-200">
                1
              </div>
              <div className="flex flex-col">
                <span className="text-base text-gray-900 font-semibold">Download the App</span>
                <span className="text-gray-400 text-xs">Supr Delivery Partner</span>
              </div>
            </div>
            {/* Arrow */}
            <svg width="42" height="32" viewBox="0 0 42 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.2929 28.7071C20.6834 29.0976 21.3166 29.0976 21.7071 28.7071L28.0711 22.3431C28.4616 21.9526 28.4616 21.3195 28.0711 20.9289C27.6805 20.5384 27.0474 20.5384 26.6569 20.9289L21 26.5858L15.3431 20.9289C14.9526 20.5384 14.3195 20.5384 13.9289 20.9289C13.5384 21.3195 13.5384 21.9526 13.9289 22.3431L20.2929 28.7071ZM20 -4.37114e-08L20 28L22 28L22 4.37114e-08L20 -4.37114e-08Z" fill="url(#paint0_linear_588_1801)" />
              <defs>
                <linearGradient id="paint0_linear_588_1801" x1="20.5" y1="28" x2="20.5" y2="-2.18557e-08" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#667085" />
                  <stop offset="1" stopColor="#667085" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col space-y-1">
            <div className="flex items-center space-x-3 py-0.5">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white border border-gray-200">
                2
              </div>
              <div className="flex flex-col">
                <span className="text-base text-gray-900 font-semibold">Upload Documents</span>
                <span className="text-gray-400 text-xs">Aadhar, PAN, etc.</span>
              </div>
            </div>
            {/* Arrow */}
            <svg width="42" height="32" viewBox="0 0 42 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.2929 28.7071C20.6834 29.0976 21.3166 29.0976 21.7071 28.7071L28.0711 22.3431C28.4616 21.9526 28.4616 21.3195 28.0711 20.9289C27.6805 20.5384 27.0474 20.5384 26.6569 20.9289L21 26.5858L15.3431 20.9289C14.9526 20.5384 14.3195 20.5384 13.9289 20.9289C13.5384 21.3195 13.5384 21.9526 13.9289 22.3431L20.2929 28.7071ZM20 -4.37114e-08L20 28L22 28L22 4.37114e-08L20 -4.37114e-08Z" fill="url(#paint0_linear_588_1802)" />
              <defs>
                <linearGradient id="paint0_linear_588_1802" x1="20.5" y1="28" x2="20.5" y2="-2.18557e-08" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#667085" />
                  <stop offset="1" stopColor="#667085" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col space-y-1">
            <div className="flex items-center space-x-3 py-0.5">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white border border-gray-200">
                3
              </div>
              <div className="flex flex-col">
                <span className="text-base text-gray-900 font-semibold">Start Delivering</span>
                <span className="text-gray-400 text-xs">Earn up to ₹60,000 per month!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Button */}
        <div className="p-3 flex w-full">
          <button className="flex items-center justify-center text-base rounded-md !font-medium bg-primary-700 text-white h-12 space-x-2 bg-white !py-3 w-full h-12">
            <svg className="h-5 w-5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.47043 7.64112L0.0683594 14.6706C0.0690546 14.6719 0.0690545 14.6737 0.0697497 14.675C0.297089 15.4383 1.07574 16 2.00039 16C2.37025 16 2.71717 15.9104 3.01473 15.7537L3.03836 15.7412L11.37 11.4395L7.47043 7.64112Z" fill="#EA4335" />
              <path d="M14.9585 6.44414L14.9516 6.43978L11.3545 4.57417L7.302 7.80089L11.3691 11.4388L14.9467 9.59186C15.5738 9.28828 16 8.69669 16 8.01489C16 7.33682 15.5801 6.74833 14.9585 6.44414Z" fill="#FBBC04" />
              <path d="M0.0681321 1.32889C0.0236377 1.4757 0 1.62997 0 1.78922V14.2109C0 14.3702 0.0236377 14.5244 0.0688274 14.6706L7.72465 7.82091L0.0681321 1.32889Z" fill="#4285F4" />
              <path d="M7.52511 7.99994L11.3558 4.5729L3.03395 0.255671C2.73153 0.0933084 2.37835 -2.86102e-06 2.00084 -2.86102e-06C1.07619 -2.86102e-06 0.296149 0.562978 0.0688101 1.32689C0.0688101 1.32751 0.0681152 1.32814 0.0681152 1.32876L7.52511 7.99994Z" fill="#34A853" />
            </svg>
            <span className="text-base font-medium text-gray-700">Get the App</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowToJoinSection;
