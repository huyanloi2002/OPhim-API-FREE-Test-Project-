import React from "react";
import { GoChevronDown } from "react-icons/go";

const Account = () => {
  return (
    <React.Fragment>
      <div className="h-[50px] w-[235px] py-2 px-2  inline-flex flex-row gap-3 items-center bg-opacity-white-0.2 rounded-full cursor-pointer">
        <img
          src="https://th.bing.com/th/id/OIP.65OZqS55BRT8X-xndUwGPAAAAA?w=412&h=412&rs=1&pid=ImgDetMain"
          alt="avatar"
          className="h-full aspect-square object-cover rounded-full"
        />
        <div className="flex flex-col">
          <p className="text-md font-b700">Quang Huy</p>
          <p className="text-xmd text-opacity-white-0.6 ">
            huyanloi2002@gmail.com
          </p>
        </div>
        <GoChevronDown className="text-light text-xl" />
      </div>
    </React.Fragment>
  );
};

export default Account;
