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
        className="navbar-language-switcher flex items-center gap-2 bg-transparent border border-white/30 rounded px-3 py-1 text-sm font-medium text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 cursor-pointer"
      >
        <span>{currentLanguage.flag}</span>
        <span>{currentLanguage.name}</span>
        <svg
          className={`w-3 h-3 fill-current text-white transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
        >
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-gray-800 border border-gray-600 rounded shadow-lg z-50 min-w-full">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                handleLanguageChange(lang.code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-700 flex items-center gap-2 ${lang.code === activeLocale ? 'bg-gray-700 text-green-400' : 'text-white'
                }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}