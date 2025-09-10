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
]

const productName = 'All-In-One Aggregator Service';

export default function ProductPage() {
  return (
    <PageWrapper title='All-In-One Aggregator Service'>
      <ProductInfo info={info} />
      <ThreeThings image={allInOneImage} productName={productName} items={threeThings} />
      <MainFunctions productName={productName} items={functions} />
    </PageWrapper>
  );
}
