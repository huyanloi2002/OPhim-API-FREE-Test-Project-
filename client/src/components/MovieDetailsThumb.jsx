import React from "react";
import MenuThumb from "./MenuThumb";
// import { handleOpenShare } from "../utils/handleClick";

const MovieDetailsThumb = ({ thumb, name }) => {
  return (
    <React.Fragment>
      <div className="w-full h-[520px] relative group/menu cursor-pointer">
        <img
          src={thumb}
          alt={`thumnail-${name}`}
          className="rounded-md object-cover h-full w-full opacity-80 group-hover/menu:opacity-60 duration-500 transition-all ease-in-out"
        />
        <i className="fa-solid fa-play text-primary shadow-xl text-[100px] text-center absolute top-[210px] left-[136.4px] drop-shadow-xl duration-500 transition-all ease-in-out group-hover/menu:opacity-0 "></i>
        <MenuThumb />
      </div>
    </React.Fragment>
  );
};

export default MovieDetailsThumb;
