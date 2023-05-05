import React, { useEffect, useState } from "react";
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
import {
  deleteGameFromLibrary,
  updateGameCompletedStatus,
} from "../../api/userFetch";

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
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    setIsCompleted(completed);
  }, [name]);

  return (
    <ProfileGameCardBody
      backgroundImg={backgroundImage}
      completed={isCompleted}
    >
      <ProfileGameImageContainer>
        <ProfileGameImg src={image} />
      </ProfileGameImageContainer>
      <ProfileGameInformationsContainer>
        <ProfileGameTopInfoContainer>
          <ProfileGameNameContainer>
            <h2>{name}</h2>
          </ProfileGameNameContainer>
          <RemoveButtonContainer>
            <RemoveButton
              onClick={() => {
                deleteGameFromLibrary(userId, token, slug).then((data) => {
                  if (data.status === 200) {
                    toast.success(
                      name + " successfully removed from your backlog."
                    );
                  }
                });
              }}
            >
              X
            </RemoveButton>
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
          {isCompleted === true ? (
            <PrimaryButton
              onClick={() => {
                updateGameCompletedStatus(userId, token, slug, false)
                  .then((data) => {
                    if (data.status === 200) {
                      toast.success(
                        name +
                          " was successfully removed from the completed category!"
                      );
                    }
                    setIsCompleted(false);
                  })
                  .catch((error) => {
                    if (error.response.status === 409) {
                      toast.error(error.response.data.message);
                    }
                    toast.error(error.response.data);
                  });
              }}
              buttonText="Set as not completed!"
              color="#871616"
            />
          ) : (
            <PrimaryButton
              onClick={() => {
                updateGameCompletedStatus(userId, token, slug, true)
                  .then((data) => {
                    if (data.status === 200) {
                      toast.success(
                        name + " was successfully set as completed!"
                      );
                    }
                    setIsCompleted(true);
                  })
                  .catch((error) => {
                    if (error.response.status === 409) {
                      toast.error(error.response.data.message);
                    }
                    toast.error(error.response.data);
                  });
              }}
              buttonText="Set as completed!"
            />
          )}
        </ProfileGameButtonContainer>
      </ProfileGameInformationsContainer>
    </ProfileGameCardBody>
  );
};

export default ProfileGameCard;
