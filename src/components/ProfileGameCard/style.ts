import styled from "styled-components";

interface GameCardProps {
  backgroundImg: string;
  completed: boolean;
}

export const ProfileGameCardBody = styled.div<GameCardProps>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  height: 100%;
  width: 100%;
  padding: 0.6rem;
  background-color: #171e22;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)),
    url(${(props) => props.backgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;

  border: ${(props) =>
    props.completed === true ? "1px solid #FFD700" : "1px solid black"};

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)),
      url(${(props) => props.backgroundImg});
    cursor: pointer;
  }

  //Tablets
  @media (max-width: 768px) {
    padding: 0.5rem;
  }

  //Mobile
  @media (max-width: 576px) {
    padding: 0.4rem;
  }
`;

export const ProfileGameImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14%;
  height: 94%;
`;

export const ProfileGameImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  border: 1px solid #171e22;
`;

export const ProfileGameInformationsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 84%;
  height: 95%;
`;

export const ProfileGameTopInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 20%;
  align-items: center;
`;

export const ProfileGameNameContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 75%;
  height: 100%;

  h2 {
    padding-left: 1.5rem;
    font-size: 1.8rem;
    color: #ffa500;
    font-weight: bolder;

    //Laptops
    @media (max-width: 992px) {
      font-size: 1.4rem;
    }

    //Tablets
    @media (max-width: 768px) {
      font-size: 1.3rem;
      padding-left: 1rem;
    }

    //Mobile
    @media (max-width: 576px) {
      font-size: 1rem;
    }
  }
`;

export const RemoveButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 10%;
  height: 100%;
`;

export const RemoveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  cursor: pointer;
  border-radius: 5px;
  background-color: #b12626;
  font-size: 1.4rem;
  color: white;
  font-weight: 900;
  border: 0;
  padding: 0.9rem;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #b83b3b;
  }
`;

export const ProfileGameInfoBoxesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 75%;
  height: 60%;

  //Tablets
  @media (max-width: 768px) {
    width: 80%;
  }

  //Mobile
  @media (max-width: 576px) {
    width: 85%;
  }
`;

export const ProfileGameInfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28%;
  height: 75%;
  flex-direction: column;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4));
  border-radius: 5px;
  padding: 0.2rem;

  h2 {
    color: white;
    height: 25%;
    font-size: 1rem;
    margin: 0.8rem 0rem;

    //Laptops
    @media (max-width: 992px) {
      font-size: 0.9rem;
    }

    //Tablets
    @media (max-width: 768px) {
      font-size: 0.8rem;
    }

    //Mobile
    @media (max-width: 576px) {
      font-size: 0.7rem;
    }
  }
`;

export const ProfileGameButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 20%;
  padding: 0.2rem;

  //Big screens
  @media (max-width: 1200px) {
    width: 50%;
  }

  //Laptops
  @media (max-width: 992px) {
    width: 60%;
  }

  //Tablets
  @media (max-width: 768px) {
    width: 70%;
  }

  //Mobile
  @media (max-width: 576px) {
    width: 75%;
  }
`;
