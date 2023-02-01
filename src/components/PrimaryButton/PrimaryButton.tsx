import React from "react";
import { StyledBtnText, StyledButton } from "./style";

interface ButtonInfoProp {
  buttonText: string;
  onClickFunction?: () => void;
}

const PrimaryButton = ({ buttonText, onClickFunction }: ButtonInfoProp) => {
  return (
    <StyledButton onClick={onClickFunction}>
      <StyledBtnText>{buttonText}</StyledBtnText>
    </StyledButton>
  );
};

export default PrimaryButton;
