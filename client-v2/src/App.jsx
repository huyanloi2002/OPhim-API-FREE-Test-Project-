import React from "react";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <React.Fragment>
      <div className="w-[100vw] h-[calc(100dvh-100px)] bg-transparent backdrop-blur-md px-5 pb-5">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </React.Fragment>
  );
};

export default App;
