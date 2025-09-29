'use client';

import { useEffect } from 'react';

interface LocaleProviderProps {
  locale: string;
  children: React.ReactNode;
}

export default function LocaleProvider({ locale, children }: LocaleProviderProps) {
  useEffect(() => {
    const html = document.documentElement;
    const direction = locale === 'ar' ? 'rtl' : 'ltr';
    
    html.setAttribute('lang', locale);
    html.setAttribute('dir', direction);
  }, [locale]);

  return <>{children}</>;
}