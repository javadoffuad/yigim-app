'use client';

import styles from './tab-category.module.css';
import { ICategory, PartnerCategory } from '@/app/models/partners.models';

export interface TabCategoryProps {
  categories: ICategory[];
  selectedCategory?: PartnerCategory;
  onClick: (item: PartnerCategory) => void;
}

export default function TabCategory({categories, selectedCategory, onClick}: TabCategoryProps) {
  return (
    <div className={styles.buttons}>
      {
        categories.map((category, index) => (
          <button
            key={index}
            onClick={() => onClick(category.code)}
            className={`button ${selectedCategory === category.code ? 'button-primary' : ''} ${category.code === PartnerCategory.ALL ? styles["button-all"] : ''}`}>
            {category.name}
          </button>
        ))
      }
    </div>
  );
}