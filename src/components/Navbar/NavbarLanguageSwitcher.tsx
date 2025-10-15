'use client';

import { useLocale } from 'next-intl';
import { useState, useEffect, useRef, useMemo, useCallback } from 'react';

const languages = [
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
] as const;

const SUPPORTED_LOCALES = ['ar', 'en', 'fr'] as const;

export default function NavbarLanguageSwitcher() {
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Memoized function to get locale from URL path
  const currentLocaleFromPath = useMemo(() => {
    if (typeof window === 'undefined') return locale;

    const pathSegments = window.location.pathname.split('/').filter(Boolean);
    const pathLocale = pathSegments[0];
    return SUPPORTED_LOCALES.includes(pathLocale as typeof SUPPORTED_LOCALES[number]) ? pathLocale : locale;
  }, [locale]);

  // Use path locale as priority, fallback to useLocale
  const activeLocale = currentLocaleFromPath;

  // Memoized current language calculation
  const currentLanguage = useMemo(() =>
    languages.find(lang => lang.code === activeLocale) || languages[0],
    [activeLocale]
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = useCallback((newLocale: string) => {
    if (newLocale === activeLocale) {
      return;
    }

    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;

    // Split path into segments and filter out empty ones
    const pathSegments = currentPath.split('/').filter(Boolean);

    // Remove the first segment if it's a locale
    if (pathSegments.length > 0 && SUPPORTED_LOCALES.includes(pathSegments[0] as typeof SUPPORTED_LOCALES[number])) {
      pathSegments.shift(); // Remove the locale segment
    }

    // Build new path: start with new locale, then add remaining segments
    const remainingPath = pathSegments.length > 0 ? '/' + pathSegments.join('/') : '';
    const newPath = `/${newLocale}${remainingPath}`;

    // Close dropdown before navigation
    setIsOpen(false);

    // Use window.location.href for complete navigation
    window.location.href = newPath + currentHash;
  }, [activeLocale]);

  return (
    <div ref={dropdownRef} className="relative">
      {/* Language Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="navbar-language-switcher flex items-center gap-2 bg-transparent border border-white/50 text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm transform hover:scale-105 hover:shadow-lg group relative overflow-hidden"
      >
        <span className="relative z-10">{currentLanguage.flag}</span>
        <span className="relative z-10 font-medium">{currentLanguage.name}</span>
        <svg
          className={`w-3 h-3 fill-current transition-transform duration-300 relative z-10 ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
        >
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
        {/* Gradient overlay */}
        <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-black/90 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl z-50 min-w-full overflow-hidden navbar-language-switcher-dropdown">
          {languages.map((lang, index) => (
            <button
              key={lang.code}
              onClick={() => {
                handleLanguageChange(lang.code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-3 text-sm flex items-center gap-3 transition-all duration-300 relative group hover:bg-white/10 border-b border-white/10 last:border-b-0 ${lang.code === activeLocale
                  ? 'bg-gradient-to-r from-blue-500/20 to-green-500/20 text-green-400'
                  : 'text-white hover:text-green-400'
                }`}
              style={{
                animationDelay: `${index * 50}ms`
              }}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="font-medium relative z-10">{lang.name}</span>
              {lang.code === activeLocale && (
                <span className="ml-auto text-green-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              )}
              {/* Hover gradient effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}