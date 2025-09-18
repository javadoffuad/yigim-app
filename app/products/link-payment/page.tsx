'use client';

import PageWrapper from "@/components/page-wrapper/page-wrapper";
import ContentImage, { ContentImageProps } from "../components/content-image/main-section/main-section";
import devicesImage from '@/public/images/devices.png';
import ThreeThings from "../components/three-things/main-section/main-section";
import { ThingCardProps } from "../components/three-things/thing-card/thing-card";
import MainFunctions from "../components/main-functions/main-section/main-section";
import { FunctionCardProps } from "../components/main-functions/function-card/function-card";
import linkPaymentImage from '@/public/images/link-payment.png';
import ProductInfo, { ProductInfoProps } from "../components/product-info/product-info";
import RealLifeCases, { RealLifeProps } from "../components/real-life/main-section/main-section";
import { RealLifeCardProps } from "../components/real-life/real-life-card/real-life-card";
import encryptIcon from '@/public/icons/encrypt.svg';
import linkIcon from '@/public/icons/link.svg';
import qrIcon from '@/public/icons/qr.svg';
import shareIcon from '@/public/icons/share.svg';
import saveCardIcon from '@/public/icons/save-card.svg';
import pageIcon from '@/public/icons/page.svg';
import phoneCallingIcon from '@/public/icons/phone-calling-black.svg';
import billIcon from '@/public/icons/bill.svg';

const productName = 'Link Payment +';
const content: ContentImageProps = {
  title: 'From Link to \nPayment in Seconds',
  label: 'Link Payment +',
  image: devicesImage,
  description: `This product is developed exclusively by YIĞIM's own developer team. “All-in-One” offers the broadest range of payment acceptance channels, covering nearly every option available. With a single integration, it enables the client’s billing system to quickly connect to multiple payment channels: Cash (terminal networks) or cashless (mobile payments).`,
}

const threeThings: ThingCardProps[] = [
    {
        number: 1,
        title: 'Effortlessness',
        description: 'Create links or QRs in seconds— no website or setup needed. Fast setup, low friction, and broad usability — perfect for SMEs, freelancers, and service-based businesses.',
    },
    {
        number: 2,
        title: 'Any Channel + Faster Payments',
        description: 'Lets businesses reach customers wherever they are—SMS, email, WhatsApp, etc getting paid quicker',
    },
    {
        number: 3,
        title: 'Saved Cards & One-Click Payments ',
        description: 'Enables convenience for returning customers, leading to more sales with less effort.',
    },
];

const functions: FunctionCardProps[] = [
    {
        icon: encryptIcon,
        title: "Encrypted Transactions",
        description: "End-to-end encryption protects payment data from phishing",
    },
    {
        icon: linkIcon,
        title: "Payment Link Generation",
        description: "Dynamic, secure links created for each invoice",
    },
    {
        icon: qrIcon,
        title: "QR Static & Dynamic",
        description: "Static - same code reused for all payments, dynamic - Unique per transaction, amount-specific, with expiry (e.g. invoices)",
    },
    {
        icon: shareIcon,
        title: "Shared Links",
        description: "A single link can be used by multiple people (e.g. for event payments or group orders)",
    },
    {
        icon: saveCardIcon,
        title: "Saved Cards & One-Click Payments",
        description: "Cards used previously are securely tokenized and stored for future use",
    },
    {
        icon: pageIcon,
        title: "Customizable Pages",
        description: "Merchants can brand the payment page with their logo, colors, and messaging",
    },
]

const realLifeProps: RealLifeProps = {
    productName: productName,
    cases: [
        {
            icon: phoneCallingIcon,
            children: `A customer calls to book a service or books right at the spot in the hotel — just a quick phone reservation.`,
        },
        {
            icon: linkIcon,
            children: `Instead of chasing payments later, you generate a payment link on the spot and send it e.g. via WhatsApp, SMS, E-mail or any other channel your guest prefers.`,
        },
        {
            icon: billIcon,
            children: `Within minutes, the guest is able to pay from their phone. You see the payment come through, linked to that booking, and everything’s tracked automatically—no paperwork, no confusion.`,
        },
    ],
    video: '/videos/link-payment.mp4',
    videoTitle: 'Instant Payment Links\nfor Seamless Bookings',
}

const info: ProductInfoProps = {
  title: "Sending secure payment links via SMS or WhatsApp means you get paid instantly — no website needed and no waiting.",
  description: `One of YIĞIM's own flagship products that enables an effortless
                payment for your customers & consumers. You will be able to simply
                send a link that will directly lead to the payment page. Easy, seamless,
                and secure.`
}

export default function ProductPage() {
  return (
    <PageWrapper title={productName}>
      <ProductInfo info={info} />
      <RealLifeCases props={realLifeProps} />
      <ContentImage content={content} />
      <ThreeThings image={linkPaymentImage} productName={productName} items={threeThings} />
      <MainFunctions productName={productName} items={functions} />
    </PageWrapper>
  );
}
