import React from "react";
import { useSelector } from "react-redux";
import { ProfileBodyContainer } from "./style";

const ProfilePage = () => {
  const user = useSelector((state: any) => state.user);
  
  return (
    <ProfileBodyContainer>
      <h1>Profile</h1>
    </ProfileBodyContainer>
  );
};

export default ProfilePage;
