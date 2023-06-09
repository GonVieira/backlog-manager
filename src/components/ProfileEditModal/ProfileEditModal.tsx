import React, { useEffect, useRef, useState } from "react";
import {
  CloseButtonContainer,
  ConfirmButtonContainer,
  FormContentContainer,
  FormDiv,
  FormTitleContainer,
  ProfileEditModalContainer,
  ProfileEditModalWrapper,
  StyledCloseButton,
  StyledTextArea,
  TitleAndCloseButtonContainer,
} from "./style";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import PrimaryInput from "../PrimaryInput/PrimaryInput";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../api/userFetch";
import { toast } from "react-toastify";
import { getCookie } from "../../utils/cookies";

interface ProfileEditModalProps {
  setIsOpen: any;
}

interface UserEditsProps {
  profilePicture: string;
  backgroundImage: string;
  userName: string;
  bio: string;
}

const ProfileEditModal = ({ setIsOpen }: ProfileEditModalProps) => {
  const wrapperRef = useRef(null);
  const user = useSelector((state: any) => state.user);
  const [userValues, setUserValues] = useState<UserEditsProps>({
    profilePicture: user.profilePicture,
    userName: user.username,
    backgroundImage: user.backgroundImage,
    bio: user.bio,
  });
  const dispatch = useDispatch();
  const loginToken = getCookie("token");

  const onInputChange = (e: any) => {
    const { name, value } = e.target;
    setUserValues({ ...userValues, [name]: value });
  };

  //DETECT MOUSE CLICKS OUTSIDE
  const useOutsideAlerter = (ref: any) => {
    useEffect(() => {
      //CLICKED OUTSIDE OF ELEMENT
      const handler = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false);
        }
      };

      //BINDE EVENT LISTENER
      document.addEventListener("mousedown", handler);
      return () => {
        // UNBIND EVENT LISTENER ON CLEANUP
        document.removeEventListener("mousedown", handler);
      };
    }, [ref]);
  };

  const updateUserValues = () => {
    console.log(userValues);
    updateUser(user._id, loginToken, userValues)
      .then((data) => {
        if (data.status === 200) {
          toast.success(data.data.message);

          dispatch({
            type: "SET_USER",
            payload: data.data.result,
          });
        }
      })
      .catch((error) => {
        toast.error(error.response.data);
      });

    console.log(user);
    setIsOpen(false);
  };

  useOutsideAlerter(wrapperRef);

  return (
    <ProfileEditModalContainer ref={wrapperRef}>
      <ProfileEditModalWrapper>
        <TitleAndCloseButtonContainer>
          <h2>EDITING PROFILE</h2>
          <CloseButtonContainer>
            <StyledCloseButton onClick={() => setIsOpen(false)}>
              X
            </StyledCloseButton>
          </CloseButtonContainer>
        </TitleAndCloseButtonContainer>
        <FormContentContainer>
          <FormDiv>
            <FormTitleContainer>
              <p>Profile Image</p>
            </FormTitleContainer>
            <PrimaryInput
              type="text"
              placeholder="Profile image"
              value={userValues.profilePicture}
              name="profilePicture"
              onChange={onInputChange}
              required={false}
            />
          </FormDiv>
          <FormDiv>
            <FormTitleContainer>
              <p>Background Image</p>
            </FormTitleContainer>
            <PrimaryInput
              type="text"
              placeholder="Background image"
              value={userValues.backgroundImage}
              name="backgroundImage"
              onChange={onInputChange}
              required={false}
            />
          </FormDiv>
          <FormDiv>
            <FormTitleContainer>
              <p>Username</p>
            </FormTitleContainer>
            <PrimaryInput
              type="text"
              placeholder="UserName"
              value={userValues.userName}
              name="userName"
              onChange={onInputChange}
              required={false}
            />
          </FormDiv>
          <FormDiv>
            <FormTitleContainer>
              <p>Biography</p>
            </FormTitleContainer>
            <StyledTextArea
              value={userValues.bio}
              placeholder="Biography"
              name="bio"
              onChange={onInputChange}
              required={false}
            />
          </FormDiv>
        </FormContentContainer>
        <ConfirmButtonContainer>
          <PrimaryButton
            onClick={() => updateUserValues()}
            buttonText={"Confirm changes"}
          />
        </ConfirmButtonContainer>
      </ProfileEditModalWrapper>
    </ProfileEditModalContainer>
  );
};

export default ProfileEditModal;
