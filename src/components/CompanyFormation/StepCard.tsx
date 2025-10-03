'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { getFontStyles } from '@/utils/fonts';
import { SupportedLocale } from '@/hooks/useDetectedLocale';

interface StepCardProps {
    stepNumber: string;
    title: string;
    description: string;
    imageSrc: string;
    locale: SupportedLocale;
}

export default function StepCard({ stepNumber, title, description, imageSrc, locale }: StepCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === 'dark';

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="overflow-hidden">
            {/* Header with number, title, and arrow */}
            <div
                className="flex items-center justify-between p-2 md:p-4 lg:p-6 cursor-pointer transition-colors duration-300"
                style={{
                    borderBottom: `1px solid ${isDark ? '#404040' : '#f0f0f0'}`,
                }}
                onClick={toggleExpanded}
            >
                <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
                    {/* Step Number */}
                    <div className="step-number flex items-center justify-center w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-[#00C851] rounded-full text-xs md:text-lg lg:text-2xl font-semibold">
                        {stepNumber.padStart(2, '0')}
                    </div>

                    {/* Title */}
                    <h3
                        className="step-title font-semibold leading-normal text-[10px] md:text-sm lg:text-lg"
                        style={{
                            ...getFontStyles(locale),
                            color: isDark ? '#ffffff' : '#1f2937',
                        }}
                    >
                        {title}
                    </h3>
                </div>

                {/* Arrow */}
                <div className={`arrow transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                    <Image
                        src="/CompanyFormation/steps/arrow-down.svg"
                        alt="Toggle arrow"
                        width={20}
                        height={15}
                        className="text-[#00C851] md:w-[30px] md:h-[18px] lg:w-[40px] lg:h-[24px]"
                    />
                </div>
            </div>

            {/* Collapsible Content */}
            <div className={`step-content transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-none pb-2 md:pb-4 lg:pb-6' : 'max-h-0'}`}>
                {/* Image */}
                <div className="px-2 md:px-4 lg:px-6 mb-2 md:mb-3 lg:mb-4">
                    <div
                        className="step-image relative w-full mt-1 md:mt-2 lg:mt-3 aspect-video rounded-md md:rounded-lg overflow-hidden shadow-md md:shadow-lg border"
                        style={{ backgroundColor: isDark ? '#1a1a1a' : '#f8f9fa' }}
                    >
                        <Image
                            src={imageSrc}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="px-2 md:px-4 lg:px-6">
                    <p
                        className="step-description font-normal leading-relaxed text-[8px] md:text-xs lg:text-sm"
                        style={{
                            ...getFontStyles(locale),
                            letterSpacing: '0.24px',
                            color: isDark ? '#d1d5db' : '#6b7280',
                        }}
                    >
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}