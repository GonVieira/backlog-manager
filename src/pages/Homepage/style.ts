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
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${(props) => props.wallpaperUrl});
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
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 20%;
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
  width: 40%;
  padding: 0.5rem;
`;

export const PopularGamesSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 85%;
  height: 70%;
`;

export const PopularGamesSectionTextDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 15%;

  h2 {
    color: #ffa500;
    font-size: 2rem;
  }
`;

export const PopularGamesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 25px;
  width: 100%;
  height: 70%;
`;

export const PopularGameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const BottomPageButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 30%;
  height: 10%;
`
