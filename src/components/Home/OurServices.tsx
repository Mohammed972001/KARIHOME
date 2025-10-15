'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useDetectedLocale } from '@/hooks/useDetectedLocale';
import { getFontStyles } from '@/utils/fonts';
import Image from 'next/image';
import '@/styles/our-services.css';

const OurServices = () => {
    const t = useTranslations('ourServices');
    const locale = useDetectedLocale();
    const [activeService, setActiveService] = useState(0);

    // Create services array manually since next-intl doesn't support arrays directly
    const services = [
        {
            title: t('services.0.title'),
            description: t('services.0.description'),
            image: t('services.0.image')
        },
        {
            title: t('services.1.title'),
            description: t('services.1.description'),
            image: t('services.1.image')
        },
        {
            title: t('services.2.title'),
            description: t('services.2.description'),
            image: t('services.2.image')
        }
    ];

    const isRTL = locale === 'ar';

    return (
        <section className="relative py-16 bg-[#141C27] overflow-hidden">
            {/* Background Image */}
            <div
                className={`absolute inset-0  ${isRTL ? 'left-0' : 'right-0'
                    }`}
                style={{
                    transform: isRTL ? 'scaleX(-1)' : 'none'
                }}
            >
                <Image
                    src="/Home/OurService/OurServicebg.svg"
                    alt="Services Background"
                    fill
                    className="object-contain object-right"
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-start  md:text-center mb-16">
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6"
                        style={{
                            ...getFontStyles(locale),
                            background: 'linear-gradient(180deg, #3ED178 0%, #2599BA 38.94%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        {t('title')}
                    </h2>
                    <p
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                        style={{
                            ...getFontStyles(locale)
                        }}
                    >
                        {t('subtitle')}
                    </p>
                </div>

                {/* Services Slider */}
                <div className="relative px-8 md:px-24 lg:px-24">
                    {/* Desktop Slider Container */}
                    <div className="hidden lg:block relative h-96 md:h-[500px]">
                        <div className="flex items-center justify-center gap-6 h-full">
                            {services.map((service, index) => {
                                const isActive = index === activeService;

                                return (
                                    <div
                                        key={index}
                                        className={`relative h-full transition-all duration-700 ease-in-out cursor-pointer ${isActive ? 'z-20' : 'z-10'
                                            }`}
                                        style={{
                                            width: isActive ? '70%' : '15%',
                                            opacity: isActive ? 1 : 0.8,
                                        }}
                                        onClick={() => setActiveService(index)}
                                    >
                                        {/* Navigation Arrow - Only show on non-active slides */}
                                        {!isActive && (
                                            <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} z-30`}>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setActiveService(index);
                                                    }}
                                                    className="border-2 border-green-500 hover:border-green-600 text-green-500 hover:text-green-600 p-3 transition-all duration-300 shadow-lg"
                                                    style={{
                                                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                                        borderRadius: '4px'
                                                    }}
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d={isRTL ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        )}

                                        {/* Service Image */}
                                        <div className="relative h-full  overflow-hidden shadow-2xl">
                                            <Image
                                                src={`/Home/OurService/${service.image}`}
                                                alt={service.title}
                                                fill
                                                className="object-cover"
                                                priority={isActive}
                                            />


                                        </div>

                                        {/* Service Info Card - Only show on active slide */}
                                        {isActive && (
                                            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white w-[90%]  p-6 md:p-6 shadow-xl transition-all duration-500">
                                                <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                                                    <h3
                                                        className="text-xl md:text-2xl font-bold text-gray-800 mb-4"
                                                        style={{
                                                            ...getFontStyles(locale)
                                                        }}
                                                    >
                                                        {service.title}
                                                    </h3>
                                                    <p
                                                        className="text-gray-600 leading-relaxed text-base md:text-lg"
                                                        style={{
                                                            ...getFontStyles(locale)
                                                        }}
                                                    >
                                                        {service.description}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Mobile & Tablet Slider Container */}
                    <div className="lg:hidden relative h-[600px] md:h-[600px]">
                        <div className="flex flex-col items-center justify-center gap-4 h-full">
                            {services.map((service, index) => {
                                const isActive = index === activeService;

                                return (
                                    <div
                                        key={index}
                                        className={`relative w-full transition-all duration-700 ease-in-out cursor-pointer ${isActive ? 'z-20' : 'z-10'}`}
                                        style={{
                                            height: isActive ? '70%' : '15%',
                                            opacity: isActive ? 1 : 0.8,
                                        }}
                                        onClick={() => setActiveService(index)}
                                    >
                                        {/* Navigation Arrow - Only show on non-active slides */}
                                        {!isActive && (
                                            <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} z-30`}>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setActiveService(index);
                                                    }}
                                                    className="border-2 border-green-500 hover:border-green-600 text-green-500 hover:text-green-600 p-2 transition-all duration-300 shadow-lg"
                                                    style={{
                                                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                                        borderRadius: '4px'
                                                    }}
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M19 9l-7 7-7-7"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        )}

                                        {/* Service Image */}
                                        <div className="relative h-full  overflow-hidden shadow-2xl">
                                            <Image
                                                src={`/Home/OurService/${service.image}`}
                                                alt={service.title}
                                                fill
                                                className="object-cover"
                                                priority={isActive}
                                            />
                                        </div>

                                        {/* Service Info Card - Only show on active slide */}
                                        {isActive && (
                                            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white w-[90%]  p-4 md:p-6 shadow-xl transition-all duration-500">
                                                <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                                                    <h3
                                                        className="text-base md:text-lg font-bold text-gray-800 mb-2"
                                                        style={{
                                                            ...getFontStyles(locale)
                                                        }}
                                                    >
                                                        {service.title}
                                                    </h3>
                                                    <p
                                                        className="text-gray-600 leading-relaxed text-sm md:text-base"
                                                        style={{
                                                            ...getFontStyles(locale)
                                                        }}
                                                    >
                                                        {service.description}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
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

export default OurServices;