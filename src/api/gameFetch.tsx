import axios from "axios";

const url = "https://rawg.io/api/games";

const config = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "https://localhost:3000",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Authorization": `token ${process.env.REACT_APP_RAWG_API_KEY}`,
  },
};

export const fetchGamesByPopularity = async (limit: number) => {
  const response = await axios.get(
    `${url}/?page_size=${limit}`,
    config
  );
  return response.data;
};

export const fetchGameByName = async (name: string) => {
  const response = await axios.get(`${url}/${name}`, config);
  return response.data;
};
