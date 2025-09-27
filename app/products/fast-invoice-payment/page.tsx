'use client';

import PageWrapper from "@/components/page-wrapper/page-wrapper";
import ProductInfo, { ProductInfoProps } from "../components/product-info/product-info";
import MainFunctions from "../components/main-functions/main-section/main-section";
import { FunctionCardProps } from "../components/main-functions/function-card/function-card";
import linkIcon from '@/public/icons/link.svg';
import reminderIcon from '@/public/icons/reminder.svg';
import cardIcon from '@/public/icons/save-card.svg';
import smartphoneIcon from '@/public/icons/smartphone.svg';
import encryptIcon from '@/public/icons/encrypt.svg';
import bellIcon from '@/public/bell.svg';
import moneyIcon from '@/public/icons/money.svg';
import energyIcon from '@/public/icons/energy.svg';
import ThreeThings from "../components/three-things/main-section/main-section";
import { ThingCardProps } from "../components/three-things/thing-card/thing-card";
import RealLifeCases, { RealLifeProps } from "../components/real-life/main-section/main-section";
import { getAbsolutePath } from "@/app/utils/absolute-path.utils";

const productName = "Fast Invoice Payment";
const info: ProductInfoProps = {
  title: "The smart SMS reminders with built-in payment options make payments effortless. Your customers pay faster while your workload drops.",
  description: `YIĞIM's own product that helps you to get your payments on time. FIP is a solution for accelerating invoice payments and reducing late payment risks. We solve  slow, inconvenient payments by replacing SMS reminders with smart links to pre-filled payment pages.`
}
const functions: FunctionCardProps[] = [
  {
      icon: linkIcon,
      title: "Instant Payment Links",
      description: "Generate and send payment-ready invoices customers can pay immediately upon receipt",
  },
  {
      icon: reminderIcon,
      title: "Automated Payment Reminders",
      description: "Schedule and send custom SMS reminders with secure links tied to each invoice.",
  },
  {
      icon: cardIcon,
      title: "Saved Cards & One-Click Payments",
      description: "Cards used previously are securely tokenized and stored for future use",
  },
  {
      icon: smartphoneIcon,
      title: "Mobile-First Interface",
      description: "Optimized for mobile devices to ensure a smooth payment experience anywhere, anytime",
  },
  {
      icon: encryptIcon,
      title: "End-to-End Encryption",
      description: "Process all transactions with compliance-grade security and full data protection.",
  },
]
const threeThings: ThingCardProps[] = [
  {
      number: 1,
      title: 'Secure',
      description: 'Secure Data Transmission: All data is encrypted to protect customer information',
  },
  {
      number: 2,
      title: 'Fast & Easy',
      description: 'Send instant, mobile-friendly invoices customers can pay anytime, anywhere',
  },
  {
      number: 3,
      title: 'Automated & Smart',
      description: 'Automate reminders and reduce time chasing payments',
  },
];

const realLifeProps: RealLifeProps = {
    productName: productName,
    cases: [
        {
            icon: bellIcon,
            children: `Baku Electronics used to send plain SMS reminders for credit payments—customers still had to find the contract, log in, and fill in details.`,
        },
        {
            icon: moneyIcon,
            children: `Now, with YIĞIM’s Fast Invoice Payment, they send a smart link via SMS (or any other digital channel). The customer taps the link, sees a pre-filled payment page with all contract info, and pays in seconds.`,
        },
        {
            icon: energyIcon,
            children: `For the business, this means faster payments, fewer support calls, and a smoother payment experience—all with one simple link.`,
        },
    ],
    video: 'fast-invoice.mp4',
    videoTitle: 'Fast Invoice, Fast Payment',
}

export default function ProductPage() {
    const videPath = getAbsolutePath('fast-invoice-smartphone-invoice.mp4');
    return (
        <PageWrapper title={productName}>
        <ProductInfo info={info} />
        <RealLifeCases props={realLifeProps} />
        <ThreeThings videoPath={videPath} productName={productName} items={threeThings} />
        <MainFunctions productName={productName} items={functions} />
        </PageWrapper>
    );
}
