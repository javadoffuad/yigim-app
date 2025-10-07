'use client';

import styles from './main-section.module.css';
import { ThingCard, ThingCardProps } from '../thing-card/thing-card';
import { Suspense } from 'react';
import SectionTitle from '@/app/components/section-title/section-title';

export default function ThreeThings({items, productName, videoPath, sectionTitle}: {
    items: ThingCardProps[],
    productName: string,
    videoPath: string,
    sectionTitle: string,
}) {
  return (
    <section className={styles.section}>
        <div className={styles.container}>
            <SectionTitle
                title={productName}
                description={sectionTitle} />

            <div className={styles.content}>
                <div className={styles["content-list"]}>
                    {items.map((item, index) => (
                        <ThingCard key={index} {...item} />
                    ))}
                </div>

                <div className={styles.solution}>
                    <Suspense fallback={<p>Loading video...</p>}>
                        <video className={styles.video} loop autoPlay muted>
                            <source src={videoPath} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </Suspense>
                </div>
            </div>
        </div>
    </section>
  );
}
