'use client';

import { useTranslations } from 'next-intl';
import { getFontStyles } from '@/utils/fonts';
import { useDetectedLocale } from '@/hooks/useDetectedLocale';

export default function TermsPage() {
    const t = useTranslations();
    const locale = useDetectedLocale();

    // Define all sections in order
    const sections = [
        'companyCommitment',
        'privacyCookies',
        'companyInfo',
        'definitions',
        'personalInfo',
        'whyWeCollectData',
        'dataProcessing',
        'companyResponsibilities',
        'intellectualProperty',
        'websiteAccess',
        'informationReliability',
        'websiteChanges',
        'termsChanges',
        'viruses',
        'linkingToSite',
        'thirdPartyLinks',
        'websiteUsage',
        'accountPassword',
        'indemnification',
        'accessSuspension',
        'applicableLaw',
        'contactUs'
    ];

    return (
        <div className="mt-20 bg-white text-black min-h-screen">
            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Header Section */}
                <div className="mb-12 text-center">
                    <h1
                        className="text-[32px] leading-[38px] lg:text-[32px] lg:leading-[38px] md:text-[28px] md:leading-[34px] sm:text-[24px] sm:leading-[30px] font-medium text-gray-800 mb-6"
                        style={getFontStyles(locale)}
                    >
                        {t('Terms.title')}
                    </h1>
                    <div className="max-w-4xl mx-auto">
                        <p
                            className="text-[18px] leading-[27px] lg:text-[18px] lg:leading-[27px] md:text-[16px] md:leading-[24px] sm:text-[14px] sm:leading-[21px] font-normal text-gray-800"
                            style={getFontStyles(locale)}
                        >
                            {t('Terms.subtitle')}
                        </p>
                    </div>
                </div>

                {/* Terms Content */}
                <div className="space-y-8">
                    {sections.map((sectionKey, index) => (
                        <div key={index} className=" ">
                            <h2
                                className="text-[18px] leading-[27px] lg:text-[18px] lg:leading-[27px] md:text-[16px] md:leading-[24px] sm:text-[15px] sm:leading-[22px] font-semibold text-gray-800 mb-4"
                                style={getFontStyles(locale)}
                            >
                                {t(`Terms.${sectionKey}.title`)}
                            </h2>
                            <div
                                className="text-[16px] leading-[26px] lg:text-[16px] lg:leading-[26px] md:text-[14px] md:leading-[22px] sm:text-[13px] sm:leading-[20px] font-medium text-black whitespace-pre-line"
                                style={getFontStyles(locale)}
                            >
                                {t(`Terms.${sectionKey}.content`)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}