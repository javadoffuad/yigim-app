import type { Metadata } from "next";
import Header from '@/components/header/header';
import Faq from "@/app/components/faq/faq";
import Footer from "@/app/components/footer/footer";
import { RequestCallback } from "@/app/components/request-callback/request-callback";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { ILayoutProps } from "@/app/models/layout.models";

export const metadata: Metadata = {
  title: "Yigim Help center",
  description: "Yigim Help center page description",
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