import React from "react";
import TrendingMovie from "../components/TrendingMovie";

const HomePage = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-6 grid-rows-12 gap-5 h-full w-full">
        <div className="col-span-6 row-span-6 rounded-3xl bg-opacity-white-0.2 h-full w-full">
          <TrendingMovie />
        </div>
        <div className="col-span-6 row-span-6 rounded-3xl bg-opacity-white-0.2"></div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
