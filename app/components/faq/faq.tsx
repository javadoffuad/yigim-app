'use client';

import { useState } from 'react';
import styles from './faq.module.css';
import FaqItem from '../ui/faq-item/faq-item';
import { FAQ_LIST } from '@/app/constants/faq.constants';

interface Faq {
  question: string;
  answer: string;
}

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const items = FAQ_LIST;

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <section className={styles["faq-section"]}>
            <div className={styles["faq-content"]}>
                <div className={styles["faq-left"]}>
                    <div className={styles["faq-header"]}>
                        <div className={styles["section-subtitle"]}>FREQUENTLY ASKED QUESTIONS</div>
                        <h2 className={styles["faq-title"]}>Have<br />questions in<br />mind? Let us<br />answer it</h2>
                    </div>
                    <div className={styles["faq-contact"]}>
                        Don't answer your question?<br />
                        contact us at <span className={styles["contact-email"]}>contact@yigim.az</span>
                    </div>
                </div>
                <div className={styles.faqList}>
                    {items.map((item, index) => (
                        <FaqItem key={index} item={item} isOpen={index === openIndex} handleClick={() => handleClick(index)} />
                    ))}
                </div>
            </div>
        </section>
    )
}