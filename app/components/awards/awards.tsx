import React from "react";
import styles from "./awards.module.css";
import Image from "next/image";
import azercosmosLogo from '@/public/partners/azercosmos.svg';
import visaLogo from '@/public/icons/visa.svg';
import pciLogo from '@/public/icons/pci.svg';
import { useTranslations } from "next-intl";
import { I18N_HOME_PAGE } from "@/app/constants/i18n.constants";

export default function Awards() {
  const t = useTranslations(`${I18N_HOME_PAGE}.WhatWeAreProud`);
  return (
    <div className={styles["section"]}>
      <div className={styles["section-header"]}>
        <div className={styles["header-label"]}>
          {t('Label')}
        </div>
        <div className={styles["header-title"]} dangerouslySetInnerHTML={{__html: t.raw('SubLabel')}} />
      </div>

      <div className={styles["content"]}>
        <div className={styles["awards"]}>
          <div className={styles["award-item"]}>
            <div className={styles["icon-wrapper"]}>
              <Image src={azercosmosLogo} alt="" className={styles["icon"]} />
            </div>
            <div className={styles["award-info"]}>{t('Card1.Label')}</div>
          </div>
          
          <div className={styles["award-item"]}>
            <div className={styles["icon-wrapper"]}>
              <Image src={visaLogo} alt="" className={styles["icon"]} />
            </div>
            <div className={styles["award-info"]}>{t('Card2.Label')}</div>
          </div>
          
          <div className={styles["award-item"]}>
            <div className={styles["icon-wrapper"]}>
              <Image src={pciLogo} alt="" className={styles["icon"]} />
            </div>
            <div className={styles["award-info"]}>{t('Card3.Label')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};