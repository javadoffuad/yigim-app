'use client';

import Header from '@/components/header/header';
import { RequestCallback } from '@/components/request-callback/request-callback';
import ErrorPageWrapper from '@/components/error-page-wrapper/error-page-wrapper';
import { NextIntlClientProvider } from 'next-intl';
import messagesEn from '@/messages/en.json';

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <NextIntlClientProvider locale="en" messages={messagesEn}>
          <Header />
          <RequestCallback />
          <ErrorPageWrapper errorCode="400" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}