'use client';

import React, { JSX } from "react";
import Image from "next/image";
import userIcon from '@/public/icons/user.svg';
import phoneIcon from '@/public/icons/phone.svg';
import closeIcon from '@/public/icons/close.svg';
import "./request-callback-form.css";
import Input from "../ui/input/input";
import { useForm, SubmitHandler } from "react-hook-form"

type FormData = {
  fullName: string
  phoneNumber: string
}

export interface RequestCallbackFormProps {
  handleSubmit: (fullname: string, phoneNumber: string) => void;
  handleClose: () => void;
}

export const RequestCallbackForm = (props: RequestCallbackFormProps): JSX.Element => {
  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors, isSubmitting },
    trigger,
    setValue,
    watch
  } = useForm<FormData>({
    mode: "onChange", // валидация при изменении
    reValidateMode: "onChange", // повторная валидация при изменении
    defaultValues: {
      fullName: "",
      phoneNumber: ""
    },
    resolver: async (data) => {
      const errors: Record<string, { type: string; message: string }> = {};

      // Валидация Full Name
      if (!data.fullName.trim()) {
        errors.fullName = {
          type: "required",
          message: "Full name is required"
        };
      } else if (data.fullName.length < 2) {
        errors.fullName = {
          type: "minLength",
          message: "Full name must be at least 2 characters"
        };
      }

      // Валидация Phone Number
      if (!data.phoneNumber.trim()) {
        errors.phoneNumber = {
          type: "required",
          message: "Phone number is required"
        };
      } else if (!/^[\+]?[0-9\s\-\(\)]{10,}$/.test(data.phoneNumber)) {
        errors.phoneNumber = {
          type: "pattern",
          message: "Please enter a valid phone number"
        };
      }

      return {
        values: Object.keys(errors).length === 0 ? data : {},
        errors
      };
    }
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    props.handleSubmit(data.fullName, data.phoneNumber);
  };

  // Функция для обработки потери фокуса
  const handleBlur = (fieldName: keyof FormData) => {
    trigger(fieldName);
  };

  // Функция для обработки изменения значения
  const handleChange = (fieldName: keyof FormData, value: string) => {
    setValue(fieldName, value, { 
      shouldValidate: true, // валидация при изменении
      shouldDirty: true 
    });
  };

  // Получаем текущие значения для передачи в Input компоненты
  const formValues = watch();

  return (
    <div className="request-callback-card">
      <div className="card-content">
        <div className="header-section">
          <div className="subtitle">REQUEST CALLBACK</div>
          <h1 className="title">
            Book a call and we will answer your questions in detail.
          </h1>
        </div>

        <form className="form-section" onSubmit={hookFormSubmit(onSubmit)} noValidate>
          <div className="input-group">
            <Input
              icon={userIcon}
              label="Full Name"
              required
              value={formValues.fullName} 
              error={errors.fullName?.message ?? ''}
              onChange={(value) => handleChange('fullName', value)}
              onBlur={() => handleBlur('fullName')} />

            <Input
              icon={phoneIcon}
              label="Phone number"
              required
              value={formValues.phoneNumber}
              error={errors.phoneNumber?.message ?? ''}
              onChange={(value) => handleChange('phoneNumber', value)}
              onBlur={() => handleBlur('fullName')} />
          </div>

          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Call me"}
          </button>
        </form>

        <button className="close-button" onClick={props.handleClose}>
          <Image src={closeIcon} className="close-icon" alt="" />
        </button>
      </div>
    </div>
  );
};