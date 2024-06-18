import React from "react";
import { FaCircle } from "react-icons/fa6";

export const ButtonSelect = ({ name, value, setValue, className }) => {
  return (
    <React.Fragment>
      <button
        value={value}
        onClick={(e) => setValue[1](e.target.value)}
        className={`border flex items-center gap-2 px-3 rounded-full w-[150px] h-[40px] text-md text-dark shadow-md ${className} ${
          value === setValue[0] &&
          "!bg-green-dark !hover:bg-green-dark text-light font-bold !border-light"
        }`}
      >
        <FaCircle
          className={`text-[5px] ${
            value === setValue[0] ? "text-light" : "text-slate-500"
          }`}
        />
        {name}
      </button>
    </React.Fragment>
  );
};

export const Button = ({ className = "", title = "Button" }) => {
  return (
    <React.Fragment>
      <button className={`${className} border text-dark`}>{title}</button>
    </React.Fragment>
  );
};
