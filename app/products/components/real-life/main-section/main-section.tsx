'use client';

import styles from './main-section.module.css';
import { RealLifeCard, RealLifeCardProps } from '../real-life-card/real-life-card';

export default function RealLifeCases({items}: {items: RealLifeCardProps[]}) {
  return (
    <section className={styles.section}>
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.subtitle}>INTERNET - ACQUIRING / E-COMM SOLUTION</div>
                <h2 className={styles.title}>Real-Life Example</h2>
            </div>

            <div className={styles["hero-banner"]}>
                <div className={styles["hero-content"]}>
                    <h2 className={styles["hero-title"]}>Secure Pre-Authorization</h2>
                </div>
            </div>

            <div className={styles.cards}>
                {
                    items.map(item => (
                        <RealLifeCard icon={item.icon}>
                            {item.children}
                        </RealLifeCard>
                    ))
                }
            </div>
        </div>
    </section>
  );
}
