import React from 'react';
import BlogHeader from './components/BlogHeader';
import BlogFooter from './components/BlogFooter';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <BlogHeader />
      {children}
      <BlogFooter />
    </div>
  );
}
