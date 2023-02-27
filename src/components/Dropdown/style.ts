import styled, { keyframes } from "styled-components";

interface isSelected {
  active?: boolean;
}

const fadeIn = keyframes`
  0% {
        transform: scaleY(0)
    }
    80% {
        transform: scaleY(1.1)
    }
    100% {
        transform: scaleY(1)
    }
`;

export const DropdownAndTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 20%;
  padding: 5px;

  p {
    color: white;
    font-weight: bold;
    font-size: 1rem;
  }
`;

export const DropdownContainer = styled.div`
  display: inline-block;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  position: relative;
`;

export const StyledDropdown = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 100%;
  height: 70%;
  font-size: 1rem;
  cursor: pointer;
`;

export const DropdownText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
  p {
    font-size: 1.2rem;
    color: #000000;
    margin: 0.5rem;
  }
`;

export const DropdownArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;

export const DropdownContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: absolute;
  width: 100%;
  max-height: 500px;
  overflow: auto;
  z-index: 2;
  transition: all 0.3s ease-out;
  animation: 300ms ease-in-out forwards;
  transform-origin: top center;
  background-color: #e9e9ed;
  animation: ${fadeIn} 0.4s ease-in-out;
  cursor: pointer;
`;

export const DropdownContentOption = styled.button<isSelected>`
  width: 100%;
  height: 8%;
  border: 0px 2px 2px 2px solid black;
  border-style: none;
  padding: 0;
  font-size: 1rem;
  font-weight: 500;
  text-transform: capitalize;
  text-align: center;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "black" : "#e9e9ed")};
  color: ${(props) => (props.active ? "white" : "black")};
  &:hover {
    background-color: ${(props) => (props.active ? "black" : "#cdcdcd")};
  }
`;
