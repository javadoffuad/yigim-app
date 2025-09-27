'use client';

import React, { JSX, useState } from "react";
import Image from "next/image";
import userIcon from '@/public/icons/user.svg';
import phoneIcon from '@/public/icons/phone.svg';
import closeIcon from '@/public/icons/close.svg';
import "./request-callback-form.css";
import Input from "../ui/input/input";

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
            <Input icon={userIcon} label="Full Name" value={fullName} onChange={setFullName} />

            <Input icon={phoneIcon} label="Phone number" value={phoneNumber} onChange={setPhoneNumber} />
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