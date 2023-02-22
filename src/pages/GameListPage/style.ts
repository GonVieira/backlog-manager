import styled from "styled-components";

interface isOpenProps {
  isOpen: boolean;
}

export const GameListPageContainer = styled.div<isOpenProps>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #171e22;
  height: ${(props) => (props.isOpen ? "230%" : "180%")};
  width: 100%;
  flex-direction: column;
`;

export const GameListContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  height: 95%;
  flex-direction: column;
`;

export const ListOptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5%;
`;

export const ButtonContainer = styled.div`
  width: 30%;
`;

export const ListOfGames = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 25px;
  width: 100%;
  height: 70%;
  padding: 1.3rem;
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
`;

export const PageButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13%;
`;

export const PageNumberTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 20%;

  h2 {
    color: white;
  }
`;

export const SearchOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 25px;
  width: 100%;
  height: 15%;
  padding: 1.3rem;
  border: 1px solid #287fc2;
  border-radius: 5px;
`;

export const SearchOption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 80%;
`;
