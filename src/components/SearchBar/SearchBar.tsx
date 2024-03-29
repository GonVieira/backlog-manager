import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SearchButton,
  SearchBarContainer,
  SearchBarInput,
  SearchBarIcon,
} from "./style";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const navigate = useNavigate();

  return (
    <SearchBarContainer>
      <SearchBarInput
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            navigate(`/games/${searchInput}?page=1`);
            sessionStorage.clear();
          }
        }}
        placeholder="Elden Ring"
      />
      <SearchButton
        onClick={() => {
          navigate(`/games/${searchInput}`);
          sessionStorage.clear();
        }}
      >
        <SearchBarIcon />
      </SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
