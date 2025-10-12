'use client';

import NewsCard from "@/app/components/news-card/news-card";
import { I18N_NEWS_PAGE } from "@/app/constants/i18n.constants";
import PageWrapper from "@/components/page-wrapper/page-wrapper";
import { useTranslations } from "next-intl";

import styles from './page.module.css';
import Link from "next/link";
import { NEWS } from "@/app/constants/news.constants";

export default function NewsPage() {
  const t = useTranslations(`${I18N_NEWS_PAGE}`);
  return (
    <PageWrapper title={t('Label')}>
      <div className={styles.news}>
        {
          NEWS.map(newsItem => <Link key={newsItem.id} href={`${newsItem.slug}`}><NewsCard {...newsItem} /></Link>)
        }
      </div>
    </PageWrapper>
  );
}