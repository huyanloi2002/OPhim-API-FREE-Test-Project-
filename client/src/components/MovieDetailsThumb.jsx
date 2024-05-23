import React, { useMemo } from "react";

const MovieDetailsThumb = ({ thumb, name }) => {
  const menuThumb = useMemo(
    () => [
      { id: 1, name: "Xem phim", icon: "fa-solid fa-play" },
      {
        id: 2,
        name: "Danh sách",
        icon: "fa-solid fa-bookmark",
      },
      { id: 3, name: "Yêu thích", icon: "fa-solid fa-heart" },
      { id: 5, name: "Chia sẻ", icon: "fa-solid fa-share" },
    ],
    []
  );

  return (
    <React.Fragment>
      <div className="w-full h-[520px] relative group cursor-pointer">
        <img
          src={thumb}
          alt={`thumnail-${name}`}
          className="rounded-md object-cover h-full w-full opacity-80 group-hover:opacity-60 duration-500 transition-all ease-in-out"
        />
        <i className="fa-solid fa-play text-primary shadow-xl text-[100px] text-center absolute top-[210px] left-[136.4px] drop-shadow-xl duration-500 transition-all ease-in-out group-hover:opacity-0 "></i>
        <ul
          className="grid grid-cols-4 w-full gap-2 absolute bottom-0 text-light bg-gray rounded-b-md opacity-0 duration-500 transition-all ease-in-out 
        group-hover:opacity-100 "
        >
          {menuThumb.map((item, index) => (
            <li className="col-span-1 text-center cursor-pointer" key={index}>
              <span className="inline-flex flex-col py-5 gap-1">
                <i className={`${item.icon} text-xl24 text-light`}></i>
                <p className="text-smd font-bold text-light">{item.name}</p>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default MovieDetailsThumb;
