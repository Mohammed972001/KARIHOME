'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { getFontStyles } from '@/utils/fonts';
import { useDetectedLocale } from '@/hooks/useDetectedLocale';

export default function ChairmanMessage() {
    const t = useTranslations('aboutUs');
    const locale = useDetectedLocale();
    const isRTL = locale === 'ar';

    return (
        <div className="space-y-8 mb-16 lg:mb-24">
            {/* Mobile/Tablet Layout - Text always on top */}
            <div className="block lg:hidden">
                {/* Text Content */}
                <div className={`mb-8 ${isRTL ? 'flex flex-col items-start pr-4' : 'flex flex-col items-start pl-4'}`}>
                    <h2
                        className="text-[20px] md:text-[24px] font-semibold mb-4 leading-normal"
                        style={{
                            ...getFontStyles(locale),
                            textAlign: isRTL ? 'right' : 'left',
                            fontWeight: 600,
                            lineHeight: 'normal'
                        }}
                    >
                        <span style={{
                            background: 'linear-gradient(180deg, #3ED178 0%, #2599BA 58.94%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>{t('title')}</span>{' '}
                        <span style={{ color: '#000000' }}>{t('titleHighlight')}</span>
                    </h2>
                    <p
                        className="text-[12px] md:text-[14px] leading-[24px] md:leading-[28px]"
                        style={{
                            ...getFontStyles(locale),
                            color: '#556482',
                            fontWeight: 400,
                            lineHeight: '24px',
                        }}
                    >
                        {t('description')}
                    </p>

                    {/* Chairman Signature */}
                    <div className="space-y-2 mt-6">
                        <p
                            className="text-[14px] md:text-[16px] font-semibold"
                            style={{
                                ...getFontStyles(locale),
                                color: '#556482',
                            }}
                        >
                            {t('chairmanMessage.signature')}
                        </p>
                        <p
                            className="text-[12px] md:text-[14px]"
                            style={{
                                ...getFontStyles(locale),
                                color: '#556482',
                            }}
                        >
                            {t('chairmanMessage.position')}
                        </p>
                    </div>
                </div>

                {/* Image */}
                <div className="flex justify-center">
                    <div className="relative w-full max-w-sm image-container">
                        {/* Chairman Image */}
                        <Image
                            src="/Home/About-us-top.svg"
                            alt="Chairman Message"
                            width={300}
                            height={200}
                            className="w-auto h-auto object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Desktop Layout - Side by side */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-28 items-center">
                {/* Text Content */}
                <div className={`${isRTL ? 'order-1 flex flex-col items-start' : 'order-1 flex flex-col items-start'}`}>
                    <h2
                        className="font-semibold mb-6 leading-normal"
                        style={{
                            ...getFontStyles(locale),
                            textAlign: isRTL ? 'right' : 'left',
                            fontSize: '32px',
                            fontWeight: 600,
                            lineHeight: 'normal'
                        }}
                    >
                        <span style={{
                            background: 'linear-gradient(180deg, #3ED178 0%, #2599BA 58.94%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>{t('title')}</span>{' '}
                        <span style={{ color: '#000000' }}>{t('titleHighlight')}</span>
                    </h2>
                    <p
                        style={{
                            ...getFontStyles(locale),
                            color: '#556482',
                            fontSize: '18px',
                            fontWeight: 400,
                            lineHeight: '32px',
                        }}
                    >
                        {t('description')}
                    </p>

                    {/* Chairman Signature */}
                    <div className="space-y-2 mt-8">
                        <p
                            className="text-lg font-semibold"
                            style={{
                                ...getFontStyles(locale),
                                color: '#556482',
                            }}
                        >
                            {t('chairmanMessage.signature')}
                        </p>
                        <p
                            className="text-base"
                            style={{
                                ...getFontStyles(locale),
                                color: '#556482',
                            }}
                        >
                            {t('chairmanMessage.position')}
                        </p>
                    </div>
                </div>

                {/* Image */}
                <div className={`${isRTL ? 'order-2' : 'order-2'} flex ${isRTL ? 'justify-start' : 'justify-end'}`}>
                    <div className="relative w-full image-container overflow-hidden">
                        {/* Background Rectangle Container */}
                        <div className={`w-full flex ${isRTL ? 'justify-end' : 'justify-end'}`}>
                            <Image
                                src="/Home/Rectangle-About-us-top.svg"
                                alt="Background"
                                width={157}
                                height={205}
                                className="w-auto h-auto object-contain"
                                priority
                            />
                        </div>
                        {/* Chairman Image on top */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Image
                                src="/Home/About-us-top.svg"
                                alt="Chairman Message"
                                width={350}
                                height={230}
                                className="w-auto h-auto object-contain max-w-[80%] max-h-[80%]"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}