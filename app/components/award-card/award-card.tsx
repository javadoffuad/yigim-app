import React from "react";
import styles from "./award-card.module.css";
import Image from "next/image";

interface AwardCardProps {
  icon: string;
  title: string;
  year?: string;
  type: 'card' | 'stroke'
}

export default function AwardCard(props: AwardCardProps) {
  return (
    <div className={`${styles["award"]} ${props.type === 'card' ? styles['card'] : ''}`}>
      {
        props.year
        ? <div className={styles.year}>{props.year}</div> 
        : null
      }
      <div className={styles.info}>
        <div className={styles["icon-wrapper"]}>
          <Image src={props.icon} alt="" className={styles["icon"]} />
        </div>
        <div className={styles["title"]}>{props.title}</div>
      </div>
    </div>
  );
};