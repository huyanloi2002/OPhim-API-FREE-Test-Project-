import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { movieDetailsAction } from "../store/slices/moviesSlice";
import Banner from "../components/Banner";
import MovieInfo from "../components/MovieInfo";
import { Helmet } from "react-helmet";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const { movie } = useSelector((state) => state.movies.movieDetails);
  const { statusMovieDetails } = useSelector((state) => state.movies);

  const params = useParams();

  useEffect(() => {
    const { slug } = params;
    if (slug) {
      const fetchMovieDetails = async () => {
        const res = await axios.get(`https://ophim1.com/phim/${slug}`);

        dispatch(movieDetailsAction(res.data));
      };
      fetchMovieDetails();
    }

    return () => {
      dispatch(movieDetailsAction({}));
    };
  }, [params, dispatch]);

  return (
    <React.Fragment>
      <Helmet>
        <title>{`MBTV | ${
          statusMovieDetails ? `${movie?.name} (${movie?.year})` : "Đang tải..."
        }`}</title>
        <meta name="description" content={movie?.content} />
        <meta
          property="og:url"
          content="http://localhost:5173/movie-details/xin-hay-yeu-duong-voi-ke-hai-huoc"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${movie?.name} (${movie?.year})`} />
        <meta property="og:description" content={movie?.content} />
        <meta property="og:image" content={movie?.poster_url} />
      </Helmet>
      <div>
        <Banner image={movie?.poster_url} status={statusMovieDetails} />
        <MovieInfo />
      </div>
    </React.Fragment>
  );
};

export default MovieDetails;
