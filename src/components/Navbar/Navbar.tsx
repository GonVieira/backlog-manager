import React from "react";
import {
  LoginLogoutProfileContainer,
  LogoutNavBarButton,
  NavBarButton,
  NavbarContainer,
  NavbarContentWrapper,
  NavBarProjectNameLogoContainer,
  SearchBarContainer,
} from "./style";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);

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
            Game Backlog Manager
          </h2>
        </NavBarProjectNameLogoContainer>
        <SearchBarContainer>
          <SearchBar />
        </SearchBarContainer>
        {user.email ? (
          <LoginLogoutProfileContainer>
            <NavBarButton
              onClick={() => {
                navigate("/profile");
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              Profile
            </NavBarButton>
            <LogoutNavBarButton
              onClick={() => {
                dispatch({ type: "RESET" });
                navigate("/");
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              Logout
            </LogoutNavBarButton>
          </LoginLogoutProfileContainer>
        ) : (
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
        )}
      </NavbarContentWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
