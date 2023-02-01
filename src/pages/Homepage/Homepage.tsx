import React from "react";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import {
  BackGroundImageDiv,
  ButtonsContainer,
  HomepageContainer,
  HomepageContentWrapper,
  LogInButtonContainer,
  ProjectCoolPhraseConainer,
  ProjectNameTitleConainer,
  RegisterButtonContainer,
} from "./style";

const Homepage = () => {
  /** 
  const ImgBackgroundArray = [
    "https://cdn.discordapp.com/attachments/1070077755120701540/1070078599455068160/elden-ring-keyart.png",
  ];

  let chosenImg = ImgBackgroundArray[0];
  //console.log(process.env.REACT_APP_RAWG_API_KEY);
  */

  return (
    <HomepageContainer>
      <BackGroundImageDiv>
        <HomepageContentWrapper>
          <ProjectNameTitleConainer>
            <h2>Game Backlog Manager</h2>
          </ProjectNameTitleConainer>
          <ProjectCoolPhraseConainer>
            <h2>
              Don't know what game from the backlog to play next?{" "}
              <span>{<br />}</span> Sign up and manage your backlog games and
              find out what game you will play next.
            </h2>
          </ProjectCoolPhraseConainer>
          <ButtonsContainer>
            <RegisterButtonContainer>
              <PrimaryButton buttonText={"Join Us"} />
            </RegisterButtonContainer>
            <LogInButtonContainer>
              <PrimaryButton buttonText={"Log in"} />
            </LogInButtonContainer>
          </ButtonsContainer>
        </HomepageContentWrapper>
      </BackGroundImageDiv>
    </HomepageContainer>
  );
};

export default Homepage;
