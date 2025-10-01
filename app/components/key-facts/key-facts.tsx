import React from "react";
import styles from "./key-facts.module.css";
import { useTranslations } from "next-intl";
import { I18N_HOME_PAGE } from "@/app/constants/i18n.constants";

export default function KeyFacts() {
  const t = useTranslations(`${I18N_HOME_PAGE}.AreaKeyFacts`);
  const keyFactsData = [
    {
      title: t("AreaCards.Card1.Label"),
      value: "4.8",
      description: t("AreaCards.Card1.SubLabel"),
      cardClass: "card-1",
      textColor: "dark",
    },
    {
      title: t("AreaCards.Card2.Label"),
      value: "450+",
      description: t("AreaCards.Card2.SubLabel"),
      cardClass: "card-2",
      textColor: "white",
    },
    {
      title: t("AreaCards.Card3.Label"),
      value: "99.5%",
      description: t("AreaCards.Card3.SubLabel"),
      cardClass: "card-3",
      textColor: "dark",
    },
    {
      title: t("AreaCards.Card4.Label"),
      value: "7+",
      description: t("AreaCards.Card4.SubLabel"),
      cardClass: "card-4",
      textColor: "dark",
    },
    {
      title: t("AreaCards.Card5.Label"),
      value: "9+",
      description: t("AreaCards.Card5.SubLabel"),
      cardClass: "card-5",
      textColor: "dark",
    },
    {
      title: t("AreaCards.Card6.Label"),
      value: "3+",
      description: t("AreaCards.Card6.SubLabel"),
      cardClass: "card-6",
      textColor: "dark",
    },
    {
      title: t("AreaCards.Card7.Label"),
      value: "157%",
      description: t("AreaCards.Card7.SubLabel"),
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