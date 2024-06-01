import React, { useMemo } from "react";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MyAccountManager = () => {
  const { pathname } = useLocation();

  const navMenu = useMemo(
    () => [
      {
        id: 1,
        name: "Thông tin cá nhân",
        key: "personal_infomation",
        icon: "fa-solid fa-circle-user",
        link: "/my-account-manager/personal-information",
      },
      {
        id: 2,
        name: "Phim yêu thích",
        key: "movies_liked",
        icon: "fa-solid fa-heart",
        link: "/my-account-manager/movies-liked",
      },
      {
        id: 3,
        name: "Danh sách phim",
        key: "watch_list",
        icon: "fa-solid fa-bookmark",
        link: "/my-account-manager/watch-list/nothing",
      },
      {
        id: 4,
        name: "Lịch sử xem",
        key: "history",
        icon: "fa-solid fa-clock",
        link: "/my-account-manager/history",
      },
      {
        id: 5,
        name: "Cài đặt tài khoản",
        key: "settings",
        icon: "fa-solid fa-gear",
        link: "/my-account-manager/settings",
      },
    ],
    []
  );
  return (
    <React.Fragment>
      <div className="fixed top-0 items-center flex justify-center h-[100vh] w-full z-[39]">
        <div className="grid grid-cols-5 h-[700px] bg-[#fff4] rounded-2xl gap-2">
          <div className="col-span-1 h-full text-secondary rounded-2xl bg-light flex flex-col gap-5">
            {/* <div className="inline-flex items-center gap-2 px-3">
              <i className="fa-solid fa-circle text-green text-smd"></i>
              <p className="font-bold text-lg uppercase">Quản lý tài khoản</p>
            </div> */}
            <ul className="flex flex-col pl-5 py-4 gap-2">
              {navMenu &&
                navMenu.length > 0 &&
                navMenu.map((item, index) => (
                  <Link key={index} to={item.link}>
                    <li
                      className={`inline-flex items-center gap-3 cursor-pointer py-3 px-5 
                        hover:!bg-[#0002] rounded-l-2xl duration-299 transition-all ease-in-out w-full ${
                          pathname === item.link
                            ? "bg-primary hover:!bg-primary shadow-xl"
                            : "bg-transparent"
                        }`}
                    >
                      <i
                        className={`${item.icon} w-[20px] text-center text-xl`}
                      ></i>
                      <span className="font-semibold text-lg">{item.name}</span>
                    </li>
                  </Link>
                ))}
            </ul>
          </div>
          <div className="col-span-4 h-full">
            <Outlet />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MyAccountManager;
