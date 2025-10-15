'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useDetectedLocale, SupportedLocale } from '@/hooks/useDetectedLocale';
import { getFontStyles } from '@/utils/fonts';
import { useResponsive } from '../../hooks';
import { LocalizedHeading, LocalizedParagraph } from '../ui/Typography';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useTranslations('faqs');
  const { mobile: isMobile, tablet: isTablet } = useResponsive();
  const locale = useDetectedLocale();
  const isRTL = locale === 'ar';

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
  ];

  return (
    <section
      id="faqs"
      className={`py-16 lg:py-24 transition-colors w-full duration-300 ${fontClass}`}
      style={{
        background: '#F6F6F6'
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <LocalizedHeading
            level={2}
            className="font-semibold mb-4 transition-colors duration-300"
            style={{
              fontSize: isMobile || isTablet ? '20px' : '32px',
              fontWeight: '600',
              lineHeight: isMobile || isTablet ? 'normal' : '63px',
              background: 'linear-gradient(180deg, #3ED178 0%, #2599BA 38.94%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {t('title')}
          </LocalizedHeading>

          <LocalizedParagraph
            className="max-w-4xl mx-auto transition-colors duration-300 text-[#556482]"
            style={{
              fontSize: isMobile ? '12px' : '18px',
              fontWeight: isMobile ? '400' : '500',
              lineHeight: isMobile ? '24px' : '32px'
            }}
          >
            {t('subtitle')}
          </LocalizedParagraph>
        </div>
      </div>

      {/* White margin around the background image */}
      <div className="w-full px-4 sm:px-8 lg:px-[120px] pb-8 lg:pb-[120px]">
        {/* Background Image Container */}
        <div className="relative w-full h-auto">
          <Image
            src="/Home/FAQ.svg"
            alt="FAQ Background"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: '100%',
              height: isMobile || isTablet ? '600px' : 'auto',
              objectFit: isMobile || isTablet ? 'cover' : 'contain'
            }}
            className="object-contain"
            priority
          />

          {/* FAQ Accordion positioned on the background */}
          <div className={`absolute inset-0 flex items-center ${isRTL ? 'justify-start pr-4 md:pr-8 lg:pr-20' : 'justify-end pr-4 md:pr-8 lg:pr-20'}`}>
            <div className={`w-[90%] sm:w-[80%] md:w-[70%] lg:w-[66%] space-y-3 overflow-y-auto ${isMobile || isTablet ? 'max-h-[700px]' : 'max-h-[90%]'}`}>
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={item.id}
                    className="group rounded-2xl relative transition-all w-full duration-300 cursor-pointer bg-white/95 backdrop-blur-sm border border-gray-200/50 shadow-md"
                    style={{
                      borderBottom: index === faqItems.length - 1 ? 'none' : '1px solid rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    {/* Question Header - Clickable */}
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full p-4 lg:p-10 focus:outline-none transition-all duration-300"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                    >
                      <div className={`flex items-center w-full justify-between`}>

                        {isRTL && (
                          <h3
                            className="font-bold transition-colors duration-300 text-black"
                            style={{
                              fontSize: isMobile ? '14px' : '20px',
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

                        {!isRTL && (
                          <h3
                            className="font-bold transition-colors duration-300 text-black"
                            style={{
                              fontSize: isMobile ? '14px' : '20px',
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

                        <div
                          className="flex-shrink-0 w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center transition-all duration-300"
                        >
                          <span
                            className="text-lg lg:text-2xl font-bold transition-transform duration-300"
                            style={{
                              background: 'linear-gradient(180deg, #3ED178 0%, #2599BA 38.94%)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text'
                            }}
                          >
                            {isOpen ? '−' : '+'}
                          </span>
                        </div>
                      </div>
                    </button>

                    {/* Answer Content - Expandable */}
                    <div
                      id={`faq-answer-${index}`}
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen
                          ? (isMobile || isTablet ? 'max-h-[400px] opacity-100' : 'max-h-[300px] opacity-100')
                          : 'max-h-0 opacity-0'
                        }`}
                    >
                      <div className="px-4 lg:px-8 pb-4 lg:pb-6 max-w-2xl">
                        <div
                          className="transition-colors duration-300 text-[#556482]"
                          style={{
                            fontSize: isMobile ? '12px' : '16px',
                            fontWeight: '400',
                            lineHeight: isMobile ? '20px' : '24px',
                            textAlign: isRTL ? 'right' : 'left',
                            fontFamily: '"IBM Plex Sans Arabic"',
                            direction: isRTL ? 'rtl' : 'ltr'
                          }}
                        >
                          {t(`questions.${index}.answer`).split('\n').map((line, lineIndex) => (
                            <div key={lineIndex} style={{ marginBottom: line.trim() === '' ? '8px' : '4px' }}>
                              {line}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;