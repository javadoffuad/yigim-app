import styles from './footer-column.module.css';
import Link from 'next/link';

interface Props {
    heading: string;
    links: {
        text: string;
        url: string;
    }[];
}

export default function FooterColumn({heading, links}: Props) {
    return (
        <div className={styles["footer-column"]}>
            <h3 className={styles["footer-heading"]}>{heading}</h3>
            <ul className={styles["footer-list"]}>
                {links.map((link, index) => 
                    <Link key={index} href={link.url} className={styles["footer-link"]}>{link.text}</Link>
                )}
            </ul>
        </div>
    )
}