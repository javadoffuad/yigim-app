import type { Metadata } from "next";
import Header from '@/components/header/header';
import Footer from "@/components/footer/footer";
import Faq from "@/components/faq/faq";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ILayoutProps } from "@/app/models/layout.models";
import { getTranslations } from "next-intl/server";
import { I18N_HOME_PAGE } from "@/app/constants/i18n.constants";

export async function generateMetadata({params}: ILayoutProps) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: I18N_HOME_PAGE});
 
  return {
    title: t('Metadata.Title'),
    description: t('Metadata.Description'),
    keywords: t('Metadata.Keywords')
  } as Metadata;
}

export default async function MainLayout({children, params}: ILayoutProps) {
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
          {children}
          <Faq />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}