import axios from "axios";

const url = "https://backlog-manager-be.onrender.com";

export const fetchUserByEmail = async (email: string, jwt: string) => {
  try {
    const response = await axios.get(`${url}/user/${email}`, {
      headers: { Authorization: `Bearer ${jwt}` },
    });

    return response.data.data;
  } catch (err) {
    console.error(err);
  }
};
