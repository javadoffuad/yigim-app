'use client';

import { useWindowSize } from '@/app/hooks/use-window-size';
import HeaderDesktop from './header-desktop/header-desktop';
import HeaderMobile from './header-mobile/header-mobile';

export default function Header() {
  const {width} = useWindowSize();
  const isDesktop = width > 1023;

  if (width === 0) {
    return null;
  }

  return (
    isDesktop ? <HeaderDesktop /> : <HeaderMobile />
  );
}
