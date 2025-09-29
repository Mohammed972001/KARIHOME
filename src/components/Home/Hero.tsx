'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useResponsive } from '../../hooks';
import { LocalizedHeading, LocalizedParagraph, LocalizedButton } from '../ui/Typography';

const Hero = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations('Home.hero');
  const { mobile: isMobile } = useResponsive();
  

  // Ensure component is mounted before accessing theme
  useEffect(() => {
    setMounted(true);
  }, []);

  // Get the current theme (fallback to 'light' if not mounted)
  const currentTheme = mounted ? (resolvedTheme || theme || 'light') : 'light';
  
  // Choose video based on theme
  const videoSrc = currentTheme === 'dark' 
    ? '/Home/Hero/herodark.mp4' 
    : '/Home/Hero/herolight.mp4';

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          key={currentTheme} // Force re-render when theme changes
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Gradient overlay from right (dark) to left (transparent) */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/40 to-transparent dark:from-black/80 dark:via-black/50 dark:to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          {/* Main Title */}
          <LocalizedHeading
            level={1}
            className="font-semibold leading-none text-white"
            style={{
              fontSize: isMobile ? '24px' : '48px',
              lineHeight: '100%',
              fontWeight: '600'
            }}
          >
            <span className="block">
              {t('title').split(' ').map((word, index) => (
                <span 
                  key={index}
                  style={{ color: index === 2 ? '#21FE7B' : 'white' }}
                >
                  {word}
                  {index < t('title').split(' ').length - 1 && ' '}
                </span>
              )).slice(0, 5)}
            </span>
            <span className="block mt-1 sm:mt-2">
              {t('title').split(' ').slice(5, 8).join(' ')}
            </span>
          </LocalizedHeading>

          {/* Subtitle */}
          <LocalizedParagraph
            className="mt-4 sm:mt-6 max-w-4xl text-sm text-gray-200 sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[18px] leading-relaxed"
          >
            {t('subtitle')}
          </LocalizedParagraph>

          {/* CTA Buttons */}
          <div className="mt-6 sm:mt-8 md:mt-10 flex">
            <div className="flex sm:flex-row items-center gap-3 sm:gap-4">
              <LocalizedButton
                className="group flex items-center justify-center gap-2 sm:gap-3 bg-white px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-gray-900 transition-all duration-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 w-full sm:w-auto min-w-[200px] sm:min-w-[250px]"
              >
                {t('cta')}
              </LocalizedButton>
              
              <LocalizedButton
                className="group flex items-center justify-center gap-2 sm:gap-3 bg-[#21FE7B] px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-white transition-all duration-300 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 w-auto"
              >
                <svg 
                  className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" 
                  fill="none" 
                  stroke="black" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </LocalizedButton>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="animate-bounce">
          <svg 
            className="h-5 w-5 sm:h-6 sm:w-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
