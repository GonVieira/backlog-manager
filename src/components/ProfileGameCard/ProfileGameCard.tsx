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
import { setGameAsCompleted } from "../../api/userFetch";

interface ProfileGameCardProps {
  userId: string;
  token: string;
  slug: string;
  image: string;
  backgroundImage: string;
  name: string;
  hours: number;
  rating: number;
  completed: boolean;
  toast: any;
}

const ProfileGameCard = ({
  userId,
  token,
  slug,
  image,
  backgroundImage,
  name,
  hours,
  rating,
  completed,
  toast,
}: ProfileGameCardProps) => {
  return (
    <ProfileGameCardBody backgroundImg={backgroundImage} completed={completed}>
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
          <PrimaryButton
            onClick={() => {
              setGameAsCompleted(userId, token, slug, true)
                .then((data) => {
                  if (data.status === 200) {
                    toast.success(name + " was successfully set as completed!");
                  }
                })
                .catch((error) => {
                  if (error.response.status === 409) {
                    toast.error(error.response.data.message);
                  }
                  toast.error(error.response.data);
                });
            }}
            buttonText="Set as completed."
          />
        </ProfileGameButtonContainer>
      </ProfileGameInformationsContainer>
    </ProfileGameCardBody>
  );
};

export default ProfileGameCard;
