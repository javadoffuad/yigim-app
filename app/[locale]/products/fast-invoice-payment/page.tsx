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
import smartphone1 from '@/public/images/smartphone-1.png';
import smartphone2 from '@/public/images/smartphone-2.png';
import smartphone3 from '@/public/images/smartphone-3.png';
import smartphone4 from '@/public/images/smartphone-4.png';
import smartphone5 from '@/public/images/smartphone-5.png';
import ThreeThings from "../components/three-things/main-section/main-section";
import { ThingCardProps } from "../components/three-things/thing-card/thing-card";
import RealLifeCases, { RealLifeProps } from "../components/real-life/main-section/main-section";
import { getAbsolutePath } from "@/app/utils/absolute-path.utils";
import { useTranslations } from "next-intl";
import ContentImage, { ContentImageProps } from "../components/content-image/main-section/main-section";
import styles from "./page.module.css";
import Image, { StaticImageData } from "next/image";
import Tooltip from "@/app/components/ui/tooltip/tooltip";

const phones: {tooltip: string, icon: StaticImageData}[] = [
    {
        icon: smartphone1,
        tooltip: "Service provider sends debt notification to their customers using their <mark>own sms gateway</mark> sms text contains personalized payment link"
    },
    {
        icon: smartphone2,
        tooltip: "Customer opens the link from sms and sees <mark>their payment information</mark>"
    },
    {
        icon: smartphone3,
        tooltip: "Cards used in previous payments automatically saved for future one-click payments. <mark>Google & apple pay are also there.</mark>"
    },
    {
        icon: smartphone4,
        tooltip: "Customers enter card information on <mark>YIĞIM Payment System</mark> side in a safe way"
    },
    {
        icon: smartphone5,
        tooltip: "Notification about <mark>Successful Payment + Receipt Download</mark>"
    },
]

export default function ProductPage() {
    const t = useTranslations('Products.Product4');
    const info: ProductInfoProps = {
        title: t('SubLabel'),
        description: t('Description'),
    };
    const content: ContentImageProps = {
        label: t('Label'),
        title: t('AdditionalInfo.Info1.Label'),
        content: {
            contentHTML: <div className={styles["container"]}>
                <div className={styles["phones"]}>
                    {
                        phones.map((phone, index) => (
                            <div key={index} className={styles["phone"]}>
                                <Tooltip text={phone.tooltip} />
                                <Image src={phone.icon} alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>,
        },
        description: t('AdditionalInfo.Info1.Description'),
    };
    const threeThings: ThingCardProps[] = [
        {
            number: 1,
            title: t('ThreeThings.Case1.Label'),
            description: t.raw('ThreeThings.Case1.Description'),
        },
        {
            number: 2,
            title: t('ThreeThings.Case2.Label'),
            description: t.raw('ThreeThings.Case2.Description'),
        },
        {
            number: 3,
            title: t('ThreeThings.Case3.Label'),
            description: t.raw('ThreeThings.Case3.Description'),
        },
    ];
    const realLifeProps: RealLifeProps = {
        productName: t('Label'),
        sectionTitle: t('RealLifeExample.Label'),
        cases: [
            {
                icon: bellIcon,
                children: t.raw('RealLifeExample.Case1'),
            },
            {
                icon: moneyIcon,
                children: t.raw('RealLifeExample.Case2'),
            },
            {
                icon: energyIcon,
                children: t.raw('RealLifeExample.Case3'),
            },
        ],
        video: 'fast-invoice.mp4',
        videoTitle: t('RealLifeExample.LabelVideo'),
    };
    const functions: FunctionCardProps[] = [
        {
            icon: linkIcon,
            title: t('MainFunctions.InstantPaymentLinks.Label'),
            description: t('MainFunctions.InstantPaymentLinks.Description'),
        },
        {
            icon: reminderIcon,
            title: t('MainFunctions.AutomatedPaymentReminders.Label'),
            description: t('MainFunctions.AutomatedPaymentReminders.Description'),
        },
        {
            icon: cardIcon,
            title: t('MainFunctions.OneClickPayments.Label'),
            description: t('MainFunctions.OneClickPayments.Description'),
        },
        {
            icon: smartphoneIcon,
            title: t('MainFunctions.MobileFirstInterface.Label'),
            description: t('MainFunctions.MobileFirstInterface.Description'),
        },
        {
            icon: encryptIcon,
            title: t('MainFunctions.EndToEndEncryption.Label'),
            description: t('MainFunctions.EndToEndEncryption.Description'),
        },
    ]
    const videPath = getAbsolutePath('fast-invoice-smartphone-invoice.mp4');
    return (
        <PageWrapper title={t('Label')}>
            <ProductInfo info={info} />
            <RealLifeCases props={realLifeProps} />
            <ContentImage content={content} align="full" />
            <ThreeThings
                sectionTitle={t('ThreeThings.Label')}
                videoPath={videPath}
                productName={t('Label')}
                items={threeThings} />
            <MainFunctions productName={t('Label')} sectionTitle={t('MainFunctions.Label')} items={functions} />
        </PageWrapper>
    );
}