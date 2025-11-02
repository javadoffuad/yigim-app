'use client';

import NewsCard from "@/app/components/news-card/news-card";
import { I18N_NEWS_PAGE } from "@/app/constants/i18n.constants";
import PageWrapper from "@/components/page-wrapper/page-wrapper";
import { useLocale, useTranslations } from "next-intl";

import styles from './page.module.css';
import Link from "next/link";
import { getNews } from "@/app/constants/news.constants";
import { LanguageCode } from "@/app/models/language.models";

export default function NewsPage() {
  const t = useTranslations(`${I18N_NEWS_PAGE}`);
  const locale = useLocale();
  const news = getNews(locale as LanguageCode);
  return (
    <PageWrapper title={t('Label')} className={styles.container}>
      <div className={styles.news}>
        {
          news.map(newsItem => <Link key={newsItem.id} href={`${newsItem.id}`}><NewsCard {...newsItem} /></Link>)
        }
      </div>
    </PageWrapper>
  );
}