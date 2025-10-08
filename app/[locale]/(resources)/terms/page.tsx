'use client';

import styles from './page.module.css';
import { I18N_TERMS_CONDITION_PAGE } from "@/app/constants/i18n.constants";
import PageWrapper from "@/components/page-wrapper/page-wrapper";
import { useTranslations } from "next-intl";

export default function TermsServicesPage() {
  const t = useTranslations(I18N_TERMS_CONDITION_PAGE);
  return (
    <PageWrapper title={t('Label')}>
      <div className={styles.content} dangerouslySetInnerHTML={{__html: t.raw('Content')}} />
    </PageWrapper>
  );
}