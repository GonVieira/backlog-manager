import React, { useLayoutEffect, useState } from "react";
import { fetchGamesByPage } from "../../api/gameFetch";
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
} from "./style";

const GameListPage = () => {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);

  useLayoutEffect(() => {
    fetchGamesByPage(9, page).then((data) => {
      setGames(data);
    });
  }, [page]);

  return (
    <GameListPageContainer>
      <GameListContentWrapper>
        <ListOptionContainer>
          <ButtonContainer>
            <PrimaryButton buttonText={"Options"} />
          </ButtonContainer>
        </ListOptionContainer>
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
                onClick={() => setPage((page) => page + 1)}
              />
            )}
          </PageButtonContainer>
        </PaginationContainer>
      </GameListContentWrapper>
    </GameListPageContainer>
  );
};

export default GameListPage;
