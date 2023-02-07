import styled from "styled-components";

interface BackGroundImageProps {
  backgroundImg: string;
}

export const SimpleGameCardContainer = styled.div<BackGroundImageProps>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding: 0.4rem;
  background-color: #171e22;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)),
    url(${(props) => props.backgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)),
      url(${(props) => props.backgroundImg});
    cursor: pointer;
  }
`;

export const GameImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32%;
  height: 90%;
`;

export const GameImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65%;
  height: 100%;
  flex-direction: column;
`;

export const GameNameContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  height: 15%;

  h2 {
    color: white;
    font-size: 1.6rem;
    font-weight: 800;
  }
`;

export const GameInfoBoxesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60%;
  flex-direction: row;
`;

export const GameInfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 70%;
  flex-direction: column;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4));
  border-radius: 5px;
  padding: 0.2rem;

  h2 {
    color: white;
    height: 25%;
    font-size: 1.2rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 15%;
`;
