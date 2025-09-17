'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import styles from './main-header.module.css';
import { PAGE_RESOURCES_API } from '@/constants/navigation.constants';

export default function MainHeader() {
  return (
    <div className={styles.container}>
      <div className={styles["container-inner"]}>
        <div className={styles["info-pane"]}>
          <h2 className={styles["title"]}>One System<br/> Infinite<br/> Possibilities</h2>
          <p className={styles["subtitle"]}>From startups to governments, we connect the world<br/> through smart, secure payments.</p>
          <div className={styles["buttons"]}>
            <Link href="#" className={`${styles["button"]} ${styles['button-primary']}`}>Get started</Link>
            <Link href={PAGE_RESOURCES_API} className={`${styles["button"]} ${styles["button-tertiary"]}`}>Documentation</Link>
          </div>
        </div>
      </div>

      <Suspense fallback={<p>Loading video...</p>}>
        <video className={styles.video} loop autoPlay>
          <source src="videos/main.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Suspense>
    </div>
  );
}
