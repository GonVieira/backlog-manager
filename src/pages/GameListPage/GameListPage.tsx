import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchGames } from "../../api/gameFetch";
import { fetchGenres } from "../../api/genreFetch";
import { fetchPlatforms } from "../../api/platformFetch";
import Dropdown from "../../components/Dropdown/Dropdown";
import GameCardSimple from "../../components/GameCardSimple/GameCardSimple";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import {
  GameContainer,
  GameListContentWrapper,
  GameListPageContainer,
  ListOfGames,
  LoadingDiv,
  NotFoundErrorMessage,
  PageButtonContainer,
  PageNumberTextContainer,
  PaginationContainer,
  SearchOption,
  SearchOptionsContainer,
} from "./style";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCookie } from "../../utils/cookies";
import { useSearchParams } from "react-router-dom";

const GameListPage = () => {
  //GET GAMES PER PAGE VALUE DEPENDING ON SCREEN WIDTH
  let gamesPerPage;
  if (window.innerWidth <= 768) {
    gamesPerPage = 4;
  } else if (window.innerWidth <= 1200) {
    gamesPerPage = 6;
  } else {
    gamesPerPage = 9;
  }

  const [numberOfGamesPerPage] = useState<number>(gamesPerPage);
  const user = useSelector((state: any) => state.user);
  const platformValue = useSelector((state: any) => state.platformVal);
  const genreValue = useSelector((state: any) => state.genreVal);
  const sort = useSelector((state: any) => state.sortVal);
  const [searchParams, setSearchParams] = useSearchParams();
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [platforms, setPlatforms] = useState([]);
  const [genres, setGenres] = useState([]);
  const { searchVal } = useParams();

  //Get page from url params
  let pageParamVal = searchParams.get("page");
  if (pageParamVal === null) {
    pageParamVal = "1";
  }
  const [page, setPage] = useState<number>(parseInt(pageParamVal));

  const sortOptions = [
    { name: "Most Popular", id: "" },
    { name: "Name", id: "name" },
    { name: "Released", id: "released" },
    { name: "Metacritic", id: "-metacritic" },
  ];
  const loginToken = getCookie("token");

  useEffect(() => {
    //GET PLATFORMS
    if (platforms.length === 0) {
      fetchPlatforms().then((data) => {
        setPlatforms(data);
      });
    }
    //GET GENRES
    if (genres.length === 0) {
      fetchGenres().then((data) => {
        setGenres(data);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setLoading(true);

    fetchGames(
      numberOfGamesPerPage,
      page,
      platformValue,
      sort,
      genreValue,
      searchVal
    ).then((data) => {
      setGames(data);
    });

    setLoading(false);
  }, [page, searchVal, platformValue, sort, genreValue, numberOfGamesPerPage]);

  return (
    <GameListPageContainer>
      <ToastContainer />
      <GameListContentWrapper>
        <SearchOptionsContainer>
          <SearchOption>
            <Dropdown
              dropdownText={"Platforms"}
              defaultOption={platformValue}
              failsafe={"All Platforms"}
              options={platforms}
              stateIdentifier={"platform"}
            />
          </SearchOption>
          <SearchOption>
            <Dropdown
              dropdownText={"Sort By"}
              defaultOption={sort}
              options={sortOptions}
              stateIdentifier={"sort"}
            />
          </SearchOption>
          <SearchOption>
            <Dropdown
              dropdownText={"Genre"}
              defaultOption={genreValue}
              failsafe={"All Genres"}
              options={genres}
              stateIdentifier={"genre"}
            />
          </SearchOption>
        </SearchOptionsContainer>
        {loading ? (
          <LoadingDiv>
            <LoadingSpinner />
          </LoadingDiv>
        ) : !games ? (
          <NotFoundErrorMessage>
            <h2>Games not found!</h2>
          </NotFoundErrorMessage>
        ) : (
          <ListOfGames>
            {games.map((game: any, index: number) => {
              return (
                <GameContainer key={game.name + index}>
                  <GameCardSimple
                    slug={game.slug}
                    image={game.background_image}
                    backgroundImage={game.background_image}
                    name={game.name}
                    hours={game.playtime}
                    rating={game.metacritic}
                    id={user._id}
                    token={loginToken}
                    platforms={game.platforms}
                    toast={toast}
                  ></GameCardSimple>
                </GameContainer>
              );
            })}
          </ListOfGames>
        )}
        {games ? (
          <PaginationContainer>
            <PageButtonContainer>
              {page === 1 ? (
                <></>
              ) : (
                <PrimaryButton
                  buttonText={"Previous"}
                  onClick={() => {
                    setPage((page) => page - 1);
                    setSearchParams({ page: (page - 1).toString() });
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                />
              )}
            </PageButtonContainer>
            <PageNumberTextContainer>
              <h2>Page: {page}</h2>
            </PageNumberTextContainer>
            <PageButtonContainer>
              {games.length < numberOfGamesPerPage ? (
                <></>
              ) : (
                <PrimaryButton
                  buttonText={"Next"}
                  onClick={() => {
                    setPage((page) => page + 1);
                    setSearchParams({ page: (page + 1).toString() });
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                />
              )}
            </PageButtonContainer>
          </PaginationContainer>
        ) : (
          <></>
        )}
      </GameListContentWrapper>
    </GameListPageContainer>
  );
};

export default GameListPage;
