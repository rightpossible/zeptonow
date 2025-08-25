import React from 'react';
import DelAreasHeader from './components/DelAreasHeader';
import DelAreasFooter from './components/DelAreasFooter';

export default function DelAreasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <DelAreasHeader />
      {children}
      <DelAreasFooter />
    </div>
  );
}
