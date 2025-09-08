'use client';

import styles from './main-section.module.css';
import { ThingCard, ThingCardProps } from '../thing-card/thing-card';
import Image from 'next/image';
import image from '@/public/images/ecom-solution.jpg';

export default function ThreeThings({items}: {items: ThingCardProps[]}) {
  return (
    <section className={styles.section}>
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.subtitle}>INTERNET - ACQUIRING / E-COMM SOLUTION</div>
                <h2 className={styles.title}>3 Things To Know</h2>
            </div>

            <div className={styles.content}>
                <div className={styles["content-list"]}>
                    {items.map((item, index) => (
                        <ThingCard key={index} {...item} />
                    ))}
                </div>

                <div className={styles.solution}>
                    <Image src={image} alt="E-commerce Solution" className={styles["solution-image"]} />
                </div>
            </div>
        </div>
    </section>
  );
}
