import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KARIHOME | مع كاريهوم انسى هموم البناء",
  description: "كاريهوم (KARIHOME SARL) - شركة مغربية رائدة في مجال المقاولات والبناء والتشييد والترميم. نبني حلمك من الأساس إلى التسليم بحلول متكاملة وتصاميم عصرية وتكلفة مدروسة. شركة ذات مسؤولية محدودة مسجلة في القنيطرة",
  keywords: "كاريهوم, KARIHOME, مقاولات المغرب, بناء, تشييد, ترميم, تشطيبات, ديكورات داخلية, تأثيث, القنيطرة, المغرب, مقاول, construction, building, renovation, Morocco",
  authors: [{ name: "KARIHOME SARL" }],
  creator: "KARIHOME SARL",
  publisher: "KARIHOME SARL",
  robots: "index, follow",
  metadataBase: new URL("https://karihomeco.com"),
  alternates: {
    canonical: "https://karihomeco.com",
  },
  openGraph: {
    title: "KARIHOME | مع كاريهوم انسى هموم البناء",
    description: "شركة كاريهوم المغربية الرائدة في المقاولات والبناء والتشييد. نبني حلمك من الأساس إلى التسليم بجودة عالية والتزام بالمواعيد",
    type: "website",
    locale: "ar_MA",
    alternateLocale: ["en_US", "fr_FR"],
    siteName: "KARIHOME",
    url: "https://karihomeco.com",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="geo.region" content="MA" />
        <meta name="geo.placename" content="القنيطرة, المغرب" />
        <meta name="business:contact_data:phone_number" content="+212663806725" />
        <meta name="business:contact_data:email" content="contact@ikhwanetwork.com" />
        <meta name="business:contact_data:locality" content="القنيطرة" />
        <meta name="business:contact_data:country_name" content="المغرب" />
        <meta name="business:contact_data:region" content="الرباط سلا القنيطرة" />
        <meta property="business:registration_number" content="72857" />
        <meta property="business:legal_name" content="KARIHOME SARL" />
        <link rel="icon" href="/Logo.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/Logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/Logo.svg" />
        <link
          rel="preload"
          href="/fonts/IBM_Plex_Sans_Arabic/IBMPlexSansArabic-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/IBM_Plex_Sans_Arabic/IBMPlexSansArabic-SemiBold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Lato/Lato-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
