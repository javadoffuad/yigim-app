'use client';

import PageWrapper from '@/components/page-wrapper/page-wrapper';
import WhoLovesUs from './components/who-loves-us/who-loves-us';
import styles from './page.module.css';
import { ICategory, IPartner, PartnerCategory } from '@/app/models/partners.models';
import { partners } from '@/app/constants/partners.constants';
import Image from 'next/image';

const categories: ICategory[] = [
  {
    code: PartnerCategory.MOBILITY,
    name: '(e-)Mobility'
  },
  {
    code: PartnerCategory.HOSPITAL,
    name: 'Hospitality'
  },
  {
    code: PartnerCategory.DELIVERY,
    name: 'Food Delivery'
  },
  {
    code: PartnerCategory.CONSUMER_GOODS,
    name: 'Consumer Goods'
  },
  {
    code: PartnerCategory.MARKETPLACE,
    name: 'Online Marketplace'
  },
];

export default function PartnersPage() {
  return (
    <PageWrapper title='Our partners'>
      <WhoLovesUs />
      <div className={styles.section}>
        <div className={styles.text}>
          <h3 className={styles.title}>Who loves us</h3>
          <p className={styles.description}>Together with our partners we offer<br />the most reliable service...</p>
        </div>

        <div className={styles.partners}>
          <div className={styles.buttons}>
            <button className={`button button-primary ${styles["button-all"]}`}>All</button>
            
            {
              categories.map((category, index) =>(
                <button key={index} className="button button-tertiary">{category.name}</button>
              ))
            }
          </div>
          <div className={styles['partners-container']}>
            {
              partners.map((partner, index) =>
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
