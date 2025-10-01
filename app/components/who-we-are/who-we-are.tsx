import React, { Suspense } from "react";
import { useTranslations } from "next-intl";
import styles from "./who-we-are.module.css";
import { getAbsolutePath } from "@/app/utils/absolute-path.utils";
import { I18N_HOME_PAGE } from "@/app/constants/i18n.constants";

export default function WhoWeAre() {
  const t = useTranslations(`${I18N_HOME_PAGE}.AreaWhoWeAre`);
  const videoPath = getAbsolutePath('who-we-are.mp4');

  return (
    <div className={styles["section"]}>
      <div className={styles["section-header"]}>
        <div className={styles["header-label"]}>
          {t('Label')}
        </div>

        <div className={styles["header-title"]} dangerouslySetInnerHTML={{__html: t.raw('Description')}} />
      </div>

      <div className={styles["content"]}>
        <div className={styles["video-container"]}>
          <Suspense fallback={<p>Loading video...</p>}>
            <video className={styles.video} loop autoPlay muted>
              <source src={videoPath} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Suspense>
          <p className={styles["video-title"]}>
            {t('Video.Label')}
          </p>
        </div>
      </div>
    </div>
  );
};