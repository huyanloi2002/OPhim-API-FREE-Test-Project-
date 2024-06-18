import React from "react";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <React.Fragment>
      <div className="relative text-md w-full h-full flex items-center justify-center">
        <BsSearch className="absolute z-10 text-md left-5" />
        <input
          type="text"
          className="absolute bg-gray-dark outline-none w-full rounded-full py-3 pl-12 text-light shadow-inner"
          placeholder="Tìm kiếm phim..."
        />
      </div>
    </React.Fragment>
  );
};

export default Search;
