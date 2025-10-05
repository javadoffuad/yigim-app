'use client';

import PageWrapper from "@/components/page-wrapper/page-wrapper";
import ContentImage, { ContentImageProps } from "../components/content-image/main-section/main-section";
import devicesImage from '@/public/images/devices.png';
import ThreeThings from "../components/three-things/main-section/main-section";
import { ThingCardProps } from "../components/three-things/thing-card/thing-card";
import MainFunctions from "../components/main-functions/main-section/main-section";
import { FunctionCardProps } from "../components/main-functions/function-card/function-card";
import ProductInfo, { ProductInfoProps } from "../components/product-info/product-info";
import RealLifeCases, { RealLifeProps } from "../components/real-life/main-section/main-section";
import encryptIcon from '@/public/icons/encrypt.svg';
import linkIcon from '@/public/icons/link.svg';
import qrIcon from '@/public/icons/qr.svg';
import shareIcon from '@/public/icons/share.svg';
import saveCardIcon from '@/public/icons/save-card.svg';
import pageIcon from '@/public/icons/page.svg';
import phoneCallingIcon from '@/public/icons/phone-calling-black.svg';
import billIcon from '@/public/icons/bill.svg';
import { getAbsolutePath } from "@/app/utils/absolute-path.utils";
import { useTranslations } from "next-intl";

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

const realLifeProps: RealLifeProps = {
    productName: productName,
    video: 'link-payment.mp4',
    videoTitle: 'Instant Payment Links\nfor Seamless Bookings',
    cases: [
        {
            icon: phoneCallingIcon,
            children: <span>A customer calls to <strong>book a service</strong> or books right at the spot in the <strong>hotel</strong> — just a quick phone reservation.</span>,
        },
        {
            icon: linkIcon,
            children: <span>Instead of chasing payments later, you generate a <strong>payment link</strong> on the spot and send it e.g. via WhatsApp, SMS, E-mail or any other channel your <strong>guest prefers.</strong></span>,
        },
        {
            icon: billIcon,
            children: <span><strong>Within minutes,</strong> the guest is able to pay from their phone. You see the payment come through, linked to that booking, and <strong>everything’s tracked automatically</strong>—no paperwork, no confusion.</span>,
        },
    ],
}

export default function ProductPage() {
    const t = useTranslations('Products.Product3');
    const info: ProductInfoProps = {
        title: t('SubLabel'),
        description: t('Description'),
    };
    const functions: FunctionCardProps[] = [
        {
            icon: encryptIcon,
            title: t('MainFunctions.EncryptedTransactions.Label'),
            description: t('MainFunctions.EncryptedTransactions.Description'),
        },
        {
            icon: linkIcon,
            title: t('MainFunctions.PaymentLinkGeneration.Label'),
            description: t('MainFunctions.PaymentLinkGeneration.Description'),
        },
        {
            icon: qrIcon,
            title: t('MainFunctions.QR.Label'),
            description: t('MainFunctions.QR.Description'),
        },
        {
            icon: shareIcon,
            title: t('MainFunctions.SharedLinks.Label'),
            description: t('MainFunctions.SharedLinks.Description'),
        },
        {
            icon: saveCardIcon,
            title: t('MainFunctions.OneClickPayments.Label'),
            description: t('MainFunctions.OneClickPayments.Description'),
        },
        {
            icon: pageIcon,
            title: t('MainFunctions.CustomizablePages.Label'),
            description: t('MainFunctions.CustomizablePages.Description'),
        },
    ];
    const videoPath = getAbsolutePath('link-payment-3-things.mp4');
    return (
        <PageWrapper title={t('Label')}>
            <ProductInfo info={info} />
            <RealLifeCases props={realLifeProps} />
            <ContentImage content={content} />
            <ThreeThings videoPath={videoPath} productName={t('Label')} items={threeThings} />
            <MainFunctions productName={t('Label')} items={functions} />
        </PageWrapper>
    );
}
