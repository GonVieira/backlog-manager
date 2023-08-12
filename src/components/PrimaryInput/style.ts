import styled from "styled-components";

export const StyledInput = styled("input")<{ error: boolean }>`
  background-color: transparent;
  border: none;
  padding: 10px 5px;
  color: white;
  //${(props) => (props.color ? props.color : "#287fc2")}
  //border-bottom: 1px solid #169;
  border-bottom: ${(props) =>
    props.error ? "1px solid #169" : "1px solid #ff3333"};
  font-size: 1.6rem;
  margin: 1rem;
  width: 100%;

  //Laptops
  @media (max-width: 992px) {
    font-size: 1.4rem;
  }

  //Tablets
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  //Mobile
  @media (max-width: 576px) {
    font-size: 1.2rem;
  }

  &:focus {
    outline: none;
  }
`;
