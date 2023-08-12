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
  LoadingContainer,
  PageContainer,
  SingleFormInputContainer,
} from "./style";
import { useDispatch } from "react-redux";
import { fetchLogin, fetchRegister } from "../../api/authFetch";
import { setCookie } from "../../utils/cookies";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

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
  const [loading, setLoading] = useState<boolean>(false);
  const [emailIsValid, setEmailIsValid] = useState<boolean>(true);
  const [passwordIsValid, setPasswordIsValid] = useState<boolean>(true);
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

  const validateEmail = (input: string) => {
    // This regular expression checks for a basic email format.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(input);
  };

  const loginValidation = () => {
    let isValid = true;

    if (!validateEmail(userValues.email)) {
      setEmailIsValid(false);
      toast.error("Email is not valid.");
      isValid = false;
    } else {
      setEmailIsValid(true);
    }

    if (userValues.password.length < 5) {
      setPasswordIsValid(false);
      toast.error("Password must have at least 5 characters.");
      isValid = false;
    } else {
      setPasswordIsValid(true);
    }

    return isValid;
  };

  const userLogin = () => {
    //Login validation
    let isInfoValid = loginValidation();
    if (!isInfoValid) {
      return;
    }

    setLoading(true);
    fetchLogin(userValues.email, userValues.password)
      .then((data: any) => {
        if (data.status === 200) {
          toast.success(data.data.message);
          dispatch({ type: "SET_USER", payload: data.data.data.user });
          setCookie("token", data.data.data.token, 2);
          navigate("/");
        }
        setLoading(false);
      })
      .catch((error) => {
        error.response.status === 401
          ? toast.error("Wrong email or password")
          : error.response.data.message
          ? toast.error(error.response.data.message)
          : toast.error(error.response.data);

        setLoading(false);
      });
  };

  const userRegister = () => {
    if (userValues.password !== userValues.passwordVerify) {
      toast.error("Paswords do not match.");
      return;
    }

    setLoading(true);

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
          setLoading(false);
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
      {loading ? (
        <LoadingContainer>
          <h2>Logging in ...</h2>
          <LoadingSpinner />
        </LoadingContainer>
      ) : (
        <FormContainer>
          <ToastContainer />
          <FormTitleContainer>
            <h2>User {type}</h2>
          </FormTitleContainer>
          <FormInputsContainer>
            <SingleFormInputContainer>
              <PrimaryInput
                type="text"
                placeholder="Email"
                label="email"
                value={userValues.email}
                name="email"
                onChange={onInputChange}
                required={true}
                error={emailIsValid}
              />
            </SingleFormInputContainer>
            <SingleFormInputContainer>
              <PrimaryInput
                type="password"
                label="password"
                placeholder="Password"
                value={userValues.password}
                name="password"
                onChange={onInputChange}
                required={true}
                error={passwordIsValid}
              />
            </SingleFormInputContainer>
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
      )}
    </PageContainer>
  ) : (
    <PageContainer>
      {loading ? (
        <LoadingContainer>
          <h2>Registering user ...</h2>
          <LoadingSpinner />
        </LoadingContainer>
      ) : (
        <FormContainer>
          <ToastContainer />
          <FormTitleContainer>
            <h2>User {type}</h2>
          </FormTitleContainer>
          <FormInputsContainer>
            <SingleFormInputContainer>
              <PrimaryInput
                type="text"
                placeholder="Email"
                label="email"
                value={userValues.email}
                name="email"
                onChange={onInputChange}
                required={true}
                error={true}
              />
            </SingleFormInputContainer>
            <SingleFormInputContainer>
              <PrimaryInput
                type="text"
                placeholder="UserName"
                label="username"
                value={userValues.userName}
                name="userName"
                onChange={onInputChange}
                required={true}
                error={true}
              />
            </SingleFormInputContainer>
            <SingleFormInputContainer>
              <PrimaryInput
                type="password"
                placeholder="Password"
                label="password"
                value={userValues.password}
                name="password"
                onChange={onInputChange}
                required={true}
                error={true}
              />
            </SingleFormInputContainer>
            <SingleFormInputContainer>
              <PrimaryInput
                type="password"
                placeholder="Verify Password"
                label="passwordVerification"
                value={userValues.passwordVerify}
                name="passwordVerify"
                onChange={onInputChange}
                required={true}
                error={true}
              />
            </SingleFormInputContainer>
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
      )}
    </PageContainer>
  );
};

export default LoginPage;
