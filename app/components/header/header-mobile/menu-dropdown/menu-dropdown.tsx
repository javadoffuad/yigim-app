'use client';

import { forwardRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { IProduct } from '@/app/models/product.models';
import styles from './menu-dropdown.module.css';
import Link from 'next/link';
import LangMenu from '../../lang-menu/lang-menu';
import product1Icon from '@/public/icons/product-1.svg';
import product2Icon from '@/public/icons/product-2.svg';
import product3Icon from '@/public/icons/product-3.svg';
import product4Icon from '@/public/icons/product-4.svg';
import { PAGE_COMPANY_ABOUT, PAGE_COMPANY_CONTACTS, PAGE_COMPANY_NEWS, PAGE_PRODUCT_ALL_IN_ONE, PAGE_PRODUCT_FAST_INVOICE_PAYMENT, PAGE_PRODUCT_INTERNET_ACQUIRING, PAGE_PRODUCT_LINK_PAYMENT, PAGE_RESOURCES_DEVELOPERS, PAGE_SIGN_IN } from '@/app/constants/navigation.constants';
import { ProductMenuMobile } from '../product-menu-mobile/product-menu-mobile';

export const MenuDropdown = forwardRef<HTMLDivElement>((_, ref) => {
  const [productMenuIsOpen, setProductMenuIsOpen] = useState(false);
  const t = useTranslations('Header');
  const p = useTranslations('Products');

  const products: IProduct[] = [
    {
      url: PAGE_PRODUCT_INTERNET_ACQUIRING,
      name: p('Product1.Label'),
      description: p('Product1.SubLabel'),
      icon: product1Icon,
    },
    {
      url: PAGE_PRODUCT_ALL_IN_ONE,
      name: p('Product2.Label'),
      description: p('Product2.SubLabel'),
      icon: product2Icon,
    },
    {
      url: PAGE_PRODUCT_LINK_PAYMENT,
      name: p('Product3.Label'),
      description: p('Product3.SubLabel'),
      icon: product3Icon,
    },
    {
      url: PAGE_PRODUCT_FAST_INVOICE_PAYMENT,
      name: p('Product4.Label'),
      description: p('Product4.SubLabel'),
      icon: product4Icon,
    },
  ];

  const toggleDropdown = () => {
    setProductMenuIsOpen(!productMenuIsOpen);
  }

  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.menu}>
        <div className={styles.menuItem} onClick={toggleDropdown}>
          {t('Navigation.Products')}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {
          productMenuIsOpen ? <ProductMenuMobile products={products} /> : null
        }
        <Link href={PAGE_COMPANY_ABOUT} className={styles.menuItem}>{t('Navigation.Company')}</Link>
        <Link href={PAGE_RESOURCES_DEVELOPERS} className={styles.menuItem}>{t('Navigation.Developers')}</Link>
        <Link href={PAGE_COMPANY_NEWS} className={styles.menuItem}>{t('Navigation.News')}</Link>
        <Link href={PAGE_COMPANY_CONTACTS} className={styles.menuItem}>{t('Navigation.Contacts')}</Link>
      </div>
      <div className={styles.utilities}>
        <LangMenu align='top' />
        <Link href={PAGE_SIGN_IN} className="button button-primary button-small">{t('Navigation.Login')}</Link>
      </div>
    </div>
  );
})
