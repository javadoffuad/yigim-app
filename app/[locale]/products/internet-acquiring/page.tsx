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
import calendarIcon from '@/public/icons/calendar-freezer.svg';
import RealLifeCases, { RealLifeProps } from "../components/real-life/main-section/main-section";
import ProductInfo, { ProductInfoProps } from "../components/product-info/product-info";
import { getAbsolutePath } from "@/app/utils/absolute-path.utils";
import { useTranslations } from "next-intl";

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
    const t = useTranslations('Products.Product2');
    const info: ProductInfoProps = {
        title: t('SubLabel'),
        description: t('Description'),
    };
    const realLifeProps: RealLifeProps = {
        productName: t('Label'),
        cases: [
            {
                icon: calendarIcon,
                children: t.raw('RealLifeExample.Case1'),
            },
            {
                icon: refundsIcon,
                children: t.raw('RealLifeExample.Case2'),
            },
        ],
        video: 'secure.mp4',
        videoTitle: t('RealLifeExample.LabelVideo'),
    };
    const functions: FunctionCardProps[] = [
        {
            icon: cardSaveIcon,
            title: t('MainFunctions.CardSave.Label'),
            description: t('MainFunctions.CardSave.Description'),
        },
        {
            icon: secureIcon,
            title: t('MainFunctions.FlexibleTransaction.Label'),
            description: t('MainFunctions.FlexibleTransaction.Description'),
        },
        {
            icon: holdingFundsIcon,
            title: t('MainFunctions.HoldingFunds.Label'),
            description: t('MainFunctions.HoldingFunds.Description'),
        },
        {
            icon: refundsIcon,
            title: t('MainFunctions.Refunds.Label'),
            description: t('MainFunctions.Refunds.Description'),
        },
        {
            icon: globalIcon,
            title: t('MainFunctions.MarketLeader.Label'),
            description: t('MainFunctions.MarketLeader.Description'),
        },
        {
            icon: bellIcon,
            title: t('MainFunctions.Notifications.Label'),
            description: t('MainFunctions.Notifications.Description'),
        },
    ];
    const videPath = getAbsolutePath('internet-acquiring-ecom-solution.mp4');
    return (
        <PageWrapper title={t('Label')}>
            <ProductInfo info={info} />
            <RealLifeCases props={realLifeProps} />
            <ThreeThings videoPath={videPath} productName={t('Label')} items={threeThings} />
            <MainFunctions productName={t('Label')} items={functions} />
        </PageWrapper>
    );
}