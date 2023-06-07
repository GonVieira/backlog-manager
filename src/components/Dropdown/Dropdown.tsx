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
import { useDispatch } from "react-redux";

export interface DropdownProps {
  dropdownText: string;
  defaultOption: string | number;
  options: any[];
  stateIdentifier: string;
  color?: string;
  failsafe?: string;
}

const Dropdown = ({
  dropdownText,
  defaultOption,
  failsafe,
  color,
  stateIdentifier,
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
  const dispatch = useDispatch();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref, dropdownIsOpen]);
  };

  const handleClick = (option: any, identifier: string) => {
    setOptionSelected(option.name);
    if (identifier === "platform") {
      dispatch({ type: "SET_PLATFORM", payload: option.id });
    }
    if (identifier === "genre") {
      dispatch({ type: "SET_GENRE", payload: option.id });
    }
    if (identifier === "sort") {
      dispatch({ type: "SET_SORT", payload: option.id });
    }
    dropDownToggle();
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
            ) : optionSelected === undefined ? (
              <p>{optionVal}</p>
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
                onClick={() => handleClick(option, stateIdentifier)}
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
