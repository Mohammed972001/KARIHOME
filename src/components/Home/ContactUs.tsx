'use client';

import { useDetectedLocale } from '@/hooks/useDetectedLocale';
import {
  ContactForm,
  ContactHeader,
  ContactCards,
  ContactInfo
} from './Contact';

export default function ContactUs() {
  const locale = useDetectedLocale();
  const isRTL = locale === 'ar';

  return (
    <>
      <section
        id="contact"
        className="w-full"
        style={{
          backgroundColor: '#121212',
        }}
      >
        {/* Main Content */}
        <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24">

          {/* Title and Description - Mobile Only (Above Form) */}
          <ContactHeader locale={locale} isMobileOnly={true} />

          {/* Main Layout: Form on Left in Desktop, Form on Top in Mobile */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">

            {/* Contact Form */}
            <div className="w-full lg:order-1">
              <ContactForm locale={locale} />
            </div>

            {/* Right Side: Title, Description, Cards, and Additional Info */}
            <div className="w-full lg:order-2 space-y-6 lg:space-y-8">

              {/* Title and Description - Desktop Only */}
              <ContactHeader locale={locale} isMobileOnly={false} />

              {/* Contact Cards - Grid Layout */}
              <ContactCards locale={locale} isRTL={isRTL} />

              {/* Additional Information */}
              <ContactInfo locale={locale} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}