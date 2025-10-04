'use client';

import styles from './main-section.module.css';
import { RealLifeCard, RealLifeCardProps } from '../real-life-card/real-life-card';
import { getAbsolutePath } from '@/app/utils/absolute-path.utils';
import SectionTitle from '@/app/components/section-title/section-title';

export interface RealLifeProps {
    productName: string;
    video: string;
    videoTitle: string;
    cases: RealLifeCardProps[];
}

export default function RealLifeCases({props}: {props: RealLifeProps}) {
    const videoPath = getAbsolutePath(props.video);
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <SectionTitle
                    title={props.productName}
                    description="Real-Life Example" />

                <div className={styles["video-container"]}>
                    <video className={styles.video} loop autoPlay muted>
                        <source src={videoPath} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h2 className={styles["video-title"]}>{props.videoTitle}</h2>
                </div>

                <div className={styles.cards}>
                    {
                        props.cases.map((item, index) => (
                            <RealLifeCard key={index} icon={item.icon}>
                                {item.children}
                            </RealLifeCard>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}
