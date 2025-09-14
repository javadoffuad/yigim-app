'use client';

import React, { JSX, useState } from "react";
import Image from "next/image";
import "./request-callback.css";
import userIcon from '@/public/icons/user.svg';
import phoneIcon from '@/public/icons/phone.svg';
import closeIcon from '@/public/icons/close.svg';
import phoneCallingIcon from '@/public/icons/phone-calling.svg';
import chatIcon from '@/public/icons/chat.svg';

export const RequestCallback = (): JSX.Element => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { fullName, phoneNumber });
  };

  const toggleCallbackModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`request-callback-modal ${isOpen ? 'open' : ''} `}>
        <div className="request-callback-card">
          <div className="card-content">
            <div className="header-section">
              <div className="subtitle">REQUEST CALLBACK</div>
              <h1 className="title">
                Book a call and we will answer your questions in detail.
              </h1>
            </div>

            <form className="form-section" onSubmit={handleSubmit}>
              <div className="input-group">
                <div className="input-container">
                  <div className="input-wrapper">
                    <Image src={userIcon} className="input-icon" alt="" />
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="input-container">
                  <div className="input-wrapper">
                    <Image src={phoneIcon} className="input-icon" alt="" />
                    <input
                      type="tel"
                      className="input-field"
                      placeholder="Phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <button type="submit" className="submit-button">
                Call me
              </button>
            </form>

            <button className="close-button" onClick={toggleCallbackModal}>
              <Image src={closeIcon} className="close-icon" alt="" />
            </button>
          </div>
        </div>
        <div className="backdrop" onClick={toggleCallbackModal}></div>
      </div>

      <div className="quick-contact">
        <button className="quick-contact-button">
          <Image src={phoneCallingIcon} alt="" onClick={toggleCallbackModal} />
        </button>
        <button className="quick-contact-button">
          <Image src={chatIcon} alt="" />
        </button>
      </div>
    </>
  );
};