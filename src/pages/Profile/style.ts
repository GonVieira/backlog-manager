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
  position: ${(props) => props.modalIsOpen ? 'fixed' : 'relative'};
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
`;

export const ProfileImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: auto;
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
  padding: 5rem;
`;

export const UserNameContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 30%;
  margin-bottom: 1rem;

  h2 {
    font-size: 2.4rem;
    color: white;
    font-weight: 900;
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

  p {
    color: #fcebeb;
    font-size: 1.4rem;
  }
`;

export const UserOptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 10%;
  height: 50%;
  padding-top: 0.4rem;
`;

export const UserOptionsButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  width: 90%;
`;

export const UserStatsInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: 10%;
  flex-direction: row;
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
`;

export const MyGamesTitleContainer = styled.div`
  display: flex;
  height: 8%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

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
  width: 50%;
  height: 10%;
`;

export const ProfilePageButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13%;
  height: 100%;
`;

export const ProfilePageNumberTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 20%;

  h2 {
    color: white;
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
