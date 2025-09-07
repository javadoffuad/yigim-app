import React from "react";
import styles from "./key-facts.module.css";

export default function KeyFacts() {
  const keyFactsData = [
    {
      title: "Trusted by\ncustomers",
      value: "4.8",
      description: "average rating",
      cardClass: "card-1",
      titleFont: "aeonik",
      valueFont: "aeonik",
      textColor: "dark",
    },
    {
      title: "Trusted by\nbusinesses",
      value: "450+",
      description: "active clients",
      cardClass: "card-2",
      titleFont: "geist",
      valueFont: "geist",
      textColor: "white",
    },
    {
      title: "Transaction\nsuccess rate",
      value: "99.5%",
      description: "successful operations",
      cardClass: "card-3",
      titleFont: "geist",
      valueFont: "geist",
      textColor: "dark",
    },
    {
      title: "Bank\nintegrations",
      value: "7+",
      description: "partnered banks",
      cardClass: "card-4",
      titleFont: "geist",
      valueFont: "geist",
      textColor: "dark",
    },
    {
      title: "Integrated\nwith banks",
      value: "9+",
      description: "processing centers",
      cardClass: "card-5",
      titleFont: "aeonik",
      valueFont: "aeonik",
      textColor: "dark",
    },
    {
      title: "Award-winning\nachievements",
      value: "3+",
      description: "awards",
      cardClass: "card-6",
      titleFont: "geist",
      valueFont: "geist",
      textColor: "dark",
    },
    {
      title: "Exponential growth\n(vs. global 108%)",
      value: "157%",
      description: "annual growth",
      cardClass: "card-7",
      titleFont: "geist",
      valueFont: "geist",
      textColor: "white",
    },
  ];

  return (
    <div className={styles["key-facts-container"]}>
      <div className={styles["key-facts-header"]}>
        <div className={styles["key-facts-label"]}>
          KEY FACTS
        </div>

        <div className={styles["key-facts-title"]}>
          We <span className={styles["highlight"]}>catalyze</span> change in <br />
          how people pay.
        </div>
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
                    className={`${styles["key-fact-title"]} ${styles[fact.titleFont]} ${styles[fact.textColor]}`}
                  >
                    {fact.title}
                  </div>
                </div>

                <div className={styles["key-fact-stats"]}>
                  <div className={styles["key-fact-value-container"]}>
                    <div
                      className={`${styles["key-fact-value"]} ${styles[fact.valueFont]} ${styles[fact.textColor]}`}
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