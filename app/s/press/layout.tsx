import React from 'react';
import PressHeader from './components/PressHeader';
import PressFooter from './components/PressFooter';

export default function PressLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <PressHeader />
      {children}
      <PressFooter />
    </div>
  );
}
