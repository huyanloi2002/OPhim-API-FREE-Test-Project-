import React, { useMemo } from "react";
import DropdownMenu from "./DropdownMenu";
import { useDispatch } from "react-redux";
import { logoutAction } from "../store/actions/authAction";

const Account = ({ info }) => {
  const dispatch = useDispatch();

  const handleLogout = (dispatch) => {
    dispatch(logoutAction());
  };

  const accountMenu = useMemo(
    () => [
      {
        id: 1,
        name: "Thông tin cá nhân",
        key: "personal_infomation",
        icon: "fa-solid fa-circle-user",
        link: "my-account-manager/personal-information",
        handle: () => {},
      },
      {
        id: 2,
        name: "Phim yêu thích",
        key: "movies_liked",
        icon: "fa-solid fa-heart",
        link: "my-account-manager/movies-liked",
        handle: () => {},
      },
      {
        id: 3,
        name: "Danh sách phim",
        key: "watch_list",
        icon: "fa-solid fa-bookmark",
        link: "my-account-manager/watch-list/nothing",
        handle: () => {},
      },
      {
        id: 4,
        name: "Lịch sử xem",
        key: "history",
        icon: "fa-solid fa-clock",
        link: "my-account-manager/history",
        handle: () => {},
      },
      {
        id: 5,
        name: "Cài đặt",
        key: "settings",
        icon: "fa-solid fa-gear",
        link: "my-account-manager/settings",
        handle: () => {},
      },
      {
        id: 6,
        name: "Đăng xuất",
        key: "log_out",
        icon: "fa-solid fa-right-from-bracket",
        link: "",
        handle: () => handleLogout(dispatch),
      },
    ],
    [dispatch]
  );

  return (
    <React.Fragment>
      <div className="account flex items-center px-3 h-full justify-center">
        <div className="inline-flex gap-2 items-center">
          <DropdownMenu data={accountMenu}>
            <img
              src={info?.avatar?.url}
              alt=""
              className="bg-light rounded-full w-[40px] aspect-square border-2 border-light cursor-pointer"
              title={`Xin chào, ${info?.email}`}
            />
          </DropdownMenu>
          <span className="flex flex-col gap-[0.05rem] justify-center cursor-default w-[110px] h-[40px]">
            <span className="inline-flex items-center justify-center gap-1 bg-light text-secondary rounded-tr-md rounded-bl-md text-center px-1 w-full h-[15px]">
              <i
                className={`fa-solid fa-circle text-[8px] ${
                  info?.is_active ? "text-green" : "text-red"
                } `}
              ></i>
              <span className="text-xsm font-bold">
                {info?.is_active ? "Hoạt động" : "Không hoạt động"}
              </span>
            </span>
            <p className="tracking-wide font-bold text-smd text-primary text-center truncate w-full h-[20px]">
              {info?.username}
            </p>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Account;
