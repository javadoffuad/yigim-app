'use client';

import KeyFacts from '@/components/key-facts/key-facts';
import MainHeader from '@/components/main-header/main-header';
import OurVision from '@/components/our-vision/our-vision';
import WhoLovesUs from '@/components/who-loves-us/who-loves-us';
import { BouncingParameters } from '@/components/bouncing-partners/bouncing-partners';
import WhoWeAre from '@/components/who-we-are/who-we-are';
import Awards from '../components/awards/awards';
import BuiltForTrust from '../components/built-for-trust/built-for-trust';

export default function MainPage() {
  return (
    <>
      <MainHeader />
      <WhoWeAre />
      <KeyFacts />
      <OurVision />
      <BuiltForTrust />
      <BouncingParameters />
      <WhoLovesUs />
      <Awards />
    </>
  );
}
