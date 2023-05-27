import React from "react";
import {
  GearIcon,
  IconStyledButton,
  StyledBtnText,
  StyledButton,
} from "./style";

interface ButtonInfoProp {
  buttonText?: string;
  color?: string;
  icon?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const PrimaryButton = ({
  buttonText,
  onClick,
  color,
  icon,
  onMouseEnter,
  onMouseLeave,
}: ButtonInfoProp) => {
  if (icon === "gearIcon") {
    return (
      <IconStyledButton
        color={color}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <GearIcon />
      </IconStyledButton>
    );
  } else {
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
  }
};

export default PrimaryButton;
