'use client';

import { useTranslations } from 'next-intl';
import { useDetectedLocale, SupportedLocale } from '@/hooks/useDetectedLocale';
import { getFontStyles } from '@/utils/fonts';
import Image from 'next/image';

interface CommitmentCardProps {
  icon: string;
  title: string;
  description: string;
  locale: SupportedLocale;
  isRTL: boolean;
}

function CommitmentCard({ icon, title, description, locale, isRTL }: CommitmentCardProps) {
  return (
    <div 
      className="bg-white/5 backdrop-blur-sm px-8 py-6 flex flex-col items-start text-center h-auto w-full max-w-[370px] mx-auto"
      style={{
        borderLeft: !isRTL ? '2px solid #21FE7B' : 'none',
        borderRight: isRTL ? '2px solid #21FE7B' : 'none',
      }}
    >
      {/* Icon */}
      <div className="mb-4 flex justify-center">
        <Image
          src={icon}
          alt={title}
          width={60}
          height={60}
          className="w-[60px] h-[60px] object-contain"
        />
      </div>
      
      {/* Title */}
      <h3 
        className="text-xl text-white font-semibold mb-4"
        style={{
          ...getFontStyles(locale),
          fontSize: '20px',
          fontWeight: 600,
          textAlign: 'center'
        }}
      >
        {title}
      </h3>
      
      {/* Description */}
      <p 
        className="text-sm leading-relaxed "
        style={{
          ...getFontStyles(locale),
          color: '#ffffff',
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '24px',
          textAlign: 'start'
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default function OurCommitment() {
  const t = useTranslations('ourCommitment');
  const locale = useDetectedLocale();
  const isRTL = locale === 'ar';

  const cards = [
    {
      icon: '/Home/Our-Commitment/vegens.svg',
      title: t('vision.title'),
      description: t('vision.description'),
    },
    {
      icon: '/Home/Our-Commitment/massege.svg',
      title: t('mission.title'),
      description: t('mission.description'),
    },
    {
      icon: '/Home/Our-Commitment/valus.svg',
      title: t('values.title'),
      description: t('values.description'),
    },
  ];

  return (
    <>
      <section 
        className="w-full "
        style={{
          backgroundColor: '#121212',
        }}
      >
        {/* Main Content */}
        <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24 ">
          <div className="text-start mb-12 md:mb-16 lg:mb-20">
            <h2 
              className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 leading-normal"
              style={{
                ...getFontStyles(locale),
                color: '#21FE7B',
                textAlign: 'start',
                fontWeight: 600,
                lineHeight: 'normal'
              }}
            >
              <span style={{ color: '#21FE7B' }}>{t('title')}</span>{' '}
              <span style={{ color: '#ffffff' }}>{t('titleHighlight')}</span>
            </h2>
            
            <p 
              className="text-base md:text-lg max-w-4xl"
              style={{
                ...getFontStyles(locale),
                color: '#ffffff',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '28px',
                textAlign: 'start'
              }}
            >
              {t('description')}
            </p>
          </div>

          {/* Cards Container */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-6 lg:gap-8 justify-center items-center md:items-stretch">
            {cards.map((card, index) => (
              <CommitmentCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                locale={locale}
                isRTL={isRTL}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}