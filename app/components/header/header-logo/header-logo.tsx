'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './header-logo.module.css';
import { PAGE_HOME } from '@/app/constants/navigation.constants';
import logo from '@/public/header-logo.svg';

export const HeaderLogo = (() => (
  <Link href={PAGE_HOME}>
    <Image src={logo} alt="YIĞIM Logo" className={styles["logo"]} />
  </Link>
)
);
