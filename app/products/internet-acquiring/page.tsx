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

export default function ProductPage() {
  return (
    <PageWrapper title='Internet - Acquiring / E-Comm Solution'>
      <MainFunctions items={functions} />
    </PageWrapper>
  );
}
