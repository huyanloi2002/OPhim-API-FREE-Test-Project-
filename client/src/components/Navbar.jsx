import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import Account from "../components/Account";
import ButtonAuth from "../components/ButtonAuth";

const Navbar = ({ account, isLogin }) => {
  const navMenu = [
    { id: 1, name: "Home", name_vn: "Trang chủ", key: "home" },
    { id: 2, name: "Catgory", name_vn: "Thể loại", key: "category" },
    { id: 3, name: "Country", name_vn: "Quốc gia", key: "country" },
    { id: 4, name: "New movies", name_vn: "Phim mới", key: "new_movies" },
    { id: 5, name: "Series movie", name_vn: "Phim bộ", key: "series_movie" },
    { id: 6, name: "Odd movie", name_vn: "Phim lẻ", key: "odd_movie" },
    { id: 7, name: "Theaters", name_vn: "Phim chiếu rạp", key: "theaters" },
    { id: 8, name: "TV Show", name_vn: "TV Show", key: "tv_show" },
  ];

  return (
    <React.Fragment>
      <div className="p-2 flex justify-between items-center bg-secondary sticky top-0 z-40 w-full h-[70px]">
        <Link to={"/"}>
          <div className="text-xxl font-bold text-light">MÈO BÉO TV</div>
        </Link>
        <Search />
        <ul className="flex flex-row gap-2 ">
          {navMenu.map((item, index) => (
            <li
              className="px-2 py-1 rounded-md shadow-md cursor-pointer inline-flex gap-2 items-center bg-transparent text-light duration-200 transition-all ease-in-out 
              hover:text-primary"
              key={index}
            >
              <p className="font-bold uppercase text-md ">{item.name_vn}</p>
              <i className="fa-solid fa-caret-down text-smd"></i>
            </li>
          ))}
        </ul>
        <div className="w-[180px]">
          {!isLogin ? <ButtonAuth /> : <Account info={account} />}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
