import React, { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchGameBySlug } from "../../api/gameFetch";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import {
  ButtonContainer,
  GameDescriptionContainer,
  GameDetailsContentWrapper,
  GameDetailsImg,
  GameDetailsImgContainer,
  GameDetailsInfoBoxesContainer,
  GameDetailsInfoContainer,
  GameDetailsPageContainer,
  GameDetailsTop,
  GameMinorInfoBox,
  GameMinorInfoContainer,
  GameMinorInfoContent,
  GameNameContainer,
  GameReleaseDate,
  GameRequirementColumn,
  GameRequirements,
  HoursInfoBox,
  MetacriticBox,
  QualityInfoBox,
  SectionTitleContainer,
} from "./style";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const [game, setGame] = useState<any>();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);

    if (slug) {
      fetchGameBySlug(slug).then((data) => setGame(data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  if (game) {
    const gameDescriptionHtml = () => {
      return { __html: game.description };
    };

    const isPlayableOnPc = () => {
      for (let i = 0; i < game.platforms.length; i++) {
        if (game.platforms[i].platform.name === "PC") {
          return true;
        }
      }
      return false;
    };

    const getMinimumRequirements = () => {
      for (let i = 0; i < game.platforms.length; i++) {
        if (game.platforms[i].platform.name === "PC") {
          if (game.platforms[i].requirements.minimum !== undefined) {
            return game.platforms[i].requirements.minimum;
          } else {
            return "Sorry, but we have no information about the minimum requirements.";
          }
        }
      }
    };

    const getRecommendedRequirements = () => {
      for (let i = 0; i < game.platforms.length; i++) {
        if (game.platforms[i].platform.name === "PC") {
          if (game.platforms[i].requirements.recommended !== undefined) {
            return game.platforms[i].requirements.recommended;
          } else {
            return "Sorry, but we have no information about the recommended requirements.";
          }
        }
      }
    };

    return (
      <GameDetailsPageContainer isPlayabelOnPc={isPlayableOnPc()}>
        <GameDetailsContentWrapper>
          <GameDetailsTop backgroundImg={game.background_image}>
            <GameDetailsImgContainer>
              <GameDetailsImg src={game.background_image} />
            </GameDetailsImgContainer>
            <GameDetailsInfoContainer>
              <GameNameContainer>
                <h1>{game.name}</h1>
              </GameNameContainer>
              <GameDetailsInfoBoxesContainer>
                <HoursInfoBox hours={game.playtime}>
                  <h2>Time to beat</h2>
                  <h2>{game.playtime} H</h2>
                </HoursInfoBox>
                <MetacriticBox rating={game.metacritic}>
                  <h2>Metacritic</h2>
                  <h2>{game.metacritic}</h2>
                </MetacriticBox>
                <QualityInfoBox quality={game.metacritic / game.playtime}>
                  <h2>Quality per hour</h2>
                  <h2>{(game.metacritic / game.playtime).toFixed(2)}</h2>
                </QualityInfoBox>
              </GameDetailsInfoBoxesContainer>
              <ButtonContainer>
                <PrimaryButton buttonText="Add to Backlog" />
              </ButtonContainer>
            </GameDetailsInfoContainer>
          </GameDetailsTop>
          <SectionTitleContainer>
            <h2>Description</h2>
          </SectionTitleContainer>
          <GameDescriptionContainer
            dangerouslySetInnerHTML={gameDescriptionHtml()}
          ></GameDescriptionContainer>
          <SectionTitleContainer>
            <h2>Game Info</h2>
          </SectionTitleContainer>
          <GameMinorInfoContainer>
            <GameMinorInfoBox>
              <h1>Platforms:&nbsp;</h1>
              <GameMinorInfoContent>
                {game.parent_platforms.map((platform: any) => {
                  return <h2> {platform.platform.name}&nbsp; </h2>;
                })}
              </GameMinorInfoContent>
            </GameMinorInfoBox>
            <GameMinorInfoBox>
              <h1>Genres:&nbsp;</h1>
              <GameMinorInfoContent>
                {game.genres.map((genre: any) => {
                  return <h2> {genre.name}&nbsp; </h2>;
                })}
              </GameMinorInfoContent>
            </GameMinorInfoBox>
            <GameMinorInfoBox>
              <h1>Developers:&nbsp;</h1>
              <GameMinorInfoContent>
                {game.developers.map((developer: any) => {
                  return <h2> {developer.name}&nbsp; </h2>;
                })}
              </GameMinorInfoContent>
            </GameMinorInfoBox>
            <GameMinorInfoBox>
              <h1>Publishers:&nbsp;</h1>
              <GameMinorInfoContent>
                {game.publishers.map((publisher: any) => {
                  return <h2> {publisher.name}&nbsp; </h2>;
                })}
              </GameMinorInfoContent>
            </GameMinorInfoBox>
            <GameReleaseDate>
              <h1>Release date:&nbsp;</h1>
              <h2>{game.released}</h2>
            </GameReleaseDate>
          </GameMinorInfoContainer>
          {isPlayableOnPc() && (
            <>
              <SectionTitleContainer>
                <h2>Game Requirements</h2>
              </SectionTitleContainer>
              <GameRequirements>
                <GameRequirementColumn>
                  <p>{getMinimumRequirements()}</p>
                </GameRequirementColumn>

                <GameRequirementColumn>
                  <p>{getRecommendedRequirements()}</p>
                </GameRequirementColumn>
              </GameRequirements>
            </>
          )}
        </GameDetailsContentWrapper>
      </GameDetailsPageContainer>
    );
  } else {
    return <GameDetailsPageContainer>Game Not Found</GameDetailsPageContainer>;
  }
};

export default GameDetailsPage;
