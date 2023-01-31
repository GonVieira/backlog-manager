import React from "react";
import {
  LoginLogoutProfileContainer,
  NavbarContainer,
  NavbarContentWrapper,
  NavBarProjectNameLogoContainer,
  SearchBarContainer,
} from "./style";

const Navbar = () => {
    
  return (
    <NavbarContainer>
      <NavbarContentWrapper>
        <NavBarProjectNameLogoContainer>
          <h2
            onClick={() => console.log("Logo clicked, redirect to homepage.")}
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
