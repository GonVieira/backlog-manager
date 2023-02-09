import styled from "styled-components";

interface MetacriticProps {
  rating: number;
}

interface HourProps {
  hours: number;
}

interface QualityProps {
  quality: number;
}

export const GameDetailsPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #171e22;
  height: 150%;
  width: 100%;
  flex-direction: column;
`;

export const GameDetailsContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 70%;
  flex-direction: column;
`;

export const GameDetailsTop = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40%;
  width: 100%;
  flex-direction: row;
`;

export const GameDetailsImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 100%;
`;

export const GameDetailsImg = styled.img`
  width: 100%;
  height: 90%;
  object-fit: cover;
  border-radius: 5px;
  border: 1px solid #171e22;
`;

export const GameDetailsInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 65%;
  height: 100%;
  flex-direction: column;
`;

export const GameNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;

  h1 {
    color: #287fc2;
    font-weight: bold;
    font-size: 2.3rem;
  }
`;

export const GameDetailsInfoBoxesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: row;
  width: 100%;
  height: 40%;
`;

export const GameDetailsInfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 80%;
  flex-direction: column;
  border-radius: 10px;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3));

  h2 {
    color: white;
  }
`;

export const MetacriticBox = styled(GameDetailsInfoBox)<MetacriticProps>`
  background-color: ${(props) =>
    props.rating >= 75
      ? "#66cc33"
      : props.rating >= 50
      ? "#ffcc33"
      : "#ff0000"};
`;

export const HoursInfoBox = styled(GameDetailsInfoBox)<HourProps>`
  background-color: ${(props) =>
    props.hours >= 75 ? "#ff0000" : props.hours >= 25 ? "#ffcc33" : "#66cc33"};
`;

export const QualityInfoBox = styled(GameDetailsInfoBox)<QualityProps>`
  background-color: ${(props) =>
    props.quality >= 1.0
      ? "#66cc33"
      : props.quality >= 0.5
      ? "#ffcc33"
      : "#ff0000"};
`;

export const SectionTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 10%;

  h2 {
    color: #287fc2;
    font-size: 2rem;
  }
`;

export const GameDescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  overflow: visible;

  p {
    color: white;
    font-size: 1.5rem;
  }
`;
