import React from "react";

const MovieDetailsTrailer = ({ trailer, poster }) => {
  const youtubeUrl = `https://www.youtube.com/embed/${trailer.split("=")[1]}`;

  return (
    <React.Fragment>
      {trailer ? (
        <div className="h-[200px] w-full">
          <iframe
            className="w-full rounded-md h-full bg-transparent"
            src={youtubeUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="h-[200px] w-full">
          <img src={poster} className="w-full h-full rounded-md object-cover" />
        </div>
      )}
    </React.Fragment>
  );
};

export default MovieDetailsTrailer;
