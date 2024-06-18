import React from "react";
import Title from "./Title";

const FeaturedMovie = ({ title, type, children }) => {
  return (
    <React.Fragment>
      <div className="h-full w-full flex flex-col gap-2 p-3" title={type}>
        <Title icon="&#128293;" text={title} className="text-md font-b700" />
        <div className="max-h-[555px] w-full overflow-y-scroll">
          <div className="flex flex-col gap-2 w-full">{children}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FeaturedMovie;
