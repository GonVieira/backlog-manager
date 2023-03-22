import axios from "axios";

const url = "https://backlog-manager-be.onrender.com";


export const fetchLogin = async (email: string, password: string) => {
  const body = {
    email: email,
    password: password,
  };

  const response = await axios
    .post(`${url}/login`, body)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      throw error;
    });

  return response;
};

export const fetchRegister = async (user: any) => {
  const body = {
    username: user.username,
    email: user.email,
    password: user.password,
  };

  const res = await axios.post(`{url}/register`, body);
  return res.data;
};
