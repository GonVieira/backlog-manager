import styled from "styled-components";

export const GameListPageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #171e22;
  height: 190%;
  width: 100%;
  flex-direction: column;
  padding-top: 100px;
`;

export const GameListContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 100%;
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
  padding: 1.2rem;

  //deskops
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }

  //Tablets
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95%;
    height: 75%;
  }

  //Mobile
  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const LoadingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 70%;
  padding-top: 2.4rem;
`;

export const GameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 95%;

  //Tablets
  @media (max-width: 768px) {
    height: 25%;
  }

  //Mobile
  @media (max-width: 576px) {
    height: 25%;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8%;

  //Mobile
  @media (max-width: 576px) {
  }
`;

export const PageButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13%;

  //Tablets
  @media (max-width: 768px) {
    width: 20%;
  }

  //Mobile
  @media (max-width: 576px) {
    width: 22%;
  }
`;

export const PageNumberTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 20%;

  h2 {
    color: white;
    font-size: 1.9rem;

    //Tablets
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    //Mobile
    @media (max-width: 576px) {
      font-size: 1rem;
    }
  }

  //Tablets
  @media (max-width: 768px) {
    justify-content: space-around;
  }

  //Mobile
  @media (max-width: 576px) {
  }
`;

export const SearchOptionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 80%;
  height: 8%;
  background-color: #2b2a33;
  border-radius: 5px;

  //Tablets
  @media (max-width: 768px) {
    width: 95%;
    height: 6%;
  }

  //Mobile
  @media (max-width: 576px) {
    width: 95%;
  }
`;

export const SearchOption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 50%;

  //Laptops
  @media (max-width: 992px) {
    width: 28%;
    height: 70%;
  }

  //Tablets
  @media (max-width: 768px) {
    width: 28%;
    height: 75%;
  }
`;

export const NotFoundErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 50%;

  h2 {
    font-size: 2rem;
    color: #ff3333;
  }
`;
