'use client';

import PageWrapper from "@/components/page-wrapper/page-wrapper";
import MainFunctions from "../components/main-functions/main-section/main-section";
import cardSaveIcon from '@/public/card-save.svg';
import bellIcon from '@/public/bell.svg';
import refundsIcon from '@/public/refunds.svg';
import globalIcon from '@/public/global.svg';
import holdingFundsIcon from '@/public/holding-funds.svg';
import secureIcon from '@/public/secure.svg';
import { FunctionCardProps } from "../components/main-functions/function-card/function-card";
import { ThingCardProps } from "../components/three-things/thing-card/thing-card";
import ThreeThings from "../components/three-things/main-section/main-section";

const functions: FunctionCardProps[] = [
    {
        icon: cardSaveIcon,
        title: "Card Save",
        description: "Cards used previously are securely tokenized and stored for future use",
    },
    {
        icon: secureIcon,
        title: "More Secure",
        description: "3D Secure (3DS) - Additional authentication for secure online payments",
    },
    {
        icon: holdingFundsIcon,
        title: "Holding Funds",
        description: "YIĞIM holds the funds until the service is being fulfilled (e. g. a taxi ride)",
    },
    {
        icon: refundsIcon,
        title: "Refunds",
        description: "Easy refund management directly through your dashboard (e. g. taxi ride was cancelled)",
    },
    {
        icon: globalIcon,
        title: "Foreign Card Acceptance",
        description: "Expanded reach to international customers",
    },
    {
        icon: bellIcon,
        title: "Notifications",
        description: "Automated SMS and email alerts for payment confirmations",
    },
]

const threeThings: ThingCardProps[] = [
    {
        number: 1,
        title: 'Backup Plan',
        description: 'YIĞIM is connected to multiple processing centers, automatically rerouting transactions if one of them fails to ensure uninterrupted service',
    },
    {
        number: 2,
        title: 'Secure Transactions',
        description: 'Ensures highest standards of data protection for all payment methods',
    },
    {
        number: 3,
        title: 'Simplicity',
        description: 'Simplifies yout accounting by reconciling with YIĞIM instead of multiple banks',
    },
];

export default function ProductPage() {
  return (
    <PageWrapper title='Internet - Acquiring / E-Comm Solution'>
      <ThreeThings items={threeThings} />
      <MainFunctions items={functions} />
    </PageWrapper>
  );
}
