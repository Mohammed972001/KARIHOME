'use client';

import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getFontStyles } from '@/utils/fonts';
import { useDetectedLocale } from '@/hooks/useDetectedLocale';

export default function AboutUs() {
  const t = useTranslations('aboutUs');
  const locale = useDetectedLocale();
  const isRTL = locale === 'ar';
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before accessing theme
  useEffect(() => {
    setMounted(true);
  }, []);

  // Get the current theme (fallback to 'light' if not mounted)
  const currentTheme = mounted ? (resolvedTheme || theme || 'light') : 'light';
  const isDark = currentTheme === 'dark';

  // Debug: Check locale and font
  useEffect(() => {
    if (mounted) {
     
    }
  }, [mounted, locale]);

  return (
    <section 
      className={`about-us-section w-full transition-colors duration-300 ${currentTheme === 'dark' ? 'bg-black' : 'bg-white'} relative`}
      style={{
        ...(currentTheme === 'dark' && {
          backgroundImage: "url('/Home/Discover Company - Message from the CEO.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: isRTL ? 'scaleX(-1)' : 'none'
        })
      }}
    >
      {/* Container */}
      <div 
        className="container mx-auto px-4 py-10 md:py-14 lg:py-20 relative z-10"
        style={{
          transform: isRTL && currentTheme === 'dark' ? 'scaleX(-1)' : 'none'
        }}
      >
        {/* Top Section */}
        <div className="space-y-8 mb-16 lg:mb-24">
          {/* Mobile/Tablet Layout - Text always on top */}
          <div className="block lg:hidden">
            {/* Text Content */}
            <div className={`mb-8 ${isRTL ? 'flex flex-col items-start pr-4' : 'flex flex-col items-start pl-4'}`}>
              <h2 
                className="text-[20px] md:text-[24px] font-semibold mb-4 leading-normal"
                style={{
                  ...getFontStyles(locale),
                  color: '#21FE7B',
                  textAlign: isRTL ? 'right' : 'left',
                  fontWeight: 600,
                  lineHeight: 'normal'
                }}
              >
                <span style={{ color: '#21FE7B' }}>{t('title')}</span>{' '}
                <span style={{ color: isDark ? '#ffffff' : '#000000' }}>{t('titleHighlight')}</span>
              </h2>
              <p 
                className="text-[12px] md:text-[14px] leading-[24px] md:leading-[28px]"
                style={{
                  ...getFontStyles(locale),
                  color: isDark ? '#ffffff' : '#000000',
                  fontWeight: 400,
                  lineHeight: '24px',
               
                  
                }}
              >
                {t('description')}
              </p>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm image-container">
                <Image
                  src="/Home/About-us-top.svg"
                  alt="About Us"
                  width={457}
                  height={305}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Desktop Layout - Side by side */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-10 items-center">
            {/* Text Content */}
            <div className={`${isRTL ? 'order-1 flex flex-col items-start' : 'order-1 flex flex-col items-start'}`}>
              <h2 
                className="font-semibold mb-6 leading-normal"
                style={{
                  ...getFontStyles(locale),
                  color: '#21FE7B',
                   textAlign: isRTL ? 'right' : 'left',
                  fontSize: '32px',
                  fontWeight: 600,
                  lineHeight: 'normal'
                }}
              >
                <span style={{ color: '#21FE7B' }}>{t('title')}</span>{' '}
                <span style={{ color: isDark ? '#ffffff' : '#000000' }}>{t('titleHighlight')}</span>
              </h2>
              <p 
                className="   "
                style={{
                  ...getFontStyles(locale),
                  color: isDark ? '#ffffff' : '#000000',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: '32px',
          
                }}
              >
                {t('description')}
              </p>
            </div>

            {/* Image */}
            <div className={`${isRTL ? 'order-2' : 'order-2'} flex ${isRTL ? 'justify-end' : 'justify-end'}`}>
              <div className="relative w-full max-w-lg image-container">
                <Image
                  src="/Home/About-us-top.svg"
                  alt="About Us"
                  width={457}
                  height={305}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - CEO Message */}
        <div className="space-y-8">
          {/* Mobile/Tablet Layout - Text always on top */}
          <div className="block lg:hidden">
            {/* Text Content */}
            <div className={`mb-8 ${isRTL ? 'flex flex-col items-start pr-4' : 'flex flex-col items-start pl-4'}`}>
              <h3 
                className="text-[20px] md:text-[24px] font-semibold mb-4 leading-normal"
                style={{
                  ...getFontStyles(locale),
                  color: '#21FE7B',
                  fontWeight: 600,
                  lineHeight: 'normal'
                }}
              >
                <span style={{ color: '#21FE7B' }}>{t('ceoMessage.title').split(' ').slice(0, 1).join(' ')}</span>{' '}
                <span style={{ color: isDark ? '#ffffff' : '#000000' }}>{t('ceoMessage.title').split(' ').slice(1).join(' ')}</span>
              </h3>
              <p 
                className="text-[12px] md:text-[14px] leading-[24px] md:leading-[28px] mb-6"
                style={{
                  ...getFontStyles(locale),
                  color: isDark ? '#ffffff' : '#000000',
               
                  fontWeight: 400,
                  lineHeight: '24px',
             
                }}
              >
                {t('ceoMessage.content')}
              </p>
              
              {/* CEO Signature */}
              <div className="space-y-2">
                <p 
                  className="text-[14px] md:text-[16px] font-semibold"
                  style={{
                    ...getFontStyles(locale),
                    color: isDark ? '#ffffff' : '#000000',
                   
                  }}
                >
                  {t('ceoMessage.signature')}
                </p>
                <p 
                  className="text-[12px] md:text-[14px]"
                  style={{
                    ...getFontStyles(locale),
                    color: isDark ? '#ffffff' : '#000000',
                   
                  }}
                >
                  {t('ceoMessage.position')}
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm image-container">
                <Image
                  src="/Home/About-us-bot.svg"
                  alt="CEO Message"
                  width={525}
                  height={345}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Desktop Layout - Side by side */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className={`${isRTL ? 'order-1' : 'order-1'} flex ${isRTL ? 'justify-start' : 'justify-start'}`}>
              <div className="relative w-full max-w-lg image-container">
                <Image
                  src="/Home/About-us-bot.svg"
                  alt="CEO Message"
                  width={525}
                  height={345}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* CEO Message Content */}
            <div className={`${isRTL ? 'order-2 flex flex-col items-srart' : 'order-2 flex flex-col items-start'}`}>
              <h3 
                className="font-semibold mb-6 leading-normal"
                style={{
                  ...getFontStyles(locale),
                  color: '#21FE7B',
                  textAlign: isRTL ? 'right' : 'left',
                  fontSize: '32px',
                  fontWeight: 600,
                  lineHeight: 'normal'
                }}
              >
                <span style={{ color: '#21FE7B' }}>{t('ceoMessage.title').split(' ').slice(0, 1).join(' ')}</span>{' '}
                <span style={{ color: isDark ? '#ffffff' : '#000000' }}>{t('ceoMessage.title').split(' ').slice(1).join(' ')}</span>
              </h3>
              <p 
                className="mb-8"
                style={{
                  ...getFontStyles(locale),
                  color: isDark ? '#ffffff' : '#000000',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: '32px',
                
                }}
              >
                {t('ceoMessage.content')}
              </p>
              
              {/* CEO Signature */}
              <div className="space-y-2">
                <p 
                  className="text-lg font-semibold"
                  style={{
                    ...getFontStyles(locale),
                    color: isDark ? '#ffffff' : '#000000',
                 
                  }}
                >
                  {t('ceoMessage.signature')}
                </p>
                <p 
                  className="text-base"
                  style={{
                    ...getFontStyles(locale),
                    color: isDark ? '#ffffff' : '#000000',
                  
                  }}
                >
                  {t('ceoMessage.position')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}