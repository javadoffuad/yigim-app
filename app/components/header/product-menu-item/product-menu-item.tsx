'use client';

import Image from 'next/image';
import styles from './product-menu-item.module.css'
import Link from "next/link";

export interface ProductMenuItemProps {
  title: string;
  description: string;
  icon: string;
  url: string;
}

export default function ProductMenuItem({menuItem, closeMenu}: {menuItem: ProductMenuItemProps, closeMenu: () => void}) {
  const handleClick = () => {
    closeMenu();
  }

  return (
    <Link href={menuItem.url} className={styles['dropdown-product']} onClick={handleClick}>
      <div className={styles['icon-wrapper']}>
        <Image className={styles['icon']} src={menuItem.icon} alt={menuItem.title} />
      </div>
      <div className={styles['dropdown-product-title']}>{menuItem.title}</div>
      <p className={styles['dropdown-product-desc']}>
        {menuItem.description}
      </p>
    </Link>
  );
}
