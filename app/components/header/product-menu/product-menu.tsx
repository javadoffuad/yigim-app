'use client';

import { forwardRef } from 'react';
import ProductMenuItem, { ProductMenuItemProps } from '../product-menu-item/product-menu-item';
import styles from './product-menu.module.css';

interface ProductMenuProps {
  products: ProductMenuItemProps[];
  closeMenu: () => void;
}

export const ProductMenu = forwardRef<HTMLDivElement, ProductMenuProps>(
  ({ products, closeMenu }, ref) => {
    return (
      <div ref={ref} className={styles['dropdown']}>
        <div className={styles['dropdown-inner']}>
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
