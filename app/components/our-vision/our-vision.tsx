'use client';

import { useTranslations } from 'next-intl';
import styles from './our-vision.module.css';
import { I18N_HOME_PAGE } from '@/app/constants/i18n.constants';

export default function OurVision() {
  const t = useTranslations(`${I18N_HOME_PAGE}.AreaOurVision`);
  return (
    <section className={styles.section}>
        <div className={styles.content}>
            <div className={styles.text}>
                <h3 className={styles.title}>{t('Label')}</h3>
                <p className={styles.description}>
                  {t('Description')}
                </p>
            </div>
        </div>
    </section>
  );
}
