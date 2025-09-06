'use client';

import Image from "next/image";
import React from "react";
import styles from './contact-card.module.css'

export default function ContactCard({icon, children, altText}: {icon: string, children: React.ReactNode, altText: string}) {
  return (
    <div className={styles["contact-card"]}>
        <div className={styles["contact-icon"]}>
            <Image src={icon} alt={altText} />
        </div>
        <div className={styles["contact-text"]}>{children}</div>
    </div>
  );
}
