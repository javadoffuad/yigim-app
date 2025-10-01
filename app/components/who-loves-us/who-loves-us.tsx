'use client';

import { FEEDBACKS1, FEEDBACKS2, FEEDBACKS3 } from '@/app/constants/feedbacks.constants';
import FeedbackCard from '../feedback-card/feedback-card';
import styles from './who-loves-us.module.css';
import { useTranslations } from 'next-intl';
import { I18N_HOME_PAGE } from '@/app/constants/i18n.constants';

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
  const t = useTranslations(`${I18N_HOME_PAGE}.AreaWhoLovesUs`);
  return (
    <section className={styles.section}>
        <div className={styles.content}>
            <div className={styles.text}>
              <h3 className={styles.title}>{t('Label')}</h3>
              <p className={styles.description}>{t('DescriptionClient')}</p>
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
