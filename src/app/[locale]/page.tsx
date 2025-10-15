'use client';

import Hero from '@/components/Home/Hero';
import AboutUs from '@/components/Home/AboutUs/AboutUs';
import Partners from '@/components/Home/Partners';
import FAQs from '@/components/Home/FAQs';
import ContactUs from '@/components/Home/ContactUs';
import OurCompany from '@/components/Home/OurCompany';
import OurServices from '@/components/Home/OurServices';

export default function TestPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutUs />
      <OurCompany />
      <OurServices />
      <Partners />
      <FAQs />
      <ContactUs />
    </div>
  );
}