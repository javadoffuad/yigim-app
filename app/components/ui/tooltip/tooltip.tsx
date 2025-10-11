'use client';

import styles from "./tooltip.module.css";

interface TooltipProps {
    text: string;
}

export default function Tooltip({text}: TooltipProps) {
    return (
        <div className={styles.tooltip}>
            <span className={styles.text} dangerouslySetInnerHTML={{__html: text}} />
        </div>
    );
}