'use client';

import React, { JSX, useState } from "react";
import Image from "next/image";
import userIcon from '@/public/icons/user.svg';
import phoneIcon from '@/public/icons/phone.svg';
import closeIcon from '@/public/icons/close.svg';
import "./request-callback-form.css";

export interface RequestCallbackFormProps {
  handleSubmit: (fullname: string, phoneNumber: string) => void;
  handleClose: () => void;
}

export const RequestCallbackForm = (props: RequestCallbackFormProps): JSX.Element => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.handleSubmit(fullName, phoneNumber);
  };

  return (
    <div className="request-callback-card">
      <div className="card-content">
        <div className="header-section">
          <div className="subtitle">REQUEST CALLBACK</div>
          <h1 className="title">
            Book a call and we will answer your questions in detail.
          </h1>
        </div>

        <div className="form-section">
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

          <button type="submit" className="submit-button" onClick={handleSubmit}>
            Call me
          </button>
        </div>

        <button className="close-button" onClick={props.handleClose}>
          <Image src={closeIcon} className="close-icon" alt="" />
        </button>
      </div>
    </div>
  );
};