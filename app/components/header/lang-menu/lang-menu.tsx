'use client';

import { RefObject } from 'react';
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

export default function LangMenu({isOpen, currentLang}: {ref?: RefObject<null>; isOpen?: boolean, currentLang: LanguageCode}) {
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
  
  return (
    <div className={styles["dropdown"]}>
      {
        languages.map((lang, index) => (
          <div key={index} className={`${styles["dropdown-item"]} ${currentLang === lang.code ? styles["active"] : ''}`}>
            <Image src={lang.icon} alt={lang.name} />
            <span className={styles["dropdown-txt"]}>{lang.name}</span>
          </div>
        ))
      }
    </div>
  );
}
