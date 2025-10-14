import React from "react";
import styles from "./news-card.module.css";
import Image from "next/image";
import { INews } from "@/app/models/news.models";
import { formatDate } from "@/app/utils/date.utils";
import { useLocale } from "next-intl";
import { LanguageCode } from "@/app/models/language.models";

export default function NewsCard(props: INews) {
  const locale = useLocale();
  const date = formatDate(props.date, locale as LanguageCode);
  return (
    <div className={styles.card}>
      <div className={styles["image-wrapper"]}>
        <Image src={props.image} alt="" className={styles.image} />
      </div>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.date}>{date}</div>
    </div>
  );
};