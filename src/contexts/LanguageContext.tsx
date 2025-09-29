'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
type Language = 'en' | 'ar' | 'fr';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLanguageContext() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  return context;
}

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  // Check if the current language is RTL
  const isRTL = currentLanguage === 'ar';

  // Load language from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage && ['en', 'ar', 'fr'].includes(savedLanguage)) {
        setCurrentLanguage(savedLanguage);
      } else {
        // Check URL for language parameter
        const urlParams = new URLSearchParams(window.location.search);
        const langFromUrl = urlParams.get('lang') as Language;
        if (langFromUrl && ['en', 'ar', 'fr'].includes(langFromUrl)) {
          setCurrentLanguage(langFromUrl);
        } else {
          // Default to English
          setCurrentLanguage('en');
        }
      }
    }
  }, []);

  // Update document direction and localStorage when language changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
      document.documentElement.lang = currentLanguage;
      localStorage.setItem('language', currentLanguage);
    }
  }, [currentLanguage, isRTL]);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    
    // Update URL parameter without causing navigation
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      
      // Ensure we stay on the home page
      url.pathname = '/';
      url.searchParams.set('lang', language);
      
      // Use replaceState to update URL without triggering navigation
      window.history.replaceState(window.history.state, '', url.toString());
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        setLanguage,
        isRTL,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
