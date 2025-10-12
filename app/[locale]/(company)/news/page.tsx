'use client';

import NewCard, { INewsCardProps } from "@/app/components/news-card/news-card";
import { I18N_NEWS_PAGE } from "@/app/constants/i18n.constants";
import PageWrapper from "@/components/page-wrapper/page-wrapper";
import { useTranslations } from "next-intl";
import news1 from "@/public/images/news-1.png";
import news2 from "@/public/images/news-2.png";
import news3 from "@/public/images/news-3.png";
import news4 from "@/public/images/news-4.jpg";
import news5 from "@/public/images/news-5.jpg";
import news6 from "@/public/images/news-6.jpg";
import styles from './news.module.css';
import Link from "next/link";

const news: INewsCardProps[] = [
  {
    id: 1,
    title: "YIĞIM Payment System Visa Payments Forum CEMEA 2025",
    date: "May 08, 2025",
    image: news1,
  },
  {
    id: 2,
    title: "Ölkəmizdə və Cənubi Qafqazda Google Pay və Apple Pay ödəniş sistemlərini ilk olaraq inteq..",
    date: "May 08, 2025",
    image: news2,
  },
  {
    id: 3,
    title: "Ödəniş sistemləri funksionallıq, ixtisaslaşma, komissiyalar və xidmət keyfiyyətinə gör..",
    date: "May 08, 2025",
    image: news3,
  },
  {
    id: 4,
    title: "YIĞIM Payment System Visa Payments Forum CEMEA 2025",
    date: "May 08, 2025",
    image: news4,
  },
  {
    id: 5,
    title: "Ölkəmizdə və Cənubi Qafqazda Google Pay və Apple Pay ödəniş sistemlərini ilk olaraq inteq..",
    date: "May 08, 2025",
    image: news5,
  },
  {
    id: 6,
    title: "Ölkəmizdə və Cənubi Qafqazda Google Pay və Apple Pay ödəniş sistemlərini ilk olaraq inteq..",
    date: "May 08, 2025",
    image: news6,
  },
]

export default function NewsPage() {
  const t = useTranslations(`${I18N_NEWS_PAGE}`);
  return (
    <PageWrapper title={t('Label')}>
      <div className={styles.news}>
        {
          news.map(newsItem => <Link href={"#"}><NewCard {...newsItem} /></Link>)}
      </div>
    </PageWrapper>
  );
}