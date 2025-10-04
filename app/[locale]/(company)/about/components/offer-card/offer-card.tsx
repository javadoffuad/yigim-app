'use client';

import Image from "next/image";
import React from "react";
import styles from './offer-card.module.css'

export default function OfferCard({icon, children, altText}: {icon: string, children: React.ReactNode, altText: string}) {
  return (
    <div className={styles["contact-card"]}>
        <div className={styles["contact-icon"]}>
            <Image src={icon} alt={altText} className={styles.image} />
        </div>
        <div className={styles["contact-text"]}>{children}</div>
    </div>
  );
}
