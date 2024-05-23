import React from "react";

const MovieDetailsEpisode = ({
  episode,
  setChooseServer,
  index,
  chooseServer,
}) => {
  return (
    <React.Fragment>
      <div className="px-1 flex flex-col gap-2 justify-start items-start h-full w-full">
        <a
          className={`text-smd font-bold underline bg-light text-secondary rounded-tr-md rounded-bl-md px-2 py-1 cursor-pointer transition-all duration-300 ease-in-out ${
            chooseServer === index
              ? "opacity-100 scale-110"
              : "opacity-50 scale-90"
          }`}
          onClick={() => setChooseServer(index)}
        >
          {episode.server_name}
        </a>
        <ul
          className={`flex flex-wrap w-full h-full gap-2 overflow-y-auto scrollbar items-start transition-all duration-500 ease-in-out p-1  ${
            chooseServer === index
              ? "opacity-100 text-md"
              : "opacity-40 text-xsm pointer-events-none px-3"
          }`}
        >
          {episode.server_data &&
            episode.server_data.length &&
            episode.server_data.map((item, index) => (
              <li
                key={index}
                className="w-[62px] bg-primary px-2 text-secondary text-center font-bold rounded-tr-md rounded-bl-md cursor-pointer shadow-slate-50 truncate"
              >
                {item.name}
              </li>
            ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default MovieDetailsEpisode;
