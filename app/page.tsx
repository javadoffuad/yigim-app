'use client';

import KeyFacts from '@/components/key-facts/key-facts';
import MainHeader from '@/components/main-header/main-header';
import OurVision from '@/components/our-vision/our-vision';
import WhoLovesUs from '@/components/who-loves-us/who-loves-us';
import { BouncingFlags } from '@/components/bouncing-partners/bouncing-partners';

export default function HomePage() {
  return (
    <>
      <MainHeader />
      <KeyFacts />
      <OurVision />
      <WhoLovesUs />
      <BouncingFlags />
    </>
  );
}
