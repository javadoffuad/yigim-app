'use client';

import styles from './header-desktop.module.css'
import product1Icon from '@/public/icons/product-1.svg';
import product2Icon from '@/public/icons/product-2.svg';
import product3Icon from '@/public/icons/product-3.svg';
import product4Icon from '@/public/icons/product-4.svg';

import { Link } from '@/i18n/navigation';
import { PAGE_COMPANY_ABOUT, PAGE_COMPANY_CONTACTS, PAGE_COMPANY_NEWS, PAGE_PRODUCT_ALL_IN_ONE, PAGE_PRODUCT_FAST_INVOICE_PAYMENT, PAGE_PRODUCT_INTERNET_ACQUIRING, PAGE_PRODUCT_LINK_PAYMENT, PAGE_RESOURCES_DEVELOPERS, PAGE_SIGN_IN } from '@/constants/navigation.constants';
import { IProduct } from '@/app/models/product.models';
import { ProductMenu } from './product-menu/product-menu';
import { useEffect, useRef, useState } from 'react';
import LangMenu from '../lang-menu/lang-menu';
import { useTranslations } from 'next-intl';
import { HeaderLogo } from '../header-logo/header-logo';

export default function HeaderDesktop() {
  const [productMenuIsOpen, setProductMenuIsOpen] = useState(false);
  const productMenuRef = useRef<HTMLDivElement>(null);
  const productsButtonRef = useRef<HTMLSpanElement>(null);
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

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        productMenuRef?.current &&
        !productMenuRef.current.contains(event.target as Node) &&
        productsButtonRef?.current &&
        !productsButtonRef.current.contains(event.target as Node)
      ) {
        setProductMenuIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setProductMenuIsOpen(!productMenuIsOpen);
  }

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <HeaderLogo />

          <div className={styles.menu}>
            <span ref={productsButtonRef} className={`${styles.menuItem} ${productMenuIsOpen ? styles.isActive : ''}`} onClick={toggleDropdown}>
              {t('Navigation.Products')}
            </span>
            <Link href={PAGE_COMPANY_ABOUT} className={styles.menuItem}>{t('Navigation.Company')}</Link>
            <Link href={PAGE_RESOURCES_DEVELOPERS} className={styles.menuItem}>{t('Navigation.Developers')}</Link>
            <Link href={PAGE_COMPANY_NEWS} className={styles.menuItem}>{t('Navigation.News')}</Link>
            <Link href={PAGE_COMPANY_CONTACTS} className={styles.menuItem}>{t('Navigation.Contacts')}</Link>
          </div>

          <div className={styles.utilities}>
            <LangMenu />
            <Link href={PAGE_SIGN_IN} className="button button-primary button-small">{t('Navigation.Login')}</Link>
          </div>
        </nav>
      </header>

      {
        productMenuIsOpen
          ? <ProductMenu ref={productMenuRef} products={products} closeMenu={toggleDropdown} />
          : null
      }

    </>
  );
}
