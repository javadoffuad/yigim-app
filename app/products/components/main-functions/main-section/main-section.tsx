'use client';

import styles from './main-section.module.css';
import {FunctionCard, FunctionCardProps} from "../function-card/function-card";

export default function MainFunctions({items}: {items: FunctionCardProps[]}) {
  return (
    <section className={styles.section}>
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.subtitle}>INTERNET - ACQUIRING / E-COMM SOLUTION</div>
                <h2 className={styles.title}>Main Functions</h2>
            </div>

            <div className={styles.grid}>
                {items.map((item, index) => (
                    <FunctionCard key={index} {...item} />
                ))}
            </div>
        </div>
    </section>
  );
}
