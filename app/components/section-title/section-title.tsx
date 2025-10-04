'use client';

import styles from './section-title.module.css';
import { useTranslations } from 'next-intl';
import { I18N_PARTNERS_PAGE } from '@/app/constants/i18n.constants';

interface Props {
    title: string;
    description: string | TrustedHTML;
    textAlign?: 'left' | 'center';
    size?: 'm' | 'l';
}

export default function SectionTitle({title, description, textAlign, size}: Props) {
  const t = useTranslations(`${I18N_PARTNERS_PAGE}`);
  const align = textAlign === 'left' ? styles['align-left'] : '';
  const textSize = size === 'm' ? styles['middle'] : '';

  return (
    <div className={`${styles.container} ${align} ${textSize}`}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description} dangerouslySetInnerHTML={{__html: description}} />
    </div>
  );
}