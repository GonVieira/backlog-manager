import styled from "styled-components";

interface UserStatsContainerProps {
  isSelected: boolean;
}

export const UserStatsContainer = styled.div<UserStatsContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #2b2a33;
  flex-direction: row;
  border-radius: 5px;
  border: ${(props) =>
    props.isSelected === true ? "1px solid #287fc2" : "1px solid black"};

  &:hover {
    cursor: pointer;
    background-color: #34343b;
  }
`;

export const TextDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const InfoText = styled.p`
  color: white;
  font-size: 1.4rem;
  font-weight: bold;
`;

export const ValueText = styled.span`
  color: #287fc2;
  font-size: 1.4rem;
  font-weight: bolder;
`;
