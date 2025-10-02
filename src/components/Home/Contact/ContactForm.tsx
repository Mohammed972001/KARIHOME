'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { SupportedLocale } from '@/hooks/useDetectedLocale';
import { getFontStyles } from '@/utils/fonts';
import CountryCodeSelect from './CountryCodeSelect';

interface ContactFormProps {
    locale: SupportedLocale;
}

export default function ContactForm({ locale }: ContactFormProps) {
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
        <div className="bg-white rounded-lg p-8 w-full max-w-lg mx-auto">
            <form className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label
                            className="block text-sm font-medium mb-2"
                            style={{
                                ...getFontStyles(locale),
                                color: '#000000',
                                fontSize: '14px',
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
                            className="w-full px-4 py-2 border-0 bg-gray-100 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none text-black"
                            style={{
                                ...getFontStyles(locale),
                                fontSize: '14px'
                            }}
                        />
                    </div>
                    <div>
                        <label
                            className="block text-sm font-medium mb-2"
                            style={{
                                ...getFontStyles(locale),
                                color: '#000000',
                                fontSize: '14px',
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
                            className="w-full px-4 py-2 border-0 bg-gray-100 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none text-black"
                            style={{
                                ...getFontStyles(locale),
                                fontSize: '14px'
                            }}
                        />
                    </div>
                </div>

                {/* Phone */}
                <div>
                    <label
                        className="block text-sm font-medium mb-2"
                        style={{
                            ...getFontStyles(locale),
                            color: '#000000',
                            fontSize: '14px',
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
                        className="block text-sm font-medium mb-2"
                        style={{
                            ...getFontStyles(locale),
                            color: '#000000',
                            fontSize: '14px',
                            fontWeight: 500
                        }}
                    >
                        {t('file')}
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                        <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        </div>
                        <p
                            className="text-xs text-gray-500"
                            style={{
                                ...getFontStyles(locale),
                                fontSize: '12px',
                                lineHeight: '18px'
                            }}
                        >
                            {t('fileText')}
                        </p>
                    </div>
                </div>

                {/* Message */}
                <div>
                    <label
                        className="block text-sm font-medium mb-2"
                        style={{
                            ...getFontStyles(locale),
                            color: '#000000',
                            fontSize: '14px',
                            fontWeight: 500
                        }}
                    >
                        {t('message')}
                    </label>
                    <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="w-full px-4 py-2 border-0 bg-gray-100 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none resize-none"
                        style={{
                            ...getFontStyles(locale),
                            fontSize: '14px'
                        }}
                    />
                </div>

                {/* Form Type Selection */}
                <div className="flex gap-4">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="formType"
                            value="inquiry"
                            checked={formType === 'inquiry'}
                            onChange={(e) => setFormType(e.target.value)}
                            className="mr-2"
                        />
                        <span
                            style={{
                                ...getFontStyles(locale),
                                color: '#000000',
                                fontSize: '14px'
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
                            className="mr-2"
                        />
                        <span
                            style={{
                                ...getFontStyles(locale),
                                color: '#000000',
                                fontSize: '14px'
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
                            className="mr-2"
                        />
                        <span
                            style={{
                                ...getFontStyles(locale),
                                color: '#000000',
                                fontSize: '14px'
                            }}
                        >
                            {t('suggestion')}
                        </span>
                    </label>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
                    style={{
                        ...getFontStyles(locale),
                        fontSize: '16px',
                        fontWeight: 500
                    }}
                >
                    {t('send')}
                </button>
            </form>
        </div>
    );
}