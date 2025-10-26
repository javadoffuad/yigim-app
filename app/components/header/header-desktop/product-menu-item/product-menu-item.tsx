'use client';

import Image from 'next/image';
import styles from './product-menu-item.module.css'
import {Link} from '@/i18n/navigation';
import { IProduct } from '@/app/models/product.models';

export default function ProductMenuItem({menuItem, closeMenu}: {menuItem: IProduct, closeMenu: () => void}) {
  const handleClick = () => {
    closeMenu();
  }

  return (
    <Link href={menuItem.url} className={styles.link} onClick={handleClick}>
      <div className={styles.iconWrapper}>
        <Image className={styles.icon} src={menuItem.icon} alt={menuItem.name} />
      </div>
      <div className={styles.title}>{menuItem.name}</div>
      <p className={styles.description}>
        {menuItem.description}
      </p>
    </Link>
  );
}
