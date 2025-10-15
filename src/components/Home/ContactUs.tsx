'use client';

import { useDetectedLocale } from '@/hooks/useDetectedLocale';
import { useTranslations } from 'next-intl';
import { getFontStyles } from '@/utils/fonts';
import Image from 'next/image';
import {
  ContactForm,
  ContactHeader,
  ContactCards
} from './Contact';

export default function ContactUs() {
  const locale = useDetectedLocale();
  const isRTL = locale === 'ar';
  const t = useTranslations('contactUs');

  return (
    <>
      <section
        id="contact"
        className="relative w-full py-16 bg-[#141C27] overflow-hidden"
      >
        {/* Background Image */}
        <div
          className={`absolute inset-0 ${isRTL ? 'left-0' : 'right-0'}`}
          style={{
            transform: isRTL ? 'scaleX(-1)' : 'none'
          }}
        >
          <Image
            src="/Home/contactUSbg.svg"
            alt="Contact Background"
            fill
            className="object-contain object-center"
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">

          {/* Header - Centered at Top */}
          <div className="text-center mb-20">
            <ContactHeader locale={locale} isCentered={true} />
          </div>

          {/* Main Contact Container - Black Background with Rounded Corners */}
          <div className="bg-white/5  rounded-2xl p-8 lg:p-10">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">

              {/* Left Side: Form Section */}
              <div className="w-full lg:order-1">
                {/* Form Header */}
                <div className="mb-4">
                  <h3
                    className="text-2xl md:text-3xl font-bold mb-2 text-white"
                    style={{
                     
                    ...getFontStyles(locale)
                    }}
                  >
                    {t('formTitle')}
                  </h3>
                  <p
                    className="text-gray-300 text-base md:text-lg"
                    style={{
                      ...getFontStyles(locale)
                    }}
                  >
                    {t('formDescription')}
                  </p>
                </div>

                {/* Contact Form */}
                <ContactForm locale={locale} />
              </div>

              {/* Right Side: Image and Contact Info */}
              <div className="w-full lg:order-2 ">
                {/* Building Image */}
                <div className="relative w-full h-64 lg:h-120 rounded-2xl overflow-hidden">
                  <Image
                    src="/Home/building.svg"
                    alt="Building"
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Contact Information Cards */}
                <ContactCards locale={locale} isRTL={isRTL} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}