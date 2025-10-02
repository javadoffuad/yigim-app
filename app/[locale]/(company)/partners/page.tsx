'use client';

import PageWrapper from '@/components/page-wrapper/page-wrapper';
import WhoLovesUs from './components/who-loves-us/who-loves-us';
import styles from './page.module.css';
import { ICategory, PartnerCategory } from '@/app/models/partners.models';
import { partners } from '@/app/constants/partners.constants';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { I18N_PARTNERS_PAGE } from '@/app/constants/i18n.constants';

export default function PartnersPage() {
  const [selectedCategory, setSelectedCategory] = useState<PartnerCategory>(PartnerCategory.ALL);
  const t = useTranslations(`${I18N_PARTNERS_PAGE}`);

  const categories: ICategory[] = [
    {
      code: PartnerCategory.ALL,
      name: t('AreaWhoLovesUs.ButtonAll.Label'),
    },
    {
      code: PartnerCategory.MOBILITY,
      name: t('AreaWhoLovesUs.ButtonMobility.Label'),
    },
    {
      code: PartnerCategory.HOSPITAL,
      name: t('AreaWhoLovesUs.ButtonHospitality.Label'),
    },
    {
      code: PartnerCategory.DELIVERY,
      name: t('AreaWhoLovesUs.ButtonFoodDelivery.Label'),
    },
    {
      code: PartnerCategory.CONSUMER_GOODS,
      name: t('AreaWhoLovesUs.ButtonConsumerGoods.Label'),
    },
    {
      code: PartnerCategory.MARKETPLACE,
      name: t('AreaWhoLovesUs.ButtonMarketplace.Label'),
    },
  ];

  // Фильтрация партнеров
  const filteredPartners = selectedCategory === PartnerCategory.ALL 
    ? partners 
    : partners.filter(partner => partner.category === selectedCategory);

  const selectCategory = (category: PartnerCategory) => {
    setSelectedCategory(category);
  };

  return (
    <PageWrapper title={t('Label')}>
      <WhoLovesUs />
      <div className={styles.section}>
        <div className={styles.text}>
          <h3 className={styles.title}>{t('AreaWhoLovesUs.Label')}</h3>
          <p className={styles.description} dangerouslySetInnerHTML={{__html: t.raw('AreaWhoLovesUs.Description')}} />
        </div>

        <div className={styles.partners}>
          <div className={styles.buttons}>
            {
              categories.map((category, index) =>(
                <button
                  key={index}
                  onClick={() => selectCategory(category.code)}
                  className={`button ${selectedCategory === category.code ? 'button-primary' : ''} ${category.code === PartnerCategory.ALL ? styles["button-all"] : ''}`}>
                  {category.name}
                </button>
              ))
            }
          </div>
          <div className={styles['partners-container']}>
            {
              filteredPartners.map((partner, index) =>
                <div key={index} className={styles['partner-item']} style={{ backgroundColor: partner.color }}>
                  <Image src={partner.logo} alt='' />
                </div>
              )
            }
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}