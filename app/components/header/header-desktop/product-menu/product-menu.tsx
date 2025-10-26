'use client';

import { forwardRef } from 'react';
import ProductMenuItem from '../product-menu-item/product-menu-item';
import styles from './product-menu.module.css';
import { IProduct } from '@/app/models/product.models';

interface ProductMenuProps {
  products: IProduct[];
  closeMenu: () => void;
}

export const ProductMenu = forwardRef<HTMLDivElement, ProductMenuProps>(
  ({ products, closeMenu }, ref) => {
    return (
      <div ref={ref} className={styles.container}>
        <div className={styles.navList}>
          {products.map((product, index) => (
            <ProductMenuItem
              key={index}
              menuItem={product}
              closeMenu={closeMenu}
            />
          ))}
        </div>
      </div>
    );
  }
);
