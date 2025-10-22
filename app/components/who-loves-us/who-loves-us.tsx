'use client';

import { FEEDBACKS1, FEEDBACKS2, FEEDBACKS3 } from '@/app/constants/feedbacks.constants';
import FeedbackCard from '../feedback-card/feedback-card';
import styles from './who-loves-us.module.css';
import { useTranslations } from 'next-intl';
import { I18N_HOME_PAGE } from '@/app/constants/i18n.constants';
import SectionTitle from '../section-title/section-title';
import { useWindowSize } from '@/app/hooks/use-window-size';

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
  const {width} = useWindowSize();

  if (width === 0) {
    return (
      <section className={styles.section}>
        <div className={styles.content}>
          <SectionTitle
            title={t('Label')}
            description={t('DescriptionClient')} />
        </div>
      </section>
    )
  }

  return (
    <section className={styles.section}>
        <div className={styles.content}>
            <SectionTitle
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

              {
                width > 767
                  ? <div className={styles.column}>
                      <div className={`${styles["scroll-content"]} ${styles["scroll-up"]}`}>
                        {
                          feedbacks2.map((feedback, index) => <FeedbackCard key={index} {...feedback} />)
                        }
                      </div>
                    </div>
                  : null
              }
              
              {
                width > 1023
                  ? <div className={styles.column}>
                      <div className={`${styles["scroll-content"]} ${styles["scroll-down"]}`}>
                        {
                          feedbacks3.map((feedback, index) => <FeedbackCard key={index} {...feedback} />)
                        }
                      </div>
                    </div>
                  : null
              }
            </div>
        </div>
    </section>
  );
}
