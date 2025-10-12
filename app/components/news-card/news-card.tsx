import React from "react";
import styles from "./news-card.module.css";
import Image, { StaticImageData } from "next/image";

export interface INewsCardProps {
  id: number | string; // уникальный идентификатор
  title: string; // заголовок новости
  date: string; // дата в формате ISO или удобном для отображения
  image: StaticImageData; // URL изображения с маленьким размером (превью)
}

export default function NewCard(props: INewsCardProps) {
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