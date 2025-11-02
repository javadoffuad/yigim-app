'use client';

import PageWrapper from "@/components/page-wrapper/page-wrapper";
import ContactCard from "./components/contact-card/contact-card";
import email from '@/public/email.svg';
import phone from '@/public/phone.svg';
import address from '@/public/address.svg';
import styles from './page.module.css'
import ContactForm from "./components/contact-form/contact-form";
import ContactMap from "./components/contact-map/contact-map";
import { EMAIL, PHONES } from "@/app/constants/contact.constants";
import { useTranslations } from "next-intl";
import { I18N_CONTACTS_PAGE } from "@/app/constants/i18n.constants";

export default function ContactsPage() {
  const t = useTranslations(`${I18N_CONTACTS_PAGE}`);
  return (
    <>
    <PageWrapper title={t('Label')} className={styles.container}>
      <div className={styles["contact-cards"]}>
        <ContactCard altText="Email" icon={email}>
          {EMAIL}
        </ContactCard>
        <ContactCard altText="Phone" icon={phone}>
          {PHONES.map((phone, index) => <p key={index}>{phone}</p>)}
        </ContactCard>
        <ContactCard altText="Address" icon={address}>
          {t('LabelAddress')}
        </ContactCard>
      </div>
      <ContactForm />
    </PageWrapper>
    <ContactMap />
    </>
  );
}