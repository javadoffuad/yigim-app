'use client';

import { generateLocaleStaticParams } from "@/app/utils/static-params";
import PageWrapper from "@/components/page-wrapper/page-wrapper";

export default function AboutPage() {
  return (
    <PageWrapper title='Behind the Brand'>
      Sehife hazir deyil
    </PageWrapper>
  );
}

export async function generateStaticParams() {
  return generateLocaleStaticParams();
}