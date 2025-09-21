'use client';

import PageWrapper from "@/components/page-wrapper/page-wrapper";
import ContactCard from "./components/contact-card/contact-card";
import email from '@/public/email.svg';
import phone from '@/public/phone.svg';
import address from '@/public/address.svg';
import styles from './page.module.css'
import ContactForm from "./components/contact-form/contact-form";
import ContactMap from "./components/contact-map/contact-map";

export default function ContactsPage() {
  return (
    <>
    <PageWrapper title='Get in touch'>
      <div className={styles["contact-cards"]}>
        <ContactCard altText="Email" icon={email}>
          info@yigim.az
        </ContactCard>
        <ContactCard altText="Phone" icon={phone}>
          (+994) 55 205 95 59<br />(+994) 55 255 84 55
        </ContactCard>
        <ContactCard altText="Address" icon={address}>
          Bakı, Yasamal r-nu,<br />İsmayıl Qutqaşınlı 507-511 B
        </ContactCard>
      </div>
      <ContactForm />
    </PageWrapper>
    <ContactMap />
    </>
  );
}
