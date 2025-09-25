'use client';

import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';

export type SupportedLocale = 'ar' | 'en' | 'fr';

export const SUPPORTED_LOCALES: SupportedLocale[] = ['ar', 'en', 'fr'];

export function useDetectedLocale(): SupportedLocale {
  const originalLocale = useLocale();
  const [detectedLocale, setDetectedLocale] = useState<SupportedLocale>(
    originalLocale as SupportedLocale
  );

  useEffect(() => {
    const detectLocale = (): SupportedLocale => {
      // Multiple ways to detect locale with priority order
      
      // 1. Check URL path (highest priority)
      const urlLocale = window.location.pathname.split('/')[1];
      if (SUPPORTED_LOCALES.includes(urlLocale as SupportedLocale)) {
        return urlLocale as SupportedLocale;
      }
      
      // 2. Check HTML lang attribute
      const htmlLang = document.documentElement.lang;
      if (htmlLang && SUPPORTED_LOCALES.includes(htmlLang as SupportedLocale)) {
        return htmlLang as SupportedLocale;
      }
      
      // 3. Check HTML direction (RTL = Arabic)
      const htmlDir = document.documentElement.dir;
      if (htmlDir === 'rtl') {
        return 'ar';
      }
      
      // 4. Fallback to original locale from next-intl
      if (SUPPORTED_LOCALES.includes(originalLocale as SupportedLocale)) {
        return originalLocale as SupportedLocale;
      }
      
      // 5. Final fallback to English
      return 'en';
    };

    const finalLocale = detectLocale();
    setDetectedLocale(finalLocale);
    

  }, [originalLocale]);

  return detectedLocale;
}

// Helper functions
export const isRTL = (locale: SupportedLocale): boolean => locale === 'ar';
export const isArabic = (locale: SupportedLocale): boolean => locale === 'ar';
export const isEnglish = (locale: SupportedLocale): boolean => locale === 'en';
export const isFrench = (locale: SupportedLocale): boolean => locale === 'fr';
