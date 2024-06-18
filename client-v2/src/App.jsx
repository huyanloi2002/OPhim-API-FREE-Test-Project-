import React from "react";
import "./styles/App.css";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <React.Fragment>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </React.Fragment>
  );
};

export default App;
