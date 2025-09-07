'use client';

import Image from 'next/image';
import styles from './footer.module.css';
import logo from '@/public/footer-logo.svg';
import fb from '@/public/social/fb-logo.svg';
import instagram from '@/public/social/instagram-logo.svg';
import linkedin from '@/public/social/linkedin-logo.svg';
import youtube from '@/public/social/youtube-logo.svg';
import Link from 'next/link';
import { PAGE_COMPANY, PAGE_COMPANY_CONTACTS, PAGE_COMPANY_NEWS, PAGE_COMPANY_PARTNERS, PAGE_POLICIY, PAGE_PRODUCT_ALL_IN_ONE, PAGE_PRODUCT_FAST_INVOICE_PAYMENT, PAGE_PRODUCT_INTERNET_ACQUIRING, PAGE_PRODUCT_LINK_PAYMENT, PAGE_RESOURCES_API, PAGE_RESOURCES_HELP_CENTER, PAGE_SECURITY, PAGE_SOCIAL_FACEBOOK, PAGE_SOCIAL_INSTAGRAM, PAGE_SOCIAL_LINKEDIN, PAGE_SOCIAL_YOUTUBE, PAGE_TERMS_CONDITION } from '@/app/constants/navigation.constants';
import FooterColumn from '../footer-column/footer-column';

const products = [
    {
        text: 'All-In-One Aggregator Service',
        url: PAGE_PRODUCT_ALL_IN_ONE
    },
    {
        text: `Internet - Acquiring /\nE-Comm Solution`,
        url: PAGE_PRODUCT_INTERNET_ACQUIRING
    },
    {
        text: 'Link Payment +',
        url: PAGE_PRODUCT_LINK_PAYMENT
    },
    {
        text: 'Fast Invoice Payment',
        url: PAGE_PRODUCT_FAST_INVOICE_PAYMENT
    },
];

const company = [
    {
        text: 'About',
        url: PAGE_COMPANY
    },
    {
        text: 'News',
        url: PAGE_COMPANY_NEWS
    },
    {
        text: 'Our partners',
        url: PAGE_COMPANY_PARTNERS
    },
    {
        text: 'Contacts',
        url: PAGE_COMPANY_CONTACTS
    },
];

const resources = [
    {
        text: 'API Documentation',
        url: PAGE_RESOURCES_API
    },
    {
        text: 'Help Center',
        url: PAGE_RESOURCES_HELP_CENTER
    },
];

export default function Footer() {
    return (
        <footer className={styles["footer"]}>
        <div className={styles["footer-content"]}>
            <div className={styles["footer-top"]}>
                <Image src={logo} alt="YIGIM" className={styles["footer-logo"]} />
                
                <div className={styles["footer-links"]}>
                    <FooterColumn heading='PRODUCT' links={products}/>
                    <FooterColumn heading='COMPANY' links={company}/>
                    <FooterColumn heading='RESOURCES' links={resources}/>
                </div>
            </div>
            
            <div className={styles["footer-social"]}>
                <Link href={PAGE_SOCIAL_FACEBOOK} className={styles["social-item"]} target='_blank'>
                    <Image src={fb} alt="Facebook" />
                    <span>Facebook</span>
                </Link>
                <Link href={PAGE_SOCIAL_INSTAGRAM} className={styles["social-item"]} target='_blank'>
                    <Image src={instagram} alt="Instagram" />
                    <span>Instagram</span>
                </Link>
                <Link href={PAGE_SOCIAL_LINKEDIN} className={styles["social-item"]} target='_blank'>
                    <Image src={linkedin} alt="LinkedIn" />
                    <span>Linkedin</span>
                </Link>
                <Link href={PAGE_SOCIAL_YOUTUBE} className={styles["social-item"]} target='_blank'>
                    <Image src={youtube} alt="YouTube" />
                    <span>Youtube</span>
                </Link>
            </div>
            
            <div className={styles["footer-bottom"]}>
                <div className={styles["copyright"]}>© COPYRIGHT YIGIM 2025</div>
                <div className={styles["footer-legal"]}>
                    <Link href={PAGE_SECURITY}>INFORMATION SECURITY</Link>
                    <Link href={PAGE_POLICIY}>COOKIE POLICY</Link>
                    <Link href={PAGE_TERMS_CONDITION}>TERMS & CONDITION</Link>
                </div>
                <div className={styles["back-to-top"]}>BACK ON THE TOP ↑</div>
            </div>
        </div>
    </footer>
    )
}