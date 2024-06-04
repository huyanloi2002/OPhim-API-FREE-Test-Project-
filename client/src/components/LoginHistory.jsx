import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";

const LoginHistory = () => {
  const { details_user } = useSelector((state) => state.auth);

  const devicesData = [
    { id: 1, icon: "fa-solid fa-laptop", key: "Windows" },
    { id: 2, icon: "fa-solid fa-laptop", key: "macOS" },
    { id: 3, icon: "fa-solid fa-laptop-code", key: "Linux" },
    { id: 4, icon: "fa-solid fa-mobile-screen", key: "Android" },
    { id: 5, icon: "fa-solid fa-mobile-screen-button", key: "iOS" },
    { id: 6, icon: "fa-brands fa-chrome", key: "Chrome OS" },
    { id: 7, icon: "fa-regular fa-circle-question", key: "Unknown" },
  ];
  return (
    <React.Fragment>
      <div className="py-2 px-3 flex flex-col">
        <div className="inline-flex items-center gap-2">
          <i className="fa-solid fa-circle text-smd"></i>
          <p className="text-md uppercase font-bold">Lịch sử đăng nhập</p>
        </div>
        <div className="h-[285px] w-full flex flex-col overflow-y-scroll">
          {details_user?.login_history &&
            details_user?.login_history.map((item, index) => (
              <div
                key={index}
                className={`flex justify-between pr-4 py-2 border-2 border-t border-[#0002] first:border-t-0 last:border-b-0 border-x-0 cursor-default odd:bg-white even:bg-slate-50`}
                title={`${
                  item.device !== "Unknown" ? "Hợp lệ!" : "Chưa hợp lệ!"
                }`}
              >
                <div className="w-[20%] text-center">
                  {devicesData.map((device, index) => (
                    <i
                      className={`${
                        device.key === item.device && device.icon
                      } text-xxl40 text-[#0005]`}
                      key={index}
                    ></i>
                  ))}
                </div>
                <div className="w-[80%] flex justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="inline-flex gap-2 text-smd">
                      <p className="font-semibold">Thiết bị đăng nhập:</p>
                      <p className="font-bold italic">{item.device}</p>
                    </span>
                    <span className="inline-flex gap-2 text-smd">
                      <p className="font-semibold">Trình duyệt:</p>
                      <p className="font-bold italic">{item.browser}</p>
                    </span>
                    <span className="inline-flex gap-2 text-smd">
                      <p className="font-semibold">Địa chỉ IP:</p>
                      <p className="font-bold italic">{item.ip}</p>
                    </span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="inline-flex text-smd flex-col items-center">
                      <p className="font-semibold">Ngày đăng nhập:</p>
                      <p className="font-bold italic">{`${moment(
                        item.login_time
                      ).format("DD/MM/YYYY")}`}</p>
                      <p className="font-bold italic">{`(${moment(
                        item.login_time
                      ).fromNow()})`}</p>
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginHistory;
