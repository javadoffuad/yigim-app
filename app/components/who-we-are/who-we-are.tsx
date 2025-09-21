import React, { Suspense } from "react";
import styles from "./who-we-are.module.css";

export default function WhoWeAre() {
  return (
    <div className={styles["section"]}>
      <div className={styles["section-header"]}>
        <div className={styles["header-label"]}>
          who we are
        </div>

        <div className={styles["header-title"]}>
          Yigim is №1 company in Azerbaijan<br />
          enabling <span className={styles["highlight"]}>consumer goods</span> / services<br />
          payments.
        </div>
      </div>

      <div className={styles["content"]}>
        <div className={styles["video-container"]}>
          <Suspense fallback={<p>Loading video...</p>}>
            <video className={styles.video} loop autoPlay muted>
              <source src="who-we-are.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Suspense>
          <p className={styles["video-title"]}>All our products are designed to be integrated<br /> into any given system.</p>
        </div>
      </div>
    </div>
  );
};