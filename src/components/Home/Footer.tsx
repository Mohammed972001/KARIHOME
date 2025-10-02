'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';

const Footer = () => {
    const { t, locale } = useTranslation();

    const socialMediaLinks = [
        {
            name: t('Home.footer.followUs.facebook'),
            icon: '/Home/Footer/Fecbook.svg',
            url: '#'
        },
        {
            name: t('Home.footer.followUs.instagram'),
            icon: '/Home/Footer/mdi_instagram.svg',
            url: '#'
        },
        {
            name: t('Home.footer.followUs.twitter'),
            icon: '/Home/Footer/line-md_twitter-x.svg',
            url: '#'
        },
        {
            name: t('Home.footer.followUs.linkedin'),
            icon: '/Home/Footer/ri_linkedin-fill.svg',
            url: '#'
        },
        {
            name: t('Home.footer.followUs.telegram'),
            icon: '/Home/Footer/ic_outline-telegram.svg',
            url: '#'
        }
    ];

    return (
        <footer className="footer-container">
            <div className="footer-wrapper">
                {/* Logo Section */}
                <div className="footer-section footer-logo-section">
                    <div className="footer-logo">
                        <Image
                            src="/logo.png"
                            alt="IKHWA Investment Logo"
                            width={500}
                            height={100}
                            className="logo-image"
                        />
                    </div>
                </div>

                {/* Company Information Section */}
                <div className="footer-section footer-company-info">
                    <h3 className="footer-title">{t('Home.footer.companyInfo.title')}</h3>
                    <p className="footer-description">
                        {t('Home.footer.companyInfo.description')}
                    </p>
                </div>

                {/* Quick Links Section */}
                <div className="footer-section footer-quick-links">
                    <h3 className="footer-title">{t('Home.footer.quickLinks.title')}</h3>
                    <ul className="footer-links-list">
                        <li>
                            <Link href={`/${locale}`} className="footer-link">
                                {t('Home.footer.quickLinks.home')}
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${locale}#about-us`} className="footer-link">
                                {t('Home.footer.quickLinks.aboutUs')}
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${locale}#services`} className="footer-link">
                                {t('Home.footer.quickLinks.services')}
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${locale}#contact`} className="footer-link">
                                {t('Home.footer.quickLinks.contactUs')}
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Information Section */}
                <div className="footer-section footer-information">
                    <h3 className="footer-title">{t('Home.footer.information.title')}</h3>
                    <ul className="footer-links-list">
                        <li>
                            <Link href={`/${locale}/terms`} className="footer-link">
                                {t('Home.footer.information.termsConditions')}
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${locale}/privacy`} className="footer-link">
                                {t('Home.footer.information.privacyPolicy')}
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Follow Us Section */}
                <div className="footer-section footer-follow-us">
                    <h3 className="footer-title">{t('Home.footer.followUs.title')}</h3>
                    <ul className="footer-social-links">
                        {socialMediaLinks.map((social, index) => (
                            <li key={index} className="footer-social-item">
                                <Link
                                    href={social.url}
                                    className="footer-social-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src={social.icon}
                                        alt={social.name}
                                        width={24}
                                        height={24}
                                        className="footer-social-icon"
                                    />
                                    <span className="footer-social-text">{social.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;