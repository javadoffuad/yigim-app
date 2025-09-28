'use client';

import Image from 'next/image';
import styles from './under-construction.module.css';
import icon from '@/public/icons/info.svg';

export default function UnderConstruction() {
  return (
    <div className={styles.container}>
        <Image src={icon} alt='' className={styles.icon} />
        <span className={styles.label}>Page under construction</span>
    </div>
  );
}
