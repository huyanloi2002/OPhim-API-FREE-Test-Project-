import React, { useMemo } from "react";
import DropdownMenu from "./DropdownMenu";
import { useDispatch } from "react-redux";
import { logoutAction } from "../store/users/authSlice";

const Account = ({ info }) => {
  const dispatch = useDispatch();

  const handleLogout = (dispatch) => {
    dispatch(logoutAction());
  };

  const accountMenu = useMemo(
    () => [
      {
        id: 1,
        name: "Tài khoản",
        key: "my_account",
        icon: "fa-solid fa-circle-user",
        handle: () => {},
      },
      {
        id: 2,
        name: "Phim yêu thích",
        key: "movies_liked",
        icon: "fa-solid fa-heart",
        handle: () => {},
      },
      {
        id: 3,
        name: "Danh sách phim",
        key: "watch_list",
        icon: "fa-solid fa-bookmark",
        handle: () => {},
      },
      {
        id: 4,
        name: "Lịch sử xem",
        key: "history",
        icon: "fa-solid fa-clock",
        handle: () => {},
      },
      {
        id: 5,
        name: "Cài đặt",
        key: "settings",
        icon: "fa-solid fa-gear",
        handle: () => {},
      },
      {
        id: 6,
        name: "Đăng xuất",
        key: "log_out",
        icon: "fa-solid fa-right-from-bracket",
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
                  info?.isActive ? "text-green" : "text-red"
                } `}
              ></i>
              <span className="text-xsm font-bold">
                {info?.isActive ? "Hoạt động" : "Không hoạt động"}
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
