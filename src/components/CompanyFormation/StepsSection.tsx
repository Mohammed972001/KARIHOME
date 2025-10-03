'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useDetectedLocale } from '@/hooks/useDetectedLocale';
import { useTheme } from 'next-themes';
import { getFontStyles } from '@/utils/fonts';
import StepCard from './StepCard';

const STEP_IMAGES = {
    '1': '/CompanyFormation/steps/1.svg',
    '2': '/CompanyFormation/steps/2.svg',
    '3': '/CompanyFormation/steps/3.svg',
    '4': '/CompanyFormation/steps/4.svg',
    '5': '/CompanyFormation/steps/5.svg',
    '6': '/CompanyFormation/steps/6.svg',
    '7': '/CompanyFormation/steps/7.svg',
    '8': '/CompanyFormation/steps/8.svg',
    '9': '/CompanyFormation/steps/9.svg',
};

export default function StepsSection() {
    const { t } = useTranslation();
    const locale = useDetectedLocale();
    const { resolvedTheme } = useTheme();

    const sectionTitle = t('companyFormation.stepsSection.title');
    const isDark = resolvedTheme === 'dark';

    // Generate array of step numbers from 1 to 9
    const stepNumbers = Array.from({ length: 9 }, (_, i) => (i + 1).toString());

    return (
        <section
            className="steps-section py-8 md:py-12 lg:py-16"
            style={{ backgroundColor: isDark ? '#121212' : '#F6F6F6' }}
        >
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Section Title */}
                <div className="text-center mb-6 md:mb-8 lg:mb-12">
                    <h2
                        className="mb-4 leading-normal"
                        style={{
                            ...getFontStyles(locale),
                            fontSize: typeof window !== 'undefined' ?
                                (window.innerWidth < 768 ? '20px' : window.innerWidth < 1024 ? '24px' : '28px') :
                                '28px',
                            fontWeight: 600,
                            lineHeight: 'normal',
                            color: isDark ? '#ffffff' : '#1f2937'
                        }}
                    >
                        <span style={{ color: '#21FE7B' }}>{sectionTitle.split(' ')[0]}</span>
                        {' '}
                        <span style={{ color: isDark ? '#ffffff' : '#1f2937' }}>
                            {sectionTitle.split(' ').slice(1).join(' ')}
                        </span>
                    </h2>
                </div>

                {/* Steps Grid */}
                <div
                    className="rounded-2xl p-3 md:p-6 lg:p-8 shadow-sm"
                    style={{ backgroundColor: isDark ? '#1f1f1f' : '#ffffff' }}
                >
                    <div className="grid grid-cols-2 gap-2 md:gap-4 lg:gap-6">
                        {stepNumbers.map((stepNumber) => {
                            const stepTitle = t(`companyFormation.stepsSection.steps.${stepNumber}.title`);
                            const stepDescription = t(`companyFormation.stepsSection.steps.${stepNumber}.description`);

                            return (
                                <StepCard
                                    key={stepNumber}
                                    stepNumber={stepNumber}
                                    title={stepTitle}
                                    description={stepDescription}
                                    imageSrc={STEP_IMAGES[stepNumber as keyof typeof STEP_IMAGES]}
                                    locale={locale}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}