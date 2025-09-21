'use client';

import Image from 'next/image';
import styles from './contact-form.module.css';
import userIcon from '@/public/icons/user.svg';
import phoneIcon from '@/public/icons/phone.svg';
import letterIcon from '@/public/icons/letter.svg';

export default function ContactForm() {
    return (
        <div className={styles["contact-form-section"]}>
            <div className={styles["form-header"]}>
                <div className={styles["form-subtitle"]}>WE WILL CALL YOU.</div>
                <h2 className={styles["form-title"]}>Have a question?</h2>
            </div>
            
            <form className={styles["contact-form"]}>
                <div className={styles["form-row"]}>
                    <div className={styles["input-group"]}>
                        <Image src={userIcon} className={styles["input-icon"]} alt='' />
                        <input type="text" placeholder="Full Name" className={styles["form-input"]} />
                    </div>
                    
                    <div className={styles["input-group"]}>
                        <Image src={phoneIcon} className={styles["input-icon"]} alt='' />
                        <input type="tel" placeholder="Phone number" className={styles["form-input"]} />
                    </div>
                </div>
                
                <div className={`${styles["input-group"]} ${styles["textarea-group"]}`}>
                    <Image src={letterIcon} className={styles["input-icon"]} alt='' />
                    <textarea placeholder="Message" className={styles["form-textarea"]}></textarea>
                </div>
                
                <button type="submit" className={styles["submit-btn"]}>Send request</button>
            </form>
        </div>
    );
}