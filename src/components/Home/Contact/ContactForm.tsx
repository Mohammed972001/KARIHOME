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
        <div
            className=" w-full max-w-lg mx-auto"
          
        >
            <form className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        
                        <input
                            type="text"
                            placeholder={t('namePlaceholder')}
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className="w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none text-white placeholder-gray-400"
                            style={{
                                ...getFontStyles(locale),
                                fontSize: '14px',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.20)'
                            }}
                        />
                    </div>
                    <div>
                        
                        <input
                            type="email"
                            placeholder={t('emailPlaceholder')}
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none text-white placeholder-gray-400"
                            style={{
                                ...getFontStyles(locale),
                                fontSize: '14px',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.20)'
                            }}
                        />
                    </div>
                </div>

                {/* Phone */}
                <div>
                    
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
                    <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none resize-none text-white placeholder-gray-400"
                        style={{
                            ...getFontStyles(locale),
                            fontSize: '14px',
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.20)'
                        }}
                    />
                </div>

                {/* Form Type Selection */}
                <div className="flex gap-6">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="formType"
                            value="inquiry"
                            checked={formType === 'inquiry'}
                            onChange={(e) => setFormType(e.target.value)}
                            className="mr-4"
                        />
                        <span
                            style={{
                                ...getFontStyles(locale),
                                color: '#ffffff',
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
                            className="mr-4"
                        />
                        <span
                            style={{
                                ...getFontStyles(locale),
                                color: '#ffffff',
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
                            className="mr-4"
                        />
                        <span
                            style={{
                                ...getFontStyles(locale),
                                color: '#ffffff',
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
                    className="w-full text-white py-4 hover:opacity-90 transition-opacity"
                    style={{
                        ...getFontStyles(locale),
                        fontSize: '16px',
                        fontWeight: 500,
                        borderRadius: '5px',
                        background: 'linear-gradient(91deg, #78F0A8 0%, #2599BA 57.21%)',
                        border: 'none'
                    }}
                >
                    {t('send')}
                </button>
            </form>
        </div>
    );
}