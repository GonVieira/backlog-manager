import styled from "styled-components";

export const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  padding: 10px 5px;
  color: white;
  border-bottom: 1px solid #169;
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
