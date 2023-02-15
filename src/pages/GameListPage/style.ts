import styled from "styled-components";

export const GameListPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #171e22;
  height: 180%;
  width: 100%;
  flex-direction: column;
`;

export const GameListContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  height: 100%;
  flex-direction: column;
`;

export const ListOptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8%;
`;

export const ButtonContainer = styled.div`
  width: 30%;
`

export const ListOfGames = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 25px;
  width: 100%;
  height: 70%;
`;

export const GameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8%;
`

export const PageButtonContainer = styled.div`
  width: 20%;
`
export const PageNumberTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 20%;

  h2 {
    color: white;
  }
`
