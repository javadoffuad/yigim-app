import { useState, useEffect } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

export const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    // Проверяем, что код выполняется на клиенте
    if (typeof window === 'undefined') {
      return;
    }

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Устанавливаем обработчик события
    window.addEventListener('resize', handleResize);
    
    // Вызываем сразу для получения начальных размеров
    handleResize();

    // Убираем обработчик при размонтировании
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};