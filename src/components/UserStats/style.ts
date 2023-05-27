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
  padding: 0.1rem;
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
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;

  //Big screens
  @media (max-width: 1200px) {
    font-size: 1.3rem;
  }

  //Laptops
  @media (max-width: 992px) {
    font-size: 1.2rem;
  }

  //Tablets
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  //Mobile
  @media (max-width: 576px) {
    font-size: 0.9rem;
  }
`;

export const ValueText = styled.span`
  color: #287fc2;
  font-size: 1.2rem;
  font-weight: bolder;
  text-align: center;

  //Big screens
  @media (max-width: 1200px) {
    font-size: 1.3rem;
  }

  //Laptops
  @media (max-width: 992px) {
    font-size: 1.2rem;
  }

  //Tablets
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  //Mobile
  @media (max-width: 576px) {
    font-size: 0.9rem;
  }
`;
