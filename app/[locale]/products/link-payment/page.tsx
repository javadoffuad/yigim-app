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

export default function ProductPage() {
    const t = useTranslations('Products.Product3');
    const info: ProductInfoProps = {
        title: t('SubLabel'),
        description: t('Description'),
    };
    const content: ContentImageProps = {
        label: t('Label'),
        title: t('AdditionalInfo.Info1.Label'),
        content: {
            image: devicesImage,
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
        video: 'link-payment.mp4',
        videoTitle: t('RealLifeExample.LabelVideo'),
        cases: [
            {
                icon: phoneCallingIcon,
                children: t.raw('RealLifeExample.Case1'),
            },
            {
                icon: linkIcon,
                children: t.raw('RealLifeExample.Case2'),
            },
            {
                icon: billIcon,
                children: t.raw('RealLifeExample.Case3'),
            },
        ],
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
            <ThreeThings
                sectionTitle={t('ThreeThings.Label')}
                videoPath={videoPath}
                productName={t('Label')}
                items={threeThings} />
            <MainFunctions productName={t('Label')} sectionTitle={t('MainFunctions.Label')} items={functions} />
        </PageWrapper>
    );
}
