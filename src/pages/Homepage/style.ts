import { ToastContainer } from "react-toastify";
import styled from "styled-components";

interface Props {
  wallpaperUrl: string;
}

export const HomepageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #171e22;
  height: 250%;
  width: 100%;
  padding-top: 90px;
  flex-direction: column;
`;

export const BackGroundImageDiv = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 30%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.wallpaperUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HomepageContentWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 75%;
  height: 80%;
  flex-direction: column;

  h2 {
    color: white;
  }
`;

export const ProjectNameTitleConainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40%;

  h2 {
    font-size: 5rem;
    margin: 0;
    text-align: center;

    //Tablets
    @media (max-width: 768px) {
      font-size: 4.2rem;
    }

    //Mobile
    @media (max-width: 576px) {
      font-size: 3.4rem;
    }
  }
`;

export const ProjectCoolPhraseConainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 33%;

  h2 {
    color: #ffa500;
    text-align: center;
    font-size: 1.8rem;

    //Tablets
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    //Mobile
    @media (max-width: 576px) {
      font-size: 1.2rem;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 20%;
  flex-direction: row;

  //Tablets
  @media (max-width: 768px) {
    width: 70%;
  }

  //Mobile
  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const RegisterButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  padding: 0.5rem;
`;

export const LogInButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  padding: 0.5rem;
`;

export const PopularGamesSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 85%;
  height: 70%;

  //Laptops
  @media (max-width: 992px) {
    width: 90%;
  }
`;

export const PopularGamesSectionTextDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 8%;

  h2 {
    color: #ffa500;
    font-size: 2rem;
  }
  //Mobile
  @media (max-width: 576px) {
    justify-content: center;
  }
`;

export const PopularGamesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 25px;
  width: 100%;
  height: 75%;

  //deskops
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    height: 70%;
  }

  //Tablets
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95%;
    height: 75%;
  }

  //Mobile
  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const PopularGameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 95%;

  //Tablets
  @media (max-width: 768px) {
    height: 25%;
    width: 100%;
  }
`;

export const BottomPageButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 5%;

  //Tablets
  @media (max-width: 768px) {
    width: 50%;
  }
`;
