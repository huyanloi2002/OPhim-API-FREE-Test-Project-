import React from "react";
import LoadingSpin from "./Loading/LoadingSpin";

const Banner = ({ image, status }) => {
  return (
    <React.Fragment>
      <div className="w-full h-[450px] bg-secondary ">
        {!status ? (
          <div className="h-full w-full relative animate-[opacity_2s_ease-in-out]">
            <img
              className="h-full w-full object-cover object-top "
              src={image}
              alt=""
            />
            <div className="absolute bottom-0 h-full w-full z-10 text-light bg-custom-gradient"></div>
          </div>
        ) : (
          <LoadingSpin />
        )}
      </div>
    </React.Fragment>
  );
};

export default Banner;
