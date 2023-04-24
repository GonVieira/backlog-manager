import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import UserStats from "../../components/UserStats/UserStats";
import {
  InfoContainer,
  MyGamesContainer,
  MyGamesTitleContainer,
  ProfileBasicInfoContainer,
  ProfileBasicInfoNameAndBioContainer,
  ProfileBodyContainer,
  ProfileImg,
  ProfileImgContainer,
  ProfilePageFirstHalf,
  ProfilePageSecondHalf,
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

    if (games) {
      let completedGamesLength = 0;

      for (let i = 0; i < games.length; i++) {
        if (games[i].completed === true) {
          completedGamesLength++;
        }
      }
      setCompletedGames(completedGamesLength);
    }
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
            <UserStats
              infoText={"Completed "}
              valueText={completedGames + " games."}
            />
          </InfoContainer>

          <InfoContainer>
            {games ? (
              <UserStats
                infoText={"Backlogged "}
                valueText={games.length - completedGames + " games."}
              />
            ) : (
              <UserStats infoText={"Backlogged "} valueText={"0 games."} />
            )}
          </InfoContainer>

          <InfoContainer>
            {games ? (
              <UserStats
                infoText={"Has a total of "}
                valueText={games.length + " games."}
              />
            ) : (
              <UserStats infoText={"Has a total of "} valueText={"0 games."} />
            )}
          </InfoContainer>
        </UserStatsInfoContainer>
      </ProfilePageFirstHalf>
      <ProfilePageSecondHalf>
        <MyGamesContainer>
          <MyGamesTitleContainer>
            <h2>My games </h2>
          </MyGamesTitleContainer>
        </MyGamesContainer>
      </ProfilePageSecondHalf>
    </ProfileBodyContainer>
  ) : (
    <></>
  );
};

export default ProfilePage;
