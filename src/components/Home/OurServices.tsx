'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useDetectedLocale, SupportedLocale } from '@/hooks/useDetectedLocale';
import { getFontStyles } from '@/utils/fonts';
import { useResponsive } from '../../hooks';
import { LocalizedHeading, LocalizedParagraph } from '../ui/Typography';
import Image from 'next/image';

const OurServices = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations('ourServices');
  const { mobile: isMobile, tablet: isTablet } = useResponsive();
  const locale = useDetectedLocale();

  // Ensure component is mounted before accessing theme
  useEffect(() => {
    setMounted(true);
  }, []);

  // Get the current theme (fallback to 'light' if not mounted)
  const currentTheme = mounted ? (resolvedTheme || theme || 'light') : 'light';
  const isDark = currentTheme === 'dark';

  // Get font styles for current locale
  const fontClass = getFontStyles(locale as SupportedLocale);

  // Services data
  const services = [
    { id: 1, image: '/Home/Our Services/1.svg' },
    { id: 2, image: '/Home/Our Services/2.svg' },
    { id: 3, image: '/Home/Our Services/3.svg' },
    { id: 4, image: '/Home/Our Services/4.svg' },
    { id: 5, image: '/Home/Our Services/5.svg' },
  ];

  return (
    <section
      id="services"
      className={`py-16 lg:py-24 transition-colors duration-300 ${fontClass}`}
      style={{
        background: isDark
          ? 'linear-gradient(205deg, rgba(24, 188, 106, 0.20) -0.45%, rgba(8, 100, 54, 0.00) 104.96%)'
          : '#F6F6F6'
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <LocalizedHeading
            level={2}
            className={`font-semibold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'
              }`}
            style={{
              fontSize: isMobile || isTablet ? '20px' : '32px',
              fontWeight: '600',
              lineHeight: isMobile || isTablet ? 'normal' : '63px'
            }}
          >
            <span>{t('title').split(' ').slice(0, -1).join(' ')}</span>{' '}
            <span style={{ color: '#29B04D' }}>
              {t('title').split(' ').slice(-1)}
            </span>
          </LocalizedHeading>

          <LocalizedParagraph
            className={`max-w-4xl  mx-auto transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'
              }`}
            style={{
              fontSize: isMobile ? '12px' : '18px',
              fontWeight: isMobile ? '400' : '500',
              lineHeight: isMobile ? '24px' : '32px'
            }}
          >
            {t('subtitle')}
          </LocalizedParagraph>
        </div>

        {/* Services */}
        <div className="space-y-6 lg:space-y-8">
          {services.map((service, index) => {
            // First 3 cards styling for dark mode
            const isFirstThree = index < 3;

            const cardBgColor = isDark
              ? isFirstThree
                ? 'rgba(0, 0, 0, 0.30)'
                : 'rgba(255, 255, 255, 0.05)'
              : 'white';

            // Alternate layout for desktop
            const isEven = index % 2 === 0;
            const isRTL = locale === 'ar';

            return (
              <div
                key={service.id}
                className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: cardBgColor,
                  borderRadius: '16px',
                  border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.05)'
                }}
              >
                {/* Desktop Layout */}
                <div className={`
                  hidden md:flex items-center  p-6 lg:p-10
                  ${isRTL
                    ? (isEven ? 'flex-row' : 'flex-row-reverse')
                    : (isEven ? 'flex-row' : 'flex-row-reverse')
                  }
                `}>
                  <div className="flex-1 " style={{ flex: '1', paddingRight: '2rem' }}>
                    <LocalizedHeading
                      level={3}
                      className={`font-semibold mb-4 transition-colors duration-300 text-start ${isDark ? 'text-white' : 'text-black'
                        }`}
                      style={{
                        fontSize: '32px',
                        fontWeight: '600',
                        lineHeight: '63px'
                      }}
                    >
                      <span style={{ color: '#29B04D' }}>
                        {t(`services.${index}.title`).split(' ').slice(0, 2).join(' ')}
                      </span>{' '}
                      <span>{t(`services.${index}.title`).split(' ').slice(2).join(' ')}</span>
                    </LocalizedHeading>

                    <LocalizedParagraph
                      className={`transition-colors duration-300 text-start ${isDark ? 'text-white' : 'text-black'
                        }`}
                      style={{
                        fontSize: '16px',
                        fontWeight: '500',
                        lineHeight: '32px'
                      }}
                    >
                      {t(`services.${index}.description`)}
                    </LocalizedParagraph>
                  </div>

                  {/* Image - Takes 1/3 of the space */}
                  <div className="flex-1" style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                      src={service.image}
                      alt={`Service ${service.id}`}
                      width={350}
                      height={350}
                      className="object-contain"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden p-6">
                  {/* Image on top */}
                  <div className="mb-6 flex justify-center w-full">
                    <Image
                      src={service.image}
                      alt={`Service ${service.id}`}
                      width={400}
                      height={400}
                      className="object-contain"
                      style={{ width: '100%', maxWidth: '100%', height: 'auto' }}
                    />
                  </div>

                  {/* Text below */}
                  <div className="text-start">
                    <LocalizedHeading
                      level={3}
                      className={`font-semibold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'
                        }`}
                      style={{
                        fontSize: '20px',
                        fontWeight: '600',
                        lineHeight: 'normal'
                      }}
                    >
                      <span style={{ color: '#29B04D' }}>
                        {t(`services.${index}.title`).split(' ').slice(0, 2).join(' ')}
                      </span>{' '}
                      <span>{t(`services.${index}.title`).split(' ').slice(2).join(' ')}</span>
                    </LocalizedHeading>

                    <LocalizedParagraph
                      className={`transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'
                        }`}
                      style={{
                        fontSize: '12px',
                        fontWeight: '400',
                        lineHeight: '24px'
                      }}
                    >
                      {t(`services.${index}.description`)}
                    </LocalizedParagraph>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServices;