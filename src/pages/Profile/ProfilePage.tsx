import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import UserStats from "../../components/UserStats/UserStats";
import {
  InfoContainer,
  ModalContainer,
  MyGamesContainer,
  MyGamesContentContainer,
  MyGamesTitleContainer,
  NoGamesScreenContainer,
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
import {
  fetchUserCompletedGames,
  fetchUserGamesById,
  fetchUserUncompletedGames,
} from "../../api/userFetch";
import ProfileGameCard from "../../components/ProfileGameCard/ProfileGameCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProfileEditModal from "../../components/ProfileEditModal/ProfileEditModal";
import { getCookie } from "../../utils/cookies";

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
  const completedFilter = useSelector(
    (state: any) => state.profileCompletedFilter
  );
  const [games, setGames] = useState<GameProps[]>();
  const [completedGames, setCompletedGames] = useState<GameProps[]>();
  const [uncompletedGames, setUncompletedGames] = useState<GameProps[]>();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesToDisplay, setGamesToDisplay] = useState<GameProps[]>();
  const gamesPerPage = 5;
  const [lastPage, setLastPage] = useState(0);
  const [editingOn, setEditingOn] = useState<boolean>(false);
  const loginToken = getCookie("token");

  useEffect(() => {
    if (user._id === null) {
      navigate("/");
      return;
    }
    fetchUserGamesById(user._id, loginToken).then((data) => {
      setGames(data);
    });

    fetchUserCompletedGames(user._id, loginToken).then((data) => {
      setCompletedGames(data.data.data[0].games);
    });

    fetchUserUncompletedGames(user._id, loginToken).then((data) => {
      setUncompletedGames(data.data.data[0].games);
    });
    
  }, [user._id, currentPage]);

  useEffect(() => {
    if (games) {
      //GET CURRENT GAMES TO SHOW
      const indexOfLastPost = currentPage * gamesPerPage;
      const indexOfFirstPost = indexOfLastPost - gamesPerPage;
      if (completedFilter === "all") {
        setGamesToDisplay(games.slice(indexOfFirstPost, indexOfLastPost));
        //GET LAST PAGE NUMBER
        let lastPageIndex = games.length / gamesPerPage;
        setLastPage(lastPageIndex);
      }
      if (completedFilter === "completed" && completedGames) {
        setGamesToDisplay(
          completedGames.slice(indexOfFirstPost, indexOfLastPost)
        );
        //GET LAST PAGE NUMBER
        let lastPageIndex = completedGames.length / gamesPerPage;
        setLastPage(lastPageIndex);
      }
      if (completedFilter === "uncompleted" && uncompletedGames) {
        setGamesToDisplay(
          uncompletedGames.slice(indexOfFirstPost, indexOfLastPost)
        );
        //GET LAST PAGE NUMBER
        let lastPageIndex = uncompletedGames.length / gamesPerPage;
        setLastPage(lastPageIndex);
      }
    }
  }, [games, currentPage, completedFilter]);

  useEffect(() => {
    setCurrentPage(1);
  }, [completedFilter]);

  return user._id ? (
    <ProfileBodyContainer modalIsOpen={editingOn}>
      {editingOn && (
        <ModalContainer>
          <ProfileEditModal setIsOpen={setEditingOn} />
        </ModalContainer>
      )}
      <ToastContainer />
      <ProfilePageFirstHalf backgroundImg={user.backgroundImage}>
        <ProfileBasicInfoContainer>
          <ProfileImgContainer>
            <ProfileImg src={user.profilePicture} />
          </ProfileImgContainer>
          <ProfileBasicInfoNameAndBioContainer>
            <UserNameContainer>
              <h2>{user.username}</h2>
            </UserNameContainer>
            <UserBioContainer>
              <p>{user.bio}</p>
            </UserBioContainer>
          </ProfileBasicInfoNameAndBioContainer>
          <UserOptionsContainer>
            <UserOptionsButtonContainer>
              <PrimaryButton
                buttonText={"Opt"}
                onClick={() => {
                  setEditingOn(!editingOn);
                  console.log(user);
                }}
              />
            </UserOptionsButtonContainer>
          </UserOptionsContainer>
        </ProfileBasicInfoContainer>
        <UserStatsInfoContainer>
          {completedGames ? (
            <InfoContainer>
              <UserStats
                infoText={"Completed "}
                valueText={completedGames.length + " games."}
                filterValue={"completed"}
                selectedValue={completedFilter}
              />
            </InfoContainer>
          ) : (
            <InfoContainer>
              <UserStats
                infoText={"Completed "}
                valueText={"0 games."}
                filterValue={"completed"}
                selectedValue={completedFilter}
              />
            </InfoContainer>
          )}

          <InfoContainer>
            {uncompletedGames ? (
              <UserStats
                infoText={"Backlogged "}
                valueText={uncompletedGames.length + " games."}
                filterValue={"uncompleted"}
                selectedValue={completedFilter}
              />
            ) : (
              <UserStats
                infoText={"Backlogged "}
                valueText={"0 games."}
                filterValue={"uncompleted"}
                selectedValue={completedFilter}
              />
            )}
          </InfoContainer>

          <InfoContainer>
            {games ? (
              <UserStats
                infoText={"Has a total of "}
                valueText={games.length + " games."}
                filterValue={"all"}
                selectedValue={completedFilter}
              />
            ) : (
              <UserStats
                infoText={"Has a total of "}
                valueText={"0 games."}
                filterValue={"all"}
                selectedValue={completedFilter}
              />
            )}
          </InfoContainer>
        </UserStatsInfoContainer>
      </ProfilePageFirstHalf>
      {gamesToDisplay ? (
        <ProfilePageSecondHalf>
          <MyGamesContainer>
            <MyGamesTitleContainer>
              <h2> User games: </h2>
            </MyGamesTitleContainer>
            {/* IF NEEDED 
            <FiltersAndSortsContainer></FiltersAndSortsContainer>
           */}
            {gamesToDisplay.length > 0 ? (
              <MyGamesContentContainer>
                {gamesToDisplay?.map((game) => (
                  <ProfileGameContainer>
                    <ProfileGameCard
                      userId={user._id}
                      token={loginToken}
                      slug={game.slug}
                      image={game.backgroundImage}
                      backgroundImage={game.backgroundImage}
                      name={game.name}
                      hours={game.playtime}
                      rating={game.metacritic}
                      completed={game.completed}
                      toast={toast}
                    />
                  </ProfileGameContainer>
                ))}
              </MyGamesContentContainer>
            ) : (
              <NoGamesScreenContainer>
                <h2>User has no games in this section!</h2>
              </NoGamesScreenContainer>
            )}
          </MyGamesContainer>
          {gamesToDisplay.length > 0 ? (
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
                {currentPage >= lastPage ? (
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
          ) : (
            <></>
          )}
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
