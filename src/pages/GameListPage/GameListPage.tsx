import React, { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchGamesByPage, fetchGamesBySearch } from "../../api/gameFetch";
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
  const [platforms, setPlatforms] = useState([]);
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { searchVal } = useParams();

  const arraytest = ["Value 1", "Value 2", "Value 3", "Value 4", "Value 5"];

  useLayoutEffect(() => {
    if (searchVal) {
      fetchGamesBySearch(9, page, searchVal).then((data) => {
        setGames(data);
      });
      return;
    }
    fetchGamesByPage(9, page).then((data) => {
      setGames(data);
    });

    fetchPlatforms().then((data) => {
      setPlatforms(data);
    });
  }, [page, searchVal]);

  useEffect(() => {
    setPage(1);
  }, [searchVal]);

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
                />
              </SearchOption>
            </SearchOptionsContainer>
          )}
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
                  ></GameCardSimple>
                </GameContainer>
              );
            })}
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
