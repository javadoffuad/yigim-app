import styles from './product-info.module.css';

export interface ProductInfoProps {
    title: string;
    description: string;
}

export default function ProductInfo({info}: {info: ProductInfoProps}) {
    return (
        <section className={styles.frame}>
            <h1 className={styles.heading}>
                {info.title}
            </h1>

            <p className={styles.description}>
                {info.description}
            </p>
        </section>
    )
}