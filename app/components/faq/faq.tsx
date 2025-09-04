import styles from './faq.module.css';

interface Faq {
  question: string;
  answer: string;
}

export default function Faq({items}: {items: Faq[]}) {
    return (
        <div className={styles.faqList}>
            {items.map(item => (
            <div className={styles.faqItem}>
                <button className={styles.faqQuestion}>
                    {item.question}
                    <svg className={styles.faqIcon} width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <div className={styles.faqAnswer}>
                    <p>{item.answer}</p>
                </div>
            </div>
            ))}
        </div>
    )
}