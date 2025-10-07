import type { Metadata } from "next";
import Header from '@/components/header/header';
import Footer from "@/components/footer/footer";
import Faq from "@/components/faq/faq";
import { RequestCallback } from "@/components/request-callback/request-callback";
import { ILayoutProps } from "@/app/models/layout.models";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Yigim Contacts",
  description: "Yigim Contacts page description",
};

export default async function Layout({children, params}: ILayoutProps) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang="en">
      <body>
        <NextIntlClientProvider>
          <Header />
          <RequestCallback />
          {children}
          <Faq />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
