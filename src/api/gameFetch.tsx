import axios from "axios";

const url = "https://rawg.io/api/games";

export interface filterProps {
  platform?: number;
  sortVal?: string;
  genre?: number;
  length?: number;
}

const config = {
  headers: {
    "Content-Type": "application/json",
    token: `Token ${process.env.REACT_APP_RAWG_API_KEY}`,
  },
};

export const fetchGames = async (
  limit: number,
  page: number,
  platform: number,
  sortVal: string,
  genre: number,
  query?: string
) => {
  const queryParams = [];

  if (platform > 0) {
    queryParams.push(`platforms=${platform}`);
  }

  if (sortVal !== "") {
    queryParams.push(`ordering=${sortVal}`);
  }

  if (genre > 0) {
    queryParams.push(`genres=${genre}`);
  }

  if (query) {
    queryParams.push(`search=${query}`);
  }

  const queryString = queryParams.length > 0 ? `&${queryParams.join("&")}` : "";

  try {
    const response = await axios.get(
      `${url}?page=${page}&page_size=${limit}&key=${process.env.REACT_APP_RAWG_API_KEY}${queryString}`,
      config
    );

    return response.data.results;
  } catch (err) {
    console.error(err);
  }
};

export const fetchGamesByPopularity = async (limit: number) => {
  try {
    const response = await axios.get(
      `${url}?page_size=${limit}&key=${process.env.REACT_APP_RAWG_API_KEY}`,
      config
    );

    return response.data.results;
  } catch (err) {
    console.error(err);
  }
};

export const fetchGameBySlug = async (slug: string) => {
  try {
    const response = await axios.get(
      `${url}/${slug}?key=${process.env.REACT_APP_RAWG_API_KEY}`,
      config
    );
    return response.data;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const fetchGamesBySearch = async (
  limit: number,
  page: number,
  query: string
) => {
  try {
    const response = await axios.get(
      `${url}?page=${page}&page_size=${limit}&key=${process.env.REACT_APP_RAWG_API_KEY}&search=${query}`,
      config
    );

    return response.data.results;
  } catch (err: any) {
    console.log(err.message);
  }
};
