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
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import {
  ButtonContainer,
  GameContainer,
  GameListContentWrapper,
  GameListPageContainer,
  ListOfGames,
  ListOptionContainer,
  PageButtonContainer,
  PageNumberTextContainer,
  PaginationContainer,
  SearchOption,
  SearchOptionsContainer,
} from "./style";

const GameListPage = () => {
  const [games, setGames] = useState([]);
  const [platformValue, setPlatformValue] = useState<number>(0);
  const [platforms, setPlatforms] = useState([]);
  const [genreValue, setGenreValue] = useState<number>(0);
  const [genres, setGenres] = useState([]);
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { searchVal } = useParams();
  const sortOptions = [
    { name: "Most Popular", id: "" },
    { name: "Name", id: "name" },
    { name: "Released", id: "released" },
    { name: "Metacritic", id: "-metacritic" },
  ];

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

    //GET GAMES
    //IF THERE IS A SEARCH PARAMETER
    if (searchVal) {
      fetchGamesBySearch(9, page, searchVal).then((data) => {
        setGames(data);
      });
      return;
    }

    console.log(platformValue > 0 && sort !== "" && genreValue > 0);
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
      return;
    }

    if (platformValue > 0 && genreValue > 0) {
      fetchGamesByPlatGenre(9, page, platformValue, genreValue).then((data) => {
        setGames(data);
      });
      return;
    }

    if (sort !== "" && genreValue > 0) {
      fetchSortedGamesGenre(9, page, sort, genreValue).then((data) => {
        setGames(data);
      });
      return;
    }

    //IF THERE IS A PLATFORM SELECTED AND A SORT SELECTED
    if (platformValue > 0 && sort !== "") {
      filterPlatformsAndSortedGames(9, page, platformValue, sort).then(
        (data) => {
          setGames(data);
        }
      );
      return;
    }

    //IF THERE IS A PLATFORM SELECTED
    if (platformValue > 0) {
      filterPlatformFetchGames(9, page, platformValue).then((data) => {
        setGames(data);
      });
      return;
    }

    if (genreValue > 0) {
      fetchByGenre(9, page, genreValue).then((data) => {
        setGames(data);
      });
      return;
    }

    //IF THERE IS A SORT SELECTED
    if (sort !== "") {
      sortedFetchGames(9, page, sort).then((data) => {
        setGames(data);
      });
      return;
    }

    //IF THERE IS NO SORT AND FILTER OPTINS
    fetchGamesByPage(9, page).then((data) => {
      setGames(data);
    });
  }, [page, searchVal, platformValue, sort, genreValue]);

  useEffect(() => {
    setPage(1);
  }, [searchVal, platformValue]);

  console.log(platformValue);
  console.log(sort);
  console.log(genreValue);

  if (games) {
    return (
      <GameListPageContainer isOpen={isOpen}>
        <GameListContentWrapper>
          <ListOptionContainer>
            <ButtonContainer>
              <PrimaryButton
                buttonText={"Options"}
                onClick={() => setIsOpen(!isOpen)}
              />
            </ButtonContainer>
          </ListOptionContainer>
          {isOpen && (
            <SearchOptionsContainer>
              <SearchOption>
                <Dropdown
                  dropdownText={"Platforms"}
                  defaultOption={"All platforms"}
                  options={platforms}
                  state={platformValue}
                  setState={setPlatformValue}
                />
              </SearchOption>
              <SearchOption>
                <Dropdown
                  dropdownText={"Sort By"}
                  defaultOption={"Most Popular"}
                  options={sortOptions}
                  state={sort}
                  setState={setSort}
                />
              </SearchOption>
              <SearchOption>
                <Dropdown
                  dropdownText={"Genre"}
                  defaultOption={"All"}
                  options={genres}
                  state={genreValue}
                  setState={setGenreValue}
                />
              </SearchOption>
            </SearchOptionsContainer>
          )}
          <ListOfGames>
            <Suspense fallback={<h2>Loading...</h2>}>
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
                    ></GameCardSimple>
                  </GameContainer>
                );
              })}
            </Suspense>
          </ListOfGames>
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
