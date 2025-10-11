import Header from '@/components/header/header';
import { RequestCallback } from '@/components/request-callback/request-callback';
import ErrorPageWrapper from '@/components/error-page-wrapper/error-page-wrapper';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Footer from '../components/footer/footer';

export default async function NotFound() {
  const messages = await getMessages();
  return (
    <html lang="en">
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <RequestCallback />
          <ErrorPageWrapper errorCode="400" />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}