import React from "react";
import styles from "./our-team.module.css";
import { useTranslations } from "next-intl";
import { I18N_HOME_PAGE } from "@/app/constants/i18n.constants";
import CarouselPhotos from "../carousel-photos/carousel-photos";
import SectionTitle from "../section-title/section-title";

export default function OurTeam() {
  const t = useTranslations(`${I18N_HOME_PAGE}.AreaOurTeam`);

  return (
    <div className={styles["section"]}>
      <SectionTitle
        title={t('Label')}
        description={t.raw('SubLabel')} />

      <CarouselPhotos />
    </div>
  );
};