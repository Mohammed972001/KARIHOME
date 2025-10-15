'use client';

import { useTranslations } from 'next-intl';
import { useResponsive } from '../../hooks';
import { LocalizedHeading, LocalizedParagraph } from '../ui/Typography';
import { useState } from 'react';
import Image from 'next/image';

const Hero = () => {
  const t = useTranslations('Home.hero');
  const { mobile: isMobile } = useResponsive();

  // State to manage active background
  const [activeBackground, setActiveBackground] = useState('video');

  // Background options
  const backgroundOptions = [
    {
      id: 'video',
      type: 'video',
      src: '/Home/Hero/Hero.mp4',
      thumbnail: '/Home/Hero/Hero.mp4',
      label: 'فيديو'
    },
    {
      id: 'image1',
      type: 'image',
      src: '/Home/Hero/Hero Section bg1.svg',
      thumbnail: '/Home/Hero/Hero Section bg1.svg',
      label: 'صورة 1'
    },
    {
      id: 'image2',
      type: 'image',
      src: '/Home/Hero/Hero Section bg2.svg',
      thumbnail: '/Home/Hero/Hero Section bg2.svg',
      label: 'صورة 2'
    }
  ];

  const activeItem = backgroundOptions.find(item => item.id === activeBackground);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background - Video or Image */}
      <div className="absolute inset-0 z-0">
        {activeItem?.type === 'video' ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src={activeItem.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={activeItem?.src || ''}
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        )}

        {/* Gradient overlay from right (dark) to left (transparent) */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/40 to-transparent"></div>
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
                  style={{
                    ...(index === 0 ? {
                      background: 'linear-gradient(180deg, #3ED178 0%, #2599BA 58.94%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    } : {
                      color: 'white'
                    })
                  }}
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

      {/* Background Tabs */}
      <div className="absolute bottom-20 sm:bottom-24 right-4 sm:right-6 lg:right-48 z-10">
        <div className="flex gap-2 sm:gap-3">
          {backgroundOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setActiveBackground(option.id)}
              className={`group relative overflow-hidden rounded-lg border-2 transition-all duration-300 ${activeBackground === option.id
                ? 'border-white scale-110 shadow-lg'
                : 'border-gray-400/50 hover:border-white/70 hover:scale-105 opacity-80 hover:opacity-100'
                }`}
            >
              <div className="w-16 h-12 sm:w-20 sm:h-14 bg-gray-800 relative">
                {option.type === 'video' ? (
                  <>
                    {/* Video thumbnail using poster */}
                    <video
                      muted
                      preload="metadata"
                      className="w-full h-full object-cover"
                    >
                      <source src={option.src + '#t=2'} type="video/mp4" />
                    </video>
                    {/* Video play icon overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </>
                ) : (
                  <Image
                    src={option.thumbnail}
                    alt={option.label}
                    fill
                    className="object-cover"
                    onError={() => {
                      console.log('Image failed to load:', option.thumbnail);
                    }}
                  />
                )}
              </div>

              {/* Active indicator */}
              {activeBackground === option.id && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
