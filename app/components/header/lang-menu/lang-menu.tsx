'use client';

import { useEffect, useRef, useState } from 'react';
import azeIcon from '@/public/icons/flag-aze.svg';
import rusIcon from '@/public/icons/flag-rus.svg';
import engIcon from '@/public/icons/flag-uk.svg';
import styles from './lang-menu.module.css';
import Image from 'next/image';

export enum LanguageCode {
  AZE = 'aze',
  ENG = 'eng',
  RUS = 'rus',
}

interface Language {
  icon: string;
  name: string;
  code: LanguageCode;
}

export default function LangMenu({currentLang}: {currentLang: LanguageCode}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages: Language[] = [
    {
      name: "Azərbaycan",
      code: LanguageCode.AZE,
      icon: azeIcon,
    },
    {
      name: "English",
      code: LanguageCode.ENG,
      icon: engIcon,
    },
    {
      name: "Русский",
      code: LanguageCode.RUS,
      icon: rusIcon,
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !(dropdownRef.current as any).contains(event.target)) {
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

  const selectLangulage = (code: LanguageCode) => {
    console.log('selectLangulage', code);
    setIsOpen(false);
  };
  
  return (
    <div className={styles.container} ref={dropdownRef}>
      <button className={styles.button} onClick={toggleMenu}>
        {currentLang}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}>
        {
          languages.map((lang, index) => (
            <div
              key={index}
              className={`${styles["dropdown-item"]} ${currentLang === lang.code ? styles["active"] : ''}`}
              onClick={() => selectLangulage(lang.code)}>
              <Image src={lang.icon} alt={lang.name} />
              <span className={styles["dropdown-txt"]}>{lang.name}</span>
            </div>
          ))
        }
      </div>
    </div>
  );
}
