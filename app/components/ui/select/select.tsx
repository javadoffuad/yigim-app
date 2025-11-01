'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './select.module.css';
import { useLocale } from 'next-intl';

export interface ISelectProps<T> {
  items: T[];
  getKey: (item: T) => string;
  getLabel: (item: T) => string;
  selectedItem?: T;
  onClick: (item: T) => void;
}

export default function Select<T>({items, selectedItem, getLabel, getKey, onClick}: ISelectProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const selectItem = (newItem: T) => {
    console.log('select item', newItem);
    setIsOpen(false);
    onClick(newItem);
  };
  const firstItem = items[0]!;

  return (
    <div className={styles.container} ref={dropdownRef}>
      <button className="button" onClick={toggleMenu}>
        {selectedItem ? getLabel(selectedItem) : getLabel(firstItem)}
        <svg className={styles.icon} width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}>
        {
          items.map((item, index) => (
            <div
              key={index}
              className={`${styles["dropdown-item"]} ${item === selectItem ? styles["active"] : ''}`}
              onClick={() => selectItem(item)}>
              <span className={styles["dropdown-txt"]}>{getLabel(item)}</span>
            </div>
          ))
        }
      </div>
    </div>
  );
}
