import axios from "axios";

const url = "https://rawg.io/api/games";

const config = {
  headers: {
    "Content-Type": "application/json",
    token: `Token ${process.env.REACT_APP_RAWG_API_KEY}`,
  },
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

export const fetchGamesByPage = async (limit: number, page: number) => {
  try {
    const response = await axios.get(
      `${url}?page=${page}&page_size=${limit}&key=${process.env.REACT_APP_RAWG_API_KEY}`,
      config
    );

    return response.data.results;
  } catch (err: any) {
    console.log(err.message);
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

export const sortedFetchGames = async (
  limit: number,
  page: number,
  sortVal: string
) => {
  try {
    const response = await axios.get(
      `${url}?page=${page}&page_size=${limit}&key=${process.env.REACT_APP_RAWG_API_KEY}&ordering=${sortVal}`,
      config
    );

    return response.data.results;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const filterPlatformsAndSortedGames = async (
  limit: number,
  page: number,
  platform: number,
  sortVal: string
) => {
  try {
    const response = await axios.get(
      `${url}?page=${page}&page_size=${limit}&key=${process.env.REACT_APP_RAWG_API_KEY}&platforms=${platform}&ordering=${sortVal}`
    );

    return response.data.results;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const filterPlatformFetchGames = async (
  limit: number,
  page: number,
  platform: number
) => {
  try {
    const response = await axios.get(
      `${url}?page=${page}&page_size=${limit}&key=${process.env.REACT_APP_RAWG_API_KEY}&platforms=${platform}`,
      config
    );

    return response.data.results;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const fetchByGenre = async (
  limit: number,
  page: number,
  genre: number
) => {
  try {
    const response = await axios.get(
      `${url}?page=${page}&page_size=${limit}&key=${process.env.REACT_APP_RAWG_API_KEY}&genres=${genre}`
    );

    return response.data.results;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const fetchSortedGamesByPlatGenre = async (
  limit: number,
  page: number,
  platform: number,
  sortVal: string,
  genre: number
) => {
  try {
    const response = await axios.get(
      `${url}?page=${page}&page_size=${limit}&key=${process.env.REACT_APP_RAWG_API_KEY}&platforms=${platform}&ordering=${sortVal}&genres=${genre}`
    );

    return response.data.results;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const fetchGamesByPlatGenre = async (
  limit: number,
  page: number,
  platform: number,
  genre: number
) => {
  try {
    const response = await axios.get(
      `${url}?page=${page}&page_size=${limit}&key=${process.env.REACT_APP_RAWG_API_KEY}&platforms=${platform}&genres=${genre}`
    );

    return response.data.results;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const fetchSortedGamesGenre = async (
  limit: number,
  page: number,
  sortVal: string,
  genre: number
) => {
  try {
    const response = await axios.get(
      `${url}?page=${page}&page_size=${limit}&key=${process.env.REACT_APP_RAWG_API_KEY}&ordering=${sortVal}&genres=${genre}`
    );

    return response.data.results;
  } catch (err: any) {
    console.log(err.message);
  }
};
