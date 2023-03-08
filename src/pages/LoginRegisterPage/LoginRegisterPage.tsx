import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import PrimaryInput from "../../components/PrimaryInput/PrimaryInput";
import {
  FormConfirmationButton,
  FormConfirmationButtons,
  FormContainer,
  FormInputsContainer,
  FormTitleContainer,
  PageContainer,
} from "./style";

interface Props {
  type: string;
}

interface userProps {
  userName: string;
  email: string;
  password: string;
  passwordVerify: string;
}

const LoginPage = ({ type }: Props) => {
  const navigate = useNavigate();
  const [userValues, setUserValues] = useState<userProps>({
    userName: "",
    email: "",
    password: "",
    passwordVerify: "",
  });

  const onInputChange = (e: any) => {
    const { name, value } = e.target;
    setUserValues({ ...userValues, [name]: value });
  };

  return type === "login" ? (
    <PageContainer>
      <FormContainer>
        <FormTitleContainer>
          <h2>User {type}</h2>
        </FormTitleContainer>
        <FormInputsContainer>
          <PrimaryInput
            type="text"
            placeholder="Email"
            value={userValues.email}
            name="email"
            onChange={onInputChange}
            required={true}
          />
          <PrimaryInput
            type="password"
            placeholder="Password"
            value={userValues.password}
            name="password"
            onChange={onInputChange}
            required={true}
          />
        </FormInputsContainer>
        <FormConfirmationButtons>
          <FormConfirmationButton>
            <PrimaryButton
              buttonText={"Login"}
              onClick={() => {
                console.log("Login backend in progress.");
              }}
            />
          </FormConfirmationButton>
          <FormConfirmationButton>
            <PrimaryButton
              buttonText={"Sign up"}
              onClick={() => {
                navigate("/register");
              }}
              color={"#2b2a33"}
            />
          </FormConfirmationButton>
        </FormConfirmationButtons>
      </FormContainer>
    </PageContainer>
  ) : (
    <PageContainer>
      <FormContainer>
        <FormTitleContainer>
          <h2>User {type}</h2>
        </FormTitleContainer>
        <FormInputsContainer>
          <PrimaryInput
            type="text"
            placeholder="Email"
            value={userValues.email}
            name="email"
            onChange={onInputChange}
            required={true}
          />
          <PrimaryInput
            type="text"
            placeholder="UserName"
            value={userValues.userName}
            name="userName"
            onChange={onInputChange}
            required={true}
          />
          <PrimaryInput
            type="password"
            placeholder="Password"
            value={userValues.password}
            name="password"
            onChange={onInputChange}
            required={true}
          />
          <PrimaryInput
            type="password"
            placeholder="Verify Password"
            value={userValues.passwordVerify}
            name="passwordVerify"
            onChange={onInputChange}
            required={true}
          />
        </FormInputsContainer>
        <FormConfirmationButtons>
          <FormConfirmationButton>
            <PrimaryButton
              buttonText={"Create"}
              onClick={() => {
                console.log("Back end in progress.");
              }}
            />
          </FormConfirmationButton>
          <FormConfirmationButton>
            <PrimaryButton
              buttonText={"Log in"}
              onClick={() => {
                navigate("/login");
              }}
              color={"#2b2a33"}
            />
          </FormConfirmationButton>
        </FormConfirmationButtons>
      </FormContainer>
    </PageContainer>
  );
};

export default LoginPage;
