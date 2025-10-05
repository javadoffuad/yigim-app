'use client';

import Image from "next/image";
import styles from "./real-life-card.module.css";

export interface RealLifeCardProps {
    icon: string;
    children: React.ReactNode | any;
}

export function RealLifeCard(props: RealLifeCardProps) {
  return (
    <div className={styles.card}>
        <div className={styles.iconWrapper}>
          <Image src={props.icon} alt="1" className={styles.icon} />
        </div>
        <div className={styles.content}>
            {props.children}
        </div>
    </div>
  );
}
