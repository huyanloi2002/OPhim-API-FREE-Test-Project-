import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";

const AccountInformation = () => {
  const { user } = useSelector((state) => state.auth);

  /*
  createdAt: "2024-05-31T03:19:13.893Z";
  email: "huyanloi2002@gmail.com";
  isActive: true;
  password: "";
  role: "user";
  updatedAt: "2024-05-31T03:19:13.893Z";
  username: "huyanloi2002";
  */

  const roles = [
    { id: 1, name: "Người dùng", key: "user" },
    { id: 2, name: "Quản trị viên", key: "admin" },
  ];

  return (
    <React.Fragment>
      <div className="w-full h-full grid grid-rows-2">
        <div className="relative row-span-1 rounded-t-2xl w-full flex justify-center items-center">
          <div className="bg-purple h-full w-full rounded-t-2xl"></div>
          <img
            src={user?.avatar?.url}
            alt=""
            className="absolute top-[35% w-[120px] aspect-square rounded-full bg-light shadow-2xl border-4 border-light"
          />
        </div>
        <div className="row-span-1 flex justify-center items-center">
          <div className="flex flex-col gap-1">
            {
              <span className="inline-flex items-center">
                <p className="w-[200px] font-semibold text-md">
                  Trang thái hoạt động:
                </p>
                <span
                  className={`inline-flex gap-2 items-center px-2 py-1 rounded-full shadow-md ${
                    user?.is_active ? "bg-green-dark" : "bg-red"
                  }`}
                >
                  <i className="fa-solid fa-circle text-light text-sm"></i>
                  <p className="text-light font-bold text-md">
                    {user?.is_active ? "Đang hoạt động" : "Không hoạt dộng"}
                  </p>
                </span>
              </span>
            }
            <span className="inline-flex">
              <p className="w-[200px] font-semibold text-md">Email:</p>
              <p className="text-sm14 italic">{user?.email}</p>
            </span>
            <span className="inline-flex">
              <p className="w-[200px] font-semibold text-md">Tên của bạn:</p>
              <p className="text-sm14 italic">{user?.username}</p>
            </span>
            <span className="inline-flex">
              <p className="w-[200px] font-semibold text-md">Vai trò:</p>
              {roles.map((item, index) => (
                <p className="text-sm14 italic" key={index}>
                  {user?.role === item.key && `${item.name} (${item.key})`}
                </p>
              ))}
            </span>
            <span className="inline-flex">
              <p className="w-[200px] font-semibold text-md">
                Ngày tạo tài khoản:
              </p>
              <p className="text-sm14 italic">
                {user?.createdAt &&
                  `${moment(user?.createdAt).format("DD/MM/YYYY")} (${moment(
                    user?.createdAt
                  ).fromNow()})`}
              </p>
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AccountInformation;
