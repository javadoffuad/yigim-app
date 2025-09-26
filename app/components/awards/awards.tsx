import React from "react";
import styles from "./awards.module.css";
import Image from "next/image";
import azercosmosLogo from '@/public/partners/azercosmos.svg';
import visaLogo from '@/public/icons/visa.svg';
import pciLogo from '@/public/icons/pci.svg';

export default function Awards() {
  return (
    <div className={styles["section"]}>
      <div className={styles["section-header"]}>
        <div className={styles["header-label"]}>
          What we are proud of
        </div>

        <div className={styles["header-title"]}>
          Awards and<br />
          Partnerships
        </div>
      </div>

      <div className={styles["content"]}>
        <div className={styles["awards"]}>
          <div className={styles["award-item"]}>
            <div className={styles["icon-wrapper"]}>
              <Image src={azercosmosLogo} alt="" className={styles["icon"]} />
            </div>
            <div className={styles["award-info"]}>Enabling international payments for the 74th International Astronautical Congress</div>
          </div>
          
          <div className={styles["award-item"]}>
            <div className={styles["icon-wrapper"]}>
              <Image src={visaLogo} alt="" className={styles["icon"]} />
            </div>
            <div className={styles["award-info"]}>VISA Above and Beyond Award Special Recognition, March, 2024</div>
          </div>
          
          <div className={styles["award-item"]}>
            <div className={styles["icon-wrapper"]}>
              <Image src={pciLogo} alt="" className={styles["icon"]} />
            </div>
            <div className={styles["award-info"]}>PCI DSS Compliance Certificate</div>
          </div>
        </div>
      </div>
    </div>
  );
};