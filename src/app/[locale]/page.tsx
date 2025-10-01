'use client';

import Hero from '@/components/Home/Hero';
import AboutUs from '@/components/Home/AboutUs';
import OurServices from '@/components/Home/OurServices';
import OurCommitment from '@/components/Home/OurCommitment';
import Partners from '@/components/Home/Partners';

export default function TestPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutUs />
      <OurCommitment />
      <OurServices />
      <Partners />
    </div>
  );
}