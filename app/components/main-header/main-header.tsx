'use client';

import { Suspense } from 'react';
import {Link} from '@/i18n/navigation';
import styles from './main-header.module.css';
import { PAGE_RESOURCES_API } from '@/constants/navigation.constants';
import { getAbsolutePath } from '@/app/utils/absolute-path.utils';
import { useTranslations } from 'next-intl';
import { I18N_HOME_PAGE } from '@/app/constants/i18n.constants';

export default function MainHeader() {
  const videoPath = getAbsolutePath('main.mp4');
  const t = useTranslations(`${I18N_HOME_PAGE}.AreaMainPoster`);

  return (
    <div className={styles.container}>
      <div className={styles["container-inner"]}>
        <div className={styles["info-pane"]}>
          <h2 className={styles["title"]}>{t('Label')}</h2>
          <p className={styles["subtitle"]}>{t('SubLabel')}</p>
          <div className={styles["buttons"]}>
            <Link href="#" className="button button-primary">{t('ButtonGetStarted.Label')}</Link>
            <Link href={PAGE_RESOURCES_API} className="button button-tertiary">{t('ButtonDocumentation.Label')}</Link>
          </div>
        </div>
      </div>

      <Suspense fallback={<p>Loading video...</p>}>
        <video className={styles.video} loop autoPlay muted>
          <source src={videoPath} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Suspense>
    </div>
  );
}
