import React from 'react';
import Header from '../components/Header';
import AccountSidebar from './components/AccountSidebar';

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-6xl mx-auto mt-6 px-4">
        <div className="bg-white border rounded-xl shadow-sm overflow-hidden flex flex-col lg:flex-row">
          <AccountSidebar />
          <main className="flex-1 lg:w-3/5 p-4 lg:p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}


