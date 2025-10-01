'use client';

import Hero from '@/components/Home/Hero';
import AboutUs from '@/components/Home/AboutUs';
import OurCommitment from '@/components/Home/OurCommitment';

export default function TestPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutUs />
      <OurCommitment />
       <AboutUs />
    </div>
  );
}