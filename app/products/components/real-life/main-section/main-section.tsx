'use client';

import styles from './main-section.module.css';
import { RealLifeCard, RealLifeCardProps } from '../real-life-card/real-life-card';

export interface RealLifeProps {
    productName: string;
    video: string;
    videoTitle: string;
    cases: RealLifeCardProps[];
}

export default function RealLifeCases({props}: {props: RealLifeProps}) {
  return (
    <section className={styles.section}>
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.subtitle}>{props.productName}</div>
                <h2 className={styles.title}>Real-Life Example</h2>
            </div>

            <div className={styles["video-container"]}>
                <video className={styles.video} loop autoPlay>
                    <source src={props.video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <h2 className={styles["video-title"]}>{props.videoTitle}</h2>
            </div>

            <div className={styles.cards}>
                {
                    props.cases.map(item => (
                        <RealLifeCard icon={item.icon}>
                            {item.children}
                        </RealLifeCard>
                    ))
                }
            </div>
        </div>
    </section>
  );
}
