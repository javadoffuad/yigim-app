'use client';

import React, { JSX, useState } from "react";
import Image from "next/image";
import phoneCallingIcon from '@/public/icons/phone-calling.svg';
import chatIcon from '@/public/icons/chat.svg';
import letterIcon from '@/public/icons/letter-white.svg';
import whatsappIcon from '@/public/icons/whatsapp.svg';
import smartphoneIcon from '@/public/icons/smartphone-white.svg';
import { RequestCallbackForm } from "../request-callback-form/request-callback-form";
import { NotifyMessage, NotifyType } from "../notify-message/notify-message";
import styles from "./request-callback.module.css";

export const RequestCallback = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatIsOpen, setChatIsOpen] = useState(false);
  const [notifyType, setNotifyType] = useState<NotifyType | null>(null);

  const handleSubmit = (fullName: string, phoneNumber: string) => {
    console.log("Form submitted:", { fullName, phoneNumber });
    setNotifyType(NotifyType.ERROR);
  };

  const toggleCallbackModal = () => {
    setIsOpen(!isOpen);
    setNotifyType(null);
  };

  const toggleChatDropdown = () => {
    console.log('toggleChatDropdown', chatIsOpen);
    
    setChatIsOpen(!chatIsOpen);
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
        <button className={`${styles["contact-button"]} ${styles["contact-button-phone"]}`} onClick={toggleCallbackModal}>
          <Image src={phoneCallingIcon} alt="" />
        </button>
        <button className={`${styles["contact-button"]} ${styles["contact-button-chat"]}`} onClick={toggleChatDropdown}>
          <Image src={chatIcon} alt="" />
        </button>
        <div className={`${styles["chat-dropdown"] } ${chatIsOpen ? styles.open : ''}`} onClick={toggleChatDropdown}>
          <button className={`${styles["contact-button"]} ${styles["contact-button-phone"]}`}>
            <Image src={smartphoneIcon} alt="" />
          </button>
          <button className={`${styles["contact-button"]} ${styles["contact-button-wp"]}`}>
            <Image src={whatsappIcon} alt="" />
          </button>
          <button className={`${styles["contact-button"]} ${styles["contact-button-email"]}`}>
            <Image src={letterIcon} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};