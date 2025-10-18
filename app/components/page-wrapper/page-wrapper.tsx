'use client';

import styles from './page-wrapper.module.css';

interface Props {
    title: string;
    children: React.ReactNode;
}

export default function PageWrapper({title, children}: Props) {
  return (
    <>
      <div className={styles.bg} />
      <main className={styles.main}>
        <div className={styles["title-wrapper"]}>
          <h2 className={styles.title}>{title}</h2>
        </div>

        <div className={styles.content}>
          <div className={styles.inner}>
            {children}
          </div>
        </div>
      </main>
    </>
  );
}
