import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import UserStats from "../../components/UserStats/UserStats";
import {
  InfoContainer,
  MyGamesContainer,
  MyGamesContentContainer,
  MyGamesTitleContainer,
  ProfileBasicInfoContainer,
  ProfileBasicInfoNameAndBioContainer,
  ProfileBodyContainer,
  ProfileGameContainer,
  ProfileGamesPaginationContainer,
  ProfileImg,
  ProfileImgContainer,
  ProfilePageButtonContainer,
  ProfilePageFirstHalf,
  ProfilePageNumberTextContainer,
  ProfilePageSecondHalf,
  UserBioContainer,
  UserNameContainer,
  UserOptionsButtonContainer,
  UserOptionsContainer,
  UserStatsInfoContainer,
} from "./style";
import { fetchUserGamesById } from "../../api/userFetch";
import ProfileGameCard from "../../components/ProfileGameCard/ProfileGameCard";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesToDisplay, setGamesToDisplay] = useState<GameProps[]>();

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

  useEffect(() => {
    if (games) {
      //GET CURRENT GAMES TO SHOW
      const indexOfLastPost = currentPage * 4;
      const indexOfFirstPost = indexOfLastPost - 4;
      setGamesToDisplay(games.slice(indexOfFirstPost, indexOfLastPost));
    }
  }, [games, currentPage]);

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
      {gamesToDisplay ? (
        <ProfilePageSecondHalf>
          <MyGamesContainer>
            <MyGamesTitleContainer>
              <h2> My games </h2>
            </MyGamesTitleContainer>
            <MyGamesContentContainer>
              {gamesToDisplay?.map((game) => (
                <ProfileGameContainer>
                  <ProfileGameCard
                    slug={game.slug}
                    image={game.backgroundImage}
                    backgroundImage={game.backgroundImage}
                    name={game.name}
                    hours={game.playtime}
                    rating={game.metacritic}
                  />
                </ProfileGameContainer>
              ))}
            </MyGamesContentContainer>
          </MyGamesContainer>
          <ProfileGamesPaginationContainer>
            <ProfilePageButtonContainer>
              {currentPage === 1 ? (
                <></>
              ) : (
                <PrimaryButton
                  buttonText={"Previous"}
                  onClick={() =>
                    setCurrentPage((currentPage) => currentPage - 1)
                  }
                />
              )}
            </ProfilePageButtonContainer>
            <ProfilePageNumberTextContainer>
              <h2>Page: {currentPage}</h2>
            </ProfilePageNumberTextContainer>
            <ProfilePageButtonContainer>
              {gamesToDisplay.length < 4 ? (
                <></>
              ) : (
                <PrimaryButton
                  buttonText={"Next"}
                  onClick={() => {
                    setCurrentPage((currentPage) => currentPage + 1);
                  }}
                />
              )}
            </ProfilePageButtonContainer>
          </ProfileGamesPaginationContainer>
        </ProfilePageSecondHalf>
      ) : (
        <></>
      )}
    </ProfileBodyContainer>
  ) : (
    <></>
  );
};

export default ProfilePage;
