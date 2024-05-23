import React, { useState } from "react";
import { fetchMovieApi } from "../store/movies/moviesSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    dispatch(fetchMovieApi({ keyword }));
    navigate(`/movies?keyword=${keyword}`);
  };

  return (
    <React.Fragment>
      <div className="h-[50px] w-[400px] relative inline-flex justify-end items-center">
        <input
          type="text"
          className="bg-light w-full outline-none px-2 pl-5 text-smd h-full rounded-full"
          placeholder="Enter movie..."
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
        />

        <i
          className="fa-solid fa-magnifying-glass absolute text-dark px-4 py-3 bg-primary rounded-full mr-2 cursor-pointer transition-all ease-in-out duration-500
        hover:bg-secondary hover:text-light hover:duration-500
        "
          onClick={() => handleSearch()}
        ></i>
      </div>
    </React.Fragment>
  );
};

export default Search;
