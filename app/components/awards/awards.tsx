import React from "react";
import styles from "./awards.module.css";
import azercosmosLogo from '@/public/partners/azercosmos.svg';
import visaLogo from '@/public/icons/visa.svg';
import pciLogo from '@/public/icons/pci.svg';
import { useTranslations } from "next-intl";
import { I18N_HOME_PAGE } from "@/app/constants/i18n.constants";
import SectionTitle from "../section-title/section-title";
import AwardCard from "../award-card/award-card";

export default function Awards() {
  const t = useTranslations(`${I18N_HOME_PAGE}.AreaWhatWeAreProud`);
  const c = useTranslations('Awards');
  return (
    <div className={styles["section"]}>
      <SectionTitle
        title={t('Label')}
        description={t.raw('SubLabel')} />

      <div className={styles["content"]}>
        <div className={styles["awards"]}>
          <AwardCard icon={azercosmosLogo} title={c('Azercosmos.Label')} type="stroke" />
          <AwardCard icon={visaLogo} title={c('Visa.Label')} type="stroke" />
          <AwardCard icon={pciLogo} title={c('PciDss.Label')} type="stroke" />
        </div>
      </div>
    </div>
  );
};