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
import { useDispatch } from "react-redux";
import { fetchLogin, fetchRegister } from "../../api/authFetch";
import { setCookie } from "../../utils/cookies";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const dispatch = useDispatch();
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

  const userLogin = () => {
    fetchLogin(userValues.email, userValues.password)
      .then((data: any) => {
        if (data.status === 200) {
          toast.success(data.data.message);
          dispatch({ type: "SET_USER", payload: data.data.userData });
          setCookie("token", data.data.userData.token, 2);
          navigate("/");
        }
      })
      .catch((error) => {
        error.response.status === 401
          ? toast.error("Wrong email or password")
          : error.response.data.message
          ? toast.error(error.response.data.message)
          : toast.error(error.response.data);
      });
  };

  const userRegister = () => {
    if (userValues.password !== userValues.passwordVerify) {
      toast.error("Paswords do not match.");
      return;
    }

    fetchRegister(userValues.email, userValues.userName, userValues.password)
      .then((data) => {
        if (data.status === 201) {
          toast.success(data.data.message);
          setUserValues({
            userName: "",
            email: "",
            password: "",
            passwordVerify: "",
          });
          navigate("/login");
        }
      })
      .catch((error) => {
        if (error.response.status === 409) {
          toast.error(error.response.data.message);
        }
        toast.error(error.response.data);
      });
  };

  return type === "login" ? (
    <PageContainer>
      <FormContainer>
        <ToastContainer />
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
            <PrimaryButton buttonText={"Login"} onClick={userLogin} />
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
        <ToastContainer />
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
                userRegister();
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
