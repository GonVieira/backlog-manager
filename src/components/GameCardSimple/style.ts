import styled from "styled-components";

export const SimpleGameCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding: 0.2rem;
  background-color: gray;
`;

export const GameImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 90%;
`;

export const GameImg = styled.img`
    width: 100%;
    height: 95%;
    object-fit: cover;
`


export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 100%;
  flex-direction: column;
`;

export const GameNameContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  height: 15%;
`;

export const GameInfoBoxesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60%;
  flex-direction: row;
`;

export const GameInfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33%;
  height: 80%;
  flex-direction: column;
  text-align: center;

  h2 {
    color: white;
    height: 50%
  }

  h3 {
    color: white;
    height: 50%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 15%;
`;
