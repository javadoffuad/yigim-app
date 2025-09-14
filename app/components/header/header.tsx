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
import ProductMenu from './product-menu/product-menu';
import { useEffect, useRef, useState } from 'react';

export default function Header() {
  const [productMenuIsOpen, setProductMenuIsOpen] = useState(false);
  const dropdownRef = useRef(null);

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
    console.log('useEffect', dropdownRef);
    const handleClickOutside = (event: any) => {
      console.log('handleClickOutside', event, dropdownRef);
      
      if (dropdownRef?.current && !(dropdownRef.current as any).contains(event.target)) {
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
                <span className={styles["nav-link"]} onClick={toggleDropdown}>Products</span>
                <Link href={PAGE_COMPANY_ABOUT} className={styles["nav-link"]}>Company</Link>
                <Link href={PAGE_RESOURCES_API} className={styles["nav-link"]}>Developers</Link>
                <Link href={PAGE_COMPANY_NEWS} className={styles["nav-link"]}>News</Link>
                <Link href={PAGE_COMPANY_CONTACTS} className={styles["nav-link"]}>Contacts</Link>
              </div>
              
              <div className={styles["nav-actions"]}>
                <button className={styles["lang-btn"]}>
                  ENG
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <Link href={PAGE_SIGN_IN} className={styles["login-btn"]}>Log in</Link>
              </div>
          </nav>
      </header>
      
      <div ref={dropdownRef}>
        <ProductMenu isOpen={productMenuIsOpen} products={products} />
      </div>
    </>
  );
}
