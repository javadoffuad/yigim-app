'use client';

import {Link} from '@/i18n/navigation';
import styles from './error-page-wrapper.module.css';
import { PAGE_HOME } from '@/app/constants/navigation.constants';
import { useTranslations } from 'next-intl';
import { I18N_NOT_FOUND_PAGE } from '@/app/constants/i18n.constants';

interface ErrorPageProps {
    errorCode: string;
}

export default function ErrorPageWrapper({errorCode}: ErrorPageProps) {
  const t = useTranslations(I18N_NOT_FOUND_PAGE);
  return (
    <div className={styles.page}>
      <div className={styles.bg}>
        <div className={styles.container}>
          <p className={styles.message}>{t('Label')}</p>
          <h1 className={styles.code}>{errorCode}</h1>
          <Link href={PAGE_HOME} className="button button-primary">{t('ButtonGoHome.Label')}</Link>
        </div>
      </div>
    </div>
  );
}
