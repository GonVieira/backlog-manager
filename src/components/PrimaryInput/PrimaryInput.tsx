import React, { ChangeEvent } from "react";
import { StyledInput } from "./style";

interface InputProps {
  type: "text" | "number" | "email" | "password";
  label: string;
  value: string | number;
  name: string;
  placeholder: string;
  error: boolean;
  disabled?: boolean;
  required?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PrimaryInput = ({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  required,
  disabled,
  onChange,
}: InputProps) => {
  return (
    <StyledInput
      type={type}
      id={label}
      value={value}
      error={error}
      name={name}
      required={required}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default PrimaryInput;
