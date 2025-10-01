'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useDetectedLocale, SupportedLocale } from '@/hooks/useDetectedLocale';
import { getFontStyles } from '@/utils/fonts';
import { useResponsive } from '../../hooks';
import { LocalizedHeading, LocalizedParagraph } from '../ui/Typography';

const FAQs = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useTranslations('faqs');
  const { mobile: isMobile, tablet: isTablet } = useResponsive();
  const locale = useDetectedLocale();
  const isRTL = locale === 'ar';

  // Ensure component is mounted before accessing theme
  useEffect(() => {
    setMounted(true);
  }, []);

  // Get the current theme (fallback to 'light' if not mounted)
  const currentTheme = mounted ? (resolvedTheme || theme || 'light') : 'light';
  const isDark = currentTheme === 'dark';

  // Get font styles for current locale
  const fontClass = getFontStyles(locale as SupportedLocale);

  // Toggle accordion item
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // FAQ data - we'll have the questions/answers from translations
  const faqItems = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ];

  return (
    <section
      className={`py-16 lg:py-24 transition-colors w-full duration-300 ${fontClass}`}
      style={{
        background: isDark 
          ? 'linear-gradient(205deg, rgba(24, 188, 106, 0.20) -0.45%, rgba(8, 100, 54, 0.00) 104.96%)'
          : '#F6F6F6'
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <LocalizedHeading
            level={2}
            className={`font-semibold mb-4 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-black'
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
            className={`max-w-4xl mx-auto transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-black'
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

        {/* FAQ Accordion */}
        <div className="space-y-0 max-w-7xl" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.id}
                className="group relative transition-all w-full duration-300 cursor-pointer"
                style={{
                  backgroundColor: 'transparent',
                  borderBottom: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)'
                }}
              >
                {/* Question Header - Clickable */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full  p-6 lg:p-8 focus:outline-none transition-all duration-300"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className={`flex items-center w-full justify-between`}>
                    {/* في العربية: النص في اليمين أولاً */}
                    {isRTL && (
                      <h3
                        className={`font-bold transition-colors duration-300 ${
                          isDark ? 'text-white' : 'text-black'
                        }`}
                        style={{
                          fontSize: isMobile ? '16px' : '25px',
                          fontWeight: isMobile ? '500' : '600',
                          lineHeight: 'normal',
                          textAlign: 'right',
                          fontFamily: '"IBM Plex Sans Arabic"',
                          direction: 'rtl'
                        }}
                      >
                        {t(`questions.${index}.question`)}
                      </h3>
                    )}

                    {/* في الإنجليزية: النص في الشمال أولاً */}
                    {!isRTL && (
                      <h3
                        className={`font-bold transition-colors duration-300 ${
                          isDark ? 'text-white' : 'text-black'
                        }`}
                        style={{
                          fontSize: isMobile ? '16px' : '25px',
                          fontWeight: isMobile ? '500' : '600',
                          lineHeight: 'normal',
                          textAlign: 'left',
                          fontFamily: '"IBM Plex Sans Arabic"',
                          direction: 'ltr'
                        }}
                      >
                        {t(`questions.${index}.question`)}
                      </h3>
                    )}

                    {/* في العربية: العلامة في الشمال */}
                    {isRTL && (
                      <div 
                        className={`flex-shrink-0 w-8 h-8 flex items-center justify-center transition-all duration-300 ${
                          isDark ? 'text-white' : 'text-black'
                        }`}
                      >
                        <span className="text-2xl font-bold transition-transform duration-300">
                          {isOpen ? '−' : '+'}
                        </span>
                      </div>
                    )}

                    {/* في الإنجليزية: العلامة في اليمين */}
                    {!isRTL && (
                      <div 
                        className={`flex-shrink-0 w-8 h-8 flex items-center justify-center transition-all duration-300 ${
                          isDark ? 'text-white' : 'text-black'
                        }`}
                      >
                        <span className="text-2xl font-bold transition-transform duration-300">
                          {isOpen ? '−' : '+'}
                        </span>
                      </div>
                    )}
                  </div>
                </button>

                {/* Answer Content - Expandable */}
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                    <p
                      className={`transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-black'
                      }`}
                      style={{
                        fontSize: isMobile ? '12px' : '20px',
                        fontWeight: '400',
                        lineHeight: isMobile ? '24px' : 'normal',
                        textAlign: isRTL ? 'right' : 'left',
                        fontFamily: '"IBM Plex Sans Arabic"',
                        direction: isRTL ? 'rtl' : 'ltr'
                      }}
                    >
                      {t(`questions.${index}.answer`)}
                    </p>
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

export default FAQs;