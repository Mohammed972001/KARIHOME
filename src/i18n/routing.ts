import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // قائمة اللغات المدعومة  
  locales: ['en', 'ar', 'fr'],
  
  // اللغة الافتراضية
  defaultLocale: 'en'
});
