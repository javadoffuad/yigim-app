'use client';

import styles from './main-section.module.css';
import Image from 'next/image';
import { RealLifeCard, RealLifeCardProps } from '../real-life-card/real-life-card';
import arrowIcon from '@/public/icons/arrow-right.svg';

export default function RealLifeCases({items}: {items: RealLifeCardProps[]}) {
    const case1 = items[0];
    const case2 = items[1];
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
                <RealLifeCard icon={case1.icon}>
                    In services like <strong>taxi rides or food delivery</strong>
                    (e.g. Bolt or Wolt), funds can be <strong>securely pre-authorized</strong>
                    and blocked (frozen) until the service is delivered.
                </RealLifeCard>
                
                <div className={styles["arrow-connector"]}>
                    <Image src={arrowIcon} alt="Arrow" className={styles.arrow} />
                </div>
                
                <RealLifeCard icon={case2.icon}>
                    If the service is canceled or not used, the amount is unblocked
                    (returned back) to the customer — <strong>without any commission</strong> or penalty.
                </RealLifeCard>
            </div>
        </div>
    </section>
  );
}
