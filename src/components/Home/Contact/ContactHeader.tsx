'use client';

import { useTranslations } from 'next-intl';
import { SupportedLocale } from '@/hooks/useDetectedLocale';
import { getFontStyles } from '@/utils/fonts';

interface ContactHeaderProps {
    locale: SupportedLocale;
    isMobileOnly?: boolean;
    isCentered?: boolean;
}

export default function ContactHeader({ locale, isMobileOnly = false, isCentered = false }: ContactHeaderProps) {
    const t = useTranslations('contactUs');

    // If isCentered is true, use centered styling
    if (isCentered) {
        return (
            <div className="text-center">
                <h2
                    className="text-4xl md:text-5xl font-bold mb-10"
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
                    className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto"
                    style={{
                        ...getFontStyles(locale)
                    }}
                >
                    {t('description')}
                </p>
            </div>
        );
    }

    const containerClass = isMobileOnly
        ? "block lg:hidden text-start mb-8"
        : "hidden lg:block text-start";

    const titleClass = isMobileOnly
        ? "text-2xl md:text-3xl font-semibold mb-6 leading-normal"
        : "text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 leading-normal";

    const descriptionClass = isMobileOnly
        ? "text-base"
        : "text-base md:text-lg";

    return (
        <div className={containerClass}>
            <h2
                className={titleClass}
                style={{
                    ...getFontStyles(locale),
                    color: '#21FE7B',
                    textAlign: 'start',
                    fontWeight: 600,
                    lineHeight: 'normal'
                }}
            >
                {t('title')}
            </h2>

            <p
                className={descriptionClass}
                style={{
                    ...getFontStyles(locale),
                    color: '#ffffff',
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '28px',
                    textAlign: 'start'
                }}
            >
                {t('description')}
            </p>
        </div>
    );
}