'use client';

import { RefObject } from 'react';
import ProductMenuItem, { ProductMenuItemProps } from '../product-menu-item/product-menu-item';
import styles from './product-menu.module.css';

export default function ProductMenu({
  products,
  isOpen,
  closeMenu
}: {
  ref: RefObject<HTMLDivElement | null>;
  isOpen: boolean;
  products: ProductMenuItemProps[];
  closeMenu: () => void;
}) {
  return (
    <div className={`${styles['dropdown']} ${isOpen ? styles['show'] : ''}`}>
      <div className={styles['dropdown-inner']}>
        {
          products.map((product, index) => <ProductMenuItem key={index} menuItem={product} closeMenu={closeMenu} />)
        }
      </div>
    </div>
  );
}
