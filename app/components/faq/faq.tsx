'use client';

import { useState } from 'react';
import styles from './faq.module.css';
import FaqItem from '../ui/faq-item/faq-item';
import { useTranslations } from 'next-intl';

interface Faq {
  question: string;
  answer: string;
}

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const t = useTranslations(`FAQ`);
    const faqItems = [
        {
            question: t('AreaQuestions.Question1.Label'),
            answer: t('AreaQuestions.Question1.Answer'),
        },
        {
            question: t('AreaQuestions.Question2.Label'),
            answer: t('AreaQuestions.Question2.Answer'),
        },
        {
            question: t('AreaQuestions.Question3.Label'),
            answer: t('AreaQuestions.Question3.Answer'),
        },
        {
            question: t('AreaQuestions.Question4.Label'),
            answer: t('AreaQuestions.Question4.Answer'),
        },
        {
            question: t('AreaQuestions.Question5.Label'),
            answer: t('AreaQuestions.Question5.Answer'),
        },
        {
            question: t('AreaQuestions.Question6.Label'),
            answer: t('AreaQuestions.Question6.Answer'),
        },
        {
            question: t('AreaQuestions.Question7.Label'),
            answer: t('AreaQuestions.Question7.Answer'),
        },
        {
            question: t('AreaQuestions.Question8.Label'),
            answer: t('AreaQuestions.Question8.Answer'),
        },
    ];

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <section className={styles["faq-section"]}>
            <div className={styles["faq-content"]}>
                <div className={styles["faq-left"]}>
                    <div className={styles["faq-header"]}>
                        <div className={styles["section-subtitle"]}>{t('Label')}</div>
                        <h2 className={styles["faq-title"]} dangerouslySetInnerHTML={{__html: t.raw('SubLabel')}} />
                    </div>
                    <div className={styles["faq-contact"]}
                        dangerouslySetInnerHTML={{__html: t.raw('LabelContact')}} />
                </div>
                <div className={styles.faqList}>
                    {faqItems.map((item, index) => (
                        <FaqItem key={index} item={item} isOpen={index === openIndex} handleClick={() => handleClick(index)} />
                    ))}
                </div>
            </div>
        </section>
    )
}