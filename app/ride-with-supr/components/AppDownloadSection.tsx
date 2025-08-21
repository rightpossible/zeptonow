import React from 'react';

const AppDownloadSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            Download the Supr Driver App
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#" 
              className="inline-block hover:scale-105 transition-transform duration-200"
            >
              <img 
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-14"
              />
            </a>
            
            <a 
              href="#" 
              className="inline-block hover:scale-105 transition-transform duration-200"
            >
              <img 
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                className="h-14"
              />
            </a>
          </div>
          
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Join thousands of drivers who are already earning with Supr. Download our app today and start your journey to financial freedom.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
