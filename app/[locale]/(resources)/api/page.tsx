'use client';

import { generateLocaleStaticParams } from "@/app/utils/static-params";
import PageWrapper from "@/components/page-wrapper/page-wrapper";

export default function ApiDocumentationPage() {
  return (
    <PageWrapper title='Api documentation'>
      Sehife hazir deyil
    </PageWrapper>
  );
}

export async function generateStaticParams() {
  return generateLocaleStaticParams();
}