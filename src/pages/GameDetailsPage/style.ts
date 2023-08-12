import styled from "styled-components";

interface PageSize {
  isPlayabelOnPc?: boolean;
}

interface MetacriticProps {
  rating: number;
}

interface HourProps {
  hours: number;
}

interface QualityProps {
  quality: number;
}

interface BackgroundImg {
  backgroundImg: string;
}

export const GameDetailsPageContainer = styled.div<PageSize>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #171e22;
  height: ${(props) => (props.isPlayabelOnPc ? "280%" : "240%")};
  width: 100%;
  flex-direction: column;
  padding-top: 120px;
`;

export const GameDetailsContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 70%;
  flex-direction: column;

  //Laptops
  @media (max-width: 992px) {
    width: 75%;
  }

  //Tablets
  @media (max-width: 768px) {
    width: 80%;
  }

  //Mobile
  @media (max-width: 576px) {
    width: 90%;
  }
`;

export const GameDetailsTop = styled.div<BackgroundImg>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30%;
  width: 100%;
  flex-direction: row;
  background-color: #171e22;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)),
    url(${(props) => props.backgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  padding: 2rem;

  //Tablets
  @media (max-width: 768px) {
    padding: 1rem;
  }

  //Mobile
  @media (max-width: 576px) {
    padding: 0.5rem;
  }
`;

export const GameDetailsImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28%;
  height: 80%;
  //Tablets
  @media (max-width: 768px) {
    width: 35%;
  }
`;

export const GameDetailsImg = styled.img`
  width: 100%;
  height: 90%;
  object-fit: cover;
  border-radius: 5px;
`;

export const GameDetailsInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 65%;
  height: 80%;
  flex-direction: column;
`;

export const GameNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;

  h1 {
    color: white;
    font-weight: bold;
    text-align: center;
    font-size: 2.3rem;

    //Laptops
    @media (max-width: 992px) {
      font-size: 2rem;
    }

    //Tablets
    @media (max-width: 768px) {
      font-size: 1.7rem;
    }

    //Mobile
    @media (max-width: 576px) {
      font-size: 1.5rem;
    }
  }
`;

export const GameDetailsInfoBoxesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 40%;

  //Tablets
  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    width: 90%;
  }
`;

export const GameDetailsInfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28%;
  height: 80%;
  flex-direction: column;
  border-radius: 10px;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3));
  padding: 0.4rem;

  //Tablets
  @media (max-width: 768px) {
    flex-direction: row;
    height: 30%;
    width: 85%;
    margin: 0.3rem;
    justify-content: space-around;
    padding: 0.2rem;
  }

  h2 {
    color: white;
    text-align: center;
    font-size: 1.3rem;

    //Laptops
    @media (max-width: 992px) {
      font-size: 1.2rem;
    }

    //Tablets
    @media (max-width: 768px) {
      font-size: 1.3rem;
    }

    //Mobile
    @media (max-width: 576px) {
      font-size: 1.1rem;
    }
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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  width: 45%;

  //Tablets
  @media (max-width: 992px) {
    width: 70%;
  }

  //Mobile
  @media (max-width: 576px) {
    width: 85%;
  }
`;

export const SectionTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 6%;

  h2 {
    color: #287fc2;
    font-size: 2rem;

    //Laptops
    @media (max-width: 992px) {
      font-size: 1.8rem;
    }

    //Tablets
    @media (max-width: 768px) {
      font-size: 1.7rem;
    }

    //Mobile
    @media (max-width: 576px) {
      font-size: 1.6rem;
    }
  }
`;

export const GameDescriptionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  min-height: 15%;
  max-height: 30%;
  flex-direction: column;
  overflow: scroll;

  p {
    color: white;
    font-size: 1.5rem;
    margin-top: 0.9rem;

    //Tablets
    @media (max-width: 768px) {
      font-size: 1.3rem;
    }

    //Mobile
    @media (max-width: 576px) {
      font-size: 1.2rem;
    }
  }

  h3 {
    color: #287fc2;
    font-size: 1.6rem;

    //Tablets
    @media (max-width: 768px) {
      font-size: 1.4rem;
    }

    //Mobile
    @media (max-width: 576px) {
      font-size: 1.3rem;
    }
  }
`;

export const GameMinorInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 25px;
  width: 100%;
  height: 30%;

  //Mobile
  @media (max-width: 576px) {
    grid-gap: 10px;
  }
`;

export const GameMinorInfoBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 80%;
  height: auto;
  flex-direction: column;

  h1 {
    color: #287fc2;
    font-size: 1.4rem;

    //Laptops
    @media (max-width: 992px) {
      font-size: 1.3rem;
    }

    //Tablets
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }

    //Mobile
    @media (max-width: 576px) {
      font-size: 1.1rem;
    }
  }
`;

export const GameMinorInfoContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  flex-direction: column;

  h2 {
    color: white;
    font-size: 1.2rem;
    margin-top: 0.5rem;

    //Tablets
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }

    //Mobile
    @media (max-width: 576px) {
      font-size: 1rem;
    }
  }
`;

export const GameReleaseDate = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  width: 200%;
  height: 50%;

  h1 {
    color: #287fc2;
    font-size: 1.5rem;

    //Laptops
    @media (max-width: 992px) {
      font-size: 1.4rem;
    }

    //Tablets
    @media (max-width: 768px) {
      font-size: 1.3rem;
    }

    //Mobile
    @media (max-width: 576px) {
      font-size: 1.2rem;
    }
  }

  h2 {
    color: white;
    font-size: 1.5rem;

    //Laptops
    @media (max-width: 992px) {
      font-size: 1.4rem;
    }

    //Tablets
    @media (max-width: 768px) {
      font-size: 1.3rem;
    }

    //Mobile
    @media (max-width: 576px) {
      font-size: 1.2rem;
    }
  }
`;

export const GameRequirements = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 20%;
  width: 100%;
  flex-direction: row;

  //Tablets
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const GameRequirementColumn = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 45%;
  max-height: 80%;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;

  //Tablets
  @media (max-width: 768px) {
    width: 100%;
    max-height: 45%;
  }

  p {
    white-space: pre-line;
    color: white;
    font-size: 1.3rem;

    //Tablets
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }

    //Mobile
    @media (max-width: 576px) {
      font-size: 1.1rem;
    }
  }
`;

export const LoadingOrNotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #171e22;

  h2 {
    color: white;
    font-size: 4rem;

    //Laptops
    @media (max-width: 992px) {
      font-size: 3.8rem;
    }

    //Tablets
    @media (max-width: 768px) {
      font-size: 3.6rem;
    }

    //Mobile
    @media (max-width: 576px) {
      font-size: 3.2rem;
    }
  }
`;

export const GoBackButtonContainer = styled.div`
  display: flex;
  position: fixed;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
  height: 5%;
  left: 30px;
  top: 120px;

  //Laptops
  @media (max-width: 992px) {
    left: 15px;
  }

  //Tablets
  @media (max-width: 768px) {
    display: none;
  }
`;

export const GoBackButton = styled.div`
  width: 5%;
`;
