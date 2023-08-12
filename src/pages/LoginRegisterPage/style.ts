import { HoursInfoBox } from "./../GameDetailsPage/style";
import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #171e22;
  height: 90%;
  width: 100%;
  padding-top: 100px;
  flex-direction: column;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 85%;
  flex-direction: column;

  //Tablets
  @media (max-width: 768px) {
    height: 95%;
  }

  //Mobile
  @media (max-width: 576px) {
    height: 100%;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50%;
  flex-direction: column;

  h2 {
    font-size: 1.5rem;
    color: #fff;
  }
`;

export const FormTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;

  //Mobile
  @media (max-width: 576px) {
    height: 10%;
  }

  h2 {
    color: white;
    font-size: 3rem;
    text-transform: capitalize;

    //Laptops
    @media (max-width: 992px) {
      font-size: 2.8rem;
    }

    //Tablets
    @media (max-width: 768px) {
      font-size: 2.6rem;
    }

    //Mobile
    @media (max-width: 576px) {
      font-size: 2rem;
    }
  }
`;

export const FormInputsContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 100%;
  flex-direction: column;
`;

export const SingleFormInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: 30%;

  //Laptops
  @media (max-width: 992px) {
    width: 40%;
  }

  //Tablets
  @media (max-width: 768px) {
    width: 50%;
  }

  //Mobile
  @media (max-width: 576px) {
    width: 70%;
  }
`;

export const FormConfirmationButtons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  flex-direction: row;
  width: 40%;

  //Laptops
  @media (max-width: 992px) {
    width: 45%;
  }

  //Tablets
  @media (max-width: 768px) {
    width: 50%;
  }

  //Mobile
  @media (max-width: 576px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const FormConfirmationButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;

  //Mobile
  @media (max-width: 576px) {
    height: 50%;
    width: 50%;
  }
`;
