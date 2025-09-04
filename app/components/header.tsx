'use client';

import Image from 'next/image';
import styles from './header.module.css'
import logo from '../../public/header-logo.svg';
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
        <nav className={styles.nav}>
            <Link href="/">
              <Image src={logo} alt="YIĞIM Logo" className={styles["logo"]} />
            </Link>
            
            <div className={styles["nav-links"]}>
              <Link href="/products" className={styles["nav-link"]}>Products</Link>
              <Link href="/company" className={styles["nav-link"]}>Company</Link>
              <Link href="/developers" className={styles["nav-link"]}>Developers</Link>
              <Link href="/news" className={styles["nav-link"]}>News</Link>
              <Link href="/contacts" className={styles["nav-link"]}>Contacts</Link>
            </div>
            
            <div className={styles["nav-actions"]}>
              <button className={styles["lang-btn"]}>
                ENG
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <Link href="/login" className={styles["login-btn"]}>Log in</Link>
            </div>
        </nav>
    </header>
  );
}
