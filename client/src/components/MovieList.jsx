import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import MovieCard from "./MovieCard";
import { useSearchParams } from "react-router-dom";

import { Helmet } from "react-helmet";

const MovieList = () => {
  const { movieListNew, loading, countTotalItems, totalPage } = useSelector(
    (state) => state.movies
  );
  const [searchParams] = useSearchParams();
  let pageParams = parseInt(searchParams.get("page")) || 1;
  let keywordParams = searchParams.get("keyword") || "";

  return (
    <React.Fragment>
      <Helmet
        title={`MBTV | ${
          keywordParams ? `Tìm kiếm: ${keywordParams}` : `Tất cả phim`
        } (Trang ${pageParams})`}
      />
      {loading !== "pending" && (
        <div className="p-3">
          <div className="text-light w-full px-[5rem] py-2">
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
        </div>
      )}
    </React.Fragment>
  );
};

export default MovieList;
