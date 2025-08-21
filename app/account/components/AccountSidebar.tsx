"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import React from "react";

const menuItems = [
  { 
    label: "Orders", 
    href: "/account/orders", 
    icon: (
      <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.70591 12.5294L8.70591 8.76472C8.70591 6.68553 10.3914 5.00001 12.4706 5.00001V5.00001C14.5498 5.00001 16.2353 6.68553 16.2353 8.76472L16.2353 12.5294" stroke="black" strokeLinecap="round" strokeWidth="1.8"/>
        <path d="M4.6535 13.1579C4.79005 11.5194 4.85832 10.7001 5.39863 10.203C5.93895 9.70581 6.76103 9.70581 8.40521 9.70581H16.536C18.1801 9.70581 19.0022 9.70581 19.5425 10.203C20.0829 10.7001 20.1511 11.5194 20.2877 13.1579L20.7713 18.9613C20.8508 19.9152 20.8905 20.3921 20.6109 20.696C20.3313 20.9999 19.8527 20.9999 18.8954 20.9999H6.04574C5.08851 20.9999 4.6099 20.9999 4.33028 20.696C4.05065 20.3921 4.0904 19.9152 4.16989 18.9613L4.6535 13.1579Z" stroke="black" strokeWidth="1.8"/>
      </svg>
    )
  },
  { 
    label: "Customer Support", 
    href: "/account/support", 
    icon: (
      <svg fill="none" height="24" viewBox="0 0 26 26" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 13C3 7.47715 7.47715 3 13 3V3C18.5228 3 23 7.47715 23 13V19.3636C23 20.4219 23 20.951 22.8424 21.3737C22.589 22.0531 22.0531 22.589 21.3737 22.8424C20.951 23 20.4219 23 19.3636 23H13C7.47715 23 3 18.5228 3 13V13Z" stroke="black" strokeWidth="1.6"/>
        <path d="M9.25 11.75L16.75 11.75" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6"/>
        <path d="M13 16.75H16.75" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6"/>
      </svg>
    )
  },
  { 
    label: "Manage Referrals", 
    href: "/account/referrals", 
    icon: (
      <svg fill="none" height="24" viewBox="0 0 27 27" width="24" xmlns="http://www.w3.org/2000/svg">
        <rect fill="none" height="26" transform="translate(0.807861 0.757812)" width="26"/>
        <path d="M4.68006 15.5556L12.6144 23.0986C12.8862 23.3569 13.0221 23.4861 13.1818 23.5213C13.2648 23.5395 13.3509 23.5395 13.4339 23.5213C13.5936 23.4861 13.7295 23.3569 14.0013 23.0986L21.9357 15.5556C24.1375 13.4624 24.4056 10.0454 22.5572 7.63444L22.1692 7.12838C19.9401 4.22085 15.4238 4.70457 13.861 8.01824C13.6405 8.48585 12.9752 8.48585 12.7547 8.01824C11.1919 4.70457 6.67561 4.22085 4.44651 7.12838L4.05854 7.63444C2.21012 10.0454 2.47823 13.4624 4.68006 15.5556Z" stroke="black" strokeWidth="1.6"/>
      </svg>
    )
  },
  { 
    label: "Addresses", 
    href: "/account/addresses", 
    icon: (
      <svg fill="none" height="24" viewBox="0 0 26 26" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.9204 18.682L12.552 17.9718H12.552L12.9204 18.682ZM12.0801 18.682L12.4484 17.9718H12.4484L12.0801 18.682ZM19.0891 9.38889C19.0891 11.7465 17.8884 13.6759 16.4236 15.1534C14.9596 16.63 13.2988 17.5845 12.552 17.9718L13.2887 19.3921C14.1073 18.9675 15.9308 17.923 17.5598 16.2798C19.1881 14.6375 20.6891 12.3263 20.6891 9.38889H19.0891ZM12.5002 2.8C16.1392 2.8 19.0891 5.74995 19.0891 9.38889H20.6891C20.6891 4.86629 17.0228 1.2 12.5002 1.2V2.8ZM5.91133 9.38889C5.91133 5.74995 8.86127 2.8 12.5002 2.8V1.2C7.97762 1.2 4.31133 4.86629 4.31133 9.38889H5.91133ZM12.4484 17.9718C11.7017 17.5845 10.0408 16.63 8.57682 15.1534C7.11206 13.6759 5.91133 11.7465 5.91133 9.38889H4.31133C4.31133 12.3263 5.8123 14.6375 7.44059 16.2798C9.06961 17.923 10.8932 18.9675 11.7117 19.3921L12.4484 17.9718ZM12.552 17.9718C12.5307 17.9828 12.5135 17.9858 12.5002 17.9858C12.4869 17.9858 12.4697 17.9828 12.4484 17.9718L11.7117 19.3921C12.2096 19.6504 12.7908 19.6504 13.2887 19.3921L12.552 17.9718ZM14.8668 9.38932C14.8668 10.6964 13.8072 11.756 12.5002 11.756V13.356C14.6909 13.356 16.4668 11.5801 16.4668 9.38932H14.8668ZM12.5002 7.02266C13.8072 7.02266 14.8668 8.08225 14.8668 9.38932H16.4668C16.4668 7.19859 14.6909 5.42266 12.5002 5.42266V7.02266ZM10.1335 9.38932C10.1335 8.08225 11.1931 7.02266 12.5002 7.02266V5.42266C10.3094 5.42266 8.5335 7.19859 8.5335 9.38932H10.1335ZM12.5002 11.756C11.1931 11.756 10.1335 10.6964 10.1335 9.38932H8.5335C8.5335 11.5801 10.3094 13.356 12.5002 13.356V11.756Z" fill="black"/>
        <path d="M20.7272 18.3607C21.561 18.8421 22 19.3881 22 19.944C22 20.4999 21.561 21.0459 20.7272 21.5273C19.8934 22.0087 18.6942 22.4085 17.25 22.6864C15.8058 22.9644 14.1676 23.1107 12.5 23.1107C10.8324 23.1107 9.19418 22.9644 7.75 22.6864C6.30582 22.4085 5.10656 22.0087 4.27276 21.5273C3.43896 21.046 3 20.4999 3 19.944C3 19.3881 3.43896 18.8421 4.27276 18.3607" stroke="black" strokeLinecap="round" strokeWidth="1.6"/>
      </svg>
    )
  },
  { 
    label: "Profile", 
    href: "/account/profile", 
    icon: (
      <svg fill="none" height="24" viewBox="0 0 26 26" width="24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12.5" cy="11.168" r="3.5" stroke="black" strokeLinecap="round" strokeWidth="1.6"/>
        <circle cx="12.5" cy="13.5" r="10.5" stroke="black" strokeWidth="1.6"/>
        <path d="M19.5 21.3236C19.0871 20.0832 18.1773 18.9872 16.9117 18.2054C15.646 17.4237 14.0953 17 12.5 17C10.9047 17 9.35398 17.4237 8.08835 18.2054C6.82271 18.9872 5.91289 20.0832 5.5 21.3236" stroke="black" strokeLinecap="round" strokeWidth="1.6"/>
      </svg>
    )
  },
];

const AccountSidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <aside className="w-full lg:w-2/5 border-r border-gray-200 lg:border-r border-b border-gray-200 lg:border-b-0 p-4 lg:p-6">
      {/* User Profile */}
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-3">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
        <div>
          <h2 className="font-semibold text-gray-900">Kashyap</h2>
          <p className="text-sm text-gray-600">9915005070</p>
        </div>
      </div>

      {/* Daily Card */}
      <div className="bg-green-950 rounded-2xl p-4  mb-8 relative">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <Image 
              src="https://cdn.zeptonow.com/app/svg/daily_yellow.svg?tr=w-undefined,q-70" 
              alt="Daily" 
              width={44} 
              height={15} 
              className="mb-2"
            />
            <p className="text-white text-sm mb-4 leading-relaxed">
              You would potentially save <span className="font-bold text-yellow-200">₹500</span> per<br />
              month with Supr Daily
            </p>
          </div>
          <Image 
            src="https://cdn.zeptonow.com/app/svg/dp_profile_wallet_coins.svg?tr=w-undefined,q-70" 
            alt="Coins" 
            width={80} 
            height={80} 
            className="absolute right-2 top-2 w-20 h-20 object-contain"
          />
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10">
          <div className="flex items-center justify-center h-10 bg-gradient-to-b from-yellow-300 to-yellow-400 rounded-lg px-4 shadow-lg">
            <span className="text-black font-medium mr-1">Get</span>
            <Image 
              src="https://cdn.zeptonow.com/app/svg/daily_green.svg?tr=w-undefined,q-70" 
              alt="Daily" 
              width={40} 
              height={13} 
              className="mr-1"
            />
            <Image 
              src="https://www.zeptonow.com/images/double-chevron-right.svg" 
              alt="Arrow" 
              width={24} 
              height={24} 
              className="w-6 h-6"
            />
          </div>
        </div>
      </div>

      {/* Zepto Cash & Gift Card */}
      <div className="mt-2.5 rounded-xl p-3 bg-[#F3F5F7]">
        <a href="/account/wallet">
          <div className="mb-5 flex flex-row items-center border-b border-dashed border-gray-300 pb-3">
            <Image 
              alt="refund-timeline" 
              src="https://www.zeptonow.com/images/wallet.svg" 
              width={20} 
              height={20} 
              className="relative overflow-hidden object-contain"
            />
            <h5 className="block font-subtitle tracking-wider w-full pl-2 text-base font-bold text-black">
              Supr Cash & Gift Card
            </h5>
            <Image 
              alt="right-arrow-icon" 
              src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/13.9.0/tr:w-5,ar-5-5,pr-true,f-auto,q-80//images/right-arrow-dark.svg" 
              width={7} 
              height={9} 
              className="relative overflow-hidden object-contain"
            />
          </div>
        </a>
        <div className="flex items-center justify-between">
          <p className="block font-body text-base font-extralight text-gray-500">
            Available Balance: <span className="font-bold text-black">₹0</span>
          </p>
          <a href="/account/wallet">
            <h5 className="block font-subtitle text-lg tracking-wider rounded-lg bg-black p-2 text-white">
              Add Balance
            </h5>
          </a>
        </div>
      </div>

      {/* Free Cash */}
      <div className="relative mt-6 rounded-xl p-[2px]">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#DE9EFF] to-[#BFA8FF]"></div>
        <div className="relative flex items-center justify-between rounded-lg bg-[#F6E5FF] p-4">
          <div className="flex items-center justify-center">
            <Image 
              alt="gift" 
              src="https://cdn.zeptonow.com/production/app/images/red-gift-box-icon.png" 
              width={16} 
              height={16} 
              className="mr-2"
            />
            <span className="text-cta2 font-bold" style={{color: 'rgb(149, 14, 219)'}}>
              Free Cash 
            </span>
            <Image 
              src="https://cdn.zeptonow.com/production//app/svg/info_icon_purple.svg" 
              alt="Info icon"
              width={18} 
              height={18} 
              className="ml-1"
            />
          </div>
          <span className="text-cta1 font-bold" style={{color: 'rgb(149, 14, 219)'}}>
            ₹125
          </span>
        </div>
      </div>

      {/* Menu */}
      <div className="mt-6">
        {menuItems.map((item) => {
          const active = pathname === item.href || (item.href === "/account/orders" && pathname === "/account");
          
          return (
            <div key={item.href} className={`flex flex-row items-center border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150 ${active ? 'bg-gray-50' : ''}`}>
              <div className="flex items-center p-4">
                {item.icon}
              </div>
              <Link href={item.href} className="flex h-full w-full cursor-pointer justify-between overflow-hidden py-4 pr-4 text-gray-900 hover:text-black transition-colors duration-150">
                <span className="font-medium">{item.label}</span>
              </Link>
              <div className="pr-4">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          );
        })}
      </div>

      {/* Log Out */}
      <div className="mt-8 pt-4 border-t border-gray-100">
        <button className="text-gray-600 font-medium hover:text-gray-800 transition-colors">Log Out</button>
      </div>

      {/* Supr Logo */}
      <div className="mt-8 text-center">
        <div className="text-2xl font-bold text-gray-400">supr</div>
      </div>
    </aside>
  );
};

export default AccountSidebar;


