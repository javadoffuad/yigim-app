'use client';

import KeyFacts from '@/components/key-facts/key-facts';
import MainHeader from '@/components/main-header/main-header';
import OurVision from '@/components/our-vision/our-vision';
import WhoLovesUs from '@/components/who-loves-us/who-loves-us';
import { BouncingParameters } from '@/components/bouncing-partners/bouncing-partners';
import WhoWeAre from '@/components/who-we-are/who-we-are';
import Awards from '@/components/awards/awards';
import BuiltForTrust from '@/components/built-for-trust/built-for-trust';
import { RequestCallback } from '@/components/request-callback/request-callback';
import { useState } from 'react';
import ProductsAndServices from '@/components/products/products';
import OurTeam from '@/app/components/our-team/our-team';
import LatestNews from '@/app/components/latest-news/latest-news';

export default function MainPage({params}: PageProps<'/[locale]'>) {
  const [isOpen, setIsOpen] = useState(false);

  const setRequestCallbackIsOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <MainHeader />
      <WhoWeAre />
      <KeyFacts />
      <OurVision />
      <ProductsAndServices />
      <BuiltForTrust />
      <BouncingParameters setRequestCallbackIsOpen={setRequestCallbackIsOpen}/>
      <WhoLovesUs />
      <Awards />
      <OurTeam />
      <LatestNews />
      <RequestCallback outerIsOpen={isOpen} setOuterIsOpen={setRequestCallbackIsOpen} />
    </>
  );
}