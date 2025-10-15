'use client';

import { useTranslations } from 'next-intl';
import { SupportedLocale } from '@/hooks/useDetectedLocale';
import ContactCard from './ContactCard';

interface ContactCardsProps {
    locale: SupportedLocale;
    isRTL: boolean;
}

export default function ContactCards({ locale, isRTL }: ContactCardsProps) {
    const t = useTranslations('contactUs');

    const cards = [
        {
            icon: '/Home/email.svg',
            title: t('email.title'),
            description: t('email.address'),
        },
        {
            icon: '/Home/phone.svg',
            title: t('phone.title'),
            description: t('phone.number'),
        },
        {
            icon: '/Home/loacation.svg',
            title: t('address.title'),
            description: t('address.location'),
        },
    ];

    return (
        <div className="grid grid-cols-2">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className={`${index === 2 ? 'col-span-2' : ''}`}
                >
                    <ContactCard
                        icon={card.icon}
                        title={card.title}
                        description={card.description}
                        locale={locale}
                        isRTL={isRTL}
                        isInline={index === 2} // Make third card (address) inline
                    />
                </div>
            ))}
        </div>
    );
}