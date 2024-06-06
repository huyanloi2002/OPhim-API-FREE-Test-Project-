import React, { useState } from "react";

const Dropdown = ({
  nameButton = "",
  children,
  isTriaggle = false,
  width = "w-full",
  height = "h-full",
}) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <React.Fragment>
      <div className="relative  button-dropdown">
        <button
          className={`${
            !isShow ? "text-light bg-secondary" : "text-light bg-primary"
          } px-2 py-1 text-smd rounded-full text-center shadow-xl transition-all duration-200 ease-out ${
            !isShow
              ? "hover:bg-primary hover:text-light"
              : "hover:bg-secondary hover:text-light"
          }`}
          onClick={() => setIsShow(!isShow)}
        >
          {nameButton}
        </button>
        {isShow && (
          <>
            {isTriaggle && (
              <div className="absolute w-[20px] top-[50px] right-[10px] border-b-[10px] border-b-secondary border-l-[10px] border-l-transparent bord border-r-[10px] border-r-transparent border-t-0 cursor-pointer"></div>
            )}
            <div
              className={`absolute top-[30px] right-[0] bg-transparent z-10  ${width} ${height} `}
            >
              <div className=" border bg-light border-[#0005] h-full w-full absolute right-0 rounded-xl shadow-2xl z-0">
                {children}
              </div>
            </div>
          </>
        )}
      </div>
    </React.Fragment>
  );
};

export default Dropdown;
