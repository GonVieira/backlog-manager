import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #2b2a33;
  height: 100px;
  width: 100%;
  position: fixed;
  z-index: 1000;
  top: 0;
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
    transition: 0.3s ease-in-out;

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
  height: 50%;
`;

export const LoginLogoutProfileContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 20%;
  height: 50%;

  h2 {
    cursor: pointer;
    color: white;
  }
`;

export const NavBarButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
  cursor: pointer;
  border-radius: 5px;
  background-color: #287fc2;
  font-size: 1.2rem;
  color: white;
  font-weight: 900;
  border: 0;
  padding: 0.9rem;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #7c9ce4;
  }
`;

export const LogoutNavBarButton = styled(NavBarButton)`
  background-color: #b12626;

  &:hover {
    background-color: #b83b3b;
  }
`;
