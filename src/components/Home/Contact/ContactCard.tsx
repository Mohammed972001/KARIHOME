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
}

export default function ContactCard({
    icon,
    title,
    description,
    locale,
    isRTL
}: ContactCardProps) {
    return (
        <div
            className="bg-white/5 backdrop-blur-sm px-4 md:px-8 py-4 md:py-8 flex flex-col items-start justify-start text-start h-full w-full min-h-[100px] md:min-h-[120px]"
            style={{
                borderLeft: !isRTL ? '2px solid #21FE7B' : 'none',
                borderRight: isRTL ? '2px solid #21FE7B' : 'none',
            }}
        >
            {/* Icon and Title Row */}
            <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-4 w-full">
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
        </div>
    );
}