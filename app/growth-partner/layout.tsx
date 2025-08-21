import React from 'react';

export default function GrowthPartnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="growth-partner-page bg-white min-h-screen">
      {children}
    </div>
  );
}
