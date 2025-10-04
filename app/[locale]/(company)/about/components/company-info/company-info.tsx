import styles from './company-info.module.css';

export interface CompanyInfoProps {
    title: string;
    description: string;
}

export default function CompanyInfo(info: CompanyInfoProps) {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>
                {info.title}
            </h2>

            <div className={styles.description} dangerouslySetInnerHTML={{__html: info.description}} />
        </section>
    )
}