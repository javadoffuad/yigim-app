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
import SectionTitle from '@/app/components/section-title/section-title';
import { useWindowSize } from '@/app/hooks/use-window-size';
import Select from '@/app/components/ui/select/select';
import TabCategory from './components/tab-category/tab-category';

export default function PartnersPage() {
  const [selectedCategory, setSelectedCategory] = useState<PartnerCategory>(PartnerCategory.ALL);
  const t = useTranslations(`${I18N_PARTNERS_PAGE}`);
  const { width } = useWindowSize();
  const isDesktop = width > 1023;

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
  const currentCategory = (selectedCategory !== null || selectedCategory !== undefined)
    ? categories.find(cat => cat.code === selectedCategory)
    : undefined;

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
        <SectionTitle
          title={t('AreaWhoLovesUs.Label')}
          description={t.raw('AreaWhoLovesUs.Description')} />

        <div className={styles.partners}>
          {
            isDesktop ?
              <TabCategory
                categories={categories}
                selectedCategory={selectedCategory}
                onClick={(categoryCode) => selectCategory(categoryCode)} />
            : <div className={styles.select}>
                <Select
                  items={categories}
                  getKey={(item) => item.code.toString()}
                  getLabel={(item) => item.name}
                  selectedItem={currentCategory}
                  onClick={(item) => selectCategory(item.code)}
                  />
              </div>
          }
          
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