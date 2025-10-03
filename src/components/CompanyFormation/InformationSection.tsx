'use client';

import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getFontStyles } from '@/utils/fonts';
import { useDetectedLocale } from '@/hooks/useDetectedLocale';

export default function InformationSection() {
    const t = useTranslations('companyFormation.informationSection');
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

    return (
        <section
            className={`w-full transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-white'} relative`}
            style={{
                ...(isDark && {
                    backgroundColor: '#000000',
                }),
                ...(!isDark && {
                    backgroundColor: '#ffffff',
                })
            }}
        >
            {/* Container */}
            <div className="container mx-auto px-4 py-10 md:py-14 lg:py-20 relative z-10">

                {/* First Section */}
                <div className="space-y-8 mb-16 lg:mb-24">
                    {/* Mobile/Tablet Layout - Text always on top */}
                    <div className="block lg:hidden">
                        {/* Text Content */}
                        <div className={`mb-8 ${isRTL ? 'flex flex-col items-start pr-4' : 'flex flex-col items-start pl-4'}`}>
                            <p
                                className="mb-6"
                                style={{
                                    ...getFontStyles(locale),
                                    color: isDark ? '#ffffff' : '#000000',
                                    fontSize: '12px',
                                    fontWeight: 400,
                                    lineHeight: '24px',
                                    textAlign: isRTL ? 'right' : 'left'
                                }}
                            >
                                {t('firstPart.description')}
                            </p>

                            {/* Features List */}
                            <ul className="space-y-2">
                                {t.raw('firstPart.features').map((feature: string, index: number) => (
                                    <li
                                        key={index}
                                        className="flex items-start "
                                        style={{
                                            ...getFontStyles(locale),
                                            color: isDark ? '#ffffff' : '#000000',
                                            fontSize: '12px',
                                            fontWeight: 400,
                                            lineHeight: '24px',
                                            textAlign: isRTL ? 'right' : 'left'
                                        }}
                                    >
                                        <span className="mr-2 " style={{ color: '#21FE7B' }}>•</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Image */}
                        <div className="flex justify-center">
                            <div className="relative w-full max-w-sm image-container">
                                <Image
                                    src="/CompanyFormation/top.svg"
                                    alt="Company Information"
                                    width={457}
                                    height={305}
                                    className="w-full h-auto object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Desktop Layout - Side by side */}
                    <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-start">
                        {/* Text Content */}
                        <div className={`${isRTL ? 'order-1 flex flex-col items-start' : 'order-1 flex flex-col items-start'}`}>
                            <p
                                className="mb-6"
                                style={{
                                    ...getFontStyles(locale),
                                    color: isDark ? '#ffffff' : '#000000',
                                    fontSize: '18px',
                                    fontWeight: 400,
                                    lineHeight: '32px',
                                    textAlign: isRTL ? 'right' : 'left'
                                }}
                            >
                                {t('firstPart.description')}
                            </p>

                            {/* Features List */}
                            <ul className="space-y-2">
                                {t.raw('firstPart.features').map((feature: string, index: number) => (
                                    <li
                                        key={index}
                                        className="flex items-start"
                                        style={{
                                            ...getFontStyles(locale),
                                            color: isDark ? '#ffffff' : '#000000',
                                            fontSize: '18px',
                                            fontWeight: 400,
                                            lineHeight: '32px',
                                            textAlign: isRTL ? 'right' : 'left'
                                        }}
                                    >
                                        <span className="mx-3" style={{ color: '#21FE7B' }}>•</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Image */}
                        <div className={`${isRTL ? 'order-2' : 'order-2'} flex ${isRTL ? 'justify-end' : 'justify-end'}`}>
                            <div className="relative w-full max-w-lg image-container">
                                <Image
                                    src="/CompanyFormation/top.svg"
                                    alt="Company Information"
                                    width={457}
                                    height={305}
                                    className="w-full h-auto object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Section */}
                <div className="space-y-8">
                    {/* Mobile/Tablet Layout - Text always on top */}
                    <div className="block lg:hidden">
                        {/* Text Content */}
                        <div className={`mb-8 ${isRTL ? 'flex flex-col items-start pr-4' : 'flex flex-col items-start pl-4'}`}>
                            <h3
                                className="mb-4"
                                style={{
                                    ...getFontStyles(locale),
                                    color: '#21FE7B',
                                    fontSize: '20px',
                                    fontWeight: 600,
                                    lineHeight: '32px',
                                    textAlign: isRTL ? 'right' : 'left'
                                }}
                            >
                                <span style={{ color: '#21FE7B' }}>{t('secondPart.title')}</span>{' '}
                                <span style={{ color: isDark ? '#ffffff' : '#000000' }}>{t('secondPart.titleHighlight')}</span>
                            </h3>
                            <p
                                className="mb-6"
                                style={{
                                    ...getFontStyles(locale),
                                    color: isDark ? '#ffffff' : '#000000',
                                    fontSize: '12px',
                                    fontWeight: 400,
                                    lineHeight: '24px',
                                    textAlign: isRTL ? 'right' : 'left'
                                }}
                            >
                                {t('secondPart.description')}
                            </p>
                        </div>

                        {/* Image */}
                        <div className="flex justify-center">
                            <div className="relative w-full max-w-sm image-container">
                                <Image
                                    src="/CompanyFormation/bottom.svg"
                                    alt="LLC Overview"
                                    width={525}
                                    height={345}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Desktop Layout - Side by side */}
                    <div className="hidden lg:grid lg:grid-cols-2 md:gap-5 xl:gap-0 items-center">
                        {/* Image */}
                        <div className={`${isRTL ? 'order-1' : 'order-1'} flex ${isRTL ? 'justify-start' : 'justify-start'}`}>
                            <div className="relative w-full max-w-lg image-container">
                                <Image
                                    src="/CompanyFormation/bottom.svg"
                                    alt="LLC Overview"
                                    width={500}
                                    height={345}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className={`${isRTL ? 'order-2 flex flex-col items-start' : 'order-2 flex flex-col items-start'}`}>
                            <h3
                                className="mb-6"
                                style={{
                                    ...getFontStyles(locale),
                                    color: '#21FE7B',
                                    textAlign: isRTL ? 'right' : 'left',
                                    fontSize: '32px',
                                    fontWeight: 600,
                                    lineHeight: '56px'
                                }}
                            >
                                <span style={{ color: '#21FE7B' }}>{t('secondPart.title')}</span>{' '}
                                <span style={{ color: isDark ? '#ffffff' : '#000000' }}>{t('secondPart.titleHighlight')}</span>
                            </h3>
                            <p
                                className="mb-8"
                                style={{
                                    ...getFontStyles(locale),
                                    color: isDark ? '#ffffff' : '#000000',
                                    fontSize: '18px',
                                    fontWeight: 400,
                                    lineHeight: '32px',
                                    textAlign: isRTL ? 'right' : 'left'
                                }}
                            >
                                {t('secondPart.description')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}