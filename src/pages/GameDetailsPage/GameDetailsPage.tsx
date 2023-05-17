import React, { Suspense, useLayoutEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchGameBySlug } from "../../api/gameFetch";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
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
  GoBackButton,
  GoBackButtonContainer,
  HoursInfoBox,
  MetacriticBox,
  NotFoundMessageContainer,
  QualityInfoBox,
  SectionTitleContainer,
} from "./style";
import { addGameToUser } from "../../api/userFetch";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCookie } from "../../utils/cookies";

const GameDetailsPage = () => {
  const user = useSelector((state: any) => state.user);
  const { slug } = useParams();
  const [game, setGame] = useState<any>();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const gameInfoToSend = {
    completed: false,
    slug: null,
    name: null,
    backgroundImage: null,
    platforms: [] as string[],
    playtime: null,
    metacritic: null,
  };
  const loginToken = getCookie("token");

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    if (slug) {
      fetchGameBySlug(slug).then((data) => {
        setGame(data);
        setLoading(false);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  if (loading) {
    return (
      <NotFoundMessageContainer>
        <LoadingSpinner />
      </NotFoundMessageContainer>
    );
  }

  if (game) {
    gameInfoToSend.slug = game.slug;
    gameInfoToSend.name = game.name;
    gameInfoToSend.backgroundImage = game.background_image;
    gameInfoToSend.playtime = game.playtime;
    gameInfoToSend.metacritic = game.metacritic;

    for (let i = 0; i < game.platforms.length; i++) {
      gameInfoToSend.platforms.push(game.platforms[i].platform.name);
    }

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
        <ToastContainer />
        <Suspense fallback={<LoadingSpinner />}>
          <GoBackButtonContainer>
            <GoBackButton>
              <PrimaryButton
                buttonText="<"
                color="#2b2a33"
                onClick={() => navigate(-1)}
              />
            </GoBackButton>
          </GoBackButtonContainer>
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
                    {game.playtime === 0 ? (
                      <h2>NA</h2>
                    ) : (
                      <h2>{game.playtime} H</h2>
                    )}
                  </HoursInfoBox>
                  <MetacriticBox rating={game.metacritic}>
                    <h2>Metacritic</h2>
                    {game.metacritic ? <h2>{game.metacritic}</h2> : <h2>NA</h2>}
                  </MetacriticBox>
                  <QualityInfoBox quality={game.metacritic / game.playtime}>
                    <h2>Quality per hour</h2>
                    {game.playtime === 0 ? (
                      <h2>NA</h2>
                    ) : game.metacritic ? (
                      <h2>{(game.metacritic / game.playtime).toFixed(2)}</h2>
                    ) : (
                      <h2>NA</h2>
                    )}
                  </QualityInfoBox>
                </GameDetailsInfoBoxesContainer>
                <ButtonContainer>
                  <PrimaryButton
                    onClick={() => {
                      addGameToUser(user._id, loginToken, gameInfoToSend)
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
                    buttonText="Add to Backlog"
                  />
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
        </Suspense>
      </GameDetailsPageContainer>
    );
  } else {
    return (
      <NotFoundMessageContainer>
        <h2>Game Not Found</h2>
      </NotFoundMessageContainer>
    );
  }
};

export default GameDetailsPage;
