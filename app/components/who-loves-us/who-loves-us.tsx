'use client';

import { FEEDBACKS1, FEEDBACKS2, FEEDBACKS3 } from '@/app/constants/feedbacks.constants';
import FeedbackCard from '../feedback-card/feedback-card';
import styles from './who-loves-us.module.css';

const feedbacks1 = [
  ...FEEDBACKS1,
  ...FEEDBACKS1,
  ...FEEDBACKS1,
];

const feedbacks2 = [
  ...FEEDBACKS2,
  ...FEEDBACKS2,
  ...FEEDBACKS2,
];

const feedbacks3 = [
  ...FEEDBACKS3,
  ...FEEDBACKS3,
  ...FEEDBACKS3,
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
              <div className={styles.column}>
                <div className={`${styles["scroll-content"]} ${styles["scroll-down"]}`}>
                  {
                    feedbacks3.map((feedback, index) => <FeedbackCard key={index} {...feedback} />)
                  }
                </div>
              </div>
            </div>
        </div>
    </section>
  );
}
