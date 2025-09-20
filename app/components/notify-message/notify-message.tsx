'use client';

import React, { JSX } from "react";
import Image from "next/image";
import checkIcon from '@/public/icons/check.svg';
import errorIcon from '@/public/icons/error.svg';
import styles from "./notify-message.module.css";

export enum NotifyType {
  SUCCESS,
  ERROR
}

export interface NotifyMessageProps {
  handleClose: () => void;
  type: NotifyType,
}

export const NotifyMessage = (props: NotifyMessageProps): JSX.Element => {
  const isError = props.type === NotifyType.ERROR;
  return (
    <div className={styles["request-callback-card"]}>
      <div className={styles["card-content"]}>
        <div className={`${styles["icon"]} ${isError ? styles["icon-error"] : styles["icon-success"]}`}>
          <Image src={isError ? errorIcon : checkIcon} alt="" />
        </div>

        <div className={styles["header-section"]}>
          <div className={styles.subtitle}>Thank you</div>
          <h1 className={styles.title}>
            Your request has been registered.
          </h1>
        </div>

        <button type="submit" className={`button ${styles['button-close']}`} onClick={props.handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};