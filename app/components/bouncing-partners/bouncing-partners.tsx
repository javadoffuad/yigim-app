'use client';

import React, { useRef, useEffect, useState } from 'react';
import styles from './bouncing-partners.module.css';
import Link from 'next/link';
import { PAGE_COMPANY_PARTNERS } from '@/app/constants/navigation.constants';
import { partners } from '@/app/constants/partners.constants';

const ballRadius = 30;
const gravity = 0.25;
const damping = .9;
const maxIconWidth = 42;

interface Ball {
  x: number;
  y: number;
  vx: number;
  vy: number;
  image: HTMLImageElement;
  isDragging: boolean;
  color: string;
}

export function BouncingParameters() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ballsRef = useRef<Ball[]>([]);
  const animationFrameId = useRef<number>(0);
  const [isInitialized, setIsInitialized] = useState(false);
  const dragInfo = useRef<{ball: Ball | null, offsetX: number, offsetY: number}>({ ball: null, offsetX: 0, offsetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = parent.offsetWidth * dpr;
    canvas.height = parent.offsetHeight * dpr;
    ctx.scale(dpr, dpr);
    canvas.style.width = `${parent.offsetWidth}px`;
    canvas.style.height = `${parent.offsetHeight}px`;

    const canvasHeight = canvas.height / dpr;
    const canvasWidth = canvas.width / dpr;

    let loadedCount = 0;
    const tempBalls: Ball[] = [];

    partners.forEach((partner) => {
      const image = new Image();
      image.src = partner.logo.src;
      
      image.onload = () => {
        tempBalls.push({
          x: canvasWidth / 2 + (Math.random() - 0.5) * (canvasWidth / 3),
          y: canvasHeight - ballRadius - (Math.random() * (ballRadius * 5)),
          vx: 0,
          vy: 0,
          image,
          isDragging: false,
          color: partner.color,
        });
        loadedCount++;
        
        if (loadedCount === partners.length) {
          ballsRef.current = tempBalls;
          setIsInitialized(true);
        }
      };
    });

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInitialized) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const canvasWidth = canvas.width / dpr;
    const canvasHeight = canvas.height / dpr;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const balls = ballsRef.current;

      balls.forEach(ball => {
        if (!ball.isDragging) {
          ball.vy += gravity;
          ball.x += ball.vx;
          ball.y += ball.vy;

          if (ball.x + ballRadius > canvasWidth) {
            ball.x = canvasWidth - ballRadius;
            ball.vx *= -damping;
          } else if (ball.x - ballRadius < 0) {
            ball.x = ballRadius;
            ball.vx *= -damping;
          }

          if (ball.y + ballRadius > canvasHeight) {
            ball.y = canvasHeight - ballRadius;
            ball.vy *= -damping;
            ball.vx *= 0.99;
          }
        }
      });
      
      // Ball collision
      for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
            const ball1 = balls[i];
            const ball2 = balls[j];
            const dx = ball2.x - ball1.x;
            const dy = ball2.y - ball1.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < ballRadius * 2) {
               const angle = Math.atan2(dy, dx);
                const sin = Math.sin(angle);
                const cos = Math.cos(angle);

                // Rotate ball1's velocity
                const vel0 = { x: ball1.vx * cos + ball1.vy * sin, y: ball1.vy * cos - ball1.vx * sin };
                // Rotate ball2's velocity
                const vel1 = { x: ball2.vx * cos + ball2.vy * sin, y: ball2.vy * cos - ball2.vx * sin };
                
                // Collision reaction
                const vxTotal = vel0.x - vel1.x;
                vel0.x = ((ballRadius - ballRadius) * vel0.x + 2 * ballRadius * vel1.x) / (ballRadius + ballRadius);
                vel1.x = vxTotal + vel0.x;

                 // Update position to avoid overlap
                const overlap = (ballRadius * 2) - distance;
                const halfOverlap = overlap / 2;
                
                ball1.x -= halfOverlap * cos;
                ball1.y -= halfOverlap * sin;
                ball2.x += halfOverlap * cos;
                ball2.y += halfOverlap * sin;

                // Rotate velocities back
                const vel0F = { x: vel0.x * cos - vel0.y * sin, y: vel0.y * cos + vel0.x * sin };
                const vel1F = { x: vel1.x * cos - vel1.y * sin, y: vel1.y * cos + vel1.x * sin };

                ball1.vx = vel0F.x * damping;
                ball1.vy = vel0F.y * damping;
                ball2.vx = vel1F.x * damping;
                ball2.vy = vel1F.y * damping;
            }
        }
      }


      balls.forEach(ball => {               
        // Рисуем круг
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = ball.color; // Цвет каждого бренда
        ctx.fill();
        
        // Сохраняем состояние контекста
        ctx.save();
        
        // Создаем обтравочную область в форме круга
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ballRadius, 0, Math.PI * 2);
        ctx.clip();

        // Автоматически вычисляем размеры иконки с сохранением пропорций
        const aspectRatio = ball.image.width / ball.image.height;
        let drawWidth = maxIconWidth;
        let drawHeight = maxIconWidth / aspectRatio;
        
        // Если высота больше ширины, ограничиваем по высоте
        if (aspectRatio < 1) {
          drawHeight = maxIconWidth;
          drawWidth = maxIconWidth * aspectRatio;
        }
        
        // Вычисляем позицию для изображения (по центру)
        const imageX = ball.x - drawWidth / 2;
        const imageY = ball.y - drawHeight / 2;
        
        // Рисуем изображение
        ctx.drawImage(ball.image, imageX, imageY, drawWidth, drawHeight);
        
        // Восстанавливаем состояние контекста
        ctx.restore();
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isInitialized]);

  const handleMouseDown = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    let ballToDrag: Ball | null = null;
    let minDistance = Infinity;

    // Find the topmost ball to drag by iterating backwards
    for (let i = ballsRef.current.length - 1; i >= 0; i--) {
        const ball = ballsRef.current[i];
        const dx = mouseX - ball.x;
        const dy = mouseY - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < ballRadius) {
            ballToDrag = ball;
            break; // Found the topmost, break the loop
        }
    }

    if (ballToDrag) {
      ballToDrag.isDragging = true;
      ballToDrag.vx = 0;
      ballToDrag.vy = 0;
      dragInfo.current = {
        ball: ballToDrag,
        offsetX: mouseX - ballToDrag.x,
        offsetY: mouseY - ballToDrag.y
      };
    }
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const { ball } = dragInfo.current;
    if (!ball || !ball.isDragging) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const dpr = window.devicePixelRatio || 1;
    const canvasWidth = canvas.width / dpr;
    const canvasHeight = canvas.height / dpr;
    
    const newX = mouseX - dragInfo.current.offsetX;
    const newY = mouseY - dragInfo.current.offsetY;

    // Record previous position to calculate velocity
    const prevX = ball.x;
    const prevY = ball.y;

    ball.x = Math.max(ballRadius, Math.min(canvasWidth - ballRadius, newX));
    ball.y = Math.max(ballRadius, Math.min(canvasHeight - ballRadius, newY));

    // Update velocity based on mouse movement
    ball.vx = (ball.x - prevX);
    ball.vy = (ball.y - prevY);
  };

  const handleMouseUp = () => {
    const { ball } = dragInfo.current;
    if (ball && ball.isDragging) {
      ball.isDragging = false;
    }
    dragInfo.current.ball = null;
  };

  const handleMouseLeave = () => {
    handleMouseUp();
  };

  const handleClick = () => {
    console.log('handleClick');
  };

  return (
    <section className={styles["section"]}>
      <div className={styles["title-wrapper"]}>
        <p className={styles.subtitle}>Who loves us</p>
        <h3 className={styles.title}>
          Together with our partners we offer<br />
          the most reliable service...
        </h3>
        <div className={styles.buttons}>
          <Link href={PAGE_COMPANY_PARTNERS} className="button button-primary">Our Partners</Link>
          <button className="button button-tertiary" onClick={handleClick}>Request a Call</button>
        </div>
      </div>
      <div className={styles["bouncing-container"]}>
        <div className={`${styles["w-full"]} ${styles["h-full"]}`}>
          <canvas
            ref={canvasRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className={`${styles["w-full"]} ${styles["h-full"]}`}
          />
        </div>
      </div>
    </section>
  );
}
