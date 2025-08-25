import React from 'react';
import CareerHeader from './components/CareerHeader';
import CareerFooter from './components/CareerFooter';

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <CareerHeader />
      {children}
      <CareerFooter />
    </div>
  );
}
