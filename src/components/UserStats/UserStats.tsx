import React, { useState } from "react";
import { InfoText, TextDiv, UserStatsContainer, ValueText } from "./style";
import { useDispatch } from "react-redux";

interface Props {
  infoText: string;
  valueText: string;
  filterValue: string;
  selectedValue: string;
}

const UserStats = ({
  infoText,
  valueText,
  filterValue,
  selectedValue,
}: Props) => {
  const dispatch = useDispatch();

  let isSelected = filterValue === selectedValue;

  return (
    <UserStatsContainer
      isSelected={isSelected}
      onClick={() =>
        dispatch({ type: "SET_PROFILE_COMPLETED", payload: filterValue })
      }
    >
      <TextDiv>
        <InfoText>
          {infoText}
          <ValueText>{valueText}</ValueText>
        </InfoText>
      </TextDiv>
    </UserStatsContainer>
  );
};

export default UserStats;
