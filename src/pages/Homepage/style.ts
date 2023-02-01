import styled from "styled-components";

export const HomepageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #171e22;
  height: 200%;
  width: 100%;
  padding-top: 4%;
`;

export const BackGroundImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(https://cdn.discordapp.com/attachments/1070077755120701540/1070078599455068160/elden-ring-keyart.png);
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
