import React, { Suspense, useState } from "react";
import styles from "./products.module.css";
import { getAbsolutePath } from "@/app/utils/absolute-path.utils";
import { useTranslations } from "next-intl";
import { I18N_HOME_PAGE } from "@/app/constants/i18n.constants";

interface IProduct {
    name: string;
    videoPath: string;
}

export default function ProductsAndServices() {
    const [activeProduct, setActiveProduct] = useState<number>(0);
    const t = useTranslations(`${I18N_HOME_PAGE}.AreaWhatWeDo`);

    const products: IProduct[] = [
        {
            name: t('Products.Product1.Name'),
            videoPath: getAbsolutePath('internet-acquiring-ecom-solution.mp4'),
        },
        {
            name: t('Products.Product2.Name'),
            videoPath: getAbsolutePath('all-in-onefuturistic-neon-ribbon.mp4'),
        },
        {
            name: t('Products.Product3.Name'),
            videoPath: getAbsolutePath('link-payment-3-things.mp4'),
        },
        {
            name: t('Products.Product4.Name'),
            videoPath: getAbsolutePath('fast-invoice-smartphone-invoice.mp4'),
        },
    ];

    const handleClick = (index: number) => {
        if (index === activeProduct) {
            return;
        }
        setActiveProduct(index);
    }

    return (
        <div className={styles["section"]}>
            <div className={styles["section-header"]}>
                <div className={styles["header-label"]}>
                {t('Label')}
                </div>

                <div className={styles["header-title"]}>
                {t('SubLabel')}
                </div>
            </div>

            <div className={styles["content"]}>
                <div className={styles["products"]}>
                    {
                        products.map((product, index) => (
                            <div key={index} className={`${styles["product-item"]} ${index === activeProduct ? styles["active"] : ""}`}
                                onClick={() => handleClick(index)}>
                                <div className={styles["product-title"]}>{product.name}</div>
                                <div className={styles["product-video"]}>
                                    <Suspense fallback={<p>Loading video...</p>}>
                                        <video className={styles.video} loop autoPlay muted>
                                        <source src={product.videoPath} type="video/mp4" />
                                        Your browser does not support the video tag.
                                        </video>
                                    </Suspense>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};