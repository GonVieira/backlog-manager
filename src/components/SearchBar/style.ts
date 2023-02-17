import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-radius: 10px;
  transition: border-color 0.2s ease-in-out, border-radius 0.2s ease-in-out;
  &:focus-within {
    border: 3px solid #00bcd4;
    border-radius: 10px;
  }
`;

export const SearchBarInput = styled.input`
  width: 90%;
  height: 100%;
  border: none;
  border-radius: 5px 0 0 5px;
  padding: 0 10px;
  letter-spacing: 1px;
  font-size: 1.4rem;

  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 100%;
  border: none;
  background-color: #00bcd4;
  transition: opacity 0.2s ease-in-out;
  border-radius: 0 5px 5px 0;

  &:hover {
    outline: none;
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const SearchBarIcon = styled(AiOutlineSearch)`
  height: 100%;
  width: 100%;
`;
