import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { getCookie } from "./utils/cookies";
import { useDispatch } from "react-redux";
import { fetchUserLoginByToken } from "./api/authFetch";

function App() {
  const dispatch = useDispatch();

  // Logs in if there is a token stored in the cookies
  useEffect(() => {
    const token = getCookie("token");

    if (token) {
      fetchUserLoginByToken(token)
        .then((data: any) => {
          if (data.status === 200) {
            dispatch({ type: "SET_USER", payload: data.data.data.user });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
