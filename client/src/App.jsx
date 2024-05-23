import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import MovieDetails from "./pages/MovieDetails";
import NotFound from "./pages/NotFound";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  imagePathAction,
  paginationAction,
  fetchMovieApi,
} from "./store/movies/moviesSlice";
import { useSearchParams } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const pageParams = searchParams.get("page");
  const keywordParams = searchParams.get("keyword");

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

  return (
    <React.Fragment>
      <div className="bg-secondary">
        <Navbar />
        <div className="h-full">
          <Routes>
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
