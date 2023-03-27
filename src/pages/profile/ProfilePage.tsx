import React, { useEffect } from "react";
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

const ProfilePage = () => {
  const user = useSelector((state: any) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user._id === null) {
      console.log("No user Logged in");
      navigate("/");
    }

    console.log(user);
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
            <UserStats infoText={"Has a total of "} valueText={"440 games."} />
          </InfoContainer>
        </UserStatsInfoContainer>
      </ProfilePageFirstHalf>
    </ProfileBodyContainer>
  ) : (
    <></>
  );
};

export default ProfilePage;
