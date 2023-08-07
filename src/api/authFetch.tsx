import axios from "axios";

const url = "https://backlog-manager-be.onrender.com";

export const fetchLogin = async (email: string, password: string) => {
  const body = {
    email: email,
    password: password,
  };

  try {
    const response = await axios.post(`${url}/login`, body);
    return response;
  } catch (err) {
    throw err;
  }
};

export const fetchUserLoginByToken = async (token: string) => {
  const body = {
    token: token,
  };

  try {
    const response = await axios.post(`${url}/tokenLogin`, body);
    return response;
  } catch (err) {
    throw err;
  }
};

export const fetchRegister = async (
  email: string,
  username: string,
  password: string
) => {
  const body = {
    username: username,
    email: email,
    password: password,
  };

  try {
    const response = await axios.post(`${url}/register`, body);
    return response;
  } catch (err) {
    throw err;
  }
};
