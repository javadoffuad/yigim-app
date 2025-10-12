import React from "react";
import styles from "./related-news.module.css";
import { INews } from "@/app/models/news.models";
import Link from "next/link";
import NewsCard from "../news-card/news-card";

interface RelatedNewsProps {
  sectionTitle: string;
  news: INews[];
}

export default function RelatedNews(props: RelatedNewsProps) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{props.sectionTitle}</div>
      <div className={styles.news}>
        {
          props.news.map(newsItem => <Link key={newsItem.id} href={`${newsItem.slug}`}><NewsCard {...newsItem} /></Link>)
        }
      </div>
    </div>
  );
};