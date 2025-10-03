'use client';

import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import { useDetectedLocale } from '@/hooks/useDetectedLocale';
import { getFontStyles } from '@/utils/fonts';

const ServicesSection = () => {
  const { t } = useTranslation();
  const locale = useDetectedLocale();

  const services = [
    {
      icon: '/CompanyFormation/env.svg',
      title: t('CompanyFormation.services.cards.comfortable.title'),
      description: t('CompanyFormation.services.cards.comfortable.description'),
    },
    {
      icon: '/CompanyFormation/callcenter.svg',
      title: t('CompanyFormation.services.cards.support.title'),
      description: t('CompanyFormation.services.cards.support.description'),
    },
    {
      icon: '/CompanyFormation/lang.svg',
      title: t('CompanyFormation.services.cards.multilingual.title'),
      description: t('CompanyFormation.services.cards.multilingual.description'),
    },
    {
      icon: '/CompanyFormation/persone.svg',
      title: t('CompanyFormation.services.cards.remote.title'),
      description: t('CompanyFormation.services.cards.remote.description'),
    },
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16" style={{ backgroundColor: '#121212' }}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <h2
            className="mb-4 leading-normal"
            style={{
              ...getFontStyles(locale),
              fontSize: window.innerWidth < 768 ? '20px' : window.innerWidth < 1024 ? '24px' : '28px',
              fontWeight: 600,
              lineHeight: 'normal',
              color: '#ffffff'
            }}
          >
            <span style={{ color: '#21FE7B' }}>{t('CompanyFormation.services.title').split(' ')[0]}</span>
            {' '}
            <span style={{ color: '#ffffff' }}>{t('CompanyFormation.services.title').split(' ').slice(1).join(' ')}</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="relative grid grid-cols-2 max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto overflow-hidden">
          {/* Vertical line in the middle */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-[#262626] transform -translate-x-1/2 z-10"></div>
          {/* Horizontal line in the middle */}
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-[#262626] transform -translate-y-1/2 z-10"></div>

          {services.map((service, index) => (
            <div
              key={index}
              className="relative p-4 md:p-6 lg:p-10 flex flex-col items-center text-center hover:bg-gray-750 transition-colors duration-300"
            >
              {/* Icon */}

              <div className="mb-3 md:mb-4 lg:mb-6 flex gap-4 md:gap-5 lg:gap-7">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={window.innerWidth < 768 ? 30 : window.innerWidth < 1024 ? 48 : 58}
                  height={window.innerWidth < 768 ? 30 : window.innerWidth < 1024 ? 40 : 48}
                />

                <div className="flex flex-col items-start text-start justify-start space-y-3 md:space-y-4 lg:space-y-5 pt-3 md:pt-4 lg:pt-6">
                  {/* Title */}
                  <h3
                    className="items-start"
                    style={{
                      ...getFontStyles(locale),
                      fontSize: window.innerWidth < 768 ? '13px' : window.innerWidth < 1024 ? '18px' : '20px',
                      fontWeight: 600,
                      lineHeight: '175%',
                      letterSpacing: window.innerWidth < 768 ? '0.32px' : window.innerWidth < 1024 ? '0.36px' : '0.40px',
                      color: '#ffffff'
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="items-start"
                    style={{
                      ...getFontStyles(locale),
                      fontSize: window.innerWidth < 768 ? '10px' : window.innerWidth < 1024 ? '14px' : '16px',
                      fontWeight: 400,
                      lineHeight: '175%',
                      letterSpacing: window.innerWidth < 768 ? '0.24px' : window.innerWidth < 1024 ? '0.28px' : '0.32px',
                      color: '#D1D5DB'
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;