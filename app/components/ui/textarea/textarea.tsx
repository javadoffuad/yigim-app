import React, { useState, useRef, useEffect } from 'react';
import styles from './textarea.module.css';
import Image from 'next/image';

interface TextareaProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  icon: string;
  error?: string;
  caption?: string;
  required?: boolean;
  disabled?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  value,
  onChange,
  icon,
  error,
  caption,
  required = false,
  disabled = false
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const isLabelActive = isFocused || value.length > 0;

  return (
    <div className={`${styles['input-container']} ${error ? styles['input-error'] : ''} ${disabled ? styles['input-disabled'] : ''}`}>
      <div className={styles["input-wrapper"]}>
        <textarea
          ref={inputRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required={required}
          disabled={disabled}
          className={styles["input-field"]}
        ></textarea>

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
        <div className={`${styles["input-message"]} ${error ? styles['input-message-error'] : styles['input-message-caption']}`}>
          {error || caption}
        </div>
      )}
    </div>
  );
};

export default Textarea;