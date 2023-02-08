import React from "react";
import { useParams } from "react-router-dom";
import { GameDetailsPageContainer } from "./style";

const GameDetailsPage = () => {
  const {id} = useParams();

  console.log(id);

  return (
    <GameDetailsPageContainer>
      <h2>GAME DETAILS PAGE</h2>
    </GameDetailsPageContainer>
  );
};

export default GameDetailsPage;
