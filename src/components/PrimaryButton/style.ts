import styled from "styled-components";
import { BsFillGearFill } from "react-icons/bs";

export const StyledButton = styled.button`
  display: inline-block;
  border-radius: 4px;
  background-color: ${(props) => (props.color ? props.color : "#287fc2")};
  color: #ffffff;
  text-align: center;
  font-size: 1.1rem;
  padding: 0.7rem;
  width: 100%;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  border: none;
  font-weight: bold;
  z-index: 81;
  @media (hover: hover) and (pointer: fine) {
    :hover {
      padding-right: 0.2rem;
      background-color: ${(props) => (props.color ? props.color : "#287fc2")};
    }
  }
  //Tablets
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.7rem;
  }
  //Mobile
  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.6rem;
  }
`;

export const StyledBtnText = styled.span`
  color: white;
  font-weight: bold;
  @media (hover: hover) and (pointer: fine) {
    :after {
      position: relative;
      opacity: 0;
      right: -0.3rem;
      transition: 0.5s;
      ${StyledButton}:hover & {
        opacity: 1;
      }
    }
  }
`;

export const IconStyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
  cursor: pointer;
  border-radius: 5px;
  background-color: #287fc2;
  color: white;
  font-weight: 900;
  border: 0;
  padding: 0.7rem;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #7c9ce4;
  }

  //Desktop
  @media (max-width: 1200px) {
    width: 100%;
  }

  //Tablets
  @media (max-width: 768px) {
    padding: 0.5rem;
  }

  //Mobile
  @media (max-width: 576px) {
    padding: 0.3rem;
  }
`;

export const GearIcon = styled(BsFillGearFill)`
  height: 100%;
  width: 100%;
`;
