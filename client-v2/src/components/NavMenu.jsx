import React, { useState } from "react";

const NavMenu = () => {
  const [selected, setSelected] = useState("home");

  const navMenu = [
    { name: "Trang chủ", key: "home", key_vn: "trang-chu" },
    { name: "Phim bộ", key: "series", key_vn: "phim-bo" },
    { name: "Phim lẻ", key: "odd", key_vn: "phim-le" },
    { name: "Hoạt hình", key: "cartoon", key_vn: "hoat-hinh" },
    { name: "TV Shows", key: "tvshows", key_vn: "tv-shows" },
  ];

  return (
    <React.Fragment>
      <ul className="flex flex-row gap-6 items-center justify-start">
        {navMenu.map((item, index) => (
          <li
            key={index}
            className={`"text-md cursor-pointer px-5 py-3 rounded-full font-b700 duration-200 transition-all ease-in-out  ${
              selected === item.key
                ? "bg-opacity-white-0.2 text-light"
                : "bg-transparent text-opacity-white-0.6"
            } `}
            onClick={() => setSelected(item.key)}
          >
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default NavMenu;
