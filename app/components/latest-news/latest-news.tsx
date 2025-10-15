import React from "react";
import styles from "./latest-news.module.css";
import { useLocale, useTranslations } from "next-intl";
import { I18N_HOME_PAGE } from "@/app/constants/i18n.constants";
import SectionTitle from "../section-title/section-title";
import { getNews } from "@/app/constants/news.constants";
import { LanguageCode } from "@/app/models/language.models";
import Link from "next/link";
import { PAGE_COMPANY_NEWS } from "@/app/constants/navigation.constants";
import NewsCard from "../news-card/news-card";

export default function LatestNews() {
  const t = useTranslations(`${I18N_HOME_PAGE}.AreaLatestNews`);
  const locale = useLocale();
  const latestNews = getNews(locale as LanguageCode).slice(0, 3);

  return (
    <div className={styles["section"]}>
      <SectionTitle
        title={t('Label')}
        description={t.raw('SubLabel')} />

      <div className={styles.news}>
        {
          latestNews.map(newsItem => <Link key={newsItem.id} href={`${PAGE_COMPANY_NEWS}/${newsItem.id}`}><NewsCard {...newsItem} /></Link>)
        }
      </div>

      <div className={styles["more-news"]}>
        <button className="button button-primary">{t('ButtonMoreNews.Label')}</button>
      </div>
    </div>
  );
};