'use client';

import FeedbackCard from '@/app/components/feedback-card/feedback-card';
import styles from './who-loves-us.module.css';
import { IFeedback } from '@/app/models/feedback.models';
import { FEEDBACKS1, FEEDBACKS2 } from '@/app/constants/feedbacks.constants';

const feedbacks1: IFeedback[] = [
  ...FEEDBACKS1,
  ...FEEDBACKS1,
  ...FEEDBACKS1,
  ...FEEDBACKS1,
];
const feedbacks2: IFeedback[] = [
  ...FEEDBACKS2,
  ...FEEDBACKS2,
  ...FEEDBACKS2,
  ...FEEDBACKS2,
];

export default function WhoLovesUs() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h3 className={styles.title}>Who loves us</h3>
          <p className={styles.description}>...to ensure success of our 450+ clients</p>
        </div>

        <div className={styles.feedbacks}>
          <div className={styles.column}>
            <div className={`${styles["scroll-content"]} ${styles["scroll-down"]}`}>
              {
                feedbacks1.map((feedback, index) => <FeedbackCard key={index} {...feedback} />)
              }
            </div>
          </div>
          <div className={styles.column}>
            <div className={`${styles["scroll-content"]} ${styles["scroll-up"]}`}>
              {
                feedbacks2.map((feedback, index) => <FeedbackCard key={index} {...feedback} />)
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
