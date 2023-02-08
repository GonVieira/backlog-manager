import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import GameDetailsPage from "./pages/GameDetailsPage/GameDetailsPage";
import GameListPage from "./pages/GameListPage/GameListPage";
import Homepage from "./pages/Homepage/Homepage";
import LoginPage from "./pages/LoginRegisterPage/LoginRegisterPage";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />} />
          <Route path="/games" element={<GameListPage />} />
          <Route path="/game/:id" element={<GameDetailsPage />} />
          <Route path="/login" element={<LoginPage type="login" />} />
          <Route path="/register" element={<LoginPage type="register" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
