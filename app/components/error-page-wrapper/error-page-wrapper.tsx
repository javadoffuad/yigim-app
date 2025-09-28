'use client';

import {Link} from '@/i18n/navigation';
import styles from './error-page-wrapper.module.css';
import { PAGE_HOME } from '@/app/constants/navigation.constants';

interface ErrorPageProps {
    errorCode: string;
    message: React.ReactNode;
}

export default function ErrorPageWrapper({errorCode, message}: ErrorPageProps) {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <p className={styles.message}>{message}</p>
        <h1 className={styles.code}>{errorCode}</h1>
        <Link href={PAGE_HOME} className="button button-primary">Go home</Link>
      </div>
    </div>
  );
}
