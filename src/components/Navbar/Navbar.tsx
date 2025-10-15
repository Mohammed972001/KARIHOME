'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import NavbarLanguageSwitcher from './NavbarLanguageSwitcher';
import { getFontStyles } from '../../utils/fonts';
import { useDetectedLocale } from '../../hooks/useDetectedLocale';
import { useScrolled } from '../../hooks/useScrolled';
import Image from 'next/image';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const t = useTranslations('navbar');
  const detectedLocale = useDetectedLocale();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useScrolled(50);

  const navItems = [
    { key: 'home', href: `/${detectedLocale}` },
    { key: 'aboutUs', href: `/${detectedLocale}#about-us` },
    { key: 'services', href: `/${detectedLocale}#services` },
    { key: 'companyFormation', href: `/${detectedLocale}/CompanyFormation` },
    { key: 'partners', href: `/${detectedLocale}#partners` },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes('#')) {
      e.preventDefault();
      const sectionId = href.split('#')[1]; // Get section ID after #

      // Check if we're currently on the home page
      const currentPath = window.location.pathname;
      const isOnHomePage = currentPath === `/${detectedLocale}` || currentPath === '/';

      if (isOnHomePage) {
        // If on home page, scroll to the section directly
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      } else {
        // If not on home page, navigate to home page with hash
        window.location.href = `/${detectedLocale}#${sectionId}`;
      }
    }
  };

  const getNavbarFontStyles = (customStyles?: React.CSSProperties) => {
    const baseStyles = getFontStyles(detectedLocale, {
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: '150%',
      letterSpacing: '0%',
      textAlign: detectedLocale === 'ar' ? 'right' : 'left',
      ...customStyles
    });

    return baseStyles;
  };

  return (
    <nav
      lang={detectedLocale}
      className={`
        fixed top-0 left-0 right-0 z-50
        flex justify-center items-center transition-all duration-500 ease-in-out
        navbar-padding-responsive navbar-locale-${detectedLocale}
        ${isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}
        ${className}
      `}
    >
      {/* Centered content with space between logo and contact button */}
      <div className="w-full max-w-7xl flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={52}
            className="navbar-logo transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:rotate-3"
          />
        </Link>

        {/* Navigation Menu - Centered */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.key}>
              <Link
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-white hover:bg-white/20 transition-all duration-300 relative group navbar-text-responsive px-4 py-2 rounded-full hover:scale-105 transform"
                style={getNavbarFontStyles()}
              >
                <span className="relative z-10">{t(item.key)}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side: Language Switcher and Contact Button */}
        <div className="flex items-center gap-4">
          {/* Language Switcher - Hidden on mobile */}
          <div className="hidden lg:block">
            <NavbarLanguageSwitcher />
          </div>

          {/* Language Switcher - Visible on mobile too */}
          <div className="lg:hidden">
            <NavbarLanguageSwitcher />
          </div>

          {/* Contact Button - Hidden on mobile (only shows in mobile menu) */}
          <Link
            href={`/${detectedLocale}#contact`}
            onClick={(e) => handleNavClick(e, `/${detectedLocale}#contact`)}
            className="hidden lg:block bg-transparent border border-white/50 text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm navbar-contact-button transform hover:scale-105 hover:shadow-lg group"
            style={getNavbarFontStyles()}
          >
            <span className="relative z-10">{t('contactUs')}</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/20 rounded transition-all duration-300 transform hover:scale-110 group"
          >
            <svg className="w-6 h-6 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md border-t border-white/10 animate-slide-down">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={item.key}
                href={item.href}
                className="block text-white hover:text-green-400 transition-all duration-300 py-2 navbar-text-responsive transform hover:translate-x-2 hover:scale-105"
                style={{
                  ...getNavbarFontStyles(),
                  animationDelay: `${index * 100}ms`
                }}
                onClick={(e) => {
                  handleNavClick(e, item.href);
                  setIsMobileMenuOpen(false);
                }}
              >
                {t(item.key)}
              </Link>
            ))}
            <Link
              href={`/${detectedLocale}#contact`}
              onClick={(e) => {
                handleNavClick(e, `/${detectedLocale}#contact`);
                setIsMobileMenuOpen(false);
              }}
              className="navbar-contact-button w-full bg-transparent border border-white/50 text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 navbar-text-responsive mt-4 block text-center transform hover:scale-105 hover:shadow-lg"
              style={getNavbarFontStyles()}
            >
              {t('contactUs')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;