import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MovieList from "./components/MovieList";
import MovieDetails from "./pages/MovieDetails";
import NotFound from "./pages/NotFound";
import Alert from "./components/Alert";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  imagePathAction,
  paginationAction,
  fetchMovieApi,
} from "./store/movies/moviesSlice";
import { useSearchParams } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  const { success, type } = useSelector((state) => state.auth);
  const [searchParams] = useSearchParams();
  const pageParams = searchParams.get("page");
  const keywordParams = searchParams.get("keyword");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApiMovie = async () => {
      const res = await axios.get(
        "https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1"
      );

      dispatch(imagePathAction(res.data.pathImage));
      dispatch(paginationAction(res.data.pagination));
    };
    fetchApiMovie();

    return () => {};
  }, [dispatch]);

  useEffect(() => {
    const page = pageParams || 1;
    const keyword = keywordParams || "";
    dispatch(fetchMovieApi({ page, keyword }));
  }, [dispatch, pageParams, keywordParams]);

  const firstLogin = localStorage.getItem("firstLogin");

  useEffect(() => {
    if (success && type === "login") {
      navigate("/");
    }
  }, [success, navigate, type]);

  return (
    <React.Fragment>
      <div className="bg-secondary h-[50vw] relative">
        <Navbar />
        <Alert />
        <div className="h-full">
          <Routes>
            <Route
              path="/login"
              element={!firstLogin ? <Login /> : <MovieList />}
            />
            <Route
              path="/register"
              element={!firstLogin ? <Register /> : <MovieList />}
            />
            <Route path="/" element={<MovieList />} />
            <Route path="/movies" element={<MovieList />} />
            <Route path="/movie-details/:slug" element={<MovieDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
