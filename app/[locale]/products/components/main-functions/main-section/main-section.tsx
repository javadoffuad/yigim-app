'use client';

import styles from './main-section.module.css';
import { FunctionCard, FunctionCardProps } from "../function-card/function-card";
import SectionTitle from '@/app/components/section-title/section-title';

export default function MainFunctions({
    items,
    productName,
    sectionTitle
}: { items: FunctionCardProps[], productName: string, sectionTitle: string }) {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <SectionTitle
                    title={productName}
                    description={sectionTitle} />

                <div className={`${styles.grid} ${items.length === 5 ? styles.five : ''}`}>
                    {items.map((item, index) => (
                        <FunctionCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
