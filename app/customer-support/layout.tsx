import React from 'react';
import CustomerSupportHeader from './components/CustomerSupportHeader';
import CustomerSupportFooter from './components/CustomerSupportFooter';

export default function CustomerSupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <CustomerSupportHeader />
      {children}
      <CustomerSupportFooter />
    </div>
  );
}
