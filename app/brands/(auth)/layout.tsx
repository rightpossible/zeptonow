import React from 'react';

export default function BrandsAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row w-full min-h-screen h-full bg-white">
      {children}
    </div>
  );
}
