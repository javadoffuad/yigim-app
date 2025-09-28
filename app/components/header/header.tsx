'use client';

import Image from 'next/image';
import styles from './header.module.css'
import logo from '@/public/header-logo.svg';
import product1Icon from '@/public/icons/product-1.svg';
import product2Icon from '@/public/icons/product-2.svg';
import product3Icon from '@/public/icons/product-3.svg';
import product4Icon from '@/public/icons/product-4.svg';

import Link from "next/link";
import { PAGE_COMPANY_ABOUT, PAGE_COMPANY_CONTACTS, PAGE_COMPANY_NEWS, PAGE_HOME, PAGE_PRODUCT_ALL_IN_ONE, PAGE_PRODUCT_FAST_INVOICE_PAYMENT, PAGE_PRODUCT_INTERNET_ACQUIRING, PAGE_PRODUCT_LINK_PAYMENT, PAGE_PRODUCTS, PAGE_RESOURCES_API, PAGE_SIGN_IN } from '../../constants/navigation.constants';
import { ProductMenuItemProps } from './product-menu-item/product-menu-item';
import { ProductMenu } from './product-menu/product-menu';
import { useEffect, useRef, useState } from 'react';
import LangMenu, { LanguageCode } from './lang-menu/lang-menu';
import { useTranslations } from 'next-intl';

export default function Header() {
  const [productMenuIsOpen, setProductMenuIsOpen] = useState(false);
  const productMenuRef = useRef<HTMLDivElement>(null);
  const productsButtonRef = useRef<HTMLSpanElement>(null);
  const currentLang: LanguageCode = LanguageCode.ENG;
    const t = useTranslations('Header');

  const products: ProductMenuItemProps[] = [
    {
      url: PAGE_PRODUCT_INTERNET_ACQUIRING,
      title: 'Internet - Acquiring / E-Comm',
      description: 'With just one integration, you now can simplify your whole payment process.',
      icon: product1Icon,
    },
    {
      url: PAGE_PRODUCT_ALL_IN_ONE,
      title: 'All-In-One Aggregator Service',
      description: 'With just one integration, you now can simplify your whole payment process.',
      icon: product2Icon,
    },
    {
      url: PAGE_PRODUCT_LINK_PAYMENT,
      title: 'Link Payment +',
      description: 'With just one integration, you now can simplify your whole payment process.',
      icon: product3Icon,
    },
    {
      url: PAGE_PRODUCT_FAST_INVOICE_PAYMENT,
      title: 'Fast Invoice Payment',
      description: 'With just one integration, you now can simplify your whole payment process.',
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
              <Link href={PAGE_HOME}>
                <Image src={logo} alt="YIĞIM Logo" className={styles["logo"]} />
              </Link>
              
              <div className={styles["nav-links"]}>
                <span ref={productsButtonRef} className={`${styles["nav-link"]} ${productMenuIsOpen ? styles.active : ''}`} onClick={toggleDropdown}>
                  {t('Navigation.Products.Label')}
                </span>
                <Link href={PAGE_COMPANY_ABOUT} className={styles["nav-link"]}>{t('Navigation.Company')}</Link>
                <Link href={PAGE_RESOURCES_API} className={styles["nav-link"]}>{t('Navigation.Developers')}</Link>
                <Link href={PAGE_COMPANY_NEWS} className={styles["nav-link"]}>{t('Navigation.News')}</Link>
                <Link href={PAGE_COMPANY_CONTACTS} className={styles["nav-link"]}>{t('Navigation.Contacts')}</Link>
              </div>
              
              <div className={styles["nav-actions"]}>
                <LangMenu currentLang={currentLang} />
                <Link href={PAGE_SIGN_IN} className={styles["login-btn"]}>Log in</Link>
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
