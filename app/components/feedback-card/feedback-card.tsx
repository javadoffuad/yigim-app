import Image from "next/image";
import styles from './feedback-card.module.css';

interface FeedbackCard {
  companyLogo: string;
  author: string;
  feedbackText: string;
  authorTitle: string;
}

export default function FeedbackCard({ 
  companyLogo, 
  author, 
  feedbackText, 
  authorTitle 
}: FeedbackCard) {
    return (
        <div className={styles.card}>
            <p className={styles.quote}>
                {feedbackText}
            </p>
            <div className={styles.author}>
                <Image src={companyLogo} alt={author} className={styles.authorAvatar} />
                <div className={styles.authorInfo}>
                    <div className={styles.authorName}>{author}</div>
                    <div className={styles.authorTitle}>{authorTitle}</div>
                </div>
            </div>
        </div>
    )
}