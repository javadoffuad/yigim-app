'use client';

import Image, { StaticImageData } from 'next/image';
import styles from './main-section.module.css';
import SectionTitle from '@/app/components/section-title/section-title';
import { CSSProperties } from 'react';

export interface ContentImageProps {
  title: string;
  label: string;
  description: string;
  content: {
    image?: StaticImageData;
    imageStyles?: CSSProperties;
    contentHTML?: React.ReactNode;
  }
}

type Align = 'left' | 'right' | 'full';

export default function ContentImage({ content, align = 'right', children }: { content: ContentImageProps, align?: Align, children?: React.ReactNode }) {
  const contentAlign = align === 'left' ? styles['align-left'] : align === 'full' ? styles['align-full'] : '';
  return (
    <div className={styles["container"]}>
      <section className={`${styles["section"]} ${contentAlign}`}>
        <div className={styles["content-wrapper"]}>
          <div className={styles["text-content"]}>
            <SectionTitle
              textAlign='left'
              title={content.label}
              description={content.title} />

            <p className={styles["description"]}>
              {content.description}
            </p>

            {
              children ? <div>{children}</div> : null
            }            
          </div>

          <div className={styles["image-content"]}>

            {
              content.content.image
              ?
                <Image
                  style={content.content.imageStyles}
                  src={content.content.image}
                  alt={content.title}
                />
              : content.content.contentHTML
            }
            
          </div>
        </div>
      </section>
    </div>
  );
}
