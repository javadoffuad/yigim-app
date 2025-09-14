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

export default function ProductMenuItem(props: ProductMenuItemProps) {
  return (
    <Link href={props.url} className={styles['dropdown-product']}>
      <div className={styles['icon-wrapper']}>
        <Image className={styles['icon']} src={props.icon} alt={props.title} />
      </div>
      <div className={styles['dropdown-product-title']}>{props.title}</div>
      <p className={styles['dropdown-product-desc']}>
        {props.description}
      </p>
    </Link>
  );
}
