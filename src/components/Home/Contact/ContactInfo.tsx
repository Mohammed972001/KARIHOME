'use client';

import { useTranslations } from 'next-intl';
import { SupportedLocale } from '@/hooks/useDetectedLocale';
import { getFontStyles } from '@/utils/fonts';

interface ContactInfoProps {
    locale: SupportedLocale;
}

export default function ContactInfo({ locale }: ContactInfoProps) {
    const t = useTranslations('contactUs');

    return (
        <div className="space-y-8">
            {/* Working Hours */}
            <div className="text-start">
                <h3
                    className="text-lg font-semibold mb-4"
                    style={{
                        ...getFontStyles(locale),
                        color: '#21FE7B',
                        fontSize: '18px',
                        fontWeight: 600
                    }}
                >
                    {t('workingHours.title')}
                </h3>
                <p
                    className="text-sm mb-2"
                    style={{
                        ...getFontStyles(locale),
                        color: '#ffffff',
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: '24px'
                    }}
                >
                    {t('workingHours.weekdays')}
                </p>
                <p
                    className="text-sm"
                    style={{
                        ...getFontStyles(locale),
                        color: '#ffffff',
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: '24px'
                    }}
                >
                    {t('workingHours.saturday')}
                </p>
            </div>

            {/* Customer Service */}
            <div className="text-start">
                <h3
                    className="text-lg font-semibold mb-4"
                    style={{
                        ...getFontStyles(locale),
                        color: '#21FE7B',
                        fontSize: '18px',
                        fontWeight: 600
                    }}
                >
                    {t('customerService.title')}
                </h3>
            </div>
        </div>
    );
}