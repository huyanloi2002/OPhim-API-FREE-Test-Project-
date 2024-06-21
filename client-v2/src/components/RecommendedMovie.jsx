import React from "react";
import Title from "./Title";
import { BiMoviePlay } from "react-icons/bi";
import Slide from "./Slide";

const RecommendedMovie = ({ title, type, children }) => {
  return (
    <React.Fragment>
      <div
        className="h-full w-full flex flex-col justify-center gap-2 py-5 px-5"
        title={type}
      >
        <div>
          <span className=" bg-opacity-white-0.2 rounded-lg text-light px-5 h-[60px] w-full flex items-center gap-2">
            <Title
              icon={<BiMoviePlay className="text-[30px] animate-icon-rotate" />}
              text={title}
              className="text-[20px] font-bold"
              isMore={true}
              titleMore={true}
              titleMoreSize="text-md"
              titleMoreIconSize="text-md"
            />
          </span>
        </div>
        <Slide
          rounded="0"
          previewSlide={5}
          spaceSlide={10}
          isDotPagination={false}
        >
          {children}
        </Slide>
      </div>
    </React.Fragment>
  );
};

export default RecommendedMovie;
