import React, { InputHTMLAttributes } from "react";
import { StyledInput } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const PrimaryInput = (Props: InputProps) => {
  return <StyledInput {...Props} />;
};

export default PrimaryInput;
