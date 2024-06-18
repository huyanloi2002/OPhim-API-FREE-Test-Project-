import React from "react";
import { RiNotification3Line } from "react-icons/ri";
import { FaCircle } from "react-icons/fa6";

const Notification = () => {
  return (
    <React.Fragment>
      <div className="h-[50px] aspect-square rounded-full bg-opacity-white-0.2 flex items-center justify-center cursor-pointer relative">
        <RiNotification3Line className="text-light text-lg " />
        <FaCircle className="text-[#97e297] text-xsm absolute right-1 top-1" />
      </div>
    </React.Fragment>
  );
};

export default Notification;
