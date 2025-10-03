'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import NavbarLanguageSwitcher from './NavbarLanguageSwitcher';
import NavbarThemeToggle from './NavbarThemeToggle';
import { getFontStyles } from '../../utils/fonts';
import { useDetectedLocale } from '../../hooks/useDetectedLocale';
import Image from 'next/image';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const t = useTranslations('navbar');
  const detectedLocale = useDetectedLocale();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      className={`
        fixed top-0 left-0 right-0 z-50
        bg-black/20 backdrop-blur-md border-b border-white/10
        flex justify-between items-center transition-all duration-300
        navbar-padding-responsive
        ${className}
      `}
    >
      {/* Left side: Logo and Navigation */}
      <div className="flex items-center gap-8">
        <Link href="/" className="flex items-start">
          <Image
            src="/logo.png"
            alt="Logo"
            width={92}
            height={52}
            className="navbar-logo"
          />
        </Link>

        {/* Navigation Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.key}>
              <Link
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-white hover:text-green-400 transition-colors duration-300 relative group navbar-text-responsive"
                style={getNavbarFontStyles()}
              >
                {t(item.key)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Language Switcher */}
        <div className="hidden lg:block">
          <NavbarLanguageSwitcher />
        </div>
      </div>

      {/* Right side: Theme Toggle, Contact Button and Mobile Menu Button */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle - Always visible */}
        <div>
          <NavbarThemeToggle />
        </div>

        {/* Language Switcher - Visible on mobile too */}
        <div className="lg:hidden">
          <NavbarLanguageSwitcher />
        </div>

        {/* Contact Button - Hidden on mobile (only shows in mobile menu) */}
        <Link
          href={`/${detectedLocale}#contact`}
          onClick={(e) => handleNavClick(e, `/${detectedLocale}#contact`)}
          className="hidden lg:block bg-transparent border border-white/50 text-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm navbar-contact-button"
          style={getNavbarFontStyles()}
        >
          {t('contactUs')}
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="block text-white hover:text-green-400 transition-colors duration-300 py-2 navbar-text-responsive"
                style={getNavbarFontStyles()}
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
              className="navbar-contact-button w-full bg-transparent border border-white/50 text-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition-all duration-300 navbar-text-responsive mt-4 block text-center"
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