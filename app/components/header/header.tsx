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

export default function Header() {
  return (
    <>
      <header className={styles.header}>
          <nav className={styles.nav}>
              <Link href={PAGE_HOME}>
                <Image src={logo} alt="YIĞIM Logo" className={styles["logo"]} />
              </Link>
              
              <div className={styles["nav-links"]}>
                <Link href={PAGE_PRODUCTS} className={styles["nav-link"]}>Products</Link>
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
      
      <div className={styles['dropdown']}>
        <div className={styles['dropdown-inner']}>
          <Link href={PAGE_PRODUCT_INTERNET_ACQUIRING} className={styles['dropdown-product']}>
            <Image className={styles['dropdown-product-icon']} src={product1Icon} alt="Internet - Acquiring / E-Comm" />
            <div className={styles['dropdown-product-title']}>Internet - Acquiring / E-Comm</div>
            <p className={styles['dropdown-product-desc']}>With just one integration, you now can simplify your whole payment process.</p>
          </Link>

          <Link href={PAGE_PRODUCT_ALL_IN_ONE} className={styles['dropdown-product']}>
            <Image className={styles['dropdown-product-icon']} src={product2Icon} alt="All-In-One Aggregator Service" />
            <div className={styles['dropdown-product-title']}>All-In-One Aggregator Service</div>
            <p className={styles['dropdown-product-desc']}>With just one integration, you now can simplify your whole payment process.</p>
          </Link>
          <Link href={PAGE_PRODUCT_LINK_PAYMENT} className={styles['dropdown-product']}>
            <Image className={styles['dropdown-product-icon']} src={product3Icon} alt="Link Payment +" />
            <div className={styles['dropdown-product-title']}>Link Payment +</div>
            <p className={styles['dropdown-product-desc']}>With just one integration, you now can simplify your whole payment process.</p>
          </Link>
          <Link href={PAGE_PRODUCT_FAST_INVOICE_PAYMENT} className={styles['dropdown-product']}>
            <Image className={styles['dropdown-product-icon']} src={product4Icon} alt="Fast Invoice Payment" />
            <div className={styles['dropdown-product-title']}>Fast Invoice Payment</div>
            <p className={styles['dropdown-product-desc']}>With just one integration, you now can simplify your whole payment process.</p>
          </Link>
        </div>
      </div>
    </>
  );
}
