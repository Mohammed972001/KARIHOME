import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  // التأكد من أن locale موجود
  const currentLocale = locale || 'en';
  
  return {
    locale: currentLocale,
    messages: (await import(`../../messages/${currentLocale}.json`)).default
  };
});