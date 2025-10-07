'use client';

import PageWrapper from "@/components/page-wrapper/page-wrapper";
import ProductInfo, { ProductInfoProps } from "../components/product-info/product-info";
import ThreeThings from "../components/three-things/main-section/main-section";
import { ThingCardProps } from "../components/three-things/thing-card/thing-card";
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
import { getAbsolutePath } from "@/app/utils/absolute-path.utils";
import { useTranslations } from "next-intl";

export default function ProductPage() {
  const t = useTranslations('Products.Product1');
  const info: ProductInfoProps = {
    title: t('SubLabel'),
    description: t('Description'),
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
  const functions: FunctionCardProps[] = [
    {
      icon: widgetAddIcon,
      title: t('MainFunctions.PaymentIntegration.Label'),
      description: t('MainFunctions.PaymentIntegration.Description'),
    },
    {
      icon: safeIcon,
      title: t('MainFunctions.FundHandling.Label'),
      description: t('MainFunctions.FundHandling.Description'),
    },
    {
      icon: billIcon,
      title: t('MainFunctions.AutomatedReconciliation.Label'),
      description: t('MainFunctions.AutomatedReconciliation.Description'),
    },
    {
      icon: chartIcon,
      title: t('MainFunctions.SmartReporting.Label'),
      description: t('MainFunctions.SmartReporting.Description'),
    },
    {
      icon: passwordIcon,
      title: t('MainFunctions.SMSPaymentCodes.Label'),
      description: t('MainFunctions.SMSPaymentCodes.Description'),
    },
  ];
  const realLifeProps: RealLifeProps = {
    productName: t('RealLifeExample.SubLabel'),
    video: 'wolt-courier.mp4',
    videoTitle: t('RealLifeExample.LabelVideo'),
    cases: [
      {
        icon: banknoteIcon,
        children: t.raw('RealLifeExample.Case1'),
      },
      {
        icon: smartphoneIcon,
        children: t.raw('RealLifeExample.Case2'),
      },
      {
        icon: userIdIcon,
        children: t.raw('RealLifeExample.Case3'),
      },
    ],
  }
  const content: ContentImageProps = {
    title: t('AdditionalInfo.Info1.Label'),
    label: t('AdditionalInfo.Label'),
    image: terminalsImage,
    description: t('AdditionalInfo.Info1.Description'),
  }
  const content2: ContentImageProps = {
    title: t('AdditionalInfo.Info2.Label'),
    label: t('AdditionalInfo.Label'),
    image: appsImage,
    description: t('AdditionalInfo.Info2.Description'),
  };
  const videPath = getAbsolutePath('all-in-onefuturistic-neon-ribbon.mp4');
  return (
    <PageWrapper title={t('Label')}>
      <ProductInfo info={info} />
      <RealLifeCases props={realLifeProps} />
      <ContentImage content={content} />
      <ContentImage content={content2} align="left" />
      <ThreeThings videoPath={videPath} productName={t('Label')} items={threeThings} />
      <MainFunctions productName={t('Label')} items={functions} />
    </PageWrapper>
  );
}