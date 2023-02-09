import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  slug: string;
  image: string;
  backgroundImage: string;
  name: string;
  hours: number;
  rating: number;
}

const GameCardSimple = ({
  slug,
  image,
  backgroundImage,
  name,
  hours,
  rating,
}: GameCardSimpleProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  return (
    <SimpleGameCardContainer
      onClick={() => {
        if (!isHovering) {
          navigate(`/game/${slug}`);
        }
      }}
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
            <h2>{hours} Hours</h2>
          </GameInfoBox>
          <GameInfoBox>
            <h2>Metacritic</h2>
            <h2>{rating}</h2>
          </GameInfoBox>
          <GameInfoBox>
            <h2>Quality per Hour</h2>
            <h2>{(rating / hours).toFixed(2)}</h2>
          </GameInfoBox>
        </GameInfoBoxesContainer>
        <ButtonContainer>
          <PrimaryButton
            buttonText={"Add to backlog"}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => {
              if (isHovering) {
                console.log("Added to backlog!");
              }
            }}
          />
        </ButtonContainer>
      </InfoContainer>
    </SimpleGameCardContainer>
  );
};

export default GameCardSimple;
