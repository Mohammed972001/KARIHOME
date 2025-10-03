'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useDetectedLocale } from '@/hooks/useDetectedLocale';

const Partners = () => {
  const t = useTranslations('partners');
  const locale = useDetectedLocale();

  const partnerLogos = [
    { id: 1, name: 'ArtyAds', src: '/Home/Partners/artyads.svg', specialBorder: null },
    { id: 2, name: 'Network', src: '/Home/Partners/network.svg', specialBorder: 'red' },
    { id: 3, name: 'Digtal', src: '/Home/Partners/digtal.svg', specialBorder: null },
    { id: 4, name: 'KariHome', src: '/Home/Partners/karihome.svg', specialBorder: null },
    { id: 5, name: 'KariLive', src: '/Home/Partners/karilive.svg', specialBorder: 'green' },
    { id: 6, name: 'BokLite', src: '/Home/Partners/boklite.svg', specialBorder: null },
  ];

  // Helper function to get border classes
  const getBorderClasses = (specialBorder: string | null): string => {
    switch (specialBorder) {
      case 'red':
        return 'border-4 border-red-400';
      case 'green':
        return 'border-4 border-green-400';
      default:
        return 'border-2 border-gray-200';
    }
  };

  // Helper function to render partner cards
  const renderPartnerCard = (partner: typeof partnerLogos[0], isMobile = false) => (
    <div key={partner.id} className="partner-card group">
      <div className={`bg-white ${isMobile ? 'rounded-xl p-6 sm:p-8' : 'rounded-2xl p-8 xl:p-10'} shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 ${getBorderClasses(partner.specialBorder)}`}>
        <Image
          src={partner.src}
          alt={partner.name}
          width={isMobile ? 120 : 160}
          height={isMobile ? 80 : 100}
          className={`${isMobile ? 'h-14 sm:h-18' : 'h-20 xl:h-24'} w-auto mx-auto object-contain filter hover:scale-110 transition-transform duration-300`}
        />
      </div>
    </div>
  );

  return (
    <section id="partners" className="partners-section relative w-full py-20 px-6 lg:px-16 xl:px-24 overflow-hidden" data-locale={locale}>
      {/* Background circle decoration */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none z-0">
        <div className="relative h-full w-full lg:w-1/2 xl:w-2/5">
          <Image
            src="/Home/Partners/circle.svg"
            alt=""
            fill
            className="object-contain object-center lg:object-right opacity-20 lg:opacity-30"
            priority
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title and Description */}
        <div className="text-start lg:text-center mb-16 lg:mb-20">
          {/* Title */}
          <h2 className="partners-title text-green-400 mb-8 tracking-wide text-[20px] lg:text-[32px] font-semibold leading-normal lg:leading-[63px]">
            {t('title')}
          </h2>

          {/* Description */}
          <p className="partners-description text-white max-w-5xl mx-auto text-[12px] lg:text-lg font-normal lg:font-medium leading-[150%]">
            {t('description')}
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:block">
          {/* First Row - Top 3 logos */}
          <div className="flex justify-center items-center mb-12 xl:mb-16">
            <div className="flex gap-12 xl:gap-16">
              {partnerLogos.slice(0, 3).map(partner => renderPartnerCard(partner))}
            </div>
          </div>

          {/* Second Row - Bottom 3 logos with lower positioning */}
          <div className="flex justify-center items-center pt-8 xl:pt-12">
            <div className="flex gap-12 xl:gap-16">
              {partnerLogos.slice(3, 6).map(partner => renderPartnerCard(partner))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Grid */}
        <div className="lg:hidden">
          {/* First Row */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 mb-8">
            {partnerLogos.slice(0, 2).map(partner => renderPartnerCard(partner, true))}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 mb-8">
            {partnerLogos.slice(2, 4).map(partner => renderPartnerCard(partner, true))}
          </div>

          {/* Third Row - Lower position with padding */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-6 sm:pt-8">
            {partnerLogos.slice(4, 6).map(partner => renderPartnerCard(partner, true))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;