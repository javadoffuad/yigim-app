'use client';

import Image from 'next/image';
import styles from './built-for-trust.module.css';
import eyEntrepreneurIcon from '@/public/icons/ey-entrepreneur-of-the-year.png';
import { useTranslations } from 'next-intl';
import { I18N_HOME_PAGE } from '@/app/constants/i18n.constants';

export default function BuiltForTrust() {
    const t = useTranslations(`${I18N_HOME_PAGE}.AreaBuiltForTrust`);
    return (
        <section className={styles["section"]}>
            <div className={styles["content"]}>
                <h3 className={styles["section-title"]} dangerouslySetInnerHTML={{__html: t.raw('Label')}} />
                <div className={`${styles["card"]} ${styles["card-1"]}`}>
                    <div className={styles["card-title"]}>{t('Card1.Label')}</div>
                    <div className={styles["card-footer"]}>
                        <p className={styles["card-brand"]}>{t('Card1.Brand')}</p>
                        <p className={styles["card-text"]}>{t('Card1.SubLabel')}</p>
                    </div>
                </div>
                <div className={`${styles["card"]} ${styles["card-2"]}`}>
                    <div className={styles["card-title"]}>{t('Card2.Label')}</div>
                    <div className={styles["card-footer"]}>
                        <p className={styles["card-text"]}>{t('Card2.SubLabel')}</p>
                    </div>
                </div>
                <div className={`${styles["card"]} ${styles["card-3"]}`}>
                    <div className={styles["card-title"]} dangerouslySetInnerHTML={{__html: t.raw('Card3.Label')}} />
                    <div className={styles["card-footer"]}>
                        <p className={styles["card-brand"]}>{t('Card3.Brand')}</p>
                        <p className={styles["card-text"]}>{t('Card3.SubLabel')}</p>
                    </div>
                </div>
                <div className={`${styles["card"]} ${styles["card-4"]}`}>
                    <div className={styles["card-title"]}>{t('Card4.Label')}</div>
                    <div className={styles["card-footer"]}>
                        <p className={styles["card-text"]}>{t('Card4.SubLabel')}</p>
                    </div>
                </div>
                <div className={`${styles["card"]} ${styles["card-5"]}`}>
                    <div className={styles["card-title"]}>{t('Card5.Label')}</div>
                    <div className={styles["card-footer"]}>
                        <Image src={eyEntrepreneurIcon} alt='' />
                    </div>
                </div>
            </div>
        </section>
    )
}