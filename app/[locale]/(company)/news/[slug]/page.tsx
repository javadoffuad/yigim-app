'use client';

import { I18N_NEWS_DETAIL_PAGE } from "@/app/constants/i18n.constants";
import PageNewsDetail from "@/app/components/page-news-detail/page-news-detail";
import { useTranslations } from "next-intl";
import styles from './page.module.css';
import { use } from "react";
import { notFound } from "next/navigation";
import { NEWS_DETAIL } from "@/app/constants/news.constants";
import Link from "next/link";
import Image from "next/image";

export default function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const t = useTranslations(`${I18N_NEWS_DETAIL_PAGE}`);
  const { slug } = use(params);
  const decodedSlug = decodeURI(slug);
  console.log(slug, encodeURI(slug));
  const newsDetail = NEWS_DETAIL.find(x => x.slug === decodedSlug);
  if (!newsDetail) {
    notFound();
  }

  return (
    <PageNewsDetail>
      <div className={styles.nav}>
        <Link href={'..'} className={`button button-secondary ${styles["button-back"]}`}>{t('ButtonBack.Label')}</Link>
      </div>
      <div className={styles.images}>
        <Image src={newsDetail.images[0]} alt={newsDetail.title} className={styles.image} />
      </div>
      <div className={styles.date}>{newsDetail.date}</div>
      <div className={styles.title}>{newsDetail.title}</div>
      <div className={styles.text} dangerouslySetInnerHTML={{__html: newsDetail.text}} />
    </PageNewsDetail>
  );
}