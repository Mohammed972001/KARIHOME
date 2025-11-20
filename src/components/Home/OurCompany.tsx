'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
import { getFontStyles } from '@/utils/fonts';
import { useDetectedLocale } from '@/hooks/useDetectedLocale';
import { useResponsive } from '@/hooks/useResponsive';

export default function OurCompany() {
    const t = useTranslations('ourCompany');
    const locale = useDetectedLocale();
    const isRTL = locale === 'ar';
    const { isSmall, isMedium, isLarge } = useResponsive();

    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    // Get responsive font size
    const getFontSize = () => {
        if (isLarge) return 24;
        if (isMedium) return 18;
        if (isSmall) return 14;
        return 12;
    };

    // Get responsive max height
    const getMaxHeight = () => {
        if (isSmall) return '120px';
        if (isMedium) return '80px';
        return 'auto';
    };

    const accordionItems = [
        {
            title: t('vision.title'),
            content: t('vision.content'),
            icon: '/Home/Ourcompany/OurVision.svg'
        },
        {
            title: t('values.title'),
            content: t('values.content'),
            icon: '/Home/Ourcompany/OurValues.svg'
        },
        {
            title: t('commitment.title'),
            content: t('commitment.content'),
            icon: '/Home/Ourcompany/Commitment.svg'
        }
    ];

    return (
        <section className="our-company-section relative w-full bg-white">
            {/* Header Section - Outside the background image */}
            <div className="container mx-auto px-4 py-8">
                <div className={`text-center mb-8 ${isRTL ? 'text-right' : 'text-left'} md:text-center`}>
                    <h2
                        className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
                        style={{
                            ...getFontStyles(locale),
                            fontWeight: 700,
                        }}
                    >
                        <span style={{
                            background: 'linear-gradient(180deg, #3ED178 0%, #2599BA 58.94%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            {t('title').split(' ')[0]}
                        </span>{' '}
                        <span style={{ color: '#000000' }}>
                            {t('title').split(' ').slice(1).join(' ')}
                        </span>
                    </h2>
                    <p
                        className="text-base md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed"
                        style={{
                            ...getFontStyles(locale),
                            color: '#556482',
                            fontWeight: 400,
                            lineHeight: '1.8',
                        }}
                    >
                        {t('subtitle')}
                    </p>
                </div>
            </div>

            {/* White margin around the background image */}
            <div className="w-full px-[120px] pb-[120px] " >
                {/* Background Image Container */}
                <div className="relative w-full h-auto">
                    <Image
                        src="/Home/Ourcompany/OurCompanybg.svg"
                        alt="Our Company Background"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        className="object-contain"
                        priority
                    />

                    {/* Cards positioned on the right side */}
                    <div className={`absolute inset-0 flex items-center  ${isRTL ? 'justify-start pr-4 md:pr-8 lg:pr-16' : 'justify-end pr-4 md:pr-8 lg:pr-16'}`}>
                        <div className="w-[65%] sm:w-[40%] md:w-[40%] lg:w-[36%] space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6 max-h-[90%] overflow-y-auto">
                            {accordionItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="accordion-card  bg-white/95 backdrop-blur-none  border border-gray-200 shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
                                >
                                    {/* Accordion Header */}
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className={`w-full px-2 py-2 sm:px-3 sm:py-2 md:px-3 md:py-4 lg:py-8 flex items-center justify-between  transition-colors duration-200 hover:bg-gray-50 cursor-pointer ${isRTL ? 'flex-row-reverse' : 'flex-row'
                                            }`}
                                    >
                                        {/* Accordion Arrow */}
                                        <div
                                            className={`transform transition-transform duration-200 ${activeAccordion === index ? 'rotate-180' : 'rotate-0'
                                                } ${isRTL ? 'scale-x-[-1]' : ''}`}
                                        >
                                            <svg
                                                width="16"
                                                height="16"
                                                className="sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-[25px] lg:h-[40px]"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <defs>
                                                    <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                        <stop offset="0%" stopColor="#3ED178" />
                                                        <stop offset="58.94%" stopColor="#2599BA" />
                                                    </linearGradient>
                                                </defs>
                                                <path
                                                    d="M5 7.5L10 12.5L15 7.5"
                                                    stroke="url(#arrowGradient)"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <div className={`flex items-center justify-start gap-2 sm:gap-3 md:gap-4 lg:gap-5 ${isRTL ? 'flex-row' : 'flex-row-reverse'}`}>
                                            <div className="w-4 h-4 sm:w-4 sm:h-4 md:w-10 md:h-10 flex items-center justify-center">
                                                <Image
                                                    src={item.icon}
                                                    alt={item.title}
                                                    width={60}
                                                    height={40}
                                                    className="object-contain w-full h-full"
                                                />
                                            </div>
                                            <h3
                                                className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold"
                                                style={{
                                                    ...getFontStyles(locale),
                                                    background: 'linear-gradient(180deg, #3ED178 0%, #2599BA 58.94%)',
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                    backgroundClip: 'text',
                                                    fontWeight: 600,
                                                    fontSize: getFontSize(),
                                                }}
                                            >
                                                {item.title}
                                            </h3>
                                        </div>


                                    </button>

                                    {/* Accordion Content */}
                                    <div
                                        className={`accordion-content overflow-hidden transition-all duration-300 ${activeAccordion === index ? 'max-h-[200px] sm:max-h-[150px] md:max-h-[120px] lg:max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <div className="px-2 pb-2 sm:px-3 sm:pb-3 md:px-4 md:pb-4">
                                            <div className="w-8 sm:w-10 md:w-12 h-px bg-gradient-to-r from-blue-500 to-green-500 mb-2 sm:mb-3"></div>
                                            <p
                                                className="leading-relaxed text-xs sm:text-xs md:text-sm lg:text-sm overflow-y-auto"
                                                style={{
                                                    ...getFontStyles(locale),
                                                    color: '#556482',
                                                    fontWeight: 400,
                                                    lineHeight: '1.4',
                                                    textAlign: isRTL ? 'right' : 'left',
                                                    maxHeight: getMaxHeight(),
                                                }}
                                            >
                                                {item.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}