import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import MovieInfo from "../components/MovieInfo";
import { Helmet } from "react-helmet";
import { getDetailsMovieAction } from "../store/actions/moviesAction";

const MovieDetails = () => {
  const dispatch = useDispatch();

  const { isLoading, detailsMovie } = useSelector(
    (state) => state.movies.getDetailsMovie
  );

  const { slug } = useParams();

  useEffect(() => {
    dispatch(getDetailsMovieAction(slug));
    return () => {};
  }, [slug, dispatch]);

  return (
    <React.Fragment>
      <Helmet>
        <title>{`MBTV | ${
          !isLoading
            ? `${detailsMovie?.name} (${detailsMovie?.year})`
            : "Đang tải..."
        }`}</title>
        <meta name="description" content={detailsMovie?.content} />
      </Helmet>
      <div>
        <Banner image={detailsMovie?.poster_url} status={isLoading} />
        <MovieInfo />
      </div>
    </React.Fragment>
  );
};

export default MovieDetails;
