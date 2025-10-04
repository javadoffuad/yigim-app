'use client';

import FeedbackCard from '@/app/components/feedback-card/feedback-card';
import styles from './who-loves-us.module.css';
import { IFeedback } from '@/app/models/feedback.models';
import { FEEDBACKS1, FEEDBACKS2 } from '@/app/constants/feedbacks.constants';
import { I18N_PARTNERS_PAGE } from '@/app/constants/i18n.constants';
import { useTranslations } from 'next-intl';
import SectionTitle from '@/app/components/section-title/section-title';

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
  const t = useTranslations(`${I18N_PARTNERS_PAGE}.AreaWhoLovesUs`);
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <SectionTitle
          textAlign='left'
          title={t('Label')}
          description={t('DescriptionClient')} />

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
