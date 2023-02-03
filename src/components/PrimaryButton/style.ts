import styled from "styled-components";

export const StyledButton = styled.button`
  display: inline-block;
  border-radius: 4px;
  background-color: ${(props) => (props.color  ? props.color : "#689af8")};
  color: #ffffff;
  text-align: center;
  font-size: 1.3rem;
  padding: 0.9rem;
  width: 100%;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  border: none;
  font-weight: bold;
  @media (hover: hover) and (pointer: fine) {
    :hover {
      padding-right: 0.2rem;
      background-color: ${(props) => (props.color ? props.color : "#689af8")};
    }
  }
  //Tablets
  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0.8rem;
    width: 60%;
  }
  //Mobile
  @media screen and (max-width: 480px) {
    font-size: 1.1rem;
    width: 75%;
    padding: 0.7rem;
  }
`;

export const StyledBtnText = styled.span`
  color: white;
  font-weight: bold;
  @media (hover: hover) and (pointer: fine) {
    :after {
      content: "»";
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
