import type { Metadata, Viewport } from "next";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import LocaleProvider from '../../components/LocaleProvider';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Home/Footer";

export const metadata: Metadata = {
  title: "KARIHOME | مع كاريهوم انسى هموم البناء",
  description: "كاريهوم (KARIHOME SARL) - شركة مغربية رائدة في مجال المقاولات والبناء والتشييد والترميم. نبني حلمك من الأساس إلى التسليم بحلول متكاملة وتصاميم عصرية وتكلفة مدروسة. شركة ذات مسؤولية محدودة مسجلة في القنيطرة",
  keywords: "كاريهوم, KARIHOME, مقاولات المغرب, بناء, تشييد, ترميم, تشطيبات, ديكورات داخلية, تأثيث, القنيطرة, المغرب, مقاول, construction, building, renovation, Morocco",
  authors: [{ name: "KARIHOME SARL" }],
  creator: "KARIHOME SARL",
  publisher: "KARIHOME SARL",
  robots: "index, follow",
  metadataBase: new URL("https://karihome.com"),
  alternates: {
    canonical: "https://karihome.com",
  },
  openGraph: {
    title: "KARIHOME | مع كاريهوم انسى هموم البناء",
    description: "شركة كاريهوم المغربية الرائدة في المقاولات والبناء والتشييد. نبني حلمك من الأساس إلى التسليم بجودة عالية والتزام بالمواعيد",
    type: "website",
    locale: "ar_MA",
    alternateLocale: ["en_US", "fr_FR"],
    siteName: "KARIHOME",
    url: "https://karihome.com",
    countryName: "Morocco",
    images: [
      {
        url: "/Logo.svg",
        width: 800,
        height: 600,
        alt: "KARIHOME - شعار شركة كاريهوم للمقاولات والبناء",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KARIHOME | مع كاريهوم انسى هموم البناء",
    description: "شركة كاريهوم المغربية الرائدة في المقاولات والبناء والتشييد",
    images: ["/Logo.svg"],
  },
  other: {
    "contact:phone_number": "+212663806725",
    "contact:email": "contact@ikhwanetwork.com",
    "business:contact_data:locality": "القنيطرة",
    "business:contact_data:country_name": "المغرب",
    "business:contact_data:region": "الرباط سلا القنيطرة",
  },
  icons: {
    icon: "/Logo.svg",
    shortcut: "/Logo.svg",
    apple: "/Logo.svg",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages({ locale });

  return (
    <LocaleProvider locale={locale}>
      <NextIntlClientProvider messages={messages}>
        <Navbar />
        {children}
        <Footer />
      </NextIntlClientProvider>
    </LocaleProvider>
  );
}