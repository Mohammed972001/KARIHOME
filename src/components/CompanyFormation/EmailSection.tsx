'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useTranslations } from 'next-intl';
import { useDetectedLocale } from '@/hooks/useDetectedLocale';
import { getFontStyles } from '@/utils/fonts';
import CountryCodeSelect from '@/components/Home/Contact/CountryCodeSelect';

export default function EmailSection() {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === 'dark';
    const locale = useDetectedLocale();
    const t = useTranslations('contactUs.form');

    const [formType, setFormType] = useState('inquiry');
    const [countryCode, setCountryCode] = useState('+212');

    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <section
            className="py-16 md:py-20 lg:py-24"
            style={{ backgroundColor: isDark ? '#121212' : '#F6F6F6' }}
        >
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">

                    {/* Contact Form - Left Side */}
                    <div className="w-full order-2 lg:order-1">
                        <div
                            className="rounded-lg p-8 lg:p-12 w-full max-w-2xl mx-auto shadow-lg"
                            style={{ backgroundColor: isDark ? '#1f1f1f' : '#ffffff' }}
                        >
                            <form className="space-y-6 lg:space-y-8">
                                {/* Name and Email Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                                    <div>
                                        <label
                                            className="block text-sm font-medium mb-2 lg:mb-3"
                                            style={{
                                                ...getFontStyles(locale),
                                                color: isDark ? '#ffffff' : '#000000',
                                                fontSize: '16px',
                                                fontWeight: 500
                                            }}
                                        >
                                            {t('name')}
                                        </label>
                                        <input
                                            type="text"
                                            placeholder={t('namePlaceholder')}
                                            value={formData.name}
                                            onChange={(e) => handleInputChange('name', e.target.value)}
                                            className="w-full px-4 lg:px-6 py-3 lg:py-4 border-0 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                                            style={{
                                                ...getFontStyles(locale),
                                                fontSize: '16px',
                                                backgroundColor: isDark ? '#2a2a2a' : '#f3f4f6',
                                                color: isDark ? '#ffffff' : '#000000'
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            className="block text-sm font-medium mb-2 lg:mb-3"
                                            style={{
                                                ...getFontStyles(locale),
                                                color: isDark ? '#ffffff' : '#000000',
                                                fontSize: '16px',
                                                fontWeight: 500
                                            }}
                                        >
                                            {t('email')}
                                        </label>
                                        <input
                                            type="email"
                                            placeholder={t('emailPlaceholder')}
                                            value={formData.email}
                                            onChange={(e) => handleInputChange('email', e.target.value)}
                                            className="w-full px-4 lg:px-6 py-3 lg:py-4 border-0 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                                            style={{
                                                ...getFontStyles(locale),
                                                fontSize: '16px',
                                                backgroundColor: isDark ? '#2a2a2a' : '#f3f4f6',
                                                color: isDark ? '#ffffff' : '#000000'
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div>
                                    <label
                                        className="block text-sm font-medium mb-2 lg:mb-3"
                                        style={{
                                            ...getFontStyles(locale),
                                            color: isDark ? '#ffffff' : '#000000',
                                            fontSize: '16px',
                                            fontWeight: 500
                                        }}
                                    >
                                        {t('phone')}
                                    </label>
                                    <CountryCodeSelect
                                        defaultValue={countryCode}
                                        onChange={setCountryCode}
                                        phoneValue={formData.phone}
                                        onPhoneChange={(value) => handleInputChange('phone', value)}
                                        locale={locale}
                                        getFontStyles={getFontStyles}
                                    />
                                </div>

                                {/* File Upload */}
                                <div>
                                    <label
                                        className="block text-sm font-medium mb-2 lg:mb-3"
                                        style={{
                                            ...getFontStyles(locale),
                                            color: isDark ? '#ffffff' : '#000000',
                                            fontSize: '16px',
                                            fontWeight: 500
                                        }}
                                    >
                                        {t('file')}
                                    </label>
                                    <div
                                        className="border-2 border-dashed rounded-md p-6 lg:p-8 text-center"
                                        style={{
                                            borderColor: isDark ? '#404040' : '#d1d5db'
                                        }}
                                    >
                                        <div className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-4 flex items-center justify-center">
                                            <svg
                                                className="w-8 h-8 lg:w-12 lg:h-12"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                            </svg>
                                        </div>
                                        <p
                                            className="text-xs lg:text-sm"
                                            style={{
                                                ...getFontStyles(locale),
                                                fontSize: '14px',
                                                lineHeight: '20px',
                                                color: isDark ? '#9ca3af' : '#6b7280'
                                            }}
                                        >
                                            {t('fileText')}
                                        </p>
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label
                                        className="block text-sm font-medium mb-2 lg:mb-3"
                                        style={{
                                            ...getFontStyles(locale),
                                            color: isDark ? '#ffffff' : '#000000',
                                            fontSize: '16px',
                                            fontWeight: 500
                                        }}
                                    >
                                        {t('message')}
                                    </label>
                                    <textarea
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => handleInputChange('message', e.target.value)}
                                        className="w-full px-4 lg:px-6 py-3 lg:py-4 border-0 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none resize-none"
                                        style={{
                                            ...getFontStyles(locale),
                                            fontSize: '16px',
                                            backgroundColor: isDark ? '#2a2a2a' : '#f3f4f6',
                                            color: isDark ? '#ffffff' : '#000000'
                                        }}
                                    />
                                </div>

                                {/* Form Type Selection */}
                                <div className="flex gap-4 lg:gap-6">
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="formType"
                                            value="inquiry"
                                            checked={formType === 'inquiry'}
                                            onChange={(e) => setFormType(e.target.value)}
                                            className="mr-2 lg:mr-3"
                                        />
                                        <span
                                            style={{
                                                ...getFontStyles(locale),
                                                color: isDark ? '#ffffff' : '#000000',
                                                fontSize: '16px'
                                            }}
                                        >
                                            {t('inquiry')}
                                        </span>
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="formType"
                                            value="complaint"
                                            checked={formType === 'complaint'}
                                            onChange={(e) => setFormType(e.target.value)}
                                            className="mr-2 lg:mr-3"
                                        />
                                        <span
                                            style={{
                                                ...getFontStyles(locale),
                                                color: isDark ? '#ffffff' : '#000000',
                                                fontSize: '16px'
                                            }}
                                        >
                                            {t('complaint')}
                                        </span>
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="formType"
                                            value="suggestion"
                                            checked={formType === 'suggestion'}
                                            onChange={(e) => setFormType(e.target.value)}
                                            className="mr-2 lg:mr-3"
                                        />
                                        <span
                                            style={{
                                                ...getFontStyles(locale),
                                                color: isDark ? '#ffffff' : '#000000',
                                                fontSize: '16px'
                                            }}
                                        >
                                            {t('suggestion')}
                                        </span>
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full py-4 lg:py-5 rounded-md transition-colors hover:opacity-90"
                                    style={{
                                        ...getFontStyles(locale),
                                        fontSize: '18px',
                                        fontWeight: 500,
                                        backgroundColor: isDark ? '#ffffff' : '#000000',
                                        color: isDark ? '#000000' : '#ffffff'
                                    }}
                                >
                                    {t('send')}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Animated Shape - Right Side */}
                    <div className="w-full order-1 lg:order-2 flex items-center justify-center">
                        <div className="relative w-full max-w-lg">
                            <div className="animated-shape">
                                <Image
                                    src="/CompanyFormation/Black 4.svg"
                                    alt="Company Formation Shape"
                                    width={500}
                                    height={500}
                                    className="w-full h-auto"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animation Styles */}
            <style jsx>{`
                .animated-shape {
                    animation: floatAnimation 6s ease-in-out infinite;
                }

                @keyframes floatAnimation {
                    0%, 100% {
                        transform: translateY(0px) translateX(0px) rotate(0deg);
                    }
                    25% {
                        transform: translateY(-20px) translateX(10px) rotate(2deg);
                    }
                    50% {
                        transform: translateY(-10px) translateX(-10px) rotate(-1deg);
                    }
                    75% {
                        transform: translateY(-30px) translateX(5px) rotate(1deg);
                    }
                }

                @media (max-width: 768px) {
                    @keyframes floatAnimation {
                        0%, 100% {
                            transform: translateY(0px) translateX(0px) rotate(0deg);
                        }
                        25% {
                            transform: translateY(-10px) translateX(5px) rotate(1deg);
                        }
                        50% {
                            transform: translateY(-5px) translateX(-5px) rotate(-0.5deg);
                        }
                        75% {
                            transform: translateY(-15px) translateX(3px) rotate(0.5deg);
                        }
                    }
                }
            `}</style>
        </section>
    );
}