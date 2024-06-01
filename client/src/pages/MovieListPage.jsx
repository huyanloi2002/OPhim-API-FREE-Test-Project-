import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
import MovieCard from "../components/MovieCard";
import { useSearchParams } from "react-router-dom";
import { imagePathAction, paginationAction } from "../store/slices/moviesSlice";
import { getMoviesAction } from "../store/actions/moviesAction";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import axios from "axios";

const MovieList = () => {
  const dispatch = useDispatch();

  const { movieListNew, loading, countTotalItems, totalPage } = useSelector(
    (state) => state.movies
  );
  const [searchParams] = useSearchParams();
  let pageParams = parseInt(searchParams.get("page")) || 1;
  let keywordParams = searchParams.get("keyword") || "";

  useEffect(() => {
    const page = pageParams || 1;
    const keyword = keywordParams || "";
    dispatch(getMoviesAction({ page, keyword }));
  }, [dispatch, pageParams, keywordParams]);

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

  return (
    <React.Fragment>
      <Helmet
        title={`MBTV | ${
          keywordParams ? `Tìm kiếm: ${keywordParams}` : `Tất cả phim`
        } (Trang ${pageParams})`}
      />
      {loading !== "pending" && (
        <>
          <div className="text-light w-full py-2">
            <strong className="underline text-smd">Kết quả tìm kiếm:</strong>
            {keywordParams && (
              <>
                <strong className="text-smd">{` ${countTotalItems} phim`}</strong>
                <span className="text-smd">{` với từ khóa `}</span>
                <strong>{`"${keywordParams}"`}</strong>
              </>
            )}
            {!keywordParams && (
              <strong className="text-md">{` Tất cả phim`}</strong>
            )}
            <strong className="text-smd">{` - (Trang ${pageParams}/${totalPage})`}</strong>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {movieListNew &&
              movieListNew.length > 0 &&
              movieListNew.map((item, index) => (
                <Link key={index} to={`/movie-details/${item.slug}`}>
                  <MovieCard item={item} />
                </Link>
              ))}
            <Pagination />
          </div>
        </>
      )}
    </React.Fragment>
  );
};

export default MovieList;
