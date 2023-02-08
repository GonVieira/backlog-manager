import React from "react";
import { StyledBtnText, StyledButton } from "./style";

interface ButtonInfoProp {
  buttonText: string;
  color?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const PrimaryButton = ({
  buttonText,
  onClick,
  color,
  onMouseEnter,
  onMouseLeave,
}: ButtonInfoProp) => {
  return (
    <StyledButton
      color={color}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <StyledBtnText>{buttonText}</StyledBtnText>
    </StyledButton>
  );
};

export default PrimaryButton;
