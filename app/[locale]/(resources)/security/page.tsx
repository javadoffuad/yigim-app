'use client';

import UnderConstruction from "@/app/components/ui/under-construction/under-construction";
import { I18N_PRİVACY_POLICY_PAGE } from "@/app/constants/i18n.constants";
import PageWrapper from "@/components/page-wrapper/page-wrapper";
import { useTranslations } from "next-intl";

export default function HelpCenterPage() {
  const t = useTranslations(`${I18N_PRİVACY_POLICY_PAGE}`);
  return (
    <PageWrapper title={t('Label')}>
      <UnderConstruction />
    </PageWrapper>
  );
}