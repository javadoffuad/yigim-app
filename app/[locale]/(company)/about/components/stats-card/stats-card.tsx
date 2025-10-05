import React from "react";
import styles from "./stats-card.module.css";

interface KeyFactsCard {
  label: string;
  subLabel: string;
  value: string;
}

export default function StatCard(props: KeyFactsCard) {
  return (
    <div className={styles["card"]}>
      <div className={styles["content"]}>
        <div className={styles["header"]}>
          <div className={styles["label"]}>
            {props.label}
          </div>
        </div>

        <div className={styles["stats"]}>
          <div className={styles["value-container"]}>
            <div className={styles["value"]}>
              {props.value}
            </div>
          </div>

          <div className={styles["description"]}>
              {props.subLabel}
          </div>
        </div>
      </div>
    </div>
  );
};