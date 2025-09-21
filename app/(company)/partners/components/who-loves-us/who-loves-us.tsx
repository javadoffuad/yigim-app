'use client';

import FeedbackCard, { FeedbackCardProps } from '@/app/components/feedback-card/feedback-card';
import styles from './who-loves-us.module.css';
import woltLogo from '@/public/partners/wolt.svg';
import turboazLogo from '@/public/partners/turboaz.svg';
import boltLogo from '@/public/partners/bolt.svg';
import uberLogo from '@/public/partners/uber.svg';
import wingzLogo from '@/public/partners/wingz.svg';
import yangoLogo from '@/public/partners/yango.svg';

const feedbacks1: FeedbackCardProps[] = [
  {
    author: 'Tofik Suleymanov',
    authorTitle: 'General Manager Wolt Azerbaijan',
    companyLogo: woltLogo,
    feedbackText: 'YIĞIM truly understands the unique needs of our business. Their collaborative approach and ability to tailor solutions specifically for WOLT Azerbaijan.'
  },
  {
    author: 'Ramiz Guliyev',
    authorTitle: 'CFO Hilton Azerbaijan',
    companyLogo: yangoLogo,
    feedbackText: 'I appreciate partners who prioritize discretion and deliver seamless service. YIĞIM\'s tailored payment solutions have been elegant and efficient.'
  },
  {
    author: 'Firdovsi Tarverdieyev',
    authorTitle: 'Uber',
    companyLogo: uberLogo,
    feedbackText: 'I appreciate partners who understand discretion and seamless service. YIĞIM\'s bespoke payment solutions have been just that - elegant, efficient.'
  },
  {
    author: 'Naim Azizov',
    authorTitle: 'CFO Bolt Azerbaijan',
    companyLogo: boltLogo,
    feedbackText: 'YIĞIM\'s tailor-made payment processing solutions have been transformative for BOLT Azerbaijan, enhancing efficiency and customer satisfaction.'
  },
  {
    author: 'Ramin Aliyev',
    authorTitle: 'Turbo.az',
    companyLogo: turboazLogo,
    feedbackText: 'YIĞIM\'s customized payment solutions have revolutionized operations for BOLT Azerbaijan, enhancing efficiency and customer satisfaction.'
  },
  {
    author: 'Naim Azizov',
    authorTitle: 'CFO Bolt Azerbaijan',
    companyLogo: boltLogo,
    feedbackText: 'YIĞIM\'s tailor-made payment processing solutions have been transformative for BOLT Azerbaijan, enhancing efficiency and customer satisfaction.'
  },
  {
    author: 'Ramiz Guliyev',
    authorTitle: 'CFO Hilton Azerbaijan',
    companyLogo: yangoLogo,
    feedbackText: 'I appreciate partners who prioritize discretion and deliver seamless service. YIĞIM\'s tailored payment solutions have been elegant and efficient.'
  },
  {
    author: 'Tofik Suleymanov',
    authorTitle: 'General Manager Wolt Azerbaijan',
    companyLogo: woltLogo,
    feedbackText: 'YIĞIM truly understands the unique needs of our business. Their collaborative approach and ability to tailor solutions specifically for WOLT Azerbaijan.'
  },
];
const feedbacks2: FeedbackCardProps[] = [
  {
    author: 'Kamran Huseynov',
    authorTitle: 'Wingz Azerbaijan',
    companyLogo: wingzLogo,
    feedbackText: 'I value partners who prioritize discretion and provide seamless service. YIĞIM\'s tailored payment solutions exemplify elegance and efficiency.'
  },
  {
    author: 'Ramin Aliyev',
    authorTitle: 'Turbo.az',
    companyLogo: turboazLogo,
    feedbackText: 'YIĞIM\'s customized payment solutions have revolutionized operations for BOLT Azerbaijan, enhancing efficiency and customer satisfaction.'
  },
  {
    author: 'Elvin Mammadov',
    authorTitle: 'Uber',
    companyLogo: uberLogo,
    feedbackText: 'YIĞIM has a deep understanding of our specific business requirements. Their teamwork and tailored solutions have greatly benefited WOLT Azerbaijan.'
  },
  {
    author: 'Tofik Suleymanov',
    authorTitle: 'General Manager Wolt Azerbaijan',
    companyLogo: woltLogo,
    feedbackText: 'YIĞIM truly understands the unique needs of our business. Their collaborative approach and ability to tailor solutions specifically for WOLT Azerbaijan.'
  },
  {
    author: 'Kamran Huseynov',
    authorTitle: 'Wingz Azerbaijan',
    companyLogo: wingzLogo,
    feedbackText: 'I value partners who prioritize discretion and provide seamless service. YIĞIM\'s tailored payment solutions exemplify elegance and efficiency.'
  },
  {
    author: 'Naim Azizov',
    authorTitle: 'CFO Bolt Azerbaijan',
    companyLogo: boltLogo,
    feedbackText: 'YIĞIM\'s tailor-made payment processing solutions have been transformative for BOLT Azerbaijan, enhancing efficiency and customer satisfaction.'
  },
  {
    author: 'Ramin Aliyev',
    authorTitle: 'Turbo.az',
    companyLogo: yangoLogo,
    feedbackText: 'YIĞIM\'s customized payment solutions have revolutionized operations for BOLT Azerbaijan, enhancing efficiency and customer satisfaction.'
  },
  {
    author: 'Firdovsi Tarverdieyev',
    authorTitle: 'Uber',
    companyLogo: uberLogo,
    feedbackText: 'I appreciate partners who understand discretion and seamless service. YIĞIM\'s bespoke payment solutions have been just that - elegant, efficient.'
  },
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
                    [...feedbacks1, ...feedbacks1, ...feedbacks1, ...feedbacks1].map((feedback, index) => <FeedbackCard key={index} {...feedback} />)
                  }
                </div>
              </div>
              <div className={styles.column}>
                <div className={`${styles["scroll-content"]} ${styles["scroll-up"]}`}>
                  {
                    [...feedbacks2, ...feedbacks2, ...feedbacks2, ...feedbacks2].map((feedback, index) => <FeedbackCard key={index} {...feedback} />)
                  }
                </div>
              </div>
            </div>
        </div>
    </section>
  );
}
