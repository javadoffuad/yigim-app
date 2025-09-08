'use client';

import Image from "next/image";
import styles from "./function-card.module.css";

export interface FunctionCardProps {
    icon: string;
    title: string;
    description: string;
}

export function FunctionCard(props: FunctionCardProps) {
  return (
    <div className={styles.card}>
        <div className={styles.iconWrapper}>
            <Image src={props.icon} alt={props.title} className={styles.icon} />
        </div>
        <div className={styles.content}>
            <h3 className={styles.title}>{props.title}</h3>
            <p className={styles.description}>{props.description}</p>
        </div>
    </div>
  );
}
