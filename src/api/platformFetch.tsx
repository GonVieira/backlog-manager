import axios from "axios";

const url = "https://rawg.io/api/platforms";

const config = {
  headers: {
    "Content-Type": "application/json",
    token: `Token ${process.env.REACT_APP_RAWG_API_KEY}`,
  },
};

export const fetchPlatforms = async () => {
  const response = await axios.get(
    `${url}?key=${process.env.REACT_APP_RAWG_API_KEY}`,
    config
  );

  return response.data.results;
};
