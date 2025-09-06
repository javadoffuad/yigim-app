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
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.content}>
                {children}
            </div>
        </main>
    </>
  );
}
