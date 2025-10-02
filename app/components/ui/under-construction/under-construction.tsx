'use client';

import Image from 'next/image';
import styles from './under-construction.module.css';
import icon from '@/public/icons/info.svg';
import { useTranslations } from 'next-intl';

export default function UnderConstruction() {
  const t = useTranslations('PageUnderConstruction');
  return (
    <div className={styles.container}>
        <Image src={icon} alt='' className={styles.icon} />
        <span className={styles.label}>{t('Label')}</span>
    </div>
  );
}
