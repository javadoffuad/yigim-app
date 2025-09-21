'use client';

import React, { JSX, useState } from "react";
import Image from "next/image";
import phoneCallingIcon from '@/public/icons/phone-calling.svg';
import chatIcon from '@/public/icons/chat.svg';
import { RequestCallbackForm } from "../request-callback-form/request-callback-form";
import { NotifyMessage, NotifyType } from "../notify-message/notify-message";
import styles from "./request-callback.module.css";

export const RequestCallback = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifyType, setNotifyType] = useState<NotifyType | null>(null);

  const handleSubmit = (fullName: string, phoneNumber: string) => {
    console.log("Form submitted:", { fullName, phoneNumber });
    setNotifyType(NotifyType.ERROR);
  };

  const toggleCallbackModal = () => {
    setIsOpen(!isOpen);
    setNotifyType(null);
  };

  return (
    <>
      <div className={`${styles.modal} ${isOpen ? styles.open : ''}`}>
        
        {
          notifyType !== null
            ? <NotifyMessage
                type={notifyType}
                handleClose={toggleCallbackModal} />
            : <RequestCallbackForm
                handleClose={toggleCallbackModal}
                handleSubmit={handleSubmit} />
        }

        <div className={styles.backdrop} onClick={toggleCallbackModal}></div>
      </div>

      <div className={styles["quick-contact"]}>
        <button className={`${styles["contact-button"]} ${styles["contact-button-phone"]}`}>
          <Image src={phoneCallingIcon} alt="" onClick={toggleCallbackModal} />
        </button>
        <button className={`${styles["contact-button"]} ${styles["contact-button-chat"]}`}>
          <Image src={chatIcon} alt="" />
        </button>
      </div>
    </>
  );
};