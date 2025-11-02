'use client';

import styles from './page-wrapper.module.css';

interface Props {
    title: string;
    children: React.ReactNode;
    className?: string;
}

export default function PageWrapper({title, children, className}: Props) {
  return (
    <>
      <div className={styles.bg} />
      <main className={styles.main}>
        <div className={styles["title-wrapper"]}>
          <h2 className={styles.title}>{title}</h2>
        </div>

        <div className={`${styles.content} ${className ?? ''}`}>
          <div className={styles.inner}>
            {children}
          </div>
        </div>
      </main>
    </>
  );
}
