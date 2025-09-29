'use client';

import { useLocale } from 'next-intl';
import { useRouter } from '../i18n/navigation';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();

  const handleLanguageChange = (newLocale: string) => {
    // إذا كانت اللغة الحالية هي نفس اللغة المختارة، لا تفعل شيئاً
    if (newLocale === locale) {
      return;
    }
    
    // الحصول على المسار الكامل الحالي
    const currentPath = window.location.pathname;
    
    // إزالة اللغة الحالية من بداية المسار
    const pathSegments = currentPath.split('/').filter(Boolean);
    
    // إذا كان أول جزء هو لغة، قم بإزالته
    if (pathSegments.length > 0 && ['en', 'ar', 'fr'].includes(pathSegments[0])) {
      pathSegments.shift(); // إزالة اللغة الحالية
    }
    
    // إنشاء المسار الجديد مع اللغة الجديدة
    const remainingPath = pathSegments.length > 0 ? pathSegments.join('/') : '';
    const newPath = `/${newLocale}/${remainingPath}`;
    
  
    router.push(newPath);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <select
        value={locale}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 pr-8 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </div>
    </div>
  );
}