import React from 'react';
import Link from 'next/link';

interface AuthHeaderProps {
  isSignup?: boolean;
}

const AuthHeader = ({ isSignup = true }: AuthHeaderProps) => {
  return (
    <div className="flex items-center h-20 relative z-10 justify-end">
      <p className="font-medium text-primary-700 !mr-4">
        {isSignup ? 'Already a User?' : 'Not a User?'}
      </p>
      <Link href={isSignup ? '/brands/signin' : '/brands/signup'}>
        <button className="bg-gradient-to-r from-[#3C006B] from-[7.58%] to-[#8C1D75] to-[98.88%] text-white px-6 py-2 rounded-md font-medium hover:opacity-90 transition-opacity">
          {isSignup ? 'Log In' : 'Create Account'}
        </button>
      </Link>
    </div>
  );
};

export default AuthHeader;
