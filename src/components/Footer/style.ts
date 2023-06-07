import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2b2a33;
  height: 15%;
  width: 100%;

  //Mobile
  @media (max-width: 576px) {
    height: 20%;
  }
`;

export const FooterContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 70%;
  height: 100%;
`;

export const HalfWidthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 50%;
  height: 60%;

  h2 {
    color: white;
    font-size: 1.2rem;
    font-weight: bold;

    //Tablets
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }

    //Mobile
    @media (max-width: 576px) {
      font-size: 1rem;
    }
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 80%;
  width: 100%;
`;

export const StyledLink = styled.a`
  font-size: 1rem;
  color: #36a0e6;
  text-decoration: none;
  cursor: pointer;
  padding-bottom: 5px;

  //Tablets
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  //Mobile
  @media (max-width: 576px) {
    font-size: 0.8rem;
  }

  :hover {
    text-decoration: underline;
  }
`;
