import React from "react";
import { StyledBtnText, StyledButton } from "./style";

interface ButtonInfoProp {
  buttonText: string;
  onClickFunction?: () => void;
  color?: string;
}

const PrimaryButton = ({ buttonText, onClickFunction, color }: ButtonInfoProp) => {
  return (
    <StyledButton color={color} onClick={onClickFunction}>
      <StyledBtnText>{buttonText}</StyledBtnText>
    </StyledButton>
  );
};

export default PrimaryButton;
