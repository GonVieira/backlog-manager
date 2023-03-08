import React from "react";
import {
  LoginLogoutProfileContainer,
  NavBarButton,
  NavbarContainer,
  NavbarContentWrapper,
  NavBarProjectNameLogoContainer,
  SearchBarContainer,
} from "./style";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { type } from "os";

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
          <NavBarButton
            onClick={() => {
              navigate("/register");
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            Sign up
          </NavBarButton>
          <NavBarButton
            onClick={() => {
              navigate("/login");
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            Login
          </NavBarButton>
        </LoginLogoutProfileContainer>
      </NavbarContentWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
