'use client';

import React, { JSX } from "react";
import Image from "next/image";
import successIcon from '@/public/icons/check.svg';
import errorIcon from '@/public/icons/error.svg';
import styles from "./notify-message.module.css";
import { useTranslations } from "next-intl";

export enum NotifyType {
  SUCCESS,
  ERROR
}

export interface NotifyMessageProps {
  handleClose: () => void;
  type: NotifyType,
}

export const NotifyMessage = (props: NotifyMessageProps): JSX.Element => {
  const t = useTranslations(`NotifySuccess`);
  const isError = props.type === NotifyType.ERROR;
  const label = isError ? t('LabelError') : t('LabelSuccess');
  const subLabel = isError ? t.raw('SubLabelError') : t.raw('SubLabelSuccess');
  return (
    <div className={styles["request-callback-card"]}>
      <div className={styles["card-content"]}>
        <div className={`${styles["icon"]} ${isError ? styles["icon-error"] : styles["icon-success"]}`}>
          <Image src={isError ? errorIcon : successIcon} alt="" />
        </div>

        <div className={styles["header-section"]}>
          <div className={styles.subtitle}>{label}</div>
          <h1 className={styles.title} dangerouslySetInnerHTML={{__html: subLabel}} />
        </div>

        <button type="submit" className={`button ${styles['button-close']}`} onClick={props.handleClose}>
          {t('ButtonClose.Label')}
        </button>
      </div>
    </div>
  );
};