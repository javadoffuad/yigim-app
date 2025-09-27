'use client';

import { useState } from 'react';
import styles from './contact-form.module.css';
import userIcon from '@/public/icons/user.svg';
import phoneIcon from '@/public/icons/phone.svg';
import letterIcon from '@/public/icons/letter.svg';
import Input from '@/app/components/ui/input/input';
import Textarea from '@/app/components/ui/textarea/textarea';

export default function ContactForm() {
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div className={styles["contact-form-section"]}>
            <div className={styles["form-header"]}>
                <div className={styles["form-subtitle"]}>WE WILL CALL YOU.</div>
                <h2 className={styles["form-title"]}>Have a question?</h2>
            </div>
            
            <form className={styles["contact-form"]}>
                <div className={styles["form-row"]}>
                    <Input icon={userIcon} label="Full Name" value={fullName} onChange={setFullName} />
                    
                    <Input icon={phoneIcon} label="Phone number" value={phoneNumber} onChange={setPhoneNumber} />
                </div>

                <Textarea
                    icon={letterIcon}
                    label="Message"
                    value={message}
                    onChange={setMessage} />
                
                <button type="submit" className={styles["submit-btn"]}>Send request</button>
            </form>
        </div>
    );
}