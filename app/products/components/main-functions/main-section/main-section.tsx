'use client';

import styles from './main-section.module.css';
import {FunctionCard, FunctionCardProps} from "../function-card/function-card";

export default function MainFunctions({items, productName}: {items: FunctionCardProps[], productName: string}) {
  return (
    <section className={styles.section}>
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.subtitle}>{productName}</div>
                <h2 className={styles.title}>Main Functions</h2>
            </div>

            <div className={`${styles.grid} ${items.length === 5 ? styles.five : ''}`}>
                {items.map((item, index) => (
                    <FunctionCard key={index} {...item} />
                ))}
            </div>
        </div>
    </section>
  );
}
