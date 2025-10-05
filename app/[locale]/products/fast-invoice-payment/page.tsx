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
import { useTranslations } from "next-intl";

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

export default function ProductPage() {
    const t = useTranslations('Products.Product4');
    const info: ProductInfoProps = {
        title: t('SubLabel'),
        description: t('Description'),
    };
    const realLifeProps: RealLifeProps = {
        productName: t('Label'),
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
            <ThreeThings videoPath={videPath} productName={t('Label')} items={threeThings} />
            <MainFunctions productName={t('Label')} items={functions} />
        </PageWrapper>
    );
}