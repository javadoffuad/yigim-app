'use client';

import { I18N_COOKIE_POLICY_PAGE } from "@/app/constants/i18n.constants";
import PageWrapper from "@/components/page-wrapper/page-wrapper";
import { useTranslations } from "next-intl";
import styles from './page.module.css';

export default function HelpCenterPage() {
  const t = useTranslations(I18N_COOKIE_POLICY_PAGE);
  return (
    <PageWrapper title={t('Label')}>
      <div className={styles.content} dangerouslySetInnerHTML={{__html: t.raw('Content')}} />
    </PageWrapper>
  );
}