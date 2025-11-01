import React, { useState, useEffect, useCallback } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './content-phones-mobile.module.css';
import Tooltip from '@/app/components/ui/tooltip/tooltip';

const ContentPhonesMobile = ({ phones }: { phones: { tooltip: string, icon: StaticImageData }[] }) => {
  const [cards, setCards] = useState(phones);
  const [animating, setAnimating] = useState(false);

  const nextCard = useCallback(() => {
    if (animating) return;

    setAnimating(true);

    // После завершения анимации обновляем состояние
    setTimeout(() => {
      setCards(prevCards => {
        const newCards = [...prevCards.slice(1), prevCards[0]];
        return newCards;
      });
      setAnimating(false);
    }, 800);
  }, [animating]);

  // Автоматическая прокрутка
  useEffect(() => {
    if (animating) return;

    const interval = setInterval(() => {
      nextCard();
    }, 5000);

    return () => clearInterval(interval);
  }, [animating, nextCard]);

  return (
    <div className={styles["carousel-container"]}>
      <div
        className={styles["carousel"]}
      >
        {cards.map((card, index) => (
          <div
            key={`${card.tooltip}-${index}`}
            className={`
              ${styles["card"]} 
              ${animating && index === 0 ? styles['slide-out'] : ''}
              ${animating && (index > 0) ? styles['slide-' + index] : ''}
              ${animating && (index === cards.length - 1) ? styles['slide-in'] : ''}
            `}
          >
            <Tooltip className={styles["tooltip"]} text={card.tooltip} />
            <Image className={styles.image} src={card.icon} alt={card.tooltip} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentPhonesMobile;