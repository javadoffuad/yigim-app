'use client';

import KeyFacts from './components/key-facts/key-facts';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <>
      <section className={styles.top}></section>
      <KeyFacts />
    </>
  );
}
