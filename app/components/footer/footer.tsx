'use client';

import Image from 'next/image';
import styles from './footer.module.css';
import logo from '@/public/footer-logo.svg';
import fb from '@/public/social/fb-logo.svg';
import instagram from '@/public/social/instagram-logo.svg';
import linkedin from '@/public/social/linkedin-logo.svg';
import youtube from '@/public/social/youtube-logo.svg';
import {Link} from '@/i18n/navigation';
import { PAGE_COMPANY_ABOUT, PAGE_COMPANY_CONTACTS, PAGE_COMPANY_NEWS, PAGE_COMPANY_PARTNERS, PAGE_POLICIY, PAGE_PRODUCT_ALL_IN_ONE, PAGE_PRODUCT_FAST_INVOICE_PAYMENT, PAGE_PRODUCT_INTERNET_ACQUIRING, PAGE_PRODUCT_LINK_PAYMENT, PAGE_RESOURCES_DEVELOPERS, PAGE_RESOURCES_HELP_CENTER, PAGE_SECURITY, PAGE_SOCIAL_FACEBOOK, PAGE_SOCIAL_INSTAGRAM, PAGE_SOCIAL_LINKEDIN, PAGE_SOCIAL_YOUTUBE, PAGE_TERMS_CONDITION } from '@/app/constants/navigation.constants';
import FooterColumn from '../footer-column/footer-column';
import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('Footer');
    const p = useTranslations('Products');

    const products = [
        {
            text: p('Product1.Label'),
            url: PAGE_PRODUCT_ALL_IN_ONE
        },
        {
            text: p('Product2.Label'),
            url: PAGE_PRODUCT_INTERNET_ACQUIRING
        },
        {
            text: p('Product3.Label'),
            url: PAGE_PRODUCT_LINK_PAYMENT
        },
        {
            text: p('Product4.Label'),
            url: PAGE_PRODUCT_FAST_INVOICE_PAYMENT
        },
    ];

    const company = [
        {
            text: t('AreaNavigations.Company.LabelAbout'),
            url: PAGE_COMPANY_ABOUT
        },
        {
            text: t('AreaNavigations.Company.LabelNews'),
            url: PAGE_COMPANY_NEWS
        },
        {
            text: t('AreaNavigations.Company.LabelPartners'),
            url: PAGE_COMPANY_PARTNERS
        },
        {
            text: t('AreaNavigations.Company.LabelContacts'),
            url: PAGE_COMPANY_CONTACTS
        },
    ];

    const resources = [
        {
            text: t('AreaNavigations.Resources.LabelApi'),
            url: PAGE_RESOURCES_DEVELOPERS
        },
        {
            text: t('AreaNavigations.Resources.LabelHelp'),
            url: PAGE_RESOURCES_HELP_CENTER
        },
    ];

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer className={styles["footer"]}>
        <div className={styles["footer-content"]}>
            <div className={styles["footer-top"]}>
                <Image src={logo} alt="YIGIM" className={styles["footer-logo"]} />
                
                <div className={styles["footer-links"]}>
                    <FooterColumn label={t('AreaNavigations.Products.Label')} links={products}/>
                    <FooterColumn label={t('AreaNavigations.Company.Label')} links={company}/>
                    <FooterColumn label={t('AreaNavigations.Resources.Label')} links={resources}/>
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
                    <Link href={PAGE_SECURITY}>{t('AreaStaticNavigation.LabelSecurity')}</Link>
                    <Link href={PAGE_POLICIY}>{t('AreaStaticNavigation.LabelPolicy')}</Link>
                    <Link href={PAGE_TERMS_CONDITION}>{t('AreaStaticNavigation.LabelTerms')}</Link>
                </div>
                <div className={styles["back-to-top"]} onClick={scrollToTop}>
                    {t('AreaStaticNavigation.LabelBackToTop')} ↑
                </div>
            </div>
        </div>
    </footer>
    )
}