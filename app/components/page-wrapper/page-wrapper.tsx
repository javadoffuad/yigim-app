'use client';

import styles from './page-wrapper.module.css';

interface Props {
    title: string;
}

export default function PageWrapper({title}: Props) {
  return (
    <>
        <div className={styles.bg} />

        <main className={styles.main}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.content}></div>
        </main>
    </>
  );
}
