'use client';

import Image from 'next/image';
import { SupportedLocale } from '@/hooks/useDetectedLocale';
import { getFontStyles } from '@/utils/fonts';

interface ContactCardProps {
    icon: string;
    title: string;
    description: string;
    locale: SupportedLocale;
    isRTL: boolean;
    isInline?: boolean; // New prop to control layout
}

export default function ContactCard({
    icon,
    title,
    description,
    locale,
    isRTL,
    isInline = false
}: ContactCardProps) {
    return (
        <div
            className="px-4 md:px-8 py-4 md:py-6 flex flex-col items-start justify-start text-start h-24 w-full"
        >
            {isInline ? (
                // Inline layout: Icon, Title, and Description on same line
                <div className="flex items-center gap-2 w-full">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                        <Image
                            src={icon}
                            alt={title}
                            width={32}
                            height={32}
                            className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] object-contain"
                        />
                    </div>

                    {/* Title */}
                    <h3
                        className="text-white font-semibold text-base md:text-xl"
                        style={{
                            ...getFontStyles(locale),
                            fontWeight: 600,
                            textAlign: 'start'
                        }}
                    >
                        {title}
                    </h3>

                    {/* Description on same line */}
                    <p
                        className="text-xs md:text-sm leading-relaxed flex-1"
                        style={{
                            ...getFontStyles(locale),
                            color: '#ffffff',
                            fontWeight: 400,
                            textAlign: isRTL ? 'right' : 'left'
                        }}
                    >
                        {description}
                    </p>
                </div>
            ) : (
                // Default layout: Icon and Title on first line, Description below
                <>
                    {/* Icon and Title Row */}
                    <div className="flex items-center gap-2 mb-2 md:mb-4 w-full">
                        {/* Icon */}
                        <div className="flex-shrink-0">
                            <Image
                                src={icon}
                                alt={title}
                                width={32}
                                height={32}
                                className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] object-contain"
                            />
                        </div>

                        {/* Title */}
                        <h3
                            className="text-white font-semibold flex-1 text-base md:text-xl"
                            style={{
                                ...getFontStyles(locale),
                                fontWeight: 600,
                                textAlign: 'start'
                            }}
                        >
                            {title}
                        </h3>
                    </div>

                    {/* Description */}
                    <p
                        className="text-xs md:text-sm leading-relaxed w-full flex-grow"
                        style={{
                            ...getFontStyles(locale),
                            color: '#ffffff',
                            fontWeight: 400,
                            textAlign: 'start'
                        }}
                    >
                        {description}
                    </p>
                </>
            )}
        </div>
    );
}