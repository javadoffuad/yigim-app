'use client';

import KeyFacts from '@/components/key-facts/key-facts';
import MainHeader from '@/components/main-header/main-header';
import OurVision from '@/components/our-vision/our-vision';
import WhoLovesUs from '@/components/who-loves-us/who-loves-us';
import { BouncingParameters } from '@/components/bouncing-partners/bouncing-partners';
import { useEffect, useRef, useState } from 'react';
import { ReactLenis, useLenis } from 'lenis/react'

export default function MainPage() {
  const [keyFactsAnimated, setKeyFactsAnimated] = useState<boolean>(false);
  const keyFactsAnimatedRef = useRef(keyFactsAnimated);

  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
  })

  // Синхронизируем ref с state
  // useEffect(() => {
  //   keyFactsAnimatedRef.current = keyFactsAnimated;
  // }, [keyFactsAnimated]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     const section: HTMLElement | null = document.getElementById("key-facts");

  //     if (section && !keyFactsAnimatedRef.current) {
  //       const sectionTop = section.offsetTop - 100;
  //       const sectionBottom = sectionTop + section.offsetHeight;
        
  //       if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
  //         setKeyFactsAnimated(true);
  //       }
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <>
      <ReactLenis root />
      <MainHeader />
      <div id="key-facts">
        <KeyFacts animated={keyFactsAnimated} />
      </div>
      <OurVision />
      <WhoLovesUs />
      <BouncingParameters />
    </>
  );
}
