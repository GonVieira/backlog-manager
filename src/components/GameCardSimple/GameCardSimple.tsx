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
import { addGameToUser } from "../../api/userFetch";

interface GameCardSimpleProps {
  slug: string;
  image: string;
  backgroundImage: string;
  name: string;
  hours: number;
  rating: number;
  id: string;
  token: string;
  platforms: any[];
  toast: any;
}

const GameCardSimple = ({
  slug,
  image,
  backgroundImage,
  name,
  hours,
  rating,
  id,
  token,
  platforms,
  toast,
}: GameCardSimpleProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();
  const gameInfoToSend = {
    completed: false,
    slug: slug,
    name: name,
    backgroundImage: backgroundImage,
    platforms: [] as string[],
    playtime: hours,
    metacritic: rating,
  };

  const getGamePlatforms = () => {
    for (let i = 0; i < platforms.length; i++) {
      gameInfoToSend.platforms.push(platforms[i].platform.name);
    }
  };

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
              <h2>Quality / Hour</h2>
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
                getGamePlatforms();

                addGameToUser(id, token, gameInfoToSend)
                  .then((data) => {
                    if (data.status === 200) {
                      toast.success(
                        "Successfully added " +
                          gameInfoToSend.name +
                          " to your backlog."
                      );
                    }
                  })
                  .catch((error) => {
                    if (error.response.status === 401) {
                      toast.error(
                        "You must be logged in to add a game to your account!"
                      );
                    }
                    if (error.response.status === 409) {
                      toast.error(error.response.data.message);
                    }
                    toast.error(error.response.data);
                  });
              }}
            />
          </ButtonContainer>
        </InfoContainer>
      </SimpleGameCardContainer>
    </Suspense>
  );
};

export default GameCardSimple;
