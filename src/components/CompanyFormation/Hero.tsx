'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useResponsive } from '../../hooks';
import { LocalizedHeading, LocalizedParagraph } from '../ui/Typography';

const CompanyFormationHero = () => {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const t = useTranslations('CompanyFormation.hero');
    const { mobile: isMobile } = useResponsive();


    // Ensure component is mounted before accessing theme
    useEffect(() => {
        setMounted(true);
    }, []);

    // Get the current theme (fallback to 'light' if not mounted)
    const currentTheme = mounted ? (resolvedTheme || theme || 'light') : 'light';

    // Use the CompanyFormation video
    const videoSrc = '/CompanyFormation/CompanyFormationHero.mp4';

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

                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
            </div>

            {/* Content - Centered both horizontally and vertically */}
            <div className="relative z-10 flex min-h-screen items-center justify-center pt-45 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-4xl text-center">
                    {/* Main Title */}
                    <LocalizedHeading
                        level={1}
                        className="font-semibold leading-tight text-white"
                        style={{
                            fontSize: isMobile ? '28px' : '46px',
                            lineHeight: '110%',
                            fontWeight: '600'
                        }}
                    >
                        <span className="block">
                            {t('title').split(' ').map((word, index) => (
                                <span
                                    key={index}
                                    style={{ color: index === 2 || index === 3 ? '#21FE7B' : 'white' }}
                                >
                                    {word}
                                    {index < t('title').split(' ').length - 1 && ' '}
                                </span>
                            ))}
                        </span>
                    </LocalizedHeading>

                    {/* Subtitle */}
                    <LocalizedParagraph
                        className="mt-6 sm:mt-8 mx-auto max-w-5xl text-lg text-gray-200 sm:text-xl md:text-2xl leading-relaxed"
                    >
                        {t('subtitle')}
                    </LocalizedParagraph>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-6 sm:bottom-8 left-1/2 z-10 -translate-x-1/2">
                <div className="animate-bounce">
                    <svg
                        className="h-6 w-6 text-white"
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

export default CompanyFormationHero;