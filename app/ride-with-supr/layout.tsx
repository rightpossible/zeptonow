import React from 'react';

export default function RideWithSuprLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="ride-with-supr-page min-h-screen bg-white">
      {children}
    </div>
  );
}
