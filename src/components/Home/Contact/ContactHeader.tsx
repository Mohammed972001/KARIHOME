'use client';

import { useTranslations } from 'next-intl';
import { SupportedLocale } from '@/hooks/useDetectedLocale';
import { getFontStyles } from '@/utils/fonts';

interface ContactHeaderProps {
    locale: SupportedLocale;
    isMobileOnly?: boolean;
}

export default function ContactHeader({ locale, isMobileOnly = false }: ContactHeaderProps) {
    const t = useTranslations('contactUs');

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
                <span style={{ color: '#21FE7B' }}>{t('title')}</span>{' '}
                <span style={{ color: '#ffffff' }}>{t('titleHighlight')}</span>
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