import Image from 'next/image';
import styles from './footer.module.css';
import logo from '@/public/footer-logo.svg';
import fb from '@/public/social/fb-logo.svg';
import instagram from '@/public/social/instagram-logo.svg';
import linkedin from '@/public/social/linkedin-logo.svg';
import youtube from '@/public/social/youtube-logo.svg';

export default function Footer() {
    return (
        <footer className={styles["footer"]}>
        <div className={styles["footer-content"]}>
            <div className={styles["footer-top"]}>
                <Image src={logo} alt="YIGIM" className={styles["footer-logo"]} />
                
                <div className={styles["footer-links"]}>
                    <div className={styles["footer-column"]}>
                        <h3 className={styles["footer-heading"]}>PRODUCT</h3>
                        <ul className={styles["footer-list"]}>
                            <li><a href="#" className={`${styles["footer-link"]} ${styles["highlight"]}`}>All-In-One Aggregator Service</a></li>
                            <li><a href="#" className={styles["footer-link"]}>Internet - Acquiring /<br />E-Comm Solution</a></li>
                            <li><a href="#" className={styles["footer-link"]}>Link Payment +</a></li>
                            <li><a href="#" className={styles["footer-link"]}>Fast Invoice Payment</a></li>
                        </ul>
                    </div>
                    
                    <div className={styles["footer-column"]}>
                        <h3 className={styles["footer-heading"]}>COMPANY</h3>
                        <ul className={styles["footer-list"]}>
                            <li><a href="#" className={styles["footer-link"]}>About</a></li>
                            <li><a href="#" className={styles["footer-link"]}>News</a></li>
                            <li><a href="#" className={styles["footer-link"]}>Our partners</a></li>
                            <li><a href="#" className={styles["footer-link"]}>Contacts</a></li>
                        </ul>
                    </div>
                    
                    <div className={styles["footer-column"]}>
                        <h3 className={styles["footer-heading"]}>RESOURCES</h3>
                        <ul className={styles["footer-list"]}>
                            <li><a href="#" className={styles["footer-link"]}>API Documentation</a></li>
                            <li><a href="#" className={styles["footer-link"]}>Help Center</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className={styles["footer-social"]}>
                <div className={styles["social-item"]}>
                    <Image src={fb} alt="Facebook" />
                    <span>Facebook</span>
                </div>
                <div className={styles["social-item"]}>
                    <Image src={instagram} alt="Instagram" />
                    <span>Instagram</span>
                </div>
                <div className={styles["social-item"]}>
                    <Image src={linkedin} alt="LinkedIn" />
                    <span>Linkedin</span>
                </div>
                <div className={styles["social-item"]}>
                    <Image src={youtube} alt="YouTube" />
                    <span>Youtube</span>
                </div>
            </div>
            
            <div className={styles["footer-bottom"]}>
                <div className={styles["copyright"]}>© COPYRIGHT YIGIM 2025</div>
                <div className={styles["footer-legal"]}>
                    <a href="#">INFORMATION SECURITY</a>
                    <a href="#">COOKIE POLICY</a>
                    <a href="#">TERMS & CONDITION</a>
                </div>
                <div className={styles["back-to-top"]}>BACK ON THE TOP ↑</div>
            </div>
        </div>
    </footer>
    )
}