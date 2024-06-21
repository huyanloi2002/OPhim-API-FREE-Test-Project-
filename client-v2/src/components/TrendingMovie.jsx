import React from "react";
import Slide from "./Slide";

const TrendingMovie = ({ children }) => {
  return (
    <React.Fragment>
      <Slide
        previewSlide={1}
        paddingPagination={20}
        styleDotPagination="right-10 bottom-10"
        stylePrevPagination="top-10 right-[6rem] bg-transparent border-2 text-light shadow-2xl"
        styleNextPagination="top-10 right-10 bg-transparent border-2 border text-light shadow-2xl"
      >
        {children}
      </Slide>
    </React.Fragment>
  );
};

export default TrendingMovie;
