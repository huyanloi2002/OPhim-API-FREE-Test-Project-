import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import LoadingMovieCard from "./Loading/LoadingMovieCard";

const MovieCard = ({ item }) => {
  const { imagePath } = useSelector((state) => state.movies);

  const movieInfoCardState = {
    episode_current: "",
    quality: "",
  };
  const [movieInfoCard, setMovieInfoCard] = useState(movieInfoCardState);

  useEffect(() => {
    const slug = item.slug;
    if (slug) {
      const fetchMovieInfo = async () => {
        const res = await axios.get(`https://ophim1.com/phim/${slug}`);

        const { episode_current, quality } = res.data.movie;

        setMovieInfoCard({ episode_current, quality });
      };
      fetchMovieInfo();
    }
    return () => {};
  }, [item.slug]);

  return (
    <React.Fragment>
      {movieInfoCard.episode_current && movieInfoCard.quality ? (
        <div className="h-[300px] w-[200px] cursor-pointer group overflow-hidden rounded-md">
          <div className="w-full h-full relative">
            <img
              src={`${imagePath}${item.thumb_url}`}
              alt={`thumb-${item.name}`}
              className="w-full h-full object-cover rounded-md group-hover:scale-125 transition-all ease-in-out duration-300 bg-slate-800"
            />
            <div className="text-center w-full h-full absolute top-0 flex items-center justify-center">
              <i className="fa-regular fa-circle-play text-primary text-[80px] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"></i>
            </div>
            <div className="h-full w-full absolute top-0 flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <p
                    className="px-2 py-1 text-sm font-bold bg-primary rounded-br-md rounded-tl-md"
                    title="Episode"
                  >{`${
                    movieInfoCard.episode_current
                      ? movieInfoCard.episode_current
                      : ""
                  }`}</p>
                  <p
                    className="quality text-light font-bold text-sm bg-red text-center rounded-bl-md rounded-tr-md px-2 py-1"
                    title="Quality"
                  >{`${movieInfoCard.quality ? movieInfoCard.quality : ""}`}</p>
                </div>
                <div className="text-left group" title="Save">
                  <i
                    className="fa-solid fa-heart text-lg bg-dark p-2 text-light rounded-r-md opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out
                  hover:bg-primary hover:duration-0
                "
                  ></i>
                </div>
              </div>
              <div className="title text-center text-light text-smd font-md h-[50px] bg-gray-transparent flex flex-col justify-center px-2 rounded-b-md">
                <p className="w-full truncate">{`${item.name}`}</p>
                <p className="year">{`(${item.year})`}</p>
                {/* <p className="title-origin-movie">{`(${item.origin_name})`}</p> */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <LoadingMovieCard />
      )}
    </React.Fragment>
  );
};

export default MovieCard;
