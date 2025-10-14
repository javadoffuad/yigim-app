'use client';

import { I18N_NEWS_DETAIL_PAGE } from "@/app/constants/i18n.constants";
import PageNewsDetail from "@/app/components/page-news-detail/page-news-detail";
import { useLocale, useTranslations } from "next-intl";
import styles from './page.module.css';
import { use } from "react";
import { notFound } from "next/navigation";
import { getNews, getNewsDetail } from "@/app/constants/news.constants";
import Link from "next/link";
import Image from "next/image";
import RelatedNews from "@/app/components/related-news/related-news";
import { LanguageCode } from "@/app/models/language.models";
import { formatDate } from "@/app/utils/date.utils";

export default function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const t = useTranslations(`${I18N_NEWS_DETAIL_PAGE}`);
  const { slug } = use(params);
  const locale = useLocale();
  const decodedNewsId = decodeURI(slug);

  const newsDetail = getNewsDetail(decodedNewsId, locale as LanguageCode);
  if (!newsDetail) {
    notFound();
  }

  const relatedNews = getNews(locale as LanguageCode).slice(0, 3);
  const date = formatDate(newsDetail.date, locale as LanguageCode);

  return (
    <PageNewsDetail>
      <div className={styles.nav}>
        <Link href={'..'} className={`button button-secondary ${styles["button-back"]}`}>{t('ButtonBack.Label')}</Link>
      </div>
      <div className={styles.images}>
        <Image src={newsDetail.images[0]} alt={newsDetail.title} className={styles.image} />
      </div>
      <div className={styles.date}>{date}</div>
      <div className={styles.title}>{newsDetail.title}</div>
      <div className={styles.text} dangerouslySetInnerHTML={{__html: newsDetail.text}} />
      <RelatedNews sectionTitle={t('AreaRelatedNews.Label')} news={relatedNews} />
    </PageNewsDetail>
  );
}