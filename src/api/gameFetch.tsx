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

export const fetchGamesByPage = async (limit: number, page: number) => {
  const response = await axios.get(
    `${url}?page=${page}&page_size=${limit}&key=${process.env.REACT_APP_RAWG_API_KEY}`
  );

  return response.data.results;
};

export const fetchGameBySlug = async (slug: string) => {
  const response = await axios.get(
    `${url}/${slug}?key=${process.env.REACT_APP_RAWG_API_KEY}`,
    config
  );
  return response.data;
};

export const fetchGamesBySearch = async (
  limit: number,
  page: number,
  query: string,
) => {
  const response = await axios.get(
    `${url}?page=${page}&page_size=${limit}&key=${process.env.REACT_APP_RAWG_API_KEY}&search=${query}`
  );

  return response.data.results;
};
