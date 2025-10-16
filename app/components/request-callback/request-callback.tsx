'use client';

import React, { JSX, useEffect, useRef, useState } from "react";
import { RequestCallbackForm } from "../request-callback-form/request-callback-form";
import { NotifyMessage, NotifyType } from "../notify-message/notify-message";
import styles from "./request-callback.module.css";
import Link from "next/link";
import { EMAIL, PHONE, WHATSAPP_URL } from "@/app/constants/contact.constants";

export const RequestCallback = (
  {outerIsOpen, setOuterIsOpen}: {outerIsOpen?: boolean, setOuterIsOpen?: () => void}
): JSX.Element => {
  const [isOpen, setIsOpen] = useState(outerIsOpen ?? false);
  const [chatIsOpen, setChatIsOpen] = useState(false);
  const [notifyType, setNotifyType] = useState<NotifyType | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef?.current && !dropdownRef.current.contains(event.target)) {
        setChatIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSubmit = (fullName: string, phoneNumber: string) => {
    setNotifyType(NotifyType.ERROR);
  };

  const toggleCallbackModal = () => {
    if (setOuterIsOpen) {
      setOuterIsOpen();
    } else {
      setIsOpen(!isOpen);
    }
    setNotifyType(null);
  };

  const toggleChatDropdown = () => {
    setChatIsOpen(!chatIsOpen);
  };

  const modalIsOpen = outerIsOpen ?? isOpen;

  return (
    <>
      {
        modalIsOpen ?
        <div className={styles.modal}>
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
        : null
      }

      <div className={styles["quick-contact"]}>
        <button className={`${styles["contact-button"]} ${styles["contact-button-phone"]}`} onClick={toggleCallbackModal}>
        </button>

        <div ref={dropdownRef} className={styles["chat-dropdown-container"]}>
          <button className={`${styles["contact-button"]} ${styles["contact-button-chat"]} ${chatIsOpen ? styles.open : ''}`} onClick={toggleChatDropdown}>
          </button>
          {
            chatIsOpen
            ?
            <div  className={`${styles["chat-dropdown"] }`} onClick={toggleChatDropdown}>
              <Link href={`tel:${PHONE}`} className={`${styles["contact-button"]} ${styles["button-phone"]}`} />
              <Link href={WHATSAPP_URL} className={`${styles["contact-button"]} ${styles["button-wp"]}`} />
              <Link href={`mailto:${EMAIL}`} className={`${styles["contact-button"]} ${styles["button-email"]}`} />
            </div>
            : null
          }
        </div>
      </div>
    </>
  );
};