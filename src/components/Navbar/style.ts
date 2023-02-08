import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #2b2a33;
  height: 10%;
  width: 100%;
  position: fixed;
  z-index: 1002;
`;

export const NavbarContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 100%;

  h2 {
    color: white;
  }
`;

export const NavBarProjectNameLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;

  h2 {
    cursor: pointer;
    color: white;

    :hover {
      color: #287fc2;
    }
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
`;

export const LoginLogoutProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;

  h2 {
    cursor: pointer;
    color: white;
  }
`;
