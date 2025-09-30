'use client';

import { useLocale } from 'next-intl';
import { useRouter } from '../../i18n/navigation';

const languages = [
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

export default function NavbarLanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();

  const handleLanguageChange = (newLocale: string) => {
    if (newLocale === locale) {
      return;
    }
    
    const currentPath = window.location.pathname;
    const pathSegments = currentPath.split('/').filter(Boolean);
    
    if (pathSegments.length > 0 && ['en', 'ar', 'fr'].includes(pathSegments[0])) {
      pathSegments.shift();
    }
    
    const remainingPath = pathSegments.length > 0 ? pathSegments.join('/') : '';
    const newPath = `/${newLocale}/${remainingPath}`;
    
    router.push(newPath);
  };

  return (
    <div className="relative">
      <select
        value={locale}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="navbar-language-switcher appearance-none bg-transparent border border-white/30 rounded px-3 py-1 text-sm font-medium text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 cursor-pointer"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code} className="bg-gray-800 text-white">
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg className="w-3 h-3 fill-current text-white" viewBox="0 0 20 20">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </div>
    </div>
  );
}