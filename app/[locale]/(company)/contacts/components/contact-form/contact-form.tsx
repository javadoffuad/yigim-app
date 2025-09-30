'use client';

import styles from './contact-form.module.css';
import userIcon from '@/public/icons/user.svg';
import phoneIcon from '@/public/icons/phone.svg';
import letterIcon from '@/public/icons/letter.svg';
import Input from '@/app/components/ui/input/input';
import Textarea from '@/app/components/ui/textarea/textarea';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormData = {
  fullName: string;
  phoneNumber: string;
  message: string;
}

export default function ContactForm() {
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
                    message: "Full name is required"
                };
            } else if (data.fullName?.length < 2) {
                errors.fullName = {
                    type: "minLength",
                    message: "Full name must be at least 2 characters"
                };
            }

            // Валидация Phone Number
            if (!data.phoneNumber?.trim()) {
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

            // Валидация Message
            if (!data.message?.trim()) {
                errors.message = {
                    type: "required",
                    message: "Message is required"
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
            <div className={styles["form-header"]}>
                <div className={styles["form-subtitle"]}>WE WILL CALL YOU.</div>
                <h2 className={styles["form-title"]}>Have a question?</h2>
            </div>
            
            <form className={styles["contact-form"]} onSubmit={hookFormSubmit(onSubmit)} noValidate>
                <div className={styles["form-row"]}>
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
                        onBlur={() => handleBlur('phoneNumber')} />
                </div>

                <Textarea
                    icon={letterIcon}
                    label="Message"
                    required
                    value={formValues.message ?? ''}
                    error={errors.message?.message ?? ''}
                    onChange={(value) => handleChange('message', value)}
                    onBlur={() => handleBlur('message')} />
                
                <button
                    type="submit"
                    className={styles["submit-btn"]} disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send request"}
                </button>
            </form>
        </div>
    );
}