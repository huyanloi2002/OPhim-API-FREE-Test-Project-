import React from "react";
import Title from "./Title";
import { MovieCardRecentt } from "./MovieCard";

const RecentMovie = () => {
  return (
    <React.Fragment>
      <div className="h-full w-full flex flex-col gap-2 p-3">
        <Title
          icon="&#128293;"
          text="Phim gần đây"
          className="text-md font-b700"
        />
        <div className="h-[565px] w-full overflow-y-scroll">
          <div className="flex flex-col gap-3 w-full">
            <MovieCardRecentt />
            <MovieCardRecentt />
            <MovieCardRecentt />
            <MovieCardRecentt />
            <MovieCardRecentt />
            <MovieCardRecentt />
            <MovieCardRecentt />
            <MovieCardRecentt />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RecentMovie;
