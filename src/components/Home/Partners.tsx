'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useDetectedLocale } from '@/hooks/useDetectedLocale';
import { getFontStyles } from '@/utils/fonts';

const Partners = () => {
  const t = useTranslations('partners');
  const locale = useDetectedLocale();

  const partnerLogos = [
    { id: 1, name: 'ARTY', logoSrc: '/partanrs/ARTY.svg', bgSrc: '/partanrs/Artybg.svg' },
    { id: 2, name: 'NETWORK', logoSrc: '/partanrs/NETWORK.svg', bgSrc: '/partanrs/networkbg.svg' },
    { id: 3, name: 'DIGITAL', logoSrc: '/partanrs/DIGITAL.svg', bgSrc: '/partanrs/digtialbg.svg' },
    { id: 4, name: 'INVESMENT', logoSrc: '/partanrs/INVESMENT.svg', bgSrc: '/partanrs/BGinvesment.svg' },
    { id: 5, name: 'KARYLIVE', logoSrc: '/partanrs/KARYLIVE.svg', bgSrc: '/partanrs/karilifebg.svg' },
    { id: 6, name: 'BOKLITE', logoSrc: '/partanrs/BOKLITE.svg', bgSrc: '/partanrs/boklitebg.svg' },
  ];

  // Helper function to render partner cards
  const renderPartnerCard = (partner: typeof partnerLogos[0], isMobile = false) => (
    <div key={partner.id} className="partner-card group">
      <div
        className={`relative ${isMobile ? 'w-40 h-40 sm:w-56 sm:h-56' : 'w-52 h-52 xl:w-72 xl:h-72'} overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105`}
        style={{
          backgroundImage: `url(${partner.bgSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Logo overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={partner.logoSrc}
            alt={partner.name}
            width={isMobile ? 80 : 120}
            height={isMobile ? 60 : 90}
            className={`${isMobile ? 'h-28 sm:h-40' : 'h-40 xl:h-56'} w-auto object-contain filter hover:scale-110 transition-transform duration-300`}
          />
        </div>
      </div>
    </div>
  );

  return (
    <section id="partners" className="partners-section relative w-full py-20 px-6 lg:px-16 xl:px-24 overflow-hidden" data-locale={locale}>


      <div className="relative z-10 max-w-8xl mx-auto">
        {/* Title and Description */}
        <div className="text-start lg:text-center mb-16 lg:mb-20">
          {/* Title */}
          <h2
            className="partners-title mb-8 tracking-wide text-[20px] lg:text-[32px] font-semibold leading-normal lg:leading-[63px]"
            style={{
              ...getFontStyles(locale),
              background: 'linear-gradient(180deg, #3ED178 0%, #2599BA 38.94%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {t('title')}
          </h2>

          {/* Description */}
          <p
            className="partners-description text-[#556482] max-w-6xl mx-auto text-[12px] lg:text-lg font-normal lg:font-medium leading-[150%]"
            style={{
              ...getFontStyles(locale)
            }}
          >
            {t('description')}
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:block">
          {/* First Row - Top 3 logos */}
          <div className="flex justify-center items-center mb-12 xl:mb-10">
            <div className="flex gap-10 xl:gap-14">
              {partnerLogos.slice(0, 3).map(partner => renderPartnerCard(partner))}
            </div>
          </div>

          {/* Second Row - Bottom 3 logos with lower positioning */}
          <div className="flex justify-center items-center ">
            <div className="flex gap-10 xl:gap-14">
              {partnerLogos.slice(3, 6).map(partner => renderPartnerCard(partner))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Grid */}
        <div className="lg:hidden">
          {/* Mobile Layout: 2 columns, 3 rows */}
          <div className="sm:hidden">
            {/* First Row */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {partnerLogos.slice(0, 2).map(partner => renderPartnerCard(partner, true))}
            </div>
            {/* Second Row */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {partnerLogos.slice(2, 4).map(partner => renderPartnerCard(partner, true))}
            </div>
            {/* Third Row */}
            <div className="grid grid-cols-2 gap-4">
              {partnerLogos.slice(4, 6).map(partner => renderPartnerCard(partner, true))}
            </div>
          </div>

          {/* Tablet Layout: 3 columns, 2 rows */}
          <div className="hidden sm:block">
            {/* First Row - 3 columns */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {partnerLogos.slice(0, 3).map(partner => renderPartnerCard(partner, true))}
            </div>
            {/* Second Row - 3 columns */}
            <div className="grid grid-cols-3 gap-6">
              {partnerLogos.slice(3, 6).map(partner => renderPartnerCard(partner, true))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;