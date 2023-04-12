import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import UserStats from "../../components/UserStats/UserStats";
import {
  InfoContainer,
  ProfileBasicInfoContainer,
  ProfileBasicInfoNameAndBioContainer,
  ProfileBodyContainer,
  ProfileImg,
  ProfileImgContainer,
  ProfilePageFirstHalf,
  UserBioContainer,
  UserNameContainer,
  UserOptionsButtonContainer,
  UserOptionsContainer,
  UserStatsInfoContainer,
} from "./style";
import { fetchUserGamesById } from "../../api/userFetch";

interface GameProps {
  completed: boolean;
  slug: string;
  name: string;
  backgroundImage: string;
  platforms: string[];
  playtime: number;
  metacritic: number;
  _id: any;
}

const ProfilePage = () => {
  const user = useSelector((state: any) => state.user);
  const [games, setGames] = useState<GameProps[]>();
  const [completedGames, setCompletedGames] = useState<number>(0);
  const navigate = useNavigate();

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  useEffect(() => {
    if (user._id === null) {
      navigate("/");
      return;
    }

    fetchUserGamesById(user._id, user.token).then((data) => {
      setGames(data);
    });

  }, [user]);

  return user._id ? (
    <ProfileBodyContainer>
      <ProfilePageFirstHalf backgroundImg={user.backgroundImage}>
        <ProfileBasicInfoContainer>
          <ProfileImgContainer>
            <ProfileImg src={user.profileImage} />
          </ProfileImgContainer>
          <ProfileBasicInfoNameAndBioContainer>
            <UserNameContainer>
              <h2>{user.username}</h2>
            </UserNameContainer>
            <UserBioContainer>
              <p>Life is a circus and I'am the clown.</p>
            </UserBioContainer>
          </ProfileBasicInfoNameAndBioContainer>
          <UserOptionsContainer>
            <UserOptionsButtonContainer>
              <PrimaryButton buttonText={"Opt"} />
            </UserOptionsButtonContainer>
          </UserOptionsContainer>
        </ProfileBasicInfoContainer>
        <UserStatsInfoContainer>
          <InfoContainer>
            <UserStats infoText={"Completed "} valueText={"100 games."} />
          </InfoContainer>
          <InfoContainer>
            <UserStats infoText={"Backlogged "} valueText={"340 games."} />
          </InfoContainer>

          <InfoContainer>
            {games ? (
              <UserStats
                infoText={"Has a total of "}
                valueText={games.length + " games."}
              />
            ) : (
              <UserStats
                infoText={"Has a total of "}
                valueText={0 + " games."}
              />
            )}
          </InfoContainer>
        </UserStatsInfoContainer>
      </ProfilePageFirstHalf>
    </ProfileBodyContainer>
  ) : (
    <></>
  );
};

export default ProfilePage;
