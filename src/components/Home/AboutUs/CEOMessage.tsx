'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { getFontStyles } from '@/utils/fonts';
import { useDetectedLocale } from '@/hooks/useDetectedLocale';

export default function CEOMessage() {
    const t = useTranslations('aboutUs');
    const locale = useDetectedLocale();
    const isRTL = locale === 'ar';

    return (
        <div className="space-y-8">
            {/* Mobile/Tablet Layout - Text always on top */}
            <div className="block lg:hidden">
                {/* Text Content */}
                <div className={`mb-8 ${isRTL ? 'flex flex-col items-start pr-4' : 'flex flex-col items-start pl-4'}`}>
                    <h3
                        className="text-[20px] md:text-[24px] font-semibold mb-4 leading-normal"
                        style={{
                            ...getFontStyles(locale),
                            fontWeight: 600,
                            lineHeight: 'normal'
                        }}
                    >
                        <span style={{
                            background: 'linear-gradient(180deg, #3ED178 0%, #2599BA 58.94%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>{t('ceoMessage.title').split(' ').slice(0, 1).join(' ')}</span>{' '}
                        <span style={{ color: '#000000' }}>{t('ceoMessage.title').split(' ').slice(1).join(' ')}</span>
                    </h3>
                    <p
                        className="text-[12px] md:text-[14px] leading-[24px] md:leading-[28px] mb-6"
                        style={{
                            ...getFontStyles(locale),
                            color: '#556482',
                            fontWeight: 400,
                            lineHeight: '24px',
                        }}
                    >
                        {t('ceoMessage.content')}
                    </p>

                    {/* CEO Signature */}
                    <div className="space-y-2">
                        <p
                            className="text-[14px] md:text-[16px] font-semibold"
                            style={{
                                ...getFontStyles(locale),
                                color: '#556482',
                            }}
                        >
                            {t('ceoMessage.signature')}
                        </p>
                        <p
                            className="text-[12px] md:text-[14px]"
                            style={{
                                ...getFontStyles(locale),
                                color: '#556482',
                            }}
                        >
                            {t('ceoMessage.position')}
                        </p>
                    </div>
                </div>

                {/* Image */}
                <div className="flex justify-center">
                    <div className="relative w-full max-w-sm image-container">
                        <Image
                            src="/Home/CEO.svg"
                            alt="CEO Message"
                            width={225}
                            height={145}
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Desktop Layout - Side by side */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
                {/* Image */}
                <div className={`${isRTL ? 'order-1' : 'order-1'} flex ${isRTL ? 'justify-start' : 'justify-start'}`}>
                    <div className="relative w-full max-w-lg image-container">
                        <Image
                            src="/Home/CEO.svg"
                            alt="CEO Message"
                            width={325}
                            height={245}
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>

                {/* CEO Message Content */}
                <div className={`${isRTL ? 'order-2 flex flex-col items-start' : 'order-2 flex flex-col items-start'}`}>
                    <h3
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
                        }}>{t('ceoMessage.title').split(' ').slice(0, 1).join(' ')}</span>{' '}
                        <span style={{ color: '#000000' }}>{t('ceoMessage.title').split(' ').slice(1).join(' ')}</span>
                    </h3>
                    <p
                        className="mb-8"
                        style={{
                            ...getFontStyles(locale),
                            color: '#556482',
                            fontSize: '18px',
                            fontWeight: 400,
                            lineHeight: '32px',
                        }}
                    >
                        {t('ceoMessage.content')}
                    </p>

                    {/* CEO Signature */}
                    <div className="space-y-2">
                        <p
                            className="text-lg font-semibold"
                            style={{
                                ...getFontStyles(locale),
                                color: '#556482',
                            }}
                        >
                            {t('ceoMessage.signature')}
                        </p>
                        <p
                            className="text-base"
                            style={{
                                ...getFontStyles(locale),
                                color: '#556482',
                            }}
                        >
                            {t('ceoMessage.position')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}