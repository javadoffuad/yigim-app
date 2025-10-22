import Image from "next/image";
import styles from './feedback-card.module.css';
import { IFeedback } from "@/app/models/feedback.models";

export default function FeedbackCard({ 
  brand, 
  author, 
  feedback, 
  position
}: IFeedback) {
    return (
        <div className={styles.card}>
            <p className={styles.quote}>
                {feedback}
            </p>
            <div className={styles.author}>
                <div className={styles.brand} style={{backgroundColor: brand.color}}>
                    <Image src={brand.icon} alt={author} className={styles.brandIcon} />
                </div>
                <div className={styles.authorInfo}>
                    <div className={styles.authorName}>{author}</div>
                    <div className={styles.position}>{position}</div>
                </div>
            </div>
        </div>
    )
}