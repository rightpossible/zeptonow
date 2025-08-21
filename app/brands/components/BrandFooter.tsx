import React from 'react';

const BrandFooter = () => {
  return (
    <div 
      className="w-full h-full text-white px-[5vw] lg:px-[10vw] pt-10 pb-5"
      style={{background: 'linear-gradient(to top right, rgb(61, 1, 107), rgb(140, 29, 117))'}}
    >
      <div className="max-w-[110rem] m-auto">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-20 justify-between">
          {/* Logo */}
          <div className="w-1/4">
            <img 
              alt="zepto-logo-2" 
              src="https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/zepto-logo-2.svg" 
              className="3xl:h-[3rem] 3xl-w[3rem]"
            />
          </div>

          {/* Navigation Sections */}
          <div className="flex flex-col lg:flex-row justify-around gap-12 md:gap-20 lg:gap-10 md:w-3/4">
            {/* Links Section */}
            <div className="flex flex-col md:flex-row gap-12 md:gap-20">
              <div className="flex flex-col gap-4">
                <a rel="noopener noreferrer" href="https://www.zeptonow.com" target="_blank">
                  <p className="cursor-pointer text-sm">Home</p>
                </a>
                <a rel="noopener noreferrer" href="https://www.zeptonow.com/company-details?srsltid=AfmBOopnD3o6o1m-z7vgz1GMNzgChcYWWYPtW5rKV-y5i0rH1Ve86QKr" target="_blank">
                  <p className="cursor-pointer text-sm">About us</p>
                </a>
                <a rel="noopener noreferrer" href="https://zepto.talentrecruit.com/career-page" target="_blank">
                  <p className="cursor-pointer text-sm">
                    Careers
                    <br className="lg:hidden" />
                    <span className="bg-[#FF3269] p-1 rounded-[28px] text-[9px] font-[600] lg:ml-1">
                      We&apos;re hiring
                    </span>
                  </p>
                </a>
              </div>
              <div className="flex flex-col gap-4">
                <a rel="noopener noreferrer" href="https://blog.zeptonow.com" target="_blank">
                  <p className="cursor-pointer text-sm">Blog</p>
                </a>
                <a rel="noopener noreferrer" href="https://www.zeptonow.com/press" target="_blank">
                  <p className="cursor-pointer text-sm">Press</p>
                </a>
              </div>
            </div>

            {/* Download Supr Section */}
            <div className="flex flex-col md:flex-row gap-20 lg:gap-10">
              <div className="flex flex-col gap-7">
                <p className="text-sm">Download Supr</p>
                <div className="flex flex-col gap-2">
                  <button className="flex items-center gap-2 text-white bg-white/10 rounded-[65px] text-[14px] px-4 py-2 hover:bg-white/20 transition-colors">
                    <img 
                      alt="play-store" 
                      src="https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/play-store.svg" 
                      className="h-4 w-4"
                    />
                    Get it on play store
                  </button>
                  <button className="flex items-center gap-2 text-white bg-white/10 rounded-[65px] text-[14px] px-4 py-2 hover:bg-white/20 transition-colors">
                    <img 
                      alt="app-store" 
                      src="https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/app-store.svg" 
                      className="h-4 w-4"
                    />
                    Get it on app store
                  </button>
                </div>
              </div>
            </div>

            {/* Download Brand Hub Section */}
            <div className="flex flex-col md:flex-row gap-20 lg:gap-10">
              <div className="flex flex-col gap-7">
                <p className="text-sm">Download Brand Hub</p>
                <div className="flex flex-col gap-2">
                  <button className="flex items-center gap-2 text-white bg-white/10 rounded-[65px] text-[14px] px-4 py-2 hover:bg-white/20 transition-colors">
                    <img 
                      alt="play-store" 
                      src="https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/play-store.svg" 
                      className="h-4 w-4"
                    />
                    Get it on play store
                  </button>
                  <button className="flex items-center gap-2 text-white bg-white/10 rounded-[65px] text-[14px] px-4 py-2 hover:bg-white/20 transition-colors">
                    <img 
                      alt="app-store" 
                      src="https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/app-store.svg" 
                      className="h-4 w-4"
                    />
                    Get it on app store
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="font-[400] text-sm text-white/50 mt-20 md:mt-28 lg:px-12 py-8 border-t-[1px] border-t-white/50 flex flex-col lg:flex-row justify-between gap-8">
          <span className="text-xs">© Supr Marketplace Private Limited</span>
          
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            <a rel="noopener noreferrer" href="https://www.zeptonow.com/privacy-policy" target="_blank">
              <span className="text-xs">Privacy policy</span>
            </a>
            <a rel="noopener noreferrer" href="/terms-of-use" target="_blank">
              <span className="text-xs">Terms of use</span>
            </a>
            <a rel="noopener noreferrer" href="https://www.zeptonow.com/responsible-disclosure-policy" target="_blank">
              <span className="text-xs">Responsible disclosure policy</span>
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-5 h-6">
            <a href="https://www.instagram.com/zeptonow/">
              <img 
                alt="instagram" 
                src="https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/instagram.svg" 
                className="w-6 h-6 3xl:h-8 3xl:w-8"
              />
            </a>
            <a href="https://x.com/ZeptoNow">
              <img 
                alt="twitter" 
                src="https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/twitter.svg" 
                className="w-6 h-6 3xl:h-8 3xl:w-8"
              />
            </a>
            <a href="https://www.facebook.com/Zeptonow/">
              <img 
                alt="facebook" 
                src="https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/facebook.svg" 
                className="w-6 h-6 3xl:h-8 3xl:w-8"
              />
            </a>
            <a href="https://www.linkedin.com/company/zeptonow/">
              <img 
                alt="linkedin" 
                src="https://cdn.zeptonow.com/ext-seller-prod/assets/root-shell/tr:w-0.5,h-0.5/assets/icons/linkedin.svg" 
                className="w-6 h-6 3xl:h-8 3xl:w-8"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandFooter;
