'use client';

import React, { JSX } from "react";
import Image from "next/image";
import userIcon from '@/public/icons/user.svg';
import phoneIcon from '@/public/icons/phone.svg';
import closeIcon from '@/public/icons/close.svg';
import "./request-callback-form.css";
import Input from "../ui/input/input";
import { useForm, SubmitHandler } from "react-hook-form"
import { useTranslations } from "next-intl";

type FormData = {
  fullName: string
  phoneNumber: string
}

export interface RequestCallbackFormProps {
  handleSubmit: (fullname: string, phoneNumber: string) => void;
  handleClose: () => void;
}

export const RequestCallbackForm = (props: RequestCallbackFormProps): JSX.Element => {
  const t = useTranslations('ModalRequestCallback');
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
          message: t('ControlFullName.ErrorRequired')
        };
      } else if (data.fullName.length < 2) {
        errors.fullName = {
          type: "minLength",
          message: t('ControlFullName.ErrorMinimalValue')
        };
      }

      // Валидация Phone Number
      if (!data.phoneNumber.trim()) {
        errors.phoneNumber = {
          type: "required",
          message: t('ControlPhoneNumber.ErrorRequired')
        };
      } else if (!/^[\+]?[0-9\s\-\(\)]{10,}$/.test(data.phoneNumber)) {
        errors.phoneNumber = {
          type: "pattern",
          message: t('ControlPhoneNumber.ErrorInvalidNumber')
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
          <div className="subtitle">{t('Label')}</div>
          <h1 className="title">
            {t('Description')}
          </h1>
        </div>

        <form className="form-section" onSubmit={hookFormSubmit(onSubmit)} noValidate>
          <div className="input-group">
            <Input
              icon={userIcon}
              label={t('ControlFullName.Label')}
              required
              value={formValues.fullName} 
              error={errors.fullName?.message ?? ''}
              onChange={(value) => handleChange('fullName', value)}
              onBlur={() => handleBlur('fullName')} />

            <Input
              icon={phoneIcon}
              label={t('ControlPhoneNumber.Label')}
              required
              value={formValues.phoneNumber}
              error={errors.phoneNumber?.message ?? ''}
              onChange={(value) => handleChange('phoneNumber', value)}
              onBlur={() => handleBlur('phoneNumber')} />
          </div>

          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? t('Loading') : t('ButtonCallMe.Label')}
          </button>
        </form>

        <button className="close-button" onClick={props.handleClose}>
          <Image src={closeIcon} className="close-icon" alt="" />
        </button>
      </div>
    </div>
  );
};