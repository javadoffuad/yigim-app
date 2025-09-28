'use client';

import Image from 'next/image';
import styles from './contact-map.module.css';
import map from '@/public/map.png';

export default function ContactMap() {
    return (
        <section className={styles["map-section"]}>
            <Image src={map} alt="Map" className={styles["map-image"]} />
        </section>
    );
}