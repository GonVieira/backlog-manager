import styled from "styled-components";

interface BackgroundImg {
  backgroundImg: string;
}

interface ModalLogic {
  modalIsOpen: boolean;
}

export const ProfileBodyContainer = styled.div<ModalLogic>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #000000;
  height: 250%;
  width: 100%;
  flex-direction: column;
  padding-top: 100px;
  position: ${(props) => (props.modalIsOpen ? "fixed" : "relative")};
`;

export const ProfilePageFirstHalf = styled.div<BackgroundImg>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 30%;
  width: 100%;
  background-color: #171e22;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9)),
    url(${(props) => props.backgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ProfilePageSecondHalf = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 70%;
  width: 100%;
`;

export const ProfileBasicInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: 60%;
  margin: 2rem;

  //Laptops
  @media (max-width: 992px) {
    width: 80%;
  }

  //Tablets
  @media (max-width: 768px) {
    width: 90%;
  }

  //Mobile
  @media (max-width: 576px) {
    width: 95%;
  }
`;

export const ProfileImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 290px;
  height: auto;
  margin: 1rem;

  //Laptops
  @media (max-width: 992px) {
    width: 250px;
  }

  //Tablets
  @media (max-width: 768px) {
    width: 225px;
  }

  //Mobile
  @media (max-width: 576px) {
    width: 175px;
    margin: 0.2rem;
  }
`;

export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

export const ProfileBasicInfoNameAndBioContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 60%;
  margin: 1rem;
`;

export const UserNameAndOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 30%;
  margin-bottom: 1rem;
  flex-direction: row;

  h2 {
    font-size: 2.4rem;
    color: white;
    font-weight: 900;
    text-align: center;

    //Laptops
    @media (max-width: 992px) {
      font-size: 2.2rem;
    }

    //Tablets
    @media (max-width: 768px) {
      font-size: 1.9rem;
    }

    //Mobile
    @media (max-width: 576px) {
      font-size: 1.4rem;
    }
  }
`;

export const UserBioContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 70%;
  border-radius: 6px;
  background-color: rgba(43, 42, 51, 0.5);
  padding: 0.5rem;
  overflow: scroll;

  p {
    color: #fcebeb;
    font-size: 1.4rem;
    margin: 0.2rem;

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
      font-size: 1rem;
    }
  }
`;

export const UserOptionsButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 70%;
  width: 20%;
`;

export const UserStatsInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: 10%;
  flex-direction: row;

  //Big screens
  @media (max-width: 1200px) {
    width: 75%;
  }

  //Laptops
  @media (max-width: 992px) {
    width: 80%;
  }

  //Tablets
  @media (max-width: 768px) {
    width: 90%;
  }

  //Mobile
  @media (max-width: 576px) {
    width: 95%;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 90%;
`;

export const MyGamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: 90%;

  //Laptops
  @media (max-width: 992px) {
    width: 75%;
  }

  //Tablets
  @media (max-width: 768px) {
    width: 85%;
  }

  //Mobile
  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const MyGamesTitleContainer = styled.div`
  display: flex;
  height: 8%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  //Mobile
  @media (max-width: 576px) {
    width: 90%;
    height: 5%;
  }

  h2 {
    font-size: 2rem;
    color: white;
  }
`;

export const MyGamesContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 80%;
  width: 100%;
`;

export const NoGamesScreenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 100%;

  h2 {
    font-size: 2.5rem;
    color: #b12626;
  }
`;

export const ProfileGameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  height: 18%;
  margin: 1rem;
`;

export const ProfileGamesPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  height: 10%;

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
    width: 100%;
  }
`;

export const ProfilePageButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 100%;

  //Tablets
  @media (max-width: 768px) {
    width: 18%;
  }

  //Mobile
  @media (max-width: 576px) {
    width: 25%;
  }
`;

export const ProfilePageNumberTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 20%;

  h2 {
    color: white;
    font-size: 1.5rem;

    //Laptops
    @media (max-width: 992px) {
      font-size: 1.4rem;
    }

    //Tablets
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }

    //Mobile
    @media (max-width: 576px) {
      font-size: 1rem;
    }
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1004;
  background: rgba(0, 0, 0, 0.8);
`;

export const FiltersAndSortsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
`;
