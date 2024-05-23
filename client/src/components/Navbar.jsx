import React, { useMemo } from "react";
import Search from "./Search";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navMenu = useMemo(
    () => [
      { id: 1, name: "Home", name_vn: "Trang chủ" },
      { id: 2, name: "Catgory", name_vn: "Thể loại" },
      { id: 3, name: "Country", name_vn: "Quốc gia" },
      { id: 4, name: "New movies", name_vn: "Phim mới" },
      { id: 5, name: "Series movie", name_vn: "Phim bộ" },
      { id: 6, name: "Odd movie", name_vn: "Phim lẻ" },
      { id: 7, name: "Theaters", name_vn: "Phim chiếu rạp" },
      { id: 8, name: "TV Show", name_vn: "TV Show" },
      { id: 9, name: "Sign in", name_vn: "Đăng nhập" },
    ],
    []
  );

  return (
    <React.Fragment>
      <div className="p-2 flex justify-between bg-secondary">
        <Link to={"/"}>
          <div className="text-xxl font-bold text-light">MÈO BÉO TV</div>
        </Link>
        <Search />
        <ul className="flex flex-row gap-2">
          {navMenu.map((item, index) => (
            <li
              className="px-3 py-1 rounded-md shadow-md cursor-pointer flex items-center bg-light"
              key={index}
            >
              <p className="font-bold uppercase text-md ">{item.name_vn}</p>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
