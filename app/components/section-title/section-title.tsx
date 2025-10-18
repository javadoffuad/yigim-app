'use client';

import styles from './section-title.module.css';

interface Props {
    title: string;
    description: string | TrustedHTML;
    textAlign?: 'left' | 'center';
    size?: 'm' | 'l' | 'xl';
}

export default function SectionTitle({title, description, textAlign, size}: Props) {
  const align = textAlign === 'left' ? styles['align-left'] : '';
  const textSize = size === 'm'
    ? styles['size-m']
    : size === 'xl'
      ? styles['size-xl']
      : '';

  return (
    <div className={`${styles.container} ${align} ${textSize}`}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description} dangerouslySetInnerHTML={{__html: description}} />
    </div>
  );
}