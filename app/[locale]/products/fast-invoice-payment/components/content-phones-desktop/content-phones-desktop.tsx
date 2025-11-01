import React from 'react';
import styles from './content-phones-desktop.module.css';
import Tooltip from '@/app/components/ui/tooltip/tooltip';
import Image, { StaticImageData } from 'next/image';

const ContentPhonesDesktop = ({phones}: {phones: {tooltip: string, icon: StaticImageData}[]}) => {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {
          phones.map((phone, index) => (
            <div key={index} className={styles.card}>
              <Tooltip text={phone.tooltip} />
              <Image src={phone.icon} alt="" />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ContentPhonesDesktop;