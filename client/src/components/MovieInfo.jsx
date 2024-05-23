import React, { useRef } from "react";
import { useSelector } from "react-redux";
import MovieDetailsActor from "./MovieDetailsActor";
import MovieDetailsCategory from "./MovieDetailsCategory";
import MovieDetailsTable from "./MovieDetailsTable";
import LoadingDetails from "./Loading/LoadingDetails";
import MovieDetailsTrailer from "./MovieDetailsTrailer";
import MovieDetailsThumb from "./MovieDetailsThumb";

const status = [
  { value: "completed", name: "Đã công chiếu", color: "crimson" },
  { value: "ongoing", name: "Đang công chiếu", color: "green" },
];

const type = [
  { value: "series", name: "Phim bộ" },
  { value: "single", name: "Phim lẻ" },
  { value: "tvshows", name: "TV Shows" },
  { value: "hoathinh", name: "Hoạt hình" },
];

const MovieInfo = () => {
  const { movieDetails, statusMovieDetails } = useSelector(
    (state) => state.movies
  );

  const moreDescriptionRef = useRef(true);

  const { movie } = movieDetails;

  return (
    <React.Fragment>
      <div
        className={`text-dark relative w-full animate-[opacity_2s_ease-in-out] ${
          statusMovieDetails ? "h-[50vh]" : "h-full"
        } z-50 flex justify-center bg-secondary`}
      >
        <div className="w-[60%] h-full absolute top-[-100px] rounded-t-xl bg-secondary shadow-md text-light p-3">
          {statusMovieDetails ? (
            <div className="w-full h-auto grid grid-cols-6  gap-5 p-2 justify-center items-start">
              <div className="col-span-2">
                <MovieDetailsThumb
                  thumb={movie?.thumb_url}
                  name={movie?.name}
                />
              </div>
              <div className="col-span-4 flex flex-col gap-2 w-full">
                <div className="flex flex-col items-start justify-center w-full">
                  <p className="text-xml font-mdbold w-[80%] truncate">{`${movie?.name} (${movie?.year})`}</p>
                  <p className="text-lg font-thin">{`(${movie?.origin_name} - ${movie?.year})`}</p>
                </div>
                <div className="w-full flex flex-col gap-2">
                  <div className="flex justify-center absolute top-0 right-0 bg-primary rounded-tr-xl rounded-bl-xl cursor-default h-[50px] w-[120px] shadow-2xl shadow-primary">
                    {type.map(
                      (item, index) =>
                        item.value === movie?.type && (
                          <span
                            key={index}
                            className="rounded-full px-3 py-1 inline-flex items-center gap-2"
                          >
                            <p className="font-bold text-md uppercase ">
                              {item.name}
                            </p>
                          </span>
                        )
                    )}
                  </div>
                  <div className="text-smd flex flex-col gap-2 h-[200px]">
                    <div className="flex justify-between items-center cursor-default">
                      {status.map(
                        (item, index) =>
                          item.value === movie?.status && (
                            <span
                              key={index}
                              className="rounded-full px-3 py-1 inline-flex items-center gap-2"
                              style={{ backgroundColor: `${item.color}` }}
                            >
                              <i className="fa-solid fa-circle text-light text-[5px]"></i>
                              <p className="font-bold">{item.name}</p>
                            </span>
                          )
                      )}
                      <div className="flex items-center gap-2">
                        <p className="underline font-bold text-md">
                          Quốc gia:{" "}
                        </p>
                        {movie?.country &&
                          movie?.country.length > 0 &&
                          movie?.country.map((item, index) => (
                            <span
                              key={index}
                              className="uppercase text-smd px-2 bg-light text-secondary rounded-md font-bold inline-flex items-center"
                            >
                              {item.name ? item.name : "Đang cập nhật"}
                            </span>
                          ))}
                      </div>
                    </div>
                    <div className="h-[100px]">
                      <MovieDetailsTable data={movie} />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <div className="font-bold text-smd">
                        <span className="bg-primary text-secondary px-2 rounded-br-md rounded-tl-md inline-flex items-center gap-1">
                          <i className="fa-solid fa-circle text-secondary text-[5px]"></i>
                          <span>Thể loại:</span>
                        </span>
                      </div>
                      <ul className="flex flex-row gap-2 w-full px-2">
                        {movie?.category &&
                          movie?.category.length > 0 &&
                          movie?.category.map((item, index) => (
                            <MovieDetailsCategory category={item} key={index} />
                          ))}
                      </ul>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 w-full">
                    <div className="flex flex-col gap-1 h-[240px] col-span-1 ">
                      <div className="flex flex-col gap-2 justify-start h-[120px]">
                        <div className="font-bold text-smd">
                          <span className="bg-primary text-secondary px-2 rounded-br-md rounded-tl-md inline-flex items-center gap-1">
                            <i className="fa-solid fa-circle text-secondary text-[5px]"></i>
                            <span>Diễn viên:</span>
                          </span>
                        </div>
                        <ul className="flex flex-row gap-2 w-full scrollbar items-start px-2">
                          {movie?.actor &&
                            movie?.actor.length > 0 &&
                            movie?.actor
                              .slice(0, 5)
                              .map((item, index) => (
                                <MovieDetailsActor actor={item} key={index} />
                              ))}
                        </ul>
                      </div>
                      <div className="flex flex-col gap-1 justify-start h-[130px]">
                        <div className="font-bold text-smd">
                          <span className="bg-primary text-secondary px-2 rounded-br-md rounded-tl-md inline-flex items-center gap-1">
                            <i className="fa-solid fa-circle text-secondary text-[5px]"></i>
                            <span>Mô tả:</span>
                          </span>
                        </div>
                        <div
                          className={`w-full relative px-2 rounded-md cursor-default h-[82px] scrollbar overflow-y-auto overflow-x-hidden`}
                        >
                          {moreDescriptionRef.current && (
                            <div className={`w-full h-full absolute bottom-0`}>
                              {/* <div className="w-full h-full bg-custom-description"></div> */}
                              <div className="absolute bottom-0 w-full text-center cursor-pointer"></div>
                            </div>
                          )}
                          <div
                            className="italic text-smd desription-content break-word"
                            dangerouslySetInnerHTML={{
                              __html:
                                movie?.content &&
                                movie?.content.replace("<br>", ""),
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 px-5 w-full h-full flex items-start">
                      <div className="flex flex-col gap-2 w-full h-full justify-start">
                        <div className="font-bold text-smd w-full">
                          <span className="bg-primary text-secondary px-2 rounded-br-md rounded-tl-md inline-flex items-center gap-1 w-full">
                            <i className="fa-solid fa-circle text-secondary text-[5px]"></i>
                            <span>Trailer/Thumbnail:</span>
                          </span>
                        </div>
                        <div className="h-full pb-2 animate-[opacityTrailer_4s_ease-in-out]">
                          <MovieDetailsTrailer
                            trailer={movie.trailer_url}
                            poster={movie.poster_url}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <LoadingDetails />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default MovieInfo;
