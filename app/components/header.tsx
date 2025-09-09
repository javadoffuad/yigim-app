'use client';

import Image from 'next/image';
import styles from './header.module.css'
import logo from '../../public/header-logo.svg';
import Link from "next/link";
import { PAGE_COMPANY_ABOUT, PAGE_COMPANY_CONTACTS, PAGE_COMPANY_NEWS, PAGE_HOME, PAGE_PRODUCTS, PAGE_RESOURCES_API, PAGE_SIGN_IN } from '../constants/navigation.constants';

export default function Header() {
  return (
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
  );
}
