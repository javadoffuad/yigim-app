'use client';

import { generateLocaleStaticParams } from "@/app/utils/static-params";
import PageWrapper from "@/components/page-wrapper/page-wrapper";

export default function NewsPage() {
  return (
    <PageWrapper title='Company News'>
      Sehife hazir deyil
    </PageWrapper>
  );
}

export async function generateStaticParams() {
  return generateLocaleStaticParams();
}