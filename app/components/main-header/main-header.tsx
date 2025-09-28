'use client';

import { Suspense } from 'react';
import {Link} from '@/i18n/navigation';
import styles from './main-header.module.css';
import { PAGE_RESOURCES_API } from '@/constants/navigation.constants';
import { getAbsolutePath } from '@/app/utils/absolute-path.utils';

export default function MainHeader() {
  const videoPath = getAbsolutePath('main.mp4');

  return (
    <div className={styles.container}>
      <div className={styles["container-inner"]}>
        <div className={styles["info-pane"]}>
          <h2 className={styles["title"]}>One System<br/> Infinite<br/> Possibilities</h2>
          <p className={styles["subtitle"]}>From startups to governments, we connect the world<br/> through smart, secure payments.</p>
          <div className={styles["buttons"]}>
            <Link href="#" className="button button-primary">Get started</Link>
            <Link href={PAGE_RESOURCES_API} className="button button-tertiary">Documentation</Link>
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
