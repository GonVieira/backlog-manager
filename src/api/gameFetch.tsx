import axios from "axios";

const url = "https://rawg.io/api/games";

const config = {
  headers: {
    "Content-Type": "application/json",
    token: `Token ${process.env.REACT_APP_RAWG_API_KEY}`,
  },
};

export const fetchGamesByPopularity = async (limit: number) => {
  const response = await axios.get(
    `${url}?page_size=${limit}&key=${process.env.REACT_APP_RAWG_API_KEY}`
  );

  return response.data.results;
};

export const fetchGameByName = async (name: string) => {
  const response = await axios.get(
    `${url}/${name}?key=${process.env.REACT_APP_RAWG_API_KEY}`,
    config
  );
  return response.data;
};
