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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('access_key', 'afa41586-aabe-4207-b793-635f9a7baa67');
            formDataToSend.append('name', formData.name);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('phone', `${countryCode} ${formData.phone}`);
            formDataToSend.append('message', formData.message);
            formDataToSend.append('subject', `Contact Form - ${formType}`);
            formDataToSend.append('from_name', formData.name);

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formDataToSend
            });

            if (response.ok) {
                setSubmitStatus('success');
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
                setFormType('inquiry');
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div
            className=" w-full max-w-lg mx-auto"

        >
            <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                    <div className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded-md text-center">
                        <p style={{ ...getFontStyles(locale), fontSize: '14px' }}>
                            {locale === 'ar' ? 'تم إرسال رسالتك بنجاح!' :
                                locale === 'fr' ? 'Votre message a été envoyé avec succès!' :
                                    'Your message has been sent successfully!'}
                        </p>
                    </div>
                )}

                {submitStatus === 'error' && (
                    <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-md text-center">
                        <p style={{ ...getFontStyles(locale), fontSize: '14px' }}>
                            {locale === 'ar' ? 'حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.' :
                                locale === 'fr' ? 'Une erreur s\'est produite lors de l\'envoi du message. Veuillez réessayer.' :
                                    'An error occurred while sending the message. Please try again.'}
                        </p>
                    </div>
                )}
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>

                        <input
                            type="text"
                            name="name"
                            placeholder={t('namePlaceholder')}
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            required
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
                            name="email"
                            placeholder={t('emailPlaceholder')}
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            required
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
                        name="message"
                        placeholder={t('message')}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        required
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
                            className={locale === 'ar' ? 'ml-3' : 'mr-3'}
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
                            className={locale === 'ar' ? 'ml-3' : 'mr-3'}
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
                            className={locale === 'ar' ? 'ml-3' : 'mr-3'}
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
                    disabled={isSubmitting}
                    className={`w-full text-white py-4 transition-opacity ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
                        }`}
                    style={{
                        ...getFontStyles(locale),
                        fontSize: '16px',
                        fontWeight: 500,
                        borderRadius: '5px',
                        background: 'linear-gradient(91deg, #78F0A8 0%, #2599BA 57.21%)',
                        border: 'none'
                    }}
                >
                    {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            {locale === 'ar' ? 'جاري الإرسال...' :
                                locale === 'fr' ? 'Envoi en cours...' :
                                    'Sending...'}
                        </span>
                    ) : (
                        t('send')
                    )}
                </button>
            </form>
        </div>
    );
}