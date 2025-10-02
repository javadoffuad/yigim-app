import styles from './footer-column.module.css';
import {Link} from '@/i18n/navigation';

interface Props {
    label: string;
    links: {
        text: string;
        url: string;
    }[];
}

export default function FooterColumn({label, links}: Props) {
    return (
        <div className={styles["footer-column"]}>
            <h3 className={styles["footer-heading"]}>{label}</h3>
            <ul className={styles["footer-list"]}>
                {links.map((link, index) => 
                    <Link key={index} href={link.url} className={styles["footer-link"]}>{link.text}</Link>
                )}
            </ul>
        </div>
    )
}