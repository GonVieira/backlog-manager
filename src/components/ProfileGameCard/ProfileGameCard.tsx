import React from "react";
import {
    ProfileGameButtonContainer,
  ProfileGameCardBody,
  ProfileGameImageContainer,
  ProfileGameImg,
  ProfileGameInfoBox,
  ProfileGameInfoBoxesContainer,
  ProfileGameInformationsContainer,
  ProfileGameNameContainer,
  ProfileGameTopInfoContainer,
  RemoveButton,
  RemoveButtonContainer,
} from "./style";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

interface ProfileGameCardProps {
  slug: string;
  image: string;
  backgroundImage: string;
  name: string;
  hours: number;
  rating: number;
}

const ProfileGameCard = ({
  slug,
  image,
  backgroundImage,
  name,
  hours,
  rating,
}: ProfileGameCardProps) => {
  return (
    <ProfileGameCardBody backgroundImg={backgroundImage}>
      <ProfileGameImageContainer>
        <ProfileGameImg src={image} />
      </ProfileGameImageContainer>
      <ProfileGameInformationsContainer>
        <ProfileGameTopInfoContainer>
          <ProfileGameNameContainer>
            <h2>{name}</h2>
          </ProfileGameNameContainer>
          <RemoveButtonContainer>
            <RemoveButton>X</RemoveButton>
          </RemoveButtonContainer>
        </ProfileGameTopInfoContainer>
        <ProfileGameInfoBoxesContainer>
          <ProfileGameInfoBox>
            <h2>Time</h2>
            {hours === 0 ? <h2>NA</h2> : <h2>{hours} H</h2>}
          </ProfileGameInfoBox>
          <ProfileGameInfoBox>
            <h2>Metacritic</h2>
            {rating ? <h2>{rating}</h2> : <h2>NA</h2>}
          </ProfileGameInfoBox>
          <ProfileGameInfoBox>
            <h2>Quality / Hour</h2>
            {hours === 0 ? (
              <h2>NA</h2>
            ) : rating ? (
              <h2>{(rating / hours).toFixed(2)}</h2>
            ) : (
              <h2>NA</h2>
            )}
          </ProfileGameInfoBox>
        </ProfileGameInfoBoxesContainer>
        <ProfileGameButtonContainer>
            <PrimaryButton buttonText="Set as completed."/>
        </ProfileGameButtonContainer>
      </ProfileGameInformationsContainer>
    </ProfileGameCardBody>
  );
};

export default ProfileGameCard;
