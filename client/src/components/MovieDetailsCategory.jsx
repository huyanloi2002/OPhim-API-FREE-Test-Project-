import React from "react";

const MovieDetailsCategory = ({ category }) => {
  return (
    <React.Fragment>
      <li className="text-center text-smd bg-pale-white text-secondary font-mdbold px-2 py-1 rounded-full border-2 border-light cursor-pointer">
        {category.name}
      </li>
    </React.Fragment>
  );
};

export default MovieDetailsCategory;
