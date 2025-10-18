'use client';

import styles from './contact-form.module.css';
import userIcon from '@/public/icons/user.svg';
import phoneIcon from '@/public/icons/phone.svg';
import letterIcon from '@/public/icons/letter.svg';
import Input from '@/app/components/ui/input/input';
import Textarea from '@/app/components/ui/textarea/textarea';
import { SubmitHandler, useForm } from 'react-hook-form';
import { I18N_CONTACTS_PAGE } from '@/app/constants/i18n.constants';
import { useTranslations } from 'next-intl';
import SectionTitle from '@/app/components/section-title/section-title';

type FormData = {
  fullName: string;
  phoneNumber: string;
  message: string;
}

export default function ContactForm() {
    const t = useTranslations(`${I18N_CONTACTS_PAGE}.AreaForm`);
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
            if (!data.fullName?.trim()) {
                errors.fullName = {
                    type: "required",
                    message: t('ControlFullName.ErrorRequired')
                };
            } else if (data.fullName?.length < 2) {
                errors.fullName = {
                    type: "minLength",
                    message: t('ControlFullName.ErrorMinimalValue')
                };
            }

            // Валидация Phone Number
            if (!data.phoneNumber?.trim()) {
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

            // Валидация Message
            if (!data.message?.trim()) {
                errors.message = {
                    type: "required",
                    message: t('ControlMessage.ErrorRequired')
                };
            }

            return {
                values: Object.keys(errors).length === 0 ? data : {},
                errors
            };
        }
    });

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data.fullName, data.phoneNumber, data.message);
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
        <div className={styles["contact-form-section"]}>
            <SectionTitle
                title={t('Label')}
                description={t('SubLabel')}
                size='xl' />
            
            <form className={styles["contact-form"]} onSubmit={hookFormSubmit(onSubmit)} noValidate>
                <div className={styles["form-row"]}>
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

                <Textarea
                    icon={letterIcon}
                    label={t('ControlMessage.Label')}
                    required
                    value={formValues.message ?? ''}
                    error={errors.message?.message ?? ''}
                    onChange={(value) => handleChange('message', value)}
                    onBlur={() => handleBlur('message')} />
                
                <button
                    type="submit"
                    className="button button-primary" disabled={isSubmitting}>
                    {isSubmitting ? t('Loading') : t('ButtonSendRequest.Label')}
                </button>
            </form>
        </div>
    );
}