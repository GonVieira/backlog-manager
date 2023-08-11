import React, { useState, Suspense, useEffect } from "react";
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
  StatNameBox,
  StatValBox,
} from "./style";
import {
  addGameToUser,
  checkIfGameExistsInLibrary,
  deleteGameFromLibrary,
} from "../../api/userFetch";
import { useSelector } from "react-redux";

export interface GameCardSimpleProps {
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
  const [isOnBacklog, setIsOnBacklog] = useState<boolean>(false);
  const user = useSelector((state: any) => state.user);
  const gameInfoToSend = {
    completed: false,
    slug: slug,
    name: name,
    backgroundImage: backgroundImage,
    platforms: [] as string[],
    playtime: hours,
    metacritic: rating,
  };

  useEffect(() => {
    if (id !== null) {
      checkIfGameExistsInLibrary(id, token, slug)
        .then((data) => {
          if (data.status === 200) {
            setIsOnBacklog(true);
          }
          if (data.status === 404) {
            setIsOnBacklog(false);
          }
        })
        .catch((error) => {
          console.log(error.response.data.message);
        });
    } else {
      setIsOnBacklog(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

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
          <GameImg loading="lazy" src={image} alt={"Image of " + name} />
        </GameImgContainer>
        <InfoContainer>
          <GameNameContainer>
            <h2>{name}</h2>
          </GameNameContainer>
          <GameInfoBoxesContainer>
            <GameInfoBox>
              <StatNameBox>
                <h2>Time</h2>
              </StatNameBox>
              {hours === 0 ? (
                <StatValBox>
                  <h2>NA</h2>
                </StatValBox>
              ) : (
                <StatValBox>
                  <h2>{hours}H</h2>
                </StatValBox>
              )}
            </GameInfoBox>
            <GameInfoBox>
              <StatNameBox>
                <h2>Metacritic</h2>
              </StatNameBox>
              {rating ? (
                <StatValBox>
                  <h2>{rating}</h2>
                </StatValBox>
              ) : (
                <StatValBox>
                  <h2>NA</h2>
                </StatValBox>
              )}
            </GameInfoBox>
            <GameInfoBox>
              <StatNameBox>
                <h2>Quality / Hour</h2>
              </StatNameBox>
              {hours === 0 ? (
                <StatValBox>
                  <h2>NA</h2>
                </StatValBox>
              ) : rating ? (
                <StatValBox>
                  <h2>{(rating / hours).toFixed(2)}</h2>
                </StatValBox>
              ) : (
                <StatValBox>
                  <h2>NA</h2>
                </StatValBox>
              )}
            </GameInfoBox>
          </GameInfoBoxesContainer>
          <ButtonContainer>
            {isOnBacklog ? (
              <PrimaryButton
                buttonText={"Remove from backlog"}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                color="#b12626"
                onClick={() => {
                  deleteGameFromLibrary(id, token, slug).then((data) => {
                    if (data.status === 200) {
                      toast.success(
                        gameInfoToSend.name +
                          " successfully removed from your backlog."
                      );
                      setIsOnBacklog(false);
                    }
                  });
                }}
              />
            ) : (
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
                        setIsOnBacklog(true);
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
            )}
          </ButtonContainer>
        </InfoContainer>
      </SimpleGameCardContainer>
    </Suspense>
  );
};

export default GameCardSimple;
