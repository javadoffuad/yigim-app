'use client';

import { useEffect, useRef, useState } from 'react';
import azeIcon from '@/public/icons/flag-aze.svg';
import rusIcon from '@/public/icons/flag-rus.svg';
import engIcon from '@/public/icons/flag-uk.svg';
import styles from './lang-menu.module.css';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Language, LanguageCode } from '@/app/models/language.models';

export default function LangMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

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

  const selectLangulage = (newLocale: LanguageCode) => {
    // Сохраняем выбор в localStorage
    localStorage.setItem('preferred-locale', newLocale);

    // Создаем новый путь с измененной локалью
    const segments = pathname.split('/');

    // Проверяем, является ли первый сегмент одним из LanguageCode
    const currentFirstSegment = segments[1];
    const isCurrentSegmentLanguage = Object.values(LanguageCode).includes(currentFirstSegment as LanguageCode);

    if (isCurrentSegmentLanguage) {
      // Если текущий сегмент - это локаль, заменяем ее
      segments[1] = newLocale;
    } else {
      // Если текущий сегмент не локаль, добавляем новую локаль в начало
      segments.splice(1, 0, newLocale);
    }

    const newPath = segments.join('/');

    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className={styles.container} ref={dropdownRef}>
      <button className={styles.button} onClick={toggleMenu}>
        {locale}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}>
        {
          languages.map((lang, index) => (
            <div
              key={index}
              className={`${styles["dropdown-item"]} ${locale === lang.code ? styles["active"] : ''}`}
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
