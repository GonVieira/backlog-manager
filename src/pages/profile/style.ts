import styled from "styled-components";

interface BackgroundImg {
  backgroundImg: string;
}

export const ProfileBodyContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #000000;
  height: 175%;
  width: 100%;
  flex-direction: column;
`;

export const ProfilePageFirstHalf = styled.div<BackgroundImg>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 55%;
  width: 100%;
  background-color: #171e22;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)),
    url(${(props) => props.backgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
  height: 55%;
  padding: 5rem;
`;

export const UserNameContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 30%;
  h2 {
    font-size: 2.2rem;
    color: white;
    font-weight: 900;
  }
`;

export const UserBioContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 70%;

  p {
    color: #fcebeb;
    font-size: 1.4rem;
  }
`;

export const UserOptionsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 10%;
  height: 50%;
`;

export const UserOptionsButtonContainer = styled.div`
  height: 20%;
  width: 95%;
`;

export const UserStatsInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 70%;
  height: 25%;
  flex-direction: row;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 30%;
`
