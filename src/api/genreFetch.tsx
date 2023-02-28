import axios from "axios";

const url = "https://rawg.io/api/genres";

const config = {
  headers: {
    "Content-Type": "application/json",
    token: `Token ${process.env.REACT_APP_RAWG_API_KEY}`,
  },
};

export const fetchGenres = async () => {
  try {
    const response = await axios.get(
      `${url}?key=${process.env.REACT_APP_RAWG_API_KEY}`,
      config
    );

    return response.data.results;
  } catch (err:any) {
    console.log(err.message);
  }
};
