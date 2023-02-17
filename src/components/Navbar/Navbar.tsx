import React from "react";
import {
  LoginLogoutProfileContainer,
  NavbarContainer,
  NavbarContentWrapper,
  NavBarProjectNameLogoContainer,
  SearchBarContainer,
} from "./style";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <NavbarContainer>
      <NavbarContentWrapper>
        <NavBarProjectNameLogoContainer>
          <h2
            onClick={() => {
              navigate("/");
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            GameBacklogManager
          </h2>
        </NavBarProjectNameLogoContainer>
        <SearchBarContainer>
          <SearchBar />
        </SearchBarContainer>
        <LoginLogoutProfileContainer>
          <h2 onClick={() => {
              navigate("/register");
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}>Login Logout Profile</h2>
        </LoginLogoutProfileContainer>
      </NavbarContentWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
