'use client';

import styles from "./thing-card.module.css";

export interface ThingCardProps {
    number: number;
    title: string;
    description: string;
}

export function ThingCard(props: ThingCardProps) {
  return (
    <div className={styles.card}>
        <div className={styles.number}>{props.number}</div>
        <div className={styles.details}>
            <h3 className={styles.title}>{props.title}</h3>
            <p className={styles.description}>{props.description}</p>
        </div>
    </div>
  );
}
