'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

const Footer = () => {
    const { t, locale } = useTranslation();
    const [screenWidth, setScreenWidth] = useState(1024); // Default to desktop size
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const updateScreenWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        updateScreenWidth(); // Set initial width
        window.addEventListener('resize', updateScreenWidth);

        return () => window.removeEventListener('resize', updateScreenWidth);
    }, []);

    if (!mounted) {
        return null;
    }

    const handleFooterNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.includes('#')) {
            e.preventDefault();
            const sectionId = href.split('#')[1];

            // Check if we're currently on the home page
            const currentPath = window.location.pathname;
            const isOnHomePage = currentPath === `/${locale}` || currentPath === '/';

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
                window.location.href = `/${locale}#${sectionId}`;
            }
        }
    };

    const socialMediaLinks = [
        {
            name: t('Home.footer.followUs.facebook'),
            icon: '/Home/Footer/Fecbook.svg',
            url: 'https://www.facebook.com/karihomeco/'
        },
        {
            name: t('Home.footer.followUs.instagram'),
            icon: '/Home/Footer/mdi_instagram.svg',
            url: 'https://www.instagram.com/karihomeco'
        },
        {
            name: t('Home.footer.followUs.twitter'),
            icon: '/Home/Footer/line-md_twitter-x.svg',
            url: 'https://x.com/karihomeco'
        },
        {
            name: t('Home.footer.followUs.linkedin'),
            icon: '/Home/Footer/ri_linkedin-fill.svg',
            url: 'https://www.linkedin.com/company/karihome/'
        },
        {
            name: t('Home.footer.followUs.telegram'),
            icon: '/Home/Footer/ic_outline-telegram.svg',
            url: 'https://t.me/karihomeco'
        },
        {
            name: t('Home.footer.followUs.youtube'),
            icon: '/Home/Footer/youtube.svg',
            url: 'https://www.youtube.com/@karihomeco'
        },
        {
            name: t('Home.footer.followUs.whatsapp'),
            icon: '/Home/Footer/whatsapp.svg',
            url: 'https://api.whatsapp.com/send/?phone=%2B212669166670&text&type=phone_number&app_absent=0'
        }
    ];

    return (
        <footer className="footer-container">
            <div className="footer-content">
                {/* Main Footer Content */}
                <div className="footer-main">

                    <h3 className="footer-newsletter-title">
                        {t('Home.footer.newsletter.title')}
                    </h3>



                    {/* Quick Links */}
                    <div className="footer-nav-column">
                        <h4 className="footer-nav-title">{t('Home.footer.quickLinks.title')}</h4>
                        <ul className="footer-nav-list">
                            <li>
                                <Link
                                    href={`/${locale}`}
                                    className="footer-nav-link"
                                    onClick={(e) => handleFooterNavClick(e, `/${locale}`)}
                                >
                                    {t('Home.footer.quickLinks.home')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`/${locale}#about-us`}
                                    className="footer-nav-link"
                                    onClick={(e) => handleFooterNavClick(e, `/${locale}#about-us`)}
                                >
                                    {t('Home.footer.quickLinks.aboutUs')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`/${locale}#services`}
                                    className="footer-nav-link"
                                    onClick={(e) => handleFooterNavClick(e, `/${locale}#services`)}
                                >
                                    {t('Home.footer.quickLinks.services')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`/${locale}#contact`}
                                    className="footer-nav-link"
                                    onClick={(e) => handleFooterNavClick(e, `/${locale}#contact`)}
                                >
                                    {t('Home.footer.quickLinks.contactUs')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Information Links */}
                    <div className="footer-nav-column">
                        <h4 className="footer-nav-title">{t('Home.footer.information.title')}</h4>
                        <ul className="footer-nav-list">
                            <li>
                                <Link href={`/${locale}/terms`} className="footer-nav-link">
                                    {t('Home.footer.information.termsConditions')}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/privacy`} className="footer-nav-link">
                                    {t('Home.footer.information.privacyPolicy')}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/CompanyFormation`} className="footer-nav-link">
                                    {t('Home.footer.quickLinks.companyFormation')}
                                </Link>
                            </li>
                        </ul>
                    </div>


                </div>

                {/* Bottom Footer */}
                <div className="footer-bottom">
                    {/* Logo and Copyright */}
                    <div className="footer-bottom-left">
                        <div className="footer-logo">
                            <Image
                                src="/logo.png"
                                alt="KARIHOME Logo"
                                width={screenWidth < 768 ? 120 : 150}
                                height={screenWidth < 768 ? 32 : 40}
                                className="footer-logo-image"
                            />
                        </div>
                        <p className="footer-copyright">
                            © KARIHOME - {new Date().getFullYear()} {t('Home.footer.copyright')}
                        </p>
                    </div>

                    {/* Social Media Links */}
                    <div className="footer-bottom-right">
                        <div className="footer-social-section">
                            <span className="footer-social-label">{t('Home.footer.followUs.title')}</span>
                            <div className="footer-social-icons">
                                {socialMediaLinks.map((social, index) => (
                                    <Link
                                        key={index}
                                        href={social.url}
                                        className="footer-social-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                    >
                                        <Image
                                            src={social.icon}
                                            alt={social.name}
                                            width={20}
                                            height={20}
                                            className="footer-social-icon"
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;