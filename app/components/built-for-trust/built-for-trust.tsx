'use client';

import Image from 'next/image';
import styles from './built-for-trust.module.css';
import eyEntrepreneurIcon from '@/public/icons/ey-entrepreneur-of-the-year.png';

export default function BuiltForTrust() {
    return (
        <section className={styles["section"]}>
            <div className={styles["content"]}>
                <h3 className={styles["section-title"]}>Built for<br />Trust</h3>
                <div className={`${styles["card"]} ${styles["card-1"]}`}>
                    <div className={styles["card-title"]}>Secure by default</div>
                    <div className={styles["card-footer"]}>
                        <p className={styles["card-brand"]}>PCI DSS</p>
                        <p className={styles["card-text"]}>Level 1 Certified</p>
                    </div>
                </div>
                <div className={`${styles["card"]} ${styles["card-2"]}`}>
                    <div className={styles["card-title"]}>Licensed by the</div>
                    <div className={styles["card-footer"]}>
                        <p className={styles["card-text"]}>Central Bank of Azerbaijan</p>
                    </div>
                </div>
                <div className={`${styles["card"]} ${styles["card-3"]}`}>
                    <div className={styles["card-title"]}>Official Visa<br /> technology partner</div>
                    <div className={styles["card-footer"]}>
                        <p className={styles["card-brand"]}>Visa</p>
                        <p className={styles["card-text"]}>Official partner</p>
                    </div>
                </div>
                <div className={`${styles["card"]} ${styles["card-4"]}`}>
                    <div className={styles["card-title"]}>Licensed by the</div>
                    <div className={styles["card-footer"]}>
                        <p className={styles["card-text"]}>Ministry of Digital Development and Transport of Azerbaijan</p>
                    </div>
                </div>
                <div className={`${styles["card"]} ${styles["card-5"]}`}>
                    <div className={styles["card-title"]}>Best customer solution nomination.</div>
                    <div className={styles["card-footer"]}>
                        <Image src={eyEntrepreneurIcon} alt='' />
                    </div>
                </div>
            </div>
        </section>
    )
}