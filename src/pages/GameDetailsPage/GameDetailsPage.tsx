import React, { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchGameBySlug } from "../../api/gameFetch";
import {
  GameDescriptionContainer,
  GameDetailsContentWrapper,
  GameDetailsImg,
  GameDetailsImgContainer,
  GameDetailsInfoBoxesContainer,
  GameDetailsInfoContainer,
  GameDetailsPageContainer,
  GameDetailsTop,
  GameNameContainer,
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
    console.log(game.description);
    return (
      <GameDetailsPageContainer>
        <GameDetailsContentWrapper>
          <GameDetailsTop>
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
              
            </GameDetailsInfoContainer>
            
          </GameDetailsTop>
          <SectionTitleContainer>
            <h2>Description</h2>
          </SectionTitleContainer>
          <GameDescriptionContainer>
              <p>{game.description_raw}</p>
            </GameDescriptionContainer>
        </GameDetailsContentWrapper>
      </GameDetailsPageContainer>
    );
  } else {
    return <></>;
  }
};

export default GameDetailsPage;
