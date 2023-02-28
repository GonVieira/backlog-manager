import React, { useState, Suspense } from "react";
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
    <Suspense fallback={<h2>Loading game...</h2>}>
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
              {hours === 0 ? <h2>NA</h2> : <h2>{hours} H</h2>}
            </GameInfoBox>
            <GameInfoBox>
              <h2>Metacritic</h2>
              {rating ? <h2>{rating}</h2> : <h2>NA</h2>}
            </GameInfoBox>
            <GameInfoBox>
              <h2>Quality per Hour</h2>
              {hours === 0 ? (
                <h2>NA</h2>
              ) : rating ? (
                <h2>{(rating / hours).toFixed(2)}</h2>
              ) : (
                <h2>NA</h2>
              )}
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
    </Suspense>
  );
};

export default GameCardSimple;
