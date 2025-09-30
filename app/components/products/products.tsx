import React, { Suspense, useState } from "react";
import styles from "./products.module.css";
import { getAbsolutePath } from "@/app/utils/absolute-path.utils";

interface IProduct {
    name: string;
    videoPath: string;
}

const products: IProduct[] = [
    {
        name: 'Internet - Acquiring / E-Comm Solution',
        videoPath: getAbsolutePath('internet-acquiring-ecom-solution.mp4'),
    },
    {
        name: 'All-In-One Aggregator Service',
        videoPath: getAbsolutePath('all-in-onefuturistic-neon-ribbon.mp4'),
    },
    {
        name: 'Link Payment +',
        videoPath: getAbsolutePath('link-payment-3-things.mp4'),
    },
    {
        name: 'Fast invoice',
        videoPath: getAbsolutePath('fast-invoice-smartphone-invoice.mp4'),
    },
];

export default function ProductsAndServices() {
    const [activeProduct, setActiveProduct] = useState<number>(0)

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
                what we do
                </div>

                <div className={styles["header-title"]}>
                Products & Services
                </div>
            </div>

            <div className={styles["content"]}>
                <div className={styles["products"]}>
                    {
                        products.map((product, index) => (
                            <div className={`${styles["product-item"]} ${index === activeProduct ? styles["active"] : ""}`}
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