import React from 'react';

export default function DeliveryPartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-dvh overflow-hidden bg-gray-300">
      <div className="h-full overflow-scroll no-scrollbar max-w-lg m-auto bg-white">
        {children}
      </div>
    </div>
  );
}
