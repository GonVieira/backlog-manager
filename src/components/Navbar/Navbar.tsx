import React from "react";
import {
  LoginLogoutProfileContainer,
  NavbarContainer,
  NavbarContentWrapper,
  NavBarProjectNameLogoContainer,
  SearchBarContainer,
} from "./style";
import { useNavigate } from "react-router-dom";

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
          <h2> SearchBar </h2>
        </SearchBarContainer>
        <LoginLogoutProfileContainer>
          <h2>Login Logout Profile</h2>
        </LoginLogoutProfileContainer>
      </NavbarContentWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
