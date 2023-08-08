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
  genre: number
) => {
  let str: string = "";

  if (platform > 0) {
    str = str + "&platforms=" + platform;
  }

  if (sortVal !== "") {
    str = str + "&ordering=" + sortVal;
  }

  if (genre > 0) {
    str = str + "&genres=" + genre;
  }

  try {
    const response = await axios.get(
      `${url}?page=${page}&page_size=${limit}&key=${process.env.REACT_APP_RAWG_API_KEY}` +
        str,
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
