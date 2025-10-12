import React from "react";
import styles from "./news-card.module.css";
import Image from "next/image";
import { INews } from "@/app/models/news.models";

export default function NewsCard(props: INews) {
  return (
    <div className={styles.card}>
      <div className={styles["image-wrapper"]}>
        <Image src={props.image} alt="" className={styles.image} />
      </div>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.date}>{props.date}</div>
    </div>
  );
};