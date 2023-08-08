import React, { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchGames, fetchGamesBySearch } from "../../api/gameFetch";
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
  PageButtonContainer,
  PageNumberTextContainer,
  PaginationContainer,
  SearchOption,
  SearchOptionsContainer,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCookie } from "../../utils/cookies";

const GameListPage = () => {
  //GET STORAGE PAGE VALUE
  let pageValStorage: number = parseInt(sessionStorage.getItem("pageVal")!);
  if (!pageValStorage) {
    pageValStorage = 1;
  }

  //GET GAMES PER PAGE VALUE DEPENDING ON SCREEN WIDTH
  let gamesPerPage = 0;
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
  const dispatch = useDispatch();
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [platforms, setPlatforms] = useState([]);
  const [genres, setGenres] = useState([]);
  const [page, setPage] = useState(pageValStorage);
  const { searchVal } = useParams();

  const sortOptions = [
    { name: "Most Popular", id: "" },
    { name: "Name", id: "name" },
    { name: "Released", id: "released" },
    { name: "Metacritic", id: "-metacritic" },
  ];
  const loginToken = getCookie("token");

  useLayoutEffect(() => {
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

  // Page reset on filter change
  useEffect(() => {
    setPage(1);
    sessionStorage.setItem("pageVal", JSON.stringify(1));
  }, [genreValue, searchVal, platformValue, sort, genreValue]);

  useEffect(() => {
    setLoading(true);

    //GET GAMES
    if (searchVal) {
      fetchGamesBySearch(numberOfGamesPerPage, page, searchVal).then((data) => {
        setGames(data);
        dispatch({ type: "SET_PLATFORM", payload: 0 });
        dispatch({ type: "SET_GENRE", payload: 0 });
        dispatch({ type: "SET_SORT", payload: "" });
      });
      setLoading(false);
      return;
    }

    fetchGames(
      numberOfGamesPerPage,
      page,
      platformValue,
      sort,
      genreValue
    ).then((data) => {
      setGames(data);
    }).catch((error) => {
      console.error(error);
    });

    setLoading(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, searchVal, platformValue, sort, genreValue]);

  //SAVE PAGE VALUE EACH TIME PAGE STATE CHANGES
  useEffect(() => {
    sessionStorage.setItem("pageVal", JSON.stringify(page));
  }, [page]);

  if (games) {
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
          <PaginationContainer>
            <PageButtonContainer>
              {page === 1 ? (
                <></>
              ) : (
                <PrimaryButton
                  buttonText={"Previous"}
                  onClick={() => {
                    setPage((page) => page - 1);
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
        </GameListContentWrapper>
      </GameListPageContainer>
    );
  } else {
    return (
      <GameListPageContainer>
        <GameListContentWrapper>
          <h2>LOADING</h2>
        </GameListContentWrapper>
      </GameListPageContainer>
    );
  }
};

export default GameListPage;
