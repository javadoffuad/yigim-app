import type { Metadata } from "next";
import Header from '@/components/header/header';
import Footer from "@/components/footer/footer";
import Faq from "@/components/faq/faq";
import { FAQ_LIST } from "@/constants/faq.constants";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { ILayoutProps } from "@/app/models/layout.models";

export const metadata: Metadata = {
  title: "Yigim Home page",
  description: "Yigim Home page description",
};

export default async function MainLayout({children, params}: ILayoutProps) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang="en">
      <body>
        <NextIntlClientProvider>
          <Header />
          {children}
          <Faq items={FAQ_LIST} />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
