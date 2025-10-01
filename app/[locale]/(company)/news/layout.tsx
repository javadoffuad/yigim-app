import type { Metadata } from "next";
import Header from '@/components/header/header';
import Footer from "@/components/footer/footer";
import Faq from "@/components/faq/faq";
import { RequestCallback } from "@/components/request-callback/request-callback";
import { setRequestLocale } from "next-intl/server";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ILayoutProps } from "@/app/models/layout.models";
import { generateLocaleStaticParams } from "@/app/utils/static-params";

export const metadata: Metadata = {
  title: "Yigim Company News",
  description: "Yigim Company News page description",
};

export default async function Layout({children, params}: ILayoutProps) {
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
          <RequestCallback />
          {children}
          <Faq />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return generateLocaleStaticParams();
}