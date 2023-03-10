import React, { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import {
  DropdownAndTextContainer,
  DropdownArrowContainer,
  DropdownContainer,
  DropdownContentContainer,
  DropdownContentOption,
  DropdownText,
  StyledDropdown,
  TextContainer,
} from "./style";

interface DropdownProps {
  dropdownText: string;
  defaultOption: string | number;
  options: any[];
  state?: any;
  setState?: any;
  color?: string;
  failsafe?: string;
  onClick?: () => void;
}

const Dropdown = ({
  dropdownText,
  defaultOption,
  failsafe,
  color,
  state,
  setState,
  onClick,
  options,
}: DropdownProps) => {
  let optionVal;


  if (defaultOption === 0) {
    optionVal = failsafe;
  }

  if (typeof defaultOption === typeof 1) {
    for (let i = 0; i < options.length; i++) {
      if (options[i].id === defaultOption) {
        optionVal = defaultOption = options[i].name;
      }
    }
  } else if (typeof defaultOption === typeof "") {
    for (let i = 0; i < options.length; i++) {
      if (options[i].id === defaultOption) {
        optionVal = defaultOption = options[i].name;
      }
    }
  } else {
    optionVal = defaultOption;
  }

  const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false);
  const [optionSelected, setOptionSelected] = useState<string>(optionVal);
  const wrapperRef = useRef(null);

  const dropDownToggle = () => {
    setDropdownIsOpen(!dropdownIsOpen);
  };

  //DETECT MOUSE CLICKS OUTSIDE
  const useOutsideAlerter = (ref: any) => {
    useEffect(() => {
      //CLICKED OUTSIDE OF ELEMENT
      const handler = (event: any) => {
        if (
          dropdownIsOpen &&
          ref.current &&
          !ref.current.contains(event.target)
        ) {
          setDropdownIsOpen(false);
        }
      };

      //BINDE EVENT LISTENER
      document.addEventListener("mousedown", handler);
      return () => {
        // UNBIND EVENT LISTENER ON CLEANUP
        document.removeEventListener("mousedown", handler);
      };
    }, [ref, dropdownIsOpen]);
  };

  useOutsideAlerter(wrapperRef);

  return (
    <DropdownAndTextContainer>
      <TextContainer>
        <p>{dropdownText}:</p>
      </TextContainer>
      <DropdownContainer ref={wrapperRef}>
        <StyledDropdown onClick={() => dropDownToggle()}>
          <DropdownText>
            {optionSelected === defaultOption ? (
              <p>{defaultOption}</p>
            ) : (
              <p>{optionSelected}</p>
            )}
          </DropdownText>
          <DropdownArrowContainer>
            {dropdownIsOpen ? (
              <MdKeyboardArrowUp style={{ verticalAlign: "middle" }} />
            ) : (
              <MdKeyboardArrowDown style={{ verticalAlign: "middle" }} />
            )}
          </DropdownArrowContainer>
        </StyledDropdown>
        {dropdownIsOpen && (
          <DropdownContentContainer>
            {options.map((option) => (
              <DropdownContentOption
                onClick={() => {
                  setOptionSelected(option.name);
                  setState(option.id);
                  dropDownToggle();
                }}
                active={optionSelected === option.name}
              >
                {option.name}
              </DropdownContentOption>
            ))}
          </DropdownContentContainer>
        )}
      </DropdownContainer>
    </DropdownAndTextContainer>
  );
};

export default Dropdown;
