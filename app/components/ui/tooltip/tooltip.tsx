'use client';

import styles from "./tooltip.module.css";

interface TooltipProps {
    text: string;
    className?: string;
}

export default function Tooltip({text, className}: TooltipProps) {
    return (
        <div className={`${styles.tooltip} ${className ?? ''}`}>
            <span className={styles.text} dangerouslySetInnerHTML={{__html: text}} />
        </div>
    );
}