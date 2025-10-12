'use client';

import styles from './page-news-detail.module.css';

interface Props {
    children: React.ReactNode;
}

export default function PageNewsDetail({children}: Props) {
  return (
    <>
      <div className={styles.bg} />
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.inner}>
            {children}
          </div>
        </div>
      </main>
    </>
  );
}
