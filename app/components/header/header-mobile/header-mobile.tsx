'use client';

import styles from './header-mobile.module.css'

import { useEffect, useRef, useState } from 'react';
import { HeaderLogo } from '../header-logo/header-logo';
import { MenuDropdown } from './menu-dropdown/menu-dropdown';

export default function HeaderMobile() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menuDropdownRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        menuDropdownRef?.current &&
        !menuDropdownRef.current.contains(event.target as Node) &&
        menuButtonRef?.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setMenuIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  }

  const buttonClass = menuIsOpen ? styles.closeButton : styles.burgerButton;
  const headerClass = menuIsOpen ? styles.isOpen : '';

  return (
    <header className={`${styles.header} ${headerClass}`}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <HeaderLogo />
          <button ref={menuButtonRef} className={`${styles.menuButton} ${buttonClass}`} onClick={toggleMenu}></button>
        </nav>

        { menuIsOpen ? <MenuDropdown ref={menuDropdownRef} /> : null }
      </div>
    </header>
  );
}
