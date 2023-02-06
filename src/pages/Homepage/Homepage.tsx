import React, { useLayoutEffect, useState } from "react";
import { fetchGameByName, fetchGamesByPopularity } from "../../api/gameFetch";
import GameCardSimple from "../../components/GameCardSimple/GameCardSimple";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import {
  BackGroundImageDiv,
  BottomPageButtonContainer,
  ButtonsContainer,
  HomepageContainer,
  HomepageContentWrapper,
  LogInButtonContainer,
  PopularGameContainer,
  PopularGamesContainer,
  PopularGamesSection,
  PopularGamesSectionTextDiv,
  ProjectCoolPhraseConainer,
  ProjectNameTitleConainer,
  RegisterButtonContainer,
} from "./style";

const Homepage = () => {
  const [chosenWallpaper, setChosenWallpaper] = useState("");
  const [popularGames, setPopularGames] = useState([]);
  const [gameTest, setGametest] = useState("");

  const imgBackgroundArray = [
    "https://cdn.discordapp.com/attachments/1070077755120701540/1070078599455068160/elden-ring-keyart.png",
    "https://cdn.discordapp.com/attachments/1070077755120701540/1071147780321591317/thumb-1920-939737.png",
    "https://cdn.discordapp.com/attachments/1070077755120701540/1071120378749005835/gZtXmpl_DQeg045eISk7SUq63C9OV64DtXU_622-_ss.png",
    "https://cdn.discordapp.com/attachments/1070077755120701540/1071151350810939392/thumb-1920-928770.png",
    "https://cdn.discordapp.com/attachments/1070077755120701540/1071149505040371722/thumb-1920-1131860.png",
    "https://cdn.discordapp.com/attachments/1070077755120701540/1071149795395252335/1702187.png",
  ];

  useLayoutEffect(() => {
    //get random number
    const rndInt = Math.floor(Math.random() * imgBackgroundArray.length);
    //set wallpaper number
    setChosenWallpaper(imgBackgroundArray[rndInt]);
    fetchGamesByPopularity(9).then((data) => {
      setPopularGames(data);
    });

    fetchGameByName("tekken-7").then((data) => {
      setGametest(data);
    });

  }, []);

  console.log(popularGames);
  console.log(gameTest);

  return (
    <HomepageContainer>
      <BackGroundImageDiv wallpaperUrl={chosenWallpaper}>
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
              <PrimaryButton color="#171e22" buttonText={"Join Us"} />
            </RegisterButtonContainer>
            <LogInButtonContainer>
              <PrimaryButton buttonText={"Log in"} />
            </LogInButtonContainer>
          </ButtonsContainer>
        </HomepageContentWrapper>
      </BackGroundImageDiv>

      <PopularGamesSection>
        <PopularGamesSectionTextDiv>
          <h2>What's hot right now?</h2>
        </PopularGamesSectionTextDiv>
        <PopularGamesContainer>
          <PopularGameContainer>
            <GameCardSimple
              image={
                "https://media.rawg.io/media/games/cc5/cc576aa274780702ef93463f5410031e.jpg"
              }
              backgroundImage={
                "https://media.rawg.io/media/screenshots/d67/d678c9f01b2460cfec5d955acb520d09_AsafJAb.jpg"
              }
              name={"Tekken 7"}
              hours={0}
              rating={0}
              enjoymentRating={0}
            ></GameCardSimple>
          </PopularGameContainer>
          <PopularGameContainer>
            <GameCardSimple
              image={
                "https://media.rawg.io/media/games/cc5/cc576aa274780702ef93463f5410031e.jpg"
              }
              backgroundImage={
                "https://media.rawg.io/media/screenshots/d67/d678c9f01b2460cfec5d955acb520d09_AsafJAb.jpg"
              }
              name={"Tekken 7"}
              hours={0}
              rating={0}
              enjoymentRating={0}
            ></GameCardSimple>
          </PopularGameContainer>
          <PopularGameContainer>
            <GameCardSimple
              image={
                "https://media.rawg.io/media/games/cc5/cc576aa274780702ef93463f5410031e.jpg"
              }
              backgroundImage={
                "https://media.rawg.io/media/screenshots/d67/d678c9f01b2460cfec5d955acb520d09_AsafJAb.jpg"
              }
              name={"Tekken 7"}
              hours={0}
              rating={0}
              enjoymentRating={0}
            ></GameCardSimple>
          </PopularGameContainer>
          <PopularGameContainer>
            <GameCardSimple
              image={
                "https://media.rawg.io/media/games/cc5/cc576aa274780702ef93463f5410031e.jpg"
              }
              backgroundImage={
                "https://media.rawg.io/media/screenshots/d67/d678c9f01b2460cfec5d955acb520d09_AsafJAb.jpg"
              }
              name={"Tekken 7"}
              hours={0}
              rating={0}
              enjoymentRating={0}
            ></GameCardSimple>
          </PopularGameContainer>
          <PopularGameContainer>
            <GameCardSimple
              image={
                "https://media.rawg.io/media/games/cc5/cc576aa274780702ef93463f5410031e.jpg"
              }
              backgroundImage={
                "https://media.rawg.io/media/screenshots/d67/d678c9f01b2460cfec5d955acb520d09_AsafJAb.jpg"
              }
              name={"Tekken 7"}
              hours={0}
              rating={0}
              enjoymentRating={0}
            ></GameCardSimple>
          </PopularGameContainer>
          <PopularGameContainer>
            <GameCardSimple
              image={
                "https://media.rawg.io/media/games/cc5/cc576aa274780702ef93463f5410031e.jpg"
              }
              backgroundImage={
                "https://media.rawg.io/media/screenshots/d67/d678c9f01b2460cfec5d955acb520d09_AsafJAb.jpg"
              }
              name={"Tekken 7"}
              hours={0}
              rating={0}
              enjoymentRating={0}
            ></GameCardSimple>
          </PopularGameContainer>
        </PopularGamesContainer>
        <BottomPageButtonContainer>
          <PrimaryButton buttonText="See more" />
        </BottomPageButtonContainer>
      </PopularGamesSection>
    </HomepageContainer>
  );
};

export default Homepage;
