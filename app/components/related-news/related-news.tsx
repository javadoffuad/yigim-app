import React from "react";
import styles from "./related-news.module.css";
import { INews } from "@/app/models/news.models";
import Link from "next/link";
import NewsCard from "../news-card/news-card";
import { PAGE_COMPANY_NEWS } from "@/app/constants/navigation.constants";

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
          props.news.map(newsItem => <Link key={newsItem.id} href={`${PAGE_COMPANY_NEWS}/${newsItem.id}`}><NewsCard {...newsItem} /></Link>)
        }
      </div>
    </div>
  );
};