'use client';

import Header from '@/components/header/header';
import { RequestCallback } from '@/components/request-callback/request-callback';
import ErrorPageWrapper from '@/components/error-page-wrapper/error-page-wrapper';
import { NextIntlClientProvider } from 'next-intl';
import messagesEn from '@/messages/en.json';
import messagesAz from '@/messages/az.json';

const defaultMessages = {
  NotFound: {
    message: 'This page you are looking for does not exist'
  },
  Header: {
    // добавьте необходимые ключи переводов
  }
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <NextIntlClientProvider locale="en" messages={messagesEn}>
          <Header />
          <RequestCallback />
          <ErrorPageWrapper errorCode="400" message="This page you are looking for does not exist" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}