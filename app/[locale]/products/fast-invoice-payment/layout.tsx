import type { Metadata } from "next";
import Header from '@/components/header/header';
import Faq from "@/app/components/faq/faq";
import Footer from "@/app/components/footer/footer";
import { RequestCallback } from "@/components/request-callback/request-callback";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { ILayoutProps } from "@/app/models/layout.models";
import { getTranslations } from "next-intl/server";
import { getMetadataTitle } from "@/app/utils/metadata.utils";
import { I18N_METADATA } from "@/app/constants/i18n.constants";

export async function generateMetadata({params}: ILayoutProps) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Products.Product4'});
  const m = await getTranslations({locale, namespace: I18N_METADATA});
 
  return {
    title: getMetadataTitle(t('Label')),
    description: m('Description'),
    keywords: m('Keywords')
  } as Metadata;
}

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