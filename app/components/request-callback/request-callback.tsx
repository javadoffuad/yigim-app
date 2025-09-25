'use client';

import React, { JSX, useState } from "react";
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
        </button>
        <button className={`${styles["contact-button"]} ${styles["contact-button-chat"]} ${chatIsOpen ? styles.open : ''}`} onClick={toggleChatDropdown}>
        </button>

        {
          chatIsOpen
          ?
          <div className={`${styles["chat-dropdown"] }`} onClick={toggleChatDropdown}>
            <button className={`${styles["contact-button"]} ${styles["button-phone"]}`}>
            </button>
            <button className={`${styles["contact-button"]} ${styles["button-wp"]}`}>
            </button>
            <button className={`${styles["contact-button"]} ${styles["button-email"]}`}>
            </button>
          </div>
          : null
        }
        
      </div>
    </>
  );
};