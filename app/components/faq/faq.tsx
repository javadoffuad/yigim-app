'use client';

import styles from './faq.module.css';

interface Faq {
  question: string;
  answer: string;
}

export default function Faq({items}: {items: Faq[]}) {
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
                        <div key={index} className={styles.faqItem}>
                            <button className={styles.faqQuestion}>
                                {item.question}
                                <svg className={styles.faqIcon} width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                            <div className={styles.faqAnswer}>
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}