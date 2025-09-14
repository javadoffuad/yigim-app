'use client';

import ProductMenuItem, { ProductMenuItemProps } from '../product-menu-item/product-menu-item';
import styles from './product-menu.module.css';

export default function ProductMenu({products, isOpen}: {isOpen: boolean, products: ProductMenuItemProps[]}) {
  return (
    <div className={`${styles['dropdown']} ${isOpen ? styles['show'] : ''}`}>
      <div className={styles['dropdown-inner']}>
        {
          products.map((product, index) => <ProductMenuItem key={index} {...product} />)
        }
      </div>
    </div>
  );
}
