'use client';

import Image, { StaticImageData } from 'next/image';
import styles from './main-section.module.css';
import SectionTitle from '@/app/components/section-title/section-title';

export interface ContentImageProps {
    title: string;
    label: string;
    description: string;
    image: StaticImageData;
}

export default function ContentImage({content, align = 'right'}: {content: ContentImageProps, align?: 'left' | 'right'}) {
  return (
    <div className={styles["container"]}>
      <section className={styles["section"]}>
        <div className={`${styles["content-wrapper"]} ${align === 'left' ? styles["reverse"] : ''}`}>
          <div className={styles["text-content"]}>
            <SectionTitle
              textAlign='left'
              title={content.label}
              description={content.title} />
            
            <p className={styles["description"]}>
              {content.description}
            </p>
          </div>
          
          <div className={styles["image-content"]}>
            <Image
              src={content.image}
              alt={content.title}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
