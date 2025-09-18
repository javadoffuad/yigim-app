'use client';

import PageWrapper from "@/components/page-wrapper/page-wrapper";
import ProductInfo, { ProductInfoProps } from "../components/product-info/product-info";
import ThreeThings from "../components/three-things/main-section/main-section";
import { ThingCardProps } from "../components/three-things/thing-card/thing-card";
import allInOneImage from "@/public/images/all-in-one-image.png";
import MainFunctions from "../components/main-functions/main-section/main-section";
import { FunctionCardProps } from "../components/main-functions/function-card/function-card";
import widgetAddIcon from "@/public/icons/widget-add.svg";
import safeIcon from "@/public/icons/safe.svg";
import billIcon from "@/public/icons/bill.svg";
import chartIcon from "@/public/icons/chart.svg";
import passwordIcon from "@/public/icons/password.svg";
import banknoteIcon from "@/public/icons/banknote.svg";
import smartphoneIcon from "@/public/icons/smartphone.svg";
import userIdIcon from "@/public/icons/user-id.svg";
import terminalsImage from "@/public/images/terminals.png";
import appsImage from "@/public/images/apps.png";
import RealLifeCases, { RealLifeProps } from "../components/real-life/main-section/main-section";
import ContentImage, { ContentImageProps } from "../components/content-image/main-section/main-section";

const productName = 'All-In-One Aggregator Service';
const info: ProductInfoProps = {
  title: "With just one integration, you now can simplify your whole payment process.",
  description: `This product is developed exclusively by YIĞIM's own developer team. “All-in-One” offers the broadest range of payment acceptance channels, covering nearly every option available. With a single integration, it enables the client’s billing system to quickly connect to multiple payment channels: Cash (terminal networks) or cashless (mobile payments).`
}
const threeThings: ThingCardProps[] = [
  {
      number: 1,
      title: 'One Integration, Full Market Coverage',
      description: 'With a single integration, your business gains access to the largest omni-channel payment network in Azerbaijan.',
  },
  {
      number: 2,
      title: 'You’re in Control',
      description: 'Access live transaction data and exportable daily, weekly, and monthly reports — all from one dashboard.',
  },
  {
      number: 3,
      title: 'Brand Visibility',
      description: 'Your logo appears instantly across top banks\' apps and major terminal networks — boosting reach and building trust',
  },
];

const functions: FunctionCardProps[] = [
  {
      icon: widgetAddIcon,
      title: "Unified Payment Integration",
      description: "Handle all payments—app or terminal—with a single connection",
  },
  {
      icon: safeIcon,
      title: "Direct Fund Handling",
      description: "YIĞIM collects and distributes funds end-to-end",
  },
  {
      icon: billIcon,
      title: "Automated Reconciliation",
      description: "Easily manage and match transactions ",
  },
  {
      icon: chartIcon,
      title: "Smart Reporting",
      description: "Daily, weekly, and monthly reports with export functionality and automated generation",
  },
  {
      icon: passwordIcon,
      title: "SMS Payment Codes",
      description: "A unique code via SMS lets customers make payments through terminals",
  },
];
const realLifeProps: RealLifeProps = {
    productName: 'This product is developed exclusively by YIĞIM\s',
    cases: [
        {
            icon: banknoteIcon,
            children: `When a Wolt courier receives cash from a customer, they need a quick and secure way to transfer it to Wolt.`,
        },
        {
            icon: smartphoneIcon,
            children: `With our All-in-One solution, the courier can easily deposit the cash via a nearby terminal or mobile banking app.`,
        },
        {
            icon: userIdIcon,
            children: `By entering their Courier ID, the money goes directly to Wolt’s account no delays, no manual work.`,
        },
    ],
    video: 'wolt-courier.mp4',
    videoTitle: 'Wolt Courier',
}
const content: ContentImageProps = {
  title: 'Payment Terminals',
  label: 'Our Coverage Network',
  image: terminalsImage,
  description: `This product is developed exclusively by YIĞIM's own developer team. “All-in-One” offers the broadest range of payment acceptance channels, covering nearly every option available. With a single integration, it enables the client’s billing system to quickly connect to multiple payment channels: Cash (terminal networks) or cashless (mobile payments).`,
}
const content2: ContentImageProps = {
  title: 'Mobile Apps',
  label: 'Our Coverage Network',
  image: appsImage,
  description: `This product is developed exclusively by YIĞIM's own developer team. “All-in-One” offers the broadest range of payment acceptance channels, covering nearly every option available. With a single integration, it enables the client’s billing system to quickly connect to multiple payment channels: Cash (terminal networks) or cashless (mobile payments).`,
}

export default function ProductPage() {
  return (
    <PageWrapper title='All-In-One Aggregator Service'>
      <ProductInfo info={info} />
      <RealLifeCases props={realLifeProps} />
      <ContentImage content={content} />
      <ContentImage content={content2} align="left" />
      <ThreeThings image={allInOneImage} productName={productName} items={threeThings} />
      <MainFunctions productName={productName} items={functions} />
    </PageWrapper>
  );
}
