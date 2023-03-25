import React from "react";
import { InfoText, TextDiv, UserStatsContainer, ValueText } from "./style";

interface Props {
  infoText: string;
  valueText: string;
}

const UserStats = ({ infoText, valueText }: Props) => {
  return (
    <UserStatsContainer>
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
