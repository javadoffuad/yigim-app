'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import styles from './main-header.module.css';
import { PAGE_RESOURCES_API } from '@/constants/navigation.constants';

export default function MainHeader() {
  const videoPath = process.env.NEXT_PUBLIC_BASE_PATH 
    ? `${process.env.NEXT_PUBLIC_BASE_PATH}/main.mp4`
    : `main.mp4`;
  console.log('process.env.NODE_ENV', process.env.NEXT_PUBLIC_BASE_PATH, videoPath, process.env.NODE_ENV);

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
          <source src="/main.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Suspense>
    </div>
  );
}
