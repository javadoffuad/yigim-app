'use client';

import { I18N_NEWS_PAGE } from "@/app/constants/i18n.constants";
import PageWrapper from "@/components/page-wrapper/page-wrapper";
import { useTranslations } from "next-intl";
import styles from './page.module.css';
import UnderConstruction from "@/app/components/ui/under-construction/under-construction";

export default function NewsPage() {
  const t = useTranslations(`${I18N_NEWS_PAGE}`);
  return (
    <PageWrapper title={t('Label')}>
      <UnderConstruction />
    </PageWrapper>
  );
}