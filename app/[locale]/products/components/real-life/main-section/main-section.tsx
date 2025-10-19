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
    sectionTitle: string;
}

export default function RealLifeCases({props}: {props: RealLifeProps}) {
    const videoPath = getAbsolutePath(props.video);
    const casesCount = props.cases.length - 1;
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <SectionTitle
                    title={props.productName}
                    description={props.sectionTitle} />

                <div className={styles["video-container"]}>
                    <video className={styles.video} loop autoPlay muted>
                        <source src={videoPath} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h2 className={styles["video-title"]} dangerouslySetInnerHTML={{__html: props.videoTitle}} />
                </div>

                <div className={styles.cards}>
                    {
                        props.cases.map((item, index) => (
                            <RealLifeCard key={index} icon={item.icon} showArrow={casesCount !== index}>
                                <span dangerouslySetInnerHTML={{__html: item.children}} />
                            </RealLifeCard>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}
