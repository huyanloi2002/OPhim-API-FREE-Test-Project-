import React from "react";

const Account = ({ info }) => {
  return (
    <React.Fragment>
      <div className="account flex items-center px-3 h-full justify-center">
        <div className="inline-flex gap-2 items-center">
          <img
            src={info?.avatar?.url}
            alt=""
            className="bg-light rounded-full w-[40px] aspect-square border-2 border-light cursor-pointer"
            title={`Xin chào, ${info?.email}`}
          />
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
