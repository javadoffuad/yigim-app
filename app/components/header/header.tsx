'use client';

import { useEffect, useRef, useState } from 'react';
import { useWindowSize } from '@/app/hooks/use-window-size';
import HeaderDesktop from './header-desktop/header-desktop';
import HeaderMobile from './header-mobile/header-mobile';

export default function Header() {
  const [productMenuIsOpen, setProductMenuIsOpen] = useState(false);
  const productMenuRef = useRef<HTMLDivElement>(null);
  const productsButtonRef = useRef<HTMLSpanElement>(null);
  const {width} = useWindowSize();
  const isDesktop = width > 1023;

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        productMenuRef?.current &&
        !productMenuRef.current.contains(event.target as Node) &&
        productsButtonRef?.current &&
        !productsButtonRef.current.contains(event.target as Node)
      ) {
        setProductMenuIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setProductMenuIsOpen(!productMenuIsOpen);
  }

  if (width === 0) {
    return null;
  }

  return (
    isDesktop ? <HeaderDesktop /> : <HeaderMobile />
  );
}
