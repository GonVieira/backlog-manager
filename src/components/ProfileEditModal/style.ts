import styled from "styled-components";

export const ProfileEditModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 85%;
  position: fixed;
  overflow: hidden;
  background-color: #2b2a33;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1006;

  //Laptops
  @media (max-width: 992px) {
    width: 45%;
  }

  //Tablets
  @media (max-width: 768px) {
    width: 60%;
  }

  //Mobile
  @media (max-width: 576px) {
    width: 75%;
    height: 80%;
    top: 55%;
  }
`;

export const ProfileEditModalWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 85%;
  height: 95%;
  flex-direction: column;

  //Tablets
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const TitleAndCloseButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
  flex-direction: row;

  h2 {
    color: #287fc2;
    font-size: 1.5rem;

    //Tablets
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }

    //Mobile
    @media (max-width: 576px) {
      font-size: 1rem;
    }
  }
`;

export const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 15%;
  position: absolute;
  right: 20px;

  //Tablets
  @media (max-width: 768px) {
    right: 15px;
    width: 20%;
  }

  //Mobile
  @media (max-width: 576px) {
    right: 10px;
  }
`;

export const StyledCloseButton = styled.button`
  display: inline-block;
  border-radius: 4px;
  background-color: #b12626;
  color: #ffffff;
  text-align: center;
  font-size: 1.2rem;
  width: 50%;
  height: 30%;
  border: none;
  font-weight: bold;
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    background-color: #cc2d2d;
  }
`;

export const FormContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 90%;
`;

export const ConfirmButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 10%;
`;

export const FormDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  height: 20%;
  flex-direction: column;
  margin-bottom: 0.5rem;

  //Mobile
  @media (max-width: 576px) {
    margin-bottom: 0.2rem;
  }
`;

export const FormTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 10%;

  p {
    color: #62afda;
    font-weight: bolder;
    font-size: 1rem;
    margin: 0;

    //Tablets
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    //Mobile
    @media (max-width: 576px) {
      font-size: 0.8rem;
    }
  }
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  background-color: #383740;
  border: none;
  padding: 10px 5px;
  color: white;
  font-size: 1.3rem;
  margin: 1rem;
  resize: none;
  border-radius: 4px;

  //Tablets
  @media (max-width: 768px) {
    font-size: 1rem;
  }

  //Mobile
  @media (max-width: 576px) {
    font-size: 0.9rem;
    margin: 0.5rem;
  }

  &:focus {
    outline: none;
  }
`;
