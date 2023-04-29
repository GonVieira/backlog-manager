import axios from "axios";

const url = "https://backlog-manager-be.onrender.com";

export const fetchUserByEmail = async (email: string, jwt: string) => {
  try {
    const response = await axios.get(`${url}/user/${email}`, {
      headers: { Authorization: `Bearer ${jwt}` },
    });

    return response.data.data;
  } catch (err) {
    throw err;
  }
};

export const fetchUserGamesById = async (userId: string, jwt: string) => {
  try {
    const response = await axios.get(`${url}/user/games/${userId}`, {
      headers: { Authorization: `Bearer ${jwt}` },
    });

    return response.data.data;
  } catch (err) {
    throw err;
  }
};

export const addGameToUser = async (userId: string, jwt: string, game: any) => {
  const body = {
    game: game,
  };

  try {
    const response = await axios.patch(`${url}/user/add/${userId}`, body, {
      headers: { Authorization: `Bearer ${jwt}` },
    });
    return response;
  } catch (err) {
    throw err;
  }
};

export const setGameAsCompleted = async (
  userId: string,
  jwt: string,
  gameSlug: string,
  completed: boolean
) => {
  const body = {
    slug: gameSlug,
    completed: completed,
  };

  try {
    const response = await axios.patch(
      `${url}/user/completed/${userId}`,
      body,
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
