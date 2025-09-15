'use client';

import Image from 'next/image';
import styles from './faq-item.module.css';
import plusIcon from '@/public/icons/plus.svg';
import minusIcon from '@/public/icons/minus.svg';

interface Faq {
  question: string;
  answer: string;
}

export default function FaqItem({item, isOpen, handleClick}: {item: Faq, isOpen: boolean, handleClick: (item: Faq) => void}) {
    return (
      <div className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}>
        <button className={styles.faqQuestion} onClick={() => handleClick(item)}>
            {item.question}
            {
              isOpen
              ? <Image src={minusIcon} className={styles.faqIcon} alt=''/>
              : <Image src={plusIcon} className={styles.faqIcon} alt=''/> 
            }
        </button>
        <div className={styles.faqAnswer}>
          <div className={styles.aswerInner}>
            <p>{item.answer}</p>
          </div>
        </div>
      </div>
    )
}