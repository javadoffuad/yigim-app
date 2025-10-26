'use client';

import { IProduct } from '@/app/models/product.models';
import styles from './product-menu-mobile.module.css';
import Link from 'next/link';
import Image from 'next/image';

interface ProductMenuProps {
  products: IProduct[];
}

export const ProductMenuMobile = (
  ({ products }: ProductMenuProps) => (
    <div className={styles.menu}>
      {
        products.map((product, index) =>
          <Link key={index} href={product.url} className={styles.menuItem}>
            <div className={styles.iconWrapper}>
              <Image className={styles.icon} src={product.icon} alt={product.name} />
            </div>
            <span className={styles.menuText}>{product.name}</span>
          </Link>)
      }
    </div>
  )
);
