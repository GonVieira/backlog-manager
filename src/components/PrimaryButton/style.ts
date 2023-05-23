import styled from "styled-components";

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
    font-size: 1rem;
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
