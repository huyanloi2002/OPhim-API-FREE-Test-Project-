import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MovieListPage from "./pages/MovieListPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import PersonalInformation from "./pages/PersonalInformation";
import MoviesLikedPage from "./pages/MoviesLikedPage";
import WatchListPage from "./pages/WatchListPage";
import HistoryPage from "./pages/HistoryPage";
import SettingsPage from "./pages/SettingsPage";
import MyAccountManager from "./pages/MyAccountManager";
import NotFoundPage from "./pages/NotFoundPage";
import PrivateRoute from "./pages/PrivateRoute";
import HomePage from "./pages/HomePage";
import Alert from "./components/Alert";
import { useDispatch } from "react-redux";
import { getUserCurrentAction } from "./store/actions/authAction";

const App = () => {
  const dispatch = useDispatch();
  const isLogin = localStorage.getItem("isLogin");

  useEffect(() => {
    dispatch(getUserCurrentAction());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Navbar />
      <Alert />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/my-account-manager" element={<MyAccountManager />}>
            <Route
              path="personal-information"
              element={<PersonalInformation />}
            />
            <Route path="movies-liked" element={<MoviesLikedPage />} />
            <Route path="watch-list/:slug" element={<WatchListPage />} />
            <Route path="history" element={<HistoryPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
        </Route>
        <Route
          exact
          path="/login"
          element={!isLogin ? <LoginPage /> : <HomePage />}
        />
        <Route
          exact
          path="/register"
          element={!isLogin ? <RegisterPage /> : <HomePage />}
        />
        <Route exact path="/" element={<HomePage />} />
        <Route path="/movies" element={<MovieListPage />} />
        <Route path="/movie-details/:slug" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
