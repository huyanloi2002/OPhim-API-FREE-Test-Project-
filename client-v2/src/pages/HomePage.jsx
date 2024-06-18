import React from "react";
import TrendingMovie from "../components/TrendingMovie";
import { MovieCardVertical } from "../components/MovieCard";

const HomePage = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-6 grid-rows-12 gap-5 h-full w-full">
        <div className="col-span-6 row-span-6 rounded-3xl bg-opacity-white-0.2 h-full w-full">
          <TrendingMovie />
        </div>
        <div className="col-span-6 row-span-6 rounded-3xl bg-opacity-white-0.2">
          <div className="h-full w-full flex flex-col items-center justify-center">
            {/* <p className="text-md font-bold">Phim có thể bạn thích</p> */}
            <div className="flex flex-wrap gap-3 justify-center">
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />

            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;

