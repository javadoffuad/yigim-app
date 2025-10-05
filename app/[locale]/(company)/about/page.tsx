'use client';

import SectionTitle from "@/app/components/section-title/section-title";
import { I18N_ABOUT_PAGE } from "@/app/constants/i18n.constants";
import PageWrapper from "@/components/page-wrapper/page-wrapper";
import { useTranslations } from "next-intl";
import CompanyInfo from "./components/company-info/company-info";
import CarouselPhotos from "@/app/components/carousel-photos/carousel-photos";
import styles from './page.module.css';
import Image from "next/image";
import ourTeamImage from '@/public/images/our-team.png';
import OfferCard from "./components/offer-card/offer-card";
import product1Icon from '@/public/icons/product-1.svg';
import product2Icon from '@/public/icons/product-2.svg';
import product3Icon from '@/public/icons/product-3.svg';
import product4Icon from '@/public/icons/product-4.svg';
import StatCard from "./components/stats-card/stats-card";
import AwardCard from "@/app/components/award-card/award-card";
import azercosmosLogo from '@/public/partners/azercosmos.svg';
import visaLogo from '@/public/icons/visa.svg';
import pciLogo from '@/public/icons/pci.svg';

export default function AboutPage() {
  const t = useTranslations(`${I18N_ABOUT_PAGE}`);
  const p = useTranslations('Products');
  const k = useTranslations('StatsData');
  const c = useTranslations('Awards');
  const statsData = [
    {
      label: k("ActiveClients.Label"),
      value: "450+",
      subLabel: k("ActiveClients.SubLabel"),
    },
    {
      label: k("SuccessfulOperations.Label"),
      value: "99.5%",
      subLabel: k("SuccessfulOperations.SubLabel"),
    },
    {
      label: k("PartneredBanks.Label"),
      value: "7+",
      subLabel: k("PartneredBanks.SubLabel"),
    },
    {
      label: k("AnnualGrowth.Label"),
      value: "157%",
      subLabel: k("AnnualGrowth.SubLabel"),
    },
    {
      label: k("Awards.Label"),
      value: "3+",
      subLabel: k("Awards.SubLabel"),
    },
    {
      label: k("AverageRating.Label"),
      value: "4.8",
      subLabel: k("AverageRating.SubLabel"),
    },
    {
      label: k("ProcessingCenters.Label"),
      value: "9+",
      subLabel: k("ProcessingCenters.SubLabel"),
    },
  ];

  return (
    <PageWrapper title={t('Label')}>
      <CompanyInfo
        title={t('AreaWhoWeAre.Label')}
        description={t.raw('AreaWhoWeAre.Description')} />

      <div className={styles["stats-grid"]}>
        {statsData.map((item, index) => (
          <StatCard key={index} {...item} />
        ))}
      </div>

      <SectionTitle
        title={t('AreaOffers.Label')}
        description={t.raw('AreaOffers.Description')} />

      <div className={styles["offer-cards"]}>
        <OfferCard altText="" icon={product2Icon}>
          {p('Product1.Label')}
        </OfferCard>
        <OfferCard altText="" icon={product1Icon}>
          {p('Product2.Label')}
        </OfferCard>
        <OfferCard altText="" icon={product3Icon}>
          {p('Product3.Label')}
        </OfferCard>
        <OfferCard altText="" icon={product4Icon}>
          {p('Product4.Label')}
        </OfferCard>
      </div>

      <SectionTitle
        textAlign="left"
        size="m"
        title={t('AreaOurMission.Label')}
        description={t.raw('AreaOurMission.Description')} />
      <div className={styles["carousel-container"]}>
        <div className={styles["carousel-inner"]}>
          <CarouselPhotos />
        </div>
      </div>
      <div className={styles["vision-container"]}>
        <SectionTitle
          textAlign="left"
          size="m"
          title={t('AreaOurVision.Label')}
          description={t.raw('AreaOurVision.Description')} />
      </div>
      <SectionTitle
        title={t('AreaOurTeam.Label')}
        description={t.raw('AreaOurTeam.Description')} />
      <div className={styles["team-container"]}>
        <div className={styles["team-container-inner"]}>
          <Image className={styles["team-image"]} src={ourTeamImage} alt="Our team" />
        </div>
      </div>
      <SectionTitle
        title={t('AreaWhatWeAreProud.Label')}
        description={t.raw('AreaWhatWeAreProud.SubLabel')} />

      <div className={styles["awards"]}>
        <AwardCard icon={azercosmosLogo} title={c('Azercosmos.Label')} type="card" year="2024" />
        <AwardCard icon={visaLogo} title={c('Visa.Label')} type="card" year="2024" />
        <AwardCard icon={pciLogo} title={c('PciDss.Label')} type="card" year="2024" />
      </div>
    </PageWrapper>
  );
}