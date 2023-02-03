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
  image: any;
  name: string;
  hours: number;
  rating: number;
  enjoymentRating: number;
}

const GameCardSimple = ({
  image,
  name,
  hours,
  rating,
  enjoymentRating,
}: GameCardSimpleProps) => {
  return (
    <SimpleGameCardContainer>
      <GameImgContainer>
        <GameImg src={image} alt={name}/>
      </GameImgContainer>
      <InfoContainer>
        <GameNameContainer>
          <h2>{name}</h2>
        </GameNameContainer>
        <GameInfoBoxesContainer>
            <GameInfoBox>
                <h3>Time</h3>
                <h2>{hours} hours</h2>
            </GameInfoBox>
            <GameInfoBox>
                <h3>Rating</h3>
                <h2>{rating}/10</h2>
            </GameInfoBox>
            <GameInfoBox>
                <h3>Enjoyment</h3>
                <h2>{enjoymentRating}</h2>
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
