'use client';

import CompanyFormationHero from '@/components/CompanyFormation/Hero';
import ServicesSection from '@/components/CompanyFormation/ServicesSection';
import StepsSection from '@/components/CompanyFormation/StepsSection';
import InformationSection from '@/components/CompanyFormation/InformationSection';
import EmailSection from '@/components/CompanyFormation/EmailSection';

export default function CompanyFormationPage() {
  return (
    <div className="min-h-screen">
      <CompanyFormationHero />
      <ServicesSection />
      <InformationSection />
      <StepsSection />
      <EmailSection />
    </div>
  );
}