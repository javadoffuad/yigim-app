import React from "react";
import styles from "./our-team.module.css";
import { useTranslations } from "next-intl";
import { I18N_HOME_PAGE } from "@/app/constants/i18n.constants";
import CarouselPhotos from "../carousel-photos/carousel-photos";

export default function OurTeam() {
  const t = useTranslations(`${I18N_HOME_PAGE}.AreaOurTeam`);

  return (
    <div className={styles["section"]}>
      <div className={styles["section-header"]}>
        <div className={styles["header-label"]}>
          {t('Label')}
        </div>
        <div className={styles["header-title"]} dangerouslySetInnerHTML={{__html: t.raw('SubLabel')}} />
      </div>

      <CarouselPhotos />
    </div>
  );
};