import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #171e22;
  height: 100%;
  width: 100%;
  flex-direction: column;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80%;
  flex-direction: column;
`;

export const FormTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;

  h2 {
    color: white;
    font-size: 3rem;
    text-transform: capitalize;
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

export const FormConfirmationButtons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  flex-direction: row;
  width: 40%;
`;

export const FormConfirmationButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
`;
