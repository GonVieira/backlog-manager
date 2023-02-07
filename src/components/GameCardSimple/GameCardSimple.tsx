import React from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import {
  ButtonContainer,
  GameImg,
  GameImgContainer,
  GameInfoBox,
  GameInfoBoxesContainer,
  GameNameContainer,
  InfoContainer,
  SimpleGameCardContainer,
} from "./style";

interface GameCardSimpleProps {
  id: number;
  image: string;
  backgroundImage: string;
  name: string;
  hours: number;
  rating: number;
}

const GameCardSimple = ({
  id,
  image,
  backgroundImage,
  name,
  hours,
  rating,
}: GameCardSimpleProps) => {
  return (
    <SimpleGameCardContainer
      onClick={() => console.log("Game ID " + id)}
      backgroundImg={backgroundImage}
    >
      <GameImgContainer>
        <GameImg src={image} alt={name} />
      </GameImgContainer>
      <InfoContainer>
        <GameNameContainer>
          <h2>{name}</h2>
        </GameNameContainer>
        <GameInfoBoxesContainer>
          <GameInfoBox>
            <h2>Time</h2>
            <h2>{hours} hours</h2>
          </GameInfoBox>
          <GameInfoBox>
            <h2>Rating</h2>
            <h2>{rating}/100</h2>
          </GameInfoBox>
          <GameInfoBox>
            <h2>Quality per Hour</h2>
            <h2>{(rating / hours).toFixed(2)}</h2>
          </GameInfoBox>
        </GameInfoBoxesContainer>
        <ButtonContainer>
          <PrimaryButton buttonText={"Add to backlog"} />
        </ButtonContainer>
      </InfoContainer>
    </SimpleGameCardContainer>
  );
};

export default GameCardSimple;
