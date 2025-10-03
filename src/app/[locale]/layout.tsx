import type { Metadata } from "next";
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
  title: "IKHWA Investment",
  description: "Your trusted partner for investment solutions",
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