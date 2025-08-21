import React from 'react';

export default function BrandsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="brands-page bg-white min-h-screen" style={{background: 'linear-gradient(0.61deg, rgb(255, 255, 255) 89.22%, rgb(247, 229, 250) 104.05%)'}}>
      {children}
    </div>
  );
}
