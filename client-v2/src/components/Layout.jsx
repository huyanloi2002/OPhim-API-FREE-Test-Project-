import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import FeaturedMovie from "./FeaturedMovie";
import RecentMovie from "./RecentMovie";
import Filter from "./Filter";

import { MovieCardHorizontal } from "./MovieCard";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="w-[100vw] h-[calc(100dvh-100px)] bg-transparent backdrop-blur-md px-5 pb-5">
        <Navbar />
        <div className="grid grid-cols-6 grid-rows-12 w-full h-full gap-5">
          <div className="col-span-1 row-span-12">
            <Sidebar row={["row-span-6", "row-span-6"]}>
              <Filter />
              <RecentMovie />
            </Sidebar>
          </div>
          <div className="col-span-4 row-span-12">{children}</div>
          <div className="col-span-1 row-span-12">
            <Sidebar row={["row-span-6", "row-span-6"]}>
              <FeaturedMovie title="Phim bộ nổi bật" type="Phim bộ">
                <MovieCardHorizontal />
                <MovieCardHorizontal />
                <MovieCardHorizontal />
                <MovieCardHorizontal />
                <MovieCardHorizontal />
              </FeaturedMovie>

              <FeaturedMovie title="Phim lẻ nổi bật" type="Phim lẻ">
                <MovieCardHorizontal />
                <MovieCardHorizontal />
                <MovieCardHorizontal />
                <MovieCardHorizontal />
                <MovieCardHorizontal />
              </FeaturedMovie>
            </Sidebar>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
