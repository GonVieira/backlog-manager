import React, { Suspense, useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchByGenre,
  fetchGamesByPage,
  fetchGamesByPlatGenre,
  fetchGamesBySearch,
  fetchSortedGamesByPlatGenre,
  fetchSortedGamesGenre,
  filterPlatformFetchGames,
  filterPlatformsAndSortedGames,
  sortedFetchGames,
} from "../../api/gameFetch";
import { fetchGenres } from "../../api/genreFetch";
import { fetchPlatforms } from "../../api/platformFetch";
import Dropdown from "../../components/Dropdown/Dropdown";
import GameCardSimple from "../../components/GameCardSimple/GameCardSimple";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import {
  ButtonContainer,
  GameContainer,
  GameListContentWrapper,
  GameListPageContainer,
  ListOfGames,
  ListOptionContainer,
  LoadingDiv,
  PageButtonContainer,
  PageNumberTextContainer,
  PaginationContainer,
  SearchOption,
  SearchOptionsContainer,
} from "./style";
import { useSelector } from "react-redux";

const GameListPage = () => {
  //GET STORAGE VALUES

  let pageValStorage: number = parseInt(sessionStorage.getItem("pageVal")!);
  if (!pageValStorage) {
    pageValStorage = 1;
  }

  let platValStorage: number = parseInt(
    sessionStorage.getItem("platformValue")!
  );
  if (!platValStorage) {
    platValStorage = 0;
  }

  let sortValStorage = sessionStorage.getItem("sort");
  if (sortValStorage === null) {
    sortValStorage = "";
  }

  let genreValStorage: number = parseInt(sessionStorage.getItem("genreValue")!);
  if (!genreValStorage) {
    genreValStorage = 0;
  }

  const [games, setGames] = useState([]);
  const user = useSelector((state: any) => state.user);
  const [loading, setLoading] = useState(true);
  const [platformValue, setPlatformValue] = useState<number>(platValStorage);
  const [platforms, setPlatforms] = useState([]);
  const [genreValue, setGenreValue] = useState<number>(genreValStorage);
  const [genres, setGenres] = useState([]);
  const [sort, setSort] = useState(sortValStorage);
  const [page, setPage] = useState(pageValStorage);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { searchVal } = useParams();
  const sortOptions = [
    { name: "Most Popular", id: "" },
    { name: "Name", id: "name" },
    { name: "Released", id: "released" },
    { name: "Metacritic", id: "-metacritic" },
  ];

  useLayoutEffect(() => {
    setLoading(true);
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

    //GET GAMES
    //IF THERE IS A SEARCH PARAMETER
    if (searchVal) {
      fetchGamesBySearch(9, page, searchVal).then((data) => {
        setGames(data);
      });
      setLoading(false);
      return;
    }

    //IF THERE IS A PLATFORM, SORT AND GENRE SELECTED
    if (platformValue > 0 && sort !== "" && genreValue > 0) {
      fetchSortedGamesByPlatGenre(
        9,
        page,
        platformValue,
        sort,
        genreValue
      ).then((data) => {
        setGames(data);
      });
      setLoading(false);
      return;
    }

    if (platformValue > 0 && genreValue > 0) {
      fetchGamesByPlatGenre(9, page, platformValue, genreValue).then((data) => {
        setGames(data);
      });
      setLoading(false);
      return;
    }

    if (sort !== "" && genreValue > 0) {
      fetchSortedGamesGenre(9, page, sort, genreValue).then((data) => {
        setGames(data);
      });
      setLoading(false);
      return;
    }

    //IF THERE IS A PLATFORM SELECTED AND A SORT SELECTED
    if (platformValue > 0 && sort !== "") {
      filterPlatformsAndSortedGames(9, page, platformValue, sort).then(
        (data) => {
          setGames(data);
        }
      );
      setLoading(false);
      return;
    }

    //IF THERE IS A PLATFORM SELECTED
    if (platformValue > 0) {
      filterPlatformFetchGames(9, page, platformValue).then((data) => {
        setGames(data);
      });
      setLoading(false);
      return;
    }

    if (genreValue > 0) {
      fetchByGenre(9, page, genreValue).then((data) => {
        setGames(data);
      });
      setLoading(false);
      return;
    }

    //IF THERE IS A SORT SELECTED
    if (sort !== "") {
      sortedFetchGames(9, page, sort).then((data) => {
        setGames(data);
      });
      setLoading(false);
      return;
    }

    //IF THERE IS NO SORT AND FILTER OPTINS
    fetchGamesByPage(9, page).then((data) => {
      setGames(data);
      setLoading(false);
    });
  }, [page, searchVal, platformValue, sort, genreValue]);

  useEffect(() => {
    sessionStorage.setItem("platformValue", JSON.stringify(platformValue));
    sessionStorage.setItem("sort", sort);
    sessionStorage.setItem("genreValue", JSON.stringify(genreValue));
  }, [platformValue, sort, genreValue]);

  useEffect(() => {
    setPlatformValue(0);
    setGenreValue(0);
    setSort("");
    setPage(1);
    setIsOpen(false);
  }, [searchVal]);

  useEffect(() => {
    sessionStorage.setItem("pageVal", JSON.stringify(page));
  }, [page]);

  if (games) {
    return (
      <GameListPageContainer isOpen={isOpen}>
        <GameListContentWrapper>
          {!searchVal && !searchVal && (
            <ListOptionContainer>
              <ButtonContainer>
                <PrimaryButton
                  buttonText={"Options"}
                  onClick={() => setIsOpen(!isOpen)}
                />
              </ButtonContainer>
            </ListOptionContainer>
          )}
          {isOpen && (
            <SearchOptionsContainer>
              <SearchOption>
                <Dropdown
                  dropdownText={"Platforms"}
                  defaultOption={platformValue}
                  failsafe={"All Platforms"}
                  options={platforms}
                  state={platformValue}
                  setState={setPlatformValue}
                />
              </SearchOption>
              <SearchOption>
                <Dropdown
                  dropdownText={"Sort By"}
                  defaultOption={sort}
                  options={sortOptions}
                  state={sort}
                  setState={setSort}
                />
              </SearchOption>
              <SearchOption>
                <Dropdown
                  dropdownText={"Genre"}
                  defaultOption={genreValue}
                  failsafe={"All Genres"}
                  options={genres}
                  state={genreValue}
                  setState={setGenreValue}
                />
              </SearchOption>
            </SearchOptionsContainer>
          )}
          {loading ? (
            <LoadingDiv>
              <LoadingSpinner />
            </LoadingDiv>
          ) : (
            <ListOfGames>
              {games.map((game: any) => {
                return (
                  <GameContainer>
                    <GameCardSimple
                      slug={game.slug}
                      image={game.background_image}
                      backgroundImage={game.background_image}
                      name={game.name}
                      hours={game.playtime}
                      rating={game.metacritic}
                      id={user._id}
                      token={user.token}
                      platforms={user.platforms}
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
                  onClick={() => setPage((page) => page - 1)}
                />
              )}
            </PageButtonContainer>
            <PageNumberTextContainer>
              <h2>Page: {page}</h2>
            </PageNumberTextContainer>
            <PageButtonContainer>
              {games.length < 9 ? (
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
      <GameListPageContainer isOpen={isOpen}>
        <GameListContentWrapper>
          <h2>LOADING</h2>
        </GameListContentWrapper>
      </GameListPageContainer>
    );
  }
};

export default GameListPage;
