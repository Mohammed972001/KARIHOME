'use client';

import Hero from '@/components/Home/Hero';
import ThemeToggle from '@/components/ThemeToggle';

export default function TestPage() {
  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <Hero />
    </div>
  );
}