import React, { useState, useRef, useEffect } from 'react';
import styles from './input.module.css';
import Image from 'next/image';

interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  icon: string;
  type?: 'text' | 'password' | 'email';
  error?: string;
  caption?: string;
  required?: boolean;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  icon,
  type = 'text',
  error,
  caption,
  required = false,
  disabled = false
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const isLabelActive = isFocused || value.length > 0;

  return (
    <div className={`${styles['input-container']} ${error ? styles['input-error'] : ''} ${disabled ? styles['input-disabled'] : ''}`}>
      <div className={styles["input-wrapper"]}>
        <input
          ref={inputRef}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required={required}
          disabled={disabled}
          className={styles["input-field"]}
        />

        <Image src={icon} className={styles["input-icon"]} alt="" />

        <label 
          htmlFor={label} 
          className={`${styles["input-label"]} ${isLabelActive ? styles['input-label-active'] : ''}`}
          onClick={() => inputRef.current?.focus()}
        >
          {label}
          {required && <span className={styles["required-asterisk"]}>*</span>}
        </label>
      </div>
      
      {(caption || error) && (
        <div className={`input-message ${error ? 'input-message-error' : 'input-message-caption'}`}>
          {error || caption}
        </div>
      )}
    </div>
  );
};

export default Input;