import React from "react";
import styles from "./key-facts.module.css";
import { useTranslations } from "next-intl";
import { I18N_HOME_PAGE } from "@/app/constants/i18n.constants";

export default function KeyFacts() {
  const t = useTranslations(`${I18N_HOME_PAGE}.AreaKeyFacts`);
  const s = useTranslations('StatsData');
  const keyFactsData = [
    {
      title: s("AverageRating.Label"),
      value: "4.8",
      description: s("AverageRating.SubLabel"),
      cardClass: "card-1",
      textColor: "dark",
    },
    {
      title: s("ActiveClients.Label"),
      value: "450+",
      description: s("ActiveClients.SubLabel"),
      cardClass: "card-2",
      textColor: "white",
    },
    {
      title: s("SuccessfulOperations.Label"),
      value: "99.5%",
      description: s("SuccessfulOperations.SubLabel"),
      cardClass: "card-3",
      textColor: "dark",
    },
    {
      title: s("PartneredBanks.Label"),
      value: "7+",
      description: s("PartneredBanks.SubLabel"),
      cardClass: "card-4",
      textColor: "dark",
    },
    {
      title: s("ProcessingCenters.Label"),
      value: "9+",
      description: s("ProcessingCenters.SubLabel"),
      cardClass: "card-5",
      textColor: "dark",
    },
    {
      title: s("Awards.Label"),
      value: "3+",
      description: s("Awards.SubLabel"),
      cardClass: "card-6",
      textColor: "dark",
    },
    {
      title: s("AnnualGrowth.Label"),
      value: "157%",
      description: s("AnnualGrowth.SubLabel"),
      cardClass: "card-7",
      textColor: "white",
    },
  ];

  return (
    <div className={styles["key-facts-container"]}>
      <div className={styles["key-facts-header"]}>
        <div className={styles["key-facts-label"]}>
          {t('Label')}
        </div>

        <div className={styles["key-facts-title"]} dangerouslySetInnerHTML={{__html: t.raw('Description')}} />
      </div>

      <div className={styles["key-facts-grid"]}>
        <div className={styles["key-facts-grid-inner"]}>
          {keyFactsData.map((fact, index) => (
            <div
              key={index}
              className={`${styles["key-fact-card"]} ${styles[fact.cardClass]}`}
            >
              <div className={styles["key-fact-content"]}>
                <div className={styles["key-fact-title-section"]}>
                  <div
                    className={`${styles["key-fact-title"]} ${styles[fact.textColor]}`}
                  >
                    {fact.title}
                  </div>
                </div>

                <div className={styles["key-fact-stats"]}>
                  <div className={styles["key-fact-value-container"]}>
                    <div
                      className={`${styles["key-fact-value"]} ${styles[fact.textColor]}`}
                    >
                      {fact.value}
                    </div>
                  </div>

                  <div className={styles["key-fact-description-container"]}>
                    <div
                      className={`${styles["key-fact-description"]} ${styles[fact.textColor]}`}
                    >
                      {fact.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};