'use client';

import UnderConstruction from "@/app/components/ui/under-construction/under-construction";
import { I18N_ABOUT_PAGE } from "@/app/constants/i18n.constants";
import PageWrapper from "@/components/page-wrapper/page-wrapper";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations(`${I18N_ABOUT_PAGE}`);
  return (
    <PageWrapper title={t('Label')}>
      <UnderConstruction />
    </PageWrapper>
  );
}